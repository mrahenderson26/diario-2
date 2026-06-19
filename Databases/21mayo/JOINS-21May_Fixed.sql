DROP DATABASE IF EXISTS peliculas_varias_tablas;

CREATE DATABASE peliculas_varias_tablas
DEFAULT CHARACTER SET utf8mb4;

USE peliculas_varias_tablas;

CREATE TABLE paises (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(90) NOT NULL UNIQUE,
    bandera VARCHAR(90) DEFAULT ':-)'
);

CREATE TABLE directores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(90) NOT NULL UNIQUE,
    pais_id INT,

    FOREIGN KEY (pais_id)
        REFERENCES paises(id)
);

CREATE TABLE generos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(90) NOT NULL UNIQUE
);

CREATE TABLE peliculas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(90) NOT NULL UNIQUE,
    director_id INT,
    pais_id INT,
    anio YEAR,
    duracion INT,
    nota DECIMAL(4,2),

    FOREIGN KEY (director_id)
        REFERENCES directores(id),

    FOREIGN KEY (pais_id)
        REFERENCES paises(id)
);

CREATE TABLE peliculas_generos (
    pelicula_id INT NOT NULL,
    genero_id INT NOT NULL,

    PRIMARY KEY (pelicula_id, genero_id),

    FOREIGN KEY (pelicula_id)
        REFERENCES peliculas(id),

    FOREIGN KEY (genero_id)
        REFERENCES generos(id)
);

INSERT INTO paises(nombre)
VALUES 
('España'),
('USA');

SELECT * FROM paises;

INSERT INTO directores(nombre, pais_id)
VALUES 
('Pedro Almodovar', 1),
('Quentin Tarantino', 2);

SELECT * FROM directores;

INSERT INTO generos(nombre)
VALUES 
('Drama'),
('Comedia'),
('Melodrama'),
('Bélico');

SELECT * FROM generos;

INSERT INTO peliculas(
    nombre,
    director_id,
    pais_id,
    anio,
    duracion,
    nota
)
VALUES (
    'Tacones lejanos',
    1,
    1,
    1991,
    140,
    6.10
);

INSERT INTO peliculas(
    nombre,
    director_id,
    pais_id,
    anio,
    duracion,
    nota
)
VALUES (
    'Malditos Bastardos',
    2,
    2,
    2009,
    120,
    5.70
);

SELECT * FROM peliculas;

INSERT INTO peliculas_generos(pelicula_id, genero_id)
VALUES 
(1, 2),
(1, 3),
(2, 1),
(2, 4);

SELECT * FROM peliculas_generos;

SELECT
    peliculas.nombre AS pelicula,
    generos.nombre AS genero,
    directores.nombre AS director,
    paises.nombre AS pais,
    peliculas.anio,
    peliculas.duracion,
    peliculas.nota
FROM peliculas
JOIN peliculas_generos
    ON peliculas.id = peliculas_generos.pelicula_id
JOIN generos
    ON peliculas_generos.genero_id = generos.id
JOIN directores
    ON peliculas.director_id = directores.id
JOIN paises
    ON peliculas.pais_id = paises.id
ORDER BY peliculas.id, generos.nombre;

SELECT
    p.nombre AS pelicula,
    g.nombre AS genero,
    d.nombre AS director,
    pa.nombre AS pais,
    p.anio,
    p.duracion,
    p.nota
FROM peliculas AS p
JOIN peliculas_generos AS pg
    ON p.id = pg.pelicula_id
JOIN generos AS g
    ON pg.genero_id = g.id
JOIN directores AS d
    ON p.director_id = d.id
JOIN paises AS pa
    ON p.pais_id = pa.id
ORDER BY p.id, g.nombre;

SELECT
    p.nombre AS pelicula,
    g.nombre AS genero
FROM peliculas AS p
JOIN peliculas_generos AS pg
    ON p.id = pg.pelicula_id
JOIN generos AS g
    ON pg.genero_id = g.id
WHERE p.id = 1;

SELECT
    p.nombre AS pelicula,
    d.nombre AS director,
    pa.nombre AS pais,
    p.anio,
    p.nota,
    GROUP_CONCAT(g.nombre ORDER BY g.nombre SEPARATOR ', ') AS generos
FROM peliculas AS p
JOIN peliculas_generos AS pg
    ON p.id = pg.pelicula_id
JOIN generos AS g
    ON pg.genero_id = g.id
JOIN directores AS d
    ON p.director_id = d.id
JOIN paises AS pa
    ON p.pais_id = pa.id
GROUP BY
    p.id,
    p.nombre,
    d.nombre,
    pa.nombre,
    p.anio,
    p.nota
ORDER BY p.id;