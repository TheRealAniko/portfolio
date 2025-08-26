import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Expertise from './components/sections/Expertise';
import Work from './components/sections/Work';
import LetsTalk from './components/sections/LetsTalk';
import { expertiseData } from './data/expertise';
import { workData } from './data/work';
import { useScrollTo } from './hooks/useScrollTo';

function App() {
  const scrollTo = useScrollTo();

  const handleHeroCtaClick = () => {
    scrollTo('work');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home">
        <Hero
          subtitle="Developerin & Consultant für digitale Lösungen mit Wirkung."
          title={<>Ich verbinde <span className="underlined md:underlined-md">Web-Entwicklung</span>, <span className="underlined md:underlined-md">visuelles Design</span> und <span className="underlined md:underlined-md  ">KI-gestützte Workflows</span> zu klaren Erlebnissen.</>}
          ctaText="Projekte ansehen"
          onCtaClick={handleHeroCtaClick}
        />
      </section>

      {/* Expertise Section */}
      <section id="expertise">
        <Expertise expertiseItems={expertiseData} />
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
