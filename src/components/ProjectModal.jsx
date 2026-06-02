// src/components/ProjectModal.jsx
import { useState, useEffect } from "react";

function ProjectModal({ project, onClose }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Reset image selection when modal opens with a new project
  useEffect(() => {
    setActiveImageIdx(0);
    if (project) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    // Dark Backdrop
    <div
      className="fixed inset-0 bg-text-primary/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      {/* Editorial Catalog Box */}
      <div
        className="bg-bg-primary max-w-5xl w-full max-h-[92vh] overflow-y-auto relative border border-border-color/40 shadow-2xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-text-secondary hover:text-text-primary text-xl leading-none w-10 h-10 border border-border-color/40 rounded-full flex items-center justify-center hover:rotate-90 transition-all duration-500 z-10 bg-bg-primary/80 backdrop-blur-sm"
          aria-label="Close detail view"
        >
          ✕
        </button>

        {/* Modal Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10">
          
          {/* Left Side: Images Gallery (Grid span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Main Stage Image */}
            <div className="overflow-hidden aspect-[4/3] bg-bg-secondary border border-border-color/20 relative">
              <img
                src={project.images[activeImageIdx]}
                alt={`${project.title} detailed photo`}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>

            {/* Thumbnail Indicators (only shown if multiple images exist) */}
            {project.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-24 aspect-[4/3] flex-shrink-0 overflow-hidden border transition-all duration-300 ${
                      activeImageIdx === idx 
                        ? "border-accent-color opacity-100 scale-95" 
                        : "border-border-color/50 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="Thumbnail representation" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Editorial Info (Grid span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-4 lg:pt-0">
            <div>
              {/* Category tag */}
              <span className="text-[10px] tracking-[0.25em] uppercase text-accent-color font-semibold mb-2 block">
                {project.category}
              </span>
              
              {/* Project Title */}
              <h2 className="font-serif text-4xl font-light text-text-primary leading-tight mb-4">
                {project.title}
              </h2>

              {/* Main short description */}
              <p className="text-text-secondary font-light text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Detailed specification table */}
              <div className="border-t border-b border-border-color/60 py-6 my-6 grid grid-cols-2 gap-y-4 gap-x-6">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-text-secondary block mb-1">Location</span>
                  <span className="font-serif text-text-primary text-sm font-medium">{project.location}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-text-secondary block mb-1">Area</span>
                  <span className="font-serif text-text-primary text-sm font-medium">{project.area}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-text-secondary block mb-1">Client</span>
                  <span className="font-serif text-text-primary text-sm font-medium">{project.client}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-text-secondary block mb-1">Year</span>
                  <span className="font-serif text-text-primary text-sm font-medium">{project.year}</span>
                </div>
              </div>

              {/* Materials List */}
              <div className="mb-8">
                <span className="text-[9px] uppercase tracking-widest text-text-secondary block mb-3">Sourced Materials</span>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((mat, idx) => (
                    <span 
                      key={idx} 
                      className="bg-bg-secondary text-text-secondary text-[11px] tracking-wide px-3 py-1 border border-border-color/30 font-medium"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* In-depth story description */}
            <div className="bg-bg-secondary/40 p-5 border-l-2 border-accent-color">
              <h4 className="font-serif text-sm font-normal text-text-primary mb-1">The Story</h4>
              <p className="text-text-secondary font-light text-xs leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProjectModal;