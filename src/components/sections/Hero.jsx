import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="inicio" className="pt-32 sm:pt-40 pb-16 max-w-4xl mx-auto px-6">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono theme-text-muted uppercase tracking-widest">
          <span className="h-2 w-2 rounded-full theme-accent-bg inline-block"></span>
          <span>Pilar, Buenos Aires &bull; Disponible para nuevos desafíos</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight theme-text-main leading-[1.2]">
          Hola, soy Néstor Sanabria. <br className="hidden sm:inline" />
          <span className="theme-text-sub font-normal">
            Especialista en Infraestructura IT y Desarrollador Web.
          </span>
        </h1>

        <p className="text-base sm:text-lg theme-text-sub leading-relaxed max-w-3xl font-light">
          Combino más de 5 años de gestión en sistemas críticos y plantas industriales de alta demanda (<strong className="theme-text-main font-semibold">Volkswagen, Toyota, Edenor, Bayer</strong>) con el desarrollo web moderno, creando interfaces rápidas, funcionales y orientadas al negocio.
        </p>

        {/* Action links */}
        <div className="pt-4 flex flex-wrap items-center gap-6 text-sm">
          <a
            href="#proyectos"
            className="font-medium theme-text-main editorial-link inline-flex items-center gap-1.5"
          >
            <span>Ver proyectos seleccionados</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <a
            href="mailto:en.sanabria14@gmail.com"
            className="theme-text-sub hover:theme-text-main editorial-link inline-flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>en.sanabria14@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};
