import React from 'react';
import estilos from './modal.module.css';

export default function Modal({ movie, onClose }) {
    if (!movie) return null;

    const imageURL = `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`;

    return (
        <div className={estilos.overlay} onClick={onClose}>
            <div className={estilos.modal} onClick={e => e.stopPropagation()}>
                <div className={estilos.modalContent}>
                    {imageURL && (
                        <img 
                            className={estilos.modalImage}
                            src={imageURL} 
                            alt={movie.title || movie.name} 
                        />
                    )}
                    <div className={estilos.textContent}>
                        <h2 className={estilos.modalTitle}>{movie.title || movie.name}</h2>
                        <p className={estilos.modalDescription}>{movie.overview || 'Descrição não disponível.'}</p>
                        <button className={estilos.closeButton} onClick={onClose}>Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
