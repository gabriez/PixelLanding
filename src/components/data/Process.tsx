import { ProcessDataProps } from "@/types/Process";
import { Rocket, Lightbulb, Search, TrendingUp } from "lucide-react";

export const processData: ProcessDataProps[] = [
  {
    id: crypto.randomUUID(),
    icon: Search,
    title: "Análisis & Diagnóstico",
    description:
      "Estudiamos tu marca, mercado y competencia para encontrar oportunidades reales.",
  },
  {
    id: crypto.randomUUID(),
    icon: Lightbulb,
    title: "Estrategia",
    description:
      "Diseñamos un plan personalizado con objetivos claros y medibles,",
  },
  {
    id: crypto.randomUUID(),
    icon: Rocket,
    title: "Diseño & Desarrollo",
    description:
      "Creamos experiencias digitales que conectan con tu audiencia.",
  },
  {
    id: crypto.randomUUID(),
    icon: TrendingUp,
    title: "Optimización & escalado",
    description: "Medimos, optimizamos y escalamos para maximizar resultados.",
  },
];
