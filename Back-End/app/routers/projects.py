from fastapi import APIRouter, Depends

router = APIRouter()

@router.get("/")
def list_projects():
    return {"message": "projects ok"}