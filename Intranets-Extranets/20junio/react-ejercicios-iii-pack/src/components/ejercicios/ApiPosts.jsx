import { useEffect, useState } from 'react';

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
    <section>
      <h3>API de publicaciones</h3>
      {cargando && <p>Cargando publicaciones...</p>}
      {error && <p>{error}</p>}
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            #{post.id} {post.title}
          </li>
        ))}
      </ol>
    </section>
  );
}
