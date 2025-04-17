import React, { useState, useEffect } from 'react';
import estilos from './Profile.module.css';

export default function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'https://i.pinimg.com/originals/0f/13/99/0f1399ab5106b2e90b1c8fa91481335a.jpg',
  });
  const [likedMovies, setLikedMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]); // Para armazenar filmes assistidos
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newProfilePic, setNewProfilePic] = useState(user.profilePicture);
  const [profilePicFile, setProfilePicFile] = useState(null); // Arquivo de imagem carregado

  useEffect(() => {
    const storedLikedMovies = JSON.parse(localStorage.getItem('likedMovies')) || [];
    const storedWatchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || []; // Carregar filmes assistidos
    setLikedMovies(storedLikedMovies);
    setWatchedMovies(storedWatchedMovies);
  }, []);

  const handleSaveProfile = () => {
    const updatedProfilePic = profilePicFile ? URL.createObjectURL(profilePicFile) : newProfilePic;
    setUser({ name: newName, email: newEmail, profilePicture: updatedProfilePic });
    localStorage.setItem('user', JSON.stringify({ name: newName, email: newEmail, profilePicture: updatedProfilePic }));
    setIsEditing(false);
  };

  const handleProfilePicChange = (event) => {
    setProfilePicFile(event.target.files[0]);
  };

  return (
    <div className={estilos.profileContainer}>
      <div className={estilos.header}>
        <div className={estilos.profileInfo}>
          <div className={estilos.profileImageContainer}>
            <img
              src={user.profilePicture}
              alt="Profile"
              className={estilos.profileImage}
            />
            {isEditing && (
              <label className={estilos.uploadButton}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  className={estilos.uploadInput}
                />
                Alterar Foto
              </label>
            )}
          </div>
          <div className={estilos.profileDetails}>
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className={estilos.inputField}
                />
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className={estilos.inputField}
                />
                <button onClick={handleSaveProfile} className={estilos.saveButton}>Salvar</button>
              </>
            ) : (
              <>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <button onClick={() => setIsEditing(true)} className={estilos.editButton}>Editar</button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={estilos.sections}>
        <div className={estilos.section}>
          <h2>Filmes Curtidos</h2>
          <div className={estilos.moviesList}>
            {likedMovies.length > 0 ? (
              likedMovies.map((movie, index) => (
                <div key={index} className={estilos.movieCard}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={estilos.movieImage}
                  />
                  <div className={estilos.movieDetails}>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                    <textarea
                      placeholder="Adicione um comentário..."
                      className={estilos.commentBox}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>Você ainda não curtiu nenhum filme.</p>
            )}
          </div>
        </div>
        <div className={estilos.statsSection}>
  <h2>Estatísticas</h2>
  <ul className={estilos.statsList}>
    <li>🎬 Filmes curtidos: {likedMovies.length}</li>
    <li>📽️ Filmes assistidos: {watchedMovies.length}</li>
    <li>🔥 Dias ativo: {Math.floor(Math.random() * 100) + 1}</li>
  </ul>
  <div className={estilos.heatmap}>
    {[...Array(30)].map((_, i) => (
      <div key={i} className={estilos.heatSquare}></div>
    ))}
  </div>
</div>

<div className={estilos.bioSection}>
  <h2>Sobre mim</h2>
  <p>
    Sou cinéfila de carteirinha 🎞️ | Amante de thrillers psicológicos, dramas existenciais e toda produção da Pixar 😍
  </p>
  <div className={estilos.socialLinks}>
    <a href="https://github.com/dudinha" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/dudinha" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </div>
</div>

        <div className={estilos.section}>
          <h2>Histórico de Filmes Assistidos</h2>
          <div className={estilos.moviesList}>
            {watchedMovies.length > 0 ? (
              watchedMovies.map((movie, index) => (
                <div key={index} className={estilos.movieCard}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={estilos.movieImage}
                  />
                  <div className={estilos.movieDetails}>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                    <textarea
                      placeholder="Adicione um comentário sobre o filme assistido..."
                      className={estilos.commentBox}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>Você ainda não assistiu nenhum filme.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
