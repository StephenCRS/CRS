import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// No hydration-unsafe logic is used, as the content is all static HTML/JSX and no client-generated values are present.
// To be extra safe, add suppressHydrationWarning on the <main> wrapper to silence unexpected hydration mismatches in subcomponents (if any)

export default function WaterLossGuidePage() {
  return (
    <main suppressHydrationWarning>
      <Header />

      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Water Loss Emergency Guide</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Quick action steps to take when water damage occurs in your home or business
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Immediate Actions During Water Damage</h2>
              <p className="text-gray-700 mb-4">
                When water damage strikes, the first 24-48 hours are critical. Taking the right steps immediately can significantly reduce damage and recovery costs. This guide will help you know exactly what to do when facing a water emergency.
              </p>
              <p className="text-gray-700 mb-6">
                Remember, your safety is the priority. If the water damage is extensive or involves contaminated water, contact professionals immediately at <span className="font-bold text-blue-700">864-423-5170</span> for emergency response.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">Call Our Emergency Line</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://www.bayatreeinc.com/wp-content/uploads/2022/01/Water-Damage-Restoration-Service-in-Charlotte.jpg"
                alt="Water damage in home"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Step-by-Step Emergency Response</h2>

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Ensure Safety First
              </h3>
              <ul className="space-y-4 pl-11">
                <li className="list-disc">
                  <span className="font-bold">Turn off electricity</span> to affected areas if safe to do so. If you can't reach the breaker box safely, call an electrician.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Avoid rooms with sagging ceilings</span> as they may collapse.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Wear protective gear</span> (rubber boots, gloves) if you must enter standing water.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Evacuate if necessary</span>, especially if dealing with sewage backup or extensive flooding.
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                Stop the Water Source
              </h3>
              <ul className="space-y-4 pl-11">
                <li className="list-disc">
                  <span className="font-bold">Locate and shut off the main water valve</span> if the water is coming from a plumbing issue.
                </li>
                <li className="list-disc">
                  <span className="font-bold">For burst pipes</span>, turn off the water supply to that specific fixture if possible.
                </li>
                <li className="list-disc">
                  <span className="font-bold">For appliance leaks</span>, unplug the appliance and turn off its water supply line.
                </li>
                <li className="list-disc">
                  <span className="font-bold">For roof leaks</span>, use buckets to collect dripping water and cover furniture with plastic.
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                Document the Damage
              </h3>
              <ul className="space-y-4 pl-11">
                <li className="list-disc">
                  <span className="font-bold">Take photos and videos</span> of all affected areas before removing any water or making repairs.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Make a list of damaged items</span> with approximate values.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Don't throw anything away</span> until an insurance adjuster has documented it.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Keep all receipts</span> for emergency repairs and temporary accommodations.
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                Contact Professional Help
              </h3>
              <ul className="space-y-4 pl-11">
                <li className="list-disc">
                  <span className="font-bold">Call Carolina Restoration Solutions at 864-423-5170</span> for 24/7 emergency water damage restoration.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Notify your insurance company</span> to start the claims process.
                </li>
                <li className="list-disc">
                  <span className="font-bold">If applicable, contact utility companies</span> about damaged gas or electric lines.
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">5</span>
                Begin Mitigation (If Safe)
              </h3>
              <ul className="space-y-4 pl-11">
                <li className="list-disc">
                  <span className="font-bold">Remove excess water</span> with mops, towels, or a wet/dry vacuum if safe to do so.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Move furniture</span> away from wet areas or place aluminum foil under furniture legs.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Remove area rugs</span> and hangings in affected areas.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Open windows and doors</span> to start air circulation if weather permits.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Don't use household fans</span> in potentially contaminated water to avoid spreading bacteria.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-red-700">What NOT To Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Don't enter rooms with standing water if electricity is still on</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Don't use household vacuum cleaners to remove water</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Don't leave wet fabrics in place; hang furs and leather goods to dry separately</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Don't turn on ceiling fixtures if ceiling is wet or enter rooms where ceilings are sagging</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Don't delay calling for professional help – secondary damage begins within hours</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-blue-700">Categories of Water Damage</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-bold text-green-800">Category 1: Clean Water</h4>
                  <p>Water from a clean source (broken water supply line, tub overflow). Less hazardous but can degrade to Category 2 or 3 if left untreated.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded">
                  <h4 className="font-bold text-yellow-800">Category 2: Gray Water</h4>
                  <p>Contains significant contamination (dishwasher overflow, washing machine overflow, toilet overflow with urine). Can cause discomfort or illness.</p>
                </div>
                <div className="bg-red-50 p-4 rounded">
                  <h4 className="font-bold text-red-800">Category 3: Black Water</h4>
                  <p>Grossly unsanitary (sewage backup, flooding from rivers, groundwater). Contains pathogens and requires professional remediation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-700 text-white p-8 rounded-lg mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">60</div>
                <div className="text-xl">Minute Response</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-xl">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-xl">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Need Emergency Water Damage Restoration?</h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              Don't wait! Water damage worsens with every passing minute. Our trained technicians are available 24/7 to respond to your emergency and begin the restoration process.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">
              <Link href="#contact">Call 864-423-5170 Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
