export default function Buscador() {

    return (

        <>
            <input list="peliculas" type="search" />

            <datalist id="peliculas">
                <option value="El Padrino">El Padrino</option>
                <option value="El Maquinista">El Maquinista</option>
                <option value="El Big Lebowski">El Big Lebowski</option>
            </datalist>
        </>

    )
}
