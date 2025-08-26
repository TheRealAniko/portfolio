export interface WorkItem {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export const workData: WorkItem[] = [
  {
    id: 1,
    title: "FurRealEase",
    description: "Ein Full-Stack-Projekt für Tierhalter:innen, um Gesundheitsdaten wie Gewicht, Impfungen oder Medikamente zu verwalten.",
    image: "/projects/furrealease-cover.webp",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://furrealease.com"
  },
  {
    id: 2,
    title: "SmartOffer (MVP in Entwicklung)",
    description: "SmartOffer ist ein MVP zur Generierung strukturierter Angebote für Handwerksbetriebe – mit Fokus auf klarer Benutzerführung, Datenmodell und PDF-Export.",
    image: "",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://smartoffer.ai"
  }
];
