from fastapi import APIRouter, Depends
from pydantic import BaseModel

router = APIRouter()

class ContactsCreate(BaseModel):
    name: str
    email: str
    message: str

# Método GET
@router.get("/")
def list_contacts():
    return {"msg": "contacts ok"}

# Método POST
@router.post("/")
def create_contacts(contacts: ContactsCreate):
    return {
        "message": "Contato recebido",
        "data": contacts
    }