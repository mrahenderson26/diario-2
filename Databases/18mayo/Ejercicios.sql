-- ## Nivel 1 — Consultas básicas (SELECT, WHERE,  ORDER BY)

--1.  Mostrar todas las películas dirigidas por “Stanley Kubrick”.
SELECT * from peliculas
WHERE director = "Stanley Kubrick";

--2. Mostrar las películas del género “Drama”.
SELECT * from peliculas
WHERE genero = "Drama";

--3. Listar las películas estrenadas después de 2015.
SELECT * from peliculas
WHERE anio > 2015;

--4. Mostrar las películas con una duración menor de 90 minutos.
SELECT * from peliculas
WHERE duracion < 90;

--5. Obtener las películas cuya nota sea exactamente 7.5.
SELECT * from peliculas
WHERE nota = 7.5;

--6. Mostrar títulos y años de las películas francesas.
SELECT titulo, anio from peliculas
WHERE pais = "Francia";

--7. Listar las películas ordenadas por año de estreno de más antigua a más reciente.
SELECT * from peliculas
ORDER BY anio ASC;

--8. Mostrar las películas ordenadas por nota de mayor a menor.
SELECT * from peliculas
ORDER BY nota DESC;

--9. Obtener las películas cuyo título empiece por la letra “E”.
SELECT * from peliculas
WHERE titulo LIKE "E%";

--10. Mostrar las películas cuyo director contenga la palabra “Scott”.
SELECT * from peliculas
WHERE director like "%scott%";

-- ## Nivel 2 — Filtros combinados y operadores

--1. Mostrar las películas españolas con nota superior a 7.
SELECT * FROM peliculas
WHERE nota > 7 AND pais = "España";

--2. Listar las películas de acción estrenadas entre 2010 y 2020.
SELECT * from peliculas
-- WHERE genero = "accion" AND anio > 2010 AND anio < 2020;
WHERE genero = "accion" 
AND anio BETWEEN 2010 AND 2020;

--3. Mostrar películas con duración entre 100 y 120 minutos.
SELECT * from peliculas
-- WHERE duracion > 100 AND duracion < 120;
WHERE duracion BETWEEN 100 AND 120
ORDER BY duracion DESC;

--4. Obtener películas que NO sean del género “Comedia”.
SELECT * from peliculas
WHERE genero not like "Comedia";

--5. Mostrar películas de Estados Unidos o Reino Unido.
SELECT * from peliculas
-- WHERE nota >= 8 and nota <= 9;
WHERE nota BETWEEN 8 AND 9;

--6. Listar películas cuya nota esté entre 8 y 9.
SELECT titulo, pais from peliculas
WHERE pais = "USA" OR pais = "UK";

--7. Mostrar películas estrenadas antes de 2000 y con nota superior a 8.
SELECT * from peliculas
WHERE anio < 2000 and nota > 8;

--8. Obtener películas cuyo título termine en “man”.
SELECT * from peliculas
WHERE titulo like "%man";

--9. Mostrar películas cuyo director no esté informado (NULL).
SELECT * from peliculas
WHERE director is NULL;

--10.Listar películas con una duración superior a 2 horas y media.
SELECT * from peliculas
WHERE duracion > 180;

-- ## Nivel 3 — Funciones de agregación (COUNT, AVG,  MAX, MIN)

--1. Contar cuántas películas hay en total.
SELECT COUNT(titulo) from peliculas

--2. Mostrar la nota media de todas las películas.
SELECT AVG(nota) from peliculas

--3. Obtener la duración máxima de las películas.
SELECT MAX(duracion) from peliculas

--4. Mostrar el año de la película más antigua.
SELECT MIN(anio) as peli_vieja from peliculas

--5. Contar cuántas películas hay por género.
SELECT 
COUNT(*) as cantidad, 
genero
from peliculas
WHERE genero is not NULL
GROUP BY genero
ORDER BY cantidad DESC;

--6. Mostrar la nota media de las películas españolas.
SELECT AVG(nota) from peliculas
where pais like "españa"

--7. Obtener cuántas películas tienen una nota superior a 8.
SELECT COUNT(*) from peliculas
where nota > 8

--8. Mostrar la duración media de las películas de drama.
SELECT AVG(duracion) from peliculas
where genero = "Drama"

--9. Obtener el número de directores distintos.
SELECT COUNT(DISTINCT director) 
as directores
from peliculas;

--10.Mostrar la nota más alta y la más baja registradas.
SELECT MAX(nota) as max, MIN(nota) as min from peliculas;

-- ## Nivel 4 — Agrupaciones y HAVING

--1. Mostrar cuántas películas ha dirigido cada director.
select director, count(*) as total_pelis 
from peliculas
GROUP BY director
ORDER BY total_pelis DESC

--2. Listar los géneros que tengan más de 5 películas.
select genero, count(*) as total
from peliculas
group by genero
having total > 5; -- Filters when things have already been grouped

--3. Mostrar la nota media por país.


--4. Obtener los directores cuya media de notas sea superior a 7.5.


--5. Mostrar los años en los que se estrenaron más de 3 películas.


--6. Listar países cuya duración media de películas supere los 120 minutos.


--7. Mostrar el número de películas por género ordenado de mayor a menor.


--8. Obtener los directores que hayan dirigido más de 2 películas.


--9. Mostrar géneros cuya nota media sea inferior a 6.


--10. Listar el número de películas por década.

-- ## Nivel 5 — Subconsultas y consultas más avanzadas

--1. Mostrar las películas con la nota más alta.
--2. Obtener las películas cuya duración sea mayor que la duración media.
--3. Mostrar las películas del mismo año que “Inception”.
--4. Listar las películas dirigidas por el director con más películas registradas.
--5. Mostrar las películas cuya nota sea superior a la media global.
--6. Obtener la película más larga de cada país.
--7. Mostrar los directores que tengan al menos una película con nota superior a 9.
--8. Obtener las películas más antiguas de cada género.
--9. Mostrar películas cuya duración sea igual a la mínima duración registrada.
--10 . Listar películas cuya nota esté por encima de la media de su género.

-- Nivel 6 — Retos extra
--1. Mostrar los 5 directores con mejor nota media.
--2. Obtener el género con más películas.
--3. Mostrar las películas ordenadas por diferencia respecto a la nota media.
--4.Crear un ranking de películas por nota dentro de cada género.
--6. Mostrar cuántos años han pasado desde el estreno de cada película.
--7. Obtener las películas estrenadas en años pares.
--8. Mostrar películas cuya duración esté por encima de la media de su país.
--9. Listar los países que tengan películas en todos los géneros existentes.
--10. Mostrar las películas que comparten director y año con otra película.
--11. Obtener las películas con la segunda nota más alta