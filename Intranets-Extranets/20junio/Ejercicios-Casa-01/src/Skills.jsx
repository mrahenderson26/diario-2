export default function Skills({ tecnologias }) {
    return (
        <>
            <ul>
                {tecnologias.map((item, index) => (
                    <li key={index}> {item} </li>
                ))}
            </ul>
        </>
    )
}
