import React, { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquarePlus, CheckCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      name: "María G.",
      role: "Estudiante en España",
      text: "Me ayudó a organizar todo lo que tenía en la cabeza. No sabía qué documentos legalizar primero y el Módulo 3 fue mi salvación. Es como tener una mentora guiándote paso a paso.",
      rating: 5,
      avatar: "MG",
      country: "🇪🇸 España"
    },
    {
      id: 2,
      name: "Carlos M.",
      role: "Profesional en Canadá",
      text: "Muy completa, práctica y realista. Me sentí acompañado en cada página. La calculadora financiera del Módulo 2 me salvó de cometer errores fatales con mis ahorros de partida.",
      rating: 5,
      avatar: "CM",
      country: "🇨🇦 Canadá"
    },
    {
      id: 3,
      name: "Ana R.",
      role: "Reciente migrante en Chile",
      text: "La recomiendo 100%. Tiene todo lo que necesitas saber antes de tomar la decisión de mudarte. Daniela habla desde la experiencia real, sin rodeos teóricos o falsas promesas.",
      rating: 5,
      avatar: "AR",
      country: "🇨🇱 Chile"
    }
  ]);

  // Review Form State
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewsList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Por favor, ingresa tu nombre.");
      return;
    }
    if (!text.trim()) {
      setError("Por favor, escribe tu reseña.");
      return;
    }

    const initials = name
      .trim()
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "U";

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim() || "Lector de la Guía",
      text: text.trim(),
      rating: rating,
      avatar: initials,
      country: "🌎 Internacional"
    };

    setReviewsList([newReview, ...reviewsList]);
    setCurrentIndex(0);
    setSubmitted(true);
    setError("");
    setName("");
    setRole("");
    setText("");
    setRating(5);
  };

  const item = reviewsList[currentIndex] || reviewsList[0];

  return (
    <section id="testimonios" className="py-20 bg-[#02060d] text-[#e2e8f0] border-b border-blue-900/15 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0A2040]/30 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E79923] block mb-2">
            Casos de Éxito
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-normal text-white tracking-tight">
            Lo que dicen quienes ya la leyeron
          </h2>
          <div className="h-1 w-12 bg-[#E79923] mx-auto mt-4 rounded" />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-2xl mx-auto px-12 sm:px-16">
          {/* Left Arrow Button */}
          <button
            id="testimonial-prev-btn"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-[#081223]/60 hover:bg-blue-950/50 text-[#94a3b8] hover:text-white border border-blue-500/15 hover:border-blue-500/40 transition-all duration-200 cursor-pointer z-20 hover:shadow-lg hover:shadow-blue-500/10"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Testimonial Active Slide with Height stability */}
          <div className="relative min-h-[290px] sm:min-h-[230px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-[#081223]/55 border border-blue-500/20 p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative shadow-2xl shadow-blue-950/30 hover:border-blue-500/45 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#E79923]/10">
                  <Quote className="h-12 w-12 sm:h-14 sm:w-14 transform rotate-180" />
                </div>

                <div>
                  <div className="flex space-x-1 text-[#E79923] mb-4 sm:mb-5 relative z-10">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 sm:h-4.5 sm:w-4.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-200 text-xs sm:text-sm sm:leading-relaxed font-sans mb-6 sm:mb-8 relative z-10 italic">
                    “{item.text}”
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-4 sm:pt-5 border-t border-white/5 relative z-10">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#E79923]/10 text-[#E79923] font-bold text-sm sm:text-base flex items-center justify-center border border-[#E79923]/20">
                    {item.avatar}
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-[#e2e8f0] block leading-tight">
                      {item.name}
                    </span>
                    <div className="flex items-center space-x-2 text-[10px] sm:text-xs text-[#94a3b8] font-medium mt-1">
                      <span>{item.role}</span>
                      <span>•</span>
                      <span className="text-[#E79923]">{item.country}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            id="testimonial-next-btn"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/[0.02] hover:bg-white/[0.08] text-[#94a3b8] hover:text-white border border-white/5 hover:border-[#E79923]/50 transition-all duration-200 cursor-pointer z-20 hover:shadow-lg hover:shadow-[#E79923]/5"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Carousel Dots Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-8 mb-16">
          {reviewsList.map((rev, index) => (
            <button
              key={rev.id}
              id={`testimonial-dot-${index}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index
                  ? "w-8 bg-[#E79923]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* SECTION: Dejar tu Reseña */}
        <div id="dejar-resena" className="pt-12 border-t border-blue-900/30 scroll-mt-24">
          <div className="bg-[#071325]/80 border border-[#E79923]/20 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#E79923]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 bg-[#E79923]/10 border border-[#E79923]/30 px-3 py-1 rounded-full text-[#E79923] text-xs font-bold uppercase tracking-widest mb-3">
                <MessageSquarePlus className="w-3.5 h-3.5" />
                <span>Tu Opinión Cuenta</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display text-white tracking-tight">
                Déjanos tu Reseña
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                ¿Ya utilizaste nuestra guía o recursos? Comparte tu experiencia para ayudar a otros migrantes en su camino.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">¡Muchas gracias por tu reseña!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Tu comentario ha sido añadido a nuestra comunidad. Apreciamos enormemente tus palabras y tu confianza.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-[#E79923] hover:underline cursor-pointer"
                >
                  Escribir otra reseña
                </button>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-5 max-w-lg mx-auto">
                {error && (
                  <div className="bg-rose-950/50 border border-rose-500/30 text-rose-200 text-xs px-4 py-2.5 rounded-xl">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                      Tu Nombre / Alias *
                    </label>
                    <input
                      id="review-input-name"
                      type="text"
                      placeholder="Ej. Laura M."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 text-white px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E79923] placeholder-slate-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                      País / Situación (Opcional)
                    </label>
                    <input
                      id="review-input-role"
                      type="text"
                      placeholder="Ej. Residente en España"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 text-white px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E79923] placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                    Puntuación *
                  </label>
                  <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 focus:outline-none transition-transform hover:scale-125 cursor-pointer"
                        aria-label={`Calificar ${star} estrellas`}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            (hoverRating || rating) >= star
                              ? "fill-[#E79923] text-[#E79923]"
                              : "text-slate-600"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs text-slate-400 font-semibold ml-2">
                      {rating} / 5 estrellas
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                    Tu Reseña / Opinión *
                  </label>
                  <textarea
                    id="review-input-text"
                    rows={4}
                    placeholder="Cuéntanos qué fue lo que más te sirvió o cómo te ayudó el contenido..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white p-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E79923] placeholder-slate-500 resize-none"
                  />
                </div>

                <button
                  id="submit-review-btn"
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#E79923] via-[#f5aa38] to-[#E79923] hover:from-[#f5aa38] hover:to-[#E79923] text-slate-950 font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-[#E79923]/20 flex items-center justify-center space-x-2 transition-all duration-300 active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Publicar mi Reseña</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


