import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Our Water Restoration Company</h2>

          <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
            <div className="w-full">
              <p className="text-gray-600 mb-6 text-lg">
                With over 15 years of experience in water damage restoration, we've helped thousands of homeowners and businesses recover from water-related disasters. Our IICRC-certified technicians are equipped with state-of-the-art technology to tackle any water damage scenario.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                We understand that water damage can be stressful and disruptive. That's why we work efficiently to restore your property to its pre-damage condition as quickly as possible, while providing compassionate service throughout the process.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">IICRC Certified Technicians</h3>
                </div>
              </div>
              <p className="text-gray-600 ml-11">Our professionals meet the highest industry standards for water restoration.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Advanced Equipment</h3>
                </div>
              </div>
              <p className="text-gray-600 ml-11">We use industrial-grade equipment for fast, effective water extraction and drying.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">24/7 Emergency Response</h3>
                </div>
              </div>
              <p className="text-gray-600 ml-11">We're available day or night to respond quickly to your water emergency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
