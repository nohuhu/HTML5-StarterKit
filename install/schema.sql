PRAGMA foreign_keys = ON;

CREATE TABLE users (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    login VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    can_edit BOOLEAN NOT NULL DEFAULT 0, -- Permission checks are trivial
    last_login TIMESTAMP
);

-- Table: customers
-- This table holds all our customers.

CREATE TABLE customers (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, -- The primary key.
  name VARCHAR(255) NOT NULL UNIQUE, -- The customer name. Must be unique.
  external_id VARCHAR(64) NOT NULL, -- An additional, externally provided id, matchcode or reference for the customer
  last_change TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP -- The (automatically updated) timestamp of the last update to the customer.
);

CREATE TRIGGER update_customer_last_change AFTER UPDATE ON customers
FOR EACH ROW
BEGIN
  UPDATE customers SET last_change = CURRENT_TIMESTAMP WHERE id = old.id;
END;

-- Table: domains
-- This table holds all our domains.

CREATE TABLE domains (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, -- The primary key.
  customer_id INTEGER NOT NULL, -- The id of the customer this domain belongs to. Foreign key.
  name VARCHAR(255) NOT NULL UNIQUE, -- The domain name. Must be unique.
  last_change TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- The (automatically updated) timestamp of the last update to the domain.
  FOREIGN KEY (customer_id) REFERENCES customers (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TRIGGER update_domain_last_change AFTER UPDATE ON domains
FOR EACH ROW
BEGIN
  UPDATE domains SET last_change = CURRENT_TIMESTAMP WHERE id = old.id;
END;

-- Table: mailboxes
-- This table holds all our mailboxes.

CREATE TABLE mailboxes (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, -- The primary key.
  domain_id INTEGER NOT NULL, -- The id of the domain this mailbox belongs to. Foreign key.
  name VARCHAR(255) NOT NULL, -- The mailbox owner's name.
  localpart VARCHAR(255) NOT NULL UNIQUE, -- The localpart for this mailbox.
  username VARCHAR(255) NOT NULL, -- The username used to access this mailbox.
  password VARCHAR(255) NOT NULL, -- Hashed password to access this mailbox.
  is_ooo BOOLEAN NOT NULL DEFAULT 0, -- Flag to determine if mailbox is out of office.
  ooo_message TEXT, -- Out of office message for this mailbox.
  last_change TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- The (automatically updated) timestamp of the last update to the mailbox.
  FOREIGN KEY (domain_id) REFERENCES domains (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TRIGGER update_mailbox_last_change AFTER UPDATE ON mailboxes
FOR EACH ROW
BEGIN
  UPDATE mailboxes SET last_change = CURRENT_TIMESTAMP WHERE id = old.id;
END;

