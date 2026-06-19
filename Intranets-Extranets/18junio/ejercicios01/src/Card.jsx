export default function Card({ productos }) {
    return (
        <>
            {productos.map((item) => (
                <ul key={item.id}>
                    <li>{item.nombre}</li>
                    <li>{item.precio}</li>
                </ul>
            ))}
        </>
    )
}

