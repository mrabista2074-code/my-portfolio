// src/components/SlideNavigation.jsx
// Bottom-center dot indicators + left/right arrow buttons

function SlideNavigation({ total, current, onNavigate, darkSlides = [] }) {
  const isDark = darkSlides.includes(current);

  return (
    <div className="slide-nav">
      {/* Previous Arrow */}
      <button
        className={`slide-nav-arrow ${isDark ? "light" : ""}`}
        onClick={() => onNavigate(Math.max(0, current - 1))}
        aria-label="Previous slide"
        disabled={current === 0}
        style={{ opacity: current === 0 ? 0.3 : 1 }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            className={`slide-nav-dot ${isDark ? "light" : ""} ${current === idx ? "active" : ""}`}
            onClick={() => onNavigate(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Next Arrow */}
      <button
        className={`slide-nav-arrow ${isDark ? "light" : ""}`}
        onClick={() => onNavigate(Math.min(total - 1, current + 1))}
        aria-label="Next slide"
        disabled={current === total - 1}
        style={{ opacity: current === total - 1 ? 0.3 : 1 }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

export default SlideNavigation;
