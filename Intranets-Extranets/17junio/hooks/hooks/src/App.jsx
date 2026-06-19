import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState("")
  const [visible, setVisible] = useState(true)
  const [nuevoHabitantes, setNuevoHabitantes] = useState("")

  const [datos, setDatos] = useState({
    nombre: "Parla",
    habitantes: 20000,
    provincia: "Madrid",
    metro: false
  })

  const [tareas, setTareas] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState("")

  return (
    <>
      <h1>Los hooks en React</h1>

      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
      />

      <br />
      <br />

      <p>{user}</p>

      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"}
      </button>

      {visible && <p>Mostramos este div</p>}

      <br />
      <br />

      <input
        type="text"
        placeholder="Cambiar número de habitantes"
        value={nuevoHabitantes}
        onChange={(e) => setNuevoHabitantes(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={() => setDatos({
          ...datos,
          habitantes: Number(nuevoHabitantes)
        })}
      >
        Cambiar número de habitantes
      </button>

      <ul>
        <li>{datos.nombre}</li>
        <li>{datos.habitantes}</li>
        <li>{datos.provincia}</li>
      </ul>

      <div>
        <input
          type="text"
          placeholder="Escribe tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />

        <button
          onClick={() => {
            setTareas([...tareas, nuevaTarea])
            setNuevaTarea("")
          }}
        >
          Añadir tarea
        </button>

        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>{tarea}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App