import estilos from './card.module.css';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export default function Card({ movie, onClick, onRemove }) {
  const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className={estilos.card}>
      <img src={imageURL} alt={movie.title} onClick={() => onClick(movie)} />
      <div className={estilos.info}>
        <p className={estilos.titulo}>{movie.title}</p>
        <div className={estilos.acoes}>
          <button onClick={() => alert('Gostou!')}>
            <ThumbsUp size={18} />
          </button>
          <button onClick={onRemove}>
            <ThumbsDown size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
