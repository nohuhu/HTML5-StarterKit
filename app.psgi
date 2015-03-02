use lib 'lib';

use Plack::Builder;
use Plack::Middleware::ExtDirect;
use Plack::Middleware::Session;
use Plack::Middleware::Session::Cookie;

use RPC::ExtDirect::Config;

# Ext Direct Action packages go here
use HTML5::StarterKit::Direct::Auth;
use HTML5::StarterKit::Direct::Customer;
use HTML5::StarterKit::Direct::Domain;
use HTML5::StarterKit::Direct::Mailbox;

builder {
    my $session_state = Plack::Session::State::Cookie->new(
        httponly => 1,
    );

    enable 'Session', state => $session_state;

    enable 'ExtDirect', config => RPC::ExtDirect::Config->new(
        api_path => '/api',
        router_path => '/router',
        poll_path => '/events',
        namespace => 'StarterKit',
        remoting_var => 'REMOTING_API',
        polling_var => 'POLLING_API',
        verbose_exceptions => 1,
    );

    enable 'ConditionalGET';
    enable 'Static', path => qr//, root => 'htdocs/', pass_through => 1;

    return sub {
        my ($env) = @_;

        my $path = $env->{PATH_INFO};

        return [302, ['Location' => '/index.html'], []]
            if !$path || $path eq '/';
        
        # Default
        return [404, ["Content-Type" => "text/plain"], ["Not Found"]];
    };
};

