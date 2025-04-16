import React, { useEffect, useState } from 'react';
import estilos from './content.module.css';
import axios from 'axios';

const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export default function Content() {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios
      .get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`)
      .then(response => setMovies(response.data.results))
      .catch(error => console.error('Erro ao buscar filmes:', error));
  }, []);

  const pularFilme = () => {
    setCurrent(prev => (prev + 1) % movies.length);
  };

  const movie = movies[current] || {};
  const backgroundUrl = movie.backdrop_path || movie.poster_path;

  return (
    <main className={`${estilos.container} ${estilos.fade}`}>
      {backgroundUrl && (
        <div
          className={estilos.bg}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backgroundUrl})`,
          }}
        />
      )}

      <div className={estilos.overlay}>
        <div className={estilos.textos}>
          <h1>{movie.title || "DS 13: A Nova Era"}</h1>
          <p>{movie.overview || "Explore as novidades mais quentes do universo DS 13 agora mesmo!"}</p>
          <div className={estilos.botoes}>
            <button className={estilos.assistir}>▶ Assistir agora</button>
            <button className={estilos.gostei}> Gostei</button>
            <button className={estilos.naoInteressado} onClick={pularFilme}>Não interessado</button>
          </div>
        </div>
      </div>
      
    </main>
  );
}
