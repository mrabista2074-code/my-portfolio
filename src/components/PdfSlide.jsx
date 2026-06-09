// src/components/PdfSlide.jsx
import { useState, useEffect, useRef } from "react";
import SlideHeader from "./SlideHeader";
import { Document, Page, pdfjs } from "react-pdf";

// Use Unpkg CDN for the worker to avoid Vite build issues
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Component to lazy load individual PDF pages
function LazyPdfPage({ index, isCrop, cropStyle, cropScale, pageWidth }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "1500px 0px" } // Pre-load pages just before they enter the screen
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Approximate height to prevent scrollbar jumping (using roughly A4 aspect ratio 1.414)
  const approxHeight = pageWidth * 1.414;

  return (
    <div 
      ref={containerRef}
      className={`mb-6 sm:mb-12 shadow-2xl transition-transform duration-1000 bg-white flex justify-center ${isCrop ? 'overflow-hidden' : ''}`}
      style={{ minHeight: isVisible ? 'auto' : `${approxHeight}px`, width: '100%', maxWidth: '100%' }}
    >
      {isVisible ? (
        <div style={isCrop ? cropStyle : {}}>
          <Page
            pageNumber={index + 1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={isCrop ? pageWidth * cropScale : pageWidth}
            className={isCrop ? "transform origin-center" : ""}
          />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <span className="font-sans text-xs tracking-widest uppercase text-gray-400">Loading Page {index + 1}...</span>
        </div>
      )}
    </div>
  );
}

function PdfSlide({ pdfUrl, pdfConfig = {}, projectTitle, isActive, hasBeenActive }) {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(1000);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Calculate page width based on window size
    const calculateWidth = () => {
      const maxWidth = window.innerWidth * 0.95; // Use more width on mobile
      setPageWidth(Math.min(maxWidth, 1400));
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleScroll = (e) => {
    // Vanish after scrolling past half the screen height
    const isScrolled = e.target.scrollTop > (window.innerHeight / 2);
    if (isScrolled !== hasScrolled) {
      setHasScrolled(isScrolled);
    }
  };

  return (
    <div className="slide bg-bg-primary overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0 flex flex-col items-center">
        {hasBeenActive && (
          <div 
            className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar p-2 sm:p-12 lg:p-20 pt-16 sm:pt-28 pb-20 sm:pb-32"
            onScroll={handleScroll}
            style={{ touchAction: 'pan-y' }}
          >
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              className="flex flex-col items-center"
              loading={<div className="p-10 font-sans text-white/50 text-sm tracking-widest uppercase">Loading document...</div>}
            >
              {Array.from(new Array(numPages), (el, index) => {
                const isCrop = !!pdfConfig.crop;
                const cropScale = typeof pdfConfig.crop === 'object' ? pdfConfig.crop.scale : 1.25;
                const cropStyle = typeof pdfConfig.crop === 'object' ? {
                  marginTop: pdfConfig.crop.marginTop || '-5%',
                  marginBottom: pdfConfig.crop.marginBottom || '-5%',
                  marginLeft: pdfConfig.crop.marginLeft || '-5%',
                  marginRight: pdfConfig.crop.marginRight || '-15%'
                } : {
                  marginTop: '-5%', marginBottom: '-5%', marginLeft: '-5%', marginRight: '-15%'
                };

                return (
                  <LazyPdfPage 
                    key={`page_${index + 1}`}
                    index={index}
                    isCrop={isCrop}
                    cropStyle={cropStyle}
                    cropScale={cropScale}
                    pageWidth={pageWidth}
                  />
                );
              })}
            </Document>
          </div>
        )}
      </div>

      {/* Removed gradients */}

      {/* Scroll Indicator Gesture */}
      {isActive && !hasScrolled && numPages && (
        <div 
          className="absolute top-14 sm:top-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none transition-opacity duration-1000 z-50"
          style={{ mixBlendMode: 'difference', color: '#fff' }}
        >
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-3">
            Scroll to read
          </span>
          <div className="w-[1px] h-8 sm:h-12 bg-white/30 overflow-hidden relative">
            <div className="w-full h-full bg-white absolute top-0 left-0 animate-[scrolldown_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      )}

      {/* Header overlay */}
      <SlideHeader
        left={pdfConfig.headerTitle || "Rendered Images"}
        center=""
        right={projectTitle || pdfConfig.headerTitle || "Rendered Images"}
        className="absolute inset-x-0 top-0 pointer-events-none z-50"
      />

      {/* Inline animation styles for the scroll indicator */}
      <style>{`
        @keyframes scrolldown {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
}

export default PdfSlide;
