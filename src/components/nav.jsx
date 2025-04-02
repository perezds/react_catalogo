import estilos from './nav.module.css';

export function Nav() {
  return (
    <nav className={estilos.container}>
      <ul>
        <li>
          <i className="fas fa-home"></i> Home
        </li>
        <li>
          <i className="fas fa-film"></i> Filmes
        </li>
        <li>
          <i className="fas fa-user"></i> Perfil
        </li>
      </ul>

    </nav>
  );
}

export default Nav;