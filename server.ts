import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = parseInt(process.env.PORT || "3001", 10);

// Initialize GoogleGenAI SDK safely
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY is not defined in the environment. Chatbot capabilities will run in simulation mode.");
}

app.use(express.json());

// Pre-sales assistant system instructions
const SYSTEM_INSTRUCTION = `
Eres la Asistente Virtual Inteligente de Daniela Gómez Harrington (abogada experta en Derecho Migratorio y creadora de 'Mudarse a Otro País: La Verdadera Guía de Supervivencia').
Tu objetivo principal es ayudar de forma cálida, profesional y empática a los usuarios interesados en emigrar o que ya están planificando su mudanza a otro país.

Información clave sobre Daniela Gómez Harrington:
- Es abogada especialista en Derecho Migratorio y gestión documental internacional.
- También es migrante y ha experimentado los retos en carne propia.
- Creó la guía basada en su experiencia profesional y personal de primera mano.

Información clave de la guía ("Mudarse a Otro País: La Verdadera Guía de Supervivencia"):
- Es una guía digital en formato PDF de más de 150 páginas.
- Precio especial de lanzamiento: USD 19.90 (precio normal USD 29.90).
- No es una asesoría legal particularizada para un país específico ni contiene trámites de visa particulares. En su lugar, es una guía universal de preparación integral, mental, emocional, financiera y organizativa de documentos que todo migrante necesita sin importar el país de destino.
- Contiene 6 módulos clave:
  1. Antes de tomar la decisión: Evaluar motivos, expectativas y preparación.
  2. Preparación financiera: Presupuestos reales, gastos que todos olvidan, fondo de emergencia.
  3. Documentación y trámites: Cómo apostillar, legalizar y organizar expedientes sin cometer errores.
  4. Adaptación cultural y emocional: Manejo del duelo migratorio y choque cultural.
  5. Vivienda, trabajo y vida cotidiana: Consejos para buscar alquileres, redactar CV internacional, etc.
  6. Después de la llegada: Las primeras semanas críticas y cómo construir redes de apoyo.

Tu comportamiento en el chat:
1. Responde siempre en español de forma empática, motivadora y profesional.
2. Si te preguntan sobre visas o trámites específicos de un país (ej. cómo sacar la visa para España, Canadá, etc.), aclara que la guía de Daniela ofrece un sistema universal para organizar cualquier proceso y preparar documentos (como legalización y apostilla), pero recomiéndales adquirir la guía para tener una base organizativa sólida y evitar perder dinero en trámites.
3. Haz referencia amigable a los capítulos o contenidos de la guía cuando sea oportuno.
4. Mantén las respuestas fluidas y relativamente breves, invitándoles a adquirir la guía utilizando el botón dorado de compra.
`;

// API endpoint for chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "El mensaje es requerido." });
    }

    if (!ai) {
      // Simulation mode fallback if no API key is set
      const fallbackReplies = [
        "¡Hola! Qué gusto saludarte. Soy la asistente de Daniela. Emigrar es un paso gigante y la guía 'Mudarse a Otro País: La Verdadera Guía de Supervivencia' es ideal para que planifiques tus finanzas, organices tus documentos (legalización/apostilla) y manejes la parte emocional. ¿Hacia qué país estás planeando mudarte?",
        "Entiendo perfectamente esa duda. Precisamente en el Módulo 2 de la guía abordamos la preparación financiera, los costos ocultos que muchos olvidan y cómo crear un fondo de emergencia real. Te ayudará a evitar perder dinero.",
        "Para organizar tus documentos, el Módulo 3 detalla paso a paso cómo preparar tu expediente, apostillar, legalizar y tener copias organizadas para que no te rechacen trámites. ¡Es una inversión que te ahorrará muchísimos dolores de cabeza!",
        "¡Totalmente! El factor emocional es clave. El Módulo 4 se enfoca por completo en el duelo migratorio y la adaptación cultural. Recuerda que la guía está a solo USD 19.90 hoy. ¿Te gustaría saber cómo adquirirla?",
      ];
      const randomReply = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
      return res.json({ text: randomReply });
    }

    // Convert history format to GoogleGenAI chat structure
    // GoogleGenAI chat structure: contents array with role and parts
    const contents = [];
    if (history && Array.isArray(history)) {
      for (const turn of history) {
        contents.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.text }],
        });
      }
    }
    contents.push({ role: "user", parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    return res.status(500).json({
      error: "Ocurrió un error al procesar tu consulta con la IA.",
      details: error.message,
    });
  }
});

// API endpoint for mock purchase completion
app.post("/api/checkout", (req, res) => {
  const { name, email, paymentMethod, productName, amount } = req.body;

  if (!name || !email || !paymentMethod) {
    return res.status(400).json({ error: "Faltan datos de facturación requeridos." });
  }

  // Generate a mock purchase reference
  const orderId = "AM-" + Math.floor(100000 + Math.random() * 900000);
  const purchaseDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return res.json({
    success: true,
    orderId,
    purchaseDate,
    customerName: name,
    customerEmail: email,
    productName: productName || "Mudarse a Otro País: La Verdadera Guía de Supervivencia (Ebook PDF + Material Extra)",
    amount: amount || "14.99",
    currency: "USD",
    downloadUrl: `/downloads/Guia_Supervivencia_Migrante_Daniela_Gomez.pdf?order=${orderId}`,
    message: "¡Pago aprobado con éxito! Tu material está listo para ser descargada.",
  });
});

// Setup Vite development middleware or production static serving
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

setupServer();
