import type { Projects } from "../types/projects";
import { useEffect } from "react";
import { Contact } from "../components/contact";
import { ProjectCard } from "../components/projectsCards";
import { projects } from "../data/projects";
import { Footer } from "../components/footer";
import { certificates } from "../data/certificates";
import { skills } from "../data/skills";
import styles from "./home.module.scss";

export function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver (
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(`.${styles.reveal}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (

    <div className={styles.pageWrapper}>
      <section className={`{styles.hero} ${styles.reveal}`}>
        <div className={styles.hero__body}>
          <div className={styles.hero__content}>
            <div className={styles.hero__image}>
            </div>

            <div className={styles.hero__about}>
              <h1 className={styles.hero__name}>Kauan Vinícius</h1>
              <p className={styles.hero__description}>Desenvolvedor Full-Stack | Bosch Brasil</p>

              <div className={styles.hero__actions}>
                <a href="#projects" className={styles.btnPrimary}>Projetos</a>
                <a href="#contact" className={styles.btnSecondary}>Contato</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`{styles.aboutSection} ${styles.reveal}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sobre</h2>

          <div className={styles.aboutSection__text}>
            <p>
              Me chamo Kauan Vinícius, tenho 18 anos de idade e atualmente sou Técnico em Desenvolvimento de Sistemas formado no SENAI Campinas - Roberto Mange em Junho de 2026. Possuo uma boa experiência em liderança e desenvolvimento web.
            </p>

            <p>
              Atuo como Meio Oficial em Soluções Digitais na Robert Bosch. Sou movido por desafios e tenho como compromisso entregar resultados com excelência e proatividade.
            </p>
          </div>
        </div>
      </section>

      <section className={`{styles.certificatesSection} ${styles.reveal}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Certificados</h2>

          <div className={styles.certificatesGrid}>
            {certificates.map((edu) => (
              <div key={edu.id} className={styles.certificateCard}>
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

      <section id="projects" className={`{styles.projectsSection} ${styles.reveal}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Projetos</h2>

          <div className={styles.projectsGrid}>
            {projects.map((project: Projects) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className={`{styles.skillSection} ${styles.reveal}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Habilidades</h2>

          <div className={styles.skillGrid}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <p className={styles.skillCard__name}>{skill.name}</p>
                <span className={styles.skillCard__category}>{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={`{styles.contactSection} ${styles.reveal}`}>
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