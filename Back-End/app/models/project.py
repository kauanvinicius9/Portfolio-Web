from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from app.core.database import Base

class Projects(Base):
    __tablename__ = "projects"

    id=Column(Integer,primary_key=True,index=True)
    title=Column(String,nullable=False)
    description=Column(Text)
    technologies=Column(String)
    github_url=Column(String)
    demo_url=Column(String)
    created_at=Column(DateTime,default=datetime.utcnow)

    # Tabelas