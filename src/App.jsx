// src/App.jsx
// Core entry point that aggregates all sections and adds premium custom cursor interaction.
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Process from "./components/Process";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  // Setup custom mouse cursor tracking for desktop screens
  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 1024 || ("ontouchstart" in window);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    if (window.innerWidth >= 1024 && !("ontouchstart" in window)) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-bg-primary min-h-screen text-text-primary transition-colors duration-500 overflow-x-hidden selection:bg-accent-light selection:text-accent-color pt-[72px]">
      
      {/* Custom Trailing Cursor Elements */}
      {!isMobile && (
        <>
          <div
            className="custom-cursor-dot"
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
          />
          <div
            className="custom-cursor-circle"
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
          />
        </>
      )}

      {/* Structured Sections */}
      <Navbar />
      <Hero />
      <Projects />
      <Process />
      <About />
      <Testimonials />
      <Contact />

      {/* Redesigned Premium Footer */}
      <footer className="text-center py-12 text-[10px] tracking-[0.3em] uppercase text-text-secondary border-t border-border-color/30 bg-bg-secondary/20 transition-colors duration-300">
        © {new Date().getFullYear()} Aashish Bista · Interior Designer · Kathmandu, Nepal
      </footer>
    </div>
  );
}

export default App;