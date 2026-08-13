import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeSwitcher = () => {
  const { theme, selectTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const currentThemeObj = themes.find((t) => t.id === theme) || themes[0];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 py-1.5 px-3 rounded-lg border theme-border theme-surface theme-surface-hover transition-all text-xs font-mono theme-text-main cursor-pointer"
        aria-label="Cambiar tema de color"
        title="Personalizar paleta de color"
      >
        {/* Color preview dots */}
        <span className="flex items-center -space-x-1">
          {currentThemeObj.colors.slice(0, 3).map((color, idx) => (
            <span
              key={idx}
              className="inline-block w-2.5 h-2.5 rounded-full border border-black/10 shadow-xs"
              style={{ backgroundColor: color }}
            />
          ))}
        </span>
        <span className="font-medium hidden sm:inline">{currentThemeObj.name}</span>
        <Palette className="w-3.5 h-3.5 theme-text-muted" />
      </button>

      {/* Popover / Modal (Select Theme) */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-xl border theme-border theme-surface shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b theme-border">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 theme-accent-text" />
              <span className="text-xs font-mono uppercase tracking-wider font-semibold theme-text-main">
                Select Theme ({themes.length})
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded theme-text-muted hover:theme-text-main transition-colors"
              aria-label="Cerrar selector de temas"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Theme List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
            {themes.map((t) => {
              const isSelected = t.id === theme;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    selectTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`flex flex-col text-left p-2.5 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'theme-accent-border bg-black/5 dark:bg-white/5 font-semibold shadow-xs ring-1 ring-black/5'
                      : 'border-transparent hover:border-black/10 dark:hover:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-xs font-mono theme-text-main">
                      {t.name}
                    </span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 theme-accent-text" />
                    )}
                  </div>

                  {/* 4 Swatch Circles */}
                  <div className="flex items-center gap-1.5">
                    {t.colors.map((c, cIdx) => (
                      <span
                        key={cIdx}
                        className="w-4 h-4 rounded-full border border-black/15 dark:border-white/15 shrink-0 shadow-xs"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer hint */}
          <div className="mt-3 pt-2 border-t theme-border text-[11px] font-mono theme-text-muted flex justify-between">
            <span>Inspirado en mxb.dev</span>
            <span>Persiste en recarga</span>
          </div>
        </div>
      )}
    </div>
  );
};
