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
    title: "Webentwicklung & Websites",
    subtitle: "Websites, die funktionieren und Vertrauen schaffen.",
    description: "Ich plane und entwickle Online-Auftritte mit klarer Struktur und gutem Design. Von kleinen Onepagern bis zu umfangreichen Firmenwebsites mit Fokus auf Übersicht und Nutzererlebnis.",
    icon: Monitor,
  },
  {
    id: 2,
    title: "KI-Sichtbarkeit (KI-SEO)",
    subtitle: "Sichtbar in Suchmaschinen und KI-Ergebnissen.",
    description: "Ich analysiere und optimiere deine Website, damit sie bei Suchmaschinen und KI-Systemen sichtbar bleibt. Du bekommst klare Ergebnisse, verständlich erklärt und direkt umgesetzt.",
    icon: Search,
  },
  {
    id: 3,
    title: "KI-Lösungen & Automatisierung",
    subtitle: "Smarte Prozesse für Effizienz und Zeitersparnis.",
    description: "Ich entwickle automatisierte Prozesse, die Kommunikation und Organisation vereinfachen. Von Formularen und Chatbots bis zu individuellen Workflows mit KI.",
    icon: Bot,
  },
  {
    id: 4,
    title: "Design & Kommunikation",
    subtitle: "Ein Auftritt, der Wirkung zeigt.",
    description: "Ich verbinde Gestaltung, Struktur und Marketing-Kommunikation zu einem stimmigen Gesamtbild. So wird deine Marke online sichtbar, verständlich und wiedererkennbar.",
    icon: Palette,
  }
];
