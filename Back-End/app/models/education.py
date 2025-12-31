from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from app.core.database import Base

class Educations(Base):
    __tablename__ = "educations"

    id = Column(Integer, primary_key=True, index=True)
    course = Column(String, nullable=False)
    institution = Column(String, nullable=False)
    duration = Column(String, nullable=False)
    attendance = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())