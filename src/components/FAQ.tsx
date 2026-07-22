import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "¿Cómo recibiré la guía?",
      answer: "Inmediatamente después de realizar tu pago seguro, recibirás un correo electrónico con un enlace para descargar la guía en formato PDF de alta resolución. También podrás descargarla directamente desde la pantalla de confirmación en esta misma página web."
    },
    {
      id: 2,
      question: "¿Puedo leer la guía desde mi celular o tablet?",
      answer: "Sí, por supuesto. La guía está optimizada en formato digital estándar PDF compatible con todos los lectores de ebooks modernos en smartphones, tabletas (iOS, Android, Kindle), laptops y computadoras de escritorio."
    },
    {
      id: 3,
      question: "¿La guía está enfocada en un país específico?",
      answer: "No. Se trata de un sistema universal y organizativo aplicable a cualquier proceso de emigración (España, Canadá, Estados Unidos, Australia, etc.). No contiene leyes nacionales específicas, sino la metodología integral de planificación financiera, ordenamiento civil de documentos, manejo emocional y adaptación cultural común a todo proceso migratorio exitoso."
    },
    {
      id: 4,
      question: "¿Necesito tener experiencia migratoria para entenderla?",
      answer: "Para nada. La guía está escrita en un lenguaje sumamente sencillo, empático y libre de tecnicismos legales densos. Está diseñada para guiar desde cero tanto a personas que recién están considerando mudarse como a migrantes recientes en plena etapa de adaptación."
    },
    {
      id: 5,
      question: "¿Incluye asesoría personalizada?",
      answer: "No, la guía digital es de auto-estudio y planificación autónoma. Sin embargo, con tu compra adquieres soporte prioritario por correo electrónico donde Daniela y su equipo responderán dudas conceptuales relacionadas con las metodologías explicadas en la guía."
    },
    {
      id: 6,
      question: "¿El pago es único?",
      answer: "Sí, es un pago único de USD 14.99. No existen suscripciones recurrentes, cargos sorpresa ni costos de mantenimiento. Pagas una sola vez y adquieres el ebook junto con todas sus actualizaciones de por vida."
    },
    {
      id: 7,
      question: "¿Puedo solicitar un reembolso?",
      answer: "Sí. Contamos con una garantía de satisfacción total de 3 días. Si por alguna razón sientes que la guía no cumple con tus expectativas o no te aporta el valor prometido, escríbenos a nuestro correo de soporte y realizaremos la devolución del 100% de tu dinero de forma inmediata y sin preguntas."
    },
    {
      id: 8,
      question: "¿Qué pasa si tengo dudas después de comprarla?",
      answer: "Junto con la guía digital se incluye soporte post-venta por email de por vida. Puedes escribirnos en cualquier momento para aclaraciones técnicas sobre cómo organizar tus carpetas de documentos o estructurar tus hojas de presupuesto."
    }
  ];

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-[#02060d] to-[#040e1b] text-[#e2e8f0] border-b border-blue-900/15 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E79923] block mb-2">
            Resolviendo tus Dudas
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-normal text-white tracking-tight">
            Preguntas frecuentes
          </h2>
          <div className="h-1 w-12 bg-[#E79923] mx-auto mt-4 rounded" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#081223]/55 border border-blue-500/15 rounded-2xl overflow-hidden shadow-lg hover:border-blue-500/35 transition-all duration-200"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => handleToggle(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between space-x-4 focus:outline-none focus:ring-2 focus:ring-[#E79923]/30 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-display leading-snug">
                    {faq.question}
                  </span>
                  <div className="bg-white/5 p-1.5 rounded-lg text-[#94a3b8] flex-shrink-0">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-t border-white/5 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
