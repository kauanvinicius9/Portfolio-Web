import React from "react";
import styles from "./skeletonCardProjectLoad.module.scss";

export const SkeletonCardSkillsLoad: React.FC = () => {
  return (
    <div className={styles.card}>
        <div className={styles.card__image}></div>
        <div className={styles.card__body}>
            <div className={styles.card__name}></div>
            <div className={styles.card__category}></div>
        </div>
    </div>
  );
};
