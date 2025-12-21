from app.core.database import SessionLocal
from app.models.project import Project

db = SessionLocal()

projects=[
    Project(
        title="Portifólio Pessoa",
        description="Back-End utilizando FastAPI",
        technologies="FastAPI, Python, SQL",
        github_url="https://github.com/kauanvinicius9/Portfolio-V2",
        demo_url="https://..."
    ),
    Project(
        title="Sistema de Contatos",
        description="API REST",
        technologies="Python, SQLAlchemy",
        github_url="https://github.com/kauanvinicius9/Portfolio-V2",
        demo_url="https://..."
    )
]
db.add_all(projects)
db.commit()
db.close()

print("Seu banco de dados foi populado.")

# Salvando os dados co SQLAlchemy