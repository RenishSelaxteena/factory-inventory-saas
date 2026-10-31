
import pytest
from fastapi.testclient import TestClient

from app.database import dependencies
from app.database.dependencies import get_db
from app.main import app


class FakeSession:
    def __init__(self):
        self.closed = False

    def close(self):
        self.closed = True


def test_get_db_creates_and_closes_session(monkeypatch):
    fake_session = FakeSession()

    monkeypatch.setattr(
        dependencies,
        "SessionLocal",
        lambda: fake_session,
    )

    db_generator = get_db()

    # The dependency should provide the created session.
    assert next(db_generator) is fake_session
    assert fake_session.closed is False

    # Finishing the generator should execute its cleanup.
    with pytest.raises(StopIteration):
        next(db_generator)

    assert fake_session.closed is True


def test_get_db_closes_session_after_exception(monkeypatch):
    fake_session = FakeSession()

    monkeypatch.setattr(
        dependencies,
        "SessionLocal",
        lambda: fake_session,
    )

    db_generator = get_db()

    assert next(db_generator) is fake_session

    # Simulate an exception occurring while the session is in use.
    with pytest.raises(RuntimeError, match="Simulated failure"):
        db_generator.throw(RuntimeError("Simulated failure"))

    assert fake_session.closed is True


def test_database_endpoint_supports_dependency_override(monkeypatch):
    fake_session = FakeSession()

    class FakeResult:
        def scalar_one(self):
            return "test_database"

    fake_session.execute = lambda statement: FakeResult()

    def override_get_db():
        try:
            yield fake_session
        finally:
            fake_session.close()

    monkeypatch.setitem(
        app.dependency_overrides,
        get_db,
        override_get_db,
    )

    with TestClient(app) as client:
        response = client.get("/health/database")

    assert response.status_code == 200
    assert response.json() == {
        "status": "healthy",
        "database": "test_database",
    }
    assert fake_session.closed is True
