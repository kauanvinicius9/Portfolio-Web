from fastapi import APIRouter, Depends

router = APIRouter()

@router.get("/")
def list_educations():
    return {"message": "educations ok"}