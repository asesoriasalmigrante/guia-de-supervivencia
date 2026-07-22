import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Loader2, Heart, Send } from "lucide-react";
import danielaGomezImg from "../assets/images/daniela_gomez_1784296659468.jpg";
import aiChatIcon from "../assets/images/gold_ai_chat_icon_1784556885223.jpg";

interface ChatbotProps {
  onOpenCheckout: () => void;
}

interface Message {
  id: string;
  role: "user" | "model";
  text: string;
}

export default function Chatbot({ onOpenCheckout }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "model",
      text: "¡Hola! Soy la Asistente Inteligente de Daniela Harrington. Estoy aquí para resolver tus dudas sobre planificación migratoria, trámites consulares, finanzas de partida, o darte detalles sobre qué vas a aprender en la 'Guía de Supervivencia al Migrante'. ¿Hacia qué país estás planeando mudarte?"
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const presetQuestions = [
    "¿De qué trata exactamente la guía?",
    "¿Sirve si emigro desde Latinoamérica?",
    "¿Qué incluye el módulo de finanzas?",
    "¿Tiene garantía de devolución?"
  ];

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: text.trim()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    try {
      const history = messages.map((m) => ({
        role: m.role,
        text: m.text
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text, history })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Ocurrió un error al obtener respuesta.");
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "model",
        text: data.text
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: "error-" + Date.now(),
          role: "model",
          text: "Lo siento, tuve un problema al conectar con el servidor para procesar tu consulta. Sin embargo, te aseguro que la guía te será sumamente útil. Puedes adquirirla ahora con garantía de reembolso de 3 días."
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {!isOpen && (
        <button
          id="chatbot-trigger-btn"
          onClick={() => setIsOpen(true)}
          className="bg-[#020712] hover:bg-[#0A1D37] text-[#E79923] p-2.5 rounded-full shadow-2xl flex items-center justify-center border border-blue-500/25 hover:border-[#E79923]/60 transition-all duration-300 group hover:scale-105 active:scale-95 cursor-pointer"
          title="¿Dudas? Chatea con nuestro asesor de IA"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#E79923]/40 bg-[#01040a] flex items-center justify-center">
            <img
              src={aiChatIcon}
              alt="Asesor IA Icono"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2.5 transition-all duration-300 ease-out text-sm font-bold text-white whitespace-nowrap">
            ¿Dudas? Chatea con IA
          </span>
          <span className="absolute top-0 right-0 h-3.5 w-3.5 bg-[#E79923] rounded-full border border-[#020712] animate-pulse" />
        </button>
      )}

      {isOpen && (
        <div className="bg-[#020712] border border-blue-500/25 w-[340px] sm:w-[380px] h-[500px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between animate-fadeIn">
          <div className="bg-[#081223] p-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center space-x-3 text-white">
              <div className="relative">
                <img
                  src={danielaGomezImg}
                  alt="Daniela Headshot"
                  className="h-10 w-10 rounded-xl object-cover border border-[#E79923]/30"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#081B35]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-widest text-[#E79923] uppercase">ASESOR VIRTUAL</span>
                <span className="text-sm font-bold text-slate-100">Consultas de Emigración</span>
              </div>
            </div>
            <button
              id="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-[#020712] space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col max-w-[85%] ${m.role === "user" ? "ml-auto items-end" : "mr-auto items-start"}`}
              >
                <div
                  className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-[#E79923] text-slate-950 font-medium rounded-br-none"
                      : "bg-white/[0.03] border border-white/5 text-slate-200 rounded-bl-none shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-slate-500 mt-1 font-semibold">
                  {m.role === "user" ? "Tú" : "Asistente IA"}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 mr-auto bg-white/[0.03] border border-white/5 p-3 rounded-2xl rounded-bl-none max-w-[80%] shadow-sm">
                <Loader2 className="h-4 w-4 text-[#E79923] animate-spin" />
                <span className="text-xs text-slate-400 font-semibold italic">Daniela está redactando una respuesta...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {!isTyping && messages.length <= 2 && (
            <div className="bg-[#020712] px-4 pb-2 pt-1 flex flex-wrap gap-1.5 border-t border-white/5">
              {presetQuestions.map((q, idx) => (
                <button
                  key={idx}
                  id={`preset-btn-${idx}`}
                  onClick={() => handleSendMessage(q)}
                  className="text-[10px] font-bold text-slate-300 bg-white/5 border border-white/5 hover:border-[#E79923] hover:bg-[#E79923]/10 px-2.5 py-1.5 rounded-full transition-all cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="bg-[#E79923]/10 border-t border-b border-[#E79923]/20 p-2 text-center text-[10px] text-[#E79923] font-medium flex items-center justify-center space-x-1">
            <Heart className="h-3 w-3 text-[#E79923] fill-[#E79923]/10" />
            <span>
              Adquiere la guía hoy por solo <strong>USD 14.99</strong>
            </span>
            <button
              id="chat-nudge-cta"
              onClick={onOpenCheckout}
              className="text-[10px] text-[#E79923] font-bold underline hover:text-[#FFB73B] ml-1.5 cursor-pointer"
            >
              Comprar ahora
            </button>
          </div>

          <div className="p-3 bg-[#07172E] border-t border-white/5 flex items-center space-x-2">
            <input
              id="chatbot-input-field"
              type="text"
              placeholder="Haz tu consulta migratoria..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputVal)}
              className="flex-1 bg-white/5 border border-transparent px-3.5 py-2 rounded-xl text-xs sm:text-sm focus:bg-[#081223] focus:border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#E79923]/50 placeholder-slate-500"
            />
            <button
              id="chatbot-send-btn"
              onClick={() => handleSendMessage(inputVal)}
              className="bg-[#E79923] hover:bg-[#FFB73B] text-slate-950 font-bold p-2.5 rounded-xl transition-all hover:shadow-md cursor-pointer disabled:opacity-50 disabled:bg-[#E79923]/40 disabled:text-slate-950/60"
              disabled={isTyping || !inputVal.trim()}
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
