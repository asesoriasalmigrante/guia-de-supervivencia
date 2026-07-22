import React from "react";
import { FileText, BookOpen, Smartphone, ShoppingCart, ShieldCheck, CreditCard } from "lucide-react";
import ebookCoverImg from "../assets/images/ebook_cover.jpeg";
import DottedWorldMap from "./DottedWorldMap";
import formatIcon from "../assets/images/gold_format_icon_1784556100929.jpg";
import contentIcon from "../assets/images/gold_content_icon_1784556117314.jpg";
import supportIcon from "../assets/images/gold_support_icon_1784556133327.jpg";

interface HeroProps {
  onOpenCheckout: () => void;
  timeLeftStr: string;
  isPromoActive: boolean;
}

export default function Hero({ onOpenCheckout, timeLeftStr, isPromoActive }: HeroProps) {
  return (
    <section id="la-guia" className="relative bg-gradient-to-b from-[#020712] via-[#0A2140] to-[#040E1B] text-[#e2e8f0] overflow-hidden py-16 lg:py-24 border-b border-blue-500/15">
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Luxury layered glows and shines */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[120px] opacity-70" />
        <div className="absolute -top-20 right-1/4 w-[450px] h-[450px] rounded-full bg-indigo-600/10 blur-[130px] opacity-60" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-[#E79923]/10 blur-[140px] opacity-50" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[100px] opacity-50" />
        
        {/* Pointillism World Map Watermark */}
        <DottedWorldMap 
          className="absolute inset-0 w-full h-full opacity-60 mix-blend-lighten"
          dotColor="#E79923"
          dotOpacity={0.09}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Row 1: Title and Big Book Mockup Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Title, Subtitle, Specs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#E79923]/10 border border-[#E79923]/20 px-3.5 py-1.5 rounded-full text-[#E79923] text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E79923] animate-pulse" />
              <span>Guía Digital Completa</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-white tracking-tight leading-none">
              Mudarse a Otro País:
              <span className="block mt-2 bg-gradient-to-r from-[#E79923] via-[#FFC73C] to-[#FFF3D1] bg-clip-text text-transparent font-extrabold tracking-tight">
                La Verdadera Guía de Supervivencia
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#94a3b8] font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              La guía práctica y realista que necesitas para preparar tu mente, tus documentos y tu vida antes de empezar de cero en otro país. Sin falsas promesas, solo verdades indispensables.
            </p>

            <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 pt-2">
              <div className="flex flex-col items-center lg:items-start p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E79923]/35 bg-[#01040a] shadow-inner shadow-black mb-2 flex items-center justify-center">
                  <img
                    src={formatIcon}
                    alt="Formato PDF Inmediato"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs text-[#94a3b8] font-medium">Formato</span>
                <span className="text-sm font-bold text-white">PDF Inmediato</span>
              </div>

              <div className="flex flex-col items-center lg:items-start p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E79923]/35 bg-[#01040a] shadow-inner shadow-black mb-2 flex items-center justify-center">
                  <img
                    src={contentIcon}
                    alt="Contenido +150 Páginas"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs text-[#94a3b8] font-medium">Contenido</span>
                <span className="text-sm font-bold text-white">+150 Páginas</span>
              </div>

              <div className="flex flex-col items-center lg:items-start p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E79923]/35 bg-[#01040a] shadow-inner shadow-black mb-2 flex items-center justify-center">
                  <img
                    src={supportIcon}
                    alt="Soporte Multi-dispositivo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs text-[#94a3b8] font-medium">Soporte</span>
                <span className="text-sm font-bold text-white">Multi-dispositivo</span>
              </div>
            </div>
          </div>

          {/* Right: Big Mockups (Image) */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg h-[460px] sm:h-[540px]">
              {/* Main Book - Larger */}
              <div
                className="absolute top-4 left-6 sm:left-10 w-72 sm:w-80 h-[380px] sm:h-[440px] rounded-r-xl bg-gradient-to-r from-[#051329] via-[#0B2447] to-[#163A6E] shadow-2xl shadow-[#E79923]/20 border-r-4 border-slate-950 z-20 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
                onClick={onOpenCheckout}
              >
                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/55 via-black/20 to-transparent z-10 border-r border-black/15" />
                <img
                  src={ebookCoverImg}
                  alt="Mudarse a Otro País: La verdadera Guía de Supervivencia - Portada del Ebook"
                  className="w-full h-full object-cover relative z-0"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Tablet Mockup - Larger */}
              <div className="absolute top-16 right-4 sm:right-6 w-52 sm:w-60 h-[280px] sm:h-[320px] bg-slate-950 rounded-2xl border border-white/10 shadow-2xl shadow-[#E79923]/5 z-10 overflow-hidden transform rotate-2">
                <div className="h-full bg-slate-950 p-2">
                  <div className="h-full rounded-lg overflow-hidden relative border border-white/5 bg-[#020712]">
                    <img
                      src={ebookCoverImg}
                      alt="Ebook cover on tablet screen"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Mockup - Larger */}
              <div className="absolute bottom-6 right-2 sm:right-0 w-36 h-[220px] bg-slate-950 rounded-2xl border border-white/10 shadow-2xl shadow-[#E79923]/5 z-30 overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="h-full p-1 bg-slate-950">
                  <div className="h-full rounded-xl overflow-hidden relative border border-white/5 bg-[#020712]">
                    <img
                      src={ebookCoverImg}
                      alt="Ebook cover on phone screen"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Pricing & CTA Box - Clean and spacious centered box */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/[0.02] border border-white/5 p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E79923]/5 to-transparent pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Price and Details */}
              <div className="md:col-span-5 text-center md:text-left">
                <span className="text-xs font-bold text-[#E79923] tracking-wider uppercase block mb-1">
                  Precio de lanzamiento
                </span>
                <div className="flex items-baseline justify-center md:justify-start space-x-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">USD 14.99</span>
                  <span className="text-base text-slate-500 line-through">USD 29.90</span>
                </div>
                <div className="mt-3 inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Ahorras 50% de inmediato
                </div>
              </div>

              {/* CTA Button and Secure Text */}
              <div className="md:col-span-7 space-y-3">
                <button
                  id="hero-cta-btn"
                  onClick={onOpenCheckout}
                  className="w-full bg-[#E79923] hover:bg-[#FFB73B] text-[#0B2447] font-black text-sm uppercase tracking-widest py-4 px-6 rounded-full flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg shadow-[#E79923]/10 hover:shadow-xl hover:shadow-[#E79923]/35 active:scale-[0.99] cursor-pointer"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Quiero mi guía ahora</span>
                </button>

                <p className="text-xs text-[#94a3b8] flex items-center justify-center space-x-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-500 inline mr-1" />
                  <span>Pago 100% seguro • Acceso inmediato post-pago</span>
                </p>
              </div>
            </div>

            {/* Promo Bonuses */}
            {isPromoActive ? (
              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
                  <span className="font-bold text-[#E79923] flex items-center justify-center sm:justify-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5 animate-ping" />
                    ¡PROMO EXCLUSIVA CON 3 BONOS GRATIS! termina en:
                  </span>
                  <span className="font-mono bg-slate-950 px-3 py-1 rounded text-[#E79923] font-black text-sm text-center">
                    {timeLeftStr}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                  <div className="bg-white/[0.01] border border-white/5 rounded-xl p-3.5 text-xs text-slate-300 flex flex-col justify-between">
                    <div>
                      <span className="text-[#E79923] font-semibold block mb-1">🎁 Bono 1</span>
                      <span>Test “¿Estás realmente listo para emigrar?”</span>
                    </div>
                    <span className="text-[#E79923] font-bold mt-2 text-right block text-[11px]">
                      GRATIS <span className="line-through text-slate-500 font-normal ml-1">USD 19</span>
                    </span>
                  </div>

                  <div className="bg-white/[0.01] border border-white/5 rounded-xl p-3.5 text-xs text-slate-300 flex flex-col justify-between">
                    <div>
                      <span className="text-[#E79923] font-semibold block mb-1">🎁 Bono 2</span>
                      <span>Kit de Emergencia del Migrante</span>
                    </div>
                    <span className="text-[#E79923] font-bold mt-2 text-right block text-[11px]">
                      GRATIS <span className="line-through text-slate-500 font-normal ml-1">USD 29</span>
                    </span>
                  </div>

                  <div className="bg-white/[0.01] border border-white/5 rounded-xl p-3.5 text-xs text-slate-300 flex flex-col justify-between">
                    <div>
                      <span className="text-[#E79923] font-semibold block mb-1">🎁 Bono 3</span>
                      <span>Plan de Preparación en 90 Días</span>
                    </div>
                    <span className="text-[#E79923] font-bold mt-2 text-right block text-[11px]">
                      GRATIS <span className="line-through text-slate-500 font-normal ml-1">USD 39</span>
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 text-[10.5px] text-emerald-400 font-semibold text-center">
                  ⚡ ¡Ahorras USD 87 adicionales si compras antes de que termine el reloj!
                </div>
              </div>
            ) : (
              <div className="border-t border-white/10 pt-4 text-center text-xs text-rose-400 font-medium">
                ⏳ La promoción de los 3 bonos premium gratuitos ha expirado, pero aún puedes adquirir la guía por el precio de lanzamiento de USD 14.99.
              </div>
            )}

            {/* Payment Processing Logos */}
            <div className="border-t border-white/5 pt-4 text-center space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                Pagos Seguros Procesados Con:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-300">
                <span className="flex items-center bg-white/[0.02] px-3 py-1 rounded-lg border border-white/5">
                  <CreditCard className="h-3 w-3 mr-1 text-sky-400" /> Stripe
                </span>
                <span className="flex items-center bg-white/[0.02] px-3 py-1 rounded-lg border border-white/5">
                  <span className="text-blue-500 mr-1 font-black italic">P</span> PayPal
                </span>
                <span className="flex items-center bg-white/[0.02] px-3 py-1 rounded-lg border border-white/5">
                  <span className="text-blue-400 font-bold mr-1">m</span> MercadoPago
                </span>
                <span className="text-slate-400 text-[11px] flex items-center ml-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 mr-1" /> Datos protegidos
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
