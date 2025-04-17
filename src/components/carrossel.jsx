import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Card from './Card';
import './carrossel.css';

export default function Carrossel() {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [moviesRomance, setMoviesRomance] = useState([]);
  const [moviesHighlights, setMoviesHighlights] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [removedMovies, setRemovedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_key = "0d0a2b99c38be169447fb0d359d54043";
  const API_URL = "https://api.themoviedb.org/3";

  const fetchMovies = async (url, setter) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setter(data.results);
    } catch (err) {
      setError('Erro ao carregar filmes.');
    }
  };

  useEffect(() => {
    setLoading(true);

    fetchMovies(
      `${API_URL}/trending/movie/day?api_key=${API_key}&language=pt-BR`,
      setMoviesTrending
    );
    
    fetchMovies(
      `${API_URL}/discover/movie?api_key=${API_key}&language=pt-BR&with_genres=10749`, // Gênero de romance (id 10749)
      setMoviesRomance
    );

    fetchMovies(
      `${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR&page=1`,
      setMoviesHighlights
    );

    setLoading(false);
  }, []);

  const handleRemove = (id) => {
    setRemovedMovies((prev) => [...prev, id]);
  };

  if (loading) {
    return <div>Carregando filmes...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const renderCarrossel = (movies, title) => (
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
    </>
  );

  return (
    <>
      {renderCarrossel(moviesTrending, "Em Alta")}
      {renderCarrossel(moviesRomance, "Romance")}
      {renderCarrossel(moviesHighlights, "Destaques")}

      <Modal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onRemove={() => handleRemove(selectedMovie?.id)}
      />
    </>
  );
}
