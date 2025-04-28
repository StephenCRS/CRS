import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SpecializedCleaningPage() {
  return (
    <main>
      <Header />

      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Specialized Cleaning Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert cleaning solutions for even the most challenging situations
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Specialized Cleaning</h2>
              <p className="text-gray-700 mb-4">
                Carolina Restoration Solutions offers specialized cleaning services that go beyond standard cleaning methods. Our trained technicians use advanced equipment and techniques to address specific cleaning challenges that regular cleaning services can't handle.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're dealing with biohazard situations, trauma scenes, hoarding cleanup, or other specialized needs, our team is prepared to restore your property safely and professionally.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">Contact Our Specialists</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://static.visionamp.co/rubix/20231130/800_6248c0af546bb4ba9269e7b781f4f33f6f5b13a7.jpg"
                alt="Specialized cleaning professional in PPE"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Our Specialized Cleaning Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Crime Scene Cleanup</h3>
              <p className="text-gray-700">
                Professional decontamination and restoration of crime scenes. We handle biohazard materials with proper safety protocols and discretion.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Hoarding Cleanup</h3>
              <p className="text-gray-700">
                Compassionate and thorough cleaning services for hoarding situations. We help restore homes to safe, livable conditions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Air Duct Cleaning</h3>
              <p className="text-gray-700">
                Thorough cleaning of HVAC systems and air ducts to improve air quality, reduce allergens, and increase system efficiency.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Biohazard Cleanup</h3>
              <p className="text-gray-700">
                Safe removal and disposal of biohazardous materials following strict safety protocols and industry regulations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Sewage Backup Cleanup</h3>
              <p className="text-gray-700">
                Thorough cleaning, sanitization, and deodorization of areas affected by sewage backups to restore safety and health.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Infection Control</h3>
              <p className="text-gray-700">
                Advanced disinfection services using hospital-grade disinfectants to eliminate pathogens in residential and commercial settings.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Specialized Cleaning Services?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold">Certified Professionals:</span> Our technicians are specially trained and certified for specialized cleaning operations.
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold">Advanced Equipment:</span> We use industrial-grade cleaning equipment and hospital-grade disinfectants.
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold">Compliance:</span> All our cleaning procedures comply with OSHA, EPA, and state regulations.
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-bold">Compassion and Discretion:</span> We understand sensitive situations require both technical expertise and human compassion.
                </div>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Need Specialized Cleaning Services?</h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              Contact our team today for a confidential consultation. We're available 24/7 for emergency specialized cleaning needs throughout Greenville, SC and surrounding areas.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">
              <Link href="#contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
