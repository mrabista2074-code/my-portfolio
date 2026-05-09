// src/components/ProjectCard.jsx
// A single project card in the grid.
// It receives "project" data and "onClick" (what happens when you click it)

function ProjectCard({ project, onClick }) {
  return (
    // group allows child elements to react to hover on this parent
    <div
      className="cursor-pointer group"
      onClick={onClick}   // when clicked, run the onClick function from parent
    >
      {/* Image container - overflow-hidden clips the zoom effect */}
      <div className="overflow-hidden aspect-[4/3] bg-gray-100">
        <img
          src={project.coverImage}
          alt={project.title}
          // scale-105 on hover gives a subtle zoom effect
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card text below the image */}
      <div className="pt-4">
        <h3 className="font-serif text-xl font-light text-gray-900">
          {project.title}
        </h3>
        <p className="text-xs tracking-widest uppercase text-muted mt-1">
          {project.category} · {project.year}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;