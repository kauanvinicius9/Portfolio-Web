from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.deps import get_db
from app.schemas.education import Education, EducationCreate
from app.crud.education import create_education, get_educations

router = APIRouter(prefix="/educations", tags=["Educations"])

@router.get("/", response_model=list[Education])
def read_educations(db: Session = Depends(get_db)):
    return get_educations(db)

@router.post("/", response_model=Education)
def create(db: Session = Depends(get_db), education: EducationCreate = None):
    return create_education(db, education)
