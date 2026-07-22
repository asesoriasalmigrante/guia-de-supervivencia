import React from "react";
import { Check, ShieldCheck, Heart } from "lucide-react";
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
  const contentIncludes = [
    {
      text: "Ebook principal digital en formato PDF de alta resolución.",
      sub: "Lectura instantánea tras el pago."
    },
    {
      text: "Más de 150 páginas de metodologías y vivencias reales.",
      sub: "Sin contenido de relleno."
    },
    {
      text: "Checklist interactivo de documentos y finanzas descargable.",
      sub: "En formato Excel y PDF imprimible."
    },
    {
      text: "Acceso ilimitado de lectura desde cualquier dispositivo.",
      sub: "Celular, tablet o computadora."
    },
    {
      text: "Actualizaciones futuras gratuitas de por vida.",
      sub: "Nuevas ediciones sin pagar más."
    },
    {
      text: "Soporte prioritario pre y post-venta por correo electrónico.",
      sub: "Respuestas personalizadas en menos de 48 horas."
    }
  ];

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
                El Paquete Completo
              </span>
              <h2 className="text-3xl font-display font-normal text-white tracking-tight">
                Con tu compra recibes:
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
                    ¡3 Bonos Exclusivos Incluidos Gratis!
                  </span>
                  <span className="text-xs font-mono font-bold bg-slate-950 px-2 py-0.5 rounded text-[#E79923]">
                    Quedan: {timeLeftStr}
                  </span>
                </div>
                <p className="text-xs text-[#94a3b8]">
                  Si completas tu pedido en los próximos {timeLeftStr} minutos, recibirás de forma 100% gratuita los siguientes recursos desarrollados por Daniela:
                </p>
                <div className="space-y-2.5 text-xs">
                  <div className="flex space-x-2.5 items-start">
                    <span className="text-[#E79923]">🎁</span>
                    <div>
                      <strong className="text-white block font-semibold text-[11px] sm:text-xs">
                        Bono #1: Test “¿Estás realmente listo para emigrar?” (Valor USD 19)
                      </strong>
                      <span className="text-[#94a3b8] text-[10px] block mt-0.5 leading-snug">
                        Autoevaluación psicológica y actitudinal con reporte de preparación instantáneo.
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2.5 items-start">
                    <span className="text-[#E79923]">🎁</span>
                    <div>
                      <strong className="text-white block font-semibold text-[11px] sm:text-xs">
                        Bono #2: Kit de Emergencia del Migrante (Valor USD 29)
                      </strong>
                      <span className="text-[#94a3b8] text-[10px] block mt-0.5 leading-snug">
                        Protocolos rápidos ante pérdida de equipaje, documentos extraviados o emergencias de salud.
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2.5 items-start">
                    <span className="text-[#E79923]">🎁</span>
                    <div>
                      <strong className="text-white block font-semibold text-[11px] sm:text-xs">
                        Bono #3: Plan de Preparación para Emigrar en 90 Días (Valor USD 39)
                      </strong>
                      <span className="text-[#94a3b8] text-[10px] block mt-0.5 leading-snug">
                        Calendario paso a paso con las tareas organizadas mes a mes antes de abordar tu avión.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-rose-950/10 border border-rose-500/10 p-4 rounded-xl text-xs text-rose-300 mt-4 text-left">
                ⏳ Los 3 Bonos de Regalo (Valorados en USD 87) han expirado, pero aún puedes comprar la guía de supervivencia por el precio reducido de lanzamiento de USD 14.99.
              </div>
            )}

            <div className="bg-[#E79923]/10 text-[#e2e8f0] p-4 rounded-xl border border-[#E79923]/20 text-xs sm:text-sm mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold">Garantía de Satisfacción de 3 días</span>
              </div>
              <span className="text-[10px] bg-[#E79923]/15 text-[#E79923] font-bold px-2 py-0.5 rounded border border-[#E79923]/25 uppercase font-display">
                Sin preguntas
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
                    Sobre la autora
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-normal text-white">
                    Daniela Harrington
                  </h3>
                  <p className="text-xs text-[#94a3b8] font-medium">
                    Abogada Migratoria y fundadora de Asesorías al Migrante
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  Soy Daniela Harrington, abogada experta en Derecho Migratorio, gestión documental internacional y fundadora de Asesorías al Migrante. También soy migrante, y por eso entiendo de primera mano los retos, miedos y oportunidades que trae empezar de cero en otro país.
                </p>
                <p>
                  A lo largo de mi carrera profesional he acompañado a cientos de personas a organizar sus carpetas de documentos, estructurar sus presupuestos y avanzar con total seguridad jurídica. Esta guía recopila mis años de experiencia legal y mi propia vivencia para darte una hoja de ruta transparente, honesta y realista.
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
                  “Esta guía es mi forma de acompañarte a ti.”
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider self-start sm:self-auto">
                MIGRANTE Y ABOGADA
              </span>
            </div>
          </div>
        </div>

        {/* Standalone Bonus Purchase Section */}
        <div className="mt-16 pt-16 border-t border-white/5 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E79923] bg-[#E79923]/10 px-3.5 py-1.5 rounded-full">
              Recursos por Separado
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-normal text-white tracking-tight">
              ¿No quieres la guía completa? Compra un recurso individual
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Si únicamente estás interesado en una herramienta específica para tu planificación y prefieres no adquirir la guía completa hoy, puedes comprar cualquiera de nuestros recursos premium por separado con acceso inmediato e ilimitado.
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
                    Test “¿Estás realmente listo para emigrar?”
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  Un sistema interactivo de autoevaluación psicológica, emocional y financiera que te dará una puntuación de preparación instantánea y consejos de adaptación.
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-500">Precio individual:</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg font-black text-white">USD 7.99</span>
                    <span className="text-xs text-slate-500 line-through">USD 19.00</span>
                  </div>
                </div>
                <button
                  onClick={() => onOpenCheckout({
                    name: "Test “¿Estás realmente listo para emigrar?”",
                    price: 7.99,
                    isBonus: true
                  })}
                  className="w-full bg-[#E79923]/10 hover:bg-[#E79923] text-[#E79923] hover:text-[#0B2447] font-bold text-[11px] uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-200 text-center cursor-pointer"
                >
                  Adquirir este recurso solo
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
                    Kit de Emergencia del Migrante
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  Protocolos, listas rápidas de contingencia y directorios clave mundiales para reaccionar ante pérdida de documentos, cancelaciones de vuelos o salud.
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-500">Precio individual:</span>
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
                  Adquirir este recurso solo
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
                    Plan de Preparación en 90 Días
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  Planificador paso a paso detallado por semanas con hitos administrativos, familiares y financieros indispensables antes de abordar el avión.
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-500">Precio individual:</span>
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
                  Adquirir este recurso solo
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
