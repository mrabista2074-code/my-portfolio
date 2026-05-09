// src/components/Navbar.jsx
// The navigation bar at the top of the page

function Navbar() {
  return (
    // sticky top-0 means it stays at the top when you scroll
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Your name / logo on the left */}
        <span className="font-serif text-lg tracking-widest">
          Aashish Bista
        </span>

        {/* Navigation links on the right */}
        <ul className="flex gap-8 list-none">
          {/* Each link scrolls to a section by its id */}
          <li>
            <a href="#projects" className="text-xs tracking-widest uppercase text-muted hover:text-gray-900 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="text-xs tracking-widest uppercase text-muted hover:text-gray-900 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-xs tracking-widest uppercase text-muted hover:text-gray-900 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;