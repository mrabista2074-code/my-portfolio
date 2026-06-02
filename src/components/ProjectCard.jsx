// src/components/ProjectCard.jsx
// A single project card in the staggered portfolio grid

function ProjectCard({ project, onClick }) {
  return (
    <div
      className="cursor-pointer group flex flex-col"
      onClick={onClick}
      // Add custom mouse cursor class during hover
      onMouseEnter={() => document.body.classList.add("custom-cursor-active")}
      onMouseLeave={() => document.body.classList.remove("custom-cursor-active")}
    >
      {/* Visual Image Box with Overflow Clipping */}
      <div className="overflow-hidden aspect-[3/4] bg-bg-secondary relative border border-border-color/30">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Soft, luxury glassmorphic overlay on hover */}
        <div className="absolute inset-0 bg-bg-primary/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
          <div className="bg-bg-primary/95 text-text-primary px-6 py-3 border border-border-color/45 shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-xs tracking-[0.25em] uppercase font-medium">
            View Space
          </div>
        </div>

        {/* Top category label floating */}
        <div className="absolute top-4 left-4 bg-bg-primary/90 backdrop-blur-sm text-[10px] tracking-widest text-text-secondary uppercase px-3 py-1 font-medium border border-border-color/20">
          {project.category}
        </div>
      </div>

      {/* Title block beneath image */}
      <div className="pt-5 flex items-baseline justify-between">
        <h3 className="font-serif text-2xl font-light text-text-primary group-hover:text-accent-color transition-colors duration-300">
          {project.title}
        </h3>
        <span className="text-xs font-serif text-text-secondary italic">
          {project.year}
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;