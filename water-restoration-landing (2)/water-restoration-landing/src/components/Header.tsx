"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
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
                <h1 className="font-bold text-xl text-blue-700">Carolina</h1>
                <h2 className="font-bold text-md text-blue-700">Restoration Solutions</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 items-center">
          <Link href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
            Services
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
            About Us
          </Link>
          <Link href="#process" className="text-gray-700 hover:text-blue-600 font-medium">
            Our Process
          </Link>
          <Link href="/water-loss-guide" className="text-gray-700 hover:text-blue-600 font-medium">
            Water Loss Guide
          </Link>
          <Link href="/insurance-guide" className="text-gray-700 hover:text-blue-600 font-medium">
            Insurance Guide
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700">
            24/7 Emergency
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white mt-2 py-4 px-4 shadow-lg rounded-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#process"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Process
            </Link>
            <Link
              href="/water-loss-guide"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Water Loss Guide
            </Link>
            <Link
              href="/insurance-guide"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insurance Guide
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
