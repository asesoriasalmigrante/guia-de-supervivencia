import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "../i18n";
import { LanguageSelector } from "./LanguageSelector";

interface NavbarProps {
  onOpenCheckout: () => void;
  timeLeftStr: string;
  isPromoActive: boolean;
}

export default function Navbar({ onOpenCheckout, timeLeftStr, isPromoActive }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();
  const menuItems = [
    { label: t.navGuide, href: "#la-guia" },
    { label: t.navContent, href: "#contenido" },
    { label: t.navTools, href: "#herramientas" },
    { label: t.navAuthor, href: "#sobre-la-autora" },
    { label: t.navTestimonials, href: "#testimonios" },
    { label: t.navFAQ, href: "#faq" }
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#020712]/90 backdrop-blur-md border-b border-blue-500/15 text-[#e2e8f0]">
      {isPromoActive ? (
        <div className="bg-gradient-to-r from-[#E79923] via-[#FFC73C] to-[#FFF3D1] text-slate-950 text-center py-1.5 px-4 text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1.5 sm:gap-2 relative z-50 shadow-md border-b border-[#E79923]/20 animate-fadeIn">
          <span className="inline-block animate-pulse">🔥</span>
          <span>
            {t.navPromoActive1}{" "}
            <strong className="font-extrabold text-xs sm:text-sm bg-slate-950 text-[#E79923] px-2 py-0.5 rounded ml-1 mr-1 font-mono">
              {timeLeftStr}
            </strong>{" "}
            {t.navPromoActive2} <strong>{t.navPromoActive3}</strong> {t.navPromoActive4} <strong>{t.navPromoActive5}</strong>.
          </span>
        </div>
      ) : (
        <div className="bg-rose-950/40 text-rose-200 text-center py-1.5 px-4 text-[10px] sm:text-xs font-medium flex items-center justify-center gap-1.5 relative z-50 border-b border-rose-950/50">
          <span>{t.navPromoExpired}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center space-x-2.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="flex items-center justify-center h-9 w-9 overflow-hidden rounded-full border border-[#E79923]/20 bg-[#07172E]">
              <img
                src="/logo_dark_bg.png"
                alt="Logo Asesorías al Migrante"
                className="h-full w-full object-cover scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-normal tracking-tight text-white text-sm leading-tight">
                ASESORÍAS
              </span>
              <span className="text-[10px] text-[#E79923] font-normal tracking-widest uppercase leading-tight">
                AL MIGRANTE
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8] hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector />
            <button
              id="nav-cta-btn"
              onClick={onOpenCheckout}
              className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-200 active:scale-95 cursor-pointer"
            >
              {t.navCTA}
            </button>
          </div>

          <div className="md:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-[#E79923]/50 cursor-pointer"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#020712]/95 backdrop-blur-lg border-t border-blue-500/10 animate-fadeIn">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#94a3b8] hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2 px-3">
              <button
                id="mobile-nav-cta"
                onClick={() => {
                  setIsOpen(false);
                  onOpenCheckout();
                }}
                className="w-full bg-[#E79923] hover:bg-[#FFB73B] text-[#0B2447] font-bold py-3 px-4 rounded-full text-center text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                {t.navCTA}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
