// src/components/Projects.jsx
// Handles category filtering and displays projects in a staggered layout

import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Hospitality"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto transition-colors duration-300">
      
      {/* Editorial Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-color/60 pb-8 mb-16">
        <div>
          <span className="text-xs tracking-[0.2em] uppercase text-accent-color font-medium mb-3 block">
            Selected Portfolio
          </span>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-text-primary">
            Curated Work
          </h2>
        </div>

        {/* Category Navigation Bar */}
        <div className="flex flex-wrap gap-6 mt-6 md:mt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs tracking-[0.2em] uppercase pb-2 transition-all relative font-medium focus:outline-none ${
                activeCategory === cat
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent-color transition-all duration-300" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of project cards - Staggered/Editorial Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 min-h-[400px]">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`transition-all duration-700 ${
              index % 3 === 1 ? "lg:translate-y-12" : index % 3 === 2 ? "lg:translate-y-6" : ""
            }`}
          >
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>

      {/* Spacing correction if there's offset */}
      <div className="h-12 hidden lg:block" />

      {/* Full-featured detail modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;