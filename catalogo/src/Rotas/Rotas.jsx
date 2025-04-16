import { Routes, Route} from 'react-router-dom';
import { Inicial} from '../Paginas/Inicial';
import { Perfil } from '../Paginas/Perfil';
import { Serie } from '../Paginas/Serie'; 
import { Lista } from '../Componente/Lista';

export function Rotas(){
    return(
        <Routes>
            <Route path = '/' element={<Inicial/>}>
                <Route index element={<Lista/>}/>
                <Route path = 'serie' element={<Serie />}/>
                <Route path = 'perfil' element={<Perfil/>}/>
            
            </Route>
        </Routes>


    )
}