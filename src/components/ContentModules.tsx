import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "../i18n";
import listoEmigrarImg from "../assets/images/icon_listo_emigrar_1784306988190.jpg";
import paisCorrectoImg from "../assets/images/icon_pais_correcto_1784307003200.jpg";
import paisEstudiosImg from "../assets/images/icon_pais_estudios_1784307018765.jpg";
import visasResidenciasImg from "../assets/images/icon_visas_residencias_1784307033414.jpg";
import documentosIndispensablesImg from "../assets/images/icon_documentos_indispensables_1784307046948.jpg";
import finanzasMigratorioImg from "../assets/images/icon_finanzas_migratorio_1784307061881.jpg";
import conseguirEmpleoImg from "../assets/images/icon_conseguir_empleo_1784307080122.jpg";
import adaptacionEmocionalImg from "../assets/images/icon_adaptacion_emocional_1784307092911.jpg";
import erroresArruinarImg from "../assets/images/icon_errores_arruinar_1784307107121.jpg";
import checklistViajarImg from "../assets/images/icon_checklist_viajar_1784307119935.jpg";
import recursosEnlacesImg from "../assets/images/icon_recursos_enlaces_1784307131509.jpg";

export default function ContentModules() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  const modules = [
    {
      id: 1,
      number: t.mod1Section,
      title: t.mod1Title,
      icon: listoEmigrarImg,
      description: t.mod1Desc,
      bullets: t.mod1Bullets
    },
    {
      id: 2,
      number: t.mod2Section,
      title: t.mod2Title,
      icon: paisCorrectoImg,
      description: t.mod2Desc,
      bullets: t.mod2Bullets
    },
    {
      id: 3,
      number: t.mod3Section,
      title: t.mod3Title,
      icon: paisEstudiosImg,
      description: t.mod3Desc,
      bullets: t.mod3Bullets
    },
    {
      id: 4,
      number: t.mod4Section,
      title: t.mod4Title,
      icon: visasResidenciasImg,
      description: t.mod4Desc,
      bullets: t.mod4Bullets
    },
    {
      id: 5,
      number: t.mod5Section,
      title: t.mod5Title,
      icon: documentosIndispensablesImg,
      description: t.mod5Desc,
      bullets: t.mod5Bullets
    },
    {
      id: 6,
      number: t.mod6Section,
      title: t.mod6Title,
      icon: finanzasMigratorioImg,
      description: t.mod6Desc,
      bullets: t.mod6Bullets
    },
    {
      id: 7,
      number: t.mod7Section,
      title: t.mod7Title,
      icon: conseguirEmpleoImg,
      description: t.mod7Desc,
      bullets: t.mod7Bullets
    },
    {
      id: 8,
      number: t.mod8Section,
      title: t.mod8Title,
      icon: adaptacionEmocionalImg,
      description: t.mod8Desc,
      bullets: t.mod8Bullets
    },
    {
      id: 9,
      number: t.mod9Section,
      title: t.mod9Title,
      icon: erroresArruinarImg,
      description: t.mod9Desc,
      bullets: t.mod9Bullets
    },
    {
      id: 10,
      number: t.mod10Section,
      title: t.mod10Title,
      icon: checklistViajarImg,
      description: t.mod10Desc,
      bullets: t.mod10Bullets
    },
    {
      id: 11,
      number: t.mod11Section,
      title: t.mod11Title,
      icon: recursosEnlacesImg,
      description: t.mod11Desc,
      bullets: t.mod11Bullets
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? modules.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === modules.length - 1 ? 0 : prev + 1));
  };

  const active = modules[activeIndex];

  return (
    <section id="contenido" className="py-20 bg-gradient-to-b from-[#040e1b] via-[#08172e] to-[#030914] text-[#e2e8f0] border-b border-blue-500/10 relative overflow-hidden">
      {/* Premium background shines */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none opacity-60" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-normal text-white tracking-tight">
            {t.contentTitle}
          </h2>
          <p className="text-[#94a3b8] mt-3 font-sans text-sm sm:text-base">
            {t.contentSubtitle}
          </p>
          <div className="h-1 w-12 bg-[#E79923] mx-auto mt-4 rounded" />
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto px-12 sm:px-16">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-[#081223]/60 hover:bg-blue-950/50 text-[#94a3b8] hover:text-white border border-blue-500/15 hover:border-blue-500/40 transition-all duration-200 cursor-pointer z-20 hover:shadow-lg hover:shadow-blue-500/10"
            aria-label={t.contentPrev}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Active Module */}
          <div className="relative min-h-[380px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-[#081326]/60 border border-white/[0.06] rounded-2xl p-6 sm:p-8 shadow-2xl shadow-blue-950/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] font-bold text-[#E79923] tracking-widest uppercase bg-[#E79923]/10 px-2 py-0.5 rounded border border-[#E79923]/20">
                    {active.number}
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#E79923]/20 to-transparent" />
                  <span className="text-xs text-white/30 font-mono">
                    {activeIndex + 1} / {modules.length}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-[#E79923]/40 shadow-lg shadow-[#E79923]/10">
                    <img
                      src={active.icon}
                      alt={active.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-normal text-white leading-tight">
                    {active.title}
                  </h3>
                </div>

                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                  {active.description}
                </p>

                <div className="space-y-2.5">
                  {active.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E79923] mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-slate-300 leading-relaxed">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-[#081223]/60 hover:bg-blue-950/50 text-[#94a3b8] hover:text-white border border-blue-500/15 hover:border-blue-500/40 transition-all duration-200 cursor-pointer z-20 hover:shadow-lg hover:shadow-blue-500/10"
            aria-label={t.contentNext}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Dots indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {modules.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "bg-[#E79923] w-6"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Ir a sección ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
