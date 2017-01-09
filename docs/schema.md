# Schema Information

### users

| column name     | data type | details                   |
| --------------- | -------   | ------------------------- |
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |


### images
| column name | data type | details                                |
| ----------- | --------- | ---------------------------------------|
| id          | integer   | not null, primary key                  |
| user_id     | integer   | not null, foreign key (users), indexed |
| image_url   | string    | not null                               |
| caption     | string    |                                        |

### comments
| column name | data type | details                                 |
| ----------- | --------- | ----------------------------------------|
| id          | integer   | not null, primary key                   |
| image_id    | integer   | not null, foreign key (images), indexed |
| user_id     | string    | not null, foreign key (users), indexed  |
| body        | string    | not null                                |

### likes

| column name | data type | details                                 |
| ----------- | --------- | --------------------------------------- |
| id          | integer   | not null, primary key                   |
| image_id    | integer   | not null, foreign key (images), indexed |
| user_id     | integer   | not null, foreign key (users), indexed  |
