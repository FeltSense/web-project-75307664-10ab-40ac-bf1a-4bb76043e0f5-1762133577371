export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px),
                          repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 4px)`
      }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="border-8 border-white bg-black p-12 shadow-[16px_16px_0_0_rgba(255,255,255,0.5)]">
          <h1 className="text-6xl md:text-8xl font-black uppercase text-white mb-6 tracking-tight">
            Concrete<br />Realty
          </h1>
          <p className="text-xl md:text-2xl font-bold uppercase text-white mb-8 tracking-wider">
            Bold Properties. Hard Deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-black border-4 border-black px-12 py-6 text-xl font-black uppercase hover:bg-gray-200 transition-colors shadow-[8px_8px_0_0_#000] min-w-[200px]">
              View Properties
            </button>
            <button className="bg-black text-white border-4 border-white px-12 py-6 text-xl font-black uppercase hover:bg-gray-900 transition-colors shadow-[8px_8px_0_0_#fff] min-w-[200px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white border-8 border-black"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white border-8 border-black"></div>
    </section>
  );
}