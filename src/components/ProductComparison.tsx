import React from "react";
import { Smartphone, FileText, Check, Star, ShoppingCart } from "lucide-react";
import { useI18n } from "../i18n";

interface ProductComparisonProps {
  onOpenCheckout: (product: { name: string; price: number; type: "app" | "pdf" }) => void;
}

export default function ProductComparison({ onOpenCheckout }: ProductComparisonProps) {
  const { t } = useI18n();

  return (
    <section className="py-16 bg-gradient-to-b from-[#020712] via-[#0A1D37] to-[#020712]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#E79923]/10 border border-[#E79923]/20 px-4 py-2 rounded-full text-[#E79923] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E79923] animate-pulse" />
            <span>{t.productComparisonTitle}</span>
          </div>
          <p className="text-[#94a3b8] text-sm max-w-md mx-auto">
            {t.productComparisonSubtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* App Card */}
          <div className="relative bg-gradient-to-b from-[#0A1D37] to-[#020712] border border-[#E79923]/30 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-[#E79923]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#E79923]/10">
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E79923] text-[#0B2447] text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3" />
              {t.productAppBadge}
            </div>

            {/* Icon */}
            <div className="flex justify-center pt-4">
              <div className="w-16 h-16 bg-[#E79923]/10 border border-[#E79923]/30 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-[#E79923]" />
              </div>
            </div>

            {/* Title & Description */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">{t.productAppTitle}</h3>
              <p className="text-sm text-[#94a3b8]">{t.productAppDesc}</p>
            </div>

            {/* Price */}
            <div className="text-center space-y-1">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-black text-[#E79923]">{t.productAppPrice}</span>
                <span className="text-sm text-slate-500 line-through">{t.productAppOriginalPrice}</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3">
              {[t.productAppFeature1, t.productAppFeature2, t.productAppFeature3, t.productAppFeature4, t.productAppFeature5].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-[#E79923] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => onOpenCheckout({ name: t.productAppTitle, price: 19.99, type: "app" })}
              className="w-full bg-[#E79923] hover:bg-[#FFB73B] text-[#0B2447] font-black text-sm uppercase tracking-widest py-4 px-6 rounded-full flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg shadow-[#E79923]/10 hover:shadow-xl hover:shadow-[#E79923]/35 active:scale-[0.99] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>{t.productAppCTA}</span>
            </button>
          </div>

          {/* PDF Card */}
          <div className="relative bg-gradient-to-b from-[#0A1D37] to-[#020712] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-white/20 transition-all duration-300">
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
              {t.productPdfBadge}
            </div>

            {/* Icon */}
            <div className="flex justify-center pt-4">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-slate-400" />
              </div>
            </div>

            {/* Title & Description */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">{t.productPdfTitle}</h3>
              <p className="text-sm text-[#94a3b8]">{t.productPdfDesc}</p>
            </div>

            {/* Price */}
            <div className="text-center space-y-1">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-black text-white">{t.productPdfPrice}</span>
                <span className="text-sm text-slate-500 line-through">{t.productPdfOriginalPrice}</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3">
              {[t.productPdfFeature1, t.productPdfFeature2, t.productPdfFeature3].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => onOpenCheckout({ name: t.productPdfTitle, price: 14.99, type: "pdf" })}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-black text-sm uppercase tracking-widest py-4 px-6 rounded-full flex items-center justify-center space-x-2 transition-all duration-200 border border-white/20 active:scale-[0.99] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>{t.productPdfCTA}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
