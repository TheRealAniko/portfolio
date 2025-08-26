import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  containerClassName = '' 
}) => {
  return (
    <section className={`py-20 ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
