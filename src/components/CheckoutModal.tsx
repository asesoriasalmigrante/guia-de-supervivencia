import React, { useState } from "react";
import { ShoppingCart, X, CheckCircle, Award, Download, Loader2, ShieldCheck, Lock, Copy, Check, ExternalLink, CreditCard } from "lucide-react";
import { useI18n } from "../i18n";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  isPromoActive: boolean;
  timeLeftStr: string;
  selectedProduct?: { name: string; price: number; isBonus?: boolean } | null;
}

interface CheckoutResponse {
  orderId: string;
  purchaseDate: string;
  customerName: string;
  customerEmail: string;
  productName: string;
  amount: number;
  currency: string;
}

export default function CheckoutModal({ isOpen, onClose, isPromoActive, timeLeftStr, selectedProduct }: CheckoutModalProps) {
  const { t } = useI18n();
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "mercado" | "binance">("paypal");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [binanceId, setBinanceId] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [mercadoAlias, setMercadoAlias] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<CheckoutResponse | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (!isOpen) return null;

  const productTitle = selectedProduct ? selectedProduct.name : "Mudarse a Otro País: La Verdadera Guía de Supervivencia (Ebook PDF + Material Extra)";
  const productDesc = selectedProduct ? "Bono individual - Recurso de Planificación" : "Ebook PDF + Material Extra de Planificación";
  const productPrice = selectedProduct ? selectedProduct.price : 14.99;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!fullName.trim()) {
      setErrorMsg("Por favor, ingresa tu nombre completo.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (paymentMethod === "paypal") {
      if (!paypalEmail.trim()) {
        setErrorMsg("Por favor, ingresa tu correo de PayPal o ID de transacción.");
        return;
      }
    }

    if (paymentMethod === "mercado") {
      if (!mercadoAlias.trim()) {
        setErrorMsg("Por favor, ingresa tu Alias, CVU o número de operación de Mercado Pago.");
        return;
      }
    }

    if (paymentMethod === "binance") {
      if (!binanceId.trim()) {
        setErrorMsg("Por favor, ingresa tu ID de Binance o correo registrado.");
        return;
      }
    }

    setIsSubmitting(true);
    try {
      // Simulate payment processing (no backend needed for now)
      await new Promise(resolve => setTimeout(resolve, 1500));

      const reference = paymentMethod === "binance" ? binanceId : paymentMethod === "paypal" ? paypalEmail : mercadoAlias;

      setSuccessData({
        orderId: `AM-${Date.now().toString(36).toUpperCase()}`,
        purchaseDate: new Date().toLocaleString("es-AR", { dateStyle: "long", timeStyle: "short" }),
        customerName: fullName.trim(),
        customerEmail: email.trim(),
        productName: productTitle,
        amount: productPrice,
        currency: "USD"
      });
    } catch (err: any) {
      setErrorMsg(err.message || "Error al procesar el pago.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    if (!successData) return;

    const textContent = selectedProduct
      ? `
========================================================================
             Asesorías al Migrante - COMPRA COMPLETADA EXITOSAMENTE
========================================================================
¡Felicidades por adquirir tu recurso especializado!

Detalles del Pedido:
------------------
Referencia del Pedido: ${successData.orderId}
Fecha de Transacción: ${successData.purchaseDate}
Adquirido por: ${successData.customerName}
Correo de Facturación: ${successData.customerEmail}
Producto: ${successData.productName}
Importe Pagado: $${successData.amount} ${successData.currency}

------------------------------------------------------------------------
       RECURSO ADQUIRIDO: ${successData.productName.toUpperCase()}
------------------------------------------------------------------------
Tu acceso a este material ha sido activado de manera ilimitada. 
Este material interactivo diseñado por la abogada Daniela Harrington
te brindará claridad en tu proceso de preparación.

¡Gracias por confiar en Daniela Harrington y Asesorías al Migrante!
Para soporte prioritario, escríbenos a: asesoriasalmigrante@gmail.com
========================================================================
`
      : `
========================================================================
             Asesorías al Migrante - COMPRA COMPLETADA EXITOSAMENTE
========================================================================
¡Felicidades por dar el primer paso hacia tu nuevo comienzo!

Detalles del Pedido:
------------------
Referencia del Pedido: ${successData.orderId}
Fecha de Transacción: ${successData.purchaseDate}
Adquirido por: ${successData.customerName}
Correo de Facturación: ${successData.customerEmail}
Producto: ${successData.productName}
Importe Pagado: $${successData.amount} ${successData.currency}

------------------------------------------------------------------------
       HOJA DE RUTA INICIAL DEL MIGRANTE - CONSEJOS CLAVES DE DANIELA
------------------------------------------------------------------------
1. CARPETA DOCUMENTAL IMPECABLE:
   No empaques tus documentos civiles o universitarios en maletas que vayan
   a la bodega del avión. Llévalos siempre en tu equipaje de mano. Asegúrate
   de que las apostillas y legalizaciones sean legibles y estén en perfecto estado.

2. EL PRESUPUESTO NO SE NEGOCIA:
   Planifica un fondo que cubra al menos tres meses de costo habitacional y de
   alimentación en la ciudad exacta de destino. Las capitales suelen duplicar el
   costo de las provincias.

3. DUELO MIGRATORIO ES BIOLÓGICO:
   Sentir nostalgia, miedo o ganas de regresar en el primer mes es completamente
   natural. No te aísles, únete a comunidades de inmigrantes y mantén comunicación
   asertiva con los tuyos.
${
  isPromoActive
    ? `
========================================================================
            ¡BONOS ESPECIALES DE COMPRA RÁPIDA INCLUIDOS!
========================================================================
¡Has comprado dentro del período promocional de 15 minutos! Aquí tienes tu
material exclusivo de Daniela Harrington sin costo adicional:

🎁 BONO #1: TEST “¿ESTÁS REALMENTE LISTO PARA EMIGRAR?” (VALOR USD 19)
- Una guía interactiva de autoevaluación psicológica y financiera para medir tu preparación.

🎁 BONO #2: KIT DE EMERGENCIA DEL MIGRANTE (VALOR USD 29)
- Listas rápidas de contingencia para contratiempos con aerolíneas, equipaje o embajadas.

🎁 BONO #3: PLAN DE PREPARACIÓN PARA EMIGRAR EN 90 DÍAS (VALOR USD 39)
- Cronograma modular semana a semana con hitos indispensables antes del despegue.
`
    : ""
}

¡Gracias por confiar en Daniela Harrington y Asesorías al Migrante!
Para soporte prioritario, escríbenos a: asesoriasalmigrante@gmail.com
========================================================================
    `;

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Recurso_Migrante_AM_${successData.orderId}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
      {/* Sibling Backdrop Detector for closing when clicking outside */}
      <div 
        id="checkout-modal-backdrop"
        onClick={onClose}
        className="absolute inset-0 cursor-pointer"
      />

      {/* Modal Card content wrapper */}
      <div 
        className="relative bg-[#030914] text-[#e2e8f0] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-blue-500/25 animate-scaleIn cursor-default max-h-[94vh] flex flex-col z-10"
      >
        {/* Persistent, highly visible close button at the top-right */}
        <button
          id="checkout-modal-close-persistent"
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-50 p-1.5 rounded-full bg-slate-950/80 hover:bg-slate-950 text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-105 hover:shadow-lg shadow-[#000]/20 cursor-pointer"
          title={t.checkoutClose}
        >
          <X className="h-4 w-4" />
        </button>

        {!successData && (
          <div className="bg-[#07172E] text-white p-3.5 pr-12 flex items-center justify-between border-b border-white/5 flex-shrink-0">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-4.5 w-4.5 text-[#E79923]" />
              <h3 className="font-display text-base font-normal">{t.checkoutTitle}</h3>
            </div>
            {/* Explicit close button inside the header */}
            <button
              type="button"
              onClick={onClose}
              className="text-[11px] font-bold text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/10 transition-colors cursor-pointer flex items-center space-x-1"
            >
              <span>{t.checkoutBack}</span>
            </button>
          </div>
        )}

        <div className="p-4 sm:p-5 overflow-y-auto flex-grow custom-scrollbar">
          {successData ? (
            <div className="text-center space-y-6 animate-fadeIn py-4">
              <div className="mx-auto bg-emerald-500/10 text-emerald-400 p-4 rounded-full w-fit">
                <CheckCircle className="h-12 w-12" />
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl font-display font-normal text-white">{t.checkoutSuccessTitle}</h4>
                <p className="text-xs text-slate-400">{t.checkoutSuccessSubtitle}</p>
              </div>

              <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 text-left text-xs space-y-3 font-sans text-slate-300">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="font-bold text-slate-400">{t.checkoutReceipt}</span>
                  <span className="font-mono text-slate-500 font-semibold">{successData.orderId}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t.checkoutClient}</span>
                    <span className="font-bold text-white">{successData.customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t.checkoutEmail}</span>
                    <span className="font-medium text-white">{successData.customerEmail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t.checkoutDate}</span>
                    <span className="text-white">{successData.purchaseDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t.checkoutMethod}</span>
                    <span className="font-bold uppercase text-white">{paymentMethod}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/5 space-y-1">
                  <div className="flex justify-between font-bold text-white text-sm">
                    <span>{t.checkoutTotal}</span>
                    <span>${successData.amount} {successData.currency}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#E79923]/10 border border-[#E79923]/20 p-4 rounded-xl text-left text-xs text-[#E79923] space-y-1">
                <span className="font-bold flex items-center">
                  <Award className="h-4 w-4 mr-1 text-[#E79923]" />{" "}
                  {selectedProduct 
                    ? t.checkoutBonusUnlocked
                    : isPromoActive 
                    ? t.checkoutBonusUnlocked 
                    : t.checkoutBonusUnlocked}
                </span>
                <p className="text-slate-300">
                  {selectedProduct
                    ? `Tu recurso "${selectedProduct.name}" ha sido activado de manera exitosa.`
                    : isPromoActive
                    ? "Hemos adjuntado los 3 bonos especiales (Test, Kit de Emergencia, Plan de 90 Días) junto con el checklist de Daniela Harrington en la descarga."
                    : "Hemos adjuntado el checklist interactivo de mudanza de Daniela junto con las fórmulas financieras avanzadas."}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  id="receipt-download-btn"
                  onClick={handleDownload}
                  className="w-full bg-[#E79923] hover:bg-[#FFB73B] text-slate-950 font-black py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all hover:shadow-lg hover:shadow-[#E79923]/20 active:scale-98 cursor-pointer"
                >
                  <Download className="h-5 w-5" />
                  <span>{t.checkoutDownload}</span>
                </button>
                <button
                  id="success-close-btn"
                  onClick={() => {
                    onClose();
                    setSuccessData(null);
                  }}
                  className="w-full bg-white/5 hover:bg-white/10 text-slate-300 font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  {t.checkoutCloseBtn}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-white/[0.01] border border-white/5 p-3 rounded-xl text-xs font-sans text-slate-300 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="max-w-[70%]">
                    <span className="font-bold text-white text-xs sm:text-sm block mb-0.5 leading-tight">{productTitle}</span>
                    <span className="text-slate-400 block text-[11px] leading-relaxed mt-0.5">{productDesc}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-black text-[#E79923] text-sm block">USD {productPrice}</span>
                    {selectedProduct ? (
                      <span className="text-[10px] text-slate-500 line-through">
                        USD {(productPrice * 2.5).toFixed(2)}
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-500 line-through">USD 29.90</span>
                    )}
                  </div>
                </div>

                {!selectedProduct ? (
                  isPromoActive ? (
                    <div className="border-t border-white/5 pt-2 space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-[#E79923] font-bold">
                        <span className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1 animate-pulse" />
                          ¡3 Bonos Incluidos (Expira en {timeLeftStr})!
                        </span>
                        <span>GRATIS</span>
                      </div>
                      <div className="space-y-0.5 text-[10px] text-slate-400 pl-2">
                        <div className="flex justify-between">
                          <span>• Test listo para emigrar</span>
                          <span className="line-through text-slate-500">USD 19.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>• Kit de Emergencia</span>
                          <span className="line-through text-slate-500">USD 29.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>• Plan de 90 Días</span>
                          <span className="line-through text-slate-500">USD 39.00</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="border-t border-white/5 pt-1.5 text-[10px] text-rose-400">
                      ⏳ La promoción de los 3 bonos premium ha expirado para esta sesión.
                    </div>
                  )
                ) : (
                  <div className="border-t border-white/5 pt-1.5 text-[10px] text-emerald-400">
                    ✨ Recurso premium por separado. Acceso inmediato.
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-2 p-1 bg-[#07172E] rounded-xl border border-[#E79923]/20">
                <button
                  id="checkout-pay-paypal"
                  type="button"
                  onClick={() => {
                    setPaymentMethod("paypal");
                    setErrorMsg("");
                  }}
                  className={`py-2 px-1 text-xs font-bold rounded-lg transition-colors flex items-center justify-center cursor-pointer ${
                    paymentMethod === "paypal" ? "bg-blue-600 text-white" : "text-[#94a3b8] hover:text-white"
                  }`}
                >
                  <span className="font-black italic mr-0.5">P</span>ayPal
                </button>
                <button
                  id="checkout-pay-mercado"
                  type="button"
                  onClick={() => {
                    setPaymentMethod("mercado");
                    setErrorMsg("");
                  }}
                  className={`py-2 px-1 text-xs font-bold rounded-lg transition-colors flex items-center justify-center cursor-pointer ${
                    paymentMethod === "mercado" ? "bg-sky-500 text-white" : "text-[#94a3b8] hover:text-white"
                  }`}
                >
                  <span className="text-[11px] sm:text-xs">MercadoPago</span>
                </button>
                <button
                  id="checkout-pay-binance"
                  type="button"
                  onClick={() => {
                    setPaymentMethod("binance");
                    setErrorMsg("");
                  }}
                  className={`py-2 px-1 text-xs font-bold rounded-lg transition-colors flex items-center justify-center space-x-1 cursor-pointer ${
                    paymentMethod === "binance" ? "bg-yellow-400 text-slate-950" : "text-[#94a3b8] hover:text-white"
                  }`}
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.624 13.9202l2.7175 2.7154-7.353 7.353-7.353-7.352 2.7175-2.7164 4.6355 4.6345 4.6355-4.6345zm4.6355-4.6345L24 12.0012l-2.7405 2.7164-2.7175-2.7154 2.7175-2.7175zm-18.519 0L5.458 12.0012l-2.7175 2.7164L0 12.0012l2.7405-2.7164zm13.8835-4.6515l2.7175 2.7164-4.6355 4.6345-4.6355-4.6345 2.7175-2.7164 1.918 1.918 1.918-1.918zM12.001 0l7.353 7.352-2.7175 2.7164-4.6355-4.6355-4.6355 4.6355-2.7175-2.7164L12.001 0z"/>
                  </svg>
                  <span>Binance</span>
                </button>
              </div>

              <div className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">{t.checkoutNameLabel}</label>
                  <input
                    id="checkout-input-name"
                    type="text"
                    placeholder={t.checkoutNamePh}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white px-3 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E79923] placeholder-slate-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">{t.checkoutEmailLabel}</label>
                  <input
                    id="checkout-input-email"
                    type="email"
                    placeholder={t.checkoutEmailPh}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white px-3 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E79923] placeholder-slate-500"
                  />
                </div>

                {paymentMethod === "paypal" && (
                  <div className="space-y-3 animate-fadeIn bg-slate-950/40 p-3 sm:p-4 rounded-xl border border-blue-500/15">
                    <div className="text-center py-1 space-y-1">
                      <div className="mx-auto bg-blue-500/10 text-blue-400 p-1.5 rounded-full w-fit">
                        <span className="font-black italic text-lg text-blue-400">P</span>
                      </div>
                      <h5 className="font-bold text-white text-[11px] uppercase tracking-wider">Pago Directo con PayPal</h5>
                      <p className="text-[10px] text-slate-400 max-w-sm mx-auto leading-relaxed">
                        Envía un pago de <strong className="text-blue-400 font-bold">USD {productPrice}</strong> a la cuenta de PayPal oficial de Daniela.
                      </p>
                    </div>

                    <div className="bg-slate-900/60 p-3 rounded-lg border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-[11px] gap-2">
                        <span className="text-slate-400 whitespace-nowrap">Correo de PayPal:</span>
                        <div className="flex items-center space-x-1.5 min-w-0">
                          <span className="font-mono text-white text-[11px] font-bold bg-slate-950 px-2 py-0.5 rounded border border-white/10 truncate select-all">
                            asesoriasalmigrante@gmail.com
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopy("asesoriasalmigrante@gmail.com", "paypal-email")}
                            className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                            title="Copiar correo"
                          >
                            {copiedField === "paypal-email" ? (
                              <Check className="h-3 w-3 text-emerald-400" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </button>
                        </div>
                      </div>

                      <a
                        href={`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=asesoriasalmigrante@gmail.com&item_name=${encodeURIComponent(productTitle)}&amount=${productPrice}&currency_code=USD`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-3 rounded-lg text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-md hover:shadow-blue-600/15"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Pagar Seguro con PayPal</span>
                      </a>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Correo o ID de tu Transacción PayPal
                      </label>
                      <input
                        id="checkout-input-paypalemail"
                        type="text"
                        placeholder="Ej: tu-correo-paypal@gmail.com o ID de transacción"
                        value={paypalEmail}
                        onChange={(e) => setPaypalEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 text-white px-3 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E79923] placeholder-slate-500"
                      />
                      <span className="text-[9px] text-slate-500 block leading-normal">
                        Ingresa el correo desde el cual enviaste el pago para liberar tu acceso inmediatamente.
                      </span>
                    </div>
                  </div>
                )}

                {paymentMethod === "mercado" && (
                  <div className="space-y-3 animate-fadeIn bg-slate-950/40 p-3 sm:p-4 rounded-xl border border-sky-500/15">
                    <div className="text-center py-1 space-y-1">
                      <div className="mx-auto bg-sky-500/10 text-sky-400 p-1.5 rounded-full w-fit">
                        <CreditCard className="h-4 w-4 text-sky-400" />
                      </div>
                      <h5 className="font-bold text-white text-[11px] uppercase tracking-wider">Transferencia Mercado Pago</h5>
                      <p className="text-[10px] text-slate-400 max-w-sm mx-auto leading-relaxed">
                        Transfiere el valor equivalente de <strong className="text-sky-400 font-bold">USD {productPrice}</strong> por CVU o Alias de Mercado Pago.
                      </p>
                    </div>

                    <div className="bg-slate-900/60 p-3 rounded-lg border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-[11px] gap-2">
                        <span className="text-slate-400">Alias:</span>
                        <div className="flex items-center space-x-1.5">
                          <span className="font-mono text-white text-xs font-bold bg-slate-950 px-2 py-0.5 rounded border border-white/10 select-all">
                            daniela.ale.rey
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopy("daniela.ale.rey", "mp-alias")}
                            className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                            title="Copiar alias"
                          >
                            {copiedField === "mp-alias" ? (
                              <Check className="h-3 w-3 text-emerald-400" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] gap-2">
                        <span className="text-slate-400">CVU:</span>
                        <div className="flex items-center space-x-1.5">
                          <span className="font-mono text-white text-[10px] font-bold bg-slate-950 px-2 py-0.5 rounded border border-white/10 select-all">
                            0000003100019498046373
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopy("0000003100019498046373", "mp-cvu")}
                            className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                            title="Copiar CVU"
                          >
                            {copiedField === "mp-cvu" ? (
                              <Check className="h-3 w-3 text-emerald-400" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="text-[10px] text-sky-300 font-medium text-center border-t border-white/5 pt-1.5">
                        Titular de la cuenta: Daniela Harrington
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Tu Alias, CVU o Número de Operación
                      </label>
                      <input
                        id="checkout-input-mercadoalias"
                        type="text"
                        placeholder="Ej: tu-alias o ID de operación"
                        value={mercadoAlias}
                        onChange={(e) => setMercadoAlias(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 text-white px-3 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E79923] placeholder-slate-500"
                      />
                      <span className="text-[9px] text-slate-500 block leading-normal">
                        Coloca la referencia para que podamos asociar tu transferencia con tu pedido de inmediato.
                      </span>
                    </div>
                  </div>
                )}

                {paymentMethod === "binance" && (
                  <div className="space-y-3 animate-fadeIn bg-slate-950/40 p-3 sm:p-4 rounded-xl border border-yellow-500/15">
                    <div className="text-center py-1 space-y-1">
                      <div className="mx-auto bg-yellow-500/10 text-yellow-400 p-1.5 rounded-full w-fit">
                        <svg className="h-5 w-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.624 13.9202l2.7175 2.7154-7.353 7.353-7.353-7.352 2.7175-2.7164 4.6355 4.6345 4.6355-4.6345zm4.6355-4.6345L24 12.0012l-2.7405 2.7164-2.7175-2.7154 2.7175-2.7175zm-18.519 0L5.458 12.0012l-2.7175 2.7164L0 12.0012l2.7405-2.7164zm13.8835-4.6515l2.7175 2.7164-4.6355 4.6345-4.6355-4.6345 2.7175-2.7164 1.918 1.918 1.918-1.918zM12.001 0l7.353 7.352-2.7175 2.7164-4.6355-4.6355-4.6355 4.6355-2.7175-2.7164L12.001 0z"/>
                        </svg>
                      </div>
                      <h5 className="font-bold text-white text-[11px] uppercase tracking-wider">Pago Seguro con Binance Pay</h5>
                      <p className="text-[10px] text-slate-400 max-w-sm mx-auto leading-relaxed">
                        Envía exactamente <strong className="text-yellow-400 font-bold">USD {productPrice}</strong> utilizando Binance Pay.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-slate-900/60 p-3 rounded-lg border border-white/5">
                      {/* Stylized QR Code */}
                      <div className="w-16 h-16 bg-white p-1 rounded-md flex-shrink-0 flex items-center justify-center relative shadow-sm">
                        <svg className="w-full h-full text-slate-900" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                          <path d="M10 10h20v20H10zM70 10h20v20H70zM10 70h20v20H10z" fill="currentColor"/>
                          <path d="M15 15h10v10H15zM75 15h10v10H75zM15 75h10v10H15z" fill="white"/>
                          <path d="M35 15h25M35 25h15M35 35h30M15 35h15M15 45h50M15 55h70M45 75h25M45 85h15M75 45h10v15H75z" strokeWidth="3" strokeLinecap="round"/>
                          <path d="M45 45h10v10H45z" fill="currentColor"/>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-yellow-400 text-slate-950 p-0.5 rounded shadow-sm">
                            <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M16.624 13.9202l2.7175 2.7154-7.353 7.353-7.353-7.352 2.7175-2.7164 4.6355 4.6345 4.6355-4.6345zm4.6355-4.6345L24 12.0012l-2.7405 2.7164-2.7175-2.7154 2.7175-2.7175zm-18.519 0L5.458 12.0012l-2.7175 2.7164L0 12.0012l2.7405-2.7164zm13.8835-4.6515l2.7175 2.7164-4.6355 4.6345-4.6355-4.6345 2.7175-2.7164 1.918 1.918 1.918-1.918zM12.001 0l7.353 7.352-2.7175 2.7164-4.6355-4.6355-4.6355 4.6355-2.7175-2.7164L12.001 0z"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1 text-center sm:text-left text-[11px] flex-grow">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-slate-400">Binance Pay ID:</span>
                          <div className="flex items-center space-x-1">
                            <span className="font-mono text-white text-xs font-bold bg-slate-950 px-2 py-0.5 rounded border border-white/10 select-all">
                              512669045
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopy("512669045", "binance-id")}
                              className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                              title="Copiar ID"
                            >
                              {copiedField === "binance-id" ? (
                                <Check className="h-3 w-3 text-emerald-400" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-1 mt-1">
                          <span className="text-slate-400">Correo Binance:</span>
                          <div className="flex items-center space-x-1">
                            <span className="font-mono text-white text-[10px] font-bold bg-slate-950 px-1.5 py-0.5 rounded border border-white/10 select-all max-w-[110px] truncate" title="escueladeballethgv@gmail.com">
                              escueladeballethgv@gmail.com
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopy("escueladeballethgv@gmail.com", "binance-email")}
                              className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                              title="Copiar Correo"
                            >
                              {copiedField === "binance-email" ? (
                                <Check className="h-3 w-3 text-emerald-400" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">ID de Binance / Correo Electrónico</label>
                      <input
                        id="checkout-input-binanceid"
                        type="text"
                        placeholder="Ej: 512669045 o tu-correo@gmail.com"
                        value={binanceId}
                        onChange={(e) => setBinanceId(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 text-white px-3 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E79923] placeholder-slate-500"
                      />
                      <span className="text-[9px] text-slate-500 block leading-normal">
                        Utilizaremos esta información para verificar la transferencia y liberar tu acceso de manera inmediata.
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {errorMsg && (
                <div className="p-2.5 bg-rose-950/20 border border-rose-500/10 text-rose-400 text-xs font-bold rounded-xl animate-fadeIn animate-duration-150">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-2 pt-1">
                <button
                  id="checkout-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E79923] hover:bg-[#FFB73B] text-slate-950 font-black py-3 px-5 rounded-xl flex items-center justify-center space-x-2 transition-all hover:shadow-lg hover:shadow-[#E79923]/20 active:scale-99 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4.5 w-4.5 animate-spin" />
                      <span>{t.checkoutProcessing}</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="h-4.5 w-4.5" />
                      <span>{t.checkoutSubmit}</span>
                    </>
                  )}
                </button>

                {/* Highly visible close/cancel button inside the form */}
                <button
                  id="checkout-cancel-btn"
                  type="button"
                  onClick={onClose}
                  className="w-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-bold py-2 px-5 rounded-xl text-xs transition-all border border-white/10 text-center cursor-pointer block"
                >
                  {t.checkoutCancel}
                </button>

                <div className="text-[9px] text-slate-500 text-center flex items-center justify-center space-x-1 pt-0.5">
                  <Lock className="h-3 w-3 text-slate-500" />
                  <span>{t.checkoutSecurity}</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
