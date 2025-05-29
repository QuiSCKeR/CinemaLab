import React from 'react';
import defaultPoster from '../assets/images/default.jpg';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const getPosterPath = () => {
    try {
      const image = require(`../assets/images/${movie.poster}`);
      return image.default || image;
    } catch (e) {
      console.error(`Помилка завантаження зображення: ${movie.poster}`);
      return defaultPoster;
    }
  };

  const handleClick = () => {
    navigate(`/booking/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img
        src={getPosterPath()}
        alt={movie.title}
        onError={(e) => {
          e.target.src = defaultPoster;
        }}
      />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieCard;
