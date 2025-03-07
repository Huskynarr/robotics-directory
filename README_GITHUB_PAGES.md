# Robotics Directory - GitHub Pages Setup

Diese Anleitung erklärt, wie du die Robotics Directory als interaktive Webseite mit GitHub Pages einrichtest.

## Übersicht

Die Robotics Directory wurde von einer einfachen README-Tabelle zu einer vollständig interaktiven Webseite umgewandelt. Die Webseite bietet:

- Kategorisierte Ansicht von Humanoiden und Roboterhunden
- Suchfunktion für schnelles Finden von Robotern
- Filter nach Hersteller und Preis
- Detailansicht mit allen Spezifikationen
- Responsive Design für alle Geräte

## GitHub Pages Einrichtung

1. **Repository-Einstellungen öffnen**
   - Gehe zu deinem Repository auf GitHub
   - Klicke auf "Settings" (Zahnrad-Symbol)

2. **GitHub Pages aktivieren**
   - Scrolle nach unten zum Abschnitt "GitHub Pages"
   - Wähle unter "Source" den Branch "main" aus
   - Klicke auf "Save"

3. **Webseite aufrufen**
   - Nach der Aktivierung wird dir eine URL angezeigt (z.B. https://huskynarr.github.io/robotics-directory/)
   - Die Veröffentlichung kann einige Minuten dauern

## Bilder hinzufügen

Um die Webseite mit Bildern zu vervollständigen:

1. Lade Bilder der Roboter in die entsprechenden Verzeichnisse hoch:
   - Humanoide Roboter: `/images/humanoid/`
   - Roboterhunde: `/images/robodog/`

2. Benenne die Bilder entsprechend dem Robotermodell, wie in der `data.js` Datei angegeben:
   - Beispiel: `ameca.jpg`, `spot.jpg`, usw.

3. Ersetze das Platzhalter-Bild (`placeholder.jpg`) durch ein generisches Roboter-Bild

## Anpassung und Erweiterung

### Neue Roboter hinzufügen

Um neue Roboter zur Datenbank hinzuzufügen:

1. Öffne die Datei `js/data.js`
2. Füge einen neuen Eintrag zum entsprechenden Array hinzu (humanoid oder robodog)
3. Stelle sicher, dass alle erforderlichen Felder vorhanden sind
4. Lade ein Bild für den neuen Roboter hoch

### Design anpassen

Das Design kann über die CSS-Datei angepasst werden:

1. Öffne die Datei `css/style.css`
2. Passe die Farbvariablen im `:root`-Selektor an
3. Ändere Schriftarten, Abstände und andere Stilelemente nach Bedarf

## Lokale Entwicklung

Um die Webseite lokal zu entwickeln:

1. Klone das Repository auf deinen Computer
2. Öffne die `index.html` Datei in einem Browser
3. Für eine bessere Entwicklungsumgebung kannst du einen lokalen Server verwenden:
   - Mit Python: `python -m http.server`
   - Mit Node.js: `npx serve`

## Fehlerbehebung

Wenn Bilder nicht angezeigt werden:
- Überprüfe, ob die Dateinamen in `data.js` mit den tatsächlichen Bilddateien übereinstimmen
- Stelle sicher, dass die Bilder im richtigen Verzeichnis liegen
- Überprüfe die Dateipfade (Groß-/Kleinschreibung beachten)

## Mitwirken

Beiträge zur Verbesserung der Webseite sind willkommen! Siehe [CONTRIBUTING.md](CONTRIBUTING.md) für Details.
