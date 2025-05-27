import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import { movies } from './data/movies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/booking/:movieId" element={<Booking movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;