import React from 'react';
import defaultPoster from '../assets/images/default.jpg'; // Створіть це зображення

const MovieCard = ({ movie }) => {
  // Функція для отримання шляху до зображення
  const getPosterPath = () => {
    try {
      // Спроба імпортувати зображення динамічно
      const image = require(`../assets/images/${movie.poster}`);
      return image.default || image;
    } catch (e) {
      console.error(`Помилка завантаження зображення: ${movie.poster}`);
      return defaultPoster;
    }
  };

  return (
    <div className="movie-card">
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