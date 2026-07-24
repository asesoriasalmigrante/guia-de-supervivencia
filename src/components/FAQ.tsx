import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useI18n } from "../i18n";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const { t } = useI18n();

  const faqs = [
    {
      id: 1,
      question: t.faq1Q,
      answer: t.faq1A
    },
    {
      id: 2,
      question: t.faq2Q,
      answer: t.faq2A
    },
    {
      id: 3,
      question: t.faq3Q,
      answer: t.faq3A
    },
    {
      id: 4,
      question: t.faq4Q,
      answer: t.faq4A
    },
    {
      id: 5,
      question: t.faq5Q,
      answer: t.faq5A
    },
    {
      id: 6,
      question: t.faq6Q,
      answer: t.faq6A
    },
    {
      id: 7,
      question: t.faq7Q,
      answer: t.faq7A
    },
    {
      id: 8,
      question: t.faq8Q,
      answer: t.faq8A
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
            {t.faqBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-normal text-white tracking-tight">
            {t.faqTitle}
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
