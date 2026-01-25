import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Função de atualização do ano automático
const year = new Date().getFullYear();

export function Footer() {
  return (
    <>
      {/* Redes sociais */}
      <footer className="footer bg-body-tertiary border-top">
        <div className="d-flex justify-content-center gap-4 mt-4 mb-3">
          <a href="https://github.com/kauanvinicius9" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>

          <a href="https://www.linkedin.com/in/kauan-vin%C3%ADcius-953773359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            rel="noopener noreferrer"
            className="social-link">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>

          <a href="https://www.instagram.com/kauanl01?igsh=MTA1czhyN3liM3l0NQ==" className="social-link">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>

        <div className="text-center text-secondary mb-3">
            &copy; {year} Todos os direitos reservados
        </div>
      </footer>
    </>
  );
}
