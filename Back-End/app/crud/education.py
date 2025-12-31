from sqlalchemy.orm import Session
from app.models.education import Educations
from app.schemas.education import EducationsCreate

def create_education(db: Session, educations: EducationsCreate):
    db_education = Educations(**educations.model_dump())
    db.add(db_education)
    db.commit()
    db.refresh(db_education)
    return db_education

def get_educations(db: Session):
    return db.query(Educations).all()
