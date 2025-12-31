from pydantic import BaseModel
from datetime import datetime

class ProjectsCreate(BaseModel):
    title: str
    description: str | None = None
    technologies: str | None = None
    github_url: str | None = None
    demo_url: str | None = None

class ProjectsResponse(ProjectsCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True