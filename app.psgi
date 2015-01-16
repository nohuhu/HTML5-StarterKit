use lib 'lib';

use Plack::Builder;

builder {
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

