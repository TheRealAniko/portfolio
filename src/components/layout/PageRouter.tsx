import React, { useState, useEffect } from 'react';
import Hero from '../sections/Hero';
import Leistungen from '../sections/Leistungen';
import Work from '../sections/Work';
import LetsTalk from '../sections/LetsTalk';
import Impressum from '../sections/Impressum';
import Datenschutz from '../sections/Datenschutz';
import { leistungenData } from '../../data/leistungen';
import { workData } from '../../data/work';
import { useScrollTo } from '../../hooks/useScrollTo';

type Page = 'home' | 'leistungen' | 'work' | 'lets-talk' | 'impressum' | 'datenschutz';

interface PageRouterProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const PageRouter: React.FC<PageRouterProps> = ({ currentPage, onPageChange }) => {
  const scrollTo = useScrollTo();

  const handleHeroCtaClick = () => {
    onPageChange('work');
  };

  const handleLeistungenCtaClick = () => {
    onPageChange('lets-talk');
  };

  // URL-Hash ändern bei Seitenwechsel
  useEffect(() => {
    window.history.pushState(null, '', `#${currentPage}`);
  }, [currentPage]);

  // Browser-Zurück-Button behandeln
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) as Page;
      if (hash && hash !== currentPage) {
        onPageChange(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage, onPageChange]);

  // Initiale URL beim Laden der Seite
  useEffect(() => {
    const hash = window.location.hash.substring(1) as Page;
    if (hash) {
      onPageChange(hash);
    }
  }, [onPageChange]);

  const renderPage = () => {
    switch (currentPage) {
      case 'impressum':
        return <Impressum />;
      case 'datenschutz':
        return <Datenschutz />;
      case 'home':
      default:
        return (
          <>
            <section id="home">
              <Hero
                subtitle="Sichtbar werden. Zeit sparen. Wachsen."
                title={<>Ich entwickle <span className="underlined ">Websites</span> und <span className="underlined">Automatisierungen</span> für Sichtbarkeit und Effizienz. Klar im Design.</>}
                ctaText="Projekte ansehen"
                onCtaClick={handleHeroCtaClick}
              />
            </section>

            <section id="leistungen">
              <Leistungen 
                leistungenItems={leistungenData} 
                onCtaClick={handleLeistungenCtaClick}
              />
            </section>

            <section id="work">
              <Work workItems={workData} />
            </section>

            <section id="lets-talk">
              <LetsTalk />
            </section>
          </>
        );
    }
  };

  return <>{renderPage()}</>;
};

export default PageRouter;
