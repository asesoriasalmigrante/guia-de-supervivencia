import React from "react";
import { useI18n } from "../i18n";
import telescopioImg from "../assets/images/icon_telescopio_1784306912354.jpg";
import checklistCalendarioImg from "../assets/images/icon_checklist_calendario_1784306968730.jpg";
import menteCorazonImg from "../assets/images/icon_mente_corazon_1784306926235.jpg";
import calculadoraFinanzasImg from "../assets/images/icon_calculadora_finanzas_1784306942093.jpg";
import escudoBalanzaImg from "../assets/images/icon_escudo_balanza_1784306956203.jpg";

export default function Achieve() {
  const { t } = useI18n();
  const points = [
    {
      id: 1,
      icon: (
        <img
          src={telescopioImg}
          alt="Visión realista"
          className="w-full h-full rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
      ),
      title: t.achieve1Title,
      text: t.achieve1Desc
    },
    {
      id: 2,
      icon: (
        <img
          src={checklistCalendarioImg}
          alt="Organización total"
          className="w-full h-full rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
      ),
      title: t.achieve2Title,
      text: t.achieve2Desc
    },
    {
      id: 3,
      icon: (
        <img
          src={menteCorazonImg}
          alt="Manejo emocional"
          className="w-full h-full rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
      ),
      title: t.achieve3Title,
      text: t.achieve3Desc
    },
    {
      id: 4,
      icon: (
        <img
          src={calculadoraFinanzasImg}
          alt="Control de gastos"
          className="w-full h-full rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
      ),
      title: t.achieve4Title,
      text: t.achieve4Desc
    },
    {
      id: 5,
      icon: (
        <img
          src={escudoBalanzaImg}
          alt="Seguridad legal"
          className="w-full h-full rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
      ),
      title: t.achieve5Title,
      text: t.achieve5Desc
    }
  ];

  return (
    <section className="py-20 bg-[#030711] text-[#e2e8f0] border-b border-blue-900/15 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.03),transparent_40%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-normal text-white tracking-tight">
            {t.achieveTitle}
          </h2>
          <div className="h-1 w-12 bg-[#E79923] mx-auto mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {points.map((item) => (
            <div
              key={item.id}
              className="bg-[#09111e]/40 border border-white/[0.04] p-5 rounded-2xl flex flex-col justify-between shadow-md hover:shadow-xl hover:shadow-blue-950/20 hover:border-blue-500/20 hover:bg-[#0d1a30]/50 transition-all duration-300 group animate-fadeIn cursor-default"
            >
              <div>
                <div className="flex items-center space-x-3 mb-3 border-b border-white/5 pb-2.5">
                  <div className="flex-shrink-0 rounded-full border border-[#E79923]/30 bg-[#E79923]/5 p-0.5 flex items-center justify-center w-10 h-10 group-hover:bg-[#E79923]/15 group-hover:border-[#E79923] transition-all duration-300 shadow-inner overflow-hidden">
                    {item.icon}
                  </div>
                  <h3 className="font-sans font-medium text-white text-xs sm:text-sm group-hover:text-[#E79923] transition-colors duration-200 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#94a3b8] text-[11px] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
