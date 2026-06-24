import {useState, useEffect} from "react"
export default function MostrarTiempo(){
    const [temperatura, setTemperatura]=useState(0)
    const [ciudad, setCiudad]= useState('')
   
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            const {latitude,longitude}= position.coords
            obtenerTiempo(latitude,longitude);
        },(error)=>{
            console.error('Error al obtener ubicación')
            obtenerTiempo();
        })
        //fetch(VITE_URL_TIEMPO)
        async function obtenerTiempo(latitude="40.41",longitude='-3.7036'){
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
        const data = await response.json()
        console.log(data.current.temperature_2m)
        console.log(data)
        setTemperatura(data.current.temperature_2m)
         const response2=  await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
         const data2= await response2.json()
          setCiudad(data2.display_name)

        }
        //obtenerTiempo();

    },[])
    return(<>
    <div>
       <p> {temperatura}ºC {ciudad}</p>
   
    </div>
    </>)
}