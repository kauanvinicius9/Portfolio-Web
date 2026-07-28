import type { Projects } from "../types/projects";
import styles from "./projectsCards.module.scss";

interface Props {
  project: Projects;
}

export function ProjectCard({ project }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <h3 className={styles.card__title}>{project.title}</h3>
        <p className={styles.card__description}>{project.desc}</p>
        
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.card__button}>
          Ver projeto
        </a>
      </div>
    </div>
  );
}