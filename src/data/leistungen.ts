import { Monitor, Bot, Palette, Search } from "lucide-react";

export interface LeistungenItem {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const leistungenData: LeistungenItem[] = [
  {
    id: 1,
    title: "Websites & Webentwicklung",
    subtitle: "Websites, die funktionieren und Vertrauen schaffen.",
    description: "Planung und Entwicklung von Online-Auftritten mit klarer Struktur und gutem Design. Von kleinen Onepagern bis zu umfangreichen Firmenwebsites mit Fokus auf Übersicht und Nutzererlebnis.",
    icon: Monitor,
  },
  {
    id: 2,
    title: "Suchmaschinen & KI",
    subtitle: "Sichtbarkeit in Suchmaschinen und KI-Ergebnissen.",
    description: "Analyse und Optimierung von Websites, damit sie bei Suchmaschinen und KI-Systemen sichtbar bleiben. Klare Ergebnisse, verständlich erklärt und direkt umgesetzt.",
    icon: Search,
  },
  {
    id: 3,
    title: "KI-Lösungen & Automatisierung",
    subtitle: "Smarte Prozesse für Effizienz und Zeitersparnis.",
    description: "Entwicklung automatisierter Prozesse, die Kommunikation und Organisation vereinfachen. Von Formularen und Chatbots bis zu individuellen Workflows mit KI.",
    icon: Bot,
  },
  {
    id: 4,
    title: "Design & Kommunikation",
    subtitle: "Ein Auftritt, der Wirkung zeigt.",
    description: "Entwicklung klarer Designs und starker Kommunikations­konzepte für ein stimmiges Gesamtbild. So wird dein Business online sichtbar und wiedererkennbar.",
    icon: Palette,
  }
];
