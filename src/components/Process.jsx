// src/components/Process.jsx
// Visualizes the design phases in a clean, numbered wabi-sabi layout.

function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Rituals",
      desc: "Every space begins with a conversation. I learn how you live, what rituals shape your morning, and what elements bring you calm. This alignment forms the soul of the project.",
    },
    {
      num: "02",
      title: "Atmosphere & Concept",
      desc: "I translate discussions into raw material boards, textures, and mood boards — establishing the lighting direction, stone tones, and wood details to secure the aesthetic envelope.",
    },
    {
      num: "03",
      title: "Detail & Sourcing",
      desc: "I craft fine technical drawings and custom cabinetry plans, sourcing honest, sustainable materials — like hand-kilned clay tiles, local stone, and seasoned reclaimed wood.",
    },
    {
      num: "04",
      title: "Sensing & Handover",
      desc: "The final layer is site orchestration. I oversee installations, style with custom art and textiles, and align every sightline — delivering a space ready to breathe.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-bg-secondary transition-colors duration-300">
      <div className="px-6 max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-color/60 pb-8 mb-16">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-accent-color font-medium mb-3 block">
              Methodology
            </span>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-text-primary">
              The Design Journey
            </h2>
          </div>
          <p className="text-text-secondary font-light text-sm max-w-xs mt-4 md:mt-0 leading-relaxed">
            My process is a quiet ritual of listening, refining, and building with patience.
          </p>
        </div>

        {/* Asymmetrical Grid of Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={step.num}
              className={`bg-bg-primary border border-border-color/40 p-8 flex flex-col justify-between min-h-[300px] transition-all duration-500 hover:shadow-lg hover:border-accent-color/40 group ${
                idx % 2 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              {/* Step number in large serif styling */}
              <div className="font-serif text-5xl font-light text-accent-color/30 group-hover:text-accent-color transition-colors duration-500">
                {step.num}
              </div>

              {/* Step info */}
              <div className="mt-8">
                <h3 className="font-serif text-xl font-normal text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary font-light text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;
