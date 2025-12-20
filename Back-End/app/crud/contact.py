from sqlalchemy.orm import Session
from app.models.contact import Contact
from app.schemas.contact import ContactCreate

def create_contact(db: Session, contact: ContactCreate):
    db_contact = Contact(**contact.dict())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact