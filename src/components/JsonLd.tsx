const JsonLd = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'JMRC.intel',
    alternateName: 'Juxt Rx',
    description:
      'Creative intelligence for regulated markets — regulatory development, systems, brand management, and creative operations in Kenya',
    url: 'https://juxtrx.ke',
    logo: 'https://juxtrx.ke/jmrc-logo-master.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254-777-795-985',
      contactType: 'customer service',
      areaServed: 'KE',
      availableLanguage: ['English', 'Swahili'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE',
      addressRegion: 'Nairobi',
      addressLocality: 'Westlands',
    },
    sameAs: [
      'https://www.facebook.com/juxtrx',
      'https://www.twitter.com/juxtrx',
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'Kenya',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Regulated Markets Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Regulatory Support & Registration',
            description: 'Regulatory compliance and registration for regulated industries',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'LTR & Brand Management',
            description: 'Market representation and brand management in East Africa',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Systems & Business Operations',
            description: 'Systems development and operational excellence',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default JsonLd;
