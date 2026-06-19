import Card from "./Card"

export default function Content({ tecnologias, productos }) {
    return (
        <>
            <p>Bienvenido a mi aplicación</p>

            <ul>
                {tecnologias.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <section>
                <Card productos={productos} />
            </section>
        </>
    )
}
