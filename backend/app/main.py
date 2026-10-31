from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.database.dependencies import get_db

app = FastAPI(
    title="Factory Inventory SaaS API",
    description="Backend API for the Factory Inventory SaaS application.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", tags=["Health"])
def health_check():
    return {"status": "healthy"}


@app.get("/health/database", tags=["Health"])
def database_health_check(db: Session = Depends(get_db)):
    database_name = db.execute(
        text("SELECT current_database()")
    ).scalar_one()

    return {
        "status": "healthy",
        "database": database_name,
    }