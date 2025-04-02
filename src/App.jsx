import React from 'react';
import Nav from './components/nav';
import Header from './components/header';
import Content from './components/content';
import { Footer } from './components/footer';
import Lista from './components/lista'; // Importando a Lista de filmes

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Content />
      <Lista /> {/* Aqui a lista de filmes será exibida */}
      <Footer />
    </>
  );
}

export default App;
