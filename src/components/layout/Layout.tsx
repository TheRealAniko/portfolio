import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

type Page = 'home' | 'leistungen' | 'work' | 'lets-talk' | 'impressum' | 'datenschutz' | 'agb';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: Page;
  onPageChange?: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onPageChange }) => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onPageChange={onPageChange} />
      <main className="flex-1">
        {children}
      </main>
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default Layout;