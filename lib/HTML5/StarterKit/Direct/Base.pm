package HTML5::StarterKit::Direct::Base;

use strict;
use warnings;

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

1;

