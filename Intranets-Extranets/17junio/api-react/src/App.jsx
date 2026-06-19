import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("https://api-render-vvdo.onrender.com/")
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje));
  }, []);

  return (
    <>
      <h1>Consumiendo una API desde Render</h1>
      <p>{mensaje}</p>
    </>
  )
};

export default App;



