import estilos from './modal.module.css';

export default function Modal({ movie, onClose }) {
    if (!movie) return null;

    const imageURL = `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`;

    return (
        <div className={estilos.overlay} onClick={onClose}>
            <div className={estilos.modal} onClick={e => e.stopPropagation()}>
                <img src={imageURL} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}
