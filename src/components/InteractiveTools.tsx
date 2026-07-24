import React, { useState } from "react";
import { Calculator, MapPin, Users, PiggyBank } from "lucide-react";
import { useI18n } from "../i18n";
import budgetIcon from "../assets/images/gold_budget_icon_1784559840330.jpg";

export default function InteractiveTools() {
  const { t } = useI18n();
  const [destination, setDestination] = useState("A");
  const [people, setPeople] = useState(1);
  const [savings, setSavings] = useState(1500);

  const calculateBudget = () => {
    const baseTicket = destination === "A" ? 800 : destination === "B" ? 300 : 1200;
    const baseVisa = destination === "A" ? 250 : destination === "B" ? 100 : 400;
    const baseRent = destination === "A" ? 1100 : destination === "B" ? 500 : 1300;
    const multiplier = people === 1 ? 1 : people === 2 ? 1.7 : 2.8;

    const ticketCost = Math.round(baseTicket * people);
    const visaCost = Math.round(baseVisa * people);
    const rentDeposit = Math.round(baseRent * 1.5 * (people === 1 ? 1 : multiplier * 0.8));
    const monthlyLivingCost = Math.round(baseRent * multiplier);
    const emergencyReserve = Math.round(monthlyLivingCost * 3);
    const idealSavings = ticketCost + visaCost + rentDeposit + emergencyReserve;

    return {
      ticketCost,
      visaCost,
      rentDeposit,
      monthlyLivingCost,
      emergencyReserve,
      idealSavings
    };
  };

  const { ticketCost, visaCost, rentDeposit, emergencyReserve, idealSavings } = calculateBudget();
  const progressPercent = Math.min(100, Math.round((savings / idealSavings) * 100));

  return (
    <section id="herramientas" className="py-20 bg-[#030712] text-[#e2e8f0] border-b border-blue-900/15 relative">
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E79923] block mb-2">
            {t.toolsBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-normal text-white tracking-tight">
            {t.toolsTitle}
          </h2>
          <p className="text-[#94a3b8] font-sans text-sm sm:text-base mt-2">
            {t.toolsSubtitle}
          </p>
          <div className="h-1 w-12 bg-[#E79923] mx-auto mt-4 rounded" />
        </div>

        <div className="bg-[#081223]/55 border border-blue-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="border-b border-white/5 pb-4">
              <h3 className="text-lg font-display font-normal text-white leading-tight flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#E79923]/35 bg-[#01040a] shadow-inner shadow-black flex items-center justify-center flex-shrink-0">
                  <img
                    src={budgetIcon}
                    alt="Simulador de Presupuesto"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {t.toolsSimTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {t.toolsSimDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block flex items-center">
                  <MapPin className="h-3.5 w-3.5 text-[#E79923] mr-1" /> {t.toolsDestino}
                </label>
                <select
                  id="budget-destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-900 border border-white/10 text-white px-3 py-2.5 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#E79923] cursor-pointer"
                >
                  <option value="A">{t.toolsDestino1}</option>
                  <option value="C">{t.toolsDestino2}</option>
                  <option value="B">{t.toolsDestino3}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block flex items-center">
                  <Users className="h-3.5 w-3.5 text-[#E79923] mr-1" /> {t.toolsPersonas}
                </label>
                <div className="flex bg-white/5 border border-white/10 rounded-xl p-1">
                  {[1, 2, 4].map((size) => (
                    <button
                      key={size}
                      id={`budget-size-${size}`}
                      type="button"
                      onClick={() => setPeople(size)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                        people === size ? "bg-white text-slate-950" : "text-[#94a3b8] hover:text-white"
                      }`}
                    >
                      {size === 1 ? t.toolsSolo : size === 2 ? t.toolsPareja : t.toolsFamilia}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block flex items-center">
                  <PiggyBank className="h-3.5 w-3.5 text-[#E79923] mr-1" /> {t.toolsCapital}
                </label>
                <input
                  id="budget-actual-savings"
                  type="number"
                  min="0"
                  value={savings}
                  onChange={(e) => setSavings(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-white/5 border border-white/10 text-white px-3 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E79923]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-2">
              <div className="md:col-span-3 space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/[0.01] border border-white/5 rounded-xl text-slate-200">
                  <span className="text-xs font-medium text-[#94a3b8]">{t.toolsResultPasajes}</span>
                  <span className="text-sm font-bold text-white">USD {ticketCost}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/[0.01] border border-white/5 rounded-xl text-slate-200">
                  <span className="text-xs font-medium text-[#94a3b8]">{t.toolsResultTasas}</span>
                  <span className="text-sm font-bold text-white">USD {visaCost}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/[0.01] border border-white/5 rounded-xl text-slate-200">
                  <span className="text-xs font-medium text-[#94a3b8]">{t.toolsResultDeposito}</span>
                  <span className="text-sm font-bold text-white">USD {rentDeposit}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#E79923]/10 border border-[#E79923]/20 rounded-xl">
                  <div>
                    <span className="text-xs font-bold text-[#E79923]">{t.toolsResultFondo}</span>
                    <span className="block text-[10px] text-[#FFAE34] font-medium">{t.toolsResultFondoDesc}</span>
                  </div>
                  <span className="text-sm font-black text-[#E79923]">USD {emergencyReserve}</span>
                </div>
              </div>

              <div className="md:col-span-2 bg-gradient-to-br from-[#0E305C]/40 to-slate-900/30 text-[#e2e8f0] border border-[#E79923]/20 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-[#E79923] uppercase tracking-widest block">{t.toolsResumen}</span>
                  <div>
                    <span className="text-xs text-[#94a3b8] block">{t.toolsTotal}</span>
                    <span className="text-2xl font-display font-extrabold text-white">USD {idealSavings}</span>
                  </div>
                  <div className="space-y-1 pt-2">
                    <div className="flex justify-between text-[10px] font-semibold text-slate-400">
                      <span>{t.toolsAhorros} USD {savings}</span>
                      <span>{progressPercent}%</span>
                    </div>
                    <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="bg-[#E79923] h-full transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 mt-4 leading-relaxed font-sans">
                  {t.toolsDisclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
