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

// GA-Script dynamisch laden
export const loadGA4 = (): void => {
    if (typeof window === "undefined" || !hasAnalyticsConsent()) {
        return;
    }

    // Prüfen, ob GA4 konfiguriert ist
    if (!isGA4Configured()) {
        console.warn("GA4 Measurement ID ist nicht konfiguriert. Bitte VITE_GA4_MEASUREMENT_ID in .env setzen.");
        return;
    }

    // Wenn gtag bereits existiert, nur Config neu setzen
    if (window.gtag) {
        window.gtag('config', GA4_MEASUREMENT_ID, {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
            cookie_flags: "SameSite=None; Secure",
        });
        return;
    }

    // Script-Tag zum Head hinzufügen
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // gtag.js initialisieren
    window.dataLayer = window.dataLayer || [];
    const dataLayer = window.dataLayer;
    function gtag(...args: any[]) {
        dataLayer.push(args);
    }
    window.gtag = gtag;

    // GA4 Konfiguration
    gtag('js', new Date());
    gtag('config', GA4_MEASUREMENT_ID, {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        cookie_flags: "SameSite=None; Secure",
    });
};

// GA4 entfernen, wenn der User Cookies ablehnt
export const removeGA4 = (): void => {
    if (typeof window === "undefined") return;

    // GA-Script entfernen
    const scripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
    scripts.forEach(script => script.remove());

    // dataLayer leeren
    if (window.dataLayer) {
        window.dataLayer = [];
    }

    // gtag.js entfernen
    delete window.gtag;
    delete window.dataLayer;
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