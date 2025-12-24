export function Home() {
  return (
    <>
      {/* Início da página */}
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">
            Kauan Vinícius
          </h1>
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
          <h2 className="mb-4">Sobre mim</h2>

          {/* Precisei aplicar um CSS nessa linha, pois o BOOTSTRAP não permite mais a função TEXT-JUSTIFY */}
          <p className="text-muted" style={{ textAlign: 'justify' }}>
            Meu nome é Kauan Vinícius, tenho 17 anos de idade, nascido em Itapira no interior do 
            estado de São Paulo, morando atualmente em Campinas - São Paulo. Atuo na empresa
            Robert Bosch como Jovem Aprendiz cursando o terceiro semestre de Desenvolvimento de
            Sistemas na escola técnica SENAI (Serviço Nacional da Indústria) Roberto Mange.
           </p>

          <p className="text-muted" style={{ textAlign: 'justify' }}>
            Prezo muito pelo desenvolvimento de código limpo, organização, planejamentos e protótipos
            de projetos. Sou comunicativo, consigo me adaptar perfeitamente em projetos em equipe, e
            possuo um pouco de experiência em liderança, desenvolvimento de documentações
            profissionais para TCC e tabelas muito bem elaboradas para qualquer tipo de ocasião.
          </p>
        </div>
      </section>

      {/* Meus projetos */}
      <section id="projects" className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Projetos</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Portifólio + Exercícios</h5>
                  <p className="card-text">
                    Portifólio desenvolvido no SENAI com mais de 30 exercícios para praticar.
                  </p>
                  <a href="#" className="btn btn-sm btn-primary">
                    Ver projeto
                  </a>
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
                  <a href="#" className="btn btn-sm btn-primary">
                    Ver projeto
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Banco de Dados</h5>
                  <p className="card-text">
                   Formulário de cadastro onde os usuários serão guardados no banco de dados SQLite.
                  </p>
                  <a href="#" className="btn btn-sm btn-primary">
                    Ver projeto
                  </a>
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
                  <a href="#" className="btn btn-sm btn-primary">
                    Ver projeto
                  </a>
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
                  <a href="#" className="btn btn-sm btn-primary">
                    Ver projeto
                  </a>
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
                  <a href="#" className="btn btn-sm btn-primary">
                    Ver projeto
                  </a>
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
                  <a href="#" className="btn btn-sm btn-primary">
                    Ver projeto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-dark text-ligh/t py-4">
        <div className="container text-center">
          <p className="mb-1">© 2026 Kauan Vinícius</p>
        </div>
      </footer>
    </>
  )
}
