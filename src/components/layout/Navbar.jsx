import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from '../ui/Icons';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'theme-bg/90 backdrop-blur-md border-b theme-border py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#inicio" className="group flex items-baseline gap-2">
          <span className="font-semibold theme-text-main text-base tracking-tight hover:opacity-80 transition-opacity">
            Néstor Sanabria
          </span>
          <span className="hidden sm:inline-block text-xs theme-text-muted font-mono">
            / it & web
          </span>
        </a>

        {/* Desktop Nav + Theme Switcher */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <nav className="flex items-center gap-6 theme-text-sub">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:theme-text-main transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://linkedin.com/in/en-sanabria/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono theme-text-muted hover:theme-text-main py-1 px-2 rounded border theme-border hover:theme-accent-border transition-all"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          <div className="h-4 w-px bg-current opacity-20" />

          {/* Theme Selector */}
          <ThemeSwitcher />
        </div>

        {/* Mobile menu + switcher */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 theme-text-main focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden theme-bg border-b theme-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base theme-text-main font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t theme-border">
            <a
              href="https://linkedin.com/in/en-sanabria/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm theme-text-sub hover:theme-text-main font-medium"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>Ver perfil en LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
