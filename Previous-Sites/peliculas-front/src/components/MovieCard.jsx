export default function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <div className="movie-header">
        <h3>{movie.titulo}</h3>
        <span className="rating">{movie.puntuacion}</span>
      </div>
      <p className="director">{movie.director} · {movie.año}</p>
      <p className="duration">{movie.duracion} min</p>
      <div className="genres">
        {movie.generos.map(g => (
          <span key={g} className="genre-tag">{g}</span>
        ))}
      </div>
      <div className="actors">
        <strong>Actores:</strong>{' '}
        {movie.actores.join(', ')}
      </div>
    </article>
  )
}