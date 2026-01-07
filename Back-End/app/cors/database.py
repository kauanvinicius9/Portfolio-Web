from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

# Data Postgres
DATABASE_URL = os.getenv("postgresql://portfolio_db_yep8_user:wtX8nfAyUOlkGgInDENnbtdsNjimek5M@dpg-d5eogiruibrs738sj3rg-a/portfolio_db_yep8")

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# Define a base
Base = declarative_base()

# Cria as tabelas que ainda não existem
Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()