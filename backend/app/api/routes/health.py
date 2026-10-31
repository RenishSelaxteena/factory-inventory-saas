
from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.database.dependencies import get_db

router = APIRouter(
    prefix="/health",
    tags=["Health"],
)


@router.get("")
def health_check():
    return {"status": "healthy"}


@router.get("/database")
def database_health_check(db: Session = Depends(get_db)):
    database_name = db.execute(
        text("SELECT current_database()")
    ).scalar_one()

    return {
        "status": "healthy",
        "database": database_name,
    }
