use utf8;
package HTML5::StarterKit::Schema::Result::User;

# Created by DBIx::Class::Schema::Loader
# DO NOT MODIFY THE FIRST PART OF THIS FILE

=head1 NAME

HTML5::StarterKit::Schema::Result::User

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

=head1 TABLE: C<users>

=cut

__PACKAGE__->table("users");

=head1 ACCESSORS

=head2 id

  data_type: 'integer'
  is_auto_increment: 1
  is_nullable: 0

=head2 login

  data_type: 'varchar'
  is_nullable: 0
  size: 255

=head2 password

  data_type: 'varchar'
  is_nullable: 0
  size: 255

=head2 email

  data_type: 'varchar'
  is_nullable: 0
  size: 255

=head2 can_edit

  data_type: 'boolean'
  default_value: false
  is_nullable: 0

=head2 last_login

  data_type: 'timestamp'
  is_nullable: 1

=cut

__PACKAGE__->add_columns(
  "id",
  { data_type => "integer", is_auto_increment => 1, is_nullable => 0 },
  "login",
  { data_type => "varchar", is_nullable => 0, size => 255 },
  "password",
  { data_type => "varchar", is_nullable => 0, size => 255 },
  "email",
  { data_type => "varchar", is_nullable => 0, size => 255 },
  "can_edit",
  { data_type => "boolean", default_value => \"false", is_nullable => 0 },
  "last_login",
  { data_type => "timestamp", is_nullable => 1 },
);

=head1 PRIMARY KEY

=over 4

=item * L</id>

=back

=cut

__PACKAGE__->set_primary_key("id");

=head1 UNIQUE CONSTRAINTS

=head2 C<login_unique>

=over 4

=item * L</login>

=back

=cut

__PACKAGE__->add_unique_constraint("login_unique", ["login"]);


# Created by DBIx::Class::Schema::Loader v0.07042 @ 2015-01-15 22:59:29
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:RUlnlH90+bBE/fbgFFNIRQ


# You can replace this text with custom code or comments, and it will be preserved on regeneration
1;
