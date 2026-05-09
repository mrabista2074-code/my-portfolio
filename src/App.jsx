// src/App.jsx
// This is the main file. It imports all sections and puts them together.

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    // This div wraps the entire website
    <div className="bg-cream min-h-screen">
      
      <Navbar />    {/* Top navigation */}
      <Hero />      {/* Opening section */}
      <Projects />  {/* Project grid */}
      <About />     {/* Bio section */}
      <Contact />   {/* Contact form */}

      {/* Footer */}
      <footer className="text-center py-8 text-xs tracking-widest uppercase text-muted border-t border-border">
        © 2026 Aashish Bista · Interior Design
      </footer>
    </div>
  );
}

export default App;