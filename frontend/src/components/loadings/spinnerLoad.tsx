import React from "react";
import styles from "./spinnerLoad.module.scss";

export const SpinnerLoading: React.FC = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.spinner}></div>
        </div>
    )
}