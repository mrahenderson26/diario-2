DROP DATABASE IF EXISTS reservas_express;

CREATE DATABASE reservas_express;

USE reservas_express;

CREATE TABLE clientes (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(99) NOT NULL,
    email VARCHAR(59) NOT NULL,
    password VARCHAR(256) NOT NULL
);

INSERT INTO clientes VALUES(NULL, "Andrés", "email@address.com", "123456");
INSERT INTO clientes VALUES(NULL, "Pedro", "email@address.com", "123456");

CREATE TABLE salas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(99) NOT NULL UNIQUE,
    capacidad INT NOT NULL CHECK(capacidad > 0)
);

INSERT INTO salas
VALUES(NULL, "dorada", 25);
INSERT INTO salas
VALUES(NULL, "azul", 50);

CREATE TABLE plazas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(99) NOT NULL UNIQUE,
    sala_id INT NOT NULL,
    FOREIGN KEY (sala_id) REFERENCES salas(id)
);

CREATE TABLE reservas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    estado enum("pendiente", "anulada", "confirmada", "usada") DEFAULT "pendiente",
    plaza_id INT NOT NULL,
    cliente_id INT NOT NULL,
    fecha DATE DEFAULT (CURRENT_DATE),
    FOREIGN KEY (plaza_id) REFERENCES plazas(id),    
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);


