// src/components/PhotoSlide.jsx
// Full-bleed image slide with minimal corner labels

import SlideHeader from "./SlideHeader";

function PhotoSlide({ image, isActive }) {
  return (
    <div className="slide bg-bg-primary">
      {/* Background/Images container */}
      <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 lg:p-20">
        <img
          src={image.src}
          alt={image.label}
          className={`w-full h-full object-contain transition-transform duration-[2s] ${isActive ? "scale-100" : "scale-105"}`}
          loading="lazy"
        />
      </div>

      {/* Removed subtle gradients */}

      {/* Header overlay */}
      <SlideHeader
        left={image.perspective}
        center=""
        right={image.label}
        className="absolute inset-x-0 top-0 pointer-events-none z-50"
      />
    </div>
  );
}

export default PhotoSlide;
