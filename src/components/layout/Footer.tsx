import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { LEGAL_ITEMS } from '../../utils/constants';

type Page = 'home' | 'leistungen' | 'work' | 'lets-talk' | 'impressum' | 'datenschutz';

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
            <p className="text-sm opacity-75 mb-2">
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
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
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