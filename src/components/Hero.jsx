// src/components/Hero.jsx
// An elegant, editorial hero layout featuring subtle fade-in-up text entry and a clip reveal image container.

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 lg:py-24 px-6 max-w-6xl mx-auto transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Typography & Text Detail */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          {/* Subtle tag line with entry delay */}
          <span className="text-xs tracking-[0.2em] uppercase text-accent-color font-medium mb-6 block animate-fade-in-up">
            Kathmandu, Nepal · Interior Design
          </span>

          {/* Big editorial title with line breaks */}
          <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl text-text-primary leading-[1.1] mb-8 animate-fade-in-up animation-delay-200">
            Spaces that <br />
            <span className="italic font-normal text-accent-color">speak softly.</span>
          </h1>

          {/* Short paragraph detail */}
          <p className="text-text-secondary font-light text-base md:text-lg max-w-lg leading-relaxed mb-10 animate-fade-in-up animation-delay-400">
            I design interiors rooted in quietude — where natural light, honest materials, and bespoke details weave together to create a calm sanctuary for modern living.
          </p>

          {/* Interactive Button */}
          <div className="animate-fade-in-up animation-delay-600">
            <a
              href="#projects"
              className="inline-flex items-center gap-4 border border-text-primary/30 text-text-primary text-xs tracking-[0.2em] uppercase px-8 py-4 bg-transparent hover:bg-text-primary hover:text-bg-primary hover:border-transparent transition-all duration-500 rounded-none group"
            >
              Explore Portfolio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="transform group-hover:translate-x-2 transition-transform duration-300"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Art Showcase */}
        <div className="lg:col-span-5 relative w-full aspect-[3/4] max-w-sm lg:max-w-none mx-auto overflow-hidden animate-clip-reveal">
          <div className="w-full h-full bg-bg-secondary overflow-hidden group">
            <img
              src="/images/hero-ambient.png"
              alt="Earthy wabi-sabi room corner"
              className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
              loading="eager"
            />
            {/* Absolute overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/20 to-transparent pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-6 hidden lg:flex items-center gap-3 animate-fade-in animation-delay-600">
        <div className="w-[1px] h-12 bg-border-color relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-color animate-[bounce_2s_infinite]" />
        </div>
        <span className="text-[10px] tracking-[0.3em] uppercase text-text-secondary select-none">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}

export default Hero;