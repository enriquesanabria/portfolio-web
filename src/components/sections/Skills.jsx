import React from 'react';
import { skillsData } from '../../data/skillsData';

export const Skills = () => {
  return (
    <section id="habilidades" className="py-16 max-w-4xl mx-auto px-6 border-t theme-border">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight theme-text-main">
          Habilidades & Stack Técnico
        </h2>
        <p className="text-sm theme-text-sub mt-1 font-light">
          Tecnologías y herramientas aplicadas en entornos industriales y proyectos web.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Col 1: Web Dev */}
        <div className="space-y-6">
          <div className="pb-2 border-b theme-border">
            <h3 className="text-sm font-mono uppercase tracking-wider theme-text-main font-semibold">
              01. Desarrollo Web & Frontend
            </h3>
          </div>

          <div className="space-y-4">
            {skillsData.webDev.map((skill, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium theme-text-main">{skill.name}</span>
                  <span className="text-xs font-mono theme-text-muted">{skill.level}</span>
                </div>
                <p className="text-xs theme-text-sub font-light leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Col 2: Infra IT */}
        <div className="space-y-6">
          <div className="pb-2 border-b theme-border">
            <h3 className="text-sm font-mono uppercase tracking-wider theme-text-main font-semibold">
              02. Infraestructura & IT Industrial
            </h3>
          </div>

          <div className="space-y-4">
            {skillsData.infrastructure.map((skill, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium theme-text-main">{skill.name}</span>
                  <span className="text-xs font-mono theme-text-muted">{skill.level}</span>
                </div>
                <p className="text-xs theme-text-sub font-light leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
