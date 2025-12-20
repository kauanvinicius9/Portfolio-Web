from pydantic import BaseModel
from datetime import datetime

class ProjectCreate(BaseModel):
    title: str
    description: str | None = None
    technologies: str | None = None
    github_url: str | None = None
    demo_url: str | None = None

class ProjectResponse(ProjectCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True