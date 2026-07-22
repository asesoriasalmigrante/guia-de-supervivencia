export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
  country: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ModuleItem {
  id: number;
  title: string;
  number: string;
  description: string;
  items: string[];
  iconName: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
  category: "Finanzas" | "Documentos" | "Mente" | "Logística";
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    label: string;
    points: number;
  }[];
  explanation: string;
}

export interface OrderDetails {
  orderId: string;
  purchaseDate: string;
  customerName: string;
  customerEmail: string;
  productName: string;
  amount: string;
  currency: string;
  downloadUrl: string;
  message: string;
}
