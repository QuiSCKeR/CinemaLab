import { useState } from 'react';

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук фільмів..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}