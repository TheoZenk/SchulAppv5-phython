# SchulApp – E-Mail-Bestätigung aktivieren

Damit bei jeder Account-Erstellung eine Bestätigungs-E-Mail verlangt wird, muss das einmal im Supabase-Dashboard aktiviert werden. Das kann eine reine Browser-App nicht selbst sicher über die Auth-Admin-API ändern.

## 1. E-Mail-Bestätigung einschalten

Supabase → **Authentication → Providers → Email**

Dort **Confirm email / E-Mail bestätigen** einschalten und speichern.

Danach gilt:
- Account erstellen → Supabase verschickt eine Bestätigungs-E-Mail.
- Der Benutzer muss den Link anklicken.
- Erst danach kann er sich anmelden.

## 2. Schöne Bestätigungs-E-Mail

Supabase → **Authentication → Email Templates → Confirm signup**

Du kannst dort diese Vorlage verwenden:

```html
<div style="margin:0;padding:40px 16px;background:#f4f7f2;font-family:Arial,sans-serif;color:#172019;">
  <div style="max-width:560px;margin:auto;background:#ffffff;border-radius:24px;padding:36px;box-shadow:0 12px 40px rgba(20,40,25,.10);">
    <div style="font-size:14px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#5f785f;">SCHULAPP</div>
    <h1 style="font-size:32px;margin:14px 0 10px;">Willkommen bei der SchulApp 👋</h1>
    <p style="font-size:16px;line-height:1.6;color:#536055;">Dein Account wurde erstellt. Bestätige jetzt deine E-Mail-Adresse, damit du deine Noten, deinen Stundenplan und deine Aufgaben sicher auf mehreren Geräten synchronisieren kannst.</p>
    <div style="margin:28px 0;text-align:center;">
      <a href="{{ .ConfirmationURL }}" style="display:inline-block;padding:14px 22px;border-radius:14px;background:#b9e89b;color:#172019;text-decoration:none;font-weight:800;">E-Mail bestätigen</a>
    </div>
    <p style="font-size:13px;line-height:1.5;color:#7a847c;">Wenn du diesen Account nicht erstellt hast, kannst du diese E-Mail ignorieren.</p>
  </div>
</div>
```

## 3. Wichtig bei lokalen Tests

Wenn du die App direkt per `file://` öffnest, funktionieren Auth-Weiterleitungen je nach Browser nicht zuverlässig. Für den normalen Betrieb sollte die SchulApp über einen Webserver/Hosting laufen.
