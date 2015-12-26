# Schema Information

## Owners
column name     |  data type     |  details
----------------|----------------|-----------------------
id              | integer        | not null, primary key
email           | string         | not null, indexed, unique
first name      | string         | not null
last name       | string         | not null
phone_number    | string         |
phone_verified  | boolean        | not null, default false
email_verified  | boolean        | not null, default false
pin             | string         | not null
password_digest | string         | not null
session_token   | string         | not null, indexed, unique

## Shelters
column name     |  data type     |  details
----------------|----------------|-----------------------
id              | integer        | not null, primary key
email           | string         | not null, indexed, unique
email_verified  | boolean        | not null, default false
password_digest | string         | not null
session_token   | string         | not null, indexed, unique
