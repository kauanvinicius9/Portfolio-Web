from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.schemas.contact import ContactsCreate
from app.models.contact import Contacts
from app.core.database import get_db

router = APIRouter()

@router.get("/")
def list_educations():
    return {"message": "contacts ok"}

@router.post("/")
def create_contact(
    contact: ContactsCreate,
    db: Session = Depends(get_db)
):
    new_contact = Contacts(
        name=contact.name,
        email=contact.email,
        message=contact.message,
    )

    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)
    
    return new_contact 