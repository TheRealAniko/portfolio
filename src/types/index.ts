// Layout Types
export interface HeaderProps {
  title: string;
  subtitle?: string;
}

// Section Types
export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FeaturesProps {
  features: Feature[];
}

export interface ExpertiseItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ExpertiseProps {
  expertiseItems: ExpertiseItem[];
}

export interface WorkItem {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface WorkProps {
  workItems: WorkItem[];
}

// Form Types
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// UI Component Types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}
