from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.deps import get_db
from app.schemas.contact import ContactCreate, ContactResponse
from app.crud import contact as crud

router = APIRouter()

@router.post("/", response_model=ContactResponse)
def send_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    return crud.create_contact(db, contact)
