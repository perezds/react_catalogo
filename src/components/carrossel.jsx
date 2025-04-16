import Modal from './modal';
import Card from './Card';
import { useState } from 'react';
import './carrossel.css';

export default function Carrossel({ title, movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [removedMovies, setRemovedMovies] = useState([]);

  const handleRemove = (id) => {
    setRemovedMovies((prev) => [...prev, id]);
  };

  return (
    <>
      <h2 className="carrossel-titulo">{title}</h2>
      <div className="carrossel">
        {movies
          .filter((movie) => !removedMovies.includes(movie.id))
          .map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              onClick={setSelectedMovie}
              onRemove={() => handleRemove(movie.id)}
            />
          ))}
      </div>
      <Modal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onRemove={() => handleRemove(selectedMovie?.id)}
      />
    </>
  );
}
