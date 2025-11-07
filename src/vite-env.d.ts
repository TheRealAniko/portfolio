/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GA4_MEASUREMENT_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

// GA4 TypeScript-Definitionen
interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
}