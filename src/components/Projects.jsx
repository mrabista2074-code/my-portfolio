// src/components/Projects.jsx
// The full projects section — grid of cards + handles opening the modal

import { useState } from "react";       // useState lets us track which project is open
import projects from "../data/projects"; // import our project data
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function Projects() {
  // selectedProject = which project is currently open in the modal
  // null means no modal is open
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    // id="projects" is what the navbar links scroll to
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      
      {/* Section label */}
      <p className="text-xs tracking-widest uppercase text-muted pb-4 border-b border-border mb-12">
        Selected Work
      </p>

      {/* Grid of project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Loop through each project and create a card */}
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            // When a card is clicked, set it as the selected project
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal - only shows when a project is selected */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)} // close = set to null
      />
    </section>
  );
}

export default Projects;