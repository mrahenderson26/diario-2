import BarraProgreso from "../BarraProgreso";

export default function Main() {
    const datos = {
        datosInteres: [
            "Carnet B1",
            "Coche propio",
            "Don de gentes"
        ]
    }

    skills: [
        {
            skill: "html",
            value: "89",
            color: "success"
        },
        {
            skill: "css",
            value: "70",
            color: "info"
        },
        {
            skill: "js",
            value: "60",
            color: "warning"
        }
    ]

    return (
        <>
            <div className="container">

                <section>
                    <h2>Datos Personales</h2>

                </section>

                <section>
                    <h2>Vida Académica</h2>

                </section>

                <section>
                    <h2>Experienca Profesional</h2>

                </section>

                <section>
                    <h2>Otros Datos</h2>
                    <ul>
                        {
                            datos.datosInteres.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>

                </section>

                <section>
                    <h2>Skills</h2>
                    <ul>
                        {
                            datos.skills.map((item, index) => (
                                <BarraProgreso
                                    key={index}
                                    skill={item.skill}
                                    value={item.value}
                                    color={item.color}
                                />
                            ))
                        }
                    </ul>

                </section>

            </div>
        </>
    )
}