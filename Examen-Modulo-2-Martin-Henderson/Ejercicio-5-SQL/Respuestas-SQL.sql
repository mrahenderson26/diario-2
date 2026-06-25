-- 1
SELECT * FROM clientes;

-- 2
SELECT * FROM productos;

-- 3
SELECT * FROM productos
WHERE precio > 50;

-- 4
SELECT nombre
FROM clientes
WHERE ciudad = "Madrid";

-- 5 
SELECT * FROM productos
ORDER BY precio DESC;

-- 6 
select nombre from clientes
ORDER BY nombre ASC;

-- 7
SELECT * FROM productos
WHERE stock < 10;

-- 8
SELECT * FROM clientes
WHERE email LIKE "%@gmail.com";

-- 9
INSERT INTO clientes
VALUES
(NULL, "Juan Bravo", "juan@bravo.com", "Londres"),
(NULL, "Marty McFly", "marty@mcfly.com", "Liverpool"),
(NULL, "Elon Musk", "elon@musk.com", "Sevilla");

-- 10
INSERT INTO productos
VALUES
(NULL, "AppleMac", 1499.99, 100),
(NULL, "Raspberry Pi", 150.00, 500),
(NULL, "Monitor Curvo", 799.99, 1000);

-- 11
UPDATE productos
SET precio = precio + 100
WHERE id = 3;

-- 12
UPDATE productos
SET stock = stock - 1
WHERE id = 3;

-- 13
DELETE FROM clientes
WHERE id = 8;

-- 14 
SELECT pedidos.id, clientes.nombre
FROM pedidos
JOIN clientes
ON pedidos.cliente_id = clientes.id;

-- 15
SELECT 
    lineas_pedido.id, 
    lineas_pedido.pedido_id, 
    productos.nombre, 
    lineas_pedido.cantidad
FROM lineas_pedido
JOIN productos
ON lineas_pedido.producto_id = productos.id;

-- 16
SELECT 
    pedidos.id,
    pedidos.fecha,
    clientes.nombre,
    COUNT(lineas_pedido.id)
FROM pedidos
JOIN clientes
ON pedidos.cliente_id = clientes.id
JOIN lineas_pedido
ON lineas_pedido.pedido_id = pedidos.id
GROUP BY pedidos.id, pedidos.fecha, clientes.nombre;

-- 17
SELECT COUNT(DISTINCT id)
FROM clientes;

-- 18
SELECT AVG(precio)
FROM productos;

-- 19 
SELECT nombre, precio
FROM productos
ORDER BY precio DESC
LIMIT 1;

-- 20
SELECT 
    clientes.nombre,
    COUNT(pedidos.id)
FROM clientes
LEFT JOIN pedidos
ON pedidos.cliente_id = clientes.id
GROUP BY clientes.id, clientes.nombre;