const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JuxT Remedica",
    "alternateName": "JMRC Intel",
    "description": "Just Mercurial Research & Creatives providing comprehensive pharmaceutical services and apothecary solutions in Kenya",
    "url": "https://juxtrx.ke",
    "logo": "https://juxtrx.ke/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-123-456-789",
      "contactType": "customer service",
      "areaServed": "KE",
      "availableLanguage": ["English", "Swahili"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE",
      "addressRegion": "Nairobi",
      "addressLocality": "Westlands"
    },
    "sameAs": [
      "https://www.facebook.com/juxtrx",
      "https://www.twitter.com/juxtrx",
      "https://www.linkedin.com/company/juxtrx"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Kenya"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pharmaceutical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Regulatory Support & Product Registration",
            "description": "Navigate complex pharmaceutical regulations with expert guidance and product registration assistance"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Local Trade Representative & Brand Management",
            "description": "Market representation and brand management services for pharmaceutical companies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Pharmacy Operations & Consultancy",
            "description": "Comprehensive pharmacy management services including PBM and strategic consultancy"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default JsonLd;