'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
  {/* Brutalist geometric background pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 transform translate-x-1/2 translate-y-1/2 rotate-12"></div>
    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-slate-700 transform -translate-y-1/2 rotate-45"></div>
  </div>

  {/* Main Footer Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
      
      {/* Brand Column */}
      <div className="lg:col-span-1">
        <div className="mb-6">
          <h3 className="text-3xl font-black tracking-tighter text-white mb-2 font-['Space_Grotesk']">
            CONCRETE<br/>REALTY
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 font-['Inter']">
          Building foundations for your future. Modern real estate solutions with uncompromising integrity and architectural precision.
        </p>
        <div className="flex items-center space-x-4">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 group"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 group"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 font-['Space_Grotesk'] relative inline-block">
          Quick Links
          <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-500 -mb-2"></span>
        </h4>
        <ul className="space-y-3">
          <li>
            <Link href="/" className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm font-['Inter'] flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm font-['Inter'] flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm font-['Inter'] flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Contact
            </Link>
          </li>
          <li>
            <a href="#properties" className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm font-['Inter'] flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Properties
            </a>
          </li>
          <li>
            <a href="#services" className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm font-['Inter'] flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Services
            </a>
          </li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 font-['Space_Grotesk'] relative inline-block">
          Services
          <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-500 -mb-2"></span>
        </h4>
        <ul className="space-y-3">
          <li>
            <a href="#residential" className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm font-['Inter'] flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Residential Sales
            </a>
          </li>
          <li>
            <a href="#commercial" className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm font-['Inter'] flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Commercial Leasing
            </a>
          </li>
          <li>
            <a href="#investment" className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm font-['Inter'] flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Investment Properties
            </a>
          </li>
          <li>
            <a href="#consultation" className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm font-['Inter'] flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Property Consultation
            </a>
          </li>
          <li>
            <a href="#management" className="text-slate-400 hover:text-amber-500 transition-colors duration-200 text-sm font-['Inter'] flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
              Property Management
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 font-['Space_Grotesk'] relative inline-block">
          Get In Touch
          <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-500 -mb-2"></span>
        </h4>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-slate-400 text-sm font-['Inter'] leading-relaxed">
              123 Foundation Street<br/>
              Downtown District<br/>
              City, State 12345
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+15551234567" className="text-slate-400 hover:text-amber-500 transition-colors text-sm font-['Inter']">
              (555) 123-4567
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:info@concreterealty.com" className="text-slate-400 hover:text-amber-500 transition-colors text-sm font-['Inter']">
              info@concreterealty.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Newsletter Section */}
    <div className="mt-16 pt-12 border-t border-slate-700/50">
      <div className="max-w-2xl">
        <h4 className="text-white font-bold text-lg mb-3 font-['Space_Grotesk']">
          Stay Updated
        </h4>
        <p className="text-slate-400 text-sm mb-6 font-['Inter']">
          Subscribe to our newsletter for the latest property listings and market insights.
        </p>
        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors font-['Inter'] text-sm"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 font-['Space_Grotesk'] text-sm whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="relative border-t border-slate-700/50 bg-slate-900/50">
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-slate-500 text-sm font-['Inter']">
          © {new Date().getFullYear()} Concrete Realty. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a href="#privacy" className="text-slate-500 hover:text-amber-500 transition-colors text-sm font-['Inter']">
            Privacy Policy
          </a>
          <a href="#terms" className="text-slate-500 hover:text-amber-500 transition-colors text-sm font-['Inter']">
            Terms of Service
          </a>
          <a href="#cookies" className="text-slate-500 hover:text-amber-500 transition-colors text-sm font-['Inter']">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Brutalist accent element */}
  <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500/10 transform translate-x-16 translate-y-16 rotate-45"></div>
</footer>
  );
}