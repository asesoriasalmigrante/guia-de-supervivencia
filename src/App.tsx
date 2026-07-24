import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Emotions from "./components/Emotions";
import GuiaParaTi from "./components/GuiaParaTi";
import Achieve from "./components/Achieve";
import ContentModules from "./components/ContentModules";
import InteractiveTools from "./components/InteractiveTools";
import AuthorAndBonus from "./components/AuthorAndBonus";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import CheckoutModal from "./components/CheckoutModal";
import DottedWorldMap from "./components/DottedWorldMap";
import ebookCoverImg from "./assets/images/ebook_cover.jpeg";
import { useI18n } from "./i18n";
import { VisitorCounter } from "./components/VisitorCounter";

export default function App() {
  const { t } = useI18n();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; price: number; isBonus?: boolean } | null>(null);
  const promoTimerKey = "migrante_promo_timer_end";
  const promoDurationMs = 900 * 1000; // 15 minutes
  const [timeLeft, setTimeLeft] = useState(promoDurationMs);
  const [isPromoActive, setIsPromoActive] = useState(true);

  useEffect(() => {
    let timerEnd = localStorage.getItem(promoTimerKey);
    let targetTime: number;

    if (timerEnd) {
      targetTime = parseInt(timerEnd, 10);
      if (Date.now() > targetTime) {
        setIsPromoActive(false);
        setTimeLeft(0);
      }
    } else {
      targetTime = Date.now() + promoDurationMs;
      localStorage.setItem(promoTimerKey, targetTime.toString());
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const difference = targetTime - now;
      if (difference <= 0) {
        setIsPromoActive(false);
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(difference);
        setIsPromoActive(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const formattedTimeStr = formatTime(timeLeft);

  const openCheckout = (product?: { name: string; price: number; isBonus?: boolean } | React.MouseEvent | any) => {
    if (product && typeof product === "object" && "name" in product && typeof product.name === "string" && "price" in product) {
      setSelectedProduct(product);
    } else {
      setSelectedProduct(null);
    }
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#020712] text-[#e2e8f0] font-sans selection:bg-[#E79923] selection:text-[#020712]">
      <Navbar
        onOpenCheckout={openCheckout}
        timeLeftStr={formattedTimeStr}
        isPromoActive={isPromoActive}
      />
      <Hero
        onOpenCheckout={openCheckout}
        timeLeftStr={formattedTimeStr}
        isPromoActive={isPromoActive}
      />
      <Emotions />
      <GuiaParaTi />
      <Achieve />
      <ContentModules />
      <InteractiveTools />
      <AuthorAndBonus
        timeLeftStr={formattedTimeStr}
        isPromoActive={isPromoActive}
        onOpenCheckout={openCheckout}
      />
      <Testimonials />
      <FAQ />

      {/* Pre-footer CTA Section */}
      <section className="bg-gradient-to-b from-[#040D1B] via-[#0A1D37] to-[#020712] border-t border-b border-blue-500/10 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Blue luxury shines / glows */}
          <div className="absolute -top-12 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[130px] opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E79923]/5 blur-[150px] opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] opacity-40" />
          
          {/* Pointillism World Map Watermark */}
          <DottedWorldMap 
            className="absolute inset-0 w-full h-full opacity-40 mix-blend-lighten"
            dotColor="#E79923"
            dotOpacity={0.06}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="bg-[#E79923]/10 border border-[#E79923]/20 px-3.5 py-1.5 rounded-full text-[#E79923] text-xs font-bold uppercase tracking-widest inline-block">
            {isPromoActive
              ? t.promoBanner.replace("{time}", formattedTimeStr)
              : t.promoHeading}
          </div>

          {/* eBook Cover Display */}
          <div className="pt-2 pb-1 flex justify-center">
            <div className="relative group max-w-[200px] sm:max-w-[230px] rounded-xl overflow-hidden border border-[#E79923]/30 bg-[#020712] shadow-2xl shadow-blue-950/80 hover:border-[#E79923]/70 hover:scale-105 transition-all duration-300">
              <img
                src={ebookCoverImg}
                alt="Portada de la Guía de Supervivencia al Migrante"
                className="w-full h-auto object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-normal text-white tracking-tight leading-none">
            {isPromoActive
              ? t.promoSubheading
              : t.promoDesc1}
          </h2>

          <p className="text-sm sm:text-base text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            {isPromoActive
              ? t.promoDesc2.replace("{time}", formattedTimeStr)
              : t.promoDesc1}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300 font-semibold pt-2">
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E79923] mr-2 animate-pulse" /> {t.promoTrust1}
            </span>
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E79923] mr-2 animate-pulse" /> {t.promoTrust2}
            </span>
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E79923] mr-2 animate-pulse" /> {t.promoTrust3}
            </span>
          </div>

          <div className="pt-4">
            <button
              id="pre-footer-cta-btn"
              onClick={openCheckout}
              className="bg-[#E79923] hover:bg-[#FFB73B] text-[#020712] font-black text-sm uppercase tracking-widest px-8 py-4.5 rounded-full transition-all shadow-lg shadow-[#E79923]/10 hover:shadow-xl hover:shadow-[#E79923]/35 inline-flex items-center space-x-2 active:scale-98 cursor-pointer"
            >
              <span>{t.promoCTA}</span>
              <span className="bg-[#020712]/10 text-[#020712] text-xs font-bold px-2.5 py-1 rounded-full ml-2">
                USD 14.99
              </span>
            </button>
            {isPromoActive && (
              <div className="text-xs text-[#E79923] mt-3 font-medium">
                {t.promoBonusNote}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <VisitorCounter />
      <Chatbot onOpenCheckout={openCheckout} />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={closeCheckout}
        isPromoActive={isPromoActive}
        timeLeftStr={formattedTimeStr}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}
