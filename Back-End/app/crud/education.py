from sqlalchemy.orm import Session
from app.models.education import Education
from app.schemas.education import EducationCreate

def create_education(db: Session, education: EducationCreate):
    db_education = Education(**education.model_dump())
    db.add(db_education)
    db.commit()
    db.refresh(db_education)
    return db_education

def get_educations(db: Session):
    return db.query(Education).all()
