import { Contact } from "../components/contact";
import { ProjectCard } from "../components/projectsCards";
import { Technologies } from "./technologies";
import { Certificates } from "./certificates";
import { projects } from "../data/projects";
import { Footer } from "../components/footer";

import type { Projects } from "../types/projects";

import styles from "./home.module.scss";

export function Home() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={styles.hero__body}>
          <div className={styles.hero__content}>
            <div className={styles.hero__image}>
            </div>

            <div className={styles.hero__about}>
              <h1 className={styles.hero__name}>Kauan Vinícius</h1>
              <p className={styles.hero__description}>Dev Software | Ciência de Dados</p>

              <div className={styles.hero__actions}>
                <a href="#projects" className={styles.btnPrimary}>Ver Projetos</a>
                <a href="#contact" className={styles.btnSecondary}>Contato</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sobre</h2>

          <div className={styles.aboutSection__text}>
            <p>
              Me chamo Kauan Vinícius, tenho 18 anos de idade e atualmente sou
              Técnico em Desenvolvimento de Sistemas formado no SENAI
              Campinas - Roberto Mange em Junho de 2026. Possuo uma boa
              experiência em liderança e desenvolvimento web.
            </p>

            <p>
              Atuo como Meio Oficial na Robert Bosch com automação de processos,
              dados e desenvolvimento web. Sou movido por desafios e tenho como
              compromisso entregar resultados com excelência e proatividade.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.certificatesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Certificados</h2>

          <div className={styles.certificatesGrid}>
            {Certificates.map((edu, index) => (
              <div key={index} className={styles.certificateCard}>
                <div className={styles.certificateCard__icon}>🏅</div>

                <div className={styles.certificateCard__info}>
                  <h5 className={styles.certificateCard__title}>{edu.course}</h5>
                  <p className={styles.certificateCard__institution}>{edu.institution}</p>
                  <small className={styles.certificateCard__duration}>
                    Duração: {edu.duration}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={styles.projectsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Projetos</h2>

          <div className={styles.projectsGrid}>
            {projects.map((project: Projects) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className={styles.techSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Habilidades</h2>

          <div className={styles.techGrid}>
            {Technologies.map((tech) => (
              <div key={tech.name} className={styles.techCard}>
                <div className={styles.techCard__icon}>
                  <img src={tech.logo} alt={tech.name} />
                </div>
                <p className={styles.techCard__name}>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Contato</h2>

          <div className={styles.contactWrapper}>
            <Contact />
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}