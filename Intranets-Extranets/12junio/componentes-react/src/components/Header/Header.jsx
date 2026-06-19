import "./Header.css";

export default function Header({ nombre, profesion, retrato }) {
    return (
        <>

            <header>
                <figure>
                    <img className="retrato" src={retrato} alt="" />
                </figure>
                <h1>{nombre}</h1>
                <h2>{profesion}</h2>
            </header>
            
        </>
    )
}
