from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.contact import router as contacts_router
from app.routers.projects import router as projects_router
from app.routers.education import router as educations_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://kauanvinicius-onrender-com-wvfo.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contacts_router, prefix="/contacts", tags=["Contacts"])
app.include_router(projects_router, prefix="/projects", tags=["Projects"])
app.include_router(educations_router, prefix="/educations", tags=["Educations"])

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/")
def root():
    return {
        "message:": "Back-End funcionando",
        "documentação": "http://127.0.0.1:8000/docs"
    }
