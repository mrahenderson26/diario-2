import { Row, Col } from 'reactstrap';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  if (movies.length === 0) {
    return (
      <div className="text-center text-muted my-5">
        <p className="fs-4">No se encontraron películas</p>
        <p>Intenta con otro término de búsqueda</p>
      </div>
    );
  }

  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} sm="12" md="6" lg="4" className="mb-4">
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
