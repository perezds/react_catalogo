import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

//estrura basica para que esse componente possa se
export function BarraNavegacao(){
    return(
        <nav className={estilos.conteiner}>
            <ul>
                <Link to='/'>
                <li>
                    <span class="material-symbols-outlined">
                        home
                    </span>
                    Home
                </li>
                </Link>
                <Link to='serie'>
                <li>
                    <span class="material-symbols-outlined">movie</span>
                    Serie
                </li>
                </Link>
                <Link to='perfil'>
                <li>
                <span class="material-symbols-outlined">person</span>
                    Perfil
                </li>
                </Link>
            </ul>
        </nav>
    )

}