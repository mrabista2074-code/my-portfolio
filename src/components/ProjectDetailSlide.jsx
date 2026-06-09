// src/components/ProjectDetailSlide.jsx
// Project detail slide: dark background, specs on left, large image on right

import SlideHeader from "./SlideHeader";

function ProjectDetailSlide({ project, isActive, hasBeenActive }) {
  return (
    <div className="slide bg-bg-dark">
      <SlideHeader
        left={project.category}
        center=""
        right={project.year}
        dark
      />

      <div className="slide-content">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

          {/* LEFT: Project Details */}
          <div className={`px-4 sm:px-10 lg:px-16 py-4 sm:py-6 lg:py-10 flex flex-col justify-start lg:justify-center overflow-y-auto hide-scrollbar ${hasBeenActive ? "animate-slide-left" : "opacity-0"}`}>
            {/* Project Title */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-text-light tracking-wide uppercase leading-tight mb-1">
              {project.title.toUpperCase()}
            </h2>
            <p className="text-xs sm:text-sm text-text-light/50 font-light mb-4 sm:mb-8">
              {project.subtitle}
            </p>

            {/* Spec Grid */}
            <div className="space-y-3 sm:space-y-5">
              <div>
                <h4 className="font-sans text-xs sm:text-sm font-semibold text-text-light mb-1">Type</h4>
                <p className="text-xs sm:text-sm text-text-light/60 font-light">{project.category}</p>
              </div>

              <div>
                <h4 className="font-sans text-xs sm:text-sm font-semibold text-text-light mb-1">Location</h4>
                <p className="text-xs sm:text-sm text-text-light/60 font-light">{project.location}</p>
              </div>

              {project.software ? (
                <div>
                  <h4 className="font-sans text-xs sm:text-sm font-semibold text-text-light mb-1">Software Used</h4>
                  <p className="text-xs sm:text-sm text-text-light/60 font-light">{project.software}</p>
                </div>
              ) : project.area && (
                <div>
                  <h4 className="font-sans text-xs sm:text-sm font-semibold text-text-light mb-1">Area</h4>
                  <p className="text-xs sm:text-sm text-text-light/60 font-light">{project.area}</p>
                </div>
              )}

              <div>
                <h4 className="font-sans text-xs sm:text-sm font-semibold text-text-light mb-1">Objective</h4>
                <p className="text-xs sm:text-sm text-text-light/60 font-light leading-relaxed">{project.objective}</p>
              </div>

              <div>
                <h4 className="font-sans text-xs sm:text-sm font-semibold text-text-light mb-1">Style</h4>
                <p className="text-xs sm:text-sm text-text-light/60 font-light leading-relaxed">{project.style}</p>
              </div>

              {/* Design Areas */}
              <div>
                <h4 className="font-sans text-xs sm:text-sm font-semibold text-text-light mb-2">Design Area</h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                  {project.designAreas.flat().map((area, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-text-light/60 font-light">{area}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Large Image — hidden on very small screens, shown as a smaller section on md+ */}
          {project.coverImage && (
            <div className={`relative overflow-hidden min-h-[200px] sm:min-h-[300px] lg:min-h-0 ${hasBeenActive ? "animate-scale-in animation-delay-200" : "opacity-0"}`}>
              <img
                src={project.coverImage}
                alt={`${project.title} cover`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              {/* Subtle gradient overlay on left edge for blending */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-dark/40 to-transparent pointer-events-none hidden lg:block" />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProjectDetailSlide;
