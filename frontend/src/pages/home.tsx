import { ProjectsSection } from "../components/projectsSection";
import { SkillsSection } from "../components/skillsSection";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

import styles from "./home.module.scss";

export function Home() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={styles.hero__body}>
          <div className={styles.hero__content}>
            <div className={styles.hero__about}>
              <img src="/image.jpg" alt="Foto de perfil" className={styles.hero__image} />

              <h1 className={styles.hero__name}>Kauan Vinícius</h1>
              <p className={styles.hero__description}>Desenvolvedor Full-Stack | Bosch Brasil</p>

              <div className={styles.hero__actions}>
                <a href="/professional_profile.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary} aria-label="Visualizar currículo">Perfil Profssional</a>
                <a href="#contact" className={styles.btnSecondary} aria-label="Ir para contato">Contato</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sobre</h2>

          <div className={styles.aboutSection__text}>
            <p>
              Me chamo Kauan Vinícius, tenho 18 anos e sou Técnico em
              Desenvolvimento de Sistemas formado pelo SENAI Campinas -
              Roberto Mange.
            </p>

            <p>
              Atuo há 2 anos na Bosch Campinas, onde iniciei como Jovem
              Aprendiz e hoje atuo como Meio Oficial. Tenho experiência
              em análise de dados e desenvolvimento web, focado em
              interfaces visuais.
            </p>

            <p>
              Sou movido por desafios, possuo inglês avançado e
              atualmente estou expandindo meus conhecimentos em
              Inteligência Artificial e Machine Learning.
            </p>
          </div>
        </div>
      </section>

      {/* Componentes */}
      <ProjectsSection />
      <SkillsSection />
      
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
