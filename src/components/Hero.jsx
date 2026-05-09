// src/components/Hero.jsx
// The big opening section at the top of the page

function Hero() {
  return (
    // py-32 = lots of vertical padding (whitespace is your friend!)
    <section className="py-32 px-6 max-w-6xl mx-auto">
      
      {/* Small label above the name */}
      <p className="text-xs tracking-widest uppercase text-muted mb-5">
        Interior Designer · Kathmandu
      </p>

      {/* Your big headline */}
      <h1 className="font-serif font-light text-6xl md:text-8xl leading-tight text-gray-900 mb-8">
        Spaces that<br />speak softly.
      </h1>

      {/* Short intro paragraph */}
      <p className="text-muted font-light text-lg max-w-md leading-relaxed mb-10">
        I design interiors rooted in calm — where natural light, honest
        materials, and quiet beauty come together.
      </p>

      {/* Button that scrolls down to projects */}
      <a
        href="#projects"
        className="inline-block border border-gray-900 text-xs tracking-widest uppercase px-8 py-3 hover:bg-gray-900 hover:text-cream transition-all duration-300"
      >
        View Projects
      </a>
    </section>
  );
}

export default Hero;