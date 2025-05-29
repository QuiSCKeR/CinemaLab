import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { movies } from '../data/movies';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, []);

  useEffect(() => {
  localStorage.setItem('movies', JSON.stringify(movies));
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <input
        type="text"
        placeholder="Пошук фільмів..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default HomePage;
