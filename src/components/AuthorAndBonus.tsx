import React from "react";
import { Check, ShieldCheck, Heart } from "lucide-react";
import { useI18n } from "../i18n";
import danielaGomezImg from "../assets/images/daniela_oficina.jpeg";
import accompanyIcon from "../assets/images/gold_accompany_icon_1784559283025.jpg";
import goldChecklistIcon from "../assets/images/gold_checklist_icon_1784734962119.jpg";
import goldKitIcon from "../assets/images/gold_kit_icon_1784734975612.jpg";
import goldCalendar90Icon from "../assets/images/gold_calendar90_icon_1784734990323.jpg";

interface AuthorAndBonusProps {
  timeLeftStr: string;
  isPromoActive: boolean;
  onOpenCheckout: (product?: { name: string; price: number; isBonus?: boolean }) => void;
}

export default function AuthorAndBonus({ timeLeftStr, isPromoActive, onOpenCheckout }: AuthorAndBonusProps) {
  const { t } = useI18n();

  const contentIncludes = t.authorIncludes.map((text, i) => ({
    text,
    sub: t.authorIncludesSub[i],
  }));

  return (
    <section id="sobre-la-autora" className="py-20 bg-gradient-to-b from-[#030914] via-[#091b35] to-[#040e1b] text-[#e2e8f0] border-b border-blue-500/10 relative overflow-hidden">
      {/* Luxury glows */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none opacity-60" />
      <div className="absolute bottom-1/4 right-10 w-[350px] h-[350px] rounded-full bg-[#E79923]/5 blur-[110px] pointer-events-none opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E79923] block">
                {t.authorBadge}
              </span>
              <h2 className="text-3xl font-display font-normal text-white tracking-tight">
                {t.authorTitle}
              </h2>
              <div className="h-1 w-12 bg-[#E79923] rounded" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {contentIncludes.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex space-x-3 shadow-sm hover:border-[#E79923]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-[#E79923]/10 text-[#E79923] h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-sm font-bold text-[#e2e8f0] leading-tight block">
                      {item.text}
                    </span>
                    <span className="text-[10px] text-[#94a3b8] block leading-tight">
                      {item.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {isPromoActive ? (
              <div className="bg-[#E79923]/5 border border-[#E79923]/25 p-4 rounded-xl space-y-3 shadow-md mt-4 animate-fadeIn text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-[#E79923] flex items-center">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-ping" />
                    {t.authorBonusActive}
                  </span>
                  <span className="text-xs font-mono font-bold bg-slate-950 px-2 py-0.5 rounded text-[#E79923]">
                    {t.authorBonusTime.replace("{timeLeftStr}", timeLeftStr)}
                  </span>
                </div>
                <p className="text-xs text-[#94a3b8]">
                  {t.authorBonusDesc.replace("{timeLeftStr}", timeLeftStr)}
                </p>
                <div className="space-y-2.5 text-xs">
                  <div className="flex space-x-2.5 items-start">
                    <span className="text-[#E79923]">🎁</span>
                    <div>
                      <strong className="text-white block font-semibold text-[11px] sm:text-xs">
                        {t.authorBonus1}
                      </strong>
                      <span className="text-[#94a3b8] text-[10px] block mt-0.5 leading-snug">
                        {t.authorBonus1Desc}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2.5 items-start">
                    <span className="text-[#E79923]">🎁</span>
                    <div>
                      <strong className="text-white block font-semibold text-[11px] sm:text-xs">
                        {t.authorBonus2}
                      </strong>
                      <span className="text-[#94a3b8] text-[10px] block mt-0.5 leading-snug">
                        {t.authorBonus2Desc}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2.5 items-start">
                    <span className="text-[#E79923]">🎁</span>
                    <div>
                      <strong className="text-white block font-semibold text-[11px] sm:text-xs">
                        {t.authorBonus3}
                      </strong>
                      <span className="text-[#94a3b8] text-[10px] block mt-0.5 leading-snug">
                        {t.authorBonus3Desc}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-rose-950/10 border border-rose-500/10 p-4 rounded-xl text-xs text-rose-300 mt-4 text-left">
                {t.authorBonusExpired}
              </div>
            )}

            <div className="bg-[#E79923]/10 text-[#e2e8f0] p-4 rounded-xl border border-[#E79923]/20 text-xs sm:text-sm mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold">{t.authorGuarantee}</span>
              </div>
              <span className="text-[10px] bg-[#E79923]/15 text-[#E79923] font-bold px-2 py-0.5 rounded border border-[#E79923]/25 uppercase font-display">
                {t.authorGuaranteeSub}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 pb-6 border-b border-white/5">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#E79923] to-[#FFB73B] blur-sm opacity-80" />
                  <img
                    src={danielaGomezImg}
                    alt="Daniela Harrington - Autora de la guía"
                    className="relative h-28 w-28 rounded-2xl object-cover shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-xs font-bold text-[#E79923] uppercase tracking-wider block">
                    {t.authorSectionTitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-normal text-white">
                    {t.authorName}
                  </h3>
                  <p className="text-xs text-[#94a3b8] font-medium">
                    {t.authorRole}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  {t.authorBio1}
                </p>
                <p>
                  {t.authorBio2}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-[#E79923]">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[#E79923]/35 bg-[#01040a] shadow-inner shadow-black flex items-center justify-center flex-shrink-0">
                  <img
                    src={accompanyIcon}
                    alt="Acompañamiento"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold font-display italic text-[#E79923]">
                  "{t.authorQuote}"
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider self-start sm:self-auto">
                {t.authorBadge2}
              </span>
            </div>
          </div>
        </div>

        {/* Standalone Bonus Purchase Section */}
        <div className="mt-16 pt-16 border-t border-white/5 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E79923] bg-[#E79923]/10 px-3.5 py-1.5 rounded-full">
              {t.resourcesBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-normal text-white tracking-tight">
              {t.resourcesTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              {t.resourcesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Resource 1 Card */}
            <div className="bg-white/[0.02] border border-white/5 hover:border-[#E79923]/30 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E79923]/35 bg-[#01040a] shadow-inner shadow-black flex items-center justify-center flex-shrink-0">
                    <img
                      src={goldChecklistIcon}
                      alt="Test de Evaluación"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {t.resource1Title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {t.resource1Desc}
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-500">{t.resourcePrice}</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg font-black text-white">USD 7.99</span>
                    <span className="text-xs text-slate-500 line-through">USD 19.00</span>
                  </div>
                </div>
                <button
                  onClick={() => onOpenCheckout({
                    name: 'Test "Estás realmente listo para emigrar?"',
                    price: 7.99,
                    isBonus: true
                  })}
                  className="w-full bg-[#E79923]/10 hover:bg-[#E79923] text-[#E79923] hover:text-[#0B2447] font-bold text-[11px] uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-200 text-center cursor-pointer"
                >
                  {t.resourceCTA}
                </button>
              </div>
            </div>

            {/* Resource 2 Card */}
            <div className="bg-white/[0.02] border border-white/5 hover:border-[#E79923]/30 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E79923]/35 bg-[#01040a] shadow-inner shadow-black flex items-center justify-center flex-shrink-0">
                    <img
                      src={goldKitIcon}
                      alt="Kit de Emergencia del Migrante"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {t.resource2Title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {t.resource2Desc}
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-500">{t.resourcePrice}</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg font-black text-white">USD 9.99</span>
                    <span className="text-xs text-slate-500 line-through">USD 29.00</span>
                  </div>
                </div>
                <button
                  onClick={() => onOpenCheckout({
                    name: "Kit de Emergencia del Migrante",
                    price: 9.99,
                    isBonus: true
                  })}
                  className="w-full bg-[#E79923]/10 hover:bg-[#E79923] text-[#E79923] hover:text-[#0B2447] font-bold text-[11px] uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-200 text-center cursor-pointer"
                >
                  {t.resourceCTA}
                </button>
              </div>
            </div>

            {/* Resource 3 Card */}
            <div className="bg-white/[0.02] border border-white/5 hover:border-[#E79923]/30 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E79923]/35 bg-[#01040a] shadow-inner shadow-black flex items-center justify-center flex-shrink-0">
                    <img
                      src={goldCalendar90Icon}
                      alt="Plan de Preparación en 90 Días"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {t.resource3Title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {t.resource3Desc}
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-500">{t.resourcePrice}</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg font-black text-white">USD 12.99</span>
                    <span className="text-xs text-slate-500 line-through">USD 39.00</span>
                  </div>
                </div>
                <button
                  onClick={() => onOpenCheckout({
                    name: "Plan de Preparación para Emigrar en 90 Días",
                    price: 12.99,
                    isBonus: true
                  })}
                  className="w-full bg-[#E79923]/10 hover:bg-[#E79923] text-[#E79923] hover:text-[#0B2447] font-bold text-[11px] uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-200 text-center cursor-pointer"
                >
                  {t.resourceCTA}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
