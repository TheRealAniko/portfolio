import { useState } from 'react';
import Layout from './components/layout/Layout';
import PageRouter from './components/layout/PageRouter';
import CookieBanner from './components/ui/CookieBanner';

type Page = 'home' | 'leistungen' | 'work' | 'lets-talk' | 'impressum' | 'datenschutz';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
  };

  const handleCookieAccept = () => {
    console.log('Cookies akzeptiert');
    // Hier können zusätzliche Cookie-Funktionen aktiviert werden
  };

  const handleCookieDecline = () => {
    console.log('Cookies abgelehnt');
    // Hier können Cookie-Funktionen deaktiviert werden
  };

  return (
    <Layout currentPage={currentPage} onPageChange={handlePageChange}>
      <PageRouter 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
      <CookieBanner 
        onAccept={handleCookieAccept}
        onDecline={handleCookieDecline}
      />
    </Layout>
  );
}

export default App;