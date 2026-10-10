import type { Projects } from "../types/projects";
import { useEffect } from "react";
import { Contact } from "../components/contact";
import { ProjectCard } from "../components/projectsCards";
import { projects } from "../data/projects";
import { Footer } from "../components/footer";
import { certificates } from "../data/certificates";
import { skills } from "../data/skills";
import { career } from "../data/career";
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
      .${styles.imageReveal},
      .${styles.sectionTitleCareerReveal},
      .${styles.careerCardReveal}
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
              Me chamo Kauan Vinícius, tenho 18 anos de idade e atualmente sou Técnico em Desenvolvimento
              de Sistemas formado no SENAI Campinas - Roberto Mange. Possuo uma boa experiência em análise de dados e 
              desenvolvimento web.
            </p>

            <p>
              Atuo à 02 anos na Bosch Campinas iniciando minha carreira como Jovem Aprendiz, hoje promovido a Meio Oficial.
              Possuo inglês avançado, sou movido por desafios e tenho como
              compromisso entregar resultados com excelência e proatividade.
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
      
      <section id="career" className={styles.careerSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleCareerReveal}`}>Carreira</h2>

          <div className={styles.careerGrid}>
            {career.map((item) => (
              <article key={`${item.company}-${item.title}`} className={`${styles.careerCard} ${styles.careerCardReveal}`}>
                <header className={styles.careerHeader}>
                  <div className={styles.careerMainInfo}>
                    <h3 className={styles.careerTitle}>{item.title}</h3>
                    <p className={styles.careerCompany}>{item.company}</p>
                  </div>
                </header>

                <time className={styles.careerTimeline}>{item.timeline}</time>
                <p className={styles.careerDescription}>{item.description}</p>
              </article>
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
