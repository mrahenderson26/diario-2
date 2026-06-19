use reservas_express;

-- Plazas que tenemos disponibes
SELECT * FROM espacios
WHERE nombre = "sala dorada";

-- 1. Plazas que tenemos reservadas en el espacio sala dorada
SELECT clientes.nombre
FROM plazas
JOIN reservas ON plazas.id = reservas.plaza_id
JOIN clientes ON reservas.cliente_id = clientes.id

-- 2. Listar las plazas que tenemos libres



-- 3. Saber el numero de plazas reservadas



-- 4. Saber el numero de plazas libres


