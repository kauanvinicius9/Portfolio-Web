from app.cors.database import SessionLocal, Base, engine
from app.models.project import Project
from app.models.contact import Contact
from app.models.education import Education

# Garantimos que as 3 tabelas existem
Base.metadata.create_all(bind=engine)
db = SessionLocal()

# Projetos tipados
projects = [
    Project(
        title="Portfólio + Exercícios",
        description="Portfólio desenvolvido no SENAI com mais de 30 exercícios para praticar.",
        technologies="HTML, CSS JavaScript",
        github_url="https://github.com/kauanvinicius9/Portfolio-SENAI",
        demo_url=None
    ),
    Project(
        title="Livraria",
        description="Livraria com autenticação via JWT e consumo de API.",
        technologies="Python, Angular, Django",
        github_url="https://github.com/kauanvinicius9/BookStore",
        demo_url=None
    ),
    Project(
        title="Cidade Inteligente",
        description="Projeto Full-Stack com autenticação via JWT.",
        technologies="Python, Django, Node, JWT",
        github_url="https://github.com/kauanvinicius9/IP-SmartCity",
        demo_url=None
    ),
    Project(
        title="Banco de Dados",
        description="Formulário de cadastro onde os usuários serão guardados no banco de dados SQLite.",
        technologies="Python, Django, HTML, TailwindCSS, Bootstrap, SQL",
        github_url="https://github.com/kauanvinicius9/Back-End",
        demo_url=None
    ),
    Project(
        title="API com NODE.JS",
        description="Consumo de API desenvolvido em Node JavaScript.",
        technologies="Node.JS",
        github_url="https://github.com/kauanvinicius9/Serverless-NODE.JS",
        demo_url=None
    ),
    Project(
        title="Comando de Voz",
        description="Comando de voz da Google com Python puro.",
        technologies="Python",
        github_url="https://github.com/kauanvinicius9/Voice-Command",
        demo_url=None
    ),
    Project(
        title="FastAPI",
        description="Conceitos básicos de FastAPI com HTML integrado.",
        technologies="Python, HTML, TailwindCSS FastAPI",
        github_url="https://github.com/kauanvinicius9/FastAPI",
        demo_url=None
    ),
    Project(
        title="Tradutor",
        description="Um pequeno tradutor criado em React e TailwindCSS.",
        technologies="React, HTML, TailwindCSS",
        github_url="https://github.com/kauanvinicius9/R-Translator",
        demo_url=None
    )
]

# Contato de exemplo. Para cada pessoa que me enviar um e-mail, ela será salva no banco
# de dados
contacts = [
    Contact(
        name="Contato Teste",
        email="teste@email.com",
        message="Mensagem de teste"
    )
]

# Minhas formações e certificações
educations = [
    Education(
        course="Desenvolvimento de Sistemas",
        institution="SENAI Roberto Mange",
        duration="1 ano e 6 meses",
        attendance="100%"
    ),
    Education(
        course="Computação",
        institution="Fundação Eufraten",
        duration="11 meses",
        attendance="95%"
    ),
    Education(
        course="Artítsica",
        institution="Fundação Eufraten",
        duration="11 meses",
        attendance="90%"
    ),
    Education(
        course="Programação para Hardware",
        institution="SESI Santos Dumont",
        duration="7 meses",
        attendance="95% - Aluno Diamante"
    ),
    Education(
        course="Pacote Office",
        institution="Fundação Bradesco",
        duration="1 ano",
        attendance="100%"
    ),
    Education(
        course="Inglês",
        institution="Cidadão Pro Mundo",
        duration="5 anos",
        attendance="100%"
    ),
]

# Salvamentos no Banco de Dados
db.add_all(projects)
db.add_all(contacts)
db.add_all(educations)
db.commit()
db.close()

# Print para afirmar que o banco foi populado
print("Seu banco foi populado")