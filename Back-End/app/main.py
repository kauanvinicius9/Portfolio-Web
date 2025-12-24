from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Integração com Front-End REACT
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)

@app.get("/health")
def health():
    return {"status": "ok"}

# Comando principal, onde testamos a API e ver se está rodando