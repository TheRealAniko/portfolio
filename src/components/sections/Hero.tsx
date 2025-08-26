import React from 'react';
import Button from '../ui/Button';

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, onCtaClick }) => {
  return (
    <section className="min-h-screen flex items-center justify-center ">
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
          {subtitle}
        </p>
        <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-16 leading-tights">
          {title}
        </h1>
        <Button
          variant="primary"
          size="lg"
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
