import { Contact } from "../components/contacts";
import image from "../assets/Img.webp";
import "../styles/home.css";

// Logos
import html from "../assets/HTML.svg";
import boostrap from "../assets/Bootstrap.svg";
import css from "../assets/CSS.svg";
import django from "../assets/Django.svg";
import docker from "../assets/Docker.svg";
import fastapi from "../assets/FastAPI.svg";
import java from "../assets/Java-Dark.svg";
import javascript from "../assets/JavaScript.svg";
import sql from "../assets/MySQL-Dark.svg";
import python from "../assets/Python-Dark.svg";
import react from "../assets/React-Dark.svg";
import ruby from "../assets/Ruby.svg";
import tailwind from "../assets/TailwindCSS-Dark.svg";
import typescript from "../assets/TypeScript.svg";
import postman from "../assets/Postman.svg";
import node from "../assets/NodeJS-Dark.svg"

const technologies = [
 { name: "HTML5", logo: html},
 { name: "CSS3", logo: css},
 { name: "JavaScript", logo: javascript},
 { name: "React", logo: react},
 { name: "FastAPI", logo: fastapi},
 { name: "Python", logo: python},
 { name: "SQL", logo: sql },
 { name: "Node JS", logo: node },
 { name: "TypeScript", logo: typescript },
 { name: "Django", logo: django },
 { name: "Docker", logo: docker },
 { name: "Postman", logo: postman },
 { name: "Bootstrap", logo: boostrap },
 { name: "TailwindCSS", logo: tailwind },
 { name: "Java", logo: java },
 { name: "Ruby", logo: ruby },

];

const educations = [
  {
    course: "Desenvolvimento de Sistemas",
    institution: "SENAI Roberto Mange",
    duration: "1 ano e 6 meses",
    attendance: "100%",
  },
  {
    course: "Computação",
    institution: "Fundação Eufraten",
    duration: "11 meses",
    attendance: "95%",
  },
  {
    course: "Artística",
    institution: "Fundação Eufraten",
    duration: "11 meses",
    attendance: "90%",
  },
  {
    course: "Programação para Hardware",
    institution: "SESI Santos Dumont",
    duration: "7 meses",
    attendance: "95% - Aluno Diamante",
  },
  {
    course: "Pacote Office",
    institution: "Fundação Bradesco",
    duration: "1 ano",
    attendance: "100%",
  },
  {
    course: "Inglês",
    institution: "Cidadão Pro Mundo",
    duration: "5 anos",
    attendance: "100%",
  },
];

export function Home() {
  return (
    <>
      <section className="py-5 bg-body-tertiary border-bottom">
        <div className="container">
          <div className="d-flex flex-column align-items-center text-center">

            {/* Avatar */}
            <img src={image} className="rounded-circle object-fit-cover border border-3 border-primary mt-n5" alt="Meu avatar" style={{ width: 160, height:160 }}/>

            {/* Texto */}
           <h1 className="fw-bold mb-1 title-name mt-3">
              Kauan Vinícius
            </h1>

            {/* Habilidade */}
            <p className="text-body-secondary fs-5 mb-4">
              Desenvolvedor Full-Stack Júnior
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

          <p className="text-body-secondary" style={{ textAlign: "justify" }}>
            Meu nome é Kauan Vinícius, tenho 17 anos, nascido em Itapira no
            interior do estado de São Paulo e morando atualmente em Campinas.
            Atuo na empresa Robert Bosch como Jovem Aprendiz, cursando o
            terceiro semestre de Desenvolvimento de Sistemas no SENAI Roberto
            Mange e sou estudante do 3º ano da Escola Estadual Dom Barreto no
            período noturno.
          </p>

          <p className="text-body-secondary" style={{ textAlign: "justify" }}>
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
            {educations.map((edu, index) => (
              <div key={index} className="col-md-6">
                <div className="card h-100 shadow-sm tech-card">
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
            {[
              {
                title: "Portfólio + Exercícios",
                desc: "Portfólio desenvolvido no SENAI com mais de 30 exercícios.",
                link: "https://github.com/kauanvinicius9/Portfolio-SENAI",
              },
              {
                title: "Livraria",
                desc: "Livraria com autenticação via JWT e consumo de API.",
                link: "https://github.com/kauanvinicius9/BookStore",
              },
              {
                title: "Cidade Inteligente",
                desc: "Projeto Full-Stack com autenticação via JWT.",
                link: "https://github.com/kauanvinicius9/IP-SmartCity",
              },
              {
                title: "Banco de Dados",
                desc: "Cadastro de usuários com SQLite.",
                link: "https://github.com/kauanvinicius9/Back-End",
              },
              {
                title: "API com Node.js",
                desc: "Consumo de API em Node JavaScript.",
                link: "https://github.com/kauanvinicius9/Serverless-NODE.JS",
              },
              {
                title: "Comando de Voz",
                desc: "Comando de voz do Google com Python puro.",
                link: "https://github.com/kauanvinicius9/Voice-Command",
              },
              {
                title: "FastAPI",
                desc: "Conceitos básicos de FastAPI com HTML.",
                link: "https://github.com/kauanvinicius9/FastAPI",
              },
              {
                title: "Tradutor",
                desc: "Tradutor em React e TailwindCSS.",
                link: "https://github.com/kauanvinicius9/R-Translator",
              },
            ].map((project, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow-sm tech-card">
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.desc}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Ver projeto
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section id="technologies" className="py-5 bg-body-tertiary">
        <div className="container">
          <h2 className="mb-4 text-center">Tecnologias</h2>

          <div className="row text-center g-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="col-6 col-md-3">
                <div className="card shadow-sm h-100 tech-card">
                  <div className="card-body d-flex align-items-center justify-content-center gap-2 flex-row">

                    {/* Imagem com as tecnologias */}
                    <img src={tech.logo} alt={tech.name} style={{ width: 25, height: 25 }}/>
                    <p className="fw-semibold mb-0">{tech.name}</p>
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

          <div className="row g-4">
            <div className="col-md-5">
              <ul className="list-unstyled" aria-label="Informações de contato">
                <li className="mb-2">
                  <strong>Email:</strong> saleskauan308@gmail.com
                </li>
                <li className="mb-2">
                  <strong>LinkedIn:</strong> Kauan Vinícius
                </li>
                <li className="mb-2">
                  <strong>GitHub:</strong> kauanvinicius9
                </li>
              </ul>
            </div>

            <div className="col-md-7">
              <Contact />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-3 bg-body-tertiary border-top">
        <div className="container text-center">
          <p className="mb-0 text-body-secondary">
            &copy; {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
