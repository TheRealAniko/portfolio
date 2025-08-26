import { Monitor, Bot, TrendingUp, Palette } from "lucide-react";

export interface ExpertiseItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const expertiseData: ExpertiseItem[] = [
  {
    id: 1,
    title: "Webentwicklung",
    description: "Moderne, performante Websites & Tools – von der Idee bis zum Launch.",
    icon: Monitor,
  },
  {
    id: 2,
    title: "AI & Automatisierung",
    description: "Beratung & Umsetzung für smarte Prozesse mit KI und No-Code.",
    icon: Bot,
  },
  {
    id: 3,
    title: "Content & Marketing",
    description: "Strukturierter Online-Auftritt mit Klartext, Plan und Sichtbarkeit.",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Design & Struktur",
    description: "Klares Design mit System – für Web, Marken und smarte Workflows.",
    icon: Palette,
  }
];
