import { useMemo } from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              {/* Logo */}
              <div className="w-[240px] h-[70px] relative flex items-center">
                <div className="flex items-center">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="25" width="48" height="30" rx="2" fill="#0066cc" />
                    <path d="M30 5L54 25H6L30 5Z" fill="#0066cc" />
                    <path d="M16 55V35H28V55" fill="#ff8800" />
                    <path d="M32 40H44V48H32V40Z" fill="#ff8800" />
                    <path d="M30 5L6 25H30L30 5Z" fill="#0088ff" />
                  </svg>
                  <div className="ml-2">
                    <h3 className="font-bold text-xl text-white">Carolina</h3>
                    <h4 className="font-bold text-md text-white">Restoration Solutions</h4>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional water restoration services for residential and commercial properties in Greenville, SC. Available 24/7 for emergency response.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/CarolinaRestorationSolutions" target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/stephen-hoffman-16294930/" target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-300 hover:text-white">Water Damage Restoration</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white">Flood Cleanup</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white">Mold Remediation</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white">Sewage Cleanup</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white">Water Extraction</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white">Dehumidification</Link></li>
              <li><Link href="/specialized-cleaning" className="text-gray-300 hover:text-white">Specialized Cleaning</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="#about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="#process" className="text-gray-300 hover:text-white">Our Process</Link></li>
              <li><Link href="/water-loss-guide" className="text-gray-300 hover:text-white">Water Loss Guide</Link></li>
              <li><Link href="/insurance-guide" className="text-gray-300 hover:text-white">Insurance Guide</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  Greenville, SC<br />
                  Serving all of Greenville County
                </span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">864-423-5170</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">carolinarestorationsolution@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">24/7 Emergency Service</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-blue-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Carolina Restoration Solutions LLC. All Rights Reserved.
          </div>
          <div className="text-gray-400 text-sm">
            <Link href="#" className="hover:text-white mr-4">Privacy Policy</Link>
            <Link href="#" className="hover:text-white mr-4">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
