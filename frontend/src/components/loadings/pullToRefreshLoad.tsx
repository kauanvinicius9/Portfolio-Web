import React from "react";
import styles from "./pullToRefreshLoad.module.scss";

interface Props {
    pulling: boolean;
}

export const PullToRefreshLoad: React.FC<Props> = ({ pulling }) => {
    return (
        <div className={`${styles.indicator} ${pulling ? styles.active : ""}`}>
            <span>Solte para atualizar</span>
        </div>
    )
}