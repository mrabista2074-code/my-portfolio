// src/components/ContactSlide.jsx
// Closing slide with contact information

import SlideHeader from "./SlideHeader";

function ContactSlide({ isActive, hasBeenActive }) {
  return (
    <div className="slide bg-bg-primary">
      <SlideHeader
        left="Contact"
        center=""
        right="2026"
      />

      <div className="slide-content items-center justify-center">
        <div className={`text-center max-w-lg px-6 ${hasBeenActive ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-text-primary leading-tight mb-10">
            Thank<br />
            <span className="italic">You</span>
          </h2>

          {/* Contact Details */}
          <div className={`space-y-6 ${hasBeenActive ? "animate-fade-in-up animation-delay-300" : "opacity-0"}`}>
            {/* Email */}
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-text-secondary block mb-1">Email</span>
              <a
                href="mailto:aashishbista2001@gmail.com"
                className="font-serif text-lg sm:text-xl text-text-primary hover:text-accent-color transition-colors duration-300"
              >
                aashishbista2001@gmail.com
              </a>
            </div>

            {/* Location */}
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-text-secondary block mb-1">Based In</span>
              <span className="font-serif text-lg text-text-primary">
                Jhamsikhel, Lalitpur — Nepal
              </span>
            </div>

            {/* Social */}
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-text-secondary block mb-2">Connect</span>
              <a
                href="https://www.linkedin.com/in/aashish-bista2001/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] uppercase text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Footer credit */}
          <div className={`mt-16 ${hasBeenActive ? "animate-fade-in animation-delay-600" : "opacity-0"}`}>
            <p className="text-[10px] tracking-[0.3em] uppercase text-text-secondary/50">
              © {new Date().getFullYear()} Aashish Bista · Interior Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSlide;
