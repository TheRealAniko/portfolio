import React from 'react';
import Card from '../../components/ui/Card';
// import Button from '../ui/Button';

interface WorkItem {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

interface WorkProps {
  workItems: WorkItem[];
}

const Work: React.FC<WorkProps> = ({ workItems }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  mb-4 uppercase tracking-wider">
           Work
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Ausgewählte Projekte, die zeigen, was möglich ist.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {workItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="aspect-video mb-6 rounded-lg overflow-hidden border">
                {item.image ? (
              <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                    e.currentTarget.parentElement!.innerHTML = `<div class="text-white text-3xl sm:text-4xl font-bold">${item.title}</div>`;
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[var(--color-primary)]">
                  <div className="text-white text-center text-3xl sm:text-4xl font-bold">{item.title}</div>
                </div>
              )}
            </div>

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm mb-2">Verwendete Technologien:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-black text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
{/*                 
                {item.link && (
                  <Button
                    variant="primary"
                    onClick={() => window.open(item.link, '_blank')}
                    className="w-full"
                  >
                    Projekt ansehen
                  </Button>
                )} */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
