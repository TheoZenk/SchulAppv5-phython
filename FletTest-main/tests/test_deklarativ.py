"""Unit tests for the native SchulApp data layer and calculations."""
from pathlib import Path
from app.storage import Store
from main_deklarativ import average, fmt, iso_week_key, week_dates
from datetime import date


def test_average_and_formatting():
    assert average([1.0, 2.0, 3.0]) == 2.0
    assert average([]) is None
    assert fmt(2.25, 1) == "2,2"
    assert fmt(None) == "–"


def test_iso_week_roundtrip():
    day = date(2026, 11, 10)
    key = iso_week_key(day)
    assert key == "2026-W46"
    assert week_dates(key)[0].isoweekday() == 1
    assert day in week_dates(key)


def test_store_roundtrip(tmp_path: Path):
    store = Store(tmp_path / "test.db")
    store.set("grades", [{"subject": "Mathematik", "grade": 2}])
    assert store.get("grades", []) == [{"subject": "Mathematik", "grade": 2}]
    assert store.get("missing", []) == []
