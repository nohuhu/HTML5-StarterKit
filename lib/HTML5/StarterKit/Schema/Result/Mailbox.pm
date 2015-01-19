use utf8;
package HTML5::StarterKit::Schema::Result::Mailbox;

# Created by DBIx::Class::Schema::Loader
# DO NOT MODIFY THE FIRST PART OF THIS FILE

=head1 NAME

HTML5::StarterKit::Schema::Result::Mailbox

=cut

use strict;
use warnings;

use base 'DBIx::Class::Core';

=head1 COMPONENTS LOADED

=over 4

=item * L<DBIx::Class::InflateColumn::DateTime>

=back

=cut

__PACKAGE__->load_components("InflateColumn::DateTime");

=head1 TABLE: C<mailboxes>

=cut

__PACKAGE__->table("mailboxes");

=head1 ACCESSORS

=head2 id

  data_type: 'integer'
  is_auto_increment: 1
  is_nullable: 0

=head2 domain_id

  data_type: 'integer'
  is_foreign_key: 1
  is_nullable: 0

=head2 name

  data_type: 'varchar'
  is_nullable: 0
  size: 255

=head2 localpart

  data_type: 'varchar'
  is_nullable: 0
  size: 255

=head2 username

  data_type: 'varchar'
  is_nullable: 0
  size: 255

=head2 password

  data_type: 'varchar'
  is_nullable: 0
  size: 255

=head2 is_ooo

  data_type: 'boolean'
  default_value: false
  is_nullable: 0

=head2 ooo_message

  data_type: 'text'
  is_nullable: 1

=head2 last_change

  data_type: 'timestamp'
  default_value: current_timestamp
  is_nullable: 0

=cut

__PACKAGE__->add_columns(
  "id",
  { data_type => "integer", is_auto_increment => 1, is_nullable => 0 },
  "domain_id",
  { data_type => "integer", is_foreign_key => 1, is_nullable => 0 },
  "name",
  { data_type => "varchar", is_nullable => 0, size => 255 },
  "localpart",
  { data_type => "varchar", is_nullable => 0, size => 255 },
  "username",
  { data_type => "varchar", is_nullable => 0, size => 255 },
  "password",
  { data_type => "varchar", is_nullable => 0, size => 255 },
  "is_ooo",
  { data_type => "boolean", default_value => \"false", is_nullable => 0 },
  "ooo_message",
  { data_type => "text", is_nullable => 1 },
  "last_change",
  {
    data_type     => "timestamp",
    default_value => \"current_timestamp",
    is_nullable   => 0,
  },
);

=head1 PRIMARY KEY

=over 4

=item * L</id>

=back

=cut

__PACKAGE__->set_primary_key("id");

=head1 UNIQUE CONSTRAINTS

=head2 C<localpart_unique>

=over 4

=item * L</localpart>

=back

=cut

__PACKAGE__->add_unique_constraint("localpart_unique", ["localpart"]);

=head1 RELATIONS

=head2 domain

Type: belongs_to

Related object: L<HTML5::StarterKit::Schema::Result::Domain>

=cut

__PACKAGE__->belongs_to(
  "domain",
  "HTML5::StarterKit::Schema::Result::Domain",
  { id => "domain_id" },
  { is_deferrable => 0, on_delete => "CASCADE", on_update => "CASCADE" },
);


# Created by DBIx::Class::Schema::Loader v0.07042 @ 2015-01-15 22:59:29
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:hvwN62ghYGSFS9edWHi+XA


# You can replace this text with custom code or comments, and it will be preserved on regeneration
1;
