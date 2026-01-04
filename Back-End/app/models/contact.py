from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from datetime import datetime
from app.cors.database import Base

class Contact(Base):
    __tablename__ = "contacts"

    id=Column(Integer,primary_key=True,index=True)
    name=Column(String,nullable=False)
    email=Column(String,nullable=False)
    message=Column(Text,nullable=False)
    created_at=Column(DateTime(timezone=True),server_default=func.now())

    # SQL real abstraído