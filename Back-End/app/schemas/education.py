from pydantic import BaseModel
from datetime import datetime

class EducationsBase(BaseModel):
    course: str
    institution: str
    duration: str
    attendance: str

class EducationsCreate(EducationsBase):
    pass

class Educations(EducationsBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
