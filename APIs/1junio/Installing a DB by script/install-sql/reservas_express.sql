DROP DATABASE IF EXISTS reservas_express;
CREATE DATABASE reservas_express;
USE reservas_express;

CREATE TABLE clientes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(99) NOT NULL ,
    email VARCHAR(99) NOT NULL UNIQUE,
    password VARCHAR (256) NOT NULL
);
INSERT INTO clientes values
(null,"Andres","andres@email.com", "123456"),
(null,"Pedro","pedro@email.com", "123456"),
(null,"Claudia","claudia@email.com", "123456"),
(null,"Rosa María","rosi@email.com", "123456");
-- SELECT * FROM clientes;
CREATE TABLE espacios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(99) NOT NULL UNIQUE,
    ubicacion varchar(99),
    capacidad INT  NOT NULL  CHECK (capacidad > 0)
   
);
INSERT INTO espacios VALUES
(null,"sala dorada","Getafe",8),
(null,"sala azul", "Parla",45);
-- SELECT * FROM salas;
CREATE TABLE plazas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(99) NOT NULL UNIQUE,
    espacio_id INT NOT NULL,
    FOREIGN KEY (espacio_id)
    REFERENCES espacios(id)
   
);
INSERT INTO plazas VALUES
(null,"D1",1),
(null,"D2",1),
(null,"D3",1),
(null,"D4",1),
(null,"D5",1),
(null,"D6",1),
(null,"D7",1),
(null,"D8",1)

;

CREATE TABLE reservas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    estado enum("pendiente", "anulada","confirmada","usada") DEFAULT "pendiente",
    plaza_id INT NOT NULL,
    cliente_id INT NOT NULL,
    fecha DATE DEFAULT(CURRENT_DATE),
    FOREIGN KEY (plaza_id)
    REFERENCES plazas(id),
    FOREIGN KEY (cliente_id)
    REFERENCES clientes(id)
   
);
INSERT INTO reservas VALUES
(null, default, 1, 1, default ),
(null, default, 2, 1, default),
(null, default, 3, 1, default)
;


