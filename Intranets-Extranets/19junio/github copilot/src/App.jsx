import { useMemo, useState } from 'react';
import peliculas from '../peliculas.json';

const allGenres = ['Todas', ...new Set(peliculas.flatMap((movie) => movie.genre))];

function formatMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;

  if (hours === 0) {
    return `${minutes} min`;
  }

  return `${hours} h ${remaining.toString().padStart(2, '0')} min`;
}

function MovieCard({ movie }) {
  return (
    <article className="card movie-card h-100 border-0 shadow-sm overflow-hidden">
      <div className="poster-wrap">
        <img src={movie.poster} className="movie-poster" alt={`Póster de ${movie.title}`} />
      </div>
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-2">
          <div>
            <h2 className="h5 mb-1">{movie.title}</h2>
            <p className="text-secondary mb-0">{movie.year} · {movie.director}</p>
          </div>
          <span className="badge text-bg-dark rating-badge">{movie.rating.toFixed(1)}</span>
        </div>

        <p className="movie-synopsis flex-grow-1">{movie.synopsis}</p>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {movie.genre.map((genre) => (
            <span key={genre} className="badge rounded-pill text-bg-light genre-pill">
              {genre}
            </span>
          ))}
        </div>

        <dl className="row small mb-0 movie-meta">
          <dt className="col-5 text-secondary">Duración</dt>
          <dd className="col-7 mb-2">{formatMinutes(movie.duration)}</dd>
          <dt className="col-5 text-secondary">Reparto</dt>
          <dd className="col-7 mb-0">{movie.cast.slice(0, 2).join(', ')}</dd>
        </dl>
      </div>
    </article>
  );
}

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todas');
  const [minRating, setMinRating] = useState('0');

  const filteredMovies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const ratingThreshold = Number(minRating);

    return peliculas.filter((movie) => {
      const matchesQuery =
        !normalizedQuery ||
        movie.title.toLowerCase().includes(normalizedQuery) ||
        movie.director.toLowerCase().includes(normalizedQuery) ||
        movie.cast.some((member) => member.toLowerCase().includes(normalizedQuery)) ||
        movie.genre.some((genre) => genre.toLowerCase().includes(normalizedQuery));

      const matchesGenre = selectedGenre === 'Todas' || movie.genre.includes(selectedGenre);
      const matchesRating = movie.rating >= ratingThreshold;

      return matchesQuery && matchesGenre && matchesRating;
    });
  }, [minRating, query, selectedGenre]);

  return (
    <main className="app-shell">
      <section className="hero-section py-5 mb-4">
        <div className="container py-3">
          <div className="row align-items-end g-4">
            <div className="col-lg-7">
              <p className="eyebrow text-uppercase mb-2">Catálogo local</p>
              <h1 className="display-5 fw-bold mb-3">Buscador de películas</h1>
              <p className="lead mb-0 hero-copy">
                Filtra por título, director, reparto, género o puntuación usando el JSON del directorio.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="glass-panel p-4">
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label">Buscar</label>
                    <input
                      type="search"
                      className="form-control form-control-lg"
                      placeholder="Ej. Nolan, drama, Keanu Reeves..."
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Género</label>
                    <select
                      className="form-select"
                      value={selectedGenre}
                      onChange={(event) => setSelectedGenre(event.target.value)}
                    >
                      {allGenres.map((genre) => (
                        <option key={genre} value={genre}>
                          {genre}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Puntuación mínima</label>
                    <select
                      className="form-select"
                      value={minRating}
                      onChange={(event) => setMinRating(event.target.value)}
                    >
                      <option value="0">Todas</option>
                      <option value="8">8.0+</option>
                      <option value="8.5">8.5+</option>
                      <option value="9">9.0+</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <p className="mb-0 text-secondary">
            Mostrando <strong>{filteredMovies.length}</strong> de <strong>{peliculas.length}</strong> películas
          </p>
          <button
            type="button"
            className="btn btn-outline-light btn-sm"
            onClick={() => {
              setQuery('');
              setSelectedGenre('Todas');
              setMinRating('0');
            }}
          >
            Limpiar filtros
          </button>
        </div>

        {filteredMovies.length > 0 ? (
          <div className="row g-4">
            {filteredMovies.map((movie) => (
              <div className="col-12 col-md-6 col-xl-4" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state text-center py-5 px-3">
            <h2 className="h4 mb-3">No hay resultados</h2>
            <p className="text-secondary mb-0">
              Prueba con otro texto, cambia el género o baja la puntuación mínima.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}