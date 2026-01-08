// Componentes
import { Contact } from "../components/contacts";
import { ProjectCard } from "../components/projectsCards";
import { Technologies } from "./technologies";
import { Educations } from "./educations";
import { projects } from "../data/projects";
import type { Projects } from "../types/projects";

// ícones das redes sociais 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Imagem pessoal
import image from "../assets/Img.jpg";

// Estilizações CSS
import "../styles/home.css";
import "../styles/projectsCards.css";

export function Home() {
  return (
    <>
      <section className="py-5 bg-body-tertiary border-bottom">
        <div className="container">
          <div className="d-flex flex-column align-items-center text-center">
            {/* Avatar */}
            <img src={image} className="rounded-circle object-fit-cover border border-3 border-primary mt-n5 avatar" alt="Meu avatar"/>

            {/* Texto */}
            <h1 className="fw-bold mb-1 title-name mt-3">Kauan Vinícius</h1>

            {/* Habilidade */}
            <p className="text-body-secondary fs-5 mb-4">
              Eng. Software | Planejamento Técnico
            </p>

            {/* Botões */}
            <div className="d-flex gap-2 mt-2">
              <a href="#projects" className="btn btn-primary">
                Ver Projetos
              </a>

              <a href="#contact" className="btn btn-outline-secondary">
                Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mim */}
      <section className="py-5 bg-body">
        <div className="container">
          <h2 className="mb-4 text-center">Sobre</h2>

          <p className="text-body-secondary text-about">
            Meu nome é Kauan Vinícius, tenho 17 anos, nascido em Itapira no
            interior do estado de São Paulo e morando atualmente em Campinas.
            Atuo na empresa Robert Bosch como Jovem Aprendiz, cursando o
            terceiro semestre de Desenvolvimento de Sistemas no SENAI Roberto
            Mange e sou estudante do 3º ano da Escola Estadual Dom Barreto no
            período noturno.
          </p>

          <p className="text-body-secondary text-about">
            Prezo pelo desenvolvimento de código limpo, organização,
            planejamento e prototipação de projetos. Sou comunicativo, trabalho
            bem em equipe e possuo experiência em liderança e documentação
            profissional para TCC. Possuo inglês intermediário e estudo
            atualmente na CPM (Cidadão Pro Mundo) em parceria com a Universidade
            Presbiteriana Mackenzie.
          </p>
        </div>
      </section>

      {/* Formações */}
      <section className="py-5 bg-body-tertiary">
        <div className="container">
          <h2 className="mb-4 text-center">Formações</h2>

          <div className="row g-4">
            {Educations.map((edu, index) => (
              <div key={index} className="col-md-6 animate-card">
                <div className="card h-100 tech-card">
                  <div className="card-body d-flex gap-3">
                    <div className="fs-3">🏅</div>

                    <div>
                      <h5 className="card-title mb-1">{edu.course}</h5>
                      <p className="mb-1 text-body-secondary">
                        {edu.institution}
                      </p>
                      <small className="text-body-secondary">
                        Duração: {edu.duration} • Presença: {edu.attendance}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projects" className="py-5 bg-body">
        <div className="container">
          <h2 className="mb-4 text-center">Projetos</h2>

          <div className="row g-4">
            {projects.map((project: Projects) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias que uso frequentemente */}
      <section id="technologies" className="py-5 bg-body-tertiary">
        <div className="container">
          <h2 className="mb-4 text-center">Tecnologias</h2>

          <div className="row g-4">
            {Technologies.map((tech) => (
              <div key={tech.name} className="col-6 col-md-3 animate-card">
                <div className="card h-100 tech-card">
                  <div className="card-body d-flex  gap-2 flex-row">
                    <div className="tech-icon">
                      {/* Imagem com as tecnologias */}
                      <img src={tech.logo} alt={tech.name} />
                    </div>
                    <p className="fw-semibold mb-0 text-size">{tech.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="py-5 bg-body">
        <div className="container">
          <h2 className="mb-4 text-center">Contato</h2>

          <div className="row justify-content-center">
            <div className="col-md-7">
              <Contact />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-body-tertiary border-top">
        <div className="container text-center">

          {/* Redes sociais */}
          <div className="d-flex justify-content-center gap-4 mt-4 mb-3">
            <a href="https://github.com/kauanvinicius9" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faGithub} className="icon"/>
            </a>

            <a href="https://www.linkedin.com/in/kauan-vin%C3%ADcius-953773359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} className="icon"/>
            </a>

            <a href="https://www.instagram.com/kauanl01?igsh=MTA1czhyN3liM3l0NQ==" className="social-link">
              <FontAwesomeIcon icon={faInstagram} className="icon"/>
            </a>
          </div>

          {/* Texto */}
          <p className="mb-0 text-body-secondary small">
            &copy; {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
