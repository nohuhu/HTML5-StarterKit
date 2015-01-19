INSERT INTO users (login, password, email, can_edit) VALUES
    ('admin', 'adpexzg3FUZAk', 'admin@foo.com', 'true'), -- 'admin'
    ('user', 'us6EKZMmfBVwI', 'user@foo.com', 'false');  -- 'user'

INSERT INTO customers (name, external_id) VALUES
    ('Foo, Inc.', 'foo'), ('Bar Enterprises', 'bar');

INSERT INTO domains (customer_id, name) VALUES
    (1, 'foo.com'), (1, 'foo.org'), (2, 'bar.biz'), (2, 'barenterprises.com');

INSERT INTO mailboxes (domain_id, name, localpart, username, password) VALUES
    (1, 'John Doe', 'john.doe', 'john', 'foKntnEF3KSXA'), -- 'foo'
    (1, 'Jane Doe', 'jane.doe', 'jane', 'bab.5ZXQdbvEo'), -- 'bar'
    (1, 'Jack J. Doe', 'jack.doe', 'jack', 'baDJh2cLDb5yA'), -- 'baz'
    (2, 'Admin', 'admin', 'admin', 'bl3Js5PyaoUM2'); -- 'blerg'

