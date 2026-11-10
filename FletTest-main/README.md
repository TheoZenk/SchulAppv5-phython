# SchulApp – Python / Flet

Die bisherige Blau-Grün-Demo wurde durch eine native Flet-Oberfläche ersetzt. Oberfläche, Navigation und Anwendungslogik sind Python-Code; es wird keine HTML-/CSS-/JavaScript-WebView als App-Oberfläche gestartet.

## Voraussetzungen
- Python 3.11 oder neuer
- Flet 1.0.1 (wird über `uv sync` installiert)

## Start in VS Code

```powershell
uv sync
uv run python main_deklarativ.py
```

Alternativ:

```powershell
uv run python main_imperativ.py
```

Ohne uv:

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -e .
python main_deklarativ.py
```

## Enthaltene native Funktionen
- Noten nach Fach, Kategorie und Halbjahr erfassen und löschen
- Fachübersicht und gewichtete Fachdurchschnitte
- Fachgewichtung bearbeiten und Fächer entfernen
- Notenkategorien hinzufügen und gewichten
- Hausaufgaben mit Fälligkeitsdatum erfassen und als erledigt markieren
- Wochenstundenplan mit bis zu 15 Stunden, Fach, Raum und Lehrkraft
- Tests und Schulaufgabentermine erfassen und löschen
- Akzentfarben und lokale Speicherung
- SQLite-Datenbank `schulapp.db` im Projektordner

## Daten & bisherige Vorlage
Die ursprüngliche SchulApp liegt vollständig in `legacy_schulapp_source/` als Referenzkopie. Sie wird von der nativen Flet-Oberfläche nicht geladen. Die Dokumente im Ordner `docs/` bleiben unverändert erhalten.

## Noch nicht in die native Version portiert
Die frühere Supabase-Anmeldung/Cloud-Synchronisierung und der Screenshot-/OCR-Import des Stundenplans sind in dieser Python-Fassung noch nicht nachgebaut. Die bisherigen Dateien und SQL-Konfiguration sind in `legacy_schulapp_source/` erhalten. Lokale Daten liegen in `schulapp.db`; diese Datei regelmäßig sichern.

## Tests

```powershell
uv run pytest
```

## Android / iOS
Die App verwendet Flet-Steuerelemente statt einer eingebetteten Web-App. Für mobile Builds gelten zusätzlich die offiziellen Flet-Build-Voraussetzungen; iOS-Builds benötigen macOS und Xcode.
