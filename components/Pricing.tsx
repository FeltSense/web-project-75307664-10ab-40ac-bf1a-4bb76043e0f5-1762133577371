export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-24 px-4 relative overflow-hidden">
  {/* Brutalist geometric background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 right-0 w-96 h-96 bg-gray-900 opacity-5 transform rotate-45 translate-x-48 -translate-y-48"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-900 opacity-5 transform -rotate-12 -translate-x-32 translate-y-32"></div>
    <div className="absolute top-1/2 left-1/4 w-64 h-64 border-4 border-gray-300 opacity-20 transform rotate-12"></div>
  </div>

  <div className="max-w-6xl mx-auto relative z-10">
    {/* Header Section */}
    <div className="text-center mb-16">
      <div className="inline-block mb-6">
        <div className="bg-gray-900 text-white px-6 py-2 font-bold tracking-wider text-sm uppercase shadow-brutal">
          Simple. Honest. Transparent.
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-none">
        ONE PRICE.<br />
        <span className="text-gray-600">EVERYTHING INCLUDED.</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        No hidden fees. No monthly subscriptions. No nonsense.<br />
        Just a powerful real estate platform built for modern architecture lovers.
      </p>
    </div>

    {/* Pricing Card */}
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-brutal-lg border-4 border-gray-900 relative overflow-hidden group hover:shadow-brutal-xl transition-all duration-300">
        {/* Accent corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 transform rotate-45 translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
        
        <div className="p-10 relative z-10">
          {/* Badge */}
          <div className="inline-block bg-gray-900 text-white px-4 py-1 text-xs font-bold tracking-widest uppercase mb-6">
            Launch Offer
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-6xl font-black text-gray-900">$29</span>
              <span className="text-2xl text-gray-500 font-bold line-through">$99</span>
            </div>
            <div className="text-gray-600 font-semibold uppercase tracking-wide text-sm">
              One-time payment • Lifetime access
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=75307664-10ab-40ac-bf1a-4bb76043e0f5'}
            className="w-full bg-gray-900 text-white px-8 py-5 font-black text-lg uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 mb-10 border-2 border-gray-900"
          >
            Get Instant Access →
          </button>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 group/item">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Curated Architecture Portfolio</div>
                <div className="text-sm text-gray-600">Exclusive collection of contemporary and brutalist properties handpicked by design experts</div>
              </div>
            </div>

            <div className="flex items-start gap-4 group/item">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Transparent Pricing System</div>
                <div className="text-sm text-gray-600">No-nonsense approach with clear pricing, honest valuations, and zero hidden fees</div>
              </div>
            </div>

            <div className="flex items-start gap-4 group/item">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Specialist Agent Network</div>
                <div className="text-sm text-gray-600">Connect with expert agents who understand modern architecture and design-forward properties</div>
              </div>
            </div>

            <div className="flex items-start gap-4 group/item">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Immersive Virtual Tours</div>
                <div className="text-sm text-gray-600">High-resolution 3D tours with detailed specifications, materials, and architectural features</div>
              </div>
            </div>

            <div className="flex items-start gap-4 group/item">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Comprehensive Market Intelligence</div>
                <div className="text-sm text-gray-600">Deep neighborhood insights, market trends, and data-driven analytics for informed decisions</div>
              </div>
            </div>

            <div className="flex items-start gap-4 group/item">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Direct Agent Communication</div>
                <div className="text-sm text-gray-600">No gatekeepers, no runaround—instant access to your dedicated agent via chat, call, or email</div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-10 pt-8 border-t-2 border-gray-200">
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Instant Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-3 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"></div>
      </div>

      {/* Money back guarantee */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-3 bg-white border-2 border-gray-900 px-6 py-3 shadow-brutal">
          <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="font-bold text-gray-900 text-sm uppercase tracking-wide">30-Day Money-Back Guarantee</span>
        </div>
      </div>
    </div>

    {/* Bottom testimonial/social proof */}
    <div className="mt-20 text-center">
      <div className="inline-block bg-gray-900 text-white px-8 py-6 shadow-brutal-lg max-w-2xl">
        <div className="flex items-center justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-lg font-semibold mb-2">"Finally, a real estate platform that gets it."</p>
        <p className="text-gray-300 text-sm">Join 500+ architecture enthusiasts who've found their dream properties with CONCRETE REALTY</p>
      </div>
    </div>
  </div>
</div>
  );
}