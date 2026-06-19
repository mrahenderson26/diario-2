import { Card, CardImg, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import { FaStar, FaClock } from 'react-icons/fa';

function getRatingColor(rating) {
  if (rating >= 8.5) return 'success';
  if (rating >= 7.5) return 'warning';
  return 'danger';
}

function MovieCard({ movie }) {
  const imgFallback = 'https://placehold.co/300x450?text=Sin+Poster';

  return (
    <Card className="h-100 shadow-sm">
      <CardImg
        top
        src={movie.poster || imgFallback}
        alt={movie.title}
        style={{ height: 400, objectFit: 'cover' }}
        onError={(e) => { e.target.src = imgFallback; }}
      />
      <CardBody className="d-flex flex-column">
        <CardTitle tag="h5" className="fw-bold">
          {movie.title}
        </CardTitle>
        <CardText className="text-muted mb-2">
          <small>{movie.year} &middot; {movie.director}</small>
        </CardText>
        <div className="mb-2">
          {movie.genre.map((g) => (
            <Badge key={g} color="secondary" className="me-1" pill>
              {g}
            </Badge>
          ))}
        </div>
        <CardText className="flex-grow-1">
          <small>{movie.synopsis}</small>
        </CardText>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Badge color={getRatingColor(movie.rating)} className="d-flex align-items-center gap-1 p-2">
            <FaStar /> {movie.rating}
          </Badge>
          <small className="text-muted d-flex align-items-center gap-1">
            <FaClock /> {movie.duration} min
          </small>
        </div>
      </CardBody>
    </Card>
  );
}

export default MovieCard;
