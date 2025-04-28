import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function InsuranceGuidePage() {
  return (
    <main suppressHydrationWarning>
      <Header />

      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Navigating Insurance Claims</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A comprehensive guide to handling water damage insurance claims successfully
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Understanding Your Insurance Coverage</h2>
              <p className="text-gray-700 mb-4">
                Dealing with insurance companies after water damage can be overwhelming. Our guide helps you navigate the claims process efficiently to ensure you receive fair compensation for your losses.
              </p>
              <p className="text-gray-700 mb-6">
                At Carolina Restoration Solutions, we have extensive experience working with insurance companies and can help advocate for you throughout the claims process. Call <span className="font-bold text-blue-700">864-423-5170</span> for assistance.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">Get Help With Your Claim</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://www.carydentalassociates.com/wp-content/uploads/2023/06/water-damage.jpg"
                alt="Person reviewing insurance documents"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Insurance Claim Process: Step by Step</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</div>
                  <h3 className="text-xl font-bold">Review Your Policy</h3>
                </div>
                <ul className="ml-11 space-y-2">
                  <li className="list-disc">Locate your homeowner's or renter's insurance policy</li>
                  <li className="list-disc">Identify what water damage is covered (sudden & accidental vs. gradual)</li>
                  <li className="list-disc">Check coverage limits, deductibles, and exclusions</li>
                  <li className="list-disc">Note if you have additional flood insurance or endorsements</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</div>
                  <h3 className="text-xl font-bold">Notify Your Insurance Company</h3>
                </div>
                <ul className="ml-11 space-y-2">
                  <li className="list-disc">Contact your insurer as soon as possible (most policies require prompt notification)</li>
                  <li className="list-disc">Get your claim number and adjuster contact information</li>
                  <li className="list-disc">Ask about emergency service coverage and advance payment</li>
                  <li className="list-disc">Understand timeline expectations for the claim process</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</div>
                  <h3 className="text-xl font-bold">Document Everything</h3>
                </div>
                <ul className="ml-11 space-y-2">
                  <li className="list-disc">Take extensive photos/videos of all damage before cleanup</li>
                  <li className="list-disc">Create a detailed inventory of damaged items with values</li>
                  <li className="list-disc">Save all communications with your insurance company</li>
                  <li className="list-disc">Keep receipts for emergency repairs and temporary housing</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</div>
                  <h3 className="text-xl font-bold">Meet with the Insurance Adjuster</h3>
                </div>
                <ul className="ml-11 space-y-2">
                  <li className="list-disc">Prepare your documentation before the adjuster arrives</li>
                  <li className="list-disc">Walk through the damage with the adjuster</li>
                  <li className="list-disc">Point out all affected areas, even those not immediately visible</li>
                  <li className="list-disc">Take notes during the adjuster's inspection</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">5</div>
                  <h3 className="text-xl font-bold">Get Professional Assessment</h3>
                </div>
                <ul className="ml-11 space-y-2">
                  <li className="list-disc">Hire a reputable restoration company like Carolina Restoration Solutions</li>
                  <li className="list-disc">Have them provide a detailed estimate for repairs</li>
                  <li className="list-disc">Request documentation of all hidden damage (behind walls, under floors)</li>
                  <li className="list-disc">Get a professional opinion on risk of secondary damage (mold, structural issues)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">6</div>
                  <h3 className="text-xl font-bold">Review Settlement Offer</h3>
                </div>
                <ul className="ml-11 space-y-2">
                  <li className="list-disc">Compare the insurance settlement offer with your contractor estimates</li>
                  <li className="list-disc">Understand what is included (and excluded) in the offer</li>
                  <li className="list-disc">Check for coverage of code upgrades if applicable</li>
                  <li className="list-disc">Be prepared to negotiate if the offer is insufficient</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Common Insurance Policy Terms</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-blue-700">Covered Peril</h4>
                  <p>A specific risk or cause of loss covered by an insurance policy, such as fire, wind, or burst pipes.</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-blue-700">Deductible</h4>
                  <p>The amount you must pay out-of-pocket before your insurance coverage kicks in. Higher deductibles generally mean lower premiums.</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-blue-700">Actual Cash Value (ACV)</h4>
                  <p>The depreciated value of your property at the time of loss (replacement cost minus depreciation).</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-blue-700">Replacement Cost Value (RCV)</h4>
                  <p>The cost to replace damaged property with new, similar quality items, without deducting for depreciation.</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-blue-700">Loss of Use</h4>
                  <p>Coverage for additional living expenses if your home is uninhabitable during repairs, including hotel costs, food, etc.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Tips for a Successful Claim</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-bold">Act quickly</span> - Most policies have time limits for reporting damage and filing claims.
                    </div>
                  </li>

                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-bold">Be thorough with documentation</span> - The more evidence you have, the stronger your claim.
                    </div>
                  </li>

                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-bold">Use professional restoration services</span> - Insurance companies respect documentation from certified professionals.
                    </div>
                  </li>

                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-bold">Keep detailed records</span> - Document all conversations with date, time, and name of the person you spoke with.
                    </div>
                  </li>

                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-bold">Don't rush to settle</span> - Make sure all damage has been discovered before accepting a settlement.
                    </div>
                  </li>

                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-bold">Appeal if necessary</span> - If your claim is denied or underpaid, you have the right to appeal the decision.
                    </div>
                  </li>

                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-bold">Consider public adjusters</span> - For large or complex claims, a public adjuster can help maximize your settlement.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">How Carolina Restoration Solutions Can Help</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Detailed Documentation</h4>
                <p className="text-gray-700">We provide comprehensive reports and detailed estimates that insurance companies respect and accept.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Insurance Liaison</h4>
                <p className="text-gray-700">We work directly with your insurance company, speaking their language and advocating on your behalf.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Expedited Process</h4>
                <p className="text-gray-700">Our experience with insurance claims allows us to help streamline the process and get your life back to normal faster.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Need Help With Your Insurance Claim?</h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              Our team has extensive experience working with all major insurance companies. Let us help you navigate the claims process and ensure you receive fair compensation for your water damage.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">
              <Link href="#contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
