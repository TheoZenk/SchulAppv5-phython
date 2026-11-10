"""SQLite persistence for the native Flet SchulApp."""
from __future__ import annotations
import json
import sqlite3
from pathlib import Path
from typing import Any

DB_PATH = Path(__file__).resolve().parents[1] / "schulapp.db"

class Store:
    def __init__(self, path: Path = DB_PATH):
        self.path = path
        self.path.parent.mkdir(parents=True, exist_ok=True)
        with self.connect() as db:
            db.execute("CREATE TABLE IF NOT EXISTS kv (key TEXT PRIMARY KEY, value TEXT NOT NULL)")

    def connect(self):
        db = sqlite3.connect(self.path)
        db.row_factory = sqlite3.Row
        return db

    def get(self, key: str, default: Any):
        with self.connect() as db:
            row = db.execute("SELECT value FROM kv WHERE key=?", (key,)).fetchone()
        if not row:
            return default
        try:
            return json.loads(row["value"])
        except (TypeError, json.JSONDecodeError):
            return default

    def set(self, key: str, value: Any) -> None:
        encoded = json.dumps(value, ensure_ascii=False)
        with self.connect() as db:
            db.execute("INSERT INTO kv(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value", (key, encoded))

    def delete(self, key: str) -> None:
        with self.connect() as db:
            db.execute("DELETE FROM kv WHERE key=?", (key,))
