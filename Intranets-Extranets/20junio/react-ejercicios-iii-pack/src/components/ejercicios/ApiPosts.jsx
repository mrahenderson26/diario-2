import { useEffect, useState } from 'react';

export default function ApiPosts() {
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function obtenerPosts() {
      try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const datos = await respuesta.json();

        setPosts(datos.slice(0, 10));
      } catch (error) {
        setError('No se pudieron cargar las publicaciones.');
      } finally {
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
