import React from 'react';
import { experienceData, educationData } from '../../data/experienceData';

export const Experience = () => {
  return (
    <section id="experiencia" className="py-16 max-w-4xl mx-auto px-6 border-t theme-border">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight theme-text-main">
          Trayectoria & Experiencia
        </h2>
        <p className="text-sm theme-text-sub mt-1 font-light">
          Responsabilidad en infraestructura crítica, plantas industriales y desarrollo web freelance.
        </p>
      </div>

      {/* Experience list */}
      <div className="space-y-10">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline">
            {/* Period */}
            <div className="md:col-span-3 text-xs font-mono theme-text-muted">
              {exp.period}
            </div>

            {/* Content */}
            <div className="md:col-span-9 space-y-2">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-base font-semibold theme-text-main">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono theme-text-sub">
                  &mdash; {exp.company}
                </span>
              </div>

              <p className="text-sm theme-text-sub leading-relaxed font-light">
                {exp.description}
              </p>

              {/* Highlights */}
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs theme-text-sub pt-1">
                {exp.achievements.map((ach, aIdx) => (
                  <li key={aIdx}>{ach}</li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono theme-text-sub theme-surface px-2 py-0.5 rounded border theme-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education & Certifications */}
      <div className="mt-16 pt-12 border-t theme-border grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-base font-semibold theme-text-main mb-4">
            Educación
          </h3>
          <div className="space-y-4">
            {educationData.map((edu, idx) => (
              <div key={idx} className="text-xs space-y-0.5">
                <div className="theme-text-muted font-mono">{edu.period}</div>
                <div className="font-medium theme-text-main">{edu.degree}</div>
                <div className="theme-text-sub">{edu.institution}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold theme-text-main mb-4">
            Certificaciones
          </h3>
          <ul className="space-y-4 text-xs">
            <li className="space-y-0.5">
              <div className="theme-text-muted font-mono">2022</div>
              <div className="font-medium theme-text-main">Introducción a la Seguridad Cibernética</div>
              <div className="theme-text-sub">Cisco Networking Academy</div>
            </li>
            <li className="space-y-0.5">
              <div className="theme-text-muted font-mono">2022</div>
              <div className="font-medium theme-text-main">Full Stack Developer</div>
              <div className="theme-text-sub">CodeaRock</div>
            </li>
            <li className="space-y-0.5">
              <div className="theme-text-muted font-mono">2021</div>
              <div className="font-medium theme-text-main">Técnico en Ofimática</div>
              <div className="theme-text-sub">Fundación Carlos Slim</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
