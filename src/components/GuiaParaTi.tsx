import React from "react";
import { Check } from "lucide-react";
import { useI18n } from "../i18n";
import importantIcon from "../assets/images/gold_important_icon_1784555057567.jpg";

export default function GuiaParaTi() {
  const { t } = useI18n();
  const pointsList = [
    t.guiaParaTi1,
    t.guiaParaTi2,
    t.guiaParaTi3,
    t.guiaParaTi4,
    t.guiaParaTi5
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#030812] to-[#040e1b] text-[#e2e8f0] border-b border-blue-500/10 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-display font-normal text-white tracking-tight">
              {t.guiaParaTiTitle}
            </h2>
            <div className="h-1 w-12 bg-[#E79923] rounded" />
            <ul className="space-y-4 pt-4">
              {pointsList.map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-[#E79923]/10 text-[#E79923] p-1 rounded-full mt-1 border border-[#E79923]/20">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="text-[#94a3b8] text-base font-medium font-sans">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#081223]/50 border border-blue-500/15 p-8 rounded-2xl relative shadow-xl backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl overflow-hidden border border-[#E79923]/35 bg-[#020712] shadow-inner shadow-black">
                  <img
                    src={importantIcon}
                    alt="Importante"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-display text-lg font-normal text-white">
                  {t.guiaParaTiImportant}
                </h3>
              </div>
              <div className="space-y-3 text-[#94a3b8] text-sm leading-relaxed">
                <p>
                  <span dangerouslySetInnerHTML={{ __html: t.guiaParaTiImportantP1 }} />
                </p>
                <p>
                  <span dangerouslySetInnerHTML={{ __html: t.guiaParaTiImportantP2 }} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
