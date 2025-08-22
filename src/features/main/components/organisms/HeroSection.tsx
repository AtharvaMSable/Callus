import BasicButton from '../../../../shared/components/atoms/buttons/BasicButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Smart Casual Blazer"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Text Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium tracking-wide">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
            Sophisticated • Professional • Refined
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Engineered for{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>

          <p className="text-lg text-white/80 max-w-2xl mx-auto lg:mx-0">
            Elevate your professional presence with our curated collection of premium menswear. 
            Designed for the modern gentleman who values impeccable style and uncompromising quality.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <BasicButton
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg"
            >
              Explore Collection
            </BasicButton>
            <BasicButton
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Personal Styling
            </BasicButton>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-8 pt-12">
            {[
              { title: 'Premium', subtitle: 'Materials' },
              { title: 'Tailored', subtitle: 'Fit' },
              { title: 'Timeless', subtitle: 'Design' },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="text-2xl font-semibold text-white">{item.title}</div>
                <div className="w-8 h-0.5 bg-yellow-400 mx-auto"></div>
                <div className="text-xs text-white/70 uppercase tracking-wider">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual Highlight */}
        <div className="flex-1 relative hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Styled Professional"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Tag */}
            <div className="absolute top-6 left-6 bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
              ✨ New Arrival
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
