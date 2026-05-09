// src/components/ProjectModal.jsx
// The popup that appears when you click a project card
// "project" = the project to show, "onClose" = what to do when closing

function ProjectModal({ project, onClose }) {
  // If no project is selected, don't show anything
  if (!project) return null;

  return (
    // Dark overlay behind the modal
    // When you click the overlay (not the modal itself), it closes
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* The actual modal box */}
      {/* stopPropagation prevents clicking inside from closing the modal */}
      <div
        className="bg-cream max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button (X) in the top right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-muted hover:text-gray-900 text-xl leading-none"
        >
          ✕
        </button>

        {/* Project title and category */}
        <h2 className="font-serif text-4xl font-light text-gray-900 mb-1">
          {project.title}
        </h2>
        <p className="text-xs tracking-widest uppercase text-muted mb-6">
          {project.category} · {project.year}
        </p>

        {/* Image grid - first image is bigger (spans full width) */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} - image ${index + 1}`}
              // The first image spans both columns
              className={`w-full object-cover ${
                index === 0 ? "col-span-2 aspect-video" : "aspect-square"
              }`}
            />
          ))}
        </div>

        {/* Project description */}
        <p className="text-muted font-light leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectModal;