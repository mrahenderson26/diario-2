export default function Perfil(props) {
    return (
        <>
            <ul>
                <li>{props.nombre}</li>
                <li>{props.profesion}</li>
                <li>{props.empresa}</li>
            </ul>            
        </>
    )
}
