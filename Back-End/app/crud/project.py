from sqlalchemy.orm import Session
from app.models.project import Projects
from app.schemas.project import ProjectsCreate

def create_project(db: Session, projects: ProjectsCreate):
    db_project = Projects(**projects.dict())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

def get_projects(db: Session):
    return db.query(Projects).all()