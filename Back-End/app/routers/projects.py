from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.deps import get_db
from app.schemas.project import ProjectCreate, ProjectResponse
from app.crud import project as crud

router = APIRouter()

@router.post("/", response_model=ProjectResponse)
def create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    return crud.create_project(db, project)

@router.get("/", response_model=list[ProjectResponse])
def list_projects(db: Session=Depends(get_db)):
    return crud.get_projects(db)