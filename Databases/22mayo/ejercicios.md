1 — Consultas básicas (SELECT, WHERE, ORDER BY)
Aprender a consultar e insertar información sencilla de una tabla.

Mostrar todos los municipios registrados en la base de datos.
Mostrar únicamente el nombre y la población de todos los municipios.
Mostrar los municipios con más de 200000 habitantes.
Mostrar los municipios cuya población esté entre 50000 y 150000 habitantes.
Mostrar los municipios ordenados por población de mayor a menor.
Mostrar las provincias ordenadas alfabéticamente.
Mostrar los municipios cuya superficie sea mayor de 100 km².
Mostrar los municipios que comienzan por la letra “M”.
Mostrar los municipios cuya longitud sea negativa.
Mostrar los 5 municipios más poblados.


2 — Algunos  insert, update y delete
Insertar dos nuevos municipios inventados desde SQL.
Actualizar la población de un municipio.
Eliminar un municipio concreto.


3 — Relaciones entre tablas (JOIN)
Comprender las claves foráneas y combinar información de varias tablas.

Mostrar el nombre del municipio y el nombre de su provincia.
Mostrar todos los municipios junto con su provincia y comunidad autónoma.
Mostrar todos los municipios pertenecientes a Castilla-La Mancha.
Mostrar todos los municipios de la provincia de Madrid.
Mostrar las provincias que pertenecen a Andalucía.
Mostrar el número de municipios que tiene cada provincia.
Mostrar la población total de cada provincia.
Mostrar la provincia con más población acumulada.
Mostrar los municipios de Andalucía ordenados por población.
Mostrar el municipio con mayor superficie de cada provincia.


4 — Consultas avanzadas básicas (GROUP BY, funciones y subconsultas)
Trabajar agrupaciones, estadísticas y consultas algo más complejas.

Mostrar todos los municipios registrados en la base de datos.
Calcular la población media de todos los municipios.
Mostrar la población media por provincia.
Mostrar las provincias cuya población media sea superior a 150000 habitantes.
Mostrar el municipio más poblado de toda la base de datos.
Mostrar el municipio menos poblado de cada provincia.
Mostrar cuántos municipios hay en cada comunidad autónoma.
Mostrar la suma total de superficie por provincia.
Mostrar las comunidades autónomas que tengan más de una provincia registrada.
Mostrar los municipios cuya población sea superior a la media total.
Mostrar la diferencia entre el municipio más poblado y el menos poblado.


5- CAMPOS CALCULADOS (SQL práctico)
Que el alumno entienda que MySQL puede generar información derivada sin tocar Node.js.

Mostrar cada municipio con su densidad de población. (población / superficie_km2)
Mostrar el nombre del municipio y una columna llamada: “habitantes_por_km2”
Mostrar los municipios con una columna calculada llamada:
“clasificación”
Condición:
< 10000 → “rural”
10000–100000 → “intermedio”
100000 → “urbano”


Mostrar el nombre del municipio junto con su población en formato: “El municipio X tiene Y habitantes”
Mostrar los municipios con una columna que calcule:superficie en hectáreas (km² × 100)
Mostrar los municipios con una columna: población en miles (población / 1000)
Mostrar los municipios ordenados por densidad de población (calculada).
Mostrar la diferencia entre:
el municipio más poblado de la tabla
el menos poblado


6 — VISTAS (VIEW)
Objetivo
Enseñar a “preparar datos” para el backend.

Crear una vista llamada:
vista_municipios_basica
Debe mostrar:
municipio
provincia
población
Crear una vista:
vista_municipios_completa
Debe incluir:
municipio
provincia
comunidad autónoma
población
superficie
Crear una vista con campo calculado:
vista_municipios_densidad
Debe incluir:
municipio
población
superficie
densidad de población
Consultar la vista vista_municipios_densidad y mostrar solo municipios con densidad > 1000. Ordenar la vista de densidad de mayor a menor.
Crear una vista de resumen por provincia:
provincia
número de municipios
población total
Usar una vista desde Node.js:
hacer un SELECT a la vista
devolver JSON en Express
