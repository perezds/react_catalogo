import Carrossel from './carrossel';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [populares, setPopulares] = useState([]);
  const [acao, setAcao] = useState([]);
  const [romance, setRomance] = useState([]);

  const API_KEY = '10d4638f572605fe3f2131925ba167a0';
  const base = 'https://api.themoviedb.org/3';

  useEffect(() => {
    axios.get(`${base}/movie/popular?api_key=${API_KEY}&language=pt-BR`)
      .then(res => setPopulares(res.data.results));

    axios.get(`${base}/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`)
      .then(res => setAcao(res.data.results));

    axios.get(`${base}/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`)
      .then(res => setRomance(res.data.results));
  }, []);

  return (
    <div>
      <Carrossel title="Em Alta" movies={populares} />
      <Carrossel title="Ação" movies={acao} />
      <Carrossel title="Romance" movies={romance} />
    </div>
  );
}
