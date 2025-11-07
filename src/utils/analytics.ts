// GA4 Measurement ID aus der .env-Datei lesen
export const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || "";

// Prüfen, ob GA4 konfiguriert ist
export const isGA4Configured = (): boolean => {
    return !!GA4_MEASUREMENT_ID && GA4_MEASUREMENT_ID.startsWith("G-");
};

// Prüfen, ob der User Analytics-Cookies akzeptiert hat
export const hasAnalyticsConsent = (): boolean => {
    if (typeof window === "undefined") return false;
    const consent = localStorage.getItem("cookieConsent");
    return consent === "accepted";
};

// GA4 nach Google's offiziellem Standard laden
export const loadGA4 = (): void => {
    if (typeof window === "undefined" || !hasAnalyticsConsent()) {
        return;
    }

    if (!isGA4Configured()) {
        console.warn("GA4 Measurement ID ist nicht konfiguriert.");
        return;
    }

    // Prüfen, ob bereits geladen (verhindert doppeltes Laden)
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
        // Bereits geladen, nur Config aktualisieren
        if (window.gtag) {
            window.gtag('config', GA4_MEASUREMENT_ID, {
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false,
            });
        }
        return;
    }

    // Google's offizieller Standard - Schritt für Schritt:
    
    // 1. dataLayer initialisieren
    window.dataLayer = window.dataLayer || [];
    
    // 2. gtag-Funktion definieren (genau wie Google es will)
    function gtag() {
        window.dataLayer!.push(arguments);
    }
    window.gtag = gtag;

    // 3. gtag('js', new Date()) aufrufen
    window.gtag('js', new Date());

    // 4. gtag('config', MEASUREMENT_ID) aufrufen
    window.gtag('config', GA4_MEASUREMENT_ID, {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
    });

    // 5. Script-Tag erstellen und laden (genau wie Google es will)
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script);
};

// GA4 entfernen, wenn der User Cookies ablehnt
export const removeGA4 = (): void => {
    if (typeof window === "undefined") return;

    // GA-Script entfernen
    const scripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
    scripts.forEach(script => script.remove());

    // dataLayer leeren
    if (window.dataLayer) {
        window.dataLayer.length = 0;
    }

    // gtag entfernen
    delete window.gtag;
};

// Hilfsfunktion für Page Views
export const trackPageView = (path: string): void => {
    if (!hasAnalyticsConsent() || !window.gtag || !isGA4Configured()) return;
    
    window.gtag('config', GA4_MEASUREMENT_ID, {
        page_path: path,
        anonymize_ip: true,
    });
};

// Hilfsfunktion für Custom Events
export const trackEvent = (
    eventName: string,
    eventParams?: Record<string, any>
): void => {
    if (!hasAnalyticsConsent() || !window.gtag || !isGA4Configured()) return;

    window.gtag('event', eventName, {
        ...eventParams,
    });
};