import estilos from './Conteudo.module.css';
import { Lista } from './Lista';

//estrutura para fazer o componentes
export function Conteudo(){
    return(
        <main className={estilos.conteiner}>
            <Lista/>
        </main>

    )
}