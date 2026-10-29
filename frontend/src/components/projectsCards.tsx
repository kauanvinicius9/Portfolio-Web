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
        <p className={styles.card__description}>{project.description}</p>
        <img src={project.image} alt="Imagem do projeto" className={styles.card__image} />
        <p className={styles.card__efficiency}>{project.efficiency}</p>
        <p className={styles.card__skills}>{project.skills}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.card__button} aria-label="Ver código do projeto">
          Ver projeto
        </a>
      </div>
    </div>
  );
}