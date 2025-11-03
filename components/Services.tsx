export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
  {/* Brutalist geometric background elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37] transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37] transform translate-x-1/2 translate-y-1/2 rotate-12"></div>
  </div>

  <div className="container-custom relative z-10">
    {/* Section Header */}
    <div className="max-w-4xl mb-20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-1 bg-[#d4af37]"></div>
        <span className="text-[#d4af37] font-mono text-sm tracking-wider uppercase">Our Services</span>
      </div>
      <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-none">
        REDEFINING
        <br />
        <span className="text-[#d4af37]">REAL ESTATE</span>
      </h2>
      <p className="text-xl text-gray-400 font-light max-w-2xl">
        We don't just sell properties. We curate architectural experiences and connect visionaries with spaces that inspire.
      </p>
    </div>

    {/* Services Grid */}
    <div className="space-y-8">
      {/* Service 1 */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative bg-[#1a1a1a] border-l-4 border-[#d4af37] p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-start hover:border-l-8 transition-all duration-300">
          {/* Icon/Number */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-[#d4af37] flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <span className="font-display text-3xl font-black text-[#0a0a0a] relative z-10">01</span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="font-display text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Curated Portfolio
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-3xl">
              Access an exclusive collection of contemporary and brutalist architecture properties. Each listing is hand-selected for its architectural significance, structural integrity, and design excellence. We showcase spaces that challenge conventions and celebrate raw beauty.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#0a0a0a] border border-[#333] text-gray-300 text-sm font-mono">BRUTALIST</span>
              <span className="px-4 py-2 bg-[#0a0a0a] border border-[#333] text-gray-300 text-sm font-mono">CONTEMPORARY</span>
              <span className="px-4 py-2 bg-[#0a0a0a] border border-[#333] text-gray-300 text-sm font-mono">ARCHITECTURAL</span>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-80 h-64 overflow-hidden relative group-hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="https://picsum.photos/seed/concrete-realty-service-1/800/600" 
              alt="Modern brutalist architecture property with geometric concrete structures"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Service 2 */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative bg-[#1a1a1a] border-l-4 border-[#d4af37] p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-start hover:border-l-8 transition-all duration-300">
          {/* Icon/Number */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-[#d4af37] flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <span className="font-display text-3xl font-black text-[#0a0a0a] relative z-10">02</span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="font-display text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Transparent Pricing
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-3xl">
              No hidden fees. No surprises. No nonsense. We believe in radical transparency and honest communication. Every cost is laid bare from day one. Our straightforward approach means you always know exactly what you're paying for and why. Real estate without the runaround.
            </p>
            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#d4af37]"></div>
                <span className="font-mono text-sm">NO HIDDEN FEES</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#d4af37]"></div>
                <span className="font-mono text-sm">CLEAR CONTRACTS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#d4af37]"></div>
                <span className="font-mono text-sm">HONEST ADVICE</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-80 h-64 overflow-hidden relative group-hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="https://picsum.photos/seed/concrete-realty-service-2/800/600" 
              alt="Professional real estate consultation with transparent pricing documents"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Service 3 */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative bg-[#1a1a1a] border-l-4 border-[#d4af37] p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-start hover:border-l-8 transition-all duration-300">
          {/* Icon/Number */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-[#d4af37] flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <span className="font-display text-3xl font-black text-[#0a0a0a] relative z-10">03</span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="font-display text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Expert Agents
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-3xl">
              Our agents aren't just salespeople—they're architecture enthusiasts, design connoisseurs, and market experts. Each specialist brings deep knowledge of modern and brutalist properties, understanding the nuances that make these spaces extraordinary. They speak your language and share your passion.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-[#0a0a0a] p-4 border-l-2 border-[#d4af37]">
                <div className="text-3xl font-display font-black text-[#d4af37] mb-1">15+</div>
                <div className="text-sm text-gray-400 font-mono">YEARS EXPERIENCE</div>
              </div>
              <div className="bg-[#0a0a0a] p-4 border-l-2 border-[#d4af37]">
                <div className="text-3xl font-display font-black text-[#d4af37] mb-1">500+</div>
                <div className="text-sm text-gray-400 font-mono">PROPERTIES SOLD</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-80 h-64 overflow-hidden relative group-hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="https://picsum.photos/seed/concrete-realty-service-3/800/600" 
              alt="Professional real estate agent specializing in modern architectural properties"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Service 4 */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative bg-[#1a1a1a] border-l-4 border-[#d4af37] p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-start hover:border-l-8 transition-all duration-300">
          {/* Icon/Number */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-[#d4af37] flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <span className="font-display text-3xl font-black text-[#0a0a0a] relative z-10">04</span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="font-display text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Virtual Tours & Specs
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-3xl">
              Experience properties like never before with immersive 3D virtual tours and comprehensive technical specifications. Every material, measurement, and architectural detail documented with precision. Explore spaces from anywhere in the world, understanding the full scope before you visit.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-[#333]">
                <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 text-sm font-mono">3D TOURS</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-[#333]">
                <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-gray-300 text-sm font-mono">DETAILED SPECS</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-[#333]">
                <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 text-sm font-mono">HD PHOTOGRAPHY</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-80 h-64 overflow-hidden relative group-hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="https://picsum.photos/seed/concrete-realty-service-4/800/600" 
              alt="Virtual reality tour of modern architectural property with detailed specifications"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-20 text-center">
      <div className="inline-block">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-16 bg-[#d4af37]"></div>
          <span className="text-gray-400 font-mono text-sm">READY TO EXPLORE?</span>
          <div className="h-px w-16 bg-[#d4af37]"></div>
        </div>
        <button className="btn-primary group relative overflow-hidden">
          <span className="relative z-10 flex items-center gap-3">
            VIEW ALL PROPERTIES
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
  );
}