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
  // Animações
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

    const elements = document.querySelectorAll(`
      .${styles.nameReveal}, 
      .${styles.descriptionReveal},
      .${styles.actionReveal},
      .${styles.sectionTitleReveal},
      .${styles.aboutSection__textReveal},
      .${styles.skillCardReveal}, 
      .${styles.projectCardReveal}, 
      .${styles.certificateCardReveal},
      .${styles.sectionTitleContactReveal},
      .${styles.contactWrapperReveal},
      .${styles.sectionTitleCertificateReveal},
      .${styles.sectionTitleProjectsReveal},
      .${styles.sectionTitleSkillsReveal},
      .${styles.imageReveal}
    `);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (

    <div className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={styles.hero__body}>
          <div className={styles.hero__content}>
            <div className={styles.hero__about}>
              <img src="/image.jpg" alt="Perfil" className={`${styles.hero__image} ${styles.imageReveal}`}/> 
              <h1 className={`${styles.hero__name} ${styles.nameReveal}`}>Kauan Vinícius</h1>
              <p className={`${styles.hero__description} ${styles.descriptionReveal}`}>Desenvolvedor Full-Stack | Bosch Brasil</p>

              <div className={`${styles.hero__actions} ${styles.actionReveal}`}>
                <a href="/professional_profile.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary} aria-label="Currículo">Perfil Profissional</a>
                <a href="#contact" className={styles.btnSecondary} arial-label="Contato">Contato</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleReveal}`}>Sobre</h2>

          <div className={`${styles.aboutSection__text} ${styles.aboutSection__textReveal}`}>
            <p>
              Me chamo Kauan Vinícius, tenho 18 anos de idade. Possuo um nível avançado em Inglês, movido a por desafios e tenho como
              compromisso, entregar resultados com excelência e proatividade.
            </p>

            <p>
              Possuo 02 anos de experiência na área de TI com desenvolvimento de software formado em Técnico em Desenvolvimento de Sistemas
              no SENAI Campinas - "Roberto Mange" e na Escola de Aprendizagem Técnica (ETS) - Bosch Campinas. Atuo como Meio Oficial em Soluções Digitais,
              cargo internamente nomeado para o técnico em contrato indeterminado.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.certificatesSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleCertificateReveal}`}>Certificados</h2>

          <div className={styles.certificatesGrid}>
            {certificates.map((edu) => (
              <div key={edu.id} className={`${styles.certificateCard} ${styles.certificateCardReveal}`}>
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
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleProjectsReveal}`}>Projetos</h2>

          <div className={styles.projectsGrid}>
            {projects.map((project: Projects) => (
              <div key={project.id} className={styles.projectCardReveal}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className={styles.skillSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleSkillsReveal}`}>Habilidades</h2>

          <div className={styles.skillGrid}>
            {skills.map((skill) => (
              <div key={skill.name} className={`${styles.skillCard} ${styles.skillCardReveal}`}>
                <p className={styles.skillCard__name}>{skill.name}</p>
                <span className={styles.skillCard__category}>{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleContactReveal}`}>Contato</h2>

          <div className={`${styles.contactWrapper} ${styles.contactWrapperReveal}`}>
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
