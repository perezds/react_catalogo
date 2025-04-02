import estilos from './content.module.css';

export function Content() {
    return (
        <main className={estilos.container}>
            <h1 className={estilos.titulo}>DS 13</h1>

            {/* Card Adicionado */}
            <div className={estilos.card}>
                <h3>Destaque do Dia</h3>
                <p>Confira as novidades do universo DS 13!</p>
                <button>Saiba mais</button>
            </div>
        </main>
    );
}

export default Content;
