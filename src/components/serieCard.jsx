import estilos from './card.module.css';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export default function SerieCard({ series, onClick, onRemove }) {
  // Verificando se a URL do poster está sendo gerada corretamente
  const imageURL = series?.poster_path 
    ? `https://image.tmdb.org/t/p/w500${series.poster_path}`
    : 'https://via.placeholder.com/500x750?text=Imagem+Indisponível';

  console.log('Image URL:', imageURL);  // Verificando a URL da imagem

  return (
    <div className={estilos.card}>
      <img
        src={imageURL}
        alt={series?.name || 'Série sem título'}
        onClick={() => onClick(series)}  // Ao clicar na imagem, chama o onClick com os dados da série
      />
      <div className={estilos.info}>
        <p className={estilos.titulo}>{series?.name || 'Sem título'}</p>
        <div className={estilos.acoes}>
          <button onClick={() => {
            const saved = JSON.parse(localStorage.getItem('likedSeries')) || [];
            const alreadyLiked = saved.find((s) => s.id === series.id);
            if (!alreadyLiked) {
              const updated = [...saved, series];
              localStorage.setItem('likedSeries', JSON.stringify(updated));
            }

            const comment = prompt('Deixe um comentário sobre a série (opcional):');
            if (comment) {
              const comments = JSON.parse(localStorage.getItem('seriesComments')) || {};
              comments[series.id] = comment;
              localStorage.setItem('seriesComments', JSON.stringify(comments));
            }

            alert('Série salva no perfil!');
          }}>
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
