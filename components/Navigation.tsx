'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-concrete-900/95 backdrop-blur-sm border-b border-concrete-700/50">
  <div className="container-custom">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <Link href="/" className="group flex items-center gap-3">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-concrete-600 to-concrete-700 transform rotate-45 transition-transform duration-300 group-hover:rotate-[50deg]">
            <div className="absolute inset-2 bg-concrete-900 transform -rotate-45"></div>
          </div>
          <div className="absolute inset-0 bg-accent-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="flex flex-col">
          <span className="font-display text-2xl font-bold text-concrete-50 tracking-tight leading-none">
            CONCRETE
          </span>
          <span className="font-display text-sm font-medium text-accent-orange tracking-[0.2em] leading-none">
            REALTY
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link 
          href="/" 
          className="px-6 py-2.5 font-display text-sm font-medium text-concrete-200 hover:text-concrete-50 hover:bg-concrete-800/50 rounded-sm transition-all duration-200 relative group"
        >
          HOME
          <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-accent-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        
        <Link 
          href="/about" 
          className="px-6 py-2.5 font-display text-sm font-medium text-concrete-200 hover:text-concrete-50 hover:bg-concrete-800/50 rounded-sm transition-all duration-200 relative group"
        >
          ABOUT
          <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-accent-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        
        <Link 
          href="/contact" 
          className="px-6 py-2.5 font-display text-sm font-medium text-concrete-200 hover:text-concrete-50 hover:bg-concrete-800/50 rounded-sm transition-all duration-200 relative group"
        >
          CONTACT
          <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-accent-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>

        <div className="ml-4 pl-4 border-l border-concrete-700">
          <Link 
            href="/contact" 
            className="btn-primary group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              GET STARTED
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-rust transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 text-concrete-200 hover:text-concrete-50 hover:bg-concrete-800/50 rounded-sm transition-colors duration-200"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="md:hidden border-t border-concrete-700/50 bg-concrete-900/98 backdrop-blur-md">
      <div className="container-custom py-6 space-y-1">
        <Link 
          href="/" 
          className="block px-4 py-3 font-display text-sm font-medium text-concrete-200 hover:text-concrete-50 hover:bg-concrete-800/50 rounded-sm transition-all duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          HOME
        </Link>
        
        <Link 
          href="/about" 
          className="block px-4 py-3 font-display text-sm font-medium text-concrete-200 hover:text-concrete-50 hover:bg-concrete-800/50 rounded-sm transition-all duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          ABOUT
        </Link>
        
        <Link 
          href="/contact" 
          className="block px-4 py-3 font-display text-sm font-medium text-concrete-200 hover:text-concrete-50 hover:bg-concrete-800/50 rounded-sm transition-all duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          CONTACT
        </Link>

        <div className="pt-4">
          <Link 
            href="/contact" 
            className="btn-primary w-full justify-center group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center gap-2">
              GET STARTED
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )}
</nav>
  );
}