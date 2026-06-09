// src/App.jsx
// Editorial slide-based portfolio — horizontal presentation layout
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import projects from "./data/projects";
import CoverSlide from "./components/CoverSlide";
import CVSlide from "./components/CVSlide";
import ContentsSlide from "./components/ContentsSlide";
import ProjectDetailSlide from "./components/ProjectDetailSlide";
import PhotoSlide from "./components/PhotoSlide";
import PdfSlide from "./components/PdfSlide";
import ContactSlide from "./components/ContactSlide";
import SlideNavigation from "./components/SlideNavigation";
import "./App.css";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visitedSlides, setVisitedSlides] = useState(new Set([0]));
  const touchRef = useRef({ startX: 0, startY: 0, startTime: 0 });

  useEffect(() => {
    setVisitedSlides(prev => {
      if (prev.has(currentSlide)) return prev;
      const next = new Set(prev);
      next.add(currentSlide);
      return next;
    });
  }, [currentSlide]);

  // Build the slide sequence:
  // Cover → CV → Contents → [Project Detail → Photo(s)]... → Contact
  const slides = useMemo(() => {
    const slideList = [
      { type: "cover", id: "cover" },
      { type: "cv", id: "cv" },
      { type: "contents", id: "contents" },
    ];

    projects.forEach((project) => {
      // Project detail slide
      slideList.push({ type: "project-detail", id: `project-${project.id}`, project });

      // Photo slides for each image
      if (project.images && project.images.length > 0) {
        project.images.forEach((image, imgIdx) => {
          slideList.push({
            type: "photo",
            id: `photo-${project.id}-${imgIdx}`,
            image,
            project,
          });
        });
      }

      // PDF slides if project has PDFs
      const pdfsList = project.pdfs || (project.pdf ? [{ url: project.pdf }] : []);
      pdfsList.forEach((pdfObj, pdfIdx) => {
        slideList.push({
          type: "pdf",
          id: `pdf-${project.id}-${pdfIdx}`,
          pdfUrl: pdfObj.url,
          pdfConfig: pdfObj,
          project,
        });
      });
    });

    // Closing contact slide
    slideList.push({ type: "contact", id: "contact" });

    return slideList;
  }, []);

  // Determine which slides have dark backgrounds (for nav styling)
  const darkSlideIndices = useMemo(() => {
    return slides
      .map((slide, idx) => (slide.type === "project-detail" || slide.type === "photo") ? idx : null)
      .filter((idx) => idx !== null);
  }, [slides]);

  // Calculate the index where each project's detail slide starts
  const projectSlideIndices = useMemo(() => {
    return slides
      .map((slide, idx) => slide.type === "project-detail" ? idx : null)
      .filter((idx) => idx !== null);
  }, [slides]);

  const totalSlides = slides.length;

  // Navigate to a specific slide or direction
  const navigateTo = useCallback((action, force = true) => {
    setCurrentSlide((prev) => {
      let target = action;
      if (action === "next") target = prev + 1;
      if (action === "prev") target = prev - 1;

      const clamped = Math.max(0, Math.min(totalSlides - 1, target));
      if (clamped === prev) return prev;

      // Only respect the transition lock if not forced (e.g. for mouse wheel)
      if (!force && isTransitioning) return prev;

      // Set the transition lock
      setIsTransitioning(true);
      if (window.transitionTimeout) clearTimeout(window.transitionTimeout);
      window.transitionTimeout = setTimeout(() => setIsTransitioning(false), 850);

      return clamped;
    });
  }, [isTransitioning, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateTo("next", true); // force navigation to ignore transition lock
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigateTo("prev", true); // force navigation to ignore transition lock
      }
      // Let the browser handle Up/Down/PageUp/PageDown natively for smooth hardware-accelerated scrolling
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigateTo]);

  // Mouse wheel and Trackpad navigation
  useEffect(() => {
    let wheelTimeout = null;
    let accumulatedDeltaX = 0;
    let accumulatedDeltaY = 0;
    let lastWheelNavTime = 0;

    const handleWheel = (e) => {
      const isScrollable = e.target.closest('.custom-scrollbar') || e.target.closest('.hide-scrollbar');
      
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);
      
      const isVertical = absY > absX;

      // Allow native vertical scrolling inside scrollable containers (PDF, CV, etc.)
      if (isScrollable && isVertical) {
        return;
      }
      
      // Prevent browser back/forward gestures on horizontal swipes
      e.preventDefault();

      // If we just navigated via wheel, wait for transition to finish before changing slide again
      if (Date.now() - lastWheelNavTime < 850) {
        // Reset accumulators so old swipes don't trigger after the lock expires
        accumulatedDeltaX = 0;
        accumulatedDeltaY = 0;
        return;
      }

      accumulatedDeltaX += e.deltaX;
      accumulatedDeltaY += e.deltaY;

      const totalAbsX = Math.abs(accumulatedDeltaX);
      const totalAbsY = Math.abs(accumulatedDeltaY);

      // Act instantly as soon as threshold is reached, instead of waiting
      if (totalAbsX > 20 || totalAbsY > 20) {
        if (totalAbsX > totalAbsY) {
          if (accumulatedDeltaX > 0) navigateTo("next", false);
          else navigateTo("prev", false);
        } else {
          if (accumulatedDeltaY > 0) navigateTo("next", false);
          else navigateTo("prev", false);
        }
        accumulatedDeltaX = 0;
        accumulatedDeltaY = 0;
        lastWheelNavTime = Date.now();
      }

      if (wheelTimeout) clearTimeout(wheelTimeout);
      // Clear accumulated deltas if the user stops swiping
      wheelTimeout = setTimeout(() => {
        accumulatedDeltaX = 0;
        accumulatedDeltaY = 0;
      }, 50);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [navigateTo]);

  // Touch/swipe navigation — only horizontal swipes change slides
  // Vertical swipes inside scrollable content (PDF, CV) are left alone
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchRef.current = {
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        startTime: Date.now(),
      };
    };

    const handleTouchEnd = (e) => {
      const deltaX = e.changedTouches[0].clientX - touchRef.current.startX;
      const deltaY = e.changedTouches[0].clientY - touchRef.current.startY;
      const elapsed = Date.now() - touchRef.current.startTime;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      // Only change slides on clearly HORIZONTAL swipes (ratio > 1.5)
      const isHorizontalSwipe = absX > 50 && absX > absY * 1.5 && elapsed < 500;

      if (isHorizontalSwipe) {
        if (deltaX < 0) navigateTo("next", true);  // swipe left → next
        else navigateTo("prev", true);               // swipe right → prev
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide, navigateTo]);

  // Handle project click from Contents slide
  const handleProjectClick = (projectIndex) => {
    if (projectSlideIndices[projectIndex] !== undefined) {
      navigateTo(projectSlideIndices[projectIndex]);
    }
  };

  // Render a single slide
  const renderSlide = (slide, index) => {
    const isActive = index === currentSlide;
    const hasBeenActive = visitedSlides.has(index);

    switch (slide.type) {
      case "cover":
        return <CoverSlide key={slide.id} isActive={isActive} hasBeenActive={hasBeenActive} />;
      case "cv":
        return <CVSlide key={slide.id} isActive={isActive} hasBeenActive={hasBeenActive} />;
      case "contents":
        return (
          <ContentsSlide
            key={slide.id}
            projects={projects}
            isActive={isActive}
            hasBeenActive={hasBeenActive}
            onProjectClick={handleProjectClick}
          />
        );
      case "project-detail":
        return (
          <ProjectDetailSlide
            key={slide.id}
            project={slide.project}
            isActive={isActive}
            hasBeenActive={hasBeenActive}
          />
        );
      case "photo":
        return (
          <PhotoSlide
            key={slide.id}
            image={slide.image}
            isActive={isActive}
            hasBeenActive={hasBeenActive}
          />
        );
      case "pdf":
        return (
          <PdfSlide
            key={slide.id}
            pdfUrl={slide.pdfUrl}
            pdfConfig={slide.pdfConfig}
            projectTitle={slide.project?.title}
            isActive={isActive}
            hasBeenActive={hasBeenActive}
          />
        );
      case "contact":
        return <ContactSlide key={slide.id} isActive={isActive} hasBeenActive={hasBeenActive} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen h-dvh overflow-hidden bg-bg-primary">
      {/* Minimalistic Right Sidebar Nav */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex group">
        <div className="relative flex items-center bg-white/70 backdrop-blur-md rounded-l-2xl border border-r-0 border-black/10 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden transform translate-x-[calc(100%-32px)] group-hover:translate-x-0">
          
          {/* Chevron (Visible when collapsed) */}
          <div className="w-8 h-16 flex items-center justify-center flex-shrink-0 text-text-primary/50 group-hover:opacity-0 transition-opacity duration-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>

          {/* Links (Visible when expanded) */}
          <nav className="flex flex-col gap-6 py-8 pr-8 pl-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 min-w-max">
            <button onClick={() => navigateTo(0, true)} className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-text-primary hover:text-accent-color transition-colors cursor-pointer text-right">
              Home
            </button>
            <button onClick={() => navigateTo(2, true)} className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-text-primary hover:text-accent-color transition-colors cursor-pointer text-right">
              Contents
            </button>
            <button onClick={() => navigateTo(totalSlides - 1, true)} className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-text-primary hover:text-accent-color transition-colors cursor-pointer text-right">
              Contact
            </button>
          </nav>
        </div>
      </div>

      {/* Slide Track */}
      <div
        className="slide-container"
        style={{
          width: `${totalSlides * 100}vw`,
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {slides.map((slide, index) => renderSlide(slide, index))}
      </div>

      {/* Navigation */}
      <SlideNavigation
        total={totalSlides}
        current={currentSlide}
        onNavigate={navigateTo}
        darkSlides={darkSlideIndices}
      />
    </div>
  );
}

export default App;