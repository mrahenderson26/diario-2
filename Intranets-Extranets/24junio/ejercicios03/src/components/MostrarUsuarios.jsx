import { useState, useEffect } from "react";
const VITE_API_URL = import.meta.env.VITE_API_URL;

export default function MostrarUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function obtenerUsuarios() {
            const response = await fetch(VITE_API_URL)
            const data = await response.json();
            console.log(data);
        }
        obtenerUsuarios();
    }, []);

    return (
        <>
        </>
    );
}