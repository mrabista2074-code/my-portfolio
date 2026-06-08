// src/components/CoverSlide.jsx
// Slide 1: Full-screen cover with centered PORTFOLIO title

import SlideHeader from "./SlideHeader";

function CoverSlide({ isActive, hasBeenActive }) {
  return (
    <div className="slide bg-bg-primary">
      <SlideHeader
        left="Aashish Bista"
        center="Selected Works"
        right="2026"
      />

      <div className="slide-content items-center justify-center">
        <div className={`text-center ${isActive ? "" : ""}`}>
          {/* Main Title */}
          <h1
            className={`font-serif font-normal text-6xl sm:text-7xl md:text-8xl lg:text-[120px] text-text-primary tracking-[0.08em] leading-none mb-6
              ${hasBeenActive ? "animate-fade-in-up" : "opacity-0"}`}
          >
            PORTFOLIO
          </h1>

          {/* Subtitle */}
          <p
            className={`text-sm sm:text-base tracking-[0.35em] uppercase text-text-secondary font-light
              ${hasBeenActive ? "animate-fade-in-up animation-delay-300" : "opacity-0"}`}
          >
            INTERIOR &nbsp; DESIGNER
          </p>
        </div>
      </div>

      {/* Subtle bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-color to-transparent" />
    </div>
  );
}

export default CoverSlide;
