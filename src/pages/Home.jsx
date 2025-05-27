import React from 'react';
import PropTypes from 'prop-types';
import MovieList from '../components/MovieList';

const Home = ({ movies }) => {
  return (
    <div className="home-page">
      <h1>Фільми в кінотеатрі</h1>
      <MovieList movies={movies} />
    </div>
  );
};

Home.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Home;