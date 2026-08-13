import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  return (
    <article className="group py-6 border-b theme-border last:border-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 transition-colors">
      <div className="space-y-2 max-w-2xl">
        <div className="flex items-baseline gap-3 flex-wrap">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold theme-text-main group-hover:theme-accent-text transition-colors inline-flex items-center gap-1"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 theme-text-muted group-hover:theme-accent-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
          <span className="text-xs font-mono theme-text-muted">
            [{project.category}]
          </span>
        </div>

        <p className="text-sm theme-text-sub leading-relaxed font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono theme-text-sub theme-surface px-2 py-0.5 rounded border theme-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="sm:text-right shrink-0">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono theme-text-muted hover:theme-text-main transition-colors"
        >
          {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </a>
      </div>
    </article>
  );
};
