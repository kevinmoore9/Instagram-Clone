# Schema Information

### users

| column name     | data type | details                   |
| --------------- | -------   | ------------------------- |
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| profile_img_url | string    |                           |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |

### photos
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
| photo_id    | integer   | not null, foreign key (photos), indexed |
| user_id     | string    | not null, foreign key (users), indexed  |
| body        | string    | not null                                |

### likes

| column name | data type | details                                 |
| ----------- | --------- | --------------------------------------- |
| id          | integer   | not null, primary key                   |
| photo_id    | integer   | not null, foreign key (photos), indexed |
| user_id     | integer   | not null, foreign key (users), indexed  |
