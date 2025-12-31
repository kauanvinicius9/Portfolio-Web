from pydantic import BaseModel
from datetime import datetime

class ContactsCreate(BaseModel):
    name: str
    email: str
    message: str

class ContactsResponse(ContactsCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True