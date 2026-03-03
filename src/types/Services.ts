import { LucideIcon } from "lucide-react";

export type ServicesRenderCard = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ServicesPresenceRenderData = {
  items: { text: string; type: "error" | "success" }[];
};

export type ServicesCard = {
  card: ServicesRenderCard;
};

export type AgencyProps = {
  id: string;
  icon: LucideIcon;
  description: string;
};

export type AgencyCardRender = {
  agencyCard: AgencyProps;
};
