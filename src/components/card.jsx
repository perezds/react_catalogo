import estilos from './card.module.css';
 
export default function Card({ movie }){
    return(
        <div className={estilos.conteiner}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <p/>
            <p>{movie.overview}</p>
        </div>
    );
 
}