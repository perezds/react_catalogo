import { useTheme } from '../ThemeContext';
import estilos from './nav.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className={estilos.navbar}>
      <div className={estilos.logo}>🎞️ MOONFilms</div>
      <nav className={estilos.menu}>
        <Link to="/">Início</Link>
        <Link to="/series">Series</Link>
        <Link to="/profile">Perfil</Link>
        <label className={estilos.switch}>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className={estilos.slider}></span>
        </label>
      </nav>
    </header>
  );
}
