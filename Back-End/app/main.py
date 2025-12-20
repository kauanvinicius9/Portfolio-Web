from fastapi import FastAPI
from app.core.database import Base, engine
from app.models import project, contact
from app.routers import projects, contacts

app = FastAPI(title="Portifólio Pessoal")

Base.metadata.create_all(bind=engine)

app.include_router(projects.router, prefix="/projects", tags=["Projects"])
app.include_router(contacts.router, prefix="/contacts", tags=["Contacts"])

@app.get("/")
def read_root():
    return {"status": "ok"}