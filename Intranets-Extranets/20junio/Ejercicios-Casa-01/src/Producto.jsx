export default function Producto({productos}) {
    return (
        <>
            {productos.map((item) =>
                <ul key={item.id}>
                    <li>Producto: {item.nombre} </li>
                    <li>Precio: {item.precio} </li>
                </ul>
            )}
        </>
    )
}

