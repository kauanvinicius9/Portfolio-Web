import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__socials}>
          <a href="https://github.com/kauanvinicius9" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.footer__socialLink}>
            <FontAwesomeIcon icon={faGithub} className={styles.footer__icon} />
          </a>

          <a href="https://www.linkedin.com/in/kauan-vin%C3%ADcius-603754417" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.footer__socialLink}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.footer__icon} />
          </a>

          <a href="https://www.instagram.com/kauanviniciusl08?igsh=MTA1czhyN3liM3l0NQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.footer__socialLink}>
            <FontAwesomeIcon icon={faInstagram} className={styles.footer__icon} />
          </a>
        </div>

        <div className={styles.footer__copyright}>
          &copy; {year} Portfolio | Kauan Vinícius
        </div>
      </div>
    </footer>
  );
}