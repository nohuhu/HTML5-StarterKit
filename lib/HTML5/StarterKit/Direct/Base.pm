package HTML5::StarterKit::Direct::Base;

use strict;
use warnings;

use Try::Tiny;

use HTML5::StarterKit::Schema;

# This hack will do for now
my $dsn = 'dbi:SQLite:data/db.sqlite';

my %std_params = (
    limit => 'rows',
    page  => 'page',
    sort  => 'order_by',
    start => 'offset',
);

sub read {
    my ($class, $table, %arg) = @_;
    
    my %attr;

    # Translate certain params into DBIC search attributes
    for my $std_param ( keys %std_params ) {
        if ( exists $arg{$std_param} ) {
            my $attr_name = $std_params{$std_param};
            $attr{$attr_name} = delete $arg{$std_param};
        }
    };
    
    my $schema = HTML5::StarterKit::Schema->connect($dsn);
    my $resultset = $schema->resultset($table);

    # Another hackish hack
    $resultset->result_class('DBIx::Class::ResultClass::HashRefInflator');
    
    my $results = $resultset->search({ %arg }, \%attr);
    
    return [ map { +{ $_->get_columns } } $results->all() ];
}

sub create {
    my ($class, $table, $records) = @_;

    # Client can send one record by itself, 2 or more in array.
    # There is an option to change that but it's a good idea to be defensive.
    $records = [$records] unless 'ARRAY' eq ref $records;

    my $resultset
        = HTML5::StarterKit::Schema->connect($dsn)->resultset($table);

    my @rows;

    # We don't abort the whole operation if one or more rows errors out;
    # client side data Store can handle partial success
    for my $record ( @$records ) {

        # The client will send new records with auto-generated ids,
        # which we need to preserve and return back to let the data Store
        # know that phantom records have been saved in the database.
        my $client_id = delete $record->{id};

        my $row;

        try {
            $row = $resultset->create($record);

            # Force refresh from the database (default values, triggers, etc)
            $row->discard_changes;
        }
        catch {
            $row = { _error => $_ };
        }
        finally {

            # Return the client-generated id to help it map records,
            # but only if we're creating. Update/delete are sending
            # real ids.
            $row->{clientId} = $client_id;
        };

        push @rows, $row;
    }

    my @data;

    for my $row ( @rows ) {
        my $row_data = 'HASH' eq ref $row ? $row : { $row->get_columns };
        $row_data->{clientId} = $row->{clientId};

        push @data, $row_data;
    }

    return \@data;
}

sub update {
    my ($class, $table, $records) = @_;

    $records = [$records] unless 'ARRAY' eq ref $records;

    my $resultset
        = HTML5::StarterKit::Schema->connect($dsn)->resultset($table);

    my @rows;

    for my $record ( @$records ) {
        try {
            my $row = $resultset->search({ id => $record->{id} })->single;

            if ( $row ) {
                $row->update($record);
                $row->discard_changes;

                push @rows, $row;
            }
        }
    }

    # Client data Store will expect id => clientId mapping, the same
    # as with create above; since we're not really changing row ids
    # while updating we just duplicate id as clientId here.
    my @data = map { +{ $_->get_columns, clientId => $_->id } } @rows;

    return \@data;
}

sub delete {
    my ($class, $table, $records) = @_;

    my $resultset
        = HTML5::StarterKit::Schema->connect($dsn)->resultset($table);

    $resultset->search($records)->delete_all;

    return { success => \1 };
}

1;

