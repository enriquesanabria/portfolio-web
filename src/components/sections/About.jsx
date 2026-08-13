import React from 'react';

export const About = () => {
  return (
    <section id="sobre-mi" className="py-16 max-w-4xl mx-auto px-6 border-t theme-border">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight theme-text-main">
          Sobre Mí
        </h2>
        <p className="text-sm theme-text-sub mt-1 font-light">
          Contexto, principios de trabajo y visión técnica.
        </p>
      </div>

      <div className="space-y-4 theme-text-sub text-sm sm:text-base leading-relaxed font-light">
        <p>
          Mi formación comenzó en la <strong className="theme-text-main font-semibold">electrónica técnica</strong> y continuó en la universidad con la <strong className="theme-text-main font-semibold">ingeniería en sistemas y software</strong>. A lo largo de mi trayectoria, he tenido la responsabilidad de asegurar la continuidad operativa de plantas industriales automotrices como Volkswagen y Toyota, donde cada minuto de detención tiene un impacto crítico.
        </p>

        <p>
          Esa experiencia moldea mi forma de escribir código: creo en el software predecible, bien estructurado y con un propósito claro. En el desarrollo web, me enfoco en crear sitios rápidos, accesibles y orientados al usuario, sin complejidades innecesarias ni capas de abstracción superfluas.
        </p>

        <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-3 theme-surface border theme-border rounded">
            <span className="theme-text-muted block mb-0.5">Ubicación</span>
            <span className="theme-text-main font-medium">Pilar, Bs. As. (ARG)</span>
          </div>
          <div className="p-3 theme-surface border theme-border rounded">
            <span className="theme-text-muted block mb-0.5">Estudios</span>
            <span className="theme-text-main font-medium">Téc. Univ. en Software</span>
          </div>
          <div className="p-3 theme-surface border theme-border rounded">
            <span className="theme-text-muted block mb-0.5">Idiomas</span>
            <span className="theme-text-main font-medium">Español / Inglés Técnico</span>
          </div>
        </div>
      </div>
    </section>
  );
};
