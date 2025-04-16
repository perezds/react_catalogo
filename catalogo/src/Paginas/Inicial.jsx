import { BarraNavegacao } from '../Componente/BarraNavegacao';
import { Cabecalho } from '../Componente/Cabecalho';
import { Outlet } from 'react-router-dom';

//estrutura do componente
export function Inicial(){
    return(
        //utilizo de Tags fantasmas para fazer um unico retorno 
        <>
            <BarraNavegacao />
            <Cabecalho />
            {/* espaço variavel que comporta os componetes da minha aplicação */}
            <Outlet />
        </>
    )

}