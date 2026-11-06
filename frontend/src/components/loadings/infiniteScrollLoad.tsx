import React from "react";
import styles from "./infiniteScrollLoad.module.scss";

export const InfiniteScrollLoad: React.FC = () => {
    return (
        <div className={styles.infiniteContainer}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    );
};