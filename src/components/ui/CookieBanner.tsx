import React, { useState, useEffect } from 'react';
import Button from './Button';
import { loadGA4, removeGA4 } from '../../utils/analytics';

interface CookieBannerProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Prüfen, ob Cookie-Einwilligung bereits erteilt wurde
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    loadGA4(); // GA4 laden, wenn Cookies akzeptiert werden
    onAccept?.();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    removeGA4(); // GA4 entfernen, wenn Cookies abgelehnt werden
    onDecline?.();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">
              Cookie-Einstellungen
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. 
              Durch die Nutzung der Website stimmen Sie der Verwendung von Cookies zu. 
              Weitere Informationen finden Sie in unserer{' '}
              <a 
                href="#datenschutz" 
                className="text-[var(--color-primary)] hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  // Hier könnte ein Link zur Datenschutzerklärung gesetzt werden
                }}
              >
                Datenschutzerklärung
              </a>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleDecline}
            >
              Ablehnen
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleAccept}
            >
              Akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
