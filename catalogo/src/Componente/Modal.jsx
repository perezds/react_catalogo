import estilos from './Modal.module.css';
 
export function Modal({ movie, onClose }) {
    if (!movie) {
        return null;
    }
 
    console.log("Modal renderizado");
    console.log(movie);
 
    return (
        <div className={estilos.modalback}>
            <div className={estilos.modalConteiner}>
                <div className={estilos.modalHeader}>
                    <h2>{movie.title}</h2>
                    <button onClick={onClose}>x</button>
                </div>
                <div className={estilos.imgAndDetails}>
                    <img className={estilos.imgModal} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <div className={estilos.movieDetails}>
                        <ul>
                        <li>{`Popularidade: ${movie.popularity}`}</li>
                        <li>{`Data de Lançamento: ${movie.release_date}`}</li>
                        <li>{`Quantidade de Votos: ${movie.vote_count }`}</li>
                        <li>{`Sinopse: ${movie.overview}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}