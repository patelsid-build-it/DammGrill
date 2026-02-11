import React from 'react';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[200px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Allgemeine Hinweise</h3>
            <p className="text-gray-700 leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Datenerfassung auf dieser Website</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</span>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hosting</h2>
            <p className="text-gray-700 leading-relaxed">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die 
              personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den 
              Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, 
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, 
              Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, 
              handeln.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Datenschutz</h3>
            <p className="text-gray-700 leading-relaxed">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
              <p>Damm Grill</p>
              <p>Auf dem Damm 52</p>
              <p>47137 Duisburg</p>
              <p className="mt-2">Telefon: 0203 / 44 30 04</p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="text-gray-700 leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung 
              möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die 
              Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf 
              unberührt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Server-Log-Dateien</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so 
              genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
              Dies sind:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Anfrage per Telefon oder E-Mail</h3>
            <p className="text-gray-700 leading-relaxed">
              Wenn Sie uns per Telefon oder E-Mail kontaktieren, wird Ihre Anfrage inklusive 
              aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke 
              der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten 
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Ihre Rechte</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
              <li>Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Google Maps</h2>
            <p className="text-gray-700 leading-relaxed">
              Diese Website nutzt über eine API den Kartendienst Google Maps. Anbieter ist die 
              Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu 
              speichern. Diese Informationen werden in der Regel an einen Server von Google in 
              den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen 
              Einfluss auf diese Datenübertragung.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung 
              unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der 
              Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von 
              Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
