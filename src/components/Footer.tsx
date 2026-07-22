import React from "react";
import { Mail, Phone, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#01040a] text-slate-400 border-t border-blue-900/15 text-xs sm:text-sm font-sans relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center h-9 w-9 overflow-hidden rounded-full border border-[#E79923]/20 bg-[#07172E]">
                <img
                  src="/logo_dark_bg.png"
                  alt="Logo Asesorías al Migrante"
                  className="h-full w-full object-cover scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-normal tracking-tight text-white text-sm leading-tight">Asesorías</span>
                <span className="text-[10px] text-[#E79923] font-normal tracking-widest leading-tight">al Migrante</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              Orientación migratoria clara, honesta, estratégica y personalizada para que organices tu mudanza y empieces tu nueva vida con absoluta seguridad.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-normal text-white uppercase tracking-wider">Enlaces</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#la-guia" className="hover:text-[#E79923] transition-colors">La guía</a>
              </li>
              <li>
                <a href="#contenido" className="hover:text-[#E79923] transition-colors">Contenido</a>
              </li>
              <li>
                <a href="#herramientas" className="hover:text-[#E79923] transition-colors">Herramientas</a>
              </li>
              <li>
                <a href="#sobre-la-autora" className="hover:text-[#E79923] transition-colors">Sobre la autora</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-normal text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="hover:text-[#E79923] cursor-pointer transition-colors">Términos y condiciones</span>
              </li>
              <li>
                <span className="hover:text-[#E79923] cursor-pointer transition-colors">Política de privacidad</span>
              </li>
              <li>
                <span className="hover:text-[#E79923] cursor-pointer transition-colors">Política de reembolsos</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-normal text-white uppercase tracking-wider">¿Dudas?</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#E79923]" />
                <span className="hover:text-white transition-colors">asesoriasalmigrante@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#E79923]" />
                <span className="hover:text-white transition-colors">WhatsApp: +542235173127</span>
              </li>
              <li className="text-[10px] text-slate-500 italic">
                Lunes a Viernes de 9:00 a 17:00 (GMT-3)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#010206] border-t border-white/[0.03] py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-1.5">
            <span>© 2026 Asesorías al Migrante. Todos los derechos reservados.</span>
            <span>•</span>
            <span className="flex items-center text-slate-600">
              Creado con <Heart className="h-3.5 w-3.5 mx-1 text-rose-500 fill-rose-500" /> en la web
            </span>
          </div>
          <button
            id="scroll-to-top-btn"
            onClick={handleScrollToTop}
            className="bg-white/5 border border-white/5 hover:border-[#E79923] text-slate-300 p-2 rounded-lg transition-colors flex items-center space-x-1 hover:text-white cursor-pointer"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider">Volver arriba</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
