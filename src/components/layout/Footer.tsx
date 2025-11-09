import React from 'react';
import { Linkedin, Github, Cookie } from 'lucide-react';
import { LEGAL_ITEMS } from '../../utils/constants';
import { removeGA4 } from '../../utils/analytics';

type Page = 'home' | 'leistungen' | 'work' | 'lets-talk' | 'impressum' | 'datenschutz' | 'agb';

interface FooterProps {
  onPageChange?: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const currentYear = new Date().getFullYear();

  const handleLegalClick = (page: Page) => {
    onPageChange?.(page);
  };

  return (
    <footer className="bg-white border-t border-black text-black py-8">
      <div className=" px-4 sm:px-6 lg:px-18">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright und Legal Links */}
          <div className="text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p className="text-sm opacity-75">
                © {currentYear} Aniko Juhasz. Alle Rechte vorbehalten.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                {LEGAL_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLegalClick(item.id as Page)}
                    className="opacity-75 hover:opacity-100 hover:underline transition-opacity duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
          <div className="relative group">
  <button
    aria-label="Cookie-Einstellungen ändern"
    title="Cookie-Einstellungen ändern"
    onClick={() => {
    localStorage.removeItem("cookieConsent");
    removeGA4(); // GA sofort deaktivieren
    window.location.reload(); // Banner erscheint neu
  }}
    className="text-black hover:text-[var(--color-primary)] flex items-center gap-2"
  >
    <Cookie size={20} />
  </button>
  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                   text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100
                   transition-opacity">
    Cookies entfernen
  </span>
</div>

            <a
              href="https://www.linkedin.com/in/anikojuhasz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/TheRealAniko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;