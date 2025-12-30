from pydantic import BaseModel
from datetime import datetime

class EducationBase(BaseModel):
    course: str
    institution: str
    duration: str
    attendance: str

class EducationCreate(EducationBase):
    pass

class Education(EducationBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
