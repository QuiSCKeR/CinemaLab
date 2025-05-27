import React from 'react';

const MovieCard = ({ movie }) => {
    // Додамо перевірку на наявність зображення
    try {
        const posterPath = require(`../assets/images/${movie.poster}`).default;
        return (
            <div className="movie-card">
                <img src={posterPath} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
            </div>
        );
    } catch (error) {
        console.error("Не вдалося завантажити зображення:", movie.poster);
        return (
            <div className="movie-card">
                <div className="image-placeholder">Немає зображення</div>
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
            </div>
        );
    }
};

export default MovieCard;