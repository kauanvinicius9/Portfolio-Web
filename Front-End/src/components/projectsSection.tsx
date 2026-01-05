import { project } from "../data/projects";
import { ProjectCard } from "./projectsCards";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-5 bg-body">
      <div className="container">
        <h2 className="mb-4 text-center">Projetos</h2>

        <div className="row g-4">
          {project.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
