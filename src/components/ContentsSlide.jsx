// src/components/ContentsSlide.jsx
// Slide 3: Table of Contents — numbered project list + giant vertical "CONTENTS" text

import SlideHeader from "./SlideHeader";

function ContentsSlide({ projects, isActive, hasBeenActive, onProjectClick }) {
  return (
    <div className="slide bg-bg-primary">
      <SlideHeader
        left="Portfolio"
        center=""
        right="2026"
      />

      <div className="slide-content">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 px-6 sm:px-10 lg:px-16 py-6 relative">

          {/* LEFT: Numbered project list */}
          <div className={`lg:col-span-7 relative flex flex-col justify-center gap-2 sm:gap-4 lg:gap-6 pl-6 sm:pl-10 ${hasBeenActive ? "animate-slide-left" : "opacity-0"}`}>
            {/* Fading vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-text-primary/40 to-transparent" />
            {projects.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => onProjectClick && onProjectClick(idx)}
                className="flex items-center gap-6 sm:gap-10 group text-left hover:opacity-70 transition-opacity duration-300"
              >
                {/* Large Number */}
                <span className="font-serif text-6xl sm:text-7xl lg:text-8xl text-text-primary leading-none min-w-[70px] sm:min-w-[100px]">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Project Info */}
                <div className="pt-1 sm:pt-2">
                  <h3 className="font-sans text-base sm:text-lg lg:text-xl font-bold tracking-wide text-text-primary">
                    {project.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary font-light mt-0.5 lg:mt-1">
                    {project.title} &nbsp;|&nbsp; {project.year}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Giant vertical "CONTENTS" text */}
          <div className={`hidden lg:flex lg:col-span-5 items-end justify-end pb-8 ${hasBeenActive ? "animate-slide-right animation-delay-200" : "opacity-0"}`}>
            <div className="flex items-end gap-4">
              {/* Small vertical "TABLE OF" */}
              <span className="vertical-text text-sm tracking-[0.4em] uppercase text-text-secondary font-light">
                TABLE OF
              </span>

              {/* Giant "CONTENTS" */}
              <span className="vertical-text font-serif text-[10vh] xl:text-[12vh] text-text-primary leading-none select-none">
                CONTENTS
              </span>
            </div>
          </div>

          {/* Mobile: Horizontal CONTENTS label */}
          <div className="lg:hidden mt-12 text-center">
            <span className="text-sm tracking-[0.4em] uppercase text-text-secondary font-light block mb-2">
              TABLE OF
            </span>
            <span className="font-serif text-5xl text-text-primary tracking-[0.15em] select-none">
              CONTENTS
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContentsSlide;
