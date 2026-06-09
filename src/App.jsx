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

  // Navigate to a specific slide
  const navigateTo = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    const clamped = Math.max(0, Math.min(totalSlides - 1, index));
    setIsTransitioning(true);
    setCurrentSlide(clamped);
    setTimeout(() => setIsTransitioning(false), 850);
  }, [isTransitioning, currentSlide, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateTo(currentSlide + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigateTo(currentSlide - 1);
      } else if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' '].includes(e.key)) {
        // Find the scrollable container in the current slide
        const slides = document.querySelectorAll('.slide');
        if (slides[currentSlide]) {
          const scrollable = slides[currentSlide].querySelector('.custom-scrollbar, .hide-scrollbar');
          if (scrollable) {
            e.preventDefault();
            // Spacebar behaves like PageDown, Shift+Space behaves like PageUp
            const isUp = e.key === 'ArrowUp' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey);
            const isPage = e.key.includes('Page') || e.key === ' ';
            const amount = isPage ? window.innerHeight * 0.8 : 60;
            const dir = isUp ? -1 : 1;
            scrollable.scrollBy({ top: amount * dir, behavior: 'smooth' });
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, navigateTo]);

  // Mouse wheel navigation
  useEffect(() => {
    let wheelTimeout = null;
    let accumulatedDelta = 0;

    const handleWheel = (e) => {
      // Allow vertical scrolling inside scrollable containers (PDF, CV, etc.)
      if (e.target.closest('.custom-scrollbar') || e.target.closest('.hide-scrollbar')) {
        return;
      }
      
      e.preventDefault();
      accumulatedDelta += e.deltaY;

      if (wheelTimeout) clearTimeout(wheelTimeout);

      wheelTimeout = setTimeout(() => {
        if (Math.abs(accumulatedDelta) > 30) {
          if (accumulatedDelta > 0) {
            navigateTo(currentSlide + 1);
          } else {
            navigateTo(currentSlide - 1);
          }
        }
        accumulatedDelta = 0;
      }, 80);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [currentSlide, navigateTo]);

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
        if (deltaX < 0) navigateTo(currentSlide + 1);  // swipe left → next
        else navigateTo(currentSlide - 1);               // swipe right → prev
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