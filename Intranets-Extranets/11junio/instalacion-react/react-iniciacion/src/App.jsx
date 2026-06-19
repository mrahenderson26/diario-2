import './App.css'
import Video from './Video';

function App() {
  const nombre = "mi primer app de React";
  const numero = 64;

  return (
    <>
      <p>Estamos en {nombre} y tengo {numero} euros</p>
      
      <div class='galeria-videos'>

      <Video 
        url="https://www.youtube.com/embed/7iobxzd_2wY?si=9p0B64kPvF9XA"
      />
      <Video 
        url="https://www.youtube.com/embed/7iobxzd_2wY?si=9p0B64kPvFpoJ9XA"
      />
      <Video 
        url="https://www.youtube.com/embed/7iobxzd_2wY?si=9p0B64kPvFpoJ9XA"
      />

      </div>
    </>
  )
}

export default App