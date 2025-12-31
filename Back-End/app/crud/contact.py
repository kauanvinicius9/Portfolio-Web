from sqlalchemy.orm import Session
from app.models.contact import Contacts
from app.schemas.contact import ContactsCreate

def create_contact(db: Session, contacts: ContactsCreate):
    db_contact = Contacts(**contacts.dict())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact