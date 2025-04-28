"use client";

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Link from 'next/link';

// Service card component
const ServiceCard = ({
  title,
  description,
  icon,
  iconBg,
  id,
  linkUrl
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  id: string;
  linkUrl?: string;
}) => {
  return (
    <article
      className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
      id={id}
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className={`${iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3" itemProp="name">{title}</h3>
      <p className="text-gray-600 mb-4" itemProp="description">{description}</p>
      {linkUrl ? (
        <Link href={linkUrl} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
          Learn More <span className="ml-1">→</span>
        </Link>
      ) : (
        <Button variant="link" className="p-0 text-blue-600 hover:text-blue-800">
          Learn More →
        </Button>
      )}
      <meta itemProp="provider" content="Carolina Restoration Solutions" />
      <meta itemProp="serviceType" content={title} />
    </article>
  );
};

export default function Services() {
  const services = [
    {
      id: "water-damage-restoration",
      title: "Water Damage Restoration",
      description: "Fast water extraction, drying, and dehumidification to prevent further damage and mold growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
        </svg>
      ),
      iconBg: "bg-blue-600"
    },
    {
      id: "flood-cleanup",
      title: "Flood Cleanup",
      description: "Comprehensive flood cleanup services to safely remove water, sanitize, and restore affected areas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      iconBg: "bg-blue-500"
    },
    {
      id: "mold-remediation",
      title: "Mold Remediation",
      description: "Expert mold detection and removal to ensure a safe, healthy environment in your home or business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconBg: "bg-green-600"
    },
    {
      id: "sewage-cleanup",
      title: "Sewage Cleanup",
      description: "Safe and thorough sewage backup cleanup with proper sanitization for hazardous conditions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      iconBg: "bg-red-600"
    },
    {
      id: "specialized-cleaning",
      title: "Specialized Cleaning",
      description: "Professional cleaning services for biohazard situations, hoarding cleanup, and other specialized needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      iconBg: "bg-purple-600",
      linkUrl: "/specialized-cleaning"
    }
  ];

  // Structured data for services list
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'itemListElement': services.map((service, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'Service',
          'name': service.title,
          'description': service.description,
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Carolina Restoration Solutions'
          }
        }
      }))
    };

    // Add structured data to the page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [services]);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Restoration Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive water damage restoration and specialized cleaning services with 24/7 emergency response.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              iconBg={service.iconBg}
              id={service.id}
              linkUrl={service.linkUrl}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="#contact">Get Emergency Service Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
