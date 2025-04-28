import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Emergency Contact",
      description: "Our emergency line is available 24/7. Call us immediately to start the restoration process as soon as possible.",
      services: [
        "24/7 live operator response",
        "Immediate dispatch of technicians",
        "Fast 60-minute average response time",
        "Initial damage assessment over the phone"
      ]
    },
    {
      number: "02",
      title: "Inspection & Assessment",
      description: "Our certified technicians will inspect the damage and create a detailed plan for water removal and restoration.",
      services: [
        "Thorough damage assessment using moisture meters",
        "Water contamination category identification",
        "Detailed documentation for insurance purposes",
        "Development of a comprehensive recovery plan"
      ]
    },
    {
      number: "03",
      title: "Water Extraction",
      description: "Using powerful pumps and vacuum units, we remove all standing water from your property.",
      services: [
        "Removal of standing water with submersible pumps",
        "Use of industrial wet/dry vacuums",
        "Complete extraction from all affected areas",
        "Carpet and pad removal if necessary"
      ]
    },
    {
      number: "04",
      title: "Drying & Dehumidification",
      description: "After water removal, our specialized equipment dries and dehumidifies the affected areas to prevent mold growth.",
      services: [
        "Strategic placement of industrial air movers",
        "Use of commercial dehumidifiers to remove moisture",
        "Daily moisture level monitoring",
        "Temperature-controlled drying environment"
      ]
    },
    {
      number: "05",
      title: "Cleaning & Sanitizing",
      description: "All affected surfaces are cleaned, sanitized, and deodorized to ensure your property is safe and healthy.",
      services: [
        "Antimicrobial treatments to prevent mold",
        "Odor removal with air scrubbers and fogging",
        "Sanitization of all affected surfaces",
        "Disposal of unsalvageable materials"
      ]
    },
    {
      number: "06",
      title: "Restoration & Repairs",
      description: "The final step involves restoring your property to its pre-water damage condition.",
      services: [
        "Minor repairs such as drywall replacement",
        "Floor and carpet restoration",
        "Cabinet and furniture repair",
        "Full reconstruction services if needed"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Restoration Process</h2>
          <p className="text-gray-600 text-lg">
            We follow a proven 6-step process to ensure your property is restored quickly and properly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Professional Equipment & Expertise</h3>
            <p className="text-gray-700 mb-4">
              Our technicians use advanced water extraction equipment and professional-grade drying tools to restore your property quickly and efficiently. With proper training and certification, we ensure the best results for your water damage restoration needs.
            </p>

            <div className="flex justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">Schedule a Service</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Common Causes of Water Damage</h3>
            <p className="text-gray-700 mb-4">
              Water damage can be caused by various factors including plumbing leaks, severe weather, broken water heaters, and more. Understanding the source of water damage is crucial for proper restoration and preventing future issues.
            </p>

            <div className="flex justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">Get Free Assessment</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <div className="flex-shrink-0 bg-blue-100 text-blue-700 text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </div>
              </div>
              <div className="mt-4 md:pl-16">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">What We Do:</h4>
                  <ul className="space-y-2">
                    {step.services.map((service, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-8">
            Our proven process has helped thousands of home and business owners recover from water damage quickly and effectively.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="#contact">Get Help Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
