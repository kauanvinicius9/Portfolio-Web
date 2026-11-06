import React from "react";
import styles from "./notFound.module.scss";

export const NotFound: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>A página que você está procurando não existe ou foi movida</p>
            <a href="/" className={styles.homePage}>
                Voltar para a página inicial
            </a>
        </div>
    );
};
