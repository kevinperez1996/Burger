
DROP DATABASE IF EXISTS Burgers_db;

CREATE DATABASE Burgers_db;

USE Burgers_db;

CREATE TABLE burger (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (100) NOT NULL,
    devoured BOOLEAN DEFAULT false, 
    PRIMARY KEY (id)

);