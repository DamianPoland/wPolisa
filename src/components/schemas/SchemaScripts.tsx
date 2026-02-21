export default function SchemaScripts() {
  const websiteUrl = "https://wpolisa.pl";
  const logoUrl = `${websiteUrl}/icons/icon-512x512.png`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${websiteUrl}/#website`,
        url: websiteUrl,
        name: "wPolisa",
        publisher: { "@id": `${websiteUrl}/#organization` },
      },
      {
        "@type": "InsuranceAgency",
        "@id": `${websiteUrl}/#organization`,
        name: "wPolisa - Multiagencja Ubezpieczeniowa",
        description: "Ubezpieczenia bez bólu głowy. Zamiast szukać, po prostu nas zapytaj.",
        url: websiteUrl,
        telephone: "+48888970510",
        email: "kontakt@wpolisa.pl",
        image: logoUrl,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: "64",
          height: "64",
        },
        knowsAbout: [
          "Ubezpieczenia komunikacyjne",
          "Ubezpieczenia domów i mieszkań",
          "Ubezpieczenia na życie",
          "Ubezpieczenia zdrowotne",
          "Ubezpieczenia firmowe",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Świętojańska 118",
          addressLocality: "Gdynia",
          postalCode: "81-388",
          addressCountry: "PL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "54.510344",
          longitude: "18.537243",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
          },
        ],
        priceRange: "$$",
        areaServed: [
          { "@type": "City", name: "Gdynia" },
          { "@type": "City", name: "Gdańsk" },
          { "@type": "City", name: "Sopot" },
          { "@type": "Country", name: "PL" },
        ],
        sameAs: [
          "https://www.facebook.com/wPolisa",
          "https://www.linkedin.com/company/wpolisa",
          "https://x.com/wPolisa",
          "https://www.instagram.com/wpolisa",
        ],
      },
    ],
  };

  return (
    <script
      id="schema-graph"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
