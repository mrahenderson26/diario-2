import MovieCard from './MovieCard'

export default function MovieList({ movies }) {
  if (!movies.length) {
    return <p className="no-results">No se encontraron películas con esos filtros.</p>
  }

  return (
    <div className="movie-list">
      {movies.map((movie, i) => (
        <MovieCard key={`${movie.titulo}-${i}`} movie={movie} />
      ))}
    </div>
  )
}