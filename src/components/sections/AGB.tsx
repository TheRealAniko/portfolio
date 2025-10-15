import React, { useEffect } from 'react';
import Container from '../layout/Container';

const AGB: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container>
      <div className="pt-32 pb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <p className="text-lg text-gray-600 mb-8">Anikó Juhász – Webentwicklung, Design & digitale Services</p>
        <p className="text-sm text-gray-500 mb-12">Stand: Oktober 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Geltungsbereich</h2>
            <p className="mb-4">
              Diese AGB gelten für alle Projekte und Vereinbarungen zwischen Anikó Juhász (nachfolgend „ich") und meinen Kund:innen.
            </p>
            <p>
              Sie gelten für Leistungen in den Bereichen Webentwicklung, Webdesign, Social Media, KI-Automatisierung, Beratung und digitale Kommunikation, sofern nichts anderes schriftlich vereinbart wurde.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Zusammenarbeit & Leistungsumfang</h2>
            <p className="mb-4">
              Grundlage jedes Projekts ist das individuelle Angebot, in dem Leistungen, Zeitrahmen und Kosten festgelegt werden.
            </p>
            <p className="mb-4">
              Ich arbeite transparent, halte Rücksprache bei Änderungen und stimme wichtige Schritte mit dir ab.
            </p>
            <p>
              Damit alles reibungslos läuft, stellst du benötigte Inhalte (Texte, Bilder, Logos, Zugänge etc.) rechtzeitig und vollständig bereit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Änderungen & Zusatzaufwand</h2>
            <p className="mb-4">
              Wenn sich während des Projekts zeigt, dass zusätzlicher Aufwand entsteht (z. B. durch neue Wünsche oder nachträgliche Änderungen), spreche ich das natürlich rechtzeitig an.
            </p>
            <p>
            Der Mehraufwand wird nur nach Absprache umgesetzt und nach Aufwand gemäß den im Angebot gültigen Konditionen berechnet – oder, falls sinnvoll, in einem ergänzenden Angebot zusammengefasst.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Vergütung & Zahlungsbedingungen</h2>
            <p className="mb-4">
              Die im Angebot genannten Preise sind verbindlich.
            </p>
            <p className="mb-4">
              Rechnungen sind – sofern nicht anders vereinbart – innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar.
            </p>
            <p>
              Bis zur vollständigen Bezahlung bleiben alle erstellten Arbeiten und Rechte in meinem Eigentum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Abnahme & Gewährleistung</h2>
            <p className="mb-4">
              Nach Fertigstellung hast du die Möglichkeit, das Ergebnis zu prüfen.
            </p>
            <p className="mb-4">
              Mängel teilst du mir bitte innerhalb von 7 Tagen mit – danach gilt das Projekt als abgenommen.
            </p>
            <p>
              Ich hafte nicht für geringfügige Abweichungen, die durch unterschiedliche Geräte, Browser oder Darstellungseinstellungen entstehen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Nutzungsrechte</h2>
            <p className="mb-4">
              Nach vollständiger Bezahlung erhältst du das einfache, zeitlich und räumlich unbegrenzte Nutzungsrecht an den erstellten Arbeiten (z. B. Website, Designs, Texte, Automatisierungen).
            </p>
            <p className="mb-4">
              Eine Weitergabe oder Veränderung meiner Arbeit durch Dritte ist nur mit meiner Zustimmung erlaubt.
            </p>
            <p>
              Das Urheberrecht bleibt bei mir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Materialien & Inhalte</h2>
            <p className="mb-4">
              Du bestätigst, dass du die Rechte an allen übergebenen Materialien (Texte, Bilder, Logos, Videos etc.) besitzt oder sie rechtmäßig nutzt.
            </p>
            <p>
              Ich übernehme keine Haftung für Urheberrechts- oder Datenschutzverstöße in bereitgestellten Inhalten.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Social-Media-Inhalte</h2>
            <p className="mb-4">
              Bei der Betreuung von Social-Media-Kanälen veröffentliche ich Inhalte nur nach vorheriger Abstimmung oder Freigabe.
            </p>
            <p className="mb-4">
              Kund:innen sind verantwortlich für die Richtigkeit und rechtliche Zulässigkeit der bereitgestellten Materialien.
            </p>
            <p>
              Für Urheber-, Marken- oder Persönlichkeitsrechtsverletzungen durch übergebene Inhalte übernehme ich keine Haftung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Erfolg & Reichweite</h2>
            <p className="mb-4">
              Der Erfolg von Social-Media-, SEO- oder KI-Maßnahmen hängt von vielen externen Faktoren ab (z. B. Algorithmus, Zielgruppe, Marktumfeld).
            </p>
            <p>
              Ich garantiere daher keine bestimmten Reichweiten, Rankings oder Ergebnisse, sichere aber eine sorgfältige und professionelle Umsetzung zu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Haftung & technische Leistungen</h2>
            <p className="mb-4">
              Ich hafte nur bei Vorsatz oder grober Fahrlässigkeit.
            </p>
            <p className="mb-4">
              Für Funktionsstörungen oder Ausfälle externer Dienste (z. B. Hosting, Plugins, Plattformen, KI-Schnittstellen) übernehme ich keine Verantwortung.
            </p>
            <p>
              Technische Wartung oder Updates nach Projektabschluss sind nicht automatisch enthalten, können aber separat vereinbart werden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Datenschutz</h2>
            <p className="mb-4">
              Personenbezogene Daten werden ausschließlich zur Projektabwicklung verwendet.
            </p>
            <p className="mb-4">
              Ich gebe sie nur weiter, wenn es für die Umsetzung notwendig ist (z. B. an Hosting- oder Domainanbieter).
            </p>
            <p>
              Es gilt die Datenschutzerklärung auf <a href="#datenschutz" className="text-[var(--color-primary)] hover:underline">www.aniko.dev</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Schlussbestimmungen</h2>
            <p className="mb-4">
              Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt der Rest davon unberührt.
            </p>
            <p className="mb-4">
              An die Stelle der unwirksamen Regelung tritt eine, die dem wirtschaftlichen Zweck am nächsten kommt.
            </p>
            <p>
              Es gilt deutsches Recht. Gerichtsstand ist – soweit zulässig – Weil am Rhein.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default AGB;
