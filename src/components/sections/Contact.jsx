import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:en.sanabria14@gmail.com?subject=${encodeURIComponent(
      `[Contacto Portfolio] Mensaje de ${formData.name}`
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-16 max-w-4xl mx-auto px-6 border-t theme-border">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight theme-text-main">
          Contacto
        </h2>
        <p className="text-sm theme-text-sub mt-1 font-light">
          ¿Tienes una propuesta laboral o deseas cotizar el desarrollo de un sitio web? Puedes escribirme directamente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Direct Links */}
        <div className="md:col-span-5 space-y-3">
          <a
            href="mailto:en.sanabria14@gmail.com"
            className="p-3.5 theme-surface border theme-border rounded flex items-center justify-between group hover:theme-accent-border transition-colors"
          >
            <div className="space-y-0.5">
              <span className="text-xs font-mono theme-text-muted block">Email</span>
              <span className="text-sm font-medium theme-text-main group-hover:theme-accent-text transition-colors">
                en.sanabria14@gmail.com
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 theme-text-muted group-hover:theme-accent-text transition-transform" />
          </a>

          <a
            href="https://wa.me/5491173602298"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 theme-surface border theme-border rounded flex items-center justify-between group hover:theme-accent-border transition-colors"
          >
            <div className="space-y-0.5">
              <span className="text-xs font-mono theme-text-muted block">WhatsApp</span>
              <span className="text-sm font-medium theme-text-main group-hover:theme-accent-text transition-colors">
                +54 11 7360-2298
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 theme-text-muted group-hover:theme-accent-text transition-transform" />
          </a>

          <a
            href="https://linkedin.com/in/en-sanabria/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 theme-surface border theme-border rounded flex items-center justify-between group hover:theme-accent-border transition-colors"
          >
            <div className="space-y-0.5">
              <span className="text-xs font-mono theme-text-muted block">LinkedIn</span>
              <span className="text-sm font-medium theme-text-main group-hover:theme-accent-text transition-colors">
                linkedin.com/in/en-sanabria/
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 theme-text-muted group-hover:theme-accent-text transition-transform" />
          </a>
        </div>

        {/* Form */}
        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono theme-text-sub mb-1">
                Nombre / Empresa
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ej. Juan Pérez"
                className="w-full theme-surface border theme-border rounded px-3.5 py-2 text-sm theme-text-main placeholder:theme-text-muted focus:outline-none focus:theme-accent-border transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono theme-text-sub mb-1">
                Tu Correo
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ejemplo@correo.com"
                className="w-full theme-surface border theme-border rounded px-3.5 py-2 text-sm theme-text-main placeholder:theme-text-muted focus:outline-none focus:theme-accent-border transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono theme-text-sub mb-1">
                Mensaje
              </label>
              <textarea
                rows="3"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntame sobre la posición o tu proyecto..."
                className="w-full theme-surface border theme-border rounded px-3.5 py-2 text-sm theme-text-main placeholder:theme-text-muted focus:outline-none focus:theme-accent-border transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-5 py-2 text-xs font-mono theme-accent-bg rounded transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Enviar mensaje</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {submitted && (
              <p className="text-xs theme-accent-text mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Se ha preparado el correo en tu cliente predeterminado.</span>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
