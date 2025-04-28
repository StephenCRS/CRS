"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ServiceAreas() {
  // List of areas served around Greenville
  const serviceAreas = [
    {
      name: "Greenville",
      responseTime: "30-45 min",
      coverage: "Primary",
      color: "#0066cc", // Dark blue - primary zone
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation", "Sewage Cleanup", "Specialized Cleaning"]
    },
    {
      name: "Simpsonville",
      responseTime: "45-60 min",
      coverage: "Primary",
      color: "#0066cc",
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation", "Sewage Cleanup", "Specialized Cleaning"]
    },
    {
      name: "Mauldin",
      responseTime: "45-60 min",
      coverage: "Primary",
      color: "#0066cc",
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation", "Sewage Cleanup", "Specialized Cleaning"]
    },
    {
      name: "Taylors",
      responseTime: "45-60 min",
      coverage: "Primary",
      color: "#0066cc",
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation", "Sewage Cleanup", "Specialized Cleaning"]
    },
    {
      name: "Greer",
      responseTime: "45-60 min",
      coverage: "Primary",
      color: "#0066cc",
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation", "Sewage Cleanup"]
    },
    {
      name: "Travelers Rest",
      responseTime: "45-60 min",
      coverage: "Primary",
      color: "#0066cc",
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation", "Sewage Cleanup"]
    },
    {
      name: "Easley",
      responseTime: "60-75 min",
      coverage: "Secondary",
      color: "#4d94ff", // Medium blue - secondary zone
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation"]
    },
    {
      name: "Fountain Inn",
      responseTime: "60-75 min",
      coverage: "Secondary",
      color: "#4d94ff",
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation"]
    },
    {
      name: "Berea",
      responseTime: "45-60 min",
      coverage: "Primary",
      color: "#0066cc",
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation", "Sewage Cleanup"]
    },
    {
      name: "Wade Hampton",
      responseTime: "30-45 min",
      coverage: "Primary",
      color: "#0066cc",
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation", "Sewage Cleanup", "Specialized Cleaning"]
    },
    {
      name: "Five Forks",
      responseTime: "60-75 min",
      coverage: "Secondary",
      color: "#4d94ff",
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation"]
    },
    {
      name: "Piedmont",
      responseTime: "60-75 min",
      coverage: "Secondary",
      color: "#4d94ff",
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation"]
    },
    {
      name: "Welcome",
      responseTime: "60-75 min",
      coverage: "Secondary",
      color: "#4d94ff",
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation"]
    },
    {
      name: "Parker",
      responseTime: "45-60 min",
      coverage: "Primary",
      color: "#0066cc",
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation", "Sewage Cleanup"]
    },
    {
      name: "Sans Souci",
      responseTime: "45-60 min",
      coverage: "Primary",
      color: "#0066cc",
      services: ["Water Damage", "Flood Cleanup", "Mold Remediation", "Sewage Cleanup"]
    }
  ];

  // State for selected area (initialized with null to prevent hydration mismatch)
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  // State to track if we're on the client side
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true on component mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Get selected area details - only on client side
  const selectedAreaDetails = isClient && selectedArea
    ? serviceAreas.find(area => area.name === selectedArea)
    : null;

  // Filter areas by coverage for the map legend
  const primaryAreas = serviceAreas.filter(area => area.coverage === 'Primary');
  const secondaryAreas = serviceAreas.filter(area => area.coverage === 'Secondary');

  // Simple service locations section instead of interactive map
  const simpleServiceLocations = (
    <div className="mb-8">
      <h4 className="text-xl font-bold mb-4">Our Service Locations</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {serviceAreas.map((area, index) => (
          <div key={index} className="bg-blue-50 rounded p-3 text-center">
            <span className="font-medium text-blue-800">{area.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="service-areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas in Greenville, SC</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carolina Restoration Solutions proudly serves Greenville and surrounding communities with 24/7 water damage restoration services.
          </p>
        </div>

        {isClient ? (
          // Only render the interactive map on the client side
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Map */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 bg-blue-50 border-b border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800">Coverage Map</h3>
                  <p className="text-gray-600 text-sm">Click on a location to see detailed coverage information</p>
                </div>

                <div className="relative h-[500px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211672.11126530513!2d-82.5016430581056!3d34.833973730177004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88578f6662fa1105%3A0xd8aa9d77bf257696!2sGreenville%20County%2C%20SC!5e0!3m2!1sen!2sus!4v1634913560239!5m2!1sen!2sus"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Greenville County Coverage Map"
                  ></iframe>

                  {/* Map overlay with coverage zones */}
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
                    <h4 className="font-bold text-sm mb-2">Coverage Zones</h4>
                    <div className="flex items-center mb-2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-xs">Primary Zone (30-60 min response)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-400 rounded-full mr-2"></div>
                      <span className="text-xs">Secondary Zone (60-75 min response)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Highlights */}
              <div className="mt-6 bg-blue-700 text-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">60</div>
                  <div className="text-lg">Minute Average<br/>Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">24/7</div>
                  <div className="text-lg">Emergency<br/>Service</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-lg">Local Service<br/>Areas</div>
                </div>
              </div>
            </div>

            {/* Right Column - Service Area Information */}
            <div>
              <div className="bg-white rounded-lg shadow-lg mb-6">
                <div className="p-4 bg-blue-50 border-b border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800">Service Locations</h3>
                  <p className="text-gray-600 text-sm">Click on a location for details</p>
                </div>

                <div className="p-4 max-h-[300px] overflow-y-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div
                        key={index}
                        className={`rounded p-2 text-center cursor-pointer transition-all hover:shadow-md ${
                          selectedArea === area.name
                            ? 'bg-blue-100 border-2 border-blue-500'
                            : area.coverage === 'Primary'
                              ? 'bg-blue-50 border border-blue-100'
                              : 'bg-blue-50/50 border border-blue-100/50'
                        }`}
                        onClick={() => setSelectedArea(area.name)}
                      >
                        <div className="flex items-center space-x-1">
                          <span
                            className="h-3 w-3 rounded-full flex-shrink-0"
                            style={{ backgroundColor: area.color }}
                          ></span>
                          <span className="font-medium text-blue-800 text-sm">{area.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Selected Area Details */}
              {selectedAreaDetails && (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 bg-blue-600 text-white">
                    <h3 className="text-xl font-bold">{selectedAreaDetails.name}</h3>
                    <div className="flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">Response Time: {selectedAreaDetails.responseTime}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-bold text-gray-700 mb-2">Available Services:</h4>
                    <ul className="space-y-1">
                      {selectedAreaDetails.services.map((service, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{service}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="font-bold text-gray-700 mb-2">Coverage Level:</h4>
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          selectedAreaDetails.coverage === 'Primary'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {selectedAreaDetails.coverage} Service Area
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                      <Link href="#contact">Get Service in {selectedAreaDetails.name}</Link>
                    </Button>
                  </div>
                </div>
              )}

              {!selectedAreaDetails && (
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <h3 className="text-lg font-bold mb-3">Why Choose Carolina Restoration?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-700 text-sm">
                        <span className="font-bold">Local Expertise:</span> We understand Greenville County's unique challenges from weather patterns to home construction.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-700 text-sm">
                        <span className="font-bold">Rapid Response:</span> Our strategically located teams ensure the fastest possible arrival when water damage strikes.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-700 text-sm">
                        <span className="font-bold">Wide Coverage:</span> We serve all of Greenville County and many surrounding areas with our comprehensive restoration services.
                      </p>
                    </li>
                  </ul>
                </div>
              )}

              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">Contact Our Local Team</Link>
              </Button>
            </div>
          </div>
        ) : (
          // Fallback for server-side rendering
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Serving All of Greenville County</h3>
              <p className="text-gray-700 mb-6">
                Water damage doesn't wait, and neither do we. Our experienced technicians are strategically located throughout Greenville County to provide rapid response to water damage emergencies.
              </p>

              <p className="text-gray-700 mb-6">
                Whether you're in downtown Greenville, the suburbs, or rural areas of the county, our team can reach you quickly to begin the water restoration process and minimize damage to your property.
              </p>

              <h4 className="text-xl font-bold mb-4">Why Local Response Matters</h4>
              <p className="text-gray-700 mb-6">
                When dealing with water damage, time is critical. As a local Greenville restoration company, we understand the unique challenges of the area, from seasonal storms to the specific construction styles of homes in the region.
              </p>

              {simpleServiceLocations}

              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">Contact Our Local Team</Link>
              </Button>
            </div>

            <div>
              <div className="bg-blue-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Greenville Water Damage Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">
                      <span className="font-bold">High Humidity Climate:</span> Greenville's climate can lead to increased moisture issues in homes and businesses.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">
                      <span className="font-bold">Seasonal Storms:</span> Heavy rains and seasonal storms can lead to flooding and water intrusion.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">
                      <span className="font-bold">Aging Infrastructure:</span> Some areas of Greenville have older plumbing systems more prone to leaks and ruptures.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Emergency Response Time</h3>
                <div className="flex items-center justify-center mb-6">
                  <div className="text-center">
                    <span className="block text-5xl font-bold text-blue-600">60</span>
                    <span className="text-gray-600">Minute Average</span>
                  </div>
                  <div className="mx-4 h-16 border-l border-gray-300"></div>
                  <div className="text-center">
                    <span className="block text-5xl font-bold text-blue-600">24/7</span>
                    <span className="text-gray-600">Availability</span>
                  </div>
                </div>
                <p className="text-gray-700 text-center">
                  Our local Greenville team is ready to respond to your water damage emergency 24 hours a day, 7 days a week.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Facts About Greenville Water Damage */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Greenville Water Damage Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">High Humidity Climate</h4>
                  <p className="text-gray-700">
                    Greenville's climate can lead to increased moisture issues in homes and businesses, requiring specialized dehumidification techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Seasonal Storms</h4>
                  <p className="text-gray-700">
                    Heavy rains and seasonal storms can lead to flooding and water intrusion. Our emergency teams are always prepared for storm-related damage.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Aging Infrastructure</h4>
                  <p className="text-gray-700">
                    Some areas of Greenville have older plumbing systems more prone to leaks and ruptures. We're experts in handling these challenging situations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
