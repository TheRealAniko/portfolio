import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
