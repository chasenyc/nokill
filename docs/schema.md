# Schema Information

## Users
column name     |  data type     |  details
----------------|----------------|-----------------------
id              | integer        | not null, primary key
email           | string         | not null, indexed, unique
first name      | string         | not null
last name       | string         | not null
phone_number    | string         |
phone_verified  | boolean        | not null, default false
email_verified  | boolean        | not null, default false
is_shelter      | boolean        | not null, default false
pin             | string         | not null
password_digest | string         | not null
session_token   | string         | not null, indexed, unique

## Animals
column name     |  data type     |  details
----------------|----------------|-----------------------
id              | integer        | not null, primary key
user_id         | integer        | foreign key (references users)
name            | string         | not null
gender          | string         | not null, limit 1
birthday        | date           | not null
species         | string         | not null
breed_id        | integer        | foreign key (references breeds)
image           | attachment     |
reason_id       | integer        | foreign key (references reasons)
origin          | string         |
ownership_length| string         |
bitten          | boolean        | not null, default false
bite_details    | string         |
summary         | string         |

## Breeds
column name     |  data type     |  details
----------------|----------------|-----------------------
id              | integer        | not null, primary key
breed           | string         | not null, unique
species_id      | integer        | foreign key (references species)

## Species
column name     |  data type     |  details
----------------|----------------|-----------------------
id              | integer        | not null, primary key
name            | string         | not null, unique

## Reasons
column name     |  data type     |  details
----------------|----------------|-----------------------
id              | integer        | not null, primary key
description     | string         | not null, unique
