from fastapi import APIRouter, Depends

router = APIRouter()

@router.get("/")
def list_contacts():
    return {"msg": "contacts ok"}