import React from 'react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t theme-border py-12 max-w-4xl mx-auto px-6 text-xs theme-text-muted flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
      <div>
        Néstor Enrique Sanabria &copy; {new Date().getFullYear()}
      </div>

      <div className="flex items-center gap-6">
        <a href="#proyectos" className="hover:theme-text-main transition-colors">Proyectos</a>
        <a href="#experiencia" className="hover:theme-text-main transition-colors">Experiencia</a>
        <a href="#habilidades" className="hover:theme-text-main transition-colors">Habilidades</a>
        <button
          onClick={scrollToTop}
          className="hover:theme-text-main transition-colors cursor-pointer"
        >
          Volver arriba &uarr;
        </button>
      </div>
    </footer>
  );
};
