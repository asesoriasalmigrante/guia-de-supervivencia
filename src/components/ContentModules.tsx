import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  const modules = [
    {
      id: 1,
      number: "SECCIÓN 1",
      title: "¿Estás realmente listo para emigrar?",
      icon: listoEmigrarImg,
      description: "Evalúa tus motivos profundos, alinea tus expectativas y descubre si cuentas con la preparación mental necesaria para dar este gran paso.",
      bullets: [
        "Test de auto-diagnóstico inicial de idoneidad",
        "Diferencia entre viajar de vacaciones y migrar de forma permanente",
        "Manejo de expectativas familiares y profesionales",
        "El mapa mental y cronograma ideal de preparación"
      ]
    },
    {
      id: 2,
      number: "SECCIÓN 2",
      title: "Cómo elegir el país correcto",
      icon: paisCorrectoImg,
      description: "Aprende los criterios clave para tomar la decisión de tu destino ideal según el clima, idioma, costo de vida y oportunidades de desarrollo.",
      bullets: [
        "Análisis del costo de vida vs salarios reales",
        "Índices de seguridad, salud y estabilidad general",
        "Afinidad cultural y superación de la barrera del idioma",
        "Políticas de acogida e integración para nuevos migrantes"
      ]
    },
    {
      id: 3,
      number: "SECCIÓN 3",
      title: "Evaluar el país según tus estudios",
      icon: paisEstudiosImg,
      description: "Analiza la viabilidad de tu perfil profesional, los requisitos del mercado laboral local y los procesos de reconocimiento de títulos.",
      bullets: [
        "Profesiones reguladas frente a sectores no regulados",
        "Procesos y tiempos de homologación o equivalencia de títulos",
        "Búsqueda de mercados con alta demanda de tu sector",
        "Certificaciones e idiomas técnicos necesarios en el destino"
      ]
    },
    {
      id: 4,
      number: "SECCIÓN 4",
      title: "Tipos de visas y residencias",
      icon: visasResidenciasImg,
      description: "Descubre las diferentes opciones legales para ingresar y residir legalmente en tu país de destino de manera planificada.",
      bullets: [
        "Visas de trabajo, estudio y programas para nómadas digitales",
        "Residencias temporales y caminos hacia la residencia permanente",
        "Requisitos generales, solvencia económica y tiempos de resolución",
        "Vías legales de inserción y regularización en el destino"
      ]
    },
    {
      id: 5,
      number: "SECCIÓN 5",
      title: "Documentos indispensables",
      icon: documentosIndispensablesImg,
      description: "La lista exacta de la documentación civil, académica y laboral que debes preparar, legalizar y apostillar antes de viajar.",
      bullets: [
        "Actas de nacimiento, antecedentes penales y actas de matrimonio",
        "Títulos, analíticos, programas de estudio y cartas de referencia",
        "La Apostilla de La Haya y los procesos de legalización consular",
        "Organización física y digital segura para evitar pérdidas"
      ]
    },
    {
      id: 6,
      number: "SECCIÓN 6",
      title: "Finanzas y presupuesto migratorio",
      icon: finanzasMigratorioImg,
      description: "Aprende a presupuestar tu mudanza con precisión matemática, calculando el fondo de supervivencia mínimo para tus primeros meses.",
      bullets: [
        "Fórmula paso a paso para el presupuesto de transición inicial",
        "Estimación de costos reales de instalación (alquiler, depósitos, etc.)",
        "Cálculo del fondo de supervivencia mínimo para 3 y 6 meses",
        "Estrategias seguras de transferencia e intercambio de divisas"
      ]
    },
    {
      id: 7,
      number: "SECCIÓN 7",
      title: "Cómo conseguir empleo desde el extranjero",
      icon: conseguirEmpleoImg,
      description: "Estrategias prácticas para postular a ofertas de trabajo internacionales, adaptar tu currículum al estándar local y destacar.",
      bullets: [
        "Redacción de currículum (CV) y carta de presentación internacional",
        "Optimización de tu perfil de LinkedIn orientado al país de destino",
        "Uso de portales de empleo globales, locales y específicos del sector",
        "Técnicas de preparación para entrevistas virtuales y pruebas de selección"
      ]
    },
    {
      id: 8,
      number: "SECCIÓN 8",
      title: "Adaptación emocional y cultural",
      icon: adaptacionEmocionalImg,
      description: "Herramientas de psicología migratoria para gestionar con éxito el choque cultural, el duelo de partida y la soledad inicial.",
      bullets: [
        "Fases psicológicas de la curva migratoria y cómo transitarlas",
        "Estrategias de contención emocional, duelo migratorio y nostalgia",
        "Técnicas de inserción cultural activa en comunidades locales",
        "Mantener vínculos sanos con la familia y amigos a la distancia"
      ]
    },
    {
      id: 9,
      number: "SECCIÓN 9",
      title: "Errores que pueden arruinar tu proceso",
      icon: erroresArruinarImg,
      description: "Identifica y previene los fallos más habituales cometidos por migrantes que ponen en riesgo su capital, tiempo o estatus legal.",
      bullets: [
        "Viajar como turista con la intención encubierta de trabajar o residir",
        "Subestimar los costos iniciales reales y el tiempo de inserción laboral",
        "Caer en estafas de alquileres anticipados u ofertas laborales falsas",
        "Omitir la legalización, traducción o apostilla correcta de documentos"
      ]
    },
    {
      id: 10,
      number: "SECCIÓN 10",
      title: "Checklist final antes de viajar",
      icon: checklistViajarImg,
      description: "La lista de control exhaustiva para las últimas semanas y el día del viaje para asegurarte de no olvidar ningún detalle vital.",
      bullets: [
        "Checklist de equipaje, medicamentos permitidos y documentación en mano",
        "Bajas de servicios, impuestos y notificaciones en tu país de origen",
        "Coordinación de llegada, primer alojamiento y transporte local",
        "Configuración telefónica, roaming temporal y chips SIM de arribo"
      ]
    },
    {
      id: 11,
      number: "SECCIÓN 11",
      title: "Recursos y enlaces oficiales",
      icon: recursosEnlacesImg,
      description: "Un directorio clasificado de portales oficiales, embajadas, calculadoras de costo de vida y redes de apoyo migratorio seguras.",
      bullets: [
        "Sitios web oficiales de los ministerios de relaciones exteriores e inmigración",
        "Calculadoras de costo de vida y comparadores de presupuesto",
        "Buscadores de homologación de títulos y certificaciones por país",
        "Organizaciones de apoyo y comunidades de migrantes verificadas"
      ]
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
            ¿Qué encontrarás en esta guía?
          </h2>
          <p className="text-[#94a3b8] mt-3 font-sans text-sm sm:text-base">
            11 secciones clave diseñadas con un enfoque 100% práctico, sin rodeos teóricos.
          </p>
          <div className="h-1 w-12 bg-[#E79923] mx-auto mt-4 rounded" />
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto px-12 sm:px-16">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-[#081223]/60 hover:bg-blue-950/50 text-[#94a3b8] hover:text-white border border-blue-500/15 hover:border-blue-500/40 transition-all duration-200 cursor-pointer z-20 hover:shadow-lg hover:shadow-blue-500/10"
            aria-label="Sección anterior"
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
            aria-label="Siguiente sección"
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
