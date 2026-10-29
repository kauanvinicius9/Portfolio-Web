import type { Skills } from "../types/skills";
import styles from "./skillsCards.module.scss";

interface Props {
  skill: Skills;
}

export function SkillCard({ skill }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <img src={skill.image} alt="Logo da ferramenta" className={styles.card__image}/>
        <h3 className={styles.card__name}>{skill.name}</h3>
        <p className={styles.card__category}>{skill.category}</p>
      </div>
    </div>
  );
}
