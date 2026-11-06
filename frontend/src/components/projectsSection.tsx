import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "./projectsCards";
import { SkeletonCardProjectsLoad } from "./loadings/skeletonCardProjectsLoad";
import { InfiniteScrollLoad } from "./loadings/infiniteScrollLoad";
import styles from "./projectSection.module.scss";
import type { Projects } from "../types/projects";

export function ProjectsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [])

  const handleLoadMore = () => {
    setIsFetchingMore(true);
    setTimeout(() => {
      setIsFetchingMore(false);
    }, 1500);
  }

  return (
    <section id="projects" className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Projetos</h2>

        <div className={styles.cards}>
          {isLoading ? (
            <>         
              <SkeletonCardProjectsLoad/>
              <SkeletonCardProjectsLoad/>
              <SkeletonCardProjectsLoad/>
            </>
          ) : (
            projects.map((project: Projects) => (
            <ProjectCard key={project.id} project={project} />
            ))
          )}
        </div>

        {isFetchingMore && <InfiniteScrollLoad/>}
      </div>
    </section>
  );
}