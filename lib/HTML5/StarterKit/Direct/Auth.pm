package HTML5::StarterKit::Direct::Auth;

use strict;
use warnings;

use RPC::ExtDirect Action => 'Auth';

use HTML5::StarterKit::Schema;

my $dsn = 'dbi:SQLite:data/db.sqlite';

sub login : ExtDirect(params => [qw/username password/], env_arg => 'env') {
    my ($class, %arg) = @_;

    my $username = $arg{username};
    my $password = $arg{password};

    return { success => \0, error => 'Invalid username' }
        unless defined $username;

    my $user = eval {
        my $schema = HTML5::StarterKit::Schema->connect($dsn);
        my $rs     = $schema->resultset('User');
        $rs->search({ login => $username })->single();
    };

    return { success => \0, error => $@ } if $@;

    # Usually it is a bad idea to return an error like that
    # in production environment; however it is really helpful
    # to have meaningful error messages when developing and
    # debugging the code.
    return { success => \0, error => 'User not found' }
        unless $user;

    my $pwd_digest = $user->password;

    return { success => \0, error => 'Invalid password' }
        unless crypt($password, $pwd_digest) eq $pwd_digest;

    my $last_login = time;

    $user->update({ last_login => $last_login });

    # This method deals with the session hashref directly which is
    # an exception to the general rule.
    my $session = $arg{env}->{'psgix.session'};

    # This should be somewhat more advanced.
    $session->{username}  = $username;
    $session->{last_auth} = $last_login;

    $arg{env}->{'psgix.session.options'}->{change_id} = 1;

    return {
        success    => \1,
        email      => $user->email,
        can_edit   => $user->can_edit eq 'true' ? \1 : \0,
        last_login => $last_login,
    };
}

sub logout : ExtDirect(0, env_arg => 1) {
    my ($env) = @_;

    $env->{'psgix.session.options'}->{expire} = 1;

    return { success => \1 };
}

1;

