package HTML5::StarterKit::Direct::Customer;

use strict;
use warnings;

use base 'HTML5::StarterKit::Direct::Base';

my $TABLE = 'Customer';

use RPC::ExtDirect Action => $TABLE;

# TODO Auto-generate CRUD methods off of the schema
sub read : ExtDirect(params => [], strict => 0) {
    return shift->SUPER::read($TABLE, @_);
}

sub create : ExtDirect(params => []) {
    return shift->SUPER::create($TABLE, @_);
}

sub update : ExtDirect(params => []) {
    return shift->SUPER::update($TABLE, @_);
}

sub delete : ExtDirect(params => []) {
    return shift->SUPER::delete($TABLE, @_);
}

1;

