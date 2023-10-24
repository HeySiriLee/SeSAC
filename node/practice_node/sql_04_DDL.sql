CREATE DATABASE DDL
DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

CREATE TABLE member (
    id varchar(20) primary key not null,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null, 
    email varchar(20),
    promotion varchar(2) default 'x', 
);