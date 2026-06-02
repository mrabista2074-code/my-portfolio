// src/components/About.jsx
import { useState } from "react";

function About() {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      title: "Honest Materials",
      content: "I believe in raw lime plaster, real wood, and natural stone. I prefer materials that are tactile, breathe naturally, and age gracefully with a beautiful patina over time.",
    },
    {
      title: "Sensing the Sun",
      content: "A well-designed room dances with sunlight. I map the solar pathway of each project to align spaces around the biological warmth of natural light throughout the seasons.",
    },
    {
      title: "Craft & Lineage",
      content: "I weave clean, contemporary minimal forms with South Asian artisanal heritage — partnering with local weavers, potters, and carpenters to keep ancient techniques alive.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-bg-secondary transition-colors duration-300">
      <div className="px-6 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-color/60 pb-8 mb-16">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-accent-color font-medium mb-3 block">
              Behind the Spaces
            </span>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-text-primary">
              My Story & Ethos
            </h2>
          </div>
        </div>

        {/* Asymmetrical Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Profile Frame & Stats (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative group">
              {/* Offset decorative border for a premium framing feel */}
              <div className="absolute inset-0 border border-accent-color/40 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              
              <div className="aspect-[3/4] overflow-hidden bg-bg-primary relative border border-border-color/40">
                <img
                  src="/images/profile.jpg"
                  alt="Aashish Bista portrait"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Premium Stats Strip */}
            <div className="grid grid-cols-3 gap-4 border-t border-border-color/60 pt-8 mt-4">
              <div className="text-center">
                <div className="font-serif text-3xl font-light text-text-primary">06+</div>
                <div className="text-[10px] tracking-widest text-text-secondary uppercase mt-1">Years</div>
              </div>
              <div className="text-center border-x border-border-color/50">
                <div className="font-serif text-3xl font-light text-text-primary">40+</div>
                <div className="text-[10px] tracking-widest text-text-secondary uppercase mt-1">Spaces</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl font-light text-text-primary">12+</div>
                <div className="text-[10px] tracking-widest text-text-secondary uppercase mt-1">Features</div>
              </div>
            </div>
          </div>

          {/* Column 2: Biography & Interactive Philosophies (lg:col-span-7) */}
          <div className="lg:col-span-7 pt-4 lg:pt-0">
            <h3 className="font-serif text-3xl font-light text-text-primary mb-6">
              Designing with quiet intention
            </h3>
            
            <p className="text-text-secondary font-light leading-relaxed mb-6">
              I am Aashish, a Kathmandu-based interior designer dedicated to creating environments that tell quiet, personal stories. My approach is centered on the ideas of minimalism, warmth, and structural honesty.
            </p>
            
            <p className="text-text-secondary font-light leading-relaxed mb-10">
              I collaborate closely with a small circle of local builders and craftspeople. By balancing contemporary geometries with hand-textured organic details, I create spaces that feel unhurried, grounded, and deeply human.
            </p>

            {/* Custom Interactive Accordion */}
            <div className="border-t border-border-color/60">
              {philosophies.map((phil, idx) => (
                <div key={idx} className="border-b border-border-color/60">
                  <button
                    onClick={() => setActivePhilosophy(activePhilosophy === idx ? null : idx)}
                    className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="font-serif text-xl text-text-primary group-hover:text-accent-color transition-colors duration-300">
                      {phil.title}
                    </span>
                    <span className="text-accent-color text-lg">
                      {activePhilosophy === idx ? "−" : "+"}
                    </span>
                  </button>
                  
                  {/* Smooth folding container */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activePhilosophy === idx ? "max-h-[140px] opacity-100 pb-5" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-text-secondary font-light text-sm leading-relaxed max-w-xl">
                      {phil.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;