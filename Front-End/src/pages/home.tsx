import { Link } from "react-router-dom";
import { Contact } from "../components/contacts"; 

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
            Mange.
          </p>

          <p className="text-muted" style={{ textAlign: "justify" }}>
            Prezo muito pelo desenvolvimento de código limpo, organização,
            planejamentos e protótipos de projetos. Sou comunicativo, consigo me
            adaptar perfeitamente em projetos em equipe, e possuo um pouco de
            experiência em liderança, desenvolvimento de documentações
            profissionais para TCC e tabelas muito bem elaboradas para qualquer
            tipo de ocasião.
          </p>
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
                  <Link to="/fastapi.tsx" className="btn btn-primary">
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
                  <Link to="/fastapi" className="btn btn-primary">
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
                  <Link to="/fastapi" className="btn btn-primary">
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
                  <Link to="/fastapi" className="btn btn-primary">
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
                  <Link to="/fastapi" className="btn btn-primary">
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
                  <Link to="/fastapi" className="btn btn-primary">
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
                  <Link to="/fastapi" className="btn btn-primary">
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
                  <Link to="/fastapi" className="btn btn-primary">
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
        <div className="container">
          <h2 className="mb-4 text-center">Tecnologias</h2>

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
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Contato</h2>

          <div className="row g-4">
            <div className="col-md-5">
              <p className="text-muted" style={{ textAlign: "justify" }}>
                Sinta-se à vontade caso precise entrar em contato para
                esclarecimento de dúvidas, contribuições para projetos,
                ou sugestões de melhorias!
              </p>

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
              <Contact/>
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
