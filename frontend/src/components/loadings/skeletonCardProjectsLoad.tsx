import React from "react";
import styles from "./skeletonCardProjectLoad.module.scss";

export const SkeletonCardProjectsLoad: React.FC = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card__body}>
                <div className={styles.card__title}></div>
                <div className={styles.card__description}></div>
                <div className={styles.card__image}></div>
                <div className={styles.card__efficiency}></div>
                <div className={styles.card__skills}></div>
                <div className={styles.card__button}></div>
            </div>
        </div>
    );
};