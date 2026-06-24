import { useState, useEffect } from 'react';

export default function MostrarTiempo() {
    const [temperatura, setTemperatura] = useState(null);
    const [ciudad, setCiudad] = useState(null);

    useEffect(() => {
        async function obtenerTiempo(latitudeParam, longitudeParam) {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitudeParam}&longitude=${longitudeParam}&current=temperature_2m`
            );

            const data = await response.json();
            setTemperatura(data.current.temperature_2m);

            const response2 = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitudeParam}&lon=${longitudeParam}`
            );

            const data2 = await response2.json();
            setCiudad(data2.display_name);
        }

        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            obtenerTiempo(latitude, longitude);
        });
    }, []);

    return (
        <>
            {temperatura !== null
                ? `La temperatura es de ${temperatura}ºC y la ciudad es ${ciudad}`
                : 'Cargando temperatura...'}
        </>
    );
}
