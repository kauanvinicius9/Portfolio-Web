import type { Projects } from "../types/projects";

interface Props {
  project: Projects;

}

export function ProjectCard({ project }: Props) {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm tech-card">
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text text-muted">{project.desc}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Ver projeto
          </a>
        </div>
      </div>
    </div>
  )
}