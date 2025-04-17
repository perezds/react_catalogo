import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import SerieCard from './serieCard';
import './carrossel.css';

const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export default function Series() {
  const [seriesTrending, setSeriesTrending] = useState([]);
  const [seriesRomance, setSeriesRomance] = useState([]);
  const [seriesComedy, setSeriesComedy] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [removedSeries, setRemovedSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const trendingResponse = await axios.get(`${API_URL}/tv/popular?api_key=${API_KEY}&language=pt-BR`);
        const romanceResponse = await axios.get(`${API_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=10749`); 
        const comedyResponse = await axios.get(`${API_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=35`); 

        setSeriesTrending(trendingResponse.data.results);
        setSeriesRomance(romanceResponse.data.results);
        setSeriesComedy(comedyResponse.data.results);

        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar séries.');
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

  const handleRemove = (id) => {
    setRemovedSeries((prev) => [...prev, id]);
  };

  const renderCarrossel = (series, title) => (
    <>
      <h2 className="carrossel-titulo">{title}</h2>
      <div className="carrossel">
        {series
          .filter((serie) => !removedSeries.includes(serie.id))
          .map((serie) => (
            <SerieCard
            key={serie.id}
            series={serie}
            onClick={setSelectedSeries}
            onRemove={() => handleRemove(serie.id)}
          />
          ))}
      </div>
    </>
  );

  if (loading) {
    return <div>Carregando séries...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {renderCarrossel(seriesTrending, 'Séries em Alta')}
      {renderCarrossel(seriesRomance, 'Romance')}
      {renderCarrossel(seriesComedy, 'Comédia')}

      <Modal
        movie={selectedSeries}
        onClose={() => setSelectedSeries(null)}
        onRemove={() => handleRemove(selectedSeries?.id)}
      />
    </>
  );
}
