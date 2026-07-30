import { projects } from "../data/projects";
import { ProjectCard } from "./projectsCards";
import type { Projects } from "../types/projects";
import styles from "./projectSection.module.scss";

export function ProjectsSection() {
  return (
    <section id="projects" className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Projetos</h2>

        <div className={styles.cards}>
          {projects.map((project: Projects) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}