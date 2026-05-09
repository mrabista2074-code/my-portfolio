// src/components/About.jsx
// Your bio section

function About() {
  return (
    <section id="about" className="py-20 bg-warm">
      <div className="px-6 max-w-6xl mx-auto">
        
        {/* Section label */}
        <p className="text-xs tracking-widest uppercase text-muted pb-4 border-b border-border mb-12">
          About
        </p>

        {/* Two-column layout: photo on left, text on right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start max-w-3xl">
          
          {/* Profile photo */}
          {/* Replace the src with your actual photo: /images/profile.jpg */}
          <div className="md:col-span-1">
            <img
              src="/images/profile.jpg"
              alt="Aashish Bista"
              className="w-full aspect-[3/4] object-cover"
            />
            {/* If you don't have a photo yet, show a placeholder div instead:
            <div className="w-full aspect-[3/4] bg-gray-200 flex items-center justify-center">
              <span className="text-muted text-sm">Photo</span>
            </div>
            */}
          </div>

          {/* Bio text */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-4xl font-light text-gray-900 mb-6">
              Designing with intention
            </h2>
            <p className="text-muted font-light leading-relaxed mb-4">
              I'm Aashish, an interior designer based in Kathmandu with over 6 years
              of experience transforming spaces into places people love to live in.
            </p>
            <p className="text-muted font-light leading-relaxed mb-4">
              My approach blends South Asian warmth with contemporary minimalism —
              natural textures, neutral palettes, and a deep respect for how light
              moves through a room.
            </p>
            <p className="text-muted font-light leading-relaxed">
              Every project begins with listening. I want to understand how you live,
              what brings you calm, and what kind of beauty feels like home to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;