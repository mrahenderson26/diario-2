import { useState, useEffect } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { FaFilm } from 'react-icons/fa';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

function MoviesApp() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/peliculas.json')
      .then((res) => res.json())
      .then(setMovies)
      .catch(console.error);
  }, []);

  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar color="dark" dark expand="md" className="mb-4">
        <NavbarBrand href="/" className="d-flex align-items-center gap-2">
          <FaFilm /> Buscador de Películas
        </NavbarBrand>
      </Navbar>

      <Container className="flex-grow-1">
        <div className="mb-4">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>
        <p className="text-muted text-center mb-4">
          Mostrando {filtered.length} de {movies.length} películas
        </p>
        <MovieList movies={filtered} />
      </Container>

      <footer className="bg-dark text-white text-center py-3 mt-4">
        <small>Buscador de Películas &copy; {new Date().getFullYear()}</small>
      </footer>
    </div>
  );
}

export default MoviesApp;
