SELECT * FROM peliculas;

SELECT * 
FROM peliculas
WHERE anio > 2020;

SELECT titulo, director 
FROM peliculas

SELECT titulo 
FROM peliculas
WHERE director = "Ridley Scott";

SELECT titulo, anio
FROM peliculas
WHERE director LIKE "%Nol%" AND anio > 2010
ORDER BY anio DESC;

SELECT titulo, anio, genero
FROM peliculas
WHERE director LIKE "%Nol%" 
AND anio > 2010
AND genero <> "accion";

SELECT COUNT(*) FROM peliculas;

SELECT COUNT(*) FROM peliculas
WHERE director like "%ridl%"