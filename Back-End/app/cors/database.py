import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from dotenv import load_dotenv
load_dotenv() # Ponto chave para rodar

# Data Postgres
DATABASE_URL = os.getenv("DATABASE_URL")

# Tratativa de erro
if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL não foi identificada")

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)


Base = declarative_base()
Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()