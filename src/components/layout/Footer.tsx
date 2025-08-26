import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-black text-black py-8">
      <div className=" px-4 sm:px-6 lg:px-18">
        <div className="flex justify-between items-center">
          {/* Copyright links */}
          <div className="text-left">
            <p className="text-sm opacity-75">
              © {currentYear} Aniko Juhasz. Alle Rechte vorbehalten.
            </p>
          </div>
          
          {/* Social Icons rechts */}
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
