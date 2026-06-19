select *
from municipios

select nombre, poblacion
from municipios

select nombre, poblacion
from municipios
where poblacion > 200000

select nombre, poblacion
from municipios
where poblacion between 50000 and 150000

select nombre, poblacion
from municipios
ORDER BY poblacion DESC

select nombre
from municipios
ORDER BY nombre ASC

select nombre, superficie_km2
from municipios
where superficie_km2 > 100

select nombre
from municipios
where nombre like "M%"

select nombre, longitud
from municipios
where longitud < 0

select nombre, poblacion
from municipios
ORDER BY poblacion desc limit 5

insert into municipios values(null, "burujon", 1, 1344, 28.21, 39.69, -4.30)

UPDATE municipios set poblacion = poblacion + 1;
where nombre = "burujon";

delete from municipios where nombre = "burujon";

-- TANDA 2

select municipios.nombre, provincias.nombre
from municipios
join provincias
on municipios.provincia_id = provincias.id

CREATE VIEW municipios_provincias_comunidades AS 
select m.nombre as Municipio, p.nombre as Provincia, c.nombre as Comunidad
from municipios m
join provincias p
on m.provincia_id = p.id
join comunidades_autonomas c
on p.comunidad_id = c.id

SELECT * from municipios_provincias_comunidades
where comunidad = "Madrid"

select municipios.nombre, comunidades_autonomas.nombre
from municipios
join provincias
on municipios.provincia_id = provincias.id
join comunidades_autonomas
on provincias.comunidad_id = comunidades_autonomas.id
where comunidades_autonomas.nombre like "%castilla%"

select municipios.nombre, provincias.nombre
from municipios
join provincias
on municipios.provincia_id = provincias.id
where provincias.nombre = "Madrid"

select provincias.nombre as Provincia, comunidades_autonomas.nombre as Comunidad
from provincias
join comunidades_autonomas
on provincias.comunidad_id = comunidades_autonomas.id
where comunidades_autonomas.nombre = "Andalucía"

SELECT provincias.nombre, COUNT(DISTINCT municipios.nombre) AS total_municipios
FROM municipios
JOIN provincias
    ON municipios.provincia_id = provincias.id
GROUP BY provincias.nombre;

SELECT provincias.nombre, SUM(DISTINCT municipios.poblacion) AS Poblacion
FROM municipios
JOIN provincias
    ON municipios.provincia_id = provincias.id
GROUP BY provincias.nombre
ORDER BY sum(municipios.poblacion) DESC
LIMIT 1;

SELECT provincias.nombre, SUM(DISTINCT municipios.poblacion) AS Poblacion
FROM municipios
JOIN provincias
    ON municipios.provincia_id = provincias.id
GROUP BY provincias.nombre
ORDER BY sum(municipios.poblacion) DESC
LIMIT 1;

select municipios.nombre, municipios.poblacion
from municipios 
join provincias 
on municipios.provincia_id = provincias.id
join comunidades_autonomas 
on provincias.comunidad_id = comunidades_autonomas.id
where comunidades_autonomas.nombre like "andalu%"
order by municipios.poblacion DESC

-- CHECK FOLLOWING THREE WITH CHAT-GPT

select municipios.nombre, max(municipios.superficie_km2), provincias.nombre
from municipios
join provincias on municipios.provincia_id = provincias.id
GROUP BY provincias.id
ORDER BY superficie_km2 DESC;

select provincia_id, max(superficie_km2), provincias.nombre
from municipios
join provincias on municipios.provincia_id = provincias.id
GROUP BY provincias.nombre
ORDER BY superficie_km2 DESC;

SELECT m.nombre, m.superficie_km2, p.nombre AS provincia
FROM municipios m
JOIN provincias p ON m.provincia_id = p.id
WHERE m.superficie_km2 = (
    SELECT MAX(m2.superficie_km2)
    FROM municipios m2
    WHERE m2.provincia_id = m.provincia_id
)
ORDER BY p.nombre;

-- CHECK ABOVE THREE WITH CHAT-GPT

select 
municipios.nombre, 
municipios.superficie_km2, 
municipios.poblacion, 
(municipios.poblacion / municipios.superficie_km2) as Densidad
from municipios
ORDER BY (municipios.poblacion / municipios.superficie_km2)

select 
municipios.nombre,
(municipios.poblacion / municipios.superficie_km2) as Densidad
from municipios
ORDER BY (municipios.poblacion / municipios.superficie_km2)

select 
nombre,
(poblacion / superficie_km2) as Densidad
from municipios
ORDER BY (poblacion / superficie_km2)
-- where nombre = "Toledo"

select 
nombre,
(poblacion / superficie_km2) as hab_km2
from municipios
ORDER BY (poblacion / superficie_km2)

select 
nombre, clasificación, (poblacion / superficie_km2) as hab_km2
from municipios
ORDER BY (poblacion / superficie_km2)

select nombre
    CASE
        when(poblacion < 10000) then "Rural"
        when(poblacion BETWEEN 10000 in 100000) then "Intermedio"
    ELSE "Urbano"
    END 
    AS clasificacion from municipios;

select concat("El municipio ", nombre, " tiene ", poblacion, "habitantes.") as texto from municipios;

select nombre, (superficie_km2 * 100) as superficie_has from municipios;

select nombre, (poblacion / 1000) as superficie_miles from municipios;

select nombre, (poblacion / superficie_km2) as hab_km2 from municipios
ORDER BY hab_km2 DESC;

select nombre, (max(poblacion) - min(poblacion)) from municipios;



















