import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { ProjectCard } from '../ui/ProjectCard';

export const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => {
        if (filter === 'ecommerce') return p.type === 'ecommerce';
        if (filter === 'web') return p.type !== 'ecommerce';
        return true;
      });

  return (
    <section id="proyectos" className="py-16 max-w-4xl mx-auto px-6 border-t theme-border">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight theme-text-main">
            Proyectos Seleccionados
          </h2>
          <p className="text-sm theme-text-sub mt-1 font-light">
            Sitios web en producción desarrollados para clientes reales.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <button
            onClick={() => setFilter('all')}
            className={`transition-colors cursor-pointer ${
              filter === 'all' ? 'theme-text-main font-semibold underline underline-offset-4' : 'theme-text-muted hover:theme-text-main'
            }`}
          >
            Todos ({projectsData.length})
          </button>
          <span className="theme-text-muted opacity-40">/</span>
          <button
            onClick={() => setFilter('ecommerce')}
            className={`transition-colors cursor-pointer ${
              filter === 'ecommerce' ? 'theme-text-main font-semibold underline underline-offset-4' : 'theme-text-muted hover:theme-text-main'
            }`}
          >
            E-Commerce
          </button>
          <span className="theme-text-muted opacity-40">/</span>
          <button
            onClick={() => setFilter('web')}
            className={`transition-colors cursor-pointer ${
              filter === 'web' ? 'theme-text-main font-semibold underline underline-offset-4' : 'theme-text-muted hover:theme-text-main'
            }`}
          >
            Web Corporativa & Arte
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="divide-y theme-border border-t border-b">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
