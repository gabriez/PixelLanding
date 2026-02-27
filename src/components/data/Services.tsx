import {
  ServicesPresenceRenderData,
  ServicesRenderCard,
} from "@/types/Services";
import {
  Palette,
  CodeXml,
  ChartNoAxesColumnIncreasing,
  Brush,
  Cpu,
} from "lucide-react";

export const servicesPresenceData: ServicesPresenceRenderData[] = [
  {
    items: [
      {
        text: "Sitios web que no convierten visitantes en clientes",
        type: "error",
      },
      { text: "Diseño UX/UI enfocado en conversión", type: "success" },
    ],
  },
  {
    items: [
      { text: "Marketing sin estrategia ni métricas claras", type: "error" },
      { text: "Diseño orientado a resultados", type: "success" },
    ],
  },
  {
    items: [
      { text: "Branding débil que no diferencia tu marca", type: "error" },
      { text: "Identidad visual premium y memorable", type: "success" },
    ],
  },
  {
    items: [
      { text: "Tecnología lenta y desactualizada", type: "error" },
      { text: "Desarrollo rápido, moderno y escalable", type: "success" },
    ],
  },
];

export const servicesCardData: ServicesRenderCard[] = [
  {
    id: crypto.randomUUID(),
    icon: Palette,
    title: "Diseño UI/UX",
    description:
      "Interfaces intuitivas orientadas a conversión que enamoran a tus usuarios.",
  },
  {
    id: crypto.randomUUID(),
    icon: CodeXml,
    title: "Desarrollo web & Software",
    description: "Sitios rápidos, escalables y con tecnología de vanguardia.",
  },
  {
    id: crypto.randomUUID(),
    icon: ChartNoAxesColumnIncreasing,
    title: "Marketing Digital & Performance",
    description:
      "Leads cualificados, campañas y funnels que generan resultados.",
  },
  {
    id: crypto.randomUUID(),
    icon: Brush,
    title: "Branding & Diseño Gráfico",
    description: "Identidades visuales que diferencian y posicionan tu marca.",
  },
  {
    id: crypto.randomUUID(),
    icon: Cpu,
    title: "Web3 & Tecnología Avanzada",
    description: "Soluciones innovadoras con blockchain, IA y automatización.",
  },
];
