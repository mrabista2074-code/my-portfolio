import { useRef, useState, useEffect } from 'react';

function SlideNavigation({ total, current, onNavigate, darkSlides = [] }) {
  const isDark = darkSlides.includes(current);
  const scrollRef = useRef(null);
  const dragRef = useRef({ isDown: false, hasDragged: false, startX: 0, startSlide: 0 });
  const [isDraggingUI, setIsDraggingUI] = useState(false);

  // Auto-scroll to keep active dot centered
  useEffect(() => {
    if (scrollRef.current) {
      const activeDot = scrollRef.current.children[current];
      if (activeDot) {
        const containerWidth = scrollRef.current.offsetWidth;
        const dotOffsetLeft = activeDot.offsetLeft;
        const dotWidth = activeDot.offsetWidth;
        scrollRef.current.scrollTo({
          left: dotOffsetLeft - (containerWidth / 2) + (dotWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [current]);

  const handleDragStart = (clientX) => {
    dragRef.current = { isDown: true, hasDragged: false, startX: clientX, startSlide: current };
  };

  const handleDragMove = (clientX) => {
    if (!dragRef.current.isDown) return;
    const deltaX = clientX - dragRef.current.startX;
    
    if (!dragRef.current.hasDragged && Math.abs(deltaX) > 5) {
      dragRef.current.hasDragged = true;
      setIsDraggingUI(true);
    }

    if (dragRef.current.hasDragged) {
      // Every 18px dragged changes 1 slide
      const slidesMoved = Math.round(-deltaX / 18);
      const targetSlide = Math.max(0, Math.min(total - 1, dragRef.current.startSlide + slidesMoved));
      if (targetSlide !== current) {
        onNavigate(targetSlide);
      }
    }
  };

  const handleDragEnd = () => {
    dragRef.current.isDown = false;
    // Delay resetting hasDragged so onClick can read it correctly to prevent accidental clicks
    setTimeout(() => {
      dragRef.current.hasDragged = false;
      setIsDraggingUI(false);
    }, 50);
  };

  return (
    <div className="slide-nav">
      {/* Previous Arrow */}
      <button
        className={`slide-nav-arrow ${isDark ? "light" : ""} flex-shrink-0`}
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
      <div 
        ref={scrollRef}
        className={`flex items-center gap-3 sm:gap-4 overflow-hidden px-2 max-w-[160px] sm:max-w-[200px] cursor-grab ${isDraggingUI ? 'cursor-grabbing' : ''}`}
        style={{ touchAction: 'none' }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
        onTouchCancel={handleDragEnd}
      >
        {Array.from({ length: total }).map((_, idx) => {
          const distance = Math.abs(current - idx);
          
          // Fade effect based on distance
          let opacity = 0.15;
          if (distance === 0) opacity = 1;
          else if (distance === 1) opacity = 0.6;
          else if (distance === 2) opacity = 0.4;
          else if (distance === 3) opacity = 0.25;

          return (
            <button
              key={idx}
              className={`slide-nav-dot ${isDark ? "light" : ""} ${current === idx ? "active" : ""}`}
              style={{ opacity }}
              onClick={() => {
                if (!dragRef.current.hasDragged) onNavigate(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>

      {/* Next Arrow */}
      <button
        className={`slide-nav-arrow ${isDark ? "light" : ""} flex-shrink-0`}
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
