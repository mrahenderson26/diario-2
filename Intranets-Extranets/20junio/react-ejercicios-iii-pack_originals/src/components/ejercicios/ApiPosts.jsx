import { useEffect, useState } from 'react';
import './ApiPosts.css';

export default function ApiPosts() {
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // La función es async, pero se declara dentro porque useEffect no debe ser async directamente.
    async function obtenerPosts() {
      try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const datos = await respuesta.json();

        // Guardamos solo 10 para que la tarjeta no se llene con 100 resultados.
        setPosts(datos.slice(0, 10));
      } catch (error) {
        setError('No se pudieron cargar las publicaciones.');
      } finally {
        // finally se ejecuta tanto si el fetch sale bien como si falla.
        setCargando(false);
      }
    }

    obtenerPosts();
  }, []);

  return (
    <article className="api-posts-card">
      <h3>8. API de publicaciones</h3>
      <p>Muestra el id y el título de los primeros 10 posts.</p>

      {cargando && <p>Cargando publicaciones...</p>}
      {error && <p className="api-posts-error">{error}</p>}

      <ol className="post-list">
        {posts.map((post) => (
          // key ayuda a React a identificar cada elemento cuando cambia la lista.
          <li key={post.id}>
            <span>#{post.id}</span> {post.title}
          </li>
        ))}
      </ol>
    </article>
  );
}
