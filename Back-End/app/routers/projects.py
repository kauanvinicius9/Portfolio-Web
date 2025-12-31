from fastapi import APIRouter, Depends

router = APIRouter()

@router.get("/")
def list_projects():
    return {"msg": "projects ok"}