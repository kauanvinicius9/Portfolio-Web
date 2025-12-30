import { Link } from "react-router-dom";
import { Contact } from "../components/contacts";

<<<<<<< HEAD
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
    course: "Artítsica",
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

=======
>>>>>>> a20f152e067bf812d2afc539f1d85cc33fcdb4b8
export function Home() {
  return (
    <>
      {/* Início da página */}
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Kauan Vinícius</h1>
          <p className="lead mt-3">
            Desenvolvedor Full-Stack Júnior • Bosch Brasil • ETS Campinas
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
          <h2 className="mb-4 text-center">Sobre mim</h2>

          {/* Precisei aplicar um CSS nessa linha, pois o BOOTSTRAP não permite mais a função TEXT-JUSTIFY */}
          <p className="text-muted" style={{ textAlign: "justify" }}>
            Meu nome é Kauan Vinícius, tenho 17 anos de idade, nascido em
            Itapira no interior do estado de São Paulo, morando atualmente em
            Campinas - São Paulo. Atuo na empresa Robert Bosch como Jovem
            Aprendiz cursando o terceiro semestre de Desenvolvimento de Sistemas
            na escola técnica SENAI (Serviço Nacional da Indústria) Roberto
            Mange e sou estudante do 3° ano da Escola Estadual Dom Barreto no período
            noturno.
          </p>

          <p className="text-muted" style={{ textAlign: "justify" }}>
            Prezo muito pelo desenvolvimento de código limpo, organização,
            planejamentos e protótipos de projetos. Sou comunicativo, consigo me
            adaptar perfeitamente em projetos em equipe, e possuo um pouco de
            experiência em liderança, desenvolvimento de documentações
            profissionais para TCC e tabelas muito bem elaboradas para qualquer
            tipo de ocasião. Possuo inglês intermediário estudando atualmente na
            CPM (Cidadão Pro Mundo) com 5 ano de duração em parceria com a
            Univerdiade Presbiteriana Mackenzie.
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
                    {/* Medalha */}
                    <div className="fs-3 text-warning">🏅</div>

                    {/* Conteúdo */}
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

      {/* Meus projetos */}
      <section id="projects" className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Projetos</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Portifólio + Exercícios</h5>
                  <p className="card-text">
                    Portifólio desenvolvido no SENAI com mais de 30 exercícios
                    para praticar.
                  </p>
                  <Link
                    to="https://github.com/kauanvinicius9/Portfolio-SENAI"
                    className="btn btn-primary"
                  >
                    Ver projeto
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Livraria</h5>
                  <p className="card-text">
                    Livraria com autenticação via JWT e consumo de API.
                  </p>
                  <Link
                    to="https://github.com/kauanvinicius9/BookStore"
                    className="btn btn-primary"
                  >
                    Ver projeto
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Cidade Inteligente</h5>
                  <p className="card-text">
                    Projeto Full-Stack com autenticação via JWT.
                  </p>
                  <Link
                    to="https://github.com/kauanvinicius9/IP-SmartCity"
                    className="btn btn-primary"
                  >
                    Ver projeto
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Banco de Dados</h5>
                  <p className="card-text">
                    Formulário de cadastro onde os usuários serão guardados no
                    banco de dados SQLite.
                  </p>
                  <Link
                    to="https://github.com/kauanvinicius9/Back-End"
                    className="btn btn-primary"
                  >
                    Ver projeto
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">API com NODE.JS</h5>
                  <p className="card-text">
                    Consumo de API desenvolvido em Node JavaScript.
                  </p>
                  <Link
                    to="https://github.com/kauanvinicius9/Serverless-NODE.JS"
                    className="btn btn-primary"
                  >
                    Ver projeto
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Comando de Voz</h5>
                  <p className="card-text">
                    Comando de voz da Google com Python puro.
                  </p>
                  <Link
                    to="https://github.com/kauanvinicius9/Voice-Command"
                    className="btn btn-primary"
                  >
                    Ver projeto
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">FastAPI</h5>
                  <p className="card-text">
                    Conceitos básicos de FastAPI com HTML integrado.
                  </p>
                  <Link
                    to="https://github.com/kauanvinicius9/FastAPI"
                    className="btn btn-primary"
                  >
                    Ver projeto
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Tradutor</h5>
                  <p className="card-text">
                    Um pequeno tradutor criado em React e TailwindCSS.
                  </p>
                  <Link
                    to="https://github.com/kauanvinicius9/R-Translator"
                    className="btn btn-primary"
                  >
                    Ver projeto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologias que uso frequentemente e que conheço */}
      <section id="technologies" className="bg-light py-5">
        <section id="technologies" className="bg-light py-5">
          <div className="container">
            <h2 className="mb-4 text-center">Tecnologias</h2>

<<<<<<< HEAD
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
=======
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">HTML5</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">CSS3</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">JavaScript</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">React</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">FastAPI</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">Python</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">SQL</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">Insomnia</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">TypeScript</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">Django</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">Docker</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">Microsoft Azure</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">Bootstrap</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">TailwindCSS</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">Java</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3">
                <p className="fw-semibold">Ruby</p>
              </div>
>>>>>>> a20f152e067bf812d2afc539f1d85cc33fcdb4b8
            </div>
          </div>
        </section>
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

            {/* Formulário */}
            <div className="col-md-7">
              <Contact />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-dark text-light py-3">
        <div className="container text-center">
          <p className="mb-0">&copy; Portifólio 2026 Kauan Vinícius</p>
        </div>
      </footer>
    </>
  );
}
