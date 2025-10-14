import React, { useEffect } from 'react';
import Hero from '../sections/Hero';
import Leistungen from '../sections/Leistungen';
import Work from '../sections/Work';
import LetsTalk from '../sections/LetsTalk';
import Impressum from '../sections/Impressum';
import Datenschutz from '../sections/Datenschutz';
import { leistungenData } from '../../data/leistungen';
import { workData } from '../../data/work';

type Page = 'home' | 'leistungen' | 'work' | 'lets-talk' | 'impressum' | 'datenschutz';

interface PageRouterProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const PageRouter: React.FC<PageRouterProps> = ({ currentPage, onPageChange }) => {
  const handleLeistungenCtaClick = () => {
    // Scroll zu lets-talk Sektion
    const element = document.getElementById('lets-talk');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroCtaClick = () => {
    // Scroll zu leistungen Sektion
    const element = document.getElementById('leistungen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll zu Sektion basierend auf currentPage
  useEffect(() => {
    if (currentPage === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(currentPage);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentPage]);

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

  // Für Impressum und Datenschutz: separate Seiten
  if (currentPage === 'impressum') {
    return <Impressum />;
  }

  if (currentPage === 'datenschutz') {
    return <Datenschutz />;
  }

  // Alle anderen Sektionen auf einer scrollbaren Seite
  return (
    <>
      <section id="home">
        <Hero
          subtitle="Sichtbar werden. Zeit sparen. Wachsen."
          title={<>Ich entwickle <span className="underlined ">Websites</span> und <span className="underlined">Automatisierungen</span> für Sichtbarkeit und Effizienz. Klar im Design.</>}
          ctaText="Leistungen ansehen"
          onCtaClick={handleHeroCtaClick}
        />
      </section>

      <section id="leistungen">
        <Leistungen leistungenItems={leistungenData} onCtaClick={handleLeistungenCtaClick} />
      </section>

      <section id="work">
        <Work workItems={workData} />
      </section>

      <section id="lets-talk">
        <LetsTalk />
      </section>
    </>
  );
};

export default PageRouter;
