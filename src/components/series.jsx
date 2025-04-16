import React, { useEffect, useState } from 'react';
import axios from 'axios';
import estilos from './series.module.css'; 

const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export default function Series() {
  const [series, setSeries] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios
      .get(`${API_URL}/tv/popular?api_key=${API_KEY}&language=pt-BR`)
      .then((response) => setSeries(response.data.results))
      .catch((error) => console.error('Erro ao buscar séries:', error));
  }, []);

  const pularSerie = () => {
    setCurrent((prev) => (prev + 1) % series.length);
  };

  const serie = series[current] || {};
  const backgroundUrl = serie.backdrop_path || serie.poster_path;

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
          <h1>{serie.name || 'Série em destaque'}</h1>
          <p>{serie.overview || 'Confira uma série popular agora mesmo!'}</p>
          <div className={estilos.botoes}>
            <button className={estilos.assistir}>▶ Assistir agora</button>
            <button className={estilos.gostei}>Gostei</button>
            <button className={estilos.naoInteressado} onClick={pularSerie}>
              Não interessado
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

