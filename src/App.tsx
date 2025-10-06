import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Leistungen from './components/sections/Leistungen';
import Work from './components/sections/Work';
import LetsTalk from './components/sections/LetsTalk';
import { leistungenData } from './data/leistungen';
import { workData } from './data/work';
import { useScrollTo } from './hooks/useScrollTo';

function App() {
  const scrollTo = useScrollTo();

  const handleHeroCtaClick = () => {
    scrollTo('leistungen');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home">
        <Hero
          subtitle="Sichtbar werden. Zeit sparen. Wachsen."
          title={<>Ich entwickle <span className="underlined ">Websites</span> und <span className="underlined">Automatisierungen</span> für Sichtbarkeit und Effizienz. Klar im Design.</>}
          ctaText="Leistungen ansehen"
          onCtaClick={handleHeroCtaClick}
        />
      </section>

      {/* Leistungen Section */}
      <section id="leistungen">
        <Leistungen leistungenItems={leistungenData} />
      </section>

      {/* Work Section */}
      <section id="work">
        <Work workItems={workData} />
      </section>

      {/* Let's Talk Section */}
      <section id="lets-talk">
        <LetsTalk />
      </section>
    </Layout>
  );
}

export default App;
