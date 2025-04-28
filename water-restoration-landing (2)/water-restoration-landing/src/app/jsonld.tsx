export default function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Carolina Restoration Solutions',
    'image': 'https://carolinarestorationsolutions.com/logo.png',
    'url': 'https://carolinarestorationsolutions.com',
    'telephone': '864-423-5170',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Greenville',
      'addressRegion': 'SC',
      'postalCode': '29601',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 34.8526,
      'longitude': -82.3940
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    },
    'sameAs': [
      'https://www.facebook.com/carolinarestorationsolutions',
      'https://twitter.com/carolinarestoration',
      'https://www.instagram.com/carolinarestorationsolutions'
    ],
    'priceRange': '$$',
    'description': 'Carolina Restoration Solutions provides professional water damage restoration, flood cleanup, and mold remediation services in Greenville, SC. 24/7 emergency response. Trusted experts serving all of Greenville County.',
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': 34.8526,
        'longitude': -82.3940
      },
      'geoRadius': '80467' // 50 miles in meters
    },
    'serviceType': [
      'Water Damage Restoration',
      'Flood Cleanup',
      'Mold Remediation',
      'Water Extraction',
      'Dehumidification',
      'Sewage Cleanup'
    ],
    'availableLanguage': 'English',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Water Restoration Services',
      'itemListElement': [
        {
          '@type': 'OfferCatalog',
          'name': 'Water Damage Restoration in Greenville, SC',
          'description': 'Professional water damage restoration services in Greenville and surrounding areas'
        },
        {
          '@type': 'OfferCatalog',
          'name': 'Flood Cleanup in Greenville, SC',
          'description': 'Expert flood cleanup services for Greenville County residents and businesses'
        },
        {
          '@type': 'OfferCatalog',
          'name': 'Mold Remediation in Greenville, SC',
          'description': 'Comprehensive mold remediation and removal services for Greenville properties'
        }
      ]
    },
    'makesOffer': {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Emergency Water Damage Restoration',
        'description': '24/7 emergency water damage restoration service in Greenville, SC with 30-minute response time'
      }
    }
  };
}
