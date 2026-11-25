import { useState, useEffect } from "react";
import { SkeletonCardSkillsLoad } from "./loadings/skeletonCardSkillsLoad";
import { skills } from "../data/skills";
import { SkillCard } from "./skillsCards";
import styles from "./skillsSection.module.scss";
import type { Skills } from "../types/skills";

export function SkillsSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <section id="skills" className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Habilidades</h2>

        <div className={styles.skillGrid}>
          {isLoading ? (
            <>
              <SkeletonCardSkillsLoad/>
              <SkeletonCardSkillsLoad/>
              <SkeletonCardSkillsLoad/>
            </>  
          ) : (
            skills.map((skill: Skills) => (<SkillCard key={skill.id} skill={skill} />))
          )}
        </div>
      </div>
    </section>
  );
}