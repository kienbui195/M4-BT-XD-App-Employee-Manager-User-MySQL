create database if not exists dbtest;
    use dbtest;

create table if not exists employees (
    id int auto_increment primary key,
    name varchar(255),
    country varchar(255),
    department varcher(255),
    salary int
);