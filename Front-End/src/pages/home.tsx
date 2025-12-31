import { Contact } from "../components/contacts";

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "FastAPI",
  "Python",
  "SQL",
  "Insomnia",
  "TypeScript",
  "Django",
  "Docker",
  "Microsoft Azure",
  "Bootstrap",
  "TailwindCSS",
  "Java",
  "Ruby",
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
    institution: "ONG Fundação Eufraten",
    duration: "11 meses",
    attendance: "95%",
  },
  {
    course: "Artística",
    institution: "ONG Fundação Eufraten",
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
      {/* Hero */}
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Kauan Vinícius</h1>
          <p className="lead mt-3">
            Desenvolvedor Full-Stack Júnior
          </p>

          <div className="mt-4">
            <a href="#projects" className="btn btn-primary btn-lg me-2">
              Ver Projetos
            </a>
            <a href="#contact" className="btn btn-outline-light btn-lg">
              Contato
            </a>
          </div>
        </div>
      </section>

      {/* Sobre mim */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Sobre</h2>

          <p className="text-muted" style={{ textAlign: "justify" }}>
            Meu nome é Kauan Vinícius, tenho 17 anos, nascido em Itapira no
            interior do estado de São Paulo e morando atualmente em Campinas.
            Atuo na empresa Robert Bosch como Jovem Aprendiz, cursando o terceiro
            semestre de Desenvolvimento de Sistemas no SENAI Roberto Mange e sou
            estudante do 3º ano da Escola Estadual Dom Barreto no período
            noturno.
          </p>

          <p className="text-muted" style={{ textAlign: "justify" }}>
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
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Formações</h2>

          <div className="row g-4">
            {educations.map((edu, index) => (
              <div key={index} className="col-md-6">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex gap-3">
                    <div className="fs-3 text-warning">🏅</div>

                    <div>
                      <h5 className="card-title mb-1">{edu.course}</h5>
                      <p className="mb-1 text-muted">{edu.institution}</p>
                      <small className="text-secondary">
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
      <section id="projects" className="bg-light py-5">
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
                <div className="card h-100 shadow-sm">
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
      <section id="technologies" className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Tecnologias</h2>

          <div className="row text-center g-4">
            {technologies.map((tech) => (
              <div key={tech} className="col-6 col-md-3">
                <div className="card shadow-sm h-100">
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <p className="fw-semibold mb-0">{tech}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Contato</h2>

          <div className="row g-4">
            <div className="col-md-5">
              <ul className="list-unstyled">
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
      <footer className="bg-dark text-light py-3">
        <div className="container text-center">
          <p className="mb-0">&copy; Kauan Vinícius - Todos os direitos reservados 2026</p>
        </div>
      </footer>
    </>
  );
}
