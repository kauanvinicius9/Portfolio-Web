import { projects } from "../data/projects";
import { ProjectCard } from "./projectsCards";
import type { Projects } from "../types/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-5 bg-body">
      <div className="container">
        <h2 className="mb-4 text-center">Projetos</h2>

        <div className="row g-4">
          {projects.map((project: Projects) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}