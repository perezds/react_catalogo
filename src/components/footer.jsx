import React from 'react';
import estilos from './footer.module.css';

export function Footer(){
  return (
    <footer className={estilos.footer}>
      <div className={estilos.footerContainer}>
        <section className={estilos.socialIcons}>
          <a href="https://www.linkedin.com/in/maria-eduarda-perez-124bb831b/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/perezds">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div className={estilos.footerBottom}>
        <p>
          © 2023 Copyright: Maria Eduarda Perez
        </p>
      </div>
    </footer>
  );
}
