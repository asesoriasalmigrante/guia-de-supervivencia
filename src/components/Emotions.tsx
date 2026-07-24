import React from "react";
import { Heart } from "lucide-react";
import { useI18n } from "../i18n";
import listoEmigrarImg from "../assets/images/icon_listo_emigrar_1784306988190.jpg";
import docIndispensablesImg from "../assets/images/icon_documentos_indispensables_1784307046948.jpg";
import erroresArruinarImg from "../assets/images/icon_errores_arruinar_1784307107121.jpg";
import checklistViajarImg from "../assets/images/icon_checklist_viajar_1784307119935.jpg";
import accompanyIcon from "../assets/images/gold_accompany_icon_1784559283025.jpg";

export default function Emotions() {
  const { t } = useI18n();
  const emotionsList = [
    {
      id: 1,
      icon: (
        <img
          src={listoEmigrarImg}
          alt="Quieres empezar"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-lg border border-[#E79923]/20 group-hover:border-[#E79923]/50 transition-all duration-300"
          referrerPolicy="no-referrer"
        />
      ),
      text: t.emotions1
    },
    {
      id: 2,
      icon: (
        <img
          src={docIndispensablesImg}
          alt="Visas y trámites"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-lg border border-[#E79923]/20 group-hover:border-[#E79923]/50 transition-all duration-300"
          referrerPolicy="no-referrer"
        />
      ),
      text: t.emotions2
    },
    {
      id: 3,
      icon: (
        <img
          src={erroresArruinarImg}
          alt="Miedo de tomar una decisión"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-lg border border-[#E79923]/20 group-hover:border-[#E79923]/50 transition-all duration-300"
          referrerPolicy="no-referrer"
        />
      ),
      text: t.emotions3
    },
    {
      id: 4,
      icon: (
        <img
          src={checklistViajarImg}
          alt="Empezar por completo"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-lg border border-[#E79923]/20 group-hover:border-[#E79923]/50 transition-all duration-300"
          referrerPolicy="no-referrer"
        />
      ),
      text: t.emotions4
    }
  ];

  return (
    <section className="py-20 bg-[#030812] text-[#e2e8f0] border-b border-blue-900/20 relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-normal text-white tracking-tight">
            {t.emotionsTitle}
          </h2>
          <div className="h-1 w-12 bg-[#E79923] mx-auto mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {emotionsList.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 p-5 bg-[#081121]/45 border border-white/[0.03] rounded-2xl shadow-sm hover:shadow-lg hover:shadow-blue-950/15 transition-all duration-300 group hover:border-blue-500/20 hover:bg-[#0c1a32]/60"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <p className="text-[#94a3b8] text-xs sm:text-sm font-medium leading-relaxed group-hover:text-white transition-colors duration-200">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 flex">
            <div className="w-full bg-gradient-to-b from-[#0e2954]/20 to-[#030914]/40 border border-blue-500/20 p-6 sm:p-7 rounded-2xl flex flex-col justify-between shadow-xl shadow-blue-950/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E79923]/10 rounded-full blur-xl" />
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-[#E79923]/35 bg-[#01040a] shadow-inner shadow-black flex items-center justify-center">
                  <img
                    src={accompanyIcon}
                    alt="Acompañamiento"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-lg font-display font-normal text-white leading-snug">
                  {t.emotionsCardTitle}
                </h3>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6">
                <p className="text-[10px] text-[#E79923] font-bold tracking-wide uppercase">
                  {t.emotionsBadge}
                </p>
                <p className="text-[11px] text-[#94a3b8] mt-1 leading-relaxed">
                  {t.emotionsBadgeDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
