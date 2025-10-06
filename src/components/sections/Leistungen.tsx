import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface LeistungenItem {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface LeistungenProps {
  leistungenItems: LeistungenItem[];
  onCtaClick?: () => void;
}

const Leistungen: React.FC<LeistungenProps> = ({ leistungenItems, onCtaClick }) => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
            Leistungen
          </h2>
          <p className="text-lg sm:text-xl  max-w-3xl mx-auto">
          Digitale Lösungen für Sichtbarkeit und Effizienz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {leistungenItems.map((item) => (
            <Card key={item.id} >
              <div className="">
                <div className={`mb-6 flex justify-center`}>
                  <item.icon className={`w-16 h-16 sm:w-20 sm:h-20 text-[var(--color-primary)] stroke-[1.5px]`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-lg font-bold  my-4">
                    {item.subtitle}
                  </p>
                )}
                <p className=" leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
                {/* CTA Section */}
               
          
            <div className="flex flex-row items-center justify-left gap-4 sm:gap-6">
              <h3 className="text-xl">
                Interesse geweckt?
              </h3>
              <Button
                variant="primary"
                size="sm"
                onClick={onCtaClick}
              >
                Let's Talk
              </Button>
            </div>
        
        </div>

    
    </section>
  );
};

export default Leistungen;
