import estilos from './card.module.css';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export default function Card({ movie, onClick, onRemove }) {
  const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const handleLike = () => {
    const saved = JSON.parse(localStorage.getItem('likedMovies')) || [];
    const alreadyLiked = saved.find((m) => m.id === movie.id);
    if (!alreadyLiked) {
      const updated = [...saved, movie];
      localStorage.setItem('likedMovies', JSON.stringify(updated));
    }

    const comment = prompt('Deixe um comentário sobre o filme (opcional):');
    if (comment) {
      const comments = JSON.parse(localStorage.getItem('movieComments')) || {};
      comments[movie.id] = comment;
      localStorage.setItem('movieComments', JSON.stringify(comments));
    }

    alert('Filme salvo no perfil!');
  };

  return (
    <div className={estilos.card}>
      <img src={imageURL} alt={movie.title} onClick={() => onClick(movie)} />
      <div className={estilos.info}>
        <p className={estilos.titulo}>{movie.title}</p>
        <div className={estilos.acoes}>
          <button onClick={handleLike}>
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
