import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={InceptionPoster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Жанр: {movie.genre}</p>
      <div className="sessions">
        {movie.sessions.map((session, index) => (
          <div key={index} className="session">
            {session.date} {session.time}
          </div>
        ))}
      </div>
      <Link to={`/booking/${movie.id}`} className="book-button">
        Забронювати
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieCard; 