"""SchulApp – native Python/Flet edition.

The app UI and application logic are Python. Data is stored locally in SQLite.
"""
from __future__ import annotations
from datetime import date, datetime, timedelta
from typing import Any
import flet as ft
from app.storage import Store

store = Store()
SUBJECTS = ["Deutsch", "Mathematik", "Englisch", "Latein", "Französisch", "Spanisch", "Biologie", "Chemie", "Physik", "Geschichte", "Geographie", "Sozialkunde", "Politik und Gesellschaft", "Musik", "Kunst", "Sport", "Informatik", "Ethik", "Religion", "Wirtschaft/Recht"]
DEFAULT_CATEGORIES = [
    {"key": "schulaufgaben", "label": "Schulaufgaben", "weight": 1.0},
    {"key": "tests", "label": "Tests", "weight": 1.0},
    {"key": "muendlich", "label": "Mündlich", "weight": 1.0},
    {"key": "sonstiges", "label": "Sonstiges", "weight": 1.0},
]
THEMES = {"Grün": "#a8d88b", "Blau": "#8fd3ff", "Lila": "#c7a8f5", "Wald": "#83c69c", "Bernstein": "#efc16f", "Rosé": "#e99ab4"}
DAYS = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"]

def iso_week_key(day: date) -> str:
    y, w, _ = day.isocalendar()
    return f"{y}-W{w:02d}"

def week_dates(key: str) -> list[date]:
    year, week = int(key[:4]), int(key[-2:])
    monday = date.fromisocalendar(year, week, 1)
    return [monday + timedelta(days=i) for i in range(5)]

def average(values: list[float]) -> float | None:
    return sum(values) / len(values) if values else None

def fmt(value: float | None, places: int = 1) -> str:
    return "–" if value is None else f"{value:.{places}f}".replace(".", ",")

def main(page: ft.Page) -> None:
    page.title = "SchulApp"
    page.theme_mode = ft.ThemeMode.DARK
    page.bgcolor = "#101311"
    page.padding = 0
    page.window_min_width = 360
    page.window_min_height = 650

    state: dict[str, Any] = {
        "page": "Noten", "term": str(store.get("term", "1")),
        "week": store.get("current_week", iso_week_key(date.today())),
    }
    accent = store.get("accent", THEMES["Grün"])
    subjects = store.get("subjects", [])
    grades = store.get("grades", [])
    homework = store.get("homework", [])
    assignments = store.get("assignments", [])
    categories = store.get("categories", DEFAULT_CATEGORIES)
    weeks = store.get("weeks", {})
    subject_weights = store.get("subject_weights", {})
    decimal_places = int(store.get("decimal_places", 1))

    def persist() -> None:
        store.set("subjects", subjects); store.set("grades", grades)
        store.set("homework", homework); store.set("assignments", assignments)
        store.set("categories", categories); store.set("weeks", weeks)
        store.set("subject_weights", subject_weights); store.set("term", state["term"])
        store.set("current_week", state["week"]); store.set("accent", accent)
        store.set("decimal_places", decimal_places)

    def text(value: str, size: int = 14, color: str | None = None, bold: bool = False) -> ft.Text:
        return ft.Text(value, size=size, color=color or "#f1f3ed", weight=ft.FontWeight.BOLD if bold else ft.FontWeight.NORMAL)

    def card(content: ft.Control, padding: int = 18) -> ft.Container:
        return ft.Container(content=content, bgcolor="#191d1a", border=ft.border.all(1, "#303832"), border_radius=18, padding=padding)

    def button(label: str, handler, *, primary: bool = False, expand: bool = False) -> ft.Button:
        return ft.Button(label, on_click=handler, bgcolor=accent if primary else "#29312b", color="#111710" if primary else "#edf2e9", expand=expand)

    def snack(message: str) -> None:
        page.show_snack_bar(ft.SnackBar(content=text(message)))

    header_title = ft.Text("Noten", size=26, weight=ft.FontWeight.BOLD, color="#f4f6f0")
    body = ft.Column(expand=True, scroll=ft.ScrollMode.AUTO, spacing=14)
    nav = ft.Row(spacing=8, alignment=ft.MainAxisAlignment.SPACE_AROUND)

    def subject_average(subject: str, term: str | None = None) -> float | None:
        items = [g for g in grades if g.get("subject") == subject and (term is None or str(g.get("semester", 1)) == term)]
        cat_avgs: list[tuple[float, float]] = []
        for category in categories:
            vals = [float(g["grade"]) for g in items if g.get("category") == category["key"]]
            av = average(vals)
            if av is not None:
                cat_avgs.append((av, float(category.get("weight", 1))))
        if not cat_avgs:
            return None
        return sum(a*w for a, w in cat_avgs) / sum(w for _, w in cat_avgs)

    def overall_average(term: str | None = None) -> float | None:
        vals = [(subject_average(s, term), float(subject_weights.get(s, 1))) for s in subjects]
        vals = [(v, w) for v, w in vals if v is not None and w > 0]
        return sum(v*w for v, w in vals) / sum(w for _, w in vals) if vals else None

    def add_subject(_: Any = None) -> None:
        name = subject_input.value.strip()
        if not name:
            snack("Bitte einen Fachnamen eingeben."); return
        if name not in subjects:
            subjects.append(name); persist(); render()
        subject_input.value = ""
        page.update()

    def add_grade(_: Any = None) -> None:
        subject = grade_subject.value.strip()
        try:
            value = float(grade_value.value.replace(",", "."))
            semester = int(grade_term.value or state["term"])
        except ValueError:
            snack("Bitte eine gültige Note und ein Halbjahr eingeben."); return
        if not subject or not 1 <= value <= 6 or not 1 <= semester <= 99:
            snack("Fach angeben, Note zwischen 1 und 6 und gültiges Halbjahr wählen."); return
        if subject not in subjects: subjects.append(subject)
        cat = (grade_category.value or "tests").strip().lower()
        if cat not in [c["key"] for c in categories]:
            cat = "sonstiges"
        grades.append({"id": datetime.now().timestamp(), "subject": subject, "grade": value, "category": cat, "semester": semester, "note": grade_note.value.strip()})
        grade_value.value = ""; grade_note.value = ""
        persist(); render()

    def delete_grade(grade_id: float) -> None:
        grades[:] = [g for g in grades if g.get("id") != grade_id]
        persist(); render()

    def add_homework(_: Any = None) -> None:
        subject, desc = hw_subject.value.strip(), hw_desc.value.strip()
        if not desc:
            snack("Bitte eine Aufgabenbeschreibung eingeben."); return
        homework.append({"id": datetime.now().timestamp(), "subject": subject or "Allgemein", "text": desc, "due": hw_due.value.strip()})
        hw_desc.value = ""; hw_due.value = ""
        persist(); render()

    def finish_homework(item_id: float) -> None:
        homework[:] = [h for h in homework if h.get("id") != item_id]
        persist(); render()

    def week_data() -> dict[str, Any]:
        return weeks.setdefault(state["week"], {"periods": 6, "entries": {}})

    def save_lesson(day_index: int, period: int, subject: str, room: str, teacher: str) -> None:
        data = week_data(); key = f"{day_index}-{period}"
        if subject:
            data["entries"][key] = {"subject": subject, "room": room, "teacher": teacher}
            if subject not in subjects: subjects.append(subject)
        else:
            data["entries"].pop(key, None)
        persist(); render()

    def add_assignment(_: Any = None) -> None:
        try: day_value = date.fromisoformat(assign_date.value)
        except ValueError:
            snack("Bitte ein Datum im Format JJJJ-MM-TT eingeben."); return
        if not assign_subject.value.strip():
            snack("Bitte ein Fach eingeben."); return
        try: period = int(assign_period.value)
        except ValueError:
            snack("Bitte eine gültige Stunde eingeben."); return
        if period < 1 or period > 15:
            snack("Die Stunde muss zwischen 1 und 15 liegen."); return
        assignments.append({"id": datetime.now().timestamp(), "date": day_value.isoformat(), "subject": assign_subject.value.strip(), "type": assign_type.value.strip() or "Test", "period": period})
        persist(); render()

    def delete_assignment(item_id: float) -> None:
        assignments[:] = [a for a in assignments if a.get("id") != item_id]
        persist(); render()

    def change_week(delta: int) -> None:
        dates = week_dates(state["week"])
        state["week"] = iso_week_key(dates[0] + timedelta(days=7*delta))
        persist(); render()

    def go_today(_: Any = None) -> None:
        state["week"] = iso_week_key(date.today()); persist(); render()

    def set_term(term: str) -> None:
        state["term"] = term; persist(); render()

    def set_theme(name: str) -> None:
        nonlocal accent
        accent = THEMES[name]; page.update(); persist(); render()

    def add_category(_: Any = None) -> None:
        label = new_category_name.value.strip()
        if not label:
            snack("Bitte einen Kategorienamen eingeben."); return
        key = "custom_" + str(int(datetime.now().timestamp()))
        categories.append({"key": key, "label": label, "weight": 1.0})
        new_category_name.value = ""
        persist(); render()

    def set_category_weight(key: str, raw: str) -> None:
        try:
            weight = min(2.0, max(0.1, float(raw.replace(",", "."))))
        except ValueError:
            snack("Gewichtung muss eine Zahl zwischen 0,1 und 2 sein."); return
        for category in categories:
            if category["key"] == key:
                category["weight"] = weight
        persist(); render()

    def set_subject_weight(subject: str, raw: str) -> None:
        try:
            weight = min(3.0, max(0.0, float(raw.replace(",", "."))))
        except ValueError:
            snack("Fachgewichtung muss zwischen 0 und 3 liegen."); return
        subject_weights[subject] = weight
        persist(); render()

    def remove_subject(subject: str) -> None:
        if subject in subjects:
            subjects.remove(subject)
        grades[:] = [g for g in grades if g.get("subject") != subject]
        subject_weights.pop(subject, None)
        persist(); render()

    def switch(tab: str) -> None:
        state["page"] = tab; render()

    # Inputs are created once so their values remain available during callbacks.
    subject_input = ft.TextField(label="Neues Fach", hint_text="z. B. Mathematik", expand=True)
    grade_subject = ft.TextField(label="Fach", hint_text="z. B. Mathematik", expand=True)
    grade_value = ft.TextField(label="Note (1–6)", width=125, keyboard_type=ft.KeyboardType.NUMBER)
    grade_category = ft.TextField(label="Kategorie", value="tests", width=150, hint_text="schulaufgaben / tests / muendlich / sonstiges")
    grade_term = ft.TextField(label="Halbjahr", value=state["term"], width=105, keyboard_type=ft.KeyboardType.NUMBER)
    grade_note = ft.TextField(label="Notiz (optional)", expand=True)
    hw_subject = ft.TextField(label="Fach", expand=True)
    hw_desc = ft.TextField(label="Hausaufgabe / Beschreibung", expand=True)
    hw_due = ft.TextField(label="Fällig am (JJJJ-MM-TT)", width=190, hint_text="2026-11-12")
    assign_date = ft.TextField(label="Datum (JJJJ-MM-TT)", value=date.today().isoformat(), width=190)
    assign_subject = ft.TextField(label="Fach", expand=True)
    assign_type = ft.TextField(label="Art", value="Test", width=140)
    assign_period = ft.TextField(label="Stunde", value="1", width=100, keyboard_type=ft.KeyboardType.NUMBER)
    new_category_name = ft.TextField(label="Neue Notenkategorie", hint_text="z. B. Referat", expand=True)

    def render_grades() -> list[ft.Control]:
        term = state["term"]
        shown = [g for g in grades if str(g.get("semester", 1)) == term] if term != "end" else grades
        avg = overall_average(None if term == "end" else term)
        result: list[ft.Control] = [card(ft.Column([
            text(f"{term + '. HALBJAHR' if term != 'end' else 'ENDNOTE'}", 11, accent, True),
            ft.Row([ft.Column([text("Alle Fächer", 24, bold=True), text(f"{len(shown)} NOTEN", 11, "#9aa69b")]), ft.Container(content=text(fmt(avg, decimal_places), 25, accent, True), width=76, height=76, border=ft.border.all(2, accent), border_radius=50, alignment=ft.Alignment.CENTER)], alignment=ft.MainAxisAlignment.SPACE_BETWEEN),
        ]))]
        result.append(ft.Row([button("1. HJ", lambda e: set_term("1"), primary=term == "1"), button("2. HJ", lambda e: set_term("2"), primary=term == "2"), button("Ende", lambda e: set_term("end"), primary=term == "end")], wrap=True))
        result.append(card(ft.Column([text("Fächer & Noten", 20, bold=True), ft.Row([subject_input, button("Fach +", add_subject, primary=True)]), ft.Row([grade_subject, grade_value], wrap=True), ft.Row([grade_category, grade_term], wrap=True), grade_note, button("Note speichern", add_grade, primary=True)])))
        for subject in sorted(set(subjects), key=lambda s: (subject_average(s, None if term == "end" else term) or 99, s)):
            sub_avg = subject_average(subject, None if term == "end" else term)
            entries = [g for g in shown if g.get("subject") == subject]
            weight_field = ft.TextField(label="Gewichtung (0–3)", value=str(subject_weights.get(subject, 1)), width=145)
            line = ft.Column([
                ft.Row([text(subject, 17, bold=True), text(fmt(sub_avg, decimal_places), 19, accent, True)], alignment=ft.MainAxisAlignment.SPACE_BETWEEN),
                ft.Row([weight_field, button("Gewicht speichern", lambda e, sub=subject, field=weight_field: set_subject_weight(sub, field.value)), button("Fach löschen", lambda e, sub=subject: remove_subject(sub))], wrap=True),
            ])
            grade_rows: list[ft.Control] = []
            for g in entries:
                grade_rows.append(ft.Row([
                    text(f"{g.get('category', '')}: Note {g.get('grade')} · HJ {g.get('semester', 1)}", 12),
                    button("Löschen", lambda e, gid=g["id"]: delete_grade(gid)),
                ], alignment=ft.MainAxisAlignment.SPACE_BETWEEN))
            if not grade_rows:
                grade_rows.append(text("Noch keine Noten eingetragen.", 12, "#9aa69b"))
            result.append(card(ft.Column([line] + grade_rows)))
        result.append(card(ft.Column([text("Durchschnitte", 18, bold=True), text(f"Schulaufgaben: {fmt(average([float(g['grade']) for g in shown if g.get('category') == 'schulaufgaben']), decimal_places)}"), text(f"Andere Kategorien: {fmt(average([float(g['grade']) for g in shown if g.get('category') != 'schulaufgaben']), decimal_places)}")])) )
        return result

    def render_homework() -> list[ft.Control]:
        result: list[ft.Control] = [card(ft.Column([text("Hausaufgaben hinzufügen", 20, bold=True), hw_subject, hw_desc, ft.Row([hw_due, button("Speichern", add_homework, primary=True)], wrap=True)]))]
        if not homework: result.append(card(text("Keine offenen Hausaufgaben.")))
        for item in sorted(homework, key=lambda h: h.get("due") or "9999"):
            due = item.get("due") or "Ohne Termin"
            result.append(card(ft.Row([ft.Column([text(item.get("subject", "Allgemein"), 15, accent, True), text(item.get("text", "")), text(f"Fällig: {due}", 11, "#9aa69b")], expand=True), button("Erledigt", lambda e, hid=item["id"]: finish_homework(hid))], alignment=ft.MainAxisAlignment.SPACE_BETWEEN)))
        result.append(card(ft.Column([text("Tests & Schulaufgaben", 19, bold=True), ft.Row([assign_type, assign_subject], wrap=True), ft.Row([assign_date, assign_period, button("Termin speichern", add_assignment, primary=True)], wrap=True)])))
        for item in sorted(assignments, key=lambda a: (a.get("date", ""), a.get("period", 0))):
            result.append(card(ft.Row([ft.Column([text(f"{item.get('type')} · {item.get('subject')}", 14, accent, True), text(f"{item.get('date')} · {item.get('period')}. Stunde", 12, "#9aa69b")], expand=True), button("Löschen", lambda e, aid=item["id"]: delete_assignment(aid))])))
        return result

    def render_timetable() -> list[ft.Control]:
        key = state["week"]; dates = week_dates(key); data = week_data(); entries = data.setdefault("entries", {})
        rows: list[ft.Control] = [card(ft.Row([button("‹", lambda e: change_week(-1)), ft.Column([text(f"{key} · {dates[0].strftime('%d.%m.')}–{dates[-1].strftime('%d.%m.%Y')}", 16, bold=True), text("Montag – Freitag", 11, "#9aa69b")], expand=True, horizontal_alignment=ft.CrossAxisAlignment.CENTER), button("›", lambda e: change_week(1)), button("Heute", go_today)], alignment=ft.MainAxisAlignment.SPACE_BETWEEN))]
        period_count = int(data.get("periods", 6))
        for period in range(1, period_count + 1):
            cells: list[ft.Control] = [ft.Container(content=text(f"{period}.", 12, accent, True), width=32, alignment=ft.Alignment.CENTER)]
            for day_idx, day in enumerate(DAYS):
                entry = entries.get(f"{day_idx}-{period}", {})
                label = entry.get("subject", "＋")
                room = entry.get("room", "")
                date_label = dates[day_idx].isoformat()
                marker = next((a.get("type", "Termin") for a in assignments if a.get("date") == date_label and int(a.get("period", 0)) == period), "")
                cell_controls = [text(label, 10, accent if label != "＋" else "#9aa69b", True), text(room, 9, "#9aa69b")]
                if marker:
                    cell_controls.append(text(marker, 8, "#efc16f", True))
                cells.append(ft.Container(content=ft.Column(cell_controls, spacing=2, horizontal_alignment=ft.CrossAxisAlignment.CENTER), bgcolor="#263029" if label != "＋" else "#1e241f", border=ft.border.all(1, "#364239"), border_radius=8, padding=5, expand=True, on_click=lambda e, d=day_idx, p=period: open_lesson_editor(d, p)))
            rows.append(ft.Row(cells, spacing=4))
        rows.append(card(ft.Column([text("Stundenplan bearbeiten", 18, bold=True), text("Tippe auf eine Zelle im Raster, um Fach, Raum und Lehrkraft einzutragen.", 12, "#9aa69b"), ft.Row([text(f"{len(entries)} Einträge · {period_count} Stunden", 12, accent)])])))
        rows.append(card(ft.Column([text("Stundenanzahl", 14, bold=True), ft.Row([button("−", lambda e: set_period_count(-1)), text(str(period_count), 18, accent, True), button("+", lambda e: set_period_count(1))], alignment=ft.MainAxisAlignment.CENTER)])))
        return rows

    def set_period_count(delta: int) -> None:
        data = week_data(); data["periods"] = max(1, min(15, int(data.get("periods", 6)) + delta)); persist(); render()

    def open_lesson_editor(day_idx: int, period: int) -> None:
        entry = week_data().get("entries", {}).get(f"{day_idx}-{period}", {})
        subject = ft.TextField(label="Fach", value=entry.get("subject", ""))
        room = ft.TextField(label="Raum", value=entry.get("room", ""))
        teacher = ft.TextField(label="Lehrkraft", value=entry.get("teacher", ""))
        def save_click(_: Any) -> None:
            save_lesson(day_idx, period, subject.value.strip(), room.value.strip(), teacher.value.strip())
            page.close(dlg)
        dlg = ft.AlertDialog(title=text(f"{DAYS[day_idx]} · {period}. Stunde", 18, bold=True), content=ft.Column([subject, room, teacher], tight=True, width=320), actions=[ft.TextButton("Abbrechen", on_click=lambda e: page.close(dlg)), ft.Button("Speichern", on_click=save_click, bgcolor=accent, color="#111710")])
        page.open(dlg)

    def render_settings() -> list[ft.Control]:
        result = [card(ft.Column([text("Darstellung", 20, bold=True), text("Akzentfarbe", 12, "#9aa69b"), ft.Row([button(name, lambda e, n=name: set_theme(n), primary=accent == color) for name, color in THEMES.items()], wrap=True), text("Deine Daten werden lokal in einer SQLite-Datenbank gespeichert.", 12, "#9aa69b")]))]
        category_controls: list[ft.Control] = [text("Notenkategorien & Gewichtung", 18, bold=True)]
        for category in categories:
            weight_input = ft.TextField(label=f"{category['label']} (0,1–2)", value=str(category.get("weight", 1)), width=180)
            category_controls.append(ft.Row([weight_input, button("Speichern", lambda e, key=category["key"], field=weight_input: set_category_weight(key, field.value))], wrap=True))
        category_controls.extend([ft.Row([new_category_name, button("Kategorie +", add_category, primary=True)], wrap=True)])
        result.append(card(ft.Column(category_controls)))
        result.append(card(ft.Column([text("Hinweis zur Datensicherheit", 16, bold=True), text("Die Datenbank schulapp.db bleibt im Projektordner. Sichere diese Datei regelmäßig. Cloud-Synchronisierung ist in dieser nativen Python-Version noch nicht angeschlossen.", 12, "#9aa69b")])))
        return result

    def render() -> None:
        nonlocal accent
        page.bgcolor = "#101311"
        current = state["page"]
        header_title.value = current
        body.controls.clear()
        if current == "Noten": body.controls.extend(render_grades())
        elif current == "Aufgaben": body.controls.extend(render_homework())
        elif current == "Stundenplan": body.controls.extend(render_timetable())
        else: body.controls.extend(render_settings())
        nav.controls = [button(name, lambda e, n=name: switch(n), primary=current == name, expand=True) for name in ["Noten", "Aufgaben", "Stundenplan", "Einstellungen"]]
        page.update()

    page.add(ft.Container(content=ft.Column([ft.Container(content=ft.Row([ft.Text("S", size=23, weight=ft.FontWeight.BOLD, color="#101311"), text("SchulApp", 21, bold=True), ft.Container(expand=True), button("⚙", lambda e: switch("Einstellungen"))], vertical_alignment=ft.CrossAxisAlignment.CENTER), padding=ft.padding.symmetric(horizontal=18, vertical=14)), ft.Container(content=header_title, padding=ft.padding.symmetric(horizontal=18, vertical=8)), ft.Container(content=body, expand=True, padding=ft.padding.symmetric(horizontal=14)), ft.Container(content=nav, padding=12, bgcolor="#191d1a")], expand=True), expand=True))
    render()

if __name__ == "__main__":
    ft.run(main)
