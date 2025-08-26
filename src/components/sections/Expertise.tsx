import React from 'react';
import Card from '../ui/Card';

interface ExpertiseItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ExpertiseProps {
  expertiseItems: ExpertiseItem[];
}

const Expertise: React.FC<ExpertiseProps> = ({ expertiseItems }) => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
            Expertise
          </h2>
          <p className="text-lg sm:text-xl  max-w-3xl mx-auto">
            Spezialisiert auf moderne Webentwicklung und innovative Lösungen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {expertiseItems.map((item) => (
            <Card key={item.id} >
              <div className="">
                <div className={`mb-6 flex justify-center`}>
                  <item.icon className={`w-16 h-16 sm:w-20 sm:h-20 text-[var(--color-primary)] stroke-[1.5px]`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className=" leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
