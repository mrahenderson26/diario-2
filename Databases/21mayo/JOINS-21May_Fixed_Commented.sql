DROP DATABASE IF EXISTS peliculas_varias_tablas;

CREATE DATABASE peliculas_varias_tablas
DEFAULT CHARACTER SET utf8mb4;

USE peliculas_varias_tablas;

-- =========================
-- 1. TABLE: countries
-- =========================

CREATE TABLE paises (
    -- PRIMARY KEY:
    -- This creates the unique identifier for each country.
    -- AUTO_INCREMENT means MySQL automatically gives each new country
    -- the next available number: 1, 2, 3, etc.
    -- PRIMARY KEY means this column uniquely identifies each row.
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    nombre VARCHAR(90) NOT NULL UNIQUE,
    bandera VARCHAR(90) DEFAULT ':-)'
);

-- =========================
-- 2. TABLE: directors
-- =========================

CREATE TABLE directores (
    -- PRIMARY KEY:
    -- This creates the unique identifier for each director.
    -- Every director gets one unique id.
    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(90) NOT NULL UNIQUE,

    -- FOREIGN KEY COLUMN:
    -- This column will store the id of the director's country.
    -- It is not the foreign key yet by itself; it becomes part of a
    -- foreign key relationship in the FOREIGN KEY statement below.
    pais_id INT,

    -- FOREIGN KEY:
    -- This says that directores.pais_id must match an existing paises.id.
    -- In other words, a director can only be linked to a country
    -- that already exists in the paises table.
    FOREIGN KEY (pais_id)
        REFERENCES paises(id)
);

-- =========================
-- 3. TABLE: genres
-- =========================

CREATE TABLE generos (
    -- PRIMARY KEY:
    -- This creates the unique identifier for each genre.
    -- We need this because other tables will refer to genres by id,
    -- not by writing the genre name repeatedly.
    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(90) NOT NULL UNIQUE
);

-- =========================
-- 4. TABLE: movies
-- =========================
-- Notice: there is NO genero column here.
-- A movie can have several genres, so genres are handled
-- through the linking table peliculas_generos.

CREATE TABLE peliculas (
    -- PRIMARY KEY:
    -- This creates the unique identifier for each movie.
    -- Other tables can now refer to a movie using peliculas.id.
    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(90) NOT NULL UNIQUE,

    -- FOREIGN KEY COLUMN:
    -- This will store the id of the movie's director.
    -- It will point to directores.id.
    director_id INT,

    -- FOREIGN KEY COLUMN:
    -- This will store the id of the movie's country.
    -- It will point to paises.id.
    pais_id INT,

    anio YEAR,
    duracion INT,
    nota DECIMAL(4,2),

    -- FOREIGN KEY:
    -- This links peliculas.director_id to directores.id.
    -- It means every director_id used in peliculas must already exist
    -- as an id in the directores table.
    FOREIGN KEY (director_id)
        REFERENCES directores(id),

    -- FOREIGN KEY:
    -- This links peliculas.pais_id to paises.id.
    -- It means every pais_id used in peliculas must already exist
    -- as an id in the paises table.
    FOREIGN KEY (pais_id)
        REFERENCES paises(id)
);

-- =========================
-- 5. LINKING TABLE: movies <-> genres
-- =========================
-- This table represents the many-to-many relationship:
--
-- One movie can have many genres.
-- One genre can belong to many movies.
--
-- This avoids putting several genres inside one cell, like:
-- 'Drama, Comedia, Melodrama'
--
-- Instead, each movie/genre relationship gets its own row.

CREATE TABLE peliculas_generos (
    -- FOREIGN KEY COLUMN:
    -- This stores the id of a movie.
    -- It will point to peliculas.id.
    pelicula_id INT NOT NULL,

    -- FOREIGN KEY COLUMN:
    -- This stores the id of a genre.
    -- It will point to generos.id.
    genero_id INT NOT NULL,

    -- COMPOSITE PRIMARY KEY:
    -- This primary key is made from TWO columns together:
    -- pelicula_id + genero_id.
    --
    -- This means the same movie/genre pair cannot be repeated.
    -- For example, this prevents inserting:
    -- (1, 2)
    -- (1, 2)
    --
    -- But it still allows:
    -- (1, 2)
    -- (1, 3)
    --
    -- That means movie 1 can have several different genres.
    PRIMARY KEY (pelicula_id, genero_id),

    -- FOREIGN KEY:
    -- This links peliculas_generos.pelicula_id to peliculas.id.
    -- It means every pelicula_id in this linking table must refer
    -- to a movie that already exists in peliculas.
    FOREIGN KEY (pelicula_id)
        REFERENCES peliculas(id),

    -- FOREIGN KEY:
    -- This links peliculas_generos.genero_id to generos.id.
    -- It means every genero_id in this linking table must refer
    -- to a genre that already exists in generos.
    FOREIGN KEY (genero_id)
        REFERENCES generos(id)
);

-- =========================
-- INSERT COUNTRIES
-- =========================
-- We do not insert id values manually here because id is an
-- AUTO_INCREMENT primary key. MySQL creates the ids automatically.

INSERT INTO paises(nombre)
VALUES 
('España'),
('USA');

SELECT * FROM paises;

-- =========================
-- INSERT DIRECTORS
-- =========================
-- Here, pais_id is a foreign key value.
--
-- Pedro Almodovar gets pais_id = 1, which refers to paises.id = 1.
-- Quentin Tarantino gets pais_id = 2, which refers to paises.id = 2.
--
-- These values must exist in the paises table first.

INSERT INTO directores(nombre, pais_id)
VALUES 
('Pedro Almodovar', 1),
('Quentin Tarantino', 2);

SELECT * FROM directores;

-- =========================
-- INSERT GENRES
-- =========================
-- We do not insert genre ids manually because generos.id is also
-- an AUTO_INCREMENT primary key.

INSERT INTO generos(nombre)
VALUES 
('Drama'),
('Comedia'),
('Melodrama'),
('Bélico');

SELECT * FROM generos;

-- =========================
-- INSERT MOVIES
-- =========================
-- director_id and pais_id are foreign key values.
--
-- director_id = 1 means this movie is linked to directores.id = 1.
-- pais_id = 1 means this movie is linked to paises.id = 1.
--
-- These referenced ids must already exist.

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

-- director_id = 2 links this movie to Quentin Tarantino.
-- pais_id = 2 links this movie to USA.

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

-- =========================
-- LINK MOVIES TO GENRES
-- =========================
-- This is where the many-to-many relationship is created.
--
-- Each row contains:
-- pelicula_id = the movie's primary key from peliculas
-- genero_id = the genre's primary key from generos
--
-- Tacones lejanos: Comedia + Melodrama
-- Malditos Bastardos: Drama + Bélico
--
-- Because pelicula_id and genero_id are foreign keys, the values
-- used here must already exist in their parent tables.
--
-- Because PRIMARY KEY (pelicula_id, genero_id) was set above,
-- the same movie/genre pair cannot be inserted twice.

INSERT INTO peliculas_generos(pelicula_id, genero_id)
VALUES 
(1, 2),
(1, 3),
(2, 1),
(2, 4);

SELECT * FROM peliculas_generos;

-- =========================
-- BASIC JOIN: one row per movie/genre combination
-- =========================
-- Because a movie can have several genres, the movie appears
-- once for each genre.
--
-- The JOIN conditions use the primary key / foreign key relationships:
--
-- peliculas.id = peliculas_generos.pelicula_id
--     primary key in peliculas matched to foreign key in peliculas_generos
--
-- peliculas_generos.genero_id = generos.id
--     foreign key in peliculas_generos matched to primary key in generos
--
-- peliculas.director_id = directores.id
--     foreign key in peliculas matched to primary key in directores
--
-- peliculas.pais_id = paises.id
--     foreign key in peliculas matched to primary key in paises

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

-- =========================
-- SAME QUERY USING ALIASES
-- =========================
-- This is shorter and more common in real SQL.
--
-- The primary key / foreign key relationships are the same as above;
-- only the table names have been shortened with aliases:
--
-- p  = peliculas
-- pg = peliculas_generos
-- g  = generos
-- d  = directores
-- pa = paises

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

-- =========================
-- SHOW ONE MOVIE WITH ITS GENRES
-- =========================
-- This query uses the movie's primary key, p.id, to select one movie.
-- It then follows the foreign keys in peliculas_generos to find
-- the genres linked to that movie.

SELECT
    p.nombre AS pelicula,
    g.nombre AS genero
FROM peliculas AS p
JOIN peliculas_generos AS pg
    ON p.id = pg.pelicula_id
JOIN generos AS g
    ON pg.genero_id = g.id
WHERE p.id = 1;

-- =========================
-- OPTIONAL: show genres grouped in one row per movie
-- =========================
-- This query still uses the same primary key / foreign key links.
-- GROUP_CONCAT simply combines several genre rows into one text value.
--
-- GROUP BY p.id works because p.id is the movie's primary key:
-- each p.id identifies one specific movie.

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