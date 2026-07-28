import { Contact } from "../components/contacts";
import { ProjectCard } from "../components/projectsCards";
import { Technologies } from "./technologies";
import { Certificates } from "./certificates";
import { projects } from "../data/projects";
import { Footer } from "../components/footer";

import type { Projects } from "../types/projects";

// import image from "../assets/foto.webp";
import styles from "./home.module.scss";
import "../scss/home.scss";
import "../scss/projectsCards.scss";
import "../main.scss";

export function Home() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.container__body}>
          <div className={styles.container__itens}>
  
            <div className={styles.image}>
              {/* <img src={image} alt="Minha foto"/> */}
            </div>

            <div className={styles.container_about}>
              <h1 className={styles.container_about__name}>Kauan Vinícius</h1>
              <p className={styles.container_about__description}>Dev Software | Ciência de Dados</p>

              <div className={styles.container_btn}>
                <a href="#projects" className={styles.container_btn__projects}>Ver Projetos</a>
                <a href="#contact" className={styles.container_btn__contact}>Contato</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.section_description}>
        <div className={styles.section_description__about}>
          <h2 className={styles.section_description__title}>Sobre</h2>

          <p className={styles.section_description__paragraph}>
           Me chamo Kauan Vinícius, tenho 18 anos de idade e atualmente sou
           Técnico em Desenvolvimento de Sistemas formado no SENAI
           Campinas - Roberto Mange em Junho de 2026. Possuo uma boa
           experiência em liderança e desenvolvimento web.
          </p>

          <p className={styles.section_description__paragraph}>
            Atuo como Meio Oficial na Robert Bosch com automação de processos,
            dados e desenvolvimento web. Sou movido por desafios e tenho como
            compromisso entregar resultados com excelência e proatividade.
          </p>
        </div>
      </section>

      <section className="py-5 bg-body-tertiary">
        <div className="container">
          <h2 className="mb-4 text-center">Certificados</h2>

          <div className="row g-4">
            {Certificates.map((edu, index) => (
              <div key={index} className="col-md-6 animate-card">
                <div className="card h-100 tech-card">
                  <div className="card-body d-flex gap-3">
                    <div className="fs-3">🏅</div>

                    <div>
                      <h5 className="card-title mb-1">{edu.course}</h5>
                      <p className="mb-1 text-body-secondary">{edu.institution}</p>
                      <small className="text-body-secondary">
                        Duração: {edu.duration} 
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section id="technologies" className="py-5 bg-body-tertiary">
        <div className="container">
          <h2 className="mb-4 text-center">Habilidades</h2>

          <div className="row g-4">
            {Technologies.map((tech) => (
              <div key={tech.name} className="col-6 col-md-3 animate-card">
                <div className="card h-100 tech-card">
                  <div className="card-body d-flex  gap-2 flex-row">
                    <div className="tech-icon">

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

      <footer>
        <Footer />
      </footer>
    </>
  );
}