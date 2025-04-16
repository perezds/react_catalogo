import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Content from './components/content';
import { Footer } from './components/footer';
import Lista from './components/lista'; 
import "slick-carousel/slick/slick.css";       
import "slick-carousel/slick/slick-theme.css";  
import Navbar from './components/nav';
import Series from './components/series';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/header" element={<Header />} />
        <Route path="/content" element={<Content />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/series" element={<Series />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}
export default App;