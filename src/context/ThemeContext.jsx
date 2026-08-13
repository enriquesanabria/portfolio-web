import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Tonos claros, grises y estética sobria.',
    colors: ['#fafaf9', '#18181b', '#71717a', '#e7e5e4']
  },
  {
    id: 'dark',
    name: 'Dark',
    description: 'Fondo oscuro profundo con acento magenta.',
    colors: ['#121214', '#f43f5e', '#f4f4f5', '#27272a']
  },
  {
    id: 'koopa-beach',
    name: 'Koopa Beach',
    description: 'Tonos arena cálida y azul marino cristalino.',
    colors: ['#fdf6e7', '#0284c7', '#163240', '#e5d7b5']
  },
  {
    id: 'choco-mountain',
    name: 'Choco Mountain',
    description: 'Crema suave, cacao y tierra tostada.',
    colors: ['#fbf5ef', '#8d5538', '#382318', '#dfcfbe']
  },
  {
    id: 'moo-moo-farm',
    name: 'Moo Moo Farm',
    description: 'Pastel de pasturas verdes y cielo azul.',
    colors: ['#f4f9f4', '#2563eb', '#1b3b27', '#cfe0d1']
  },
  {
    id: 'bowsers-castle',
    name: 'Bowser\'s Castle',
    description: 'Púrpura volcánico, piedra oscura y fuego.',
    colors: ['#15121b', '#ef4444', '#f1eef8', '#362e49']
  },
  {
    id: 'yoshi-valley',
    name: 'Yoshi Valley',
    description: 'Verde musgo fresco, mandarina y gris calmo.',
    colors: ['#f7faf0', '#ea580c', '#203314', '#d5e2c3']
  },
  {
    id: 'rainbow-road',
    name: 'Rainbow Road',
    description: 'Espacio cósmico y neón multicolor vibrante.',
    colors: ['#0b0914', '#e879f9', '#38bdf8', '#facc15']
  },
  {
    id: 'lobster-life',
    name: 'Lobster Life',
    description: 'Salmón suave, rojo crustáceo y tierra cálida.',
    colors: ['#fff5f2', '#e11d48', '#3f1d18', '#ebd0c8']
  },
  {
    id: 'hacker-news',
    name: 'Hacker News',
    description: 'El clásico pergamino HN con acento naranja.',
    colors: ['#f6f6ef', '#ff6600', '#222222', '#828282']
  }
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('nestor-portfolio-theme') || 'classic';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('nestor-portfolio-theme', theme);
  }, [theme]);

  const selectTheme = (themeId) => {
    setTheme(themeId);
  };

  return (
    <ThemeContext.Provider value={{ theme, selectTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
