-- CREATE DATABASE peliculas_varias_tablas
--     DEFAULT CHARACTER SET = 'utf8mb4';

-- use peliculas_varias_tablas;

-- create table paises(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nombre VARCHAR(90) not null UNIQUE,
--     bandera VARCHAR(90) default "Sin bandera"
-- );

-- create table directores(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nombre varchar(90) not null unique,
--     pais INT,

--     FOREIGN KEY (pais)
--         REFERENCES paises (id)
-- );

-- create table generos(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nombre varchar(90) not null unique
-- );

-- create table peliculas(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nombre varchar(90) not null unique,
--     genero int,
--     director int,
--     pais int,
--     año date,
--     duracion int,
--     nota dec (4, 2),
--     FOREIGN KEY(genero) REFERENCES genero(id),
--     FOREIGN KEY(director) REFERENCES director(id),
--     FOREIGN KEY(pais) REFERENCES paises(id)
-- );

-- insert into paises(nombre) values("España");

-- insert into directores(nombre, pais) values("Pedro Almodovar", 1);

-- select *
-- from directores

-- select *
-- from paises

-- insert into generos(nombre) values("Drama");

-- insert into peliculas(nombre, genero, director, pais, año, nota) values("Tacones lejanos", 1, 1, 1, 2001, 6.1);

-- select 
-- peliculas.nombre,
-- generos.nombre,
-- directores.nombre,
-- paises.nombre,
-- peliculas.año,
-- peliculas.nota

-- from peliculas

-- join generos on peliculas.genero = genero.id
-- join directores on peliculas.director = directores.id
-- join paises on peliculas.pais = paises.id

-- FIXED

-- CREATE DATABASE peliculas_varias_tablas
-- DEFAULT CHARACTER SET utf8mb4;

-- USE peliculas_varias_tablas;

-- CREATE TABLE paises(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nombre VARCHAR(90) NOT NULL UNIQUE,
--     bandera VARCHAR(90) DEFAULT ':-)'
-- );

-- CREATE TABLE directores(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nombre VARCHAR(90) NOT NULL UNIQUE,
--     pais INT,

--     FOREIGN KEY (pais)
--         REFERENCES paises(id)
-- );

-- CREATE TABLE generos(
--     nombre VARCHAR(90) NOT NULL UNIQUE
-- );

-- create table peliculas_genero(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     pelicula int,
--     genero int,
--     FOREIGN KEY (pelicula) REFERENCES peliculas (id)
--     FOREIGN KEY (genero) REFERENCES generos (id)
-- );

-- CREATE TABLE peliculas(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nombre VARCHAR(90) NOT NULL UNIQUE,    
--     director INT,
--     pais INT,
--     año YEAR,
--     duracion INT,
--     nota DECIMAL(4,2),

--     FOREIGN KEY (genero)
--         REFERENCES generos(id),

--     FOREIGN KEY (director)
--         REFERENCES directores(id),

--     FOREIGN KEY (pais)
--         REFERENCES paises(id)
-- );

-- INSERT INTO paises(nombre)
-- VALUES ('España');

-- INSERT INTO paises(nombre)
-- VALUES ('USA');

-- select * from paises;

-- INSERT INTO directores(nombre, pais)
-- VALUES ('Pedro Almodovar', 1);

-- INSERT INTO directores(nombre, pais)
-- VALUES ('Quentin Tarantino', 2);

-- select * from directores;

-- INSERT INTO generos(nombre)
-- VALUES ('Drama');

-- INSERT INTO generos(nombre)
-- VALUES ('Comedia');

-- INSERT INTO generos(nombre)
-- VALUES ('Melodrama');

-- INSERT INTO generos(nombre)
-- VALUES ('Bélico');

-- INSERT INTO peliculas(
--     nombre,
--     director,
--     pais,
--     año,
--     duracion,
--     nota
-- )
-- VALUES (
--     'Tacones lejanos',        
--     1,
--     1,
--     2001,
--     140,
--     6.10
-- );

-- INSERT INTO peliculas(
--     nombre,
--     director,
--     pais,
--     año,
--     duracion,
--     nota
-- )
-- VALUES (
--     'Malditos Bastardos',    
--     2,
--     3,
--     2002006,
--     120,
--     5.70
-- );

-- insert into generos (peliculas, generos) values(1, 2)
-- insert into generos (peliculas, generos) values(1, 3)
-- insert into generos (peliculas, generos) values(2, 1)
-- insert into generos (peliculas, generos) values(2, 4)

-- SELECT *
-- FROM directores;

-- SELECT *
-- FROM paises;

-- SELECT
--     peliculas.nombre,
--     generos.nombre,
--     directores.nombre,
--     paises.nombre,
--     peliculas.año,
--     peliculas.nota

-- FROM peliculas

-- JOIN generos
--     ON peliculas.genero = generos.id
-- JOIN directores
--     ON peliculas.director = directores.id
-- JOIN paises
--     ON peliculas.pais = paises.id;

-- JOSE CHANGES

drop database peliculas_varias_tablas IF EXISTS;

CREATE DATABASE peliculas_varias_tablas
DEFAULT CHARACTER SET utf8mb4;

USE peliculas_varias_tablas;

CREATE TABLE paises(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(90) NOT NULL UNIQUE,
    bandera VARCHAR(90) DEFAULT ':-)'
);

CREATE TABLE directores(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(90) NOT NULL UNIQUE,
    pais INT,

    FOREIGN KEY (pais)
        REFERENCES paises(id)
);

CREATE TABLE generos(
    nombre VARCHAR(90) NOT NULL UNIQUE
);

create table peliculas_genero(
    id INT AUTO_INCREMENT PRIMARY KEY,
    pelicula int,
    genero int
    FOREIGN KEY (pelicula) REFERENCES peliculas (id),
    FOREIGN KEY (genero) REFERENCES generos (id) 
);
 
CREATE TABLE peliculas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(90) NOT NULL UNIQUE,    
    director INT,
    pais INT,
    año YEAR,
    duracion INT,
    nota DECIMAL(4,2),

    FOREIGN KEY (genero)
        REFERENCES generos(id),

    FOREIGN KEY (director)
        REFERENCES directores(id),

    FOREIGN KEY (pais)
        REFERENCES paises(id)
); 

INSERT INTO paises(nombre)
VALUES ('España');

INSERT INTO paises(nombre)
VALUES ('USA');

select * from paises;

INSERT INTO directores(nombre, pais)
VALUES ('Pedro Almodovar', 1);

INSERT INTO directores(nombre, pais)
VALUES ('Quentin Tarantino', 2);

select * from directores;

INSERT INTO generos(nombre)
VALUES ('Drama');

INSERT INTO generos(nombre)
VALUES ('Comedia');

INSERT INTO generos(nombre)
VALUES ('Melodrama');

INSERT INTO generos(nombre)
VALUES ('Bélico');

INSERT INTO peliculas(
    nombre,
    director,
    pais,
    año,
    duracion,
    nota
)
VALUES (
    'Tacones lejanos',        
    1,
    1,
    2001,
    140,
    6.10
);

INSERT INTO peliculas(
    nombre,
    director,
    pais,
    año,
    duracion,
    nota
)
VALUES (
    'Malditos Bastardos',    
    2,
    3,
    2002006,
    120,
    5.70
);

insert into peliculas_generos(peliculas, generos) values(1, 2)
insert into peliculas_generos(peliculas, generos) values(1, 3)
insert into peliculas_generos(peliculas, generos) values(2, 1)
insert into peliculas_generos(peliculas, generos) values(2, 4)

SELECT *
FROM directores;

SELECT *
FROM paises;

SELECT
    peliculas.nombre,
    generos.nombre,
    directores.nombre,
    paises.nombre,
    peliculas.año,
    peliculas.nota

FROM peliculas

JOIN generos
    ON peliculas.genero = generos.id
JOIN directores
    ON peliculas.director = directores.id
JOIN paises
    ON peliculas.pais = paises.id;

select peliculas.nombre from peliculas
join peliculas_generos on peliculas.id = peliculas_generos.pelicula
join generos on generos.id = peliculas_generos.genero
where peliculas.id = 