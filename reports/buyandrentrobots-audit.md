# BuyAndRentRobots directory audit

Inventory captured: 2026-11-01; reviewed additions updated: 2026-11-02. Source: <https://buyandrentrobots.com/directory>.

The public inventory contains **862 listings and 412 companies**. Paginated API
responses, the sitemap and the server-rendered robot listing agree on listing IDs.
Company API, sitemap and statistics agree. This establishes inventory coverage,
not validation of every detail page or product.

The provisional classification yields **348 deduplicated model/series records**:
335 concrete candidates and 13 series across 99 proposed product brands. Separately
counted listings include 94 services, 260 nonproducts and 122 unresolved entries.
One hundred and thirteen of the 122 originally unresolved listings have separate,
dated reviews: eighteen components, five software platforms, seven service
offerings, five educational lab/program services, six integrated robotic
systems, seven hand-guided inspection/lifting aids or application offers,
thirteen generic product ranges without identified catalog models, sixteen mapped
product families and thirty-six concrete models. Source classifications are
retained unchanged; 9 listings still await review.
See `listing-reviews.json` and `coverage.json`.
Model/series counts are deduplicated; these figures cannot be summed as though
they counted the same unit. Company roles are source-derived heuristics, not
independently verified business identities.

The early detail-page collector matched a hidden JavaScript error fallback and
cannot establish whether individual pages exist. Later manual probes returned
HTTP 429. Further requests stopped after confirmation; earlier retries were part
of the flawed initial run. All 862 product detail checks remain pending content
validation. Company checks recorded 98 HTTP 200 responses and 314 failed or
rate-limited responses; HTTP status alone does not validate content.

The updated collector makes detail checks opt-in and stops further network calls
after HTTP 429. Offline mode rebuilds from saved evidence without HTTP and retains
historical limitations. Incomplete inventories cannot replace complete output.

Features are controlled factual themes, not copied marketing paragraphs. Leading
themes among the 348 candidates include service tasks (131), delivery (85),
autonomous operation (52), floor cleaning (38) and humanoid interaction (36).
Categories alone no longer imply autonomous cleaning, and a reference to LiDAR,
a forklift or an underwater vehicle no longer implies navigation, autonomy or
inspection respectively. These are directory themes, not verified specifications.

The extraction now retains all recognized themes rather than stopping at five.
All source listing themes for a deduplicated model are merged, with each feature's
listing IDs and URLs retained. The 348 model/series records contain 702 theme
assignments (691 before the latest extraction revision); all 862 listings contain 1,464 (previously 1,446).
Company descriptions contribute 545 theme assignments across 210 source company
records, with 466 supplied use cases across 95 records. These are shown separately
from product/service listing themes. All counts include category positioning and
do not establish uniqueness or exhaustive semantic extraction.

The current strict audit includes **nine CSV files and 2,076 catalog rows**, with 644 exact
manufacturer spellings. Batch 99 refreshed the separate heuristic gap file offline
against all 2,076 rows (636 normalized manufacturer keys). Matches now require the
same brand; an identical model name under another manufacturer cannot count as exact.
It flags 113 model and eleven brand search candidates, including reviewed aliases,
families, components and services. These are not 113 verified catalog gaps. Source
inventories retain their original dates and historical comparison values; use
`buyandrentrobots-gaps.json` for the current comparison. The stricter `coverage.json`
counts 221 exact matches, twenty-one verified aliases, eight manufacturer corrections,
forty-six resolved families, zero family/variant reviews,
twenty-two nonrobot hardware/components, four software platforms, fourteen services, two
manually guided appliances, five integrated robotic systems, one named robot unit, one generic family and three without an exact match among the 348 original
model/series candidates. The two appliances are KB 5 and PUDU SH1; they retain
source records without robot catalog coverage. Reviews of the 122 originally
unclear listings remain separate: 113 reviewed and 9 open. Fuzzy matches and
partial family matches are not evidence of exact coverage.

The initial collection wrote research files. The subsequent reviewed import added
manufacturer-supported products to the CSV catalog. Changes, business USPs,
priorities and limitations are in [the consolidated audit](competitor-audit-2026-11-01.md).

Current product-highlight coverage: 988 dated records across the catalog, including
166 existing-model enrichments and 822 task additions. All 430 catalog models
matched to named competitor mentions now have dated highlights.
The original JD Humanoid row duplicated canonical JD/SKU KI-0100; it was merged with image, old-link and saved-selection preservation. The corrected baseline is 1,254 original identities plus 822 task additions, totaling 2,076.
This is separate from identity/family resolution. The model-review export now
provides primary highlights, supporting URLs, dates and complete/partial/missing/
unmapped status, alongside the original directory claims. Existing specification
tables are not automatically verified by highlight-only enrichment.

The combined saved-source research queue covers 518 catalog targets: 430 from
explicit model mentions, 489 when reviewed listing resolutions are included and
518 when reviewed company-description references are included. All 518 have dated
highlights; 389 have selected-field reviews and 129 await those reviews. Family and
context references remain labeled and do not become exact model identities. The
queue also retains all 591 source company groups, including company-only profiles.
Use `pnpm research:refresh` to refresh coverage, the JSON/CSV research queues,
heuristic comparison and the four review exports without HTTP.

Selected specification checks cover 14,087 fields across 838 catalog models: 6,070 documented,
7,698 not documented, 256 conflicting and sixty-three roadmap fields. They do not certify whole
products. The model-review CSV includes selected values, review states, URLs and dates.
Charging time now has its own column; maxRuntime remains operating endurance.

On 2026-11-02, the DealMaker Omni listing was resolved as a financing-client
reference using a company page explicitly describing the VR treadmill client.
Three named TGW RovoFlex systems were added using company-authored sources;
this does not resolve the unrelated TGW Go2/NEO claims. Company focus and
directory themes are now visible separately on brand profiles and searchable
in the brand directory. Company-review exports retain source themes and add
separate columns for dated company-authored focus reviews.


On 2026-11-02, T-Chef company-authored sources linked the former Chinese name
智谷天厨 to the current name 仟弈智能 and described cooking robotics, smart-kitchen
systems and Cooking Domain Agent maintenance support. The reviewed company URL
appears separately from the directory-supplied 36kr media link. The generic
Delivery Bot / EduBot entries remain unresolved; this company evidence does not
turn them into catalog models. All three strict model mentions and nine unclear
listings remain open.


## Ergänzung vom 2. November 2026 – Produktnamen aus Firmenbeschreibungen

Alle 412 Quellenfirmen wurden ausdrücklich auf Produktnamen in ihren Beschreibungen
geprüft: 299 haben Beschreibungstext, 113 keinen. In 76 Quellenfirmen stehen 132
benannte Referenzen: 52 Modellnamen, 28 Familien, 19 Softwareangebote, neun
Komponenten, sieben Komponentenfamilien, fünf Marken, drei Systeme, sechs
Konfigurationsbezeichnungen, ein Dienst, eine Maschinenfamilie und ein ungeklärter
Name. Dies ist eine Namenserfassung, keine Bestätigung sämtlicher Produktidentitäten.

Die Referenzen erscheinen mit Typ, ursprünglichem Namenskontext, Quellenlink,
Snapshotdatum und Prüfdatum auf 76 Profilen und sind über die Markensuche auffindbar.
DJI-Kamera-/Zubehörnamen werden von Drohnen getrennt; ROS, Helix und SuperDrive
werden als Software geführt. Die verkürzte Capra-Nennung „500“ bleibt mit ihrem
Kontext „Capra 200 and 500“ erhalten. Anbieterreferenzen wie Unitree G1 bei Elite
Event Robotics begründen keine Herstellerzuordnung. Es gibt keine automatischen
Roboterkarten oder Kataloglinks aus dieser Namenserfassung.

`company-descriptions.json` sichert den Quelltext unabhängig vom Scratch-Verzeichnis.
`company-description-reviews.json` enthält für jede Quellenfirma eine explizite
Entscheidung mit SHA-256 des exakten Beschreibungstextes. Änderungen an Identität,
Beschreibung, Quelle oder Datum sowie fehlende Reviews werden zurückgewiesen.
Bei fehlerhaften oder unvollständigen Eingangsdaten ersetzt die Extraktion keine
bestehende Ausgabe. Die Quelldaten werden nur serverseitig beim Build gelesen.
Der Snapshot stammt vom 1. November 2026; die Namenprüfung vom 2. November 2026
ist kein neuer Live-Abruf des weiterhin blockierten Wettbewerber-Hosts.

Ein eigener Export `company-product-review.csv` enthält 132 Zeilen mit Namen,
Typen, Kontexten, Quellen, Daten, Hashes und Katalogkandidaten. Die bestehenden
592 Firmen-, 406 Modell-/Serien- und 862 Listingzeilen bleiben erhalten. Der
zusätzliche Abgleich weist 27 Namenskandidaten und sechs Präfixkandidaten aus;
19 Modellnamen benötigen eine weitergehende Identitätsprüfung. 80 Referenzen
haben einen anderen Namenstyp. Diese Zählung ist von der bisherigen Abdeckung
streng getrennt und bestätigt auch bei exaktem Namen keine Herstelleridentität.

Die zusätzliche Herstellerprüfung belegt Tokinomo Shelfobot als stationären
Werberoboter mit beweglichem Arm, Näherungserkennung, LED/Ton und Fernverwaltung
von Kampagnen. Er ergänzt den Katalog mit datierten Herstellermerkmalen.
Umsatzsteigerungsversprechen werden nicht übernommen. Visibubble bleibt außerhalb
des Roboterkatalogs: Die geprüfte Herstellerseite beschreibt wechselbare magnetische
Botschaften, Sensor, Licht und Ton, dokumentiert aber keine Roboterbewegung.
Die Syrebo-Seite nennt SY-HR08E nur im URL-Pfad, nicht im extrahierten Text;
das reicht hier nicht zur Modellbestätigung. Klinische Wirksamkeitsversprechen
werden daraus nicht abgeleitet.

Aktueller Bestand: 1.665 Modelle, 631 exakte Herstellerbezeichnungen,
1.034 Firmen-/Markenprofile (620 mit Modellen, 414 Quellenprofile ohne Modelle),
523 datierte Produktmerkmalsdatensätze aus 410 Ergänzungen und 113 bestehenden
Modellen. Tokinomo wird seinem bestehenden Quellenprofil zugeordnet; kein
doppeltes Firmenprofil entsteht. Alle 421 zu ursprünglichen benannten
Wettbewerber-Nennungen zugeordneten Katalogmodelle behalten Merkmalsbelege.
Die drei ursprünglichen offenen Modellidentitäten und neun unklaren Listings
bleiben offen. Führungsposition und vollständige Spezifikationsprüfung sind
weiterhin nicht nachgewiesen.

Belege, vorherige Bestände, Herstellerabrufe und Prüfprotokolle:
`scratch/competitor-research/primary/batch-28/`. Änderungen bleiben lokal.


Validierung: 244 Unit-Tests in 19 Dateien, elf Python-Tests und 118 ausgewählte
Browserfälle bestanden. Die neuen Produktnamenbereiche wurden auf Desktop/Mobil
und in Hell/Dunkel mit Axe geprüft. Im ersten Lauf bestanden 117 Fälle; ein Fall
auf einer bestehenden Seite mit YouTube-Einbettung meldete einen compute-pressure-
Berechtigungsfehler in der Konsole. Die unveränderte Wiederholung bestand; es
wurde keine Meldung im Test oder in der Anwendung unterdrückt. Eine transiente
Meldung aus der Einbettung ist eine mögliche Ursache, aber nicht abschließend belegt.
Alle 554 Themenprofile, die 132 Namen auf
76 Profilen, die neue Shelfobot-Seite und sämtliche 592/406/862/132 Exportzeilen
wurden zusätzlich abgeglichen. Build: 2.713 Seiten, rund 404 MB. Datenprüfung:
null Fehler, 536 Warnungen; die zusätzliche Warnung betrifft das nicht belegte
Shelfobot-Erscheinungsjahr. Erneuter Import: 523 Datensätze, null Ergänzungen.
Alle 1.664 vorherigen Katalogzeilen und 522 vorherigen Merkmalsbelege bleiben
erhalten. Die 1.961 Quellenidentitätsdatensätze wurden unverändert abgeglichen.
Alle 193 erfassten eigenen Testprozesse sind beendet, Port 4321 ist
geschlossen; eigene Recherche-Hilfsprozesse verbleiben nicht. Kein Recherchebrowser
wurde geöffnet, fremde Ressourcen blieben erhalten. Änderungen bleiben lokal ohne
Commit, Push oder Deployment. Nachweise: `batch-28/inventory-check.json`,
`batch-28/evidence-check.json` und `batch-28/resource-check.json`.


## Ergänzung vom 2. November 2026 – Modellprüfung der Firmenbeschreibungen

Die Namenserfassung hat nun eine eigene datierte Identitätsprüfung.
`company-product-reviews.json` enthält 45 Entscheidungen: 38 konkrete
Modellreferenzen zu 37 unterschiedlichen Katalogmodellen, sechs ausdrücklich
qualifizierte Verweise auf verwandte Versionen und einen Nicht-Roboter.
132 Quellennamen und ihre ursprünglichen Typen bleiben unverändert. Die sechs
Versionsverweise zählen nicht als genaue Modellkonfiguration. Die sieben übrigen
Modellnamen – ANYmal, ANYmal X, Sparky, Bee-Bot, Titan the Robot, SY-HR08E und Thymio –
bleiben in dieser Quellenebene ohne abgeschlossene Identitätsentscheidung.
Die 80 anders typisierten Software-/Komponenten-/Familienreferenzen sind weiterhin
eine Namenserfassung; diese Prüfung zertifiziert nicht automatisch ihre Identität.

Die Entscheidungen binden an die genaue Quellbeschreibung per SHA-256 und verlangen
datierte Primärbelege. Katalogziele müssen existieren und eigene Primärquellen
besitzen. Fehlende/mehrdeutige Ziele, veraltete Hashes, unzulässige URLs, fehlende
Belege und ungültige oder zeitlich widersprüchliche Daten führen zum Abbruch.
Markenprofile und der 132-zeilige Namenexport zeigen die Entscheidung, Quellen,
Prüfdaten, Hinweise und getrennte Kataloglinks. Breit benannte Serien und
Generationen bleiben als verwandte Versionen gekennzeichnet. Anbieter wie Elite
Event Robotics und Scarlett Entertainment werden durch Unitree-G1-/Pepper-Verweise
nicht zu Herstellern; Verfügbarkeit oder Händlerautorisierung wird nicht behauptet.

Neu im Katalog sind neun durch Herstellerseiten belegte Modelle:

- DJI Air 3S: Zwei Kameras, ein Zoll Hauptsensor, Free Panorama und nächtliche
  Hinderniserkennung unter den Herstellerbedingungen.
- DJI Flip: Faltbarer Propellerrundumschutz, Handstart, Motivverfolgung und
  4K/60fps-HDR-Kamera.
- DJI Mini 4 Pro: Echte vertikale HDR-Aufnahmen, Rundum-Hinderniserkennung und
  ActiveTrack 360.
- DJI Mavic 3 Pro: Hasselblad-Kamera plus zwei Telekameras und Rundumsensorik.
  Die nur per Fußnote zugeordnete ProRes-Funktion wird dem Standardmodell nicht
  pauschal zugeschrieben.
- Tennant T7AMR: BrainOS-Navigation, Hindernisvermeidung, Bürstenverschleißanzeige
  und Flottenberichte; ec-H2O bleibt eine verfügbare Option.
- Tennant T16AMR: Autonome industrielle Bodenreinigung, zylindrischer Schrubbkopf,
  Absaugung und Sichtbarkeitspaket. Kumulative Betriebsstunden innerhalb von
  24 Stunden werden nicht als kontinuierliche Laufzeit importiert.
- Badger Technologies PatrolBot: Über Wachmanagementsoftware geplante Patrouillen,
  Hindernisumfahrung, Livevideo und Vorfallbilder.
- Barrett Burt: Armgewicht-Unterstützung, haptische Assistenz/Widerstand und
  therapeutisch ausgewählte Interaktionen. Keine Wirksamkeits-, Sicherheits- oder
  Zulassungsgarantie wird übernommen; widersprüchliche Angaben zu 18/20 Aktivitäten
  bleiben weg.
- Ozobot Bit: Historisches Originalmodell mit Farbcode-/Linienprogrammierung und
  OzoBlockly; kein Alias für Bit+. Grundlage ist der bereits am 1. November 2026
  gespeicherte Herstellerleitfaden. Es erfolgte kein erneuter Versuch gegen den
  blockierten Haupt-Host.

Vier bestehende Modelle erhalten Merkmalsbelege: Tennant X4 ROVR, X6 ROVR und
T380AMR sowie Misty II. Deren vorhandene CSV-Werte werden nicht als vollständig
geprüft ausgegeben. X4/X6 im Tennant-Firmenkontext werden auf die belegten
ROVR-Modellnamen aufgelöst; gleichnamige X6 anderer Hersteller sind keine Ziele.
Misty dokumentiert Tiefen-/Abstandssensorik, mechanische Interaktion und
programmierbare Erweiterungen in der eigenen Entwicklerdokumentation.

Aktueller Bestand: 1.674 Modelle, 632 exakte Herstellerbezeichnungen,
1.034 Marken-/Firmenprofile (621 mit Modellen, 413 ohne), 536 datierte
Produktmerkmalsdatensätze aus 419 Ergänzungen und 117 bestehenden Modellen.
Alle 1.665 vorherigen CSV-Zeilen und 523 bisherigen Merkmalsdatensätze bleiben
unverändert. Quellenidentitäten, 592 Firmengruppen, die ursprünglichen 406
Modell-/Seriennennungen und 862 Listings bleiben erhalten. Der neue Barrett-
Hersteller ist seinem vorhandenen Firmenprofil zugeordnet. Die ursprünglichen
drei offenen Modellidentitäten und neun unklaren Listings bleiben offen.
Marktführerschaft und vollständige Spezifikationsprüfung sind weiterhin unbewiesen.

Nachweise: `scratch/competitor-research/primary/batch-29/`,
`batch-29/primary-review-notes.json` und die versionierten Daten unter
`data/competitors/`. Änderungen bleiben lokal ohne Commit, Push oder Deployment.


Validierung: 265 Unit-Tests in 20 Dateien, elf Python-Tests und alle 124 ausgewählten
Browserfälle bestanden. Axe prüft den neuen Entscheidungsbereich in Hell/Dunkel
und Desktop/Mobil. Im ersten Browserlauf bestanden 123 Fälle; die bestehende
mobile Produktseite meldete erneut einen compute-pressure-Konsolenfehler. Der
Seitentest ersetzt jetzt ausschließlich die externe YouTube-Playerantwort durch
einen festen Testinhalt. Alle sechs betroffenen Seitentests bestanden anschließend;
Fehler der Seitenskripte werden weiterhin erfasst. Videowiedergabe wird damit
nicht geprüft. Die genaue Herkunft der ursprünglichen Meldung ist nicht direkt
belegt; die Änderung entfernt die externe Playerausführung aus diesem Seitentest.
Der erzeugte HTML-Bestand wurde für alle 554 Themenprofile,
132 Namen auf 76 Profilen, 45 Entscheidungen und 13 Produktseiten abgeglichen;
sämtliche 592/406/862/132 Exportzeilen wurden geprüft. Build: 2.722 Seiten,
rund 406 MB. Datenprüfung: null Fehler, 545 Warnungen. Die neun neuen Warnungen
betreffen nicht belegte Erscheinungsjahre der neun Ergänzungen. Ein Test fand
anfangs den fehlenden Navigations-Tag `programmable` beim originalen Bit; der
belegte Tag wurde ergänzt, danach bestand die gesamte Unit-Suite. Erneuter Import:
536 Datensätze, null Ergänzungen. Alle 1.665 vorherigen Katalogzeilen und
523 vorherigen Merkmalsdatensätze bleiben unverändert.

Alle 222 erfassten eigenen Testprozesse sind beendet; Port 4321 ist
geschlossen. Eigene Recherche-Hilfsprozesse verbleiben nicht. Kein Recherchebrowser
wurde geöffnet; andere Aufgabenressourcen blieben erhalten. Änderungen bleiben
lokal ohne Commit, Push oder Deployment. Nachweise: `batch-29/inventory-check.json`,
`batch-29/evidence-check.json` und `batch-29/resource-check.json`.


## Ergänzung vom 2. November 2026 – Bee-Bot, SY-HR08E und benannte Eventangebote

Der Katalog enthält jetzt 1.676 Modelle mit 634 exakten Herstellerbezeichnungen
und 540 datierten Primärquellen-Datensätzen für Produktmerkmale (421 ergänzte
Modelle und 119 Anreicherungen bereits vorhandener Modelle). Neu sind TTS Bee-Bot
und Syrebo SY-HR08E. Thymio II und ANYmal X erhalten zusätzliche Merkmalsbelege.
Bee-Bot bietet bildschirmfreie Tastenprogrammierung, aufnehmbares Audiofeedback,
Näherungsinteraktion und USB-Laden. Widersprüchliche Angaben zu 200 Befehlen bzw.
256 Schritten bleiben weg; ein Bluetooth-Hinweis in der Seitennavigation wird
nicht zur Produkteigenschaft. Robotix Education bleibt ein separates Anbieterprofil.

Die Syrebo-Herstellerbroschüre nennt SY-HR08E und dokumentiert den weichen
Exoskelett-Handschuh mit passivem, assistiertem, Widerstands- und Spiegeltraining
sowie spielbasierten Interaktionen und Berichten. Die vier Bildseiten wurden lokal
per OCR transkribiert; PDF, Seitenbilder, Konfidenzen und Maschinenabschrift bleiben
als Nachweis erhalten. Es erfolgte keine unabhängige visuelle Textkorrektur.
Die Produktseite bestätigt Funktionen, ihre URL allein ist kein Identitätsbeleg.
Wirksamkeits-, Eignungs- und Zulassungsbehauptungen werden nicht übernommen.
Die temporäre OCR-Umgebung wurde nach abgeschlossener Transkription entfernt.

Für Thymio II belegt das offizielle Mobsya-Repository offene Elektronikentwürfe,
Fertigungsdateien und CC-BY-SA-3.0-Lizenzierung. Die offizielle Historie unterscheidet
den ursprünglichen Thymio und Thymio II; die allgemeine Quellenbezeichnung wird
nur als verwandte Generation verknüpft. Die belegte Zuordnung von Mobsya zum
vorhandenen Profil Thymio by Mobsya verhindert ein zusätzliches Katalogprofil.
Syrebo ist nun ebenfalls seinem bestehenden Quellenprofil als Hersteller zugeordnet.
Insgesamt bestehen weiter 1.034 Profile, davon 623 mit Modellen und 411 ohne.

ANYbotics nennt ANYmal X in einem eigenen öffentlichen Beitrag mit autonomer
Navigation sowie thermischer, visueller, akustischer und Gassensorik und Anbindung
an Wartungssysteme. Ausschließlich der Herstellerbeitrag, keine Kommentare oder
Videomaschinenabschrift, trägt diese Merkmale. Weltneuheits-/Zertifizierungsclaims
werden nicht übernommen. Der bisherige Werbetext wurde sachlich ersetzt und das
unbelegte Anfangs-Erscheinungsjahr 2022 geleert. Der angekündigte Meilenstein vom
27. Oktober 2026 belegt kein ursprüngliches Erscheinungsjahr und wird nicht als
solches eingesetzt. Die übrigen Bestands-Spezifikationen sind weiterhin ungeprüft.
Die selektiven Feldprüfungen decken nun 67 Felder bei 13 Modellen ab:
45 dokumentiert, 18 nicht dokumentiert, zwei widersprüchlich, zwei Roadmap-Werte.

Die sieben übrigen modelltypisierten Namen aus Firmenbeschreibungen haben nun
abgegrenzte Entscheidungen. Insgesamt: 52 Entscheidungen, davon 41 konkrete
Modellreferenzen zu 40 unterschiedlichen Modellen, acht verwandte Generationen,
ein Nicht-Roboter und zwei benannte Angebote mit weiterhin ungeklärter Hardware.
Sparky ist bei Event-Robot.com als Event-/Moderationsangebot belegt, Titan bei
Schöpfer Cyberstein als interaktive Showfigur. Weder das genaue Hardwaremodell
noch der Steuerungs-/Autonomiegrad werden daraus abgeleitet. Keine Gleichsetzung
mit Sparky 1, keine neue Hardware-Herstellerzuordnung und keine pauschale
Kostüm-/Autonomiebehauptung. Scarletts Quellenreferenz belegt keine aktuelle
Autorisierung oder Verfügbarkeit. Der neue Entscheidungstyp verweigert Katalogziele;
Profile und Exporte zeigen die weiterhin unbestätigte Hardware ausdrücklich.

Alle 132 Quellennamen bleiben unverändert; 80 andere typisierte Namen sind noch
keine Identitätsprüfung. Die 406 ursprünglichen Modell-/Seriennennungen bleiben
eine getrennte Abdeckung mit drei offenen Identitäten und neun unklaren Listings.
Alle 421 dazu verknüpften Katalogmodelle haben weiterhin datierte Merkmalsbelege.
Marktführerschaft und vollständige Spezifikationsprüfung sind nicht nachgewiesen.
Alle 1.674 vorherigen Katalogzeilen bleiben vorhanden: 1.673 unverändert, eine mit
den beiden dokumentierten Korrekturen. Alle 536 bisherigen Merkmalsdatensätze,
45 bisherigen Namensentscheidungen und 1.961 Quellenidentitäten bleiben erhalten.
Nachweise: `scratch/competitor-research/primary/batch-30/`, insbesondere
`primary-review-notes.json`, `syrebo-brochure-ocr.json` und `inventory-check.json`.


Validierung dieser Ergänzung: 268 Unit-Tests in 20 Dateien und elf Python-Tests
bestanden. Alle 128 ausgewählten Browserfälle sind erfolgreich geprüft. Im ersten
Lauf bestanden 126; 2 neue Eventangebot-Prüfung(en) suchte(n) die sichtbare
Statuskennzeichnung irrtümlich im Hinweisfeld statt im umgebenden Produkteintrag.
Nach Selektorkorrektur bestanden beide Desktop-/Mobilfälle. Keine Appänderung
oder entfernte Aussageprüfung war dafür nötig. Die YouTube-Antwortisolation aus
Batch 29 bleibt bestehen; Videowiedergabe liegt außerhalb dieses Prüfumfangs.
HTML-/Export-Abgleich: 554 Themenprofile, 76 Namensprofile, 132 Namen,
52 Entscheidungen, vier neue/angereicherte Produktseiten und 592/406/862/132
Exportzeilen. ANYmal-X-Korrekturen und beide Hardware-Abgrenzungen sind zusätzlich
im erzeugten HTML geprüft. Build: 2.724 Seiten, rund 406 MB. Datenprüfung:
null Fehler, 548 Warnungen; neu sind die beiden unbekannten Erscheinungsjahre
der Ergänzungen und das geleerte unbestätigte ANYmal-X-Jahr. Lint und Formatierung
bestanden. Erneuter Import: 540 Belegdatensätze, null Ergänzungen.

Alle 215 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen und eigene Recherche-Hilfsprozesse verbleiben nicht.
Es wurde kein Recherchebrowser geöffnet; andere Aufgabenressourcen blieben
unverändert. Änderungen sind lokal. Nachweise: `batch-30/inventory-check.json`,
`batch-30/evidence-check.json`, `batch-30/correction-html-check.json` und
`batch-30/resource-check.json`.


## Ergänzung vom 2. November 2026 – sechs T-Chef-Kochsysteme und Gastronomievergleich

Die sechs in Batch 27 gefundenen Herstellerprodukte sind nun als eigenständige
programmierbare Kochsysteme geprüft und importiert: E10A, TC-E20A, TC-E40A,
TC-G300, TC-G1000 und TC-40EA-US. Die Produktseiten und der Produktindex nennen
die Geräte ausdrücklich und beschreiben manuelle/automatische Kochprogramme,
Dosierung bzw. angetriebenes Rühren. Es wird weder ein bestimmter Roboterarm noch
mobile Autonomie daraus abgeleitet. Grundlage sind die bereits am 2. November
2026 erfolgreich gespeicherten Herstellerseiten. Es gab keine erneuten Anfragen
an blockierte Hosts. Die sechs Produkte sind zusätzliche Herstellerfunde aus der
Klärung einer Wettbewerberfirma, keine weiteren ursprünglichen Modellnennungen.

E10A nutzt Induktionsheizung mit Öl-/Wasserkanälen und maximal 1 kg je Charge.
TC-E20A führt 2 kg Chargenkapazität sowie manuelle und automatische Modi; die
Parametertabelle verkürzt denselben Namen zu E20A. Daraus entsteht kein weiteres
Modell. TC-E40A dokumentiert Rezepterstellung, automatische Zutaten-/Gewürzzugabe,
geregeltes Rühren, variable Kochwinkel und automatische Ausgabe bei maximal
4 kg Chargenkapazität. Fünf gegenüber acht flüssigen Würzmitteln sind innerhalb
der Seite widersprüchlich; diese Anzahl wird nicht übernommen. Die Wasserpistole
wird nicht zu einer Selbstreinigungsfunktion umgedeutet.

TC-G300 und TC-G1000 sind Gas-Kochsysteme mit bidirektionalem Trommelrühren,
Rührklauen, neigbarem Behälter, Touchscreen und Cloud-Rezeptabläufen. Die
Hersteller-Maximalwerte liegen bei 30 bzw. 100 kg pro Charge; beide Seiten nennen
360 kg Geräte-Netto-Masse. Die Daten wurden je Modell geprüft und nicht übertragen.
TC-40EA-US bleibt von TC-E40A getrennt: 2 kg optimale und 4 kg maximale
Stir-Fry-Kapazität, Edelstahlbehälter, andere Maße und 235 kg Netto-Masse mit dem
Herstellervorbehalt möglicher Abweichungen. Zertifikats-/Normenbehauptungen,
20-Prozent-Einsparungswerbung, Personalersatz, universelle Sicherheitsversprechen
und rezeptabhängige Durchsatz-/Garzeitangaben werden nicht übernommen.

Der neue Bereich Küche & Gastronomie führt die sechs Kochsysteme und die bereits
mit food-service markierten Macco-Produkte. Seine Navigation ist auf Desktop und
Mobil verfügbar. Zwei explizite Datenfelder — cookingCapacity und heatSource —
zeigen Chargenkapazität und Heizquelle in Detailtabelle, Vergleich und
strukturierten Produkteigenschaften. Chargenkapazität wird nicht als Nutzlast,
Gerätemasse oder Durchsatz ausgegeben. Optimale und maximale Mengen bleiben
getrennt. Die englischen und deutschen Feld-/Navigationsbezeichnungen sind
ergänzt; die Rohwerte bleiben quellennahe Herstellerangaben.

24 datierte Feldprüfungen belegen Masse, Maße, Chargenkapazität und Heizquelle
für die sechs Geräte. Die Prüfungen umfassen damit insgesamt 91 Felder an
19 Modellen: 69 dokumentiert, 18 nicht dokumentiert, zwei widersprüchlich und
zwei Roadmap-Werte. Diese Zahlen stehen weiterhin für einzelne Felder und sind
keine vollständige Produktzertifizierung oder unabhängige Leistungsmessung.
Die neuen Spalten wurden an commercial.csv angehängt; alle bisherigen Zellwerte
bleiben unverändert. Keines der sechs Geräte erhält erfundene Nutzlast-, Akku-,
Laufzeit-, Preis-, Zulassungs- oder Erscheinungsjahrwerte.

T-Chef ist anhand von Herstellerhistorie, Firmenbeschreibung und Produktindex dem
bestehenden Profil Zhigu Tianchu zugeordnet. Originaler Medienlink und geprüfte
Firmenwebsite bleiben getrennt. Delivery Bot und EduBot werden weiterhin keiner
T-Chef-Hardware gleichgesetzt. Das Firmenprofil zeigt sechs belegte Produktkarten
und behält den ausdrücklichen Hinweis auf die ungeklärten ursprünglichen Namen.
Die Zahl der Quellenfirmengruppen bleibt 592. Gesamtbestand: 1.682 Modelle,
635 exakte Herstellerbezeichnungen und 1.034 Profile (624 mit Modellen / 410 ohne).
546 datierte Produktmerkmalsdatensätze verteilen sich auf 427 Ergänzungen und
119 Anreicherungen bereits vorhandener Modelle. Alle 1.676 bisherigen Katalogzeilen,
540 bisherigen Merkmalsbelege, 52 Namensentscheidungen, 13 bisherigen selektiven
Feldprüfungen und 1.961 Quellenidentitäten bleiben erhalten.

Die sechs bisherigen T-Chef-Funde haben abgeschlossene Importentscheidungen in
`batch-31/cooking-product-lead-decisions.json`; das ursprüngliche Lead-Artefakt
bleibt unverändert. Offen bleiben die drei ursprünglichen Modellidentitäten,
neun unklaren Listings, zwei Event-Hardwareidentitäten und die 80 anders typisierten
Namensreferenzen. Vollständige Spezifikationsprüfung und Marktführerschaft sind
nicht nachgewiesen. Weitere Nachweise: `batch-31/primary-review-notes.json`,
`batch-31/inventory-check.json` und die sechs verlinkten Herstellerseiten.


Validierung: 269 Unit-Tests in 20 Dateien, elf Python-Tests und alle 138 ausgewählten
Browserfälle bestanden. Die Browserfälle prüfen zusätzlich Gastronomienavigation,
Kapazitäts-/Masse-/Heizquellenvergleich, deutsche Feldbezeichnungen und Primärlinks
sowie Barrierefreiheit der neuen US-Produktseite in Hell/Dunkel und Desktop/Mobil.
Die geänderte Firmenprofilprüfung erwartet jetzt sechs belegte Kochsysteme und
behält die Grenzen der ungeklärten ursprünglichen Namen bei. Eine anfängliche
Unit-Erwartung von null Produktkarten wurde entsprechend aktualisiert; danach
bestand die ganze Suite. Der ergänzende statische Prüfer wurde angepasst, um
JSON-LD-Listen neben einzelnen Produktobjekten zu berücksichtigen. Die bestehende
YouTube-Testantwort bleibt isoliert; tatsächliche Videowiedergabe wird nicht geprüft.

HTML-/Export-Abgleich: 554 Themenprofile, 76 Namensprofile, 132 Namen,
52 Namensentscheidungen, sechs neue Produktseiten und 592/406/862/132 Exportzeilen.
Alle 24 neuen Feldzellen und strukturierten Produkteigenschaften stimmen mit den
geprüften Herstellerwerten überein. Nutzlast-/Laufzeitinferenz und unbestätigte
Zertifikats-/Einsparungswerbung fehlen in den neuen Produktseiten. Build:
2.730 Seiten, rund 409 MB. Datenprüfung: null Fehler, 554 Warnungen; die sechs
neuen Warnungen sind unbelegte Erscheinungsjahre. Lint und Formatierung bestanden.
Erneuter Import: 546 Belegdatensätze, null Ergänzungen.

Alle 199 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen und eigene Recherche-Hilfsprozesse verbleiben nicht.
Es wurde kein Recherchebrowser geöffnet; andere Aufgabenressourcen blieben
erhalten. Änderungen sind lokal. Nachweise: `batch-31/inventory-check.json`,
`batch-31/evidence-check.json`, `batch-31/cooking-evidence-check.json` und
`batch-31/resource-check.json`.


## Ergänzung vom 2. November 2026 – Familienzuordnung, Inspire und Interbotix ALOHA

Alle 28 bislang ungeprüften Familiennamen aus den Firmenbeschreibungen haben nun
abgegrenzte Zuordnungen. 27 Familien führen zu einzeln durch Primärquellen belegten
verwandten Varianten; SKYHUB erhält einen eigenen Systembezug ohne eigenständiges
Roboterziel. Die 132 extrahierten Namen, Quelltypen und Beschreibungshashes bleiben
unverändert. Die Verknüpfungen sind keine exakten Konfigurationsmatches, keine
vollständige aktuelle Serienübersicht und kein Nachweis von Verfügbarkeit.

Aus bestehenden Belegen werden konkrete Varianten von Kas/Neo, Carti/Servi,
LaserWeeder, Mercury/myCobot, ER-FLEX, Skypod, GR, HaiPick, Kime, TIAGo,
Blaze/OB7, C2, HUBO, RB/RBQ, Relay, GoPal und Walker verknüpft. Die RB-Zuordnung
enthält nur die 13 geprüften kollaborativen RB-/RB-N-Arme, keine RBQ-Vierbeiner
oder RB-Y1-Hybridplattform. ER-FLEX behält zehn getrennte Arm-/ESD-Konfigurationen
unter Enabled Robotics; MiR und UR werden nicht zu Herstellern des Gesamtsystems.
HUBO verweist ausdrücklich auf historische Entwicklerbelege. DEEBOT verknüpft
beispielhaft nur die geprüfte kommerzielle PRO-Linie und wählt keine Verbrauchergeneration.
Die bisherigen Merkmalsdatensätze und ihre ursprünglichen Prüfdaten bleiben erhalten.

Neu im Katalog sind DJI Inspire 3 und drei Interbotix-Konfigurationen:
ALOHA Stationary, ALOHA Mobile und ALOHA Solo. Inspire 3 ist durch die benannte
Produkt- und Spezifikationsseite als Filmkamera-Drohne belegt. Vollformatsensor,
kompatible DL-Objektive und O3-Pro-Einzel-/Doppelsteuerung werden beschrieben.
Gerätemasse mit Kamera, zwei Akkus, Objektiv, PROSSD und Propellern bleibt von der
maximalen Startmasse getrennt. Die 28/26 Minuten Flugzeit behalten die Unterschiede
der Fahrwerksstellung und die Hersteller-Testbedingungen; kein Missions- oder
Ladezeitversprechen. ProRes-RAW-Lizenz-/Paketumfang wird nicht pauschal behauptet.
Drei zusätzliche Feldprüfungen erhöhen den Umfang auf 94 Felder an 20 Modellen:
72 dokumentiert, 18 nicht dokumentiert, zwei widersprüchlich, zwei Roadmap-Werte.

Die versionierte Trossen-Dokumentation benennt ausdrücklich Interbotix-ALOHA-Kits,
die von Trossen angeboten werden. Die Hardwaremarke im Katalog ist Interbotix;
Trossen bleibt ein eigenes Anbieterprofil mit verwandten Produktlinks. Stationary
führt zwei Leader- und zwei Follower-Arme sowie vier RealSense-D405-Kameras, Solo
je einen Leader/Follower und zwei Kameras. Mobile kombiniert das Armpaar-System
mit einer SLATE-Basis und getrennter Joystick-/Arm-Teleoperation. Lern-/Datensatz-
Workflows sind dokumentiert; daraus wird keine sofort nutzbare Autonomie abgeleitet.
Die Dokumentationsversion 2.0 ist kein zusätzlicher Produktname ALOHA 2 und keine
Gleichsetzung mit Trossen AI Arms. Beim mobilen Kameratyp widersprechen sich
Packliste und Spezifikation; der Typ wird nicht übernommen. Die leere Startseite
war ein öffentlicher Meta-Refresh zur Versionsseite, dem normal gefolgt wurde.

Bestehende ECOVACS-Modelle GOAT A3000 LiDAR und WINBOT W2 Pro Omni erhalten
Merkmalsbelege. GOAT beschreibt Dual-LiDAR-/Kamerasensorik und einstellbare
Schnitthöhe; es wird nicht mit dem separat beworbenen PRO-Nachfolger vermischt.
WINBOT dokumentiert die tragbare Versorgungs-/Aufbewahrungsstation, Sprühreinigung
und App-/WIN-SLAM-Planung. Fallgarantien, Versicherungsansprüche, Effizienzwerbung,
aktuelle Preise und vollständige Bestands-Spezifikationen werden nicht übernommen.

Die neue SOLARTODO-Firmenprüfung benennt SKYHUB als koordiniertes Katalogsystem
aus Fluggerät, Wechselstation und einem gewählten Bodenroboter. Das Handbuch Rev 1.3
vom 27. September 2026 unterscheidet Geräte-/Freigabezuständigkeiten und separates
Bodenroboterladen. Die öffentlichen Dashboard-/Showcase-Zahlen sind ausdrücklich
simuliert und werden nicht als Kundeneinsatz oder Leistungsnachweis gewertet.
Der neue System-Prüftyp erlaubt nur Familien-/Systemnamen und keine Roboterziele.
Vier im Handbuch genannte Komponenten — STT 1S MAX, STT-HUB1101, STTBOT-S1 und
STTBOT-T1 — bleiben separate Recherchefunde mit ungeklärter OEM-Identität,
physischer Produkt-/Lieferprüfung und Katalogintegration. Ihre Namen stehen in
`batch-32/skyhub-hardware-leads.json`; es werden keine vier ungeprüften Roboterimporte
oder zusätzlichen ursprünglichen Wettbewerber-Modellnennungen daraus gemacht.

Gesamtbestand: 1.686 Modelle, 636 exakte Herstellerbezeichnungen und
1.035 Profile (625 mit Modellen / 410 ohne). 552 datierte Merkmalsbelege verteilen
sich auf 431 Ergänzungen und 121 Anreicherungen bestehender Modelle. Die
Namensprüfungen umfassen 80 Entscheidungen: 41 konkrete Modellreferenzen,
35 qualifizierte verwandte Produktbezüge, einen Nicht-Roboter, zwei Eventangebote
mit unbestätigter Hardware und einen Systembezug. 52 andere typisierte Namen
bleiben ohne Primäridentitätsprüfung. Alle 1.682 bisherigen Katalogzeilen,
546 Merkmalsbelege, 52 bisherigen Namensentscheidungen, 19 bisherigen selektiven
Feldprüfungen und 1.961 Quellenidentitäten bleiben unverändert erhalten.
Die ursprünglichen drei offenen Modellidentitäten und neun unklaren Listings
bleiben offen; Marktführerschaft und vollständige Spezifikationen sind unbewiesen.
Nachweise: `batch-32/primary-review-notes.json`, `batch-32/family-targets.json`,
`batch-32/inventory-check.json` und die datierten Hersteller-/Entwicklerquellen.


Validierung: 272 Unit-Tests in 20 Dateien, elf Python-Tests und alle 148 ausgewählten
Browserfälle bestanden. Zusätzliche Browserfälle prüfen die Interbotix-/Anbietertrennung,
13 getrennte RB-Armverweise ohne RBQ-Vermischung, SKYHUB-System-/Simulationsgrenzen
und Inspire-Flugtestbedingungen. Axe prüft das neue Firmenprofil in Hell/Dunkel und
Desktop/Mobil. Eine bisherige Unit-Annahme, alle nicht als Modell extrahierten Namen
seien ungeprüft, wurde um die ausdrücklichen manuellen Familien-/Systementscheidungen
erweitert; automatische Modellkandidaten bleiben für diese Namen ausgeschlossen.
Im ersten Browserlauf bestanden 146 Fälle; zwei Navigationstests nahmen X10 auf
der ersten Ergebnisseite an. Durch zusätzliche Flugroboter liegt es später.
Die Tests suchen jetzt nach dem Modellfeld X10; beide gezielten Nachprüfungen
bestanden. Ein erster Nachprüfungsversuch mit kombiniertem Marken-/Modelltext
fand wegen der bisherigen feldweisen Suche nichts.
Die bestehende YouTube-Testantwort bleibt isoliert; tatsächliche Videowiedergabe
wird nicht geprüft.

HTML-/Export-Abgleich: 554 Themenprofile, 76 Namensprofile, 132 Namen,
80 Entscheidungen, sechs neue/angereicherte Produktseiten und 592/406/862/132
Exportzeilen. Zusätzlicher Abgleich prüft alle 28 Familienprofilelemente mit
89 verwandten Modelllinks, drei neue Feldzellen und strukturierte Eigenschaften,
drei ALOHA-Seiten sowie den Systembezug ohne Roboterziele. Build: 2.735 Seiten,
rund 410 MB. Datenprüfung: null Fehler, 558 Warnungen; die vier neuen Warnungen
sind unbekannte Erscheinungsjahre. Lint und Formatierung bestanden. Erneuter Import:
552 Belegdatensätze, null Ergänzungen.

Alle 263 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen und eigene Recherche-Hilfsprozesse verbleiben nicht.
Kein Recherchebrowser wurde geöffnet; andere Aufgabenressourcen blieben erhalten.
Änderungen sind lokal. Nachweise: `batch-32/inventory-check.json`,
`batch-32/evidence-check.json`, `batch-32/family-evidence-check.json` und
`batch-32/resource-check.json`.


## Ergänzung vom 2. November 2026 – Software, Komponenten und integrierte Systeme

49 weitere Namen aus den gespeicherten Firmenbeschreibungen haben eine getrennte
Primärquellenprüfung erhalten: 17 Softwarebezüge, 16 Komponenten/-familien,
fünf Marken-/Firmenbezüge, fünf verkürzte Konfigurationen, vier zusätzliche
Systembezüge, ein Dienst und eine Maschinengruppe. Zusammen sind 129 der 132
extrahierten Namen mit einer abgegrenzten Entscheidung versehen. Die ursprünglichen
Namen, Typen, Beschreibungs-Hashes und Quelldaten bleiben unverändert. Eine
Klassenprüfung ist keine Freigabe aller Hersteller-, Betreiber- oder Rechtsbeziehungen.
Nuro Driver bleibt beispielsweise im Original als Software typisiert; die
Primärquelle beschreibt dagegen ausdrücklich ein System aus Software und Hardware.
Oxipital AI ist als Firmen-/Technikbezug eingeordnet, ohne den behaupteten
Asset-Verkauf oder eine rechtliche Identität mit Soft Robotics zu bestätigen.

Die neuen Prüfklassen verhindern Roboterziele für Software, Komponenten, Marken,
Dienste und Maschinengruppen. Konfigurationsbezüge erfordern dagegen einen
belegten verwandten Katalogeintrag und erscheinen ausdrücklich als verwandtes
Produkt. Booster Geek/Education/Pro führen zum K1-Grundmodell; ihre abweichenden
Akkus, Rechenleistungen und Laufzeiten werden nicht vermischt. Capra „500“ führt
zur separat dokumentierten Capra-500-Plattform. BrainOS bleibt von Tennant-Hardware,
ROS/Gazebo/Open-RMF von Robotermodellen, Waymo One von Fahrzeug-Generationen und
ROBOMACHINE von einem vermeintlichen FANUC-Roboterarm getrennt.

Fünf integrierte Hardwareangebote wurden ergänzt: CafeXbot Coffee Barista Robot,
CafeXbot Ice Cream Robot, CafeXbot Robotic Cafe, ScalableArc Welding Cobot Cart und
DriveMod Forklift. VLT ist die Kioskmarke; Franke und Pasmo bleiben getrennte
Komponentenlieferanten. Das Eisangebot ist namentlich auf der Herstellerübersicht
belegt; die Detailseite lieferte keinen auswertbaren Text. Es erhält daher keine
abgeleiteten Einzelkonfigurationsdaten. Widersprüchliche Kaffee-Ausgabezeiten und
fehlerhafte Leistungs-/Energieeinheiten werden nicht übernommen. Der Schweißwagen
ist in der Industrie-Rubrik für Roboterarme eingeordnet: Scalable Robotics integriert
einen ABB GoFa-10 auf einem BuildPro Rhino Cart und liefert ScalableArc-Teaching.
Es entsteht kein zusätzliches ABB-Arm-Modell.

Bei DriveMod Forklift unterscheiden die Quellen den BYD-Basisstapler von Cyngns
Autonomietechnik. Die Meldung vom 15. Juni 2023 beschrieb Entwicklung und einen
geplanten Start. Spätere Herstellerankündigungen vom 21. Oktober 2024 und
19. Februar 2025 berichten einen ersten bezahlten Einsatz beziehungsweise weitere
Brancheneinsätze. Damit ist eine reine Entwicklungsprojekt-Einordnung überholt;
unabhängige Einsatzbestätigung, heutige Lieferung und das konkrete aktuelle Chassis
bleiben offen. Die URL /autonomous-forklift beschreibt inzwischen Tugger-Workflows
und gilt deshalb nicht als aktuelle Stapler-Spezifikation. Unterschiedliche
Traglastangaben aus älteren Fundstellen werden nicht gepoolt; die geprüften alten
PDF-URLs lieferten 404. Einsatzdaten werden nicht als Erscheinungsjahr importiert.

16 zusätzliche Firmenprofile erhalten Funktionsbeschreibungen aus eigenen Quellen,
unter anderem für AmbiOS, BrainOS, Helix, Foresight, LocusONE, MIRAI, Nuro Driver,
SubNav OS, MoveIt Pro, SuperDrive/HyperFoundry, Carbon, Waymo One und Make Wonder.
Insgesamt bestehen jetzt 20 getrennte Firmenfokus-Prüfungen. Diese Angaben sind
belegte Selbstdarstellungen, keine unabhängigen Alleinstellungs-, Sicherheits-,
Zertifizierungs-, ROI- oder Leistungsnachweise. Die littleBits-Einordnung hält
außerdem fest, dass die alte App laut Support Anfang 2025 entfernt wurde und die
Space-Rover-w33-Steuerung davon abhängt; daraus folgt keine Einstellung aller Kits.

Offen bleiben APP+ (geprüfte Herstellerseiten nennen 1+OS, keine belegte Aliasregel),
VEX Robotics beim Anbieter iDesign 365 (403 bei Anbieter, Hersteller und gewählter
Supportseite) und Kime v5 (kein Beleg der konkreten Version/Start-/Portionierungs-
Behauptung im bisher geprüften Herstellerangebot). Keine dieser Angaben wird auf
ähnlich benannte Produkte umgebogen. Neue 403/429 und die ROS-Anubis-Abfrage wurden
nicht umgangen; frei zugängliche Entwicklerhandbücher, die Plattformbeschreibung
von Open Robotics und Hersteller-Supportdokumente dienen als eigene Primärquellen.

Stand: 1.691 Modelle, 638 exakte Hersteller-Schreibweisen und 1.035 Firmen-/Markenprofile,
davon 627 mit Modellen und 408 ohne Hardwarekarten. 557 datierte Produkt-Belegdatensätze
entsprechen 436 Ergänzungen und 121 Anreicherungen. Die 421 ursprünglich zugeordneten
Katalogprodukte behalten ihre Belege. 592 Quellfirmengruppen, 406 ursprüngliche
Modell-/Familiennennungen, 862 Listings und 132 Beschreibungsnamen bleiben getrennt.
Alle 1.686 vorherigen CSV-Zeilen, 552 Produktbelege, 80 Namensentscheidungen und
20 selektiven Spezifikationsprüfungen sind unverändert erhalten. Die beiden neuen
Herstellerzuordnungen betreffen ausschließlich Scalable Robotics und VLT Robotics.
Die selektiven Feldprüfungen bleiben bei 94 Feldern für 20 Modelle. Drei ursprüngliche
Modellidentitäten, neun unklare Listings, zwei Event-Hardwareidentitäten und vier
SKYHUB-Komponenten/OEM-Funde sind weiterhin offen. Marktführerschaft ist unbewiesen.


Validierung dieser Ergänzung: 282 Unit-Tests in 20 Dateien, elf Python-Tests und
alle 168 ausgewählten Desktop-/Mobil-Browserfälle bestanden. Neue Fälle prüfen die
Trennung von Software und Robotermodellen, acht DJI-Komponenten ohne Roboterziele,
die Forklift-Zuordnung mit datierten Einsatzmeldungen sowie die Komponentenlieferanten
bei CafeXbot und dem Schweißwagen. Axe prüft zusätzlich Open Robotics, VLT und
Scalable Robotics in Hell/Dunkel auf Desktop und Mobil. Ein anfänglicher
Kategoriefehler des Schweißwagens wurde durch Einordnung als industrielles
Roboterarmsystem behoben; alle bisherigen CSV-Zeilen blieben unverändert.
Im ersten Browserlauf bestanden 166 Fälle. Zwei alte PlusAI-Prüfungen erwarteten
noch ungeprüfte Softwarenamen und eine feste Reihenfolge der Quellenlinks/-zeiten.
Die angepassten Tests prüfen die neuen Softwareentscheidungen, unveränderte
Originalquellen/-daten, fehlende Roboterlinks und APP+ weiterhin als ungeprüft.
Beide gezielten Nachprüfungen bestanden.
Die bestehende YouTube-Testantwort bleibt isoliert, tatsächliche Videowiedergabe
wird nicht geprüft.

Der HTML-/Exportabgleich bestätigt 554 Themenprofile, 76 Namensprofile, 132 Namen,
129 Entscheidungen, fünf neue Produktseiten, 20 Firmenfokus-Profile und sämtliche
592/406/862/132 Exportzeilen. Die 49 neuen Anzeigen enthalten fünf ausdrücklich
verwandte Konfigurationslinks und 44 Bezüge ohne Roboterziele. Build: 2.740 Seiten,
rund 411 MB. Datenprüfung: null Fehler, 563 Warnungen; fünf neue Warnungen betreffen
unbekannte Erscheinungsjahre. Lint und Formatierung bestanden. Erneuter Import:
557 Produktbelegdatensätze, null Ergänzungen.

Alle 276 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen; eigene Recherche-Hilfsprozesse verbleiben nicht.
Kein Recherchebrowser wurde geöffnet. Andere Aufgabenressourcen blieben erhalten.
Änderungen bleiben lokal. Nachweise: batch-33/inventory-check.json,
batch-33/evidence-check.json, batch-33/typed-evidence-check.json,
batch-33/review-findings.json und batch-33/resource-check.json.


## Ergänzung vom 2. November 2026 – APP+, VEX, Kime V5 und SKYHUB-Katalogbezüge

Alle 132 aus den Firmenbeschreibungen extrahierten Namen haben jetzt eine
abgegrenzte Quellenentscheidung. Drei bisher offene Namen wurden mit neuen,
frei zugänglichen Dokumenten eingeordnet, ohne ihre ursprünglichen Typen,
Beschreibungs-Hashes oder Quelltexte zu verändern. Dies bedeutet keine vollständige
Hardware-, Verfügbarkeits- oder Anbieterzertifizierung.

APP+ ist in einer SGInnovate-Programmbroschüre ausdrücklich als Hand-Plus-Software
mit den Picking-Zellen PICK+, MOVE+ und PACK+ genannt. Die PDF-Metadaten datieren
die Erstellung auf den 9. September 2022. Die heutige Herstellerseite beschreibt
dagegen 1+OS. Die historische Benennung ist damit belegt; Alias, Umbenennung und
gemeinsame Versionsidentität bleiben unbewiesen. Programmquellen sind im Validator
nur für Software-Bezugprüfungen zugelassen und können weder Roboterziele noch
Hardwareimporte belegen. Die übrigen Quellenanforderungen einschließlich Datum,
HTTP(S)-URL und gebundenem Beschreibungs-Hash bleiben bestehen.

Ein frei zugänglicher, auf der Hersteller-Dokumentdomain gehosteter V5-/EXP-
Unterrichtsleitfaden belegt VEX Robotics als Bildungsrobotik-Marke. Gesperrte
Hersteller-, Anbieter- und Konzernseiten werden nicht als Inhaltsbelege genutzt.
Der Markenbezug erzeugt keine Robotermodelle aus Unterrichtsbauten und bestätigt
keine Herstellerrolle oder Lieferautorisierung von iDesign 365.

Macco stellt Kime V5 in eigenen Beiträgen ausdrücklich vor und zeigt programmierte
Körperposen. Ein öffentlicher, als Mitgliedsbeitrag gekennzeichneter Technologie-
Eintrag nennt Víctor Martin von Macco und verlinkt das Datenblatt „Datasheet Kime
Macco 25.pdf“. Dieses trägt den Titel KIME V5 und 2025; seine Erstellungsmetadaten
nennen den 2. Dezember 2025. Daraus wird kein exaktes Markteinführungsdatum
abgeleitet. RGB-/Tiefenbild-Erkennung von Objekten und Zuständen wie leer/voll
belegt nicht die Verzeichnisbehauptung einer kamerabasierten Portionskontrolle.
SDK-/Softwareplattform-Angaben bedeuten keine uneingeschränkten Änderungsrechte;
dasselbe Dokument behält Änderungen dem Macco-Technikteam vor. Zertifizierungs-
behauptungen und numerische Tabellenwerte werden nicht importiert. Die lokale
Bildansicht steht nicht zur Verfügung; eine unabhängige visuelle Tabellenprüfung
wird deshalb nicht behauptet.

Vier Katalogangebote wurden ergänzt: Hand Plus PICK+, MOVE+ und PACK+ sowie
Macco Kime V5. Die aktuelle Hand-Plus-Produktseite trennt ihre eigenen Integrationen
von Partnerarmen, AMRs und Greifern. PICK+ und PACK+ sind in der Industrie-Rubrik
für Roboterarme auffindbar; MOVE+ kombiniert PICK+ mit einer mobilen Basis und
gehört zu kommerzieller Logistik. Partner-Armtypen, Traglasten, Durchsatz und
konkrete Basismodelle werden nicht aus der allgemeinen Übersicht geraten.
Kime V5 bleibt als Version von den bestehenden unversionierten Bartender-, Chef-
und Kiosk-Angeboten getrennt. Zwei neue Firmenfokus-Profile ergänzen diese
Funktions- und Integrationsgrenzen; insgesamt sind es jetzt 22.

Die vier SKYHUB-Einzelkatalogseiten wurden erstmals gesondert ausgewertet.
STT 1S MAX beschreibt Sicht-/Thermalsensorik, STT-HUB1101 den passenden
Flugakkuwechsel, STTBOT-S1 die kleinere zweifingrige Bodenplattform und STTBOT-T1
die größere Variante ohne unabhängig bewegliche Geschickhand im Standardumfang.
S1-Abmessungen, Akkukonfiguration und Arm-Messdefinitionen dürfen nicht von T1
übertragen werden; Ladeleistung, rechnerisches Ladefenster und Betriebszeit sind
unterschiedliche Größen. Die Seiten nennen ihre Angaben Katalogspezifikationen
und erklären ausdrücklich, dass sie keine ausgelieferte Anlage belegen. Vier
belegte Katalog-Funktionsbezüge und ihre direkten Quellen ergänzen daher das
Firmenprofil. OEM, physisches Produkt, Auslieferung und gelieferte Konfiguration
bleiben vier offene Hardwareprüfungen. Die ursprünglichen Funddatensätze bleiben
erhalten; es werden daraus keine zusätzlichen eigenständigen Roboterkarten erzeugt.

Stand: 1.695 Modelle, 639 exakte Hersteller-Schreibweisen und 1.035 Firmen-/Markenprofile,
davon 628 mit Modellen und 407 ohne Hardwarekarten. 561 datierte Produktbelege
entsprechen 440 Ergänzungen und 121 Anreicherungen. Alle 1.691 vorherigen CSV-Zeilen,
557 Produktbelege, 129 Namensentscheidungen und 20 selektiven Feldprüfungen sind
unverändert erhalten. Nur Hand Plus erhält eine neue, explizite Zuordnung zu seinen
eigenen Integrationsangeboten. Die 592 Quellfirmengruppen, 406 ursprünglichen
Modell-/Familiennennungen, 862 Listings und 132 Beschreibungsnamen bleiben getrennt.
Die 421 ursprünglich zugeordneten Katalogprodukte behalten ihre Produktbelege.
Alle Namensentscheidungen sind jetzt vorhanden; die zwei Event-Hardwareidentitäten,
drei ursprünglichen Modellidentitäten, neun unklaren Listings, vier SKYHUB-
Hardwareprüfungen, heutige Lieferbedingungen und Marktführerschaft bleiben offen.


Validierung dieser Ergänzung: 284 Unit-Tests in 20 Dateien, elf Python-Tests und
alle 182 ausgewählten Desktop-/Mobil-Browserfälle bestanden. Neue Prüfungen
decken die drei Hand-Plus-Systeme, den getrennten Kime-V5-Bezug, VEX ohne
Hardwarezuordnung, SKYHUB ohne neue Roboterkarten sowie historische APP+-Software
ab. Ein zusätzlicher Validator-Test verhindert, dass Programmquellen als
Hardwarebelege gelten. Axe prüft Hand Plus und Macco zusätzlich in Hell/Dunkel
auf Desktop und Mobil. Die bestehende YouTube-Testantwort bleibt isoliert;
tatsächliche Videowiedergabe wird nicht geprüft.
Im ersten Browserlauf bestanden 180 Fälle. Zwei alte Macco-Suchtests erwarteten
noch drei Angebote; sie prüfen jetzt zusätzlich die separat belegte V5-Karte und
alle vier Produktlinks. Beide gezielten Desktop-/Mobil-Nachprüfungen bestanden.

Der HTML-/Exportabgleich bestätigt 554 Themenprofile, 76 Namensprofile, 132 Namen
mit 132 Entscheidungen, vier neue Produktseiten und alle 592/406/862/132
Exportzeilen. Der gezielte Namensabgleich prüft drei neue Entscheidungen, einen
Versionslink, drei Hand-Plus-Karten und vier SKYHUB-Katalogbezüge ohne neue
Hardwarekarten. Build: 2.744 Seiten, rund 411 MB. Datenprüfung: null Fehler,
567 Warnungen; vier neue Warnungen betreffen unbekannte Erscheinungsjahre.
Lint und Formatierung bestanden. Erneuter Import: 561 Produktbelege, null Ergänzungen.

Alle 297 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen; eigene Recherche-Hilfsprozesse verbleiben nicht.
Kein Recherchebrowser wurde geöffnet. Andere Aufgabenressourcen blieben erhalten.
Änderungen bleiben lokal. Nachweise: batch-34/inventory-check.json,
batch-34/evidence-check.json, batch-34/name-evidence-check.json,
batch-34/review-findings.json und batch-34/resource-check.json.


## Ergänzung vom 2. November 2026 – Universal-Robots-Angebote und belastbare Auswahlwerte

Die Hersteller-Familienübersichten wurden auf ihre 17 einzeln verlinkten Angebote
geprüft. Bisher standen nur drei Gen-7-Arme ohne datierte Produktmerkmalsbelege im
Katalog. Ergänzt sind zwölf benannte Konfigurationen: UR3e auf CB5 und UR3e-540,
UR7e auf CB5 und UR7e-920, UR12e auf CB5 und UR12e-1300, UR16e auf CB5 sowie
UR8 Long, UR15, UR18, UR20 und UR30 jeweils auf CB5. Die expliziten CB5-/CB7-Angebote
sind Controller-Konfigurationen; daraus werden keine zwölf neuen mechanischen
Armentwicklungen abgeleitet. UR20-1750 und UR30-1300 sind separat verlinkte Namen,
deren Seiten aber keine andere Controller-/Hardwarekonfiguration gegenüber CB5
belegen. Sie bleiben zwei offene Namens-/Konfigurationsprüfungen ohne zusätzliche
Roboterkarten. Aktuelle Angebote belegen keine vollständige historische Modellpalette.

Die drei vorhandenen g-Series-Arme haben jetzt datierte Produktbelege und fünf
gezielt geprüfte Werte je Modell. UR17g-1300 erhält statt der zuvor pauschalen
17 kg die dokumentierten 15 kg Grundtraglast und bis zu 17,5 kg erweiterte Traglast.
Auch bei UR10g, UR8 Long, UR15, UR20 und UR30 bleiben Grund-/Maximaltraglast und
Herstellerbedingungen getrennt. Werkzeuggewicht gehört zur Belastung. Die
g-Series-Datenblätter nennen 47,3 / 43,4 / 42 kg einschließlich Kabel; die bloßen
Armgewichte auf den Produktseiten werden damit nicht gleichgesetzt. TCP-Maximaltempo
ist keine zugesicherte Taktleistung. SP7 ist laut Datenblatt optional.

UR3e-540 und UR7e-920 behalten offene Reichweitenkonflikte: Die Seiten nennen
540 bzw. 920 mm, ihre verlinkten generischen Armdatenblätter 500 bzw. 850 mm.
Auch die Zollumrechnung auf den Seiten entspricht den älteren Werten. Deshalb
werden weder ein mechanischer Reichweitenzuwachs noch eine Fehlerkorrektur des
Herstellers behauptet. Die ursprünglichen CB5-Werte bleiben getrennt. Abweichende
Wiederholgenauigkeiten werden nicht als zusätzliche Spezifikation importiert.
Alte /ur8-long-, /ur15- und /ur18-Adressen liefern inzwischen g-Series-Inhalte;
die CB5-Vorgänger werden über ihre expliziten Produktseiten belegt. Ein alter
UR16e-Pfad und zwei veraltete PDF-Links antworten mit 404; funktionierende direkte
Herstellerlinks belegen die Produkte, nicht diese Fehlerseiten.

Eine zusätzliche Firmenfokus-Prüfung trennt die drei Familien und deren
Werkzeugschnittstellen. Die Herstelleranleitung verlangt eine Beurteilung der
konkreten Anwendung; eine pauschal schutzzaunfreie Nutzung wird nicht behauptet.
PDF-Revisionen vom Oktober 2026 sind keine Markteinführungsdaten. Lieferfähigkeit,
Preis, Zertifizierung und ROI werden nicht aus Werbeaussagen abgeleitet. PDF-Text
wurde ausgewertet; eine unabhängige visuelle Tabellen-/Diagrammprüfung wird nicht
behauptet. Die Spezifikationsbelege führen direkt zum technischen Armdatenblatt;
Produktseite und Datenblatt sind außerdem gemeinsam unter den Produktquellen sichtbar.

Stand: 1.707 Modell-/Konfigurationseinträge, 639 Hersteller-Schreibweisen,
1.035 Firmen-/Markenprofile (628 mit Modellen / 407 ohne), 576 datierte Produktbelege
(452 Ergänzungen / 124 Anreicherungen) und 23 Firmenfokus-Prüfungen. Die Feldprüfung
umfasst 169 Werte auf 35 Modellen: 145 dokumentiert, 18 nicht dokumentiert,
vier widersprüchlich und zwei Roadmap-Werte. Davon sind 75 Werte auf 15 Angeboten neu
geprüft. Alle 561 bisherigen Produktbelege, 132 Namensentscheidungen, 20 vorherigen
Feldprüfungen und 1.692 der 1.695 alten CSV-Zeilen sind unverändert; drei zuvor
vorhandene UR-Zeilen wurden ausdrücklich anhand neuer Primärquellen überarbeitet.
Die ursprünglichen drei Modellidentitäten und neun unklaren Listings bleiben offen.

Validierung: 286 Unit-Tests bestanden. Alle 14 neuen Desktop-/Mobil-Browserfälle
bestanden, einschließlich acht Axe-Fällen in Hell/Dunkel auf Marken-/Produktseiten.
Nach Umstellung der Spezifikationslinks auf die PDFs bestanden sechs gezielte
Funktionsnachprüfungen. Die 182 Browser- und elf Python-Fälle der vorherigen Ergänzung
sind separat dokumentiert; sie wurden hier nicht erneut ausgeführt. HTML-/Export-
Abgleich: 554 Themenprofile, 76 Namensprofile, 132 Entscheidungen, 15 Produktseiten
und 592/406/862/132 Exportzeilen. Alle 75 neuen Feldzellen, Quellenlinks und
strukturierten Produktwerte stimmen überein; die 15 unbekannten Preise erzeugen
keine strukturierten Kaufangebote. Build: 2.756 Seiten, rund 413 MB. Datenprüfung:
null Fehler, 579 Warnungen; zwölf neue Warnungen betreffen unbekannte Erscheinungsjahre.
Testformatierung bestanden, erneuter Import: 576 Belege und null Ergänzungen.

Alle 86 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen und eigene Recherche-Helfer verbleiben nicht. Kein
Recherchebrowser wurde geöffnet; andere Aufgabenressourcen blieben erhalten.
Änderungen bleiben lokal. Nachweise unter batch-35/: product-decisions.json,
inventory-check.json, evidence-check.json, specification-evidence-check.json und
resource-check.json. Marktführerschaft bleibt unbewiesen.


## Ergänzung vom 2. November 2026 – MiR-Plattformen, historische Modelle und Partnerzuordnung

Drei historische Transportplattformen sind nach datierten Herstellerdatenblättern
und der MiR-Historie ergänzt: MiR200 (2017), MiR500 (2018) und MiR1000 (2019).
Die PDFs sind vom Hersteller erstellte Unterlagen beim Distributor RG Group;
die Quellenrolle bleibt ausdrücklich kenntlich. Eine historische Spezifikation
belegt weder aktuelle Lieferbarkeit noch Abkündigung. Die heutigen 404-Antworten
auf alte Produktpfade und fehlende Sitemap-Einträge ändern daran nichts. MiR100
bleibt unverändert; eine vollständige historische Modellpalette wird nicht behauptet.

Vier vorhandene Plattformen wurden mit den aktuellen Hersteller-Spezifikationen
abgeglichen: MiR250, MiR600, MiR1350 und MiR1200 Pallet Jack. Die 77 Feldprüfungen
auf sieben Modellen trennen Basis-Traglast, Schleppkapazität und Modul-Nutzlast.
Hook 250 nennt 500 kg Schleppkapazität, nicht 500 kg Plattformtraglast; EU Pallet
Lift 1350 nennt 1.250 kg nutzbare Palettenlast auf der 1.350-kg-Basis. Der schmale
800-mm-Durchgang beim MiR250 setzt die beschriebene Schutzfeldkonfiguration voraus;
der Standardwert beträgt 1.500 mm. Laufzeiten bleiben mit Lastbedingungen erhalten:
MiR250 bis 13 h voll / 17 h 30 min leer, MiR600 bis 8 h 30 min voll / 11 h leer,
MiR1350 6 h 45 min voll / 9 h 50 min leer. Nachladeverhältnisse sind keine Dauer
einer vollständigen Batterieladung. MiR1000 hat eine dokumentierte 10–90-Prozent-
Ladezeit, aber keine in dieser Unterlage belegte Betriebslaufzeit oder IP-Klasse.

Der Pallet Jack behält drei markierte Konfliktfelder: 750 kg und 1.786 lb sind
keine äquivalenten Massen; Übersicht und technische Seite nennen 8 bzw. bis 10 h;
das Datenblatt druckt die Gehäusemaße in cm, die technische Seite in mm und nennt
1.140 statt 1.120 mm maximale Hubhöhe. Einheiten und Werte werden nicht stillschweigend
korrigiert. Die mm-Maße bleiben mit Konfliktkennzeichnung sichtbar; die Masse bleibt
unbestätigt. PDF-Text wurde ausgewertet, eine unabhängige visuelle Tabellenprüfung
wird nicht behauptet. Hersteller-Fallstudien sind keine unabhängigen Leistungsnachweise.

Zwei Firmenfokus-Prüfungen ergänzen MiR und Enabled Robotics. MiR Fleet/Insights
werden als Software erfasst. Zehn Zubehör-/Stationsentscheidungen und zwei
Partnerintegrationen erzeugen keine zusätzlichen Roboterkarten. Die MiR-Seiten
schreiben MC250/MC600 ausdrücklich Enabled zu; ihre Beziehung zu heutigen ER-FLEX-
und ER-MAX-Varianten ist nicht als exakter Modellalias belegt. Historische Broschüren
mit anderen UR-Armen/Traglasten werden nicht auf heutige Varianten übertragen.
Betriebszeit und tägliche Auslastung bleiben getrennt; 3D-Positionierung bleibt optional.

Aktueller Gesamtstand: 1.710 Modell-/Konfigurationseinträge, 639 Hersteller-Schreibweisen,
1.035 Firmen-/Markenprofile (628 mit Modellen / 407 ohne), 579 datierte Produktbelege
(455 Ergänzungen / 124 Anreicherungen), 25 Firmenfokus-Prüfungen und 246 geprüfte
Felder auf 42 Modellen: 197 dokumentiert, 40 nicht dokumentiert, sieben widersprüchlich,
zwei Roadmap-Werte. Alle Quelleninventare, 132 Namensentscheidungen und 35 bisherigen
Feldprüfungen bleiben erhalten. Von 1.707 alten CSV-Zeilen sind 1.703 unverändert,
vier ausdrücklich aktualisiert; von 576 alten Merkmalsdatensätzen sind 572 unverändert,
vier überarbeitet und drei neue angefügt. Drei ursprüngliche Modellidentitäten und
neun unklare Listings bleiben offen. Vollständige Herstellerprüfung und Marktführerschaft
sind weiterhin nicht belegt.

Validierung: 289 Unit-Tests und 22 neue Desktop-/Mobil-Browserfälle bestanden,
einschließlich zwölf Axe-Fällen für Hell/Dunkel. Frühere Browser-/Python-Ergebnisse
bleiben als Historie erhalten und wurden hier nicht erneut ausgeführt. HTML-/Export-
Abgleich: 554 Themenprofile, 76 Namensprofile, 132 Entscheidungen, sieben Produktseiten,
592/406/862/132 Exportzeilen. Alle 77 Felder stimmen mit den CSV-Werten überein;
55 Quellenmarkierungen, 48 strukturierte Werte und drei Konfliktzellen sind geprüft.
15 leere Felder bleiben ausgeblendet. Sieben Erscheinungsjahre stehen in zusätzlichen
Tabellenzeilen und haben derzeit keine einzelne Quellenmarkierung; die Hersteller-
Historie ist in den Produktquellen verlinkt. Unbekannte Preise erzeugen keine Kaufangebote.
Build: 2.759 Seiten, rund 414 MB. Datenprüfung: null Fehler, 575 Warnungen (vier weniger,
weil bisher fehlende Erscheinungsjahre belegt sind). Testformatierung und wiederholter
Import bestanden: 579 Produktbelege, null Ergänzungen. Kein Anwendungscode geändert.

Alle 63 erfassten eigenen Testprozesse sind beendet,
Port 4321 ist geschlossen und eigene Recherche-Helfer verbleiben nicht. Andere
Aufgabenressourcen bleiben erhalten. Änderungen sind lokal. Nachweise unter
scratch/competitor-research/primary/batch-36/: product-decisions.json,
non-model-decisions.json, inventory-check.json, evidence-check.json,
specification-evidence-check.json und resource-check.json.


## Ergänzung vom 2. November 2026 – Produktmerkmale und Quellen im Modellvergleich

Die Vergleichstabelle zeigte bislang technische Werte ohne die recherchierten
Produktmerkmale oder deren Belege. Sie zeigt jetzt für alle verfügbaren 579
Merkmalsdatensätze sämtliche 1.782 Aussagen, 712 Quellenreferenzen mit Prüfdatum
und Quellenrolle sowie die einschlägigen Feldprüfungen. Diese Aussagen sind keine
1.782 nachgewiesenen Alleinstellungsmerkmale. Hersteller-, Entwickler-, Integrator-
und Einsatzbetreiberquellen bleiben unterscheidbar. Doppelte Quellen mit identischer
Adresse, Datum und Rolle erscheinen pro Modell einmal. Ein vorhandener Merkmalsbeleg
bestätigt nicht die ganze technische Tabelle oder aktuelle Lieferbarkeit.

Widersprüchliche Werte, Roadmap-Angaben und nicht dokumentierte Felder behalten
sichtbare Prüfhinweise und Bedingungen. Ungeprüfte Modelle bekommen keine erfundene
Verifikation. Modellnamen verlinken ihre Detailseiten. Die neue öffentliche JSON-Datei
enthält ausschließlich Merkmale, Primärquellen und Feldprüfstatus/-hinweise, keine
internen Recherchepfade oder vollständigen Wettbewerberbeschreibungen. Sie wird
bei mindestens zwei Vergleichsmodellen erst beim Öffnen nachgeladen und während
der Seitensitzung wiederverwendet. Unkomprimiert: 319.656 Byte. Die bestehende
1.324.091-Byte-Katalogdatei bleibt unverändert; die Startansicht lädt keine zusätzlichen
Belege. Bei Ladefehler bleiben technische Werte und Modelllinks nutzbar; ein eigener
Hinweis und eine erneute Ladeaktion ersetzen keine Quellen durch erfundene Inhalte.
Verspätete Antworten überschreiben weder einen geleerten Vergleich noch die neue
Sprache. Englisch dient als Rückfall für alle 28 Oberflächensprachen; deutsche
Beschriftungen sind übersetzt. Die geprüften Merkmalsaussagen bleiben in ihrer
bisherigen Sprache. Lange Tabellen scrollen innerhalb der Vergleichsansicht.

Validierung: 292 Unit-Tests, 144 frische Desktop-/Mobil-Browserfälle bestanden:
18 neue Vergleichsfälle einschließlich vier Hell-/Dunkel-Axe-Fällen und 126
bestehende Marken-, Katalog- und Detailprüfungen. Geprüft sind vollständige Merkmals-
und Quellenanzeige, Quellenrollen, Konflikthinweise, fehlende Prüfungen, Laden bei
Bedarf, Wiederverwendung, HTTP-Fehler mit erneutem Laden, verspätete Antworten,
Sprachwechsel, HTML-Escaping und das Auslassen ausführbarer Quellen-URLs. Zusätzlich
stimmen alle 579 Merkmalsdatensätze und 246 Feldprüfstatuswerte auf 42 Modellen im
erzeugten JSON mit den Belegdateien überein. Die bisherigen 554 Themenprofile,
76 Namensprofile, 132 Entscheidungen, sieben MiR-Seiten und 592/406/862/132
Exportzeilen sind erneut abgeglichen. Lint für die geänderten JavaScript-Dateien
und Formatierung bestanden. Build: 2.759 HTML-Seiten plus Datenendpunkte, rund
414 MB. Datenprüfung: null Fehler, 575 bestehende Warnungen. Alle 25 gesicherten
Daten-/Inventardateien sind bytegleich; 1.710 Katalogzeilen, 579 Belege und
42 Feldprüfungen bleiben unverändert. Drei Modellidentitäten und neun unklare
Listings bleiben offen; Marktführerschaft ist nicht nachgewiesen.

Alle 177 erfassten eigenen Testprozesse sind beendet;
Port 4321 ist geschlossen und eigene Recherche-Helfer verbleiben nicht. Andere
Aufgabenressourcen bleiben erhalten. Änderungen sind lokal. Nachweise unter
scratch/competitor-research/primary/batch-37/.


## Ergänzung vom 2. November 2026 – XYZ Robotics: echte Modelle statt generischer Quellenetiketten

Vier herstellerbelegte Angebote sind ergänzt: RockyOne und RockyLight als mobile
Manipulationsroboter sowie RockyOne SE und die ausdrücklich stationäre RockyLight-SE-
Ausführung als benannte Palettierroboter. Zwei aktuelle Produktseiten nennen die
mobilen Grunddaten: 30 bzw. 25 kg maximale Handhabungslast, 1.200 bzw. 650 kg
Robotergewicht, 0,9 bzw. 2 m/s Fahrtempo und IP54 bzw. IP20. Die 1.400 × 1.060 bzw.
1.120 × 800 mm sind Stellflächen, keine vollständigen Gehäusemaße. Werkzeuganteile,
Anwendungslasten und Sicherheitsbedingungen bleiben separat zu prüfen. Die
Herstellerhistorie nennt 2023 und 2024 als Einführung der beiden mobilen Modelle.
Fallberichte mit 28/29-kg-Kartons sind keine universellen Grenzen oder Leistungsgarantien.

Herstellerfälle vom 3. Juli 2025, 21. Januar 2026 und 3. August 2026 belegen die
SE-Namen und beschriebenen Funktionen. RockyLight SE nutzt laut Fallbericht 3D-
Erfassung, Palettenplanung und nach außen orientierte Barcodes. RockyOne SE wird
mit Karton-Reorientierung und vorgegebenen Palettenmustern beschrieben. Keine
mobilen Leistungsdaten, Baugrößen oder Batteriezeiten werden auf SE übertragen.
Fallveröffentlichungen belegen kein SE-Erscheinungsjahr. Fallberichte und Kundenzitate
auf Herstellerseiten sind keine unabhängige Betriebs-, ROI- oder Durchsatzprüfung.
Komplette Förder-/Sortierlinien, Barcode-Hardware und die Rocky-MMR-Familie erzeugen
keine weiteren Roboterkarten. Der Download-Hinweis führt im gespeicherten Linkinventar
nicht direkt zu einem Dokument; kein Formular wurde abgeschickt oder geschütztes PDF bezogen.

Eine Firmenfokus-Prüfung und die Produktseiten zeigen die offizielle XYZ-Adresse
getrennt vom ursprünglichen MarketWatch-Quellenlink. Die drei Wettbewerberetiketten
DeliveryDrone, SecurityGuard und ServiceBot bleiben unbestätigt; aktuelle Lagerroboter
belegen deren Identität nicht. Auch Kawasaki A700/Kx und Parrot CHUCK DV7 bleiben
mangels eindeutiger Primärzuordnung offen. Ähnliche Namen werden nicht als Aliasse
ausgegeben. Gesperrte Wettbewerber-/Herstellerhosts wurden nicht erneut angefragt.
Vier alte, in Suchresultaten genannte Routen liefern 404; die Belege stammen von
funktionierenden, aktuell verlinkten Herstellerseiten. Die Fehlerseiten belegen weder
Modellidentität noch Abkündigung.

Stand: 1.714 Modelle/Konfigurationen, 640 Hersteller-Schreibweisen, 1.035 Profile
(629 mit Modellen / 406 ohne), 583 Produktbelege (459 Ergänzungen / 124 Anreicherungen),
26 Firmenfokus-Prüfungen. 290 Feldentscheidungen auf 46 Modellen: 211 dokumentiert,
70 nicht dokumentiert, sieben widersprüchlich und zwei Roadmap-Werte. Die 44 neuen
Feldentscheidungen enthalten 26 bewusst leere Felder. Alle 1.710 bisherigen CSV-Zeilen,
579 Produktbelege, 42 Feldprüfungen und 132 Quellen-Namensentscheidungen bleiben
unverändert. Beim XYZ-Firmengruppeneintrag wurde ausschließlich die nun vorhandene
Katalog-Herstellerzuordnung ergänzt. Die drei offenen Modellidentitäten und neun
unklaren Listings bleiben erhalten; Marktführerschaft bleibt unbewiesen.

Validierung: 294 Unit-Tests und 20 neue Desktop-/Mobil-Browserfälle bestanden,
einschließlich zwölf Axe-Fällen in Hell/Dunkel. Die 144 vorherigen Browserfälle bleiben
als Historie dokumentiert und wurden für diese reine Datenergänzung nicht erneut
ausgeführt. Abgleich von 554 Themenprofilen, 76 Namensprofilen, 132 Entscheidungen,
vier neuen Produktseiten und 592/406/862/132 Exportzeilen. Alle 44 neuen Feldwerte,
16 Quellenmarkierungen und zwölf strukturierten Eigenschaften stimmen überein;
26 leere Felder bleiben ausgeblendet, unbekannte Preise erzeugen keine Kaufangebote.
Erscheinungsjahre stehen weiterhin als zusätzliche Tabellenzeilen ohne eigene
Feldmarkierung; die Herstellerhistorie ist verlinkt. Das Vergleichs-JSON liefert jetzt
583 Datensätze / 1.810 Aussagen / 722 Quellenreferenzen und 290 Feldprüfstatuswerte;
unterschiedliche Aussagen sind keine nachgewiesenen Alleinstellungsmerkmale.
Build: 2.763 HTML-Seiten, rund 415 MB. Datenprüfung: null Fehler, 577 Warnungen,
zwei neue wegen unbekannter SE-Erscheinungsjahre. Formatierung, Test-Lint und
wiederholter Import bestanden: 583 Belege, null Ergänzungen. Anwendungscode unverändert.
Alle 61 erfassten eigenen Testprozesse beendet,
Port 4321 geschlossen, keine eigenen Recherche-Helfer verbleiben. Andere Aufgaben-
ressourcen erhalten; Änderungen lokal. Nachweise unter batch-38/.


## Ergänzung vom 2. November 2026 – Recherchierte Produktmerkmale in der Modellsuche

Die bisherige Katalogsuche prüfte Modellnamen, Hersteller, Kurzbeschreibungen und
Tags. Merkmalsaussagen waren nur auf Detailseiten und im Vergleich verfügbar.
Die Suche prüft jetzt zusätzlich alle 1.810 Aussagen aus 583 Produktbelegen.
Konkrete Vorher-/Nachher-Abfragen: ECIC 0→1 (RockyLight), AprilTag 0→1 (MiR250),
barcode facing outward 0→1 (RockyLight SE), Parrot ANAFI UKR 0→1 und Karcher 0→5.
Das sind geprüfte Textabfragen im eigenen Katalog, keine Reichweiten-/Rankingmessung.
Bei vollständigen Merkmalsätzen fehlten zuvor 719 Treffer für das jeweils zugehörige
Modell; nun sind alle 1.810 Sätze für ihr Modell abrufbar. Diese Diagnose prüft
wörtlichen Text, keine beliebigen natürlichen Fragen oder nachgewiesenen Alleinstellungsmerkmale.

Ausschließliche Merkmalstreffer zeigen den ganzen passenden Satz, damit Bedingungen
und Einschränkungen erhalten bleiben, und verlinken direkt zum Merkmals-/Quellenabschnitt.
Treffer in Name, Beschreibung oder Tags behalten den normalen Modelllink. Die Suche
normalisiert Groß-/Kleinschreibung, Akzente, ß, Leerraum und Bindestrichvarianten;
Hersteller plus Modell sind gemeinsam suchbar. Diese Abrufregeln ändern keine
Identitätszuordnung. Verzeichnisbehauptungen, Quelladressen und interne Recherche-
Metadaten werden nicht als zusätzliche Modellmerkmale indexiert. Englische Merkmals-
texte werden nicht als übersetzte deutsche Sachtexte ausgegeben.

Suche und Vergleich teilen einen einzigen bei Bedarf geladenen Belegabruf und den
Zwischenspeicher der Seitensitzung. Ein Katalogaufruf ohne Suchanfrage oder Vergleich
lädt keine Belegdatei. Katalogdatei (1.328.307 Byte) und Beleg-JSON (336.131 Byte)
bleiben byteinhaltlich unverändert. Während des Ladens zeigt die Suche den Zustand;
sie meldet bei fehlenden Basistreffern noch kein abschließendes leeres Ergebnis.
Bei Ladefehler bleiben Basissuche und Filter nutzbar; ein ausdrücklicher Hinweis
begrenzt die Trefferabdeckung und bietet erneutes Laden an. Verspätete Antworten
berücksichtigen die aktuelle Abfrage und stellen keine gelöschte Suche wieder her.
Filter, Zurück-Navigation und Sprachwechsel bleiben erhalten. Treffertext wird als
Text ausgegeben, eingebettetes Markup nicht ausgeführt. UI-Beschriftungen haben
englischen Rückfall und deutsche Übersetzungen.

Validierung: 300 Unit-Tests in 23 Dateien und 188 frische Desktop-/Mobil-Browserfälle
abgedeckt: 186 bestanden im Erstlauf; zwei Filterfälle bestanden nach gezielter
Testkorrektur auf Desktop und Mobil. Der Test hatte den bereits über URL-Filter
geöffneten Bereich wieder geschlossen; jetzt prüft er den geöffneten Zustand. Der
Anwendungscode blieb für die Nachprüfung unverändert. Davon sind 24 neue Suchfälle einschließlich vier Hell-/Dunkel-Axe-Fällen;
164 bestehende Vergleichs-, Marken-, Katalog-, Detail- und XYZ-Fälle wurden erneut
ausgeführt. Gesamte frische Axe-Abdeckung: vier Such-, vier Vergleichs- und zwölf
XYZ-Fälle. Daten-/Exportabgleich: 554 Themenprofile, 76 Namensprofile, 132 Entscheidungen,
vier XYZ-Produktseiten und 592/406/862/132 Exportzeilen. Alle 25 gesicherten Daten-/
Inventardateien bleiben bytegleich: 1.714 Katalogzeilen, 583 Belege, 46 Feldprüfungen,
290 Feldentscheidungen, 26 Firmenfokus-Prüfungen und sämtliche Quellenidentitäten
unverändert. Lint der geänderten JavaScript-/Astro-Dateien und Formatierung bestanden.
Build: 2.763 HTML-Seiten, rund 415 MB. Datenprüfung: null Fehler, 577 bestehende
Warnungen. Drei Modellidentitäten und neun unklare Listings bleiben offen;
Marktführerschaft ist nicht gemessen. Alle 268
erfassten eigenen Testprozesse beendet, Port 4321 geschlossen, keine eigenen
Recherche-Helfer. Andere Aufgabenressourcen erhalten; Änderungen lokal.
Nachweise unter scratch/competitor-research/primary/batch-39/.


## Ergänzung vom 2. November 2026 – Unitree: Variantenwerte korrigiert

Zwei erfolgreich gesicherte Herstellerseiten enthalten beschriftete Spalten für
G1/G1 EDU und Go2 AIR/PRO/X/EDU. Die Spaltenzuordnung ist aus dem HTML dokumentiert,
nicht aus zusammengezogenen Textwerten geraten. Sechs vorhandene Karten sind
überarbeitet, Go2 X ist als separat benannte Ausführung ergänzt. Die vorhandene
Schreibweise Go2-EDU bleibt erhalten; es entsteht keine zweite EDU-Karte.

Go2 Pro nennt aktuell 2.800 US-Dollar ohne Steuer/Fracht und 0–3,5 m/s statt der
alten rund 2.700 Dollar und 4,0 m/s. AIR: etwa 7 kg / maximal etwa 10 kg Last,
0–2,5 m/s. PRO: etwa 8 kg / maximal etwa 10 kg. X und EDU: etwa 8 kg / maximal
etwa 12 kg, 0–3,7 m/s mit separat genanntem Maximum von etwa 5 m/s. Der
5-m/s-Seitenkopf ist als Labortest qualifiziert, kein Tempo jeder Ausführung.
AIR/PRO/X haben laut Tabelle 8.000 mAh und etwa 1–2 Stunden Laufzeit, EDU
15.000 mAh und etwa 2–4 Stunden. Höchstlast, Tempo, Gelände und Laufzeit sind
keine Garantie gleichzeitig erreichbarer Leistungswerte. Akku-/Ladegerätedaten
belegen keine vollständige Ladedauer. EDU hat Kontaktpreis; der alte 3.000-Dollar-
Wert ist nicht übernommen. X nennt 4.500 Dollar ohne Steuer/Fracht.

Die generische Go2-Karte enthält nur gemeinsame Maße/Gewicht; Preis, Last, Tempo,
Gelände und Laufzeit erfordern eine ausgewählte Variante. Sie kombiniert keinen
AIR-Preis mit X-Geschwindigkeit. Unbelegte IP54-Werte und die unbelegte EDU-
Altersspanne sind entfernt. Grafisches Programmieren ist von voller sekundärer
Entwicklung getrennt: AIR/PRO sind mit ○, X mit ◕ und EDU mit ● markiert. Der
genaue SDK-Umfang von X ist damit nicht als voller EDU-Umfang bewiesen. Dock-
Kompatibilität von X/EDU belegt kein mitgeliefertes Dock. Die Pro-Beschreibung
verspricht keine pauschale GPT-Funktion mehr. Consumer-Zuordnung bleibt für die
Unterfilter erhalten, EDU zusätzlich im Forschungsbereich; entfernte pauschale
Geländetags werden nicht durch neue Leistungsgarantien ersetzt.

G1 nennt etwa 2 kg maximale Armlast, EDU etwa 3 kg; Armhaltung beeinflusst die
Last stark. Das ist keine Ganzkörper-Traglast. Steh- und Faltmaße sowie Akku-
Gewicht sind konkret ausgewiesen. EDU-Hände und Rechner bleiben optional. Ein
G1-Gehgeschwindigkeitswert ist in der geprüften Tabelle nicht dokumentiert;
der alte 2-m/s-Wert ist entfernt. Rund zwei Stunden sind eine Schätzung,
kein gesondert garantiertes Maximum. Demonstrationsfunktionen sind teilweise
noch in Entwicklung. Bestehende Erscheinungsjahre, Bilder und Videos wurden
durch diese ausgewählten Feldprüfungen nicht neu verifiziert.

Stand: 1.715 Modelle/Konfigurationen, 640 Hersteller-Schreibweisen und 1.035
Profile (629 mit Modellen / 406 ohne). 586 Produktbelege: 460 Ergänzungen und
126 Anreicherungen bestehender Modelle; 1.846 einzelne Merkmalsaussagen und
725 Produkt-Quellenreferenzen. 365 ausgewählte Feldentscheidungen auf 53
Modellen: 257 dokumentiert, 99 nicht dokumentiert, sieben widersprüchlich,
zwei Roadmap-Werte. Die 75 neuen Entscheidungen betreffen sieben Karten.
1.708 bisherige CSV-Zeilen sind unverändert, sechs explizit korrigiert, eine
ergänzt. 579 bisherige Produktbelege unverändert, vier aktualisiert, drei neu.
Alle 46 früheren Feldprüfungen und ursprünglichen Quellenidentitäten sind
erhalten. Drei Modellidentitäten und neun unklare Listings bleiben offen;
vollständige Herstellerabdeckung und Marktführerschaft sind nicht bewiesen.

Validierung: 303 Unit-Tests in 23 Dateien bestanden. Der erste Lauf meldete
302 bestanden / einen Fehler wegen fehlender Unterfilterzuordnung nach der
Tagbereinigung; nach Ergänzen der Consumer-Klassifikation ist der volle Lauf
erfolgreich. 20 Unitree-Browserfälle auf Desktop/Mobil abgedeckt: 14 bestanden im Erstlauf,
sechs nach gezielter Testkorrektur. Die Tests erwarteten zunächst einen formatierten
Preis und den falschen Markenpfad /brands/unitree/; geprüft werden jetzt der
qualifizierte Preistext und /brands/unitree-robotics/. Anwendungscode unverändert.
Die Abdeckung enthält zwölf Axe-Prüfungen in Hell/Dunkel. Die 188 Fälle aus Batch 39 sind
Historie, keine erneuten Durchläufe. Sieben Seiten, 75 Werte, 49
Quellenmarkierungen, 26 ausgelassene leere Felder, 38 strukturierte
Eigenschaften und vier numerische Preisangebote stimmen überein. Unbekannte
Preise erzeugen keine strukturierten Kaufangebote. Erneuter Abgleich von 554
Themenprofilen, 76 Namensprofilen, 132 Entscheidungen und 592/406/862/132
Exportzeilen. Alle 1.846 Merkmalsaussagen bleiben für ihr Modell suchbar.
Vergleichs-JSON: 354658 Byte, vollständig mit Quellen/Status abgeglichen;
interne Recherchepfade ausgeschlossen. Build: 2.764 Seiten, rund 415 MB.
Datenprüfung: null Fehler, 578 Warnungen; eine neue wegen unbekanntem Go2-X-
Erscheinungsjahr. Wiederholter Import: 586 Belege, null Ergänzungen. Test-Lint
und Formatierung bestanden. Anwendungscode unverändert. Alle
120 erfassten eigenen Testprozesse beendet, Port 4321 geschlossen,
keine eigenen Recherche-Helfer. Fremde Ressourcen erhalten. Änderungen lokal.
Nachweise: scratch/competitor-research/primary/batch-40/.


## Ergänzung vom 2. November 2026 – Verlorene Quellenmerkmale wieder erfasst

Der Vergleich gespeicherter Beschreibungen mit den kontrollierten Merkmalsthemen
zeigte konkrete Lücken. 24 zusätzliche Themenvorlagen erfassen jetzt 45 direkte
Zuordnungen: 27 aus 17 Firmenbeschreibungen und 18 aus 14 Listings. Daraus folgen
elf zusätzliche Zuordnungen in sieben zusammengeführten Modell-/Familieneinträgen.
Diese elf sind abgeleitete Zuordnungen, keine elf weiteren unabhängigen Behauptungen.
Die 348 Modell-/Familienkandidaten haben nun 702 Merkmalszuordnungen, alle 862 Listings
1.464; Firmenbeschreibungen 545. Die 466 gelisteten Firmen-Einsatzfälle bleiben gleich.

Beispiele: ROS-2-Unterstützung bei Husky UGV; Roboterdocking bei BotEyes; taktile
Rückmeldung bei Phoenix bzw. ein taktiles Sensorkit; Fallaufrichtung, omnidirektionale
Bewegung, KI-Rechner und Curriculum bei der Booster-Beschreibung. Weitere Themen
sind Wagenzüge, Palettenhubwagen, Bandversorgung, Cross-Docking, Hochregal-/Dichtlager,
Ein-/Auslagerung, Preisschildprüfung, Betonplatzierung, Solarmodulinstallation und
geskriptete Eventinteraktion. ROS-/Gazebo-Nennungen sind Softwarebezüge. ROS allein
belegt keine ROS-2-Kompatibilität; ein Softwareanbieter erzeugt keine Roboterkarte.

Docking des Roboters wird nicht aus logistischem Cross-Docking abgeleitet. Betreuung
durch einen Vor-Ort-Operator wird bei Bots-4-Events und Elite Event Robotics erfasst,
bei RobotsInternational wegen des ausdrücklichen Ausschlusses nicht. Vor-Ort-Demos
und Baustellenpersonal begründen ebenfalls keinen Operatorsupport. Die Themen bleiben
sichtbar unbestätigte Verzeichnisaussagen, getrennt von datierten Primärbelegen. Keine
Kennzahl, Norm-/Zulassungsbehauptung, gegenwärtige Verfügbarkeit, Herstelleridentität
oder bewiesene Alleinstellung wird daraus in technische Tabellen übernommen.

Die Aktualisierung verwendet ausschließlich den gespeicherten Snapshot vom 1. November
2026: null Netzabrufe, kein erneuter Zugriff auf den limitierten Host. Originaltexte,
Zeitpunkte, 1.961 Quellenidentitäten und alle 132 Namensentscheidungen bleiben erhalten.
45 Prüfnachweise enthalten Quellenadresse, Quellidentität, passenden Textausschnitt und
Beschreibungshash. Jede der 702 Modell-Merkmalszuordnungen behält die exakten zugrunde
liegenden Listing-IDs und Quellenlinks. Der heuristische Katalogabgleich wurde auf
1.715 Zeilen und 632 normalisierte Hersteller-Schlüssel aktualisiert; das sind weiterhin
640 exakte Schreibweisen. Seine 98 offenen Modellkandidaten und elf Marken sind keine
neuen strengen Lücken; der strenge Abgleich bleibt bei drei Modellidentitäten und neun
unklaren Listings. Die unterschiedlichen Prüfbegriffe werden nicht vermischt.

Acht konkrete Markenabfragen liefern jetzt passende Treffer statt null: ROS 2 support
claimed (Clearpath), cross-docking logistics (Seegrid/Vecna), tactile sensing
(Robotics Center/Sanctuary), on-site operator support (zwei Eventanbieter), scripted
interaction (DMA), concrete placement und solar-panel installation (Construction
Robotics), education curriculum (Booster/Sphero/STEMbotix/Wonder Workshop). Das prüft
die vorhandene Wort-/Teilstringsuche; Teiltreffer belegen keine exakte Fähigkeit und
keine beliebige semantische Suche. Etwa kann „docking“ auch „cross-docking“ finden,
während die dargestellten Themen deren Bedeutungen ausdrücklich trennen.

Validierung: 303 Unit-Tests in 23 Dateien, zwölf Offline-Collector-Tests und 20 neue
Desktop-/Mobil-Browserfälle abgedeckt: zwölf bestanden im Erstlauf, acht nach gezielter
Testkorrektur. Die neuen Linkprüfungen trafen Überschrift und zweite Profilverknüpfung
gleichzeitig; sie prüfen jetzt die eindeutige Verknüpfung in der Kartenüberschrift.
Frontend unverändert. Darunter acht bestandene Axe-Fälle in Hell/Dunkel. Der
erste Python-Lauf fand einen Großschreibungsfehler der neuen KI-Rechner-Vorlage;
die Korrektur ist im erfolgreichen Gesamtlauf enthalten. Frühere Browserläufe sind
Historie. 554 Themenprofile, 76 Namensprofile, 132 Entscheidungen und 592/406/862/132
Exportzeilen erneut abgeglichen. Alle neun Katalog-CSVs, 586 Primärbelege und 365
Feldprüfungen bleiben bytegleich. Katalogskript 1.331.365 Byte und Vergleichs-JSON
354.658 Byte unverändert. Build: 2.764 Seiten, rund 415 MB; Datenprüfung null Fehler,
578 bestehende Warnungen. Test-Lint und Formatierung bestanden. Frontend unverändert.
Alle 142 erfassten eigenen Testprozesse beendet, Port 4321 geschlossen, keine
eigenen Recherche-Helfer. Fremde Ressourcen erhalten; Änderungen lokal.
Nachweise: scratch/competitor-research/primary/batch-41/.


## Ergänzung vom 2. November 2026 – Clearpath: Generationen, Systeme und Feldbelege

Fünf eigenständig dokumentierte Angebote ergänzt: Husky A200, Husky AMP, Husky
Observer, Dingo-D und Dingo-O. Acht bestehende Einträge korrigiert: Husky A300,
Warthog UGV, Jackal UGV, Ridgeback, Dingo, Boxer sowie TurtleBot 4 und 4 Lite.
13 neue Feldprüfungen umfassen 143 Werte: 85 dokumentiert, 53 nicht dokumentiert
und fünf widersprüchlich. Insgesamt jetzt 1.720 Modelle/Konfigurationen, 640 exakte
Herstellerschreibweisen, 1.035 Profile, 591 datierte Merkmalsdatensätze (465 neue
Modelle, 126 bestehende angereichert), 1.894 Aussagen und 736 Produkt-Quellenverweise.
66 Modelle haben 508 ausgewählte Feldprüfungen: 342 dokumentiert, 152 nicht
dokumentiert, zwölf widersprüchlich und zwei Roadmap. 27 Firmenfokus-Prüfungen.

Husky A300 übernimmt weder die A200-Traglast noch dessen Schutzart. Beim AMP sind
81 kg maximale bzw. 31,5 kg Geländenutzlast Werte des ausgestatteten Systems.
Observer hat 10 kg zusätzliche Nutzlast und einen ausdrücklich als Designangabe
bezeichneten IP55-Anspruch. Widersprüche bei A300-Höhe/Laufzeit sowie Warthog-
Gewicht/Laufzeit und Ridgeback-Gewicht bleiben mit Quellen und Bedingungen sichtbar.
Bei Dingo-D/O unterscheiden sich Gewicht, Abmessungen, Traglast, Antrieb sowie
Batteriezahl/-generation. Generische Dingo-Werte werden nicht auf Varianten verteilt.
TurtleBot 4/Lite behalten unterschiedliche Höhe, Masse und Kamera; Ladezeit und
lastabhängige Betriebszeit stehen getrennt. Boxer-Bereitschaftszeit gilt nicht als
kontinuierliche Betriebszeit. Unbelegte Preise und Erscheinungsjahre bleiben leer
bzw. „Not disclosed“; kein strukturiertes Preisangebot für diese 13 Modelle.

14 erfolgreiche Seitenabrufe; 13 gespeicherte Hersteller-/Dokumentationsquellen
tragen diese Prüfung. Ein zusätzlich geladenes AMP-Handbuch dient nur der Recherche.
Kein bekannter blockierter Host erneut angefragt, kein Formular versandt. Sieben
Anwendungs-, Software- und Integrationsbezeichnungen bleiben ohne eigene Roboterkarte.
Die generische Husky-Nennung erhält weitere Kandidatenverknüpfungen; die geprüfte
Familienentscheidung und ihre offene exakte Generation bleiben unverändert.
1.961 Quellenidentitäten, 132 Namensentscheidungen und die ursprünglichen drei offenen
Modellidentitäten/neun unklaren Listings erhalten. Das ist keine vollständige Prüfung
aller historischen Clearpath-Angebote und kein Verfügbarkeits- oder Marktführernachweis.

Validierung: 308 Unit-Tests in 23 Dateien bestanden. 24 Clearpath-Browserfälle fanden
im Erstlauf zwei echte mobile Darstellungsfehler: lange, mit Schrägstrichen verbundene
Batterievarianten verbreiterten die A300-Spezifikationstabelle auf 402 statt 375 Pixel.
Wertespalten erlauben jetzt Wortumbruch. Nach erneutem Build bestanden alle 24 Fälle
und 20 Unitree-Regressionsfälle, einschließlich 20 Axe-Fällen in Hell/Dunkel.
554 Themenprofile, 76 Namensprofile, 132 Entscheidungen und 592/406/862/132
Exportzeilen erneut geprüft. 13 Produktseiten: 143 Werte, 103 Quellenkennzeichnungen,
40 ausgelassene Leerfelder und 90 strukturierte Eigenschaften abgeglichen. 1.707 alte
Katalogzeilen, 578 alte Merkmalsdatensätze und alle 53 bisherigen Feldprüfungen
unverändert; acht Katalog-/Merkmalseinträge gezielt korrigiert. Erneuter Import: null
Ergänzungen. Test-Lint und Formatierung inklusive CSS bestanden. Build: 2.769 Seiten,
rund 416 MB; Datenprüfung null Fehler, 583 Warnungen (fünf zusätzliche unbekannte
Erscheinungsjahre). Katalogskript 1338851 Byte, Vergleichs-JSON
394253 Byte. Alle 174 erfassten eigenen Test-/Diagnoseprozesse beendet,
keine eigenen Recherche-Helfer, Port 4321 geschlossen. Fremde Ressourcen erhalten.
Änderungen lokal. Nachweise: scratch/competitor-research/primary/batch-42/.


## Ergänzung vom 2. November 2026 – Pudu: reale Varianten und belastbare Vergleichswerte

17 erfolgreich gespeicherte Hersteller-/Academy-Seiten tragen die Prüfung. Neun
ausdrücklich benannte Konfigurationen ergänzt: T150 Standard/Lifting, T300
Standard/Lifting, T600 Upright, MP2000 Standard/Narrow Fork und PuduBot 2
PDFD12/PDFD22. 15 bestehende Datensätze korrigiert; BellaBot, BellaBot Pro,
KettyBot Pro, T150 und T300 von Smart Home nach commercial verschoben. IDs und
vorhandene Bildpfade bleiben stabil. Generische Familieneinträge bleiben erhalten;
abweichende Varianten werden nicht zu synthetischen Daten zusammengeführt.

266 neue ausgewählte Feldentscheidungen auf 24 Modellen: 180 dokumentiert, 80 nicht
dokumentiert, sechs widersprüchlich. T150/T300 Standard wiegen laut Hersteller
65 kg, Lifting 81 kg; T600 Upright 112 kg, Underride 94 kg. Unterfahrversion ohne
Ground Projection und Power-assist-Schalter. Die Zwei-Stunden-Ladung bei T150,
T300 und T600 gilt für 0–90 Prozent. T300 nennt 12 Stunden ohne und acht mit voller
Last; das ist eine Lastbedingung und wird nicht als Quellenkonflikt ausgegeben.
MP2000-Ladezeit hängt von 100–120 bzw. 200–240 Vac ab; äußere Gabelbreite 620 mm
bei Standard und 550 mm bei Narrow Fork. Palettengeometrie und Last qualifizieren
Durchfahrt, Stapelgang, Steigung, Geschwindigkeit und Laufzeit.

BellaBot/BellaBot Pro haben 40 kg Gesamtlast und höchstens 10 kg je Tablett;
die alte Pro-Beschreibung „four 40kg trays“ ist entfernt. Pro: elf Stunden ohne
Last; angekündigte Speisenerkennung weiterhin in Entwicklung. Beim Basismodell
bleiben abweichende Laufzeit- und Geschwindigkeitsangaben aus Produktseite,
Vergleich und Manual sichtbar. KettyBot Pro nennt in der Beschreibung 51 cm,
in Tabelle/Fußnote mindestens 52 cm in bestimmten Situationen. PuduBot-2-Manual
trennt PDFD12 (7-Zoll, 37 kg) und PDFD22 (10,1-Zoll, 39 kg); dessen rund drei
Ladestunden widersprechen den vier Stunden der undifferenzierten Produktseite.
Die auf der Produktseite ungewöhnlich genannten zwölf Stunden leer/fünfzehn
beladen bleiben als Herstellerbehauptung attribuiert, ohne sie auf die genauen
Manual-Konfigurationen zu übertragen oder scheinbar plausibel umzudrehen.

CC1: fünf Stunden Scheuern/Kombination, vier Teppich, neun leises Wischen; Manual
nennt zusätzlich allgemein drei bis acht Stunden. Kein universeller Neun-Stunden-
Wert. Modustestbedingungen: niedrige Stufe und Akku 100 auf 10 Prozent. Richtige
Schwellen-/Spaltmaße statt alter 4-cm-Spalt-Angabe. MT1-Roboter 65 kg; die 57,8 kg
der optionalen Entleerstation sind Zubehörmasse. FlashBot Arm: 15 kg Lieferkapazität,
keine belegte Last je Arm; sechs aktive plus fünf passive Handfreiheitsgrade.
Nicht belegte 70 kg und 1,25 m/s entfernt. KettyBot/HolaBot behalten ihre eigenen
Lade-, Last- und Bodenbedingungen. Optionale Docks, Wasserstationen, Teppichmodule
und Gebäudeintegration bleiben von der Roboter-Grundausstattung getrennt.

Aktuell 1.729 Katalogeinträge, 640 exakte Herstellerschreibweisen, 1.035 Profile,
600 datierte Produktmerkmal-Datensätze (474 Ergänzungen/126 bestehende angereichert),
1.921 Aussagen/747 Produkt-Quellenverweise. 90 Modelle mit 774 Feldprüfungen:
522 dokumentiert, 232 nicht dokumentiert, 18 widersprüchlich, zwei Roadmap.
28 Firmenfokus-Prüfungen. 1.961 Quellenidentitäten, alle 132 Namensentscheidungen,
die strengen drei offenen Modellidentitäten und neun unklaren Listings unverändert.
Zwölf weitere primär belegte Pudu-Produkte warten auf Feldprüfung; D1/SwiftBot
sind außerhalb dieses Blocks. Kein Nachweis vollständiger historischer Programme,
aktueller Verfügbarkeit, unabhängiger Leistung oder Marktführerschaft.

314 Unit-Tests/23 Dateien bestanden. Im Erstlauf 313 bestanden/einer fehlgeschlagen:
der Alias-Duplikatentest entfernt Klammern und fasste die neuen Bildschirm-SKUs
mit der Familie zusammen. Sichtbare Namen verwenden nun die expliziten PDFD12/
PDFD22-Codes ohne Klammern; IDs und Hardwaregrenzen bleiben erhalten. Gesamtlauf
erneut bestanden. Im ersten Browserlauf bestanden 18 Fälle, acht Axe-Fälle beanstandeten nur durch
Farbe erkennbare Quellenlinks im Fließtext. Produktquellen sind jetzt unterstrichen;
technische Quellenlabels durch lesbare Dokumenttitel ersetzt. Nach erneutem Build
bestanden alle 26 Pudu- und 24 Clearpath-Fälle, darunter 16 Hell/Dunkel-Axe-Fälle.
Frühere Browserläufe bleiben Historie. 24 Produktseiten:
266 Felder, 210 Quellenkennzeichnungen, 56 ausgelassene Leerfelder und 184
strukturierte Eigenschaften geprüft; kein strukturiertes Preisangebot für die
24 Modelle. 554 Themenprofile/76 Namensprofile/132 Entscheidungen und
592/406/862/132 Exportzeilen abgeglichen. 1.705 alte Katalogzeilen, 576 alte
Merkmalsdatensätze sowie alle 66 früheren Feldprüfungen unverändert; 15 Datensätze
gezielt korrigiert. Importwiederholung: null Ergänzungen. Build 2.778 Seiten,
rund 417 MB. Datenprüfung null Fehler/600 Warnungen: neun neue unbekannte und acht
entfernte unbelegte Erscheinungsjahre erklären die 17 zusätzlichen Warnungen.
Test-/Astro-Lint und Format bestanden. Frontendänderung ausschließlich unterstrichene
Produktquellenlinks; JavaScript unverändert. Katalogskript
1358591 Byte/Vergleichs-JSON 429661 Byte. Alle
182 eigenen erfassten Testprozesse beendet, keine eigenen Recherche-Helfer,
Port 4321 geschlossen; fremde Ressourcen erhalten. Änderungen lokal.
Nachweise: scratch/competitor-research/primary/batch-43/.


## Ergänzung vom 2. November 2026 – Pudu: Reinigung, Flächenleistung und Mobilität

Zwölf bestehende Modelle korrigiert: BG1/BG1 Pro, CC1 Pro/Disc, ET1, MT1 Max/Vac,
GT3/GT5/GT7 und D5/D5-W. Zehn erfolgreich gespeicherte Hersteller-HTML-Seiten mit
geprüften SHA-256-Werten tragen diese Prüfung. Elf HTTP-200-Abrufe enthalten
zusätzlich einen D5.js-Endpunkt, dessen Inhalt vom HTML-Kollektor nicht gespeichert
wurde; dieser Endpunkt wird ausdrücklich nicht als Beleg verwendet. Keine neuen
Roboterkarten oder Kategorienwechsel. Die übrigen 1.717 Katalogzeilen bleiben
inhaltlich erhalten; cleaning/outdoor erhalten zwei leere optionale Spalten, wo
kein Wert belegt ist. Alle 1.961 Quellenidentitäten und 132 Namensentscheidungen
bleiben erhalten. Der erneute Import erzeugt null Ergänzungen.

152 ausgewählte Feldentscheidungen: 106 dokumentiert, 44 nicht dokumentiert, zwei
widersprüchlich. BG1: 0,2–1,0 m/s; Pro: 0,2–1,2 m/s. Die Ladebedingungen ab bzw.
bis 180 V überlappen am exakten Grenzwert; dieser Widerspruch bleibt sichtbar.
Tankvolumen wird nicht zur Nutzlast. CC1 Pro Disc hat 80 kg, 69 Ah und 380 mm
Arbeitsbreite; Pro 75 kg, 50 Ah und 500 mm mit Seitenbürsten. Laufzeit und Modus
bleiben getrennt; Pro-Vakuummodi werden nicht auf Disc übertragen. ET1 führt
300 mm Scheuern/Staubwischen gegenüber 390 mm Kehren/Saugen. Display und Dock-
Lieferumfang bleiben qualifiziert. MT1 Max: 85 kg Roboter gegenüber 57,8 kg für
die optionale Entleerungsstation; Warnung vor Extremwetter bleibt erhalten.
MT1 Vac: H11, H13 optional; Laufzeit nach Boden und Reinigungsmodus.

Neue Felder Arbeitsbreite/Flächenleistung erscheinen auf Produktseiten, im
Vergleich und in strukturierten Product-Eigenschaften. GT3 nennt 20.000 m² je
Ladung; daraus wird keine Stundenleistung berechnet. GT5/GT7 nennen 8.000 m²/h
als Herstellerwert. Schnelle Ladegeräte bleiben optional; GT7 erhält keinen
von GT3/GT5 übernommenen IP-Wert. D5/D5-W: 30/25 cm Stufe, 25/30 Grad Aufstieg,
61/62 kg einschließlich Akku. Die generische 5-m/s-Formulierung wird keiner
exakten Variante zugeschrieben. Datierte Storefront-Angebote: 80.000/85.000 USD
mit getrennten Varianten-IDs; Bestand, Zubehörumfang, Steuern, Versand und
Lieferfähigkeit bleiben ungeprüft. Unbelegte Erscheinungsjahre sind entfernt.

Alle 38 primär belegten Pudu-Einträge haben nun ausgewählte Feldprüfungen;
D1/SwiftBot bleiben außerhalb dieses Prüfbestands. Gesamt: 1.729 Katalogeinträge,
600 Produktmerkmal-Datensätze, 1.940 Aussagen und 745 Produkt-Quellenreferenzen.
102 Modelle mit 926 Feldentscheidungen: 628 dokumentiert, 276 nicht dokumentiert,
20 widersprüchlich, zwei Roadmap. Firmenfokus bleibt bei 28 Prüfungen; der Pudu-
Eintrag ist erweitert. Ursprüngliche drei offene Modellzuordnungen und neun
unklare Listings unverändert. Vollständige Herstellerprüfung, Detailprüfung aller
Wettbewerber-Listings und eine gemessene Marktführerschaft bleiben offen.

320 Unit-Tests in 23 Dateien und 46 Browserfälle auf Desktop/Mobil bestanden,
darunter 16 Hell-/Dunkel-Axe-Prüfungen. Die 28 neuen Pudu-Fälle prüfen zwölf
Modelle, Zubehör-/Modusgrenzen, reine Merkmalssuche, Preise und deutsche Vergleichs-
felder. 18 bestehende Vergleichsfälle prüfen unter anderem Nachladen, Fehler,
Wiederholung, Sprachwechsel und HTML-/URL-Escaping. Vergleichsquellen sind nun
unterstrichen. 554 Themenprofile, 76 Namensprofile, 132 Identitätsentscheidungen
und Exporte mit 592/406/862/132 Zeilen geprüft. Zwölf Produktseiten: 152 Felder,
118 Quellenkennzeichnungen, 34 ausgelassene Leerfelder, 106 strukturierte
Eigenschaften und zwei numerische Preisangebote geprüft. Lint/Format bestanden.
Build: 2.778 Seiten, etwa 417 MB; Datenprüfung null Fehler, 602 Warnungen.
Zwei zusätzliche Warnungen betreffen entfernte unbelegte D5-Erscheinungsjahre.
Katalogskript 1384232 Bytes, Vergleichsbelege 449601 Bytes.
Alle 91 erfassten eigenen Testprozesse beendet, Port 4321 geschlossen,
keine eigenen Recherche-Hilfsprozesse; fremde Ressourcen erhalten. Änderungen lokal.
Nachweise: scratch/competitor-research/primary/batch-44/.


## Ergänzung vom 2. November 2026 – KEENON: Modellunterschiede, XMAN und Tankkapazitäten

XMAN-F1 als neues Modell ergänzt; 13 bestehende KEENON-Einträge korrigiert.
DINERBOT T8/T10 und ButlerBot W3 von Smart Home nach commercial verschoben;
IDs und Bildpfade bleiben stabil. T8 erhält erstmals datierte Primärmerkmale.
14 ausgewählte Modellprüfungen mit 170 Feldern: 101 dokumentiert, 66 nicht
belegt, drei widersprüchlich. Die übrigen 1.716 bisherigen Katalogzeilen bleiben
inhaltlich erhalten. Die neue optionale cleaning-Spalte waterTankCapacity
bleibt bei anderen Modellen leer, soweit diese Prüfung keinen Beleg ergänzt.
Alle 102 vorherigen Feldprüfungen, 28 Firmenfokus-Datensätze, 1.961
Quellenidentitäten und 132 Namensentscheidungen bleiben erhalten.

18 erfolgreiche HTML-Abrufe: 14 verwendete Produktseiten, die Startseite und
drei zusätzliche Produktverweise; drei weitere Routen (C25/G2/M2) liefern 404.
Alle 21 gespeicherten HTML-Antworten und fünf Bildposter auf SHA-256 geprüft.
Zwei Bildposter tragen ausgewählte R1/F1-Fakten als offen bezeichnete OCR-
Transkriptionen: R1 radgetrieben, 174 cm, 110 kg, 36 Gesamt-DoF; F1 zweibeinig,
175 cm, 68 kg, 43 Gesamt-DoF. Beide zählen zwei Sechs-DoF-Hände mit. Technische
Messung, selbstständige Aufgabenleistung, Lieferfähigkeit und Preise bleiben
ungeprüft. Persona-Geburtstage werden nicht zu exakten Erscheinungsdaten.
R1 behält die durch die frühere Herstellerankündigung belegte Jahreszahl 2025;
F1 hat kein belegtes Releasejahr. Menüverweise XMAN-L1/X101/M102 bleiben in der
Firmenfokus-Recherche sichtbar, ohne daraus verifizierte Roboterkarten zu
machen. X101/M102 liefern identischen allgemeinen Krankenhauslogistik-Text
und bytegleiche Banner; diese Daten trennen keine exakten Hardwaremodelle.
404 bei historischen Routen beweist keine Einstellung des Produkts.

C20: Masse einschließlich Akku und leerer Tanks; 450 mm Kehren/Saugen gegenüber
285 mm Scheuern, 7 L Frisch-/5 L Abwasser. C30 ist Trockenreinigung: bis sechs
Stunden Kehren/Saugen, zehn Stunden Staubwischen; 600 m²/h bleibt getrennt von
2.500 m² je Ladung. C40: bis fünf Stunden Scheuern, zwölf Kehren; zwei Stunden
Laden ist kein Fünf-Sekunden-Akkuwechsel. C55: fünf Stunden je Betriebsperiode,
vier Stunden Laden, Hot-Swap-Doppelakkus; theoretische 2.376 m²/h und 550 mm
Scheuerbreite ohne Seitenbürste. Der Tank-Headlinewert 110 L weicht von der
Tabelle mit 60 L Frisch- plus 47 L Abwasser ab. Dieser Konflikt bleibt am
vergleichbaren Tankfeld mit Quellenhinweis sichtbar. Stationen benötigen
geeignete Anschlüsse; Zubehörumfang bleibt ungeprüft. Tankvolumen wird nicht
zur Nutzlast und ein Akkuwechsel nicht zur unbegrenzten Einzelakku-Laufzeit.

T3: 180 L Kabinenvolumen getrennt von 40 kg Last, kein belegter Ladewert.
T8: 20 kg, 55-cm-Durchfahrt, bis 15 Stunden. T9: 40 kg gesamt/10 kg je Ebene,
bis 18 Stunden; vier Stunden Laden gilt für 15–100 Prozent bei eingeschaltetem
Roboter, Ladesäule ausdrücklich nicht enthalten. T10: 9–12,5 Stunden Betrieb,
5,5 Stunden Laden unter derselben Teil-Ladebedingung; aktuelle Sensorik ersetzt
den alten 270-Grad-Text. T11: 20 kg gesamt, mittlere Ebene fünf/untere zehn kg;
kein erfundener Wert für die weitere Ebene oder numerische Ladezeit. W3 hat
anpassbar bis vier Fächer und 20 kg Gesamtlast; unbelegtes „waterproof“ entfernt.
Aufzugsintegration bleibt abhängig vom kompatibel eingerichteten Gebäude.

S100: acht Stunden nur unter den genannten Bedingungen mit weniger als 100 kg
Last; 2,5 Stunden Laden von 0–100 Prozent eingeschaltet. „100 kg+“ ist keine
exakte obere Traglast. 90 cm Durchfahrt ohne Drehung widersprechen den daneben
stehenden 29,53 Zoll (ca. 75 cm); metrischer Wert mit Warnhinweis. S300: 300 kg,
bis sechs Stunden bei Volllast, 3,5 Stunden Laden ohne belegten Prozentbereich.
23-cm-Chassistext und Tabelle mit 1.282 mm Gesamthöhe bzw. 230 mm Bodenfreiheit
lassen die Konfiguration offen; kein stilles Umdeuten in eine feste Höhe.
Standalone-Aufgaben ohne WLAN/5G beweisen keine vollständige Offline-Flotten-
funktion. Sicherheits-, Desinfektions- und Einführungszeit-Werbung ist keine
unabhängig getestete Zertifizierung oder medizinische Wirksamkeitsbestätigung.

Aktueller Gesamtbestand: 1.730 Modelle/Konfigurationen; 602 primär belegte
Merkmal-Datensätze (475 Ergänzungen/127 Altmodelle), 1.975 Aussagen und 748
Produkt-Quellenreferenzen. 116 Modelle/1.096 Feldentscheidungen: 729 dokumentiert,
342 nicht dokumentiert, 23 widersprüchlich, zwei Roadmap. 29 Firmenfokus-Prüfungen.
KEENON hat 17 Katalogeinträge, davon 15 mit Primärmerkmalen und 14 mit ausgewählten
Feldprüfungen. C25 sowie G2/M2 bleiben offen. Ursprüngliche drei Modellzuordnungen
und neun unklare Listings unverändert. Vollständige Herstellerprüfung, Prüfung
aller Wettbewerber-Detailseiten und eine gemessene Marktführerschaft bleiben offen.

328 Unit-Tests in 24 Dateien bestanden. Browser: zunächst 52 von 54 bestanden;
zwei neue T8-Tests erwarteten fälschlich /category/commercial/ statt des bereits
vorhandenen Links /?category=commercial. Testselektor korrigiert, beide Desktop-/
Mobilfälle bestanden in der Nachprüfung; Anwendung unverändert. Damit alle 54
Fälle bestanden: 36 KEENON- und 18 bestehende Vergleichsfälle, darunter 20
Hell-/Dunkel-Axe-Prüfungen. Produkt-/Markenseiten, reine Merkmalssuche, deutsche
Tankvergleichsfelder sowie Ladefehler, Wiederholung, Sprachwechsel und Escaping
geprüft. 554 Themenprofile, 76 Namensprofile und 132 Identitätsentscheidungen;
Exporte mit 592/406/862/132 Zeilen; 14 Produktseiten mit 170 Feldern, 117
Quellenkennzeichnungen, 52 ausgelassenen Leerfeldern und 101 strukturierten
Eigenschaften abgeglichen. R1-Releasejahr bleibt als zusätzliche Tabellenzeile
mit Herstellerbeleg in den Merkmalen, ohne eigenes Feld-Badge. Alle 14 unbekannten
Preise ohne numerisches Offer. Lint/Format bestanden; Reimport null Ergänzungen.
Build: 2.779 Seiten, etwa 418 MB; Datenprüfung null Fehler/607 Warnungen. Fünf
zusätzliche Warnungen: ein neues unbekanntes F1-Releasejahr und vier entfernte
unbelegte Altjahre. Katalogskript 1400813 Bytes; Belege 477801 Bytes.
Alle 134 erfassten eigenen Testprozesse beendet, Port 4321 geschlossen,
keine eigenen Recherche-Hilfsprozesse. Temporäre OCR-Umgebung entfernt;
Originalbelege erhalten, fremde Ressourcen unverändert. Änderungen lokal.
Nachweise: scratch/competitor-research/primary/batch-45/.


## Ergänzung vom 2. November 2026 – Gausium: Varianten und belegter Firmenalias

Elf ausdrücklich benannte Konfigurationen ergänzt, zwölf bestehende Gausium-Zeilen
korrigiert. Alle 23 aktuellen Gausium-Einträge haben ausgewählte Feldprüfungen:
307 Entscheidungen, davon 185 dokumentiert, 116 nicht belegt und sechs
widersprüchlich. Die übrigen 1.718 bisherigen Katalogzeilen bleiben unverändert.
116 frühere Modellprüfungen, 29 Firmenfokus-Datensätze, 1.961 Quellenidentitäten
und 132 Namensentscheidungen bleiben erhalten. Keine Kategorieverschiebung.

Ein Herstellerbeitrag vom 14. November 2022 bezeichnet Gausium ausdrücklich als
Alias von Gaussian Robotics. Die beiden bisherigen Firmenprofile sind deshalb
zusammengeführt; ursprüngliche Firmennamen und Quellen-URLs bleiben erhalten.
Die alte Profiladresse /brands/gaussian-robotics/ leitet statisch zur kanonischen
Gausium-Adresse weiter und ist aus der Sitemap ausgeschlossen. Dies ist ein
Markennamensbeleg, keine Behauptung einer rechtlichen Unternehmensfusion.
591 Quellfirmengruppen, 1.034 Gesamtprofile (629 mit/405 ohne Modelle),
553 Themenprofile und 30 hersteller-/firmenbelegte Fokus-Prüfungen.

Beetle Standard/Pro trennt 102/112 kg und drei/fünf Stunden laut Variantentabelle;
die Familienübersicht nennt dagegen vier bis acht Stunden bei 60 Ah. Der Konflikt
bleibt sichtbar, ohne festen Familien-Maximalwert. Mira nennt Mindestlaufzeiten
je Reinigungsmodus; Marvel hat ebenfalls Untergrenzen für Kehren/Staubwischen.
Diese Werte werden nicht zu maximalen Gesamtlaufzeiten. Der optionale Marvel-
Standauftritt bleibt optional. Reinigungsdruck und Behältervolumen werden nicht
zu Nutzlast. Vier metrisch/imperiale Konflikte bleiben mit Quellenhinweis erhalten:
Mira 1,4 m/s gegenüber 4,27 ft/s, Marvel 3.024 m²/h gegenüber 21.700 ft²/h,
Phantas unterer Praxiswert 350 m²/h gegenüber 3.367 ft²/h und Sweeper 111
1.200-mm-Durchfahrt gegenüber 79 Zoll. Keine stille Einheitenkorrektur.
Beim Sweeper 111 widersprechen sich außerdem 240-Ah-Akkutabelle und die
40-/60-Ah-Beschriftung der Laufzeit; kein unbedingter Laufzeit-Maximalwert.

Omnie Disc/ Roller: 157/148 kg, 520/406 mm Scheuerbreite. Die 780 mm beim
Roller sind Kehrabdeckung mit optionalen Seitenbürsten. Disc-Kehren steht auf
„Coming Soon“ und wird nicht als aktive Kehrleistung ausgezeichnet. Scrubber 50
Disc/Roller bleiben separat; der SoftBank-Anbietereintrag Scrubber 50 Pro ist
keiner Bürstentabelle exakt zugeordnet und behält 14 nicht belegte Feldentscheidungen.
Scrubber 75 S/P verwendet ausdrücklich gemeinsame Familienwerte, ohne einen
separaten Variantentest zu behaupten; drei Grad Reinigung bleiben getrennt von
acht Grad Fahrt. Station und Radar haben widersprüchliche Paket-/Optionssprache.
PhanShop Max unterstützt laut Tabelle keine Warenablage; sein 18,5-Zoll-Display
belegt keine Touchfunktion. Vacuum 40 Diffuser hat einen Vier-Liter-Luftbefeuchter,
keinen Bodenreinigungstank; 18 Stunden gelten fürs Trockenwischen. Historische
Delivery X1/X1 Pro: 35/38 kg unbeladen und 30 kg über drei Ablagen, jeweils maximal
zehn kg pro Ablage. Keine aktuelle Lieferfähigkeit aus historischen Tabellen abgeleitet.

Die aktuelle verlinkte Phantas-Tabelle bleibt mit Generationsvorbehalt dokumentiert.
„Phantas Extra“ erscheint als Herstellername, ist aber keiner getrennten Hardware-
Tabelle eindeutig zugeordnet; keine zusätzliche Modellkarte. Das unbelegte alte
Phantas-Releasejahr wurde entfernt. Alle 23 geprüften Gausium-Preise und Releasejahre
bleiben unbekannt. 28 erfolgreiche HTML-Antworten und vier öffentliche JSON-Antworten
archiviert; drei geratene Nachrichtenrouten liefern ungenutzte 404-Antworten.
Alle 35 Antwortkörper per SHA-256 geprüft. Keine Formulare abgesendet.

Aktueller Gesamtbestand: 1.741 Modelle/Konfigurationen, 614 primär belegte
Merkmalsdatensätze (486 Ergänzungen/128 bestehende Modelle), 2.054 Aussagen und
783 Produkt-Quellenreferenzen. 139 Modelle/1.403 ausgewählte Felder: 914 dokumentiert,
458 nicht dokumentiert, 29 widersprüchlich, zwei Roadmap. Drei ursprüngliche
Modellzuordnungen und neun unklare Listings bleiben offen. Die vollständige
Herstellerhistorie, Prüfung aller Wettbewerber-Detailseiten und gemessene
Marktführerschaft bleiben unbewiesen; Produktmerkmale sind keine nachgewiesenen
Alleinstellungsmerkmale gegenüber dem gesamten Markt.

339 Unit-Tests in 25 Dateien sowie alle 160 Browserfälle bestanden: 36 neue Gausium-,
106 bestehende Marken- und 18 bestehende Vergleichsfälle, jeweils Desktop/Mobil.
Darunter 16 erfolgreiche Axe-Prüfungen in Hell/Dunkel. Zunächst 154 bestanden,
sechs Testfehler: veralteter BellaBot-Wortlaut, „net“ statt Herstellerangabe
„unladen“ beim Vacuum 40 und eine Suchphrase, die bereits in der Kurzbeschreibung
stand. Tests korrigiert; die Suche nutzt jetzt einen ausschließlich in den
Merkmalsbelegen vorkommenden Display-Vorbehalt. Alle sechs betroffenen Desktop-/
Mobilfälle bestehen in der Nachprüfung; Anwendung und Daten dabei unverändert.
Lint und Formatierung bestanden.
HTML-/Exportabgleich: 553 Themenprofile, 76 Namensprofile, 132 Entscheidungen,
23 Produktseiten und 591/406/862/132 Exportzeilen. Alle 307 neuen Felder stimmen
mit CSV und Darstellung überein; 214 Quellenbadges, 93 ausgelassene Leerfelder,
191 strukturierte Eigenschaften. 23 unbekannte Preise erzeugen keine Kaufangebote.
Der Vergleich liefert alle 614 Merkmalsdatensätze und 1.403 Feldstatus korrekt aus;
private Forschungsmetadaten bleiben ausgeschlossen. Katalogdatei
1420310 Byte, Beleg-JSON 539709 Byte.
Build: 2.789 Seiten, rund 419 MB. Datenprüfung null Fehler/619 Hinweise, zwölf mehr
durch elf neue unbekannte Releasejahre und ein entferntes unbelegtes Jahr.
Erneuter Import: null Ergänzungen. Alle 276 erfassten eigenen Testprozesse beendet,
keine eigenen Recherchehelfer aktiv, Port 4321 geschlossen. Lokale Änderungen.
Artefakte: scratch/competitor-research/primary/batch-46/.


## Ergänzung vom 2. November 2026 – IPLUSMOBOT: benannte Varianten und vergleichbare Messgrößen

22 bestehende Einträge korrigiert und elf Konfigurationen ergänzt: EMMA 2000L,
FOLA BN1501T/BN1501/BN3001/DN1516/DN2030/PN1530, Luna 30T, LDT1500-OMNI,
NERA-P200-DS3 und die ausdrücklich gezeichnete EMMA-T-Ausführung mit EMMA 400L.
Alle 33 aktuellen IPLUSMOBOT-Katalogeinträge haben ausgewählte Feldprüfungen:
564 Entscheidungen, davon 299 dokumentiert, 246 nicht belegt und 19 widersprüchlich.
Die übrigen 1.719 bisherigen Katalogzeilen bleiben inhaltlich unverändert; die
sechs optionalen neuen commercial-Spalten sind bei anderen Modellen leer.
139 frühere Modellprüfungen, 30 Firmenfokus-Datensätze, 1.961 Quellenidentitäten,
132 Namensentscheidungen und 591 Quellfirmengruppen bleiben erhalten. Drei
bestehende Wettbewerber-Familienzuordnungen (EMMA L, FOLA, LUNA) um acht belegte
Varianten erweitert; Familienstatus und Originalquellen bleiben erhalten. Jetzt
haben alle 429 den ursprünglichen Quellenfunden zugeordneten Katalogmodelle
datierte Merkmalsbelege; dies ist keine vollständige historische Variantenprüfung.

Navigation, Andocken, Antrieb, Hubweg, maximale Gabelhöhe und Armreichweite sind
jetzt getrennte Felder in Detailtabellen, strukturierten Produktdaten und Vergleich;
Deutsch/Englisch lokalisiert, bestehender englischer Fallback für weitere UI-Sprachen.
EMMA ±30 mm Positionierung wird nicht zu ±2 mm Navigation: der kleinere Wert gilt
für Andocken, laut Broschüre mit QR-Code. Laufzeituntergrenzen bleiben getrennt
von maximaler Laufzeit und Ladezeitobergrenzen. Lastfreie und beladene Geschwindigkeit
bleiben nebeneinander sichtbar. EMMA 400L behält 75 mm Hubweg aus seiner Spalte;
die generische 60-mm-Familienangabe ersetzt die Variante nicht. Beim neuen EMMA
2000L wird keine fehlende Volllastgeschwindigkeit vom Nachbarmodell übernommen.

FOLA: Die sechs neuen Spaltenzuordnungen wurden anhand der PDF-Textkoordinaten
für je Abmessung, Masse, Last, Gabelhöhe und Geschwindigkeit geprüft. Minimale/
maximale Gabelhöhen sind kein Hubweg. DN1416/QN1416/BN2001 widersprechen ihren
Web-„Stroke“-Beschriftungen. QN1416 hat 2.034 mm Länge im Web/Detailtext gegenüber
12.034 mm in der Broschürentabelle und 2.320 gegenüber 2.410 mm Gangbreite.
BN2001 nennt 585 kg mit unpassenden 1.829 lb. SN300 hat widersprüchliche Leer-/
Volllastreihenfolge; SN600 zusätzlich abweichende Geschwindigkeiten, eine
1.400-kg-Headline gegenüber 600 kg Detailangabe und sechs gegenüber mindestens
acht Stunden Laufzeit. Weitere Einheiten- und Spaltendiskrepanzen bleiben
mit Feldstatus sichtbar. Keine automatische „Korrektur“ der Herstellerdaten.

OMNI trennt Fahr-/Andockgenauigkeit, Hubweg, Drehdurchmesser und Leer-/Volllastfahrt.
Luna 30T erhält 30 t und mindestens sechs Stunden aus der Broschüre, ohne Maße,
Masse, Geschwindigkeit, Ladezeit oder IP-Wert der kleineren Varianten zu erben.
Web und APAC-Broschüre beschreiben abweichende LUNA-Andockwerte und Navigations-
methoden; keine unbelegte weltweite Konfigurationsgleichheit. NERA-A trennt
Armtraglast von Plattformlast und Armreichweite von Positionierungsgenauigkeit;
A12-UF omnidirektional, JM/TT Differenzialantrieb. 0,5-mm-Ausführungspräzision mit
Vision aus der Werbung und 1-mm-Tabellenangabe werden nicht bedingungslos vermischt.

LDT1500-OMNI ist konkret benannt; Lauf-/Ladezeiten der benachbarten FPD/SMT/PV-
Anwendungsblöcke werden nicht übernommen. NERA-P200-DS3 ist ein autonomes
Integrationschassis mit 200 kg Decklast, kein mitgelieferter Manipulator; 110 kg
Masse bleibt durch optionales Gegengewicht qualifiziert. Akkukapazität wird nicht
zur erfundenen Laufzeit. Die EMMA-T/400L-Zeichnung nennt 300 kg Last, getrennt vom
bis zu 800 kg tragenden Familienbereich. Unbenannte weitere Kombinationen,
SMT/PCBA/FPD/PV-Anwendungsüberschriften, der NERA-C-Controller und CLOUDIA/OWL/iMCS/
CARLY-Software werden nicht als weitere vollständige Robotermodelle gezählt.
CE-Optionen, ESD-, Allwetter-, Software-Uptime-/TCO-Aussagen bleiben Herstellerangaben.

15 HTTP-Antwortkörper gespeichert und gehasht: 14 HTML und eine zwölfseitige
APAC-PDF; 13 Primär-Snapshots verwendet. Zwei geratene ältere PDF-Pfade leiten
auf eine HTML-Downloadseite und sind keine Produktbelege. PDF-Text und vier
Seiten mit Textkoordinaten geprüft; Bildprüfung war in dieser Sitzung nicht
verfügbar und wird nicht behauptet. Keine Formulare abgesendet.

Gesamtbestand: 1.752 Modelle/Konfigurationen, 625 Primärmerkmalsdatensätze
(497 Ergänzungen/128 bestehende Modelle), 2.151 Aussagen und 816 Produktquellen-
referenzen. 172 Modelle mit 1.967 ausgewählten Feldentscheidungen: 1.213 dokumentiert,
704 nicht dokumentiert, 48 widersprüchlich, zwei Roadmap. 31 Firmenfokus-Prüfungen.
1.034 Profile (629 mit/405 ohne Modelle), 553 Themenprofile. Die ursprünglichen
drei Modellzuordnungen und neun unklaren Listings bleiben offen; vollständige
historische/regionale Herstellerabdeckung, sämtliche Wettbewerber-Detailseiten
und eine gemessene Spitzenposition bleiben unbewiesen.

352 Unit-Tests in 26 Dateien bestanden. Ein erster Lauf hatte 350 bestandene und
eine fehlgeschlagene Prüfung wegen veralteter Summenerwartungen; nach Aktualisierung
der Modell-/Feld-/Konfliktsummen 351 Tests erfolgreich. Nach Ergänzung einer
Prüfung der erweiterten Familienverknüpfungen final alle 352 erfolgreich. Alle 98 Browserfälle
bestanden: 44 IPLUSMOBOT, 36 Gausium und 18 Vergleich, einschließlich 32 Axe-Fällen
für Desktop/Mobil und Hell/Dunkel. Lint/Formatierung bestanden. Build 2.800 Seiten,
rund 421 MB; Datenprüfung null Fehler/630 Hinweise, elf neue unbekannte Releasejahre.
HTML-/Exportabgleich: 553 Themenprofile, 76 Namensprofile, 132 Entscheidungen,
33 Produktseiten und 591/406/862/132 Exportzeilen. Die drei erweiterten Familien-
Exportzeilen enthalten alle acht neuen Modelle samt Primärmerkmalen und Feldprüfungen.
Diese abschließende Änderung betrifft Recherche-/Exportmetadaten; kein Frontend-
Import, deshalb unveränderter bereits getesteter Build. Alle 564 Felder stimmen mit CSV
und Darstellung überein; 351 Quellenbadges, 213 ausgelassene Leerfelder und
318 strukturierte Eigenschaften. Alle 33 unbekannten Preise ohne Kaufangebote.
Öffentliche Belegauslieferung vollständig abgeglichen; private Recherchemetadaten
bleiben ausgeschlossen. Katalogdatei 1482455 Byte,
Beleg-JSON 641933 Byte. Erneuter Import ohne Ergänzungen.
Alle 159 erfassten eigenen Testprozesse beendet, keine eigenen Recherchehelfer aktiv,
Port 4321 geschlossen; andere Aufgaben erhalten. Lokale Änderungen.
Artefakte: scratch/competitor-research/primary/batch-47/.


## Ergänzung vom 2. November 2026 – Bear Robotics: reale Modelle und belastbare Vergleichsgrenzen

Neun bestehende Bear-Einträge korrigiert; vier Modelle ergänzt: Servi mini,
Servi Clean und Servi Clean Max unter Bear Robotics sowie B9 unter LG.
Bear beschreibt B9 ausdrücklich als LG-Zusammenarbeit; die Quelle ist als
Integrationspartner gekennzeichnet. Alle zwölf Bear-Katalogmodelle und LG B9
haben ausgewählte Feldprüfungen: 167 Entscheidungen, davon 114 dokumentiert,
52 nicht dokumentiert und ein Quellenkonflikt. Die übrigen 1.743 bisherigen
Katalogzeilen bleiben inhaltlich unverändert. 172 frühere Modellprüfungen,
31 Firmenprüfungen, 1.961 Quellenidentitäten, 97 Familienzuordnungen und alle
132 Namensentscheidungen bleiben erhalten.

Servi mini ist im Herstellertext benannt. Seine eigene HTML-Sektion gruppiert
die Mini-Ansichtsdatei mit 980 mm Höhe, einem Tablett plus Rückgabebehälter und
44 lb Gesamtlast. Sie erbt weder 1.046 mm Höhe noch 30 kg des Servi. Keine fremden
Bilder kopiert. Servi Plus wechselt von smarthome nach commercial; ID, Route und
vorhandener Bildpfad bleiben gleich. Handbuch: 62 kg, 535 × 590 × 1.230 mm und
0,8 m/s im sicheren Fahrmodus gegenüber 1,2 m/s Maximum. 40 kg Gesamtlast bleibt
von 10 kg je Tablett getrennt. Unbelegte 16.000 USD und pauschale 720 Minuten
entfernt. Website 10–12 h gegenüber Handbuch 8–12 h Durchschnittslaufzeit bleiben
als Konflikt sichtbar. 7 mm sichere Schwellenhöhe, 12 mm Maximum und Web-0,5-Zoll-
Angabe werden mit ihren Bedingungen erhalten; Mindestdurchgang 650 mm.

Servi Q: mindestens zwölf Stunden sind keine maximale Laufzeit. Acht-Zoll-
Touchscreen und 18,5-Zoll-Werbedisplay bleiben getrennt; Radreinigung setzt eine
separat verkaufte Matte voraus. Peer-to-peer-Flottenkommunikation beweist nicht,
dass alle Cloud-/Dashboard-Funktionen offline arbeiten. Carti 100 lädt laut
Handbuch drei Stunden von 1 % auf 75 %, nicht von leer auf voll. Sichere Fahrt
bis 0,8 m/s und 1,2 m/s Maximum bleiben getrennt. Die 100 kg Gesamtlast verteilen
sich auf obere/mittlere Tabletts je 15 kg und unteres 70 kg.

Fünf Carti-Low-Profile-Sektionen mit ihren eigenen Modellabbildungs-URLs abgeglichen.
SLAM-Navigation ±10 mm ist nicht QR-Andocken ±5 mm. Hubweg 60 mm, Betrieb acht
Stunden und automatisches Laden höchstens 1,5 Stunden bleiben getrennt. Carti 400
hat optional 300 mm CE-Höhe, Carti 1000/1500 optional 270 mm gegenüber 260 mm
Standardhöhe; für 600/1000s wird keine CE-Höhe vom Nachbarn übernommen. Die
15-cm-Andockfreiraum-Werbung ist weder Roboterhöhe noch Durchgangsbreite. CE ist
optional; Flotten-/24-Stunden-Werbeaussagen sind nicht unabhängig geprüft.

Servi Clean: vier Stunden Saugen oder acht Stunden Staubwischen, 10-Liter-Staub-
behälter, 20 kPa. Clean Max: 3,5 Stunden Schrubben oder acht Stunden Staubwischen,
35/33 Liter Rein-/Schmutzwasser. Arbeitsbreiten 17,33/19,68 Zoll und maximale
Flächenleistungen 7.535/12.917 sq ft/h bleiben modellgebunden. LG B9: sechs Stunden
Kehren oder vier Stunden Saugen; 9.688 sq ft Reinigungsfläche sind keine Stunden-
leistung. Zwei Betriebs-/zwei Reserveakkus begründen keine Einzelladung für
24 Stunden. 6,3 lb im Kapazitätsfeld und 3,0 L in der Komponentenbeschreibung
werden nicht stillschweigend in dieselbe Staubmenge umgerechnet.

Erscheinungsjahre nur aus ausdrücklich benannten Herstellermeilensteinen. Der
Familienstart wird nicht auf separat benannte Carti 1000s und Servi Clean Max
übertragen. Firmenfokus trennt Hardware, Flottensoftware und LG-Partnerschaft.
Die Historie nennt Kinisi/KR1; die Angebotsseite lässt Last, Reichweite und genaue
Mobilität bis zum Launch offen. Werbewerte 14,4 km/h/IP65 ohne passende finale
Tabelle werden nicht auf Servi/Carti übertragen; separate Kinisi-Identität bleibt
mit eigenen Primärquellen abzugleichen. Keine vollständige historische/regionale
Produktpalette oder einzigartige Marktüberlegenheit behauptet.

Zwölf HTTP-Körper gehasht geprüft: neun HTML und drei PDF. Elf Primär-Snapshots
verwendet, einschließlich Carti-Handbuch Seite 11 und Servi-Plus-Handbuch Seiten
10/38. Die zweiseitige Bildbroschüre enthält keinen extrahierbaren Text und bleibt
als Produktbeleg ungenutzt. Keine Bild-/OCR-Prüfung behauptet, keine Formulare
abgesendet, keine bekannten blockierten Hosts erneut angefragt.

Gesamtbestand: 1.756 Modelle/Konfigurationen, 629 Primärmerkmalsdatensätze
(501 Ergänzungen/128 bestehende Modelle), 2.185 Aussagen und 833 Quellenreferenzen.
185 Modelle mit 2.134 ausgewählten Feldentscheidungen: 1.327 dokumentiert,
756 nicht dokumentiert, 49 widersprüchlich, zwei Roadmap. 32 Firmenfokus-Prüfungen.
1.034 Profile (629 mit/405 ohne Modelle); 553 Themenprofile. Alle 429 den benannten
Wettbewerber-Modellen zugeordneten Katalogmodelle behalten datierte Merkmale.
Die drei ursprünglichen Modellidentitäten, neun Listings, vollständige Detail-
seitenprüfung bei BuyAndRentRobots und eine gemessene Spitzenposition bleiben offen.

363 Unit-Tests/27 Dateien bestanden. 92 Browserfälle geprüft: 30 Bear/LG, 44
IPLUSMOBOT und 18 Vergleich, einschließlich 28 Axe-Fällen Desktop/Mobil Hell/Dunkel.
Erster Lauf 90 bestanden/zwei fehlgeschlagen: der neue deutsche Vergleichstest
erwartete den englischen Quellenrollentext statt korrekt „Quelle des Integrations-
partners“. Nur Testerwartung korrigiert; beide Fälle anschließend bestanden.
Lint/Format bestanden. Build 2.804 Seiten/rund 422 MB; Datenprüfung null Fehler/
626 Hinweise, vier weniger durch belegte Erscheinungsjahre trotz Ergänzungen.
HTML-/Exportprüfung: 553 Themenprofile, 76 Namensprofile, 132 Namensentscheidungen,
13 Produktseiten und 591/406/862/132 Exportzeilen. Sechs Bear-Quellenmodellzeilen
enthalten neun unterschiedliche bestehende Katalogmodelle samt geprüften Werten,
Status, Quellen und Daten. Erste Exportprüfung hatte eine falsche Erwartung von
vier Zeilen; auf die sechs tatsächlichen Quellnennungen korrigiert und vollständig
abgeglichen. Alle 167 Felder stimmen mit CSV/Darstellung überein; 119 Quellenbadges,
39 ausgelassene Leerfelder, neun Jahreszeilen und 106 strukturierte Eigenschaften.
Alle 13 unbekannten Preise ohne strukturierte Kaufangebote. Öffentliche Belege
vollständig abgeglichen; private Recherchemetadaten ausgeschlossen. Katalogdatei
1491413 Byte, Beleg-JSON 675480 Byte. Erneuter Import ohne Ergänzungen.
Alle 180 erfassten eigenen Testprozesse beendet, keine eigenen Recherchehelfer,
Port 4321 geschlossen; andere Aufgaben erhalten. Lokale Änderungen.
Artefakte: scratch/competitor-research/primary/batch-48/.


## Ergänzung vom 2. November 2026 – Enabled Robotics: Systemtraglast und markerbezogene Präzision

Zwölf bestehende Enabled-Konfigurationen gegen die aktuell verlinkten Integrations-
datenblätter geprüft: zehn ER-FLEX-Standard-/ESD-Ausführungen und zwei ER-MAX.
192 Feldentscheidungen: 120 dokumentiert, 72 nicht dokumentiert. Keine neuen
Roboter oder Software-Dubletten. Die übrigen 1.744 bisherigen Zeilen bleiben
inhaltlich unverändert; die zwei neuen optionalen commercial-Spalten sind dort
leer. 185 frühere Modellprüfungen, 31 unveränderte Firmenfokus-Datensätze, alle
1.961 Quellenidentitäten, 97 Familienzuordnungen und 132 Namensentscheidungen
bleiben erhalten. Der vorhandene Enabled-Firmenfokus wurde aktualisiert.

Die neuen Felder transportPayload und visionPrecision stehen in Detailtabellen,
strukturierten Produktdaten und Vergleich, mit Deutsch/Englisch und bestehendem
Sprachfallback. ER-FLEX: je Arm 7,5/12,5/16/17,5/10 kg und 850/1.300/900/1.300/
1.750 mm Reichweite ohne Werkzeug; gemeinsame Transportlast bis 165 kg. Zehn
Produktnummern trennen Standard/ESD. Die Einleitung nennt vier Modelle, die
Detailauswahl fünf Arme/zehn Konfigurationen; diese Abweichung bleibt genannt.
ER-MAX: 25/35 kg Armtraglast und 1.750/1.300 mm Reichweite, getrennt von 380 kg
Transportlast. Weder 250 noch 600 aus der MiR-Basisbezeichnung wird als nutzbare
Systemtraglast übernommen. Aktuelle Armwerte sind keine Freigabe jeder Lastlage.

ER-FLEX: geschätzte acht Stunden Betrieb von 100 % auf 10 % Ladung, getrennt von
20 Stunden täglicher Auslastung. ER-MAX: vier Stunden Betrieb im gleichen Lade-
zustandsfenster, getrennt von 18,5 Stunden Auslastung. Ladegeräte-Stromstärken
werden nicht in eine erfundene Ladezeit umgerechnet. Maximale Dauerlaufzeit,
Kaufpreis und Erscheinungsjahr bleiben für alle zwölf Einträge undokumentiert.

1 mm gilt relativ zu installierten Markern, nicht als allgemeine Navigation,
Andocktoleranz oder Armwiederholgenauigkeit. Die Arm-Home-Position bei fahrender
Basis bleibt explizit. IP21 bzw. IP52 gelten für die Plattform, IP54 für Arm/Turm;
kein pauschales Gesamtsystem-IP54. ER-FLEX-Masse 209–229 kg ist eine Familien-
spanne ohne Zuordnung zu jedem Arm/ESD; ER-MAX 460 kg ist ein gemeinsamer Wert.
800 × 580 bzw. 1.350 × 910 mm sind Grundflächen, keine vollständigen Arm-/Werkzeug-
hüllräume. Zeichnungs- und Ladeflächenhöhen ersetzen keine Gesamthöhe.

Die Hersteller-Partnerseite nennt ER-FLEX auch MC250 und ER-MAX auch MC600.
Das ist eine Familiennamensentsprechung, keine exakte Zuordnung jeder älteren
UR5e-/UR10e-/UR16e-/Controller-/Beschichtungsvariante. Frühere ER-FLEX- und
ER-FLEX-MAX-Unterlagen bleiben historischer Kontext; 4,5 Stunden bzw. 20/30 kg
werden nicht in heutige Konfigurationen übertragen. ER-ABILITY, ER-ORGANIZER und
ER-CONNECT sind Software. Hochmodule, Ladegeräte und Marker bleiben Zubehör.
Keine unabhängige Prüfung von ESD/ISO/PL-D, barrierefreiem Betrieb oder ROI.

Acht neue HTTP-Antwortkörper gehasht: sechs HTML und zwei einseitige, direkt von
den Produktseiten verlinkte PDFs. Sieben neue Primär-Snapshots verwendet. 31
Tabellenzellen anhand der PDF-Textkoordinaten den exakten Armspalten zugeordnet.
Keine Bildprüfung behauptet, kein Formular abgesendet. Vier frühere Firmenquellen
beibehalten: die beiden PDF-Körper erneut gehasht; zwei alte MiR-Go-HTML-Körper
wurden damals nicht gespeichert, deshalb nur historische Text-/Metadaten-Snapshots
erhalten und kein neuer Rohdaten-Hashnachweis behauptet. Keine neue Datierung
oder Wiederabfrage dieser beiden Seiten. Die exakten aktuellen Felder stammen
aus den neu gespeicherten Integrationsdatenblättern.

Gesamtbestand unverändert 1.756 Modelle/Konfigurationen und 629 Primärmerkmals-
datensätze (501 Ergänzungen/128 bestehende Modelle). Jetzt 2.233 Aussagen und
845 Quellenreferenzen; 197 Modelle mit 2.326 ausgewählten Feldentscheidungen:
1.447 dokumentiert, 828 nicht dokumentiert, 49 widersprüchlich, zwei Roadmap.
32 Firmenfokus-Prüfungen, 1.034 Profile (629 mit/405 ohne Modelle), 553 Themenprofile.
Alle 429 Katalogmodelle mit Bezug zu benannten Wettbewerber-Nennungen behalten
datierte Merkmale. Die ursprünglichen drei Modellidentitäten und neun Listings,
alle BuyAndRent-Detailseiten, vollständige historische/regionale Herstellerprüfung
und eine gemessene Spitzenposition bleiben offen.

374 Unit-Tests/28 Dateien und alle 80 Browserfälle im ersten Lauf bestanden:
32 Enabled, 30 Bear/LG und 18 Vergleich, einschließlich 24 Axe-Fällen Desktop/Mobil
Hell/Dunkel. Lint/Format bestanden. Build 2.804 Seiten/rund 422 MB; Datenprüfung
null Fehler/626 Hinweise. HTML-/Exportabgleich: 553 Themenprofile, 76 Namensprofile,
132 Namensentscheidungen, zwölf Produktseiten und 591/406/862/132 Exportzeilen.
Zwei MC250/MC600-Quellzeilen mit allen zwölf integrierten Zielmodellen samt Feldern,
Status, Quellen und Prüfdaten abgeglichen. Alle 192 Felder stimmen mit CSV und
Darstellung überein: 132 Quellenbadges, 60 ausgelassene Leerfelder, 120 strukturierte
Eigenschaften. Zwölf unbekannte Preise ohne strukturierte Kaufangebote. Öffentliche
Belege vollständig abgeglichen, private Recherchemetadaten ausgeschlossen.
Katalogdatei 1514906 Byte; Beleg-JSON 733720 Byte. Erneuter Import ohne Ergänzungen.
Alle 133 erfassten eigenen Testprozesse beendet, keine eigenen Recherchehelfer,
Port 4321 geschlossen; andere Aufgaben erhalten. Lokale Änderungen.
Artefakte: scratch/competitor-research/primary/batch-49/.


## Ergänzung vom 2. November 2026 – Rainbow Robotics: Reichweite, Einheiten und Modellgrenzen

13 bestehende kollaborative Arme und RBQ-10 anhand aktueller englischer Hersteller-
seiten geprüft: 209 Feldentscheidungen, davon 111 dokumentiert, 92 nicht dokumentiert
und sechs widersprüchlich. Keine neuen Roboterkarten. 1.742 andere Katalogzeilen
bleiben inhaltlich unverändert; die optionale Spalte armReach ist bei anderen
Roboterarmen leer. Die bereits vorhandene Anzeige in Detailtabellen, strukturierten
Produkteigenschaften und Vergleich liefert diese Armreichweiten aus. 197 frühere
Feldprüfungen einschließlich RB-Y1, 32 Firmenfokus-Prüfungen, 1.961 Quellenidentitäten,
97 Familienzuordnungen und 132 Namensentscheidungen bleiben erhalten. Ein neuer
Rainbow-Firmenfokus trennt aktuelle Arme, Vierbeiner und benachbarte Produktnamen.

RB5-850 und RB5-850N nennen im Fließtext 850 mm, in Tabelle/Familienkarte 927,7 mm.
Beide Werte bleiben sichtbar; weder ein anderer Bezugspunkt noch eine Generation
wird erfunden. Beim Standard-RB5-850 stehen 5 kg neben 6,6 lb; RB30-1400 nennt
71 kg neben 158 lb. Auch diese Einheitenwidersprüche bleiben direkt beim Wert.
RBQ-10 nennt 6 gegenüber 9 km/h Gehen und 20 gegenüber 25 cm Stufenhöhe;
14 km/h gilt ausdrücklich für Laufen. Längs-/Quersteigung 45 %/20 % sind Prozent,
keine Grad. Zwei Stunden/bis vier Stunden Laufzeit haben keine dokumentierten
Last-/Testbedingungen. Akkutausch und automatisches Laden liefern keine Ladezeit.

Grundflächen von 128/173/196/245 mm Durchmesser sind Montageflächen, keine
vollständigen Armhüllräume. Arm- und Controller-Massen/-Maße bleiben getrennt.
±0,05 mm Wiederholgenauigkeit wird nicht als absolute Positioniergenauigkeit
beworben. Nur vier exakte Modelltabellen geben lineare TCP-Geschwindigkeit an;
Gelenkwinkelgeschwindigkeiten werden nicht in m/s umgerechnet. IP54 gilt für
RB3-730 und RB5-850, IP66 für die übrigen zehn direkt eingesehenen Armvarianten.
Für RB16-900 bleibt die Schutzart unbekannt: sein verlinkter Produktaufruf liefert
HTTP 200 mit der Startseite. Nur die gültige Familienkarte dient als Modellbeleg.

RBC-N: SUS304-basierter Hygienebau, IP66 und NSF/ANSI-169-Aussagen bleiben
Herstellerangaben; kein unabhängiger Zertifikats-, Regionalpaket- oder Weltpremieren-
nachweis. RBQ-LiDAR, LTE, PTZ/Thermalmodule und kabelloses Laden sind konfigurations-
abhängig. RBY-Erweiterungen, vier RBM-Namen und ASTRO werden nur als benachbarte
Rechercheansätze festgehalten, nicht durch Navigation zu zusätzlich geprüfter
Hardware erklärt. Historische HUBO-/FX-2- und bestehende RB-Y1-Belege bleiben erhalten.

17 neue HTML-Antwortkörper mit SHA-256 gesichert; 15 Primär-Snapshots verwendet:
13 exakte Modellseiten und zwei Armfamilien. 13 Armkarten und 122 extrahierte
Tabellen-/Kartenangaben mit den gespeicherten Körpern abgeglichen. Der fehlerhafte
Produktlink und die zusätzliche RBQ-Familienseite sind als Kontext erhalten.
30 Links zu kontakt-/einwilligungspflichtigen Downloads nur protokolliert; kein
Formular abgeschickt und keine solche Datei angefordert. Keine Bildprüfung behauptet.

Gesamtbestand: 1.756 Modelle/Konfigurationen, 640 Herstellerschreibweisen,
1.034 Profile (629 mit/405 ohne Modelle), 629 Primärmerkmal-Datensätze mit
2.263 Aussagen/857 Quellenreferenzen. Jetzt 211 Modelle mit 2.535 ausgewählten
Feldentscheidungen: 1.558 dokumentiert, 920 nicht dokumentiert, 55 widersprüchlich,
zwei Roadmap. 33 Firmenfokus-Prüfungen; 553 Themenprofile. Alle 429 zu benannten
Quellennennungen zugeordneten Katalogmodelle behalten datierte Merkmale.
Die drei ursprünglichen Modellidentitäten, neun unklaren Listings, unvalidierte
BuyAndRent-Detailinhalte, übrige Herstellerprüfung und gemessene Spitzenposition
bleiben offen.

386 Unit-Tests/29 Dateien sowie 80 unterschiedliche Browserfälle bestanden:
30 Rainbow, 32 Enabled und 18 Vergleich, einschließlich 28 Axe-Fällen auf
Desktop/Mobil in Hell/Dunkel. Zunächst 78 bestanden/zwei neue Testannahmen falsch:
Die IP-Zelle ohne Wert hat keinen Badge. Tests auf leere Zelle und sichtbare
Quellenbegrenzung angepasst; beide gezielten Wiederholungen bestanden. Keine
Produkt-/Quellcodeänderung hierfür. Lint/Format bestanden. Build 2.804 Seiten/rund
422 MB; Datenprüfung null Fehler/626 Hinweise. HTML-/Exportabgleich: 553 Themen-
profile, 76 Namensprofile, 132 Namensentscheidungen und 14 Produktseiten;
591/406/862/132 Exportzeilen. Drei Rainbow-Quellzeilen mit 14 Katalogzielen und
allen ausgewählten Feldern samt Status/Belegen abgeglichen. 209 Feldwerte geprüft:
103 Quellenbadges, 78 ausgelassene Leerwerte, 14 Beschreibungen/14 Websites,
89 strukturierte Eigenschaften, 14 unbekannte Preise ohne Kaufangebote.
Öffentliche Vergleichsdaten exakt abgeglichen; interne Recherchemetadaten fehlen.
Katalogdatei 1517763 Byte, Beleg-JSON 779931 Byte. Erneuter Import ohne Ergänzungen.
Alle 168 erfassten eigenen Testprozesse beendet, keine eigenen Recherchehelfer,
Port 4321 geschlossen; fremde Ressourcen erhalten. Änderungen bleiben lokal.
Artefakte: scratch/competitor-research/primary/batch-50/.


## Ergänzung vom 2. November 2026 – Elephant Robotics: Generationen, Betriebsmodi und Begleitroboter

Zwölf vorhandene Modelle mit 199 ausgewählten Feldentscheidungen geprüft:
75 dokumentiert, 122 nicht dokumentiert, zwei widersprüchlich. Keine neuen
Roboterkarten oder Kategorienverschiebungen. Der vorhandene myCobot 280 M5
bekommt erstmals datierte Primärmerkmale; elf frühere Merkmalsdatensätze wurden
aktualisiert. 1.744 andere Zeilen bleiben inhaltlich unverändert. Die neue optionale
humanoid-Spalte armReach nutzt die bestehende Anzeige in Detail, strukturierten
Daten und Vergleich; andere humanoide Zeilen bleiben dort leer. 211 frühere
Feldprüfungen, 33 Firmenfokus-Prüfungen, 1.961 Quellenidentitäten, 97 Familien-
zuordnungen und 132 Namensentscheidungen bleiben erhalten. Ein Elephant-Fokus
stellt die geprüften Produktunterschiede und offenen Variantenfragen dar.

Original-myAGV: 3,6 gegenüber 3,02 kg und 311 × 236 × 130 gegenüber
300 × 205 × 145 mm bleiben Quellenkonflikte. 1–1,5 Stunden Arbeit werden von
1,5–2 Stunden Standby und 3,5–4 Stunden Laden getrennt. Die widersprüchlichen
Ladespannungsangaben werden nicht zu einer Ladegeräteempfehlung. Pi/JN 2023:
4,16 kg, 5 kg Plattformlast, 311,15 × 230 × 110 mm, 181 Minuten Navigation und
328 Minuten Standby. Keine Übernahme der ursprünglichen 0,9 m/s oder Ladezeit.
Pi-/Jetson-Controller und Kameraspalten bleiben getrennt, Ausrüstung optional.

myCobot 280 M5: 280 mm/250 g; 320 M5 und Pi: 350 mm/1 kg; Pro 630:
630 mm/bis 2 kg. Lebensdauern 500/2.000/>10.000 Stunden werden nicht als
Batterielaufzeit gespeichert. Gelenkgeschwindigkeit ist keine lineare TCP-
Geschwindigkeit. Beim 320 bleiben 1-mm-Wiederholgenauigkeit der Landingpage und
±0,5-mm-Positionierangabe der Tabelle begrifflich verschieden; kein einheitlicher
geprüfter Präzisionswert. Der myPalletizer-Pfad liefert ausdrücklich myCobot-320-Pi-
Inhalte; der Inhalt, nicht allein der URL-Name, bestimmt den Modellbezug.

Mercury A1/B1/X1 bleiben Arm, stationärer Torso und mobile Plattform mit
7/17/19 Freiheitsgraden. Die B1-/X1-Angabe 1 kg wird nicht auf zwei Arme verdoppelt;
ihr Bezug bleibt unklar. B1-Armradius wird nicht automatisch zum X1-Radius.
X1: bis acht Stunden ohne Lastbedingung, 1,2 m/s Basisfahrt, 15 Grad und 2 cm
Hindernishöhe. Die aktuelle Orin-Nano-SUPER-Nennung verifiziert nicht jede ältere
Controllerkonfiguration oder widersprüchlich beschriftete Rechentechnik-Tabelle.

Das internationale MARS-1001-Handbuch liefert MarsCat: 2,9 kg, 16 Gelenke,
Alter 12+, unterschiedliche Posenmaße ohne Schwanz, zwei Stunden aktive oder
drei bis vier Stunden reguläre Bewegung und drei Stunden Laden. Die zweite
stehende Längenangabe mit uneindeutig wiederholtem Ohne-Schwanz-Label wird nicht
korrigierend interpretiert. MetaCat dokumentiert Berührung, Stimme, Augen, Kopf,
Schwanz, Schnurren und USB-C; zehn Stunden/600 Minuten bleiben unbelegt und sind
entfernt. Keine Übertragung von MarsCat-Laufen/SDK, therapeutischer Wirkung oder
LLM-Fähigkeit. Regionale/bündelabhängige Preisbeispiele bleiben datiert in den
Merkmalen, nicht als globale numerische Kaufangebote. Der ausgewählte MetaCat-
Ragdoll-ohne-Anzug-Preis 159 USD und der Ausschluss Amerikas wurden geprüft.

metaCat AI bleibt als vorhandener, ungeprüfter Katalogeintrag erhalten: seine
bisherige Produktadresse liefert 404. Das beweist weder Einstellung noch Identität
mit MetaCat. Eine Shop-Suche nennt metaDog/metaPanda; der folgende metaDog-
Detailabruf liefert HTTP 429, metaPanda wurde danach ausgelassen. Keine weiteren
Shopanfragen und keine neuen Modellkarten allein aus Suchtreffern. Bekannte zuvor
gesperrte andere Hosts wurden nicht erneut abgefragt.

25 gespeicherte HTTP-Körper erneut gehasht: 21 erfolgreiche HTML, eine HTML-404
und drei PDFs. 21 Primär-Snapshots verwendet, darunter zwei Text-PDFs. 16 Header-/
Zellenwerte der 2023-AGV-Tabelle, drei separate Mercury-Modelltabellen und sechs
MarsCat-Label-/Wertpaare anhand der PDF-Koordinaten abgeglichen. Das bildbasierte
Quick-Guide-PDF wird nicht als Datenbeleg verwendet; keine Bildprüfung behauptet.
Die spätere Klartext-429 hat Text/Metadaten, aber keinen gespeicherten Rohkörper;
für diese Antwort wird keine nachträgliche Roh-Hashprüfung behauptet.

Gesamt: 1.756 Modelle/Konfigurationen, 640 Herstellerschreibweisen, 1.034 Profile
(629 mit/405 ohne Modelle), 630 Merkmalsdatensätze (501 Ergänzungen/129 bestehende
Modelle), 2.279 Aussagen/867 Quellenreferenzen. 223 Modelle mit 2.734 ausgewählten
Feldern: 1.633 dokumentiert, 1.042 nicht dokumentiert, 57 widersprüchlich, zwei
Roadmap. 34 Firmenfokus-Prüfungen. Alle 429 zu ursprünglichen benannten Nennungen
zugeordneten Katalogmodelle behalten Merkmalsbelege. Drei ursprüngliche Modell-
identitäten, neun Listings, BuyAndRent-Detailinhalte, weitere Herstellerprüfung
und eine gemessene Spitzenposition bleiben offen.

398 Unit-Tests/30 Dateien und 80 Browserfälle im ersten Lauf bestanden:
32 Elephant, 30 Rainbow und 18 Vergleich, einschließlich 28 Axe-Fällen auf
Desktop/Mobil in Hell/Dunkel. Lint/Format bestanden; Build 2.804 Seiten/rund
422 MB. Datenprüfung null Fehler/631 Hinweise; fünf zusätzliche Hinweise betreffen
nun unbelegte frühere Erscheinungsjahre. HTML-/Exportabgleich: 553 Themenprofile,
76 Namensprofile, 132 Namensentscheidungen, zwölf Produkte; 591/406/862/132
Exportzeilen. Sechs ursprüngliche Elephant-Modellzeilen mit neun Zielen und
exakten Feld-/Status-/Belegwerten geprüft. Drei zusätzlich geprüfte Modelle sind
keine Ziele dieser ursprünglichen Modellnennungen; die Quellenabdeckung wird
nicht entsprechend aufgebläht. Alle 199 Feldwerte stimmen: 65 Quellenbadges,
110 ausgelassene Leerfelder, zwölf Beschreibungen/zwölf Websites, 52 strukturierte
Eigenschaften, zwölf unbekannte regionale Gesamtpreise ohne pauschale Angebote.
Öffentliche Vergleichsdaten vollständig abgeglichen; interne Metadaten ausgeschlossen.
Katalogdatei 1523493 Byte, Beleg-JSON 825388 Byte. Erneuter Import ohne Ergänzungen.
Alle 137 erfassten eigenen Testprozesse beendet, keine eigenen Recherchehelfer,
Port 4321 geschlossen; andere Aufgaben erhalten. Lokale Änderungen.
Artefakte: scratch/competitor-research/primary/batch-51/.


## Ergänzung vom 2. November 2026 – Fdata: Modellspalten, Sensorpakete und Einheiten

Vier ausdrücklich benannte Modelle ergänzt: A012 Mini aus der direkt verlinkten
Hersteller-Arbeitsmappe sowie A005, A006 und A010 aus jeweils eigenen Produktseiten
der zweiten Herstellerdomain. Zehn vorhandene Fdata-Konfigurationen überarbeitet;
14 ausgewählte Feldprüfungen mit 238 Entscheidungen: 106 dokumentiert, 130 nicht
dokumentiert, zwei Quellenwidersprüche. Keine neuen Kategorien oder Datenfelder.
1.746 frühere Katalogzeilen, 223 frühere Feldprüfungen und 34 Firmenfokus-Prüfungen
bleiben unverändert. Ein neuer Firmenfokus erläutert die Grenzen der Belege.

Die A012-Arbeitsmappe enthält fünf explizite Modellspalten: Plus/Pro/Omni/Basis/Mini
mit 100/80/60/60/30 kg Nutzlast. Mini: 38 kg und 500 × 465 × 285 mm; die Webtabelle
zeigt nur die ersten vier Varianten. Die vorhandene A012-Familienzuordnung wurde
um Mini erweitert; 96 andere Familienentscheidungen bleiben unverändert, insgesamt
weiter 97. Die Zahl der Katalogziele ursprünglicher Nennungen steigt von 429 auf
430, alle mit datierten Merkmalen. Die alten A012-/Plus-Übersichtslabels nennen
50/80 kg statt aktuell 60/100 kg. Aktuelle Werte bleiben mit Konfliktstatus und
offener Versionszuordnung sichtbar. Seitwärtsfahrt ist für Omni explizit und für
Plus optional; die generische 62-cm-Passageangabe trotz 700-mm-Plus-Breite wird
nicht als geprüfte Durchfahrts- oder Dockingtoleranz übernommen.

A011: 500 × 500 × 302 mm, 30 kg, 50 kg Last, 2WD, acht Stunden ohne Lastbedingung;
30 km bleiben Reichweite. A020: 500 kg, 4WD-Differentialantrieb, 40/70-Ah-Optionen,
über acht Stunden ohne eindeutige Pack-/Lastzuordnung. A025R/F/N teilen 400 kg,
500 kg Last, 2.000 × 1.300 × 590 mm und acht bis zehn Stunden ohne Lastbedingung.
Die Sensorpakete unterscheiden sich: R ohne gesetzte Sensorhaken, F mit 2D-Lidar,
IMU/Ultraschall, N mit RTK, 3D-Lidar, IMU/Ultraschall. Striche sind keine Aussage,
dass spätere Erweiterungen unmöglich sind. Autonomie bleibt ausstattungsabhängig.
Die 30-Grad-Steigung ist eine Familienangabe ohne dokumentierte Lastbedingung.

A026: PDF nennt 450 kg, 1.300 × 850 × 820 mm, 1.000 kg Nutzlast, longitudinal und
lateral bis 2 m/s, IP65, unter Volllast höchstens zehn Grad und 100 mm Hindernis.
Mindestens 270 mm Chassis-Bodenfreiheit stehen neben 130 mm Radbaugruppenfreiheit;
der höhere Wert wird nicht zum gesamten Mindestabstand umgedeutet. 48 V/125 Ah,
Ladeverfahren und 100 m Fernsteuerreichweite sind keine Laufzeit, Ladezeit oder
Navigationspräzision. Ultraschallpositionen sind noch TBD und unter 80 dB ausdrücklich
geschätzt; keine unabhängige Sicherheits- oder Akustikzertifizierung behauptet.

A005: 100 kg, acht km/h bei Volllast, vier Stunden Laden, 20 km Reichweite;
zehn Grad/50 mm unter Last und 20 Grad/90 mm unbeladen bleiben getrennt. A006:
300 kg, 156 kg, 1.600 × 820 × 520 mm; 40/70-Ah-Pakete mit 35/60 km. Die
Battery-Life-Zellen 7/12 haben keine Zeiteinheit und werden nicht in Stunden
umgerechnet. A010: 80 kg, Ackermann, unabhängige Radaufhängung, zehn Grad unter
80 kg Last und 50 mm Hindernis. Lenkwinkelpräzision, Temperaturbereich und
Blinker sind keine Navigations-/Dockinggenauigkeit oder IP-Schutzklasse.

Beide Domains nutzen dieselbe Kontaktadresse; die ältere Übersicht verlinkt
A012/Plus unmittelbar auf fdatabot. Ihre A004-/A008-/A009-Produktlinks leiten
auf anders benannte A012-/A025-/A020-Seiten weiter. Keine Gleichsetzung, keine
behauptete Einstellung und keine neuen Modellkarten allein aus diesen Redirects.
Die drei Namen bleiben zusätzliche ungeklärte Hinweise. Weitere Service-/Mähroboter
und historische/regionale Produktreihen sind durch diese Auswahl nicht vollständig
geprüft. Verfügbarkeit, Lagerbestand und Lieferkonfiguration sind nicht bestätigt.

19 gespeicherte HTTP-Körper erneut gehasht: 16 HTML, zwei XLSX, ein PDF;
15 Primär-Snapshots verwendet. 63 nichtleere Arbeitsmappenzellen, 56 A025-Header-/
Spaltenwerte, zwei per Rowspan expandierte A006-Batteriezeilen und sieben
A026-Label-/Wertpaare anhand positionierten PDF-Texts abgeglichen. Keine
Bildprüfung behauptet; bildbasierte A020-/A025-Spezifikationen nicht verwendet.
Keine Formulare abgeschickt und bekannte gesperrte Hosts nicht erneut abgefragt.

Gesamt: 1.760 Modelle/Konfigurationen, 640 Herstellerschreibweisen, 1.034 Profile
(629 mit/405 ohne Modelle), 634 Merkmalsdatensätze (505 Ergänzungen/129 bestehende
Modelle), 2.299 Aussagen/890 Quellenreferenzen. 237 Modelle mit 2.972 ausgewählten
Feldern: 1.739 dokumentiert, 1.172 nicht dokumentiert, 59 widersprüchlich, zwei
Roadmap. 35 Firmenfokus-Prüfungen. Quelleninventare und 132 Namensentscheidungen
bleiben erhalten. Die ursprünglichen drei Modellidentitäten, neun unklaren Listings,
862 BuyAndRent-Detailinhalte und eine gemessene Spitzenposition bleiben offen.

408 Unit-Tests/31 Dateien und 78 Browserfälle im ersten Lauf bestanden: 28 Fdata,
32 Elephant, 18 Vergleich, einschließlich 28 Axe-Fällen auf Desktop/Mobil in
Hell/Dunkel. Lint/Format bestanden; Build 2.808 Seiten/rund 423 MB. Datenprüfung:
null Fehler/635 Hinweise. Vier neue Hinweise betreffen ausschließlich unbelegte
Erscheinungsjahre der vier Ergänzungen. HTML-/Exportabgleich: 553 Themenprofile,
76 Namensprofile, 132 Namensentscheidungen, 14 Produkte und 591/406/862/132
Exportzeilen; sechs Fdata-Quellenmodellzeilen erreichen elf geprüfte Katalogziele.
Vergleichsbelege 877.773 Byte, gemeinsamer Katalog 1.529.508 Byte. Eigene
Testprozesse und Helfer beendet, Port 4321 frei; Nutzer-/Fremdressourcen erhalten.
Nur lokale Änderungen, kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Productive Robotics: Arme, Schweißprozesse und Zellen

Acht vorhandene OB7-/Blaze-Konfigurationen überarbeitet und sieben ausdrücklich
benannte Angebote ergänzt: Blaze Max, Blaze Laser Max, Blaze MAX Mobile, Blaze LF,
Blaze MIG Cell, Blaze Laser Cell und Assemble & Weld Cell. Das sind drei weitere
Max-Ausführungen, ein Paket, zwei Zellen und ein kundenspezifisches Mehrrobotersystem,
keine sieben neuen grundlegenden Armkonstruktionen. 15 ausgewählte Feldprüfungen
mit 255 Entscheidungen: 88 dokumentiert, 163 nicht dokumentiert, vier widersprüchlich.
Ein Firmenfokus ergänzt; 1.752 andere frühere Katalogzeilen unverändert.

OB7/Stretch: fünf/vier kg Nutzlast, 1.000/1.250 mm Reichweite und jeweils
22 kg neben nicht äquivalenten 58 lb. Die Massendifferenz bleibt ein Quellenkonflikt.
Max 8/12/16: acht/zwölf/16 kg Last, 1.700/1.300/1.000 mm Reichweite und 58 kg.
Flanschdurchmesser ist keine Gesamtgröße; IP30-Steuerung, IP41-Tablet und optionaler
IP65-PG2-Greifer sind keine bestätigte Schutzklasse des OB7-Arms. Optionen werden
nicht pauschal als mitgeliefert oder als weitere Robotermodelle geführt.

Blaze und Max: 1.550/2.159 mm einschließlich Brenner; dasselbe Größenpaar ist
für Laser und Mobile ausdrücklich benannt. Der Serienname Blaze Max Laser führt
zur gleichen größeren Laser-Ausführung wie Blaze Laser Max, nicht zu einer dritten
Karte. Schweißvorschub bis 2.540 mm/min steht jetzt als weldSpeed getrennt von der
freien Bewegung. Das Laser-PDF nennt sowohl 0–2+ m/s als auch höchstens 2 m/s,
positionsabhängig; dieser Widerspruch bleibt bei den beiden Laser-Größen sichtbar.
±0,1 mm Wiederholgenauigkeit ist keine absolute Positionier- oder Schweißgütegarantie.
Die gemeinsam angegebene, nicht eindeutig größenbezogene Masse 22 kg/58 lb wird
nicht ausgewählt; 64 kg gehört zur Miller-Schweißquelle, nicht zum Gesamtroboter.
IP61 für Laserroboter/Steuerung und IP41 für das Tablet sind keine Zellenschutzklasse.

OptX 1 kW ist für Schweißen, 2 kW zusätzlich für Reinigen beschrieben. 32 A im
PDF stehen 20 A in LF-/Mobile-Optionstabellen gegenüber; keine geprüfte
Revisionszuordnung. Auch die Ethernet-Beschriftung des Controllers unterscheidet
sich zwischen Web und PDF. Quellenstrom, Laserleistung und Einschaltdauer werden
nicht zu Nutzlast, Laufzeit oder einem universellen Anschlusswert. Mobile nutzt
Rollen mit Feststellung; autonome Fahrt und Batterielaufzeit sind nicht belegt.

LF-, MIG- und Laser-Zellen nennen einen Arbeitstisch 4 × 8 Fuß. workTableSize
zeigt diese Maße getrennt von unbekannten Gesamt-/Gehäuseabmessungen. MIG-Zellen
bieten Miller-Quellenoptionen, Laser-Zellen OptX-Optionen; Absaugung, Beleuchtung und
Blaze-Vision-Video sind Herstellermerkmale. Sicherheits-, Garantie-, Produktivitäts-
und Keine-PSA-Aussagen bleiben zugeschriebene Angaben, keine unabhängig geprüften
Verträge oder universellen Betriebsanweisungen. Das Assemble-&-Weld-System kombiniert
OB7-Halten mit Blaze-Schweißen und wird auftragsbezogen gebaut; Achsen, Lasten und
Reichweiten werden nicht aus zwei Einzelarmen summiert oder pauschal übertragen.

Die Serienübersicht beschreibt Blaze Duo mit zwei Stationen und automatischen
Türen, verlinkt aber die MIG-Cell-Seite; deren Garantiezeile nennt Laser Cell.
Identität, Layout und Garantiebezug bleiben ungeklärt. Kein separates Duo-Modell
angelegt. Neun benannte Greifer-/Stand-/Prozess-/Schnittstellen-Zubehöre bleiben
Zubehör. Portal-Handbücher und Formularguides nicht abgerufen, keine Formulare
abgeschickt und zuvor gesperrte Hosts nicht erneut abgefragt.

Beide neuen Messgrößen erscheinen in Detailtabelle, strukturierten Produktdaten
und Vergleich mit Englisch-/Deutsch-Labels und bestehendem Sprachfallback.
Der neue Gewerbefilter Fertigung & Schweißen findet die vier benannten Pakete/
Zellsysteme. Ein erster Integrationstest hatte die fehlende passende Unterkategorie
aufgedeckt; sie wurde ergänzt, ohne Produktionszellen zu Forschungsbasen umzudeuten.

Zusätzlich 151 pauschale Fehlwert-Hinweise auf bereits dokumentierten Feldern von
26 früheren Elephant-/Fdata-Prüfungen entfernt. Werte, Status, Quellen, Daten und
inhaltliche Einschränkungen bleiben unverändert. Von 237 früheren Reviews sind
211 vollständig unverändert, 26 nur in diesen Hinweisen korrigiert. Eine neue
Regression prüft dies katalogweit. Bei den 15 neuen Reviews wurden außerdem
86 solche Vorlagenhinweise vor Abschluss bereinigt. Historische Prüfartefakte bleiben
unverändert; die Notizbereinigung ist keine neue Herstellerverifikation.

16 gespeicherte HTTP-Körper erneut gehasht: 15 HTML und ein einseitiges PDF,
alle 16 als Primärbelege verwendet. 20 beschriftete OB7-Werte, sieben PDF-Roboter-
Labelpaare und zwei getrennte OptX-Strom-Bereiche anhand des positionierten Texts
abgeglichen. Größenpaar-, Komponenten-, Tisch- und Duo-Verlinkungen geprüft.
Keine Bildprüfung behauptet. Quelleninventare, 97 Familienzuordnungen und
132 Beschreibungsnamensentscheidungen bleiben erhalten.

Gesamt: 1.767 Modelle/Konfigurationen, 640 Herstellerschreibweisen, 1.034 Profile
(629 mit/405 ohne Modelle), 641 Merkmalsdatensätze (512 Ergänzungen/129 bestehende
Modelle), 2.341 Aussagen/920 Quellenreferenzen. 252 Modelle mit 3.227 ausgewählten
Feldern: 1.827 dokumentiert, 1.335 nicht dokumentiert, 63 widersprüchlich, zwei
Roadmap. 36 Firmenfokus-Prüfungen. Alle 430 Ziele ursprünglicher Modellnennungen
behalten datierte Merkmale. Drei ursprüngliche Modellidentitäten, neun unklare
Listings, sämtliche 862 BuyAndRent-Detailinhalte, weitere Herstellerprüfung und
eine gemessene Spitzenposition bleiben offen.

422 Unit-Tests/32 Dateien und 112 Browserfälle im ersten Lauf bestanden: 34
Productive, 28 Fdata, 32 Elephant und 18 Vergleich, einschließlich 40 Axe-Fällen
auf Desktop/Mobil in Hell/Dunkel. Vorherige Unit-Fehler: fehlender Fertigungsfilter
und ein neuer Test, der optionale Notizen stets als String annahm; beides behoben.
Lint/Format bestanden; Build 2.815 Seiten/rund 429 MB. Datenprüfung null Fehler/
642 Hinweise; sieben zusätzliche Hinweise ausschließlich unbelegte Erscheinungsjahre
der Ergänzungen. HTML-Abgleich: 15 Merkmalsseiten und 41 Spezifikationsseiten mit
692 Feldern, 236 Quellenmarkierungen und 185 strukturierten Eigenschaften; 553
Themenprofile, 76 Namensprofile und 132 Entscheidungen. 591/406/862/132 Exportzeilen,
acht Productive-Quellenmodellzeilen und acht zugehörige Katalogziele geprüft.
Zusätzlich aktuelle Notizen aller erreichbaren betroffenen Reviews in 20 Exportzeilen
mit 28 Katalogzielen gegen die exakten Feldtexte abgeglichen.
Vergleichsbelege 923.786 Byte, Katalogskript 1.553.986 Byte. Eigene Prozesse beendet,
Port 4321 frei; Fremd-/Nutzerressourcen erhalten. Nur lokale Änderungen.


## Ergänzung vom 2. November 2026 – Richtech: Gewerbe, Plattformen und Quellenkonflikte

Acht vorhandene Modelle überarbeitet: Dex, Matradee Plus, Pallet Jack, DUST-E MX,
DUST-E S, ADAM, Scorpion und Titan. ADAM/Scorpion stehen nun bei gewerblichen
Getränkerobotern, Titan bei gewerblicher Logistik. IDs, bestehende Modell-URLs und
lokale Bildpfade bleiben erhalten; keine Bildprüfung behauptet. Keine neuen
Modelle angelegt. 1.759 andere Katalogzeilen und alle 252 bisherigen Feldprüfungen
unverändert. Acht neue Prüfungen umfassen 156 Felder: 56 dokumentiert, 93 nicht
dokumentiert, zwei widersprüchlich, fünf Roadmap. Ein Firmenfokus ergänzt.

Dex: stationäre/mobile Plattform, 11 lb je Arm, vier Taskkameras und Jetson Thor.
Mobile Höhe 4 Fuß 6 Zoll, stationär 3 Fuß 7 Zoll; nur Höhe, keine vollständigen
Abmessungen. Vier Stunden Batterie, zwei Stunden Laden sowie Spalt/Schwelle gelten
für mobil. Stationär nutzt externe Versorgung. Die Seite kündigt weiterhin
Roadmap-/Demo-Updates vor dem Start an: diese fünf technischen Werte bleiben als
Roadmap markiert. Keine unbenannten Plattform-SKUs oder bestätigte Lagerverfügbarkeit.

Matradee Plus: 88 lb insgesamt über vier Tabletts, nicht je Tablett; zehn Stunden
Batterie, vier Stunden Laden. Herstellerachsen 22,8 B × 19,2 L × 50,7 H Zoll bleiben
erhalten. Tablett- und Displaymaße sind keine Gesamtgröße. Pallet Jack: 3.307 lb
Nennlast und 8,26 Zoll angegebene angehobene Höhe, ohne belegten Hubweg/Bezugspunkt.
Steigung 5° voll/10° leer; 86,6 Zoll Gangbreite ist kein Radius. Die allgemeine
Positionierangabe ±0,19 Zoll/±1° wird ohne Messmethode nicht zu Andockgenauigkeit.

DUST-E MX: 557 lb ohne Wasser, 20 Zoll Reinigung/30 Zoll Saugleiste, 21.958 ft²/h,
6° Steigung und beschriftete 17/13-gal-Frisch-/Schmutzwassertanks. Gallonenstandard
unbekannt, keine pauschale Literumrechnung. DUST-E S: 13,7 Zoll Bürste/15,7 Zoll
Abzieher, maximal 8.138 ft²/h, sieben Prozent statt Grad und zwei Stunden Laden.
10/15 Liter haben keine Frisch-/Schmutzwasserzuordnung; der 1-Liter-Müllbehälter ist
getrennt. Bürstendruck ist keine Nutzlast, Zubehör/Station keine pauschale Lieferzusage.

ADAM: 11 lb je Arm; die sechs-DoF-Beschriftung nennt keinen Pro-Arm-/Gesamtscope.
Die Größenzeile 19,6 Zoll × 32,6 Zoll × 110 lbs vermischt Maße und Masse. Nur zwei
qualifizierte Maße bleiben mit Konfliktstatus; Gesamtmasse und dritte Abmessung
werden nicht erfunden. Spannweite ist keine radiale Reichweite. Scorpion: sechs
DoF, 11 lb und durchschnittlich eine Minute je Getränk bei einem Standardlayout mit
20 Zutaten. Eine Haupt-/drei Zusatzsprachen sind keine unbegrenzte Sprachabdeckung.
±0,5 Prozent betrifft Zutatenmessung, keine Arm-/Navigationsgenauigkeit.

AC/540 W beziehungsweise AC/380 W und die vom Hersteller behauptete NSF-Zulassung
bleiben getrennt von Batterielaufzeit oder unabhängig geprüften Zertifikaten.
Die ADAM-Fallstudie nennt bis 50 Getränke/Stunde bei einem konkreten Fünf-Getränke-
Menü sowie 1.365 Getränke/32.746 USD in 30 Tagen. Ihre Payback-Texte nennen sowohl
vor fünf Jahren als auch sechs Monate; keine universelle Durchsatz-/ROI-Garantie.
Mietformate ADAM Tisch/klassischer Trailer und Scorpion Tisch/Cybertruck sind
Dienstleistungen, keine weiteren Robotermodelle; kein Preis oder Regionalangebot
erfunden. Unbelegte Erscheinungsjahre von ADAM/Scorpion entfernt.

Titan: zehn bis 24 Stunden abhängig von Nutzung, 5,5 Stunden Laden, IP43 am Körper
und IP66 nur an der Batterie. Die Beschreibung nennt 330 lb, die Tabelle 330–1300 lb,
ohne benannte Varianten-/Lastmoduszuordnung. Nutzlast bleibt widersprüchlich;
keine erfundenen Varianten. ADA-Rampenwerbung ohne Zahl wird nicht zur Gradangabe.

Zwölf HTTP-Körper gehasht: elf HTML und ein siebenseitiges PDF. Elf Quellen verwendet,
50 beschriftete technische Werte mit gespeichertem Text abgeglichen. Der Solutions-
Index liefert trotz HTTP200 keine serverseitigen Produktinhalte; vollständige aktuelle
oder historische Herstellerabdeckung ist damit nicht belegt. Keine Formulare versandt
und keine zuvor gesperrten Hosts erneut angefragt.

Gesamt: 1.767 Modelle/Konfigurationen, 640 Herstellerschreibweisen und 1.034 Profile;
641 Merkmalsdatensätze mit 2.353 Aussagen/923 Quellenreferenzen. 260 Modelle mit
3.383 ausgewählten Feldern: 1.883 dokumentiert, 1.428 unbekannt, 65 widersprüchlich,
sieben Roadmap. 37 Firmenfokus-Prüfungen. Alle 430 Ziele ursprünglicher Nennungen
behalten datierte Merkmale. Quelleninventare, 97 Familienentscheidungen und
132 Beschreibungsnamensentscheidungen erhalten. Drei ursprüngliche Modellidentitäten,
neun Listings, alle 862 BuyAndRent-Detailinhalte und gemessene Marktführerschaft offen.

434 Unit-Tests/33 Dateien bestanden. 84 unterschiedliche Browserfälle bestanden:
32 Richtech, 34 Productive-Regression und 18 Vergleich; darunter 28 Axe-Fälle auf
Desktop/Mobil in Hell/Dunkel. Erster Lauf: 82 bestanden/zwei fehlgeschlagen; der neue
deutsche Vergleichstest erwartete fälschlich Dezimalpunkte. Die Anwendung zeigte
korrekte Dezimalkommas. Test korrigiert, beide betroffenen Fälle erneut bestanden.
Keine Produktänderung dafür erforderlich. Lint/Format bestanden. Build 2.815 Seiten/
rund429 MB; Datenprüfung null Fehler/644 Hinweise. Die zwei neuen Hinweise betreffen
ausschließlich die nun offen ausgewiesenen unbekannten Erscheinungsjahre.

HTML-Abgleich: acht Modellseiten, 156 Feldentscheidungen, 55 Quellenmarkierungen,
85 ausgelassene Leerfelder, 47 strukturierte technische Eigenschaften und36 Merkmals-
sätze sowie Firmenfokus mit acht Karten. Acht ursprüngliche Modell-Exportzeilen/
acht Ziele/156 Feldvorkommen exakt abgeglichen; Gesamt-Exporte591/406/862/132 Zeilen.
Vergleichs-JSON 950.440 Byte, Katalogskript1.556.373 Byte; interne Recherchepfade
bleiben ausgeschlossen. Erneuter Import null Ergänzungen. Eigene Testprozesse,
Browser und Vorschau geschlossen; Port4321 frei. Änderungen nur lokal, kein Commit,
Push oder Deployment. Fortschritt belegt, vollständige Herstellerprüfung und Nr.1
weiterhin unbewiesen.


## Ergänzung vom 2. November 2026 – OrionStar: aktuelle Modelle, Lasten und Reinigungsmodi

Fünf ausdrücklich benannte Modelle ergänzt: GreetingBot AD sowie CleaniBot S55 Pro,
M1, K1 und C5. Acht bestehende englische/chinesische Einträge korrigiert. LuckiBot Pro
und Lucki (Zhaocaibao) von Smart Home nach gewerblicher Zustellung verschoben; IDs,
Modell-URLs und lokale Bilder erhalten. 1.759 andere Katalogzeilen und alle 260 früheren
Feldprüfungen unverändert. 13 neue Prüfungen umfassen 225 Felder: 99 dokumentiert,
126 nicht dokumentiert; keine neuen Konflikt-/Roadmap-Status. Ein Firmenfokus ergänzt.

Alle elf Produktlinks der aktuellen englischen Navigation mit gespeicherten Seiten
abgeglichen: vier Reinigung, drei Zustellung, drei Empfang und CarryBot. CarryBot
nennt D100/D150 als zwei Hardwaremodelle. Zusammen mit dem separat erhaltenen
chinesischen Eintrag ergeben sich 13 geprüfte Katalogeinträge. Die allgemeine
Produktübersicht lässt einzelne Navigationseinträge aus; vollständige historische
Herstellerabdeckung wird nicht behauptet. Software und Zubehör sind keine zusätzlichen
Robotermodelle. Kein EXE-Download oder Programmstart und kein Formularversand.

LuckiBot: 40 kg insgesamt/10 kg je Tablett; Pro: 60 kg insgesamt/15 kg je Tablett,
beides ausdrücklich belegt. Autodoor nennt 20 kg je Tablett ohne Gesamtnutzlast und
69-Liter-Stauraum neben 410×480×315 mm maximalem Einzelstauraum; deren Verhältnis
ist nicht erläutert. Keine Übernahme der offenen Pro-Last oder -Masse. Die drei
englischen Liefermodelle nennen 4, 5 Stunden Laden im ausgeschalteten Zustand.
Chinesisches Zhaocaibao nennt dagegen 4, 5 Stunden am Dock, 5° Steigung und obere
Tabletts 500×420 mm; englisches LuckiBot nennt 500×430 mm. Region-/Revisionsgleichheit
bleibt unbestätigt, deshalb beide bisherigen Identitäten erhalten. Kein chinesischer
Steigungswert auf das englische Modell übertragen. Frühere 12–15 Stunden beim
chinesischen Eintrag durch belegte zehn Stunden im typischen Fahrbetrieb ersetzt.

CarryBot D100: 100 kg und bis neun Stunden; D150: 150 kg und zwölf Stunden. Die
Vergleichsfußnote gilt für 100 kg Last auf Marmorboden. Traglast schließt montierte
Tabletts/Regal ein; 30 kg je Tablett hebt die Gesamtgrenze nicht auf. D150 unterscheidet
48 kg Basis, 58 kg Tabletts und 60 kg mit Regal(48+12). Keine einzelne Familienmasse
gewählt. Gemeinsame Robotermaße 600×525×1377 mm bleiben getrennt vom
405×825×937-mm-Regal; keine abgeleitete Gesamtgröße der Installation. Die detaillierte
Tabelle ist ausdrücklich D150: Maße, Masse, Geschwindigkeit und Ladezeit werden
nicht nach D100 kopiert. CarryBot 1/2/3 sind Tragekonfigurationen unter beiden benannten
Modellen, keine erfundenen zusätzlichen SKUs. Allgemeine 1-cm-Positionierwerbung
wird nicht zur Andockgenauigkeit.

GreetingBot Mini: 21 kg, 410×410×1000 mm, zwölf Stunden typische Fahrt und höchstens
4, 5 Stunden Laden ausgeschaltet. Nova: 56 kg, 558×525×1350 mm, zwölf bis 14 Stunden
und 4, 5 Stunden am Dock. AD: 21, 5-Zoll-Werbedisplay plus 14-Zoll-Touchscreen, acht bis
zehn Stunden; 8 A am Dock ist Stromstärke, keine Ladedauer. Qualitative Zentimeter-
positionierung ist keine exakte±1-cm-Grenze; Gangbreiten sind keine Körpermaße.
Sprachabdeckung, Drittanbieter-LLMs und Softwarezugriff bleiben einsatzabhängige
Herstellerangaben. Unbelegte Startjahre von Pro, Nova und Zhaocaibao entfernt.

S55 Pro: 3, 5 Stunden Power Scrub, 4, 5 Stunden Scrub/Sweep-Vacuum/zusätzlicher
Mop-Modus, 19, 5 Stunden ECO Vacuum und 28 Stunden Dust Mop.28 Stunden gelten nicht
für alle Reinigung. Flächenleistungen 1197/1368 m²/h bleiben modusspezifisch;
Kartierungsfläche ist keine Stundenleistung. Keine Werkzeugbreite aus Körper- oder
Durchfahrtsbreite abgeleitet. M1: 500-mm-Bürste/680-mm-Abzieher, 3, 5 Stunden Schrubben/
acht Stunden Moppen, 35/33 Liter Wasser. K1: 440-mm-Bürste, 420-mm-Körperbreite,
880-mm-Durchfahrtsbreite getrennt; Quelllabels Vacuuming 8h/Mopping 4h unvertauscht.
10 Liter sind Staubbehälter, keine Wassertanks; Wasserstation nicht unterstützt.
C5: 45 Liter Frisch-/45 Liter Abwasser statt 90 Liter Frischwasser. Stationstank 8 Liter,
25 kg Bürstendruck, 10.000 Stunden Lüfterlebensdauer und Stationsleistung 1800 W sind
keine zusätzliche Bordkapazität, Nutzlast, Batterielaufzeit oder Gesamtroboterleistung.
C5-Steigung 5° beladen/8° leer bleibt getrennt. Desinfektion, Zero-Edge, Produktivität,
ROI, Lärm und Sicherheitswerbung sind keine unabhängigen Prüfresultate.

14 gespeicherte HTML-Körper erneut gehasht, alle 14 als Quellen verwendet.56
beschriftete technische Paare, 18 D150-Spezifikationszellen in drei Konfigurationen
sowie zwölf Last-/Laufzeitzellen in sechs D100/D150-Spalten anhand der HTML-Struktur
geprüft. Keine Bildprüfung behauptet. Quelleninventare, 97 Familienentscheidungen
und 132 Beschreibungsnamensentscheidungen erhalten.

Gesamt: 1.772 Modelle/Konfigurationen, 640 Herstellerschreibweisen, 1.034 Profile;
647 datierte Merkmalsdatensätze(517 Ergänzungen/130 bestehende Modelle), 2.389
Aussagen/930 Quellenreferenzen.273 Modelle mit 3608 ausgewählten Feldern: 1982
dokumentiert, 1554 unbekannt, 65 widersprüchlich, sieben Roadmap.38 Firmenfokus-
Prüfungen. Alle 430 Ziele ursprünglicher Modellnennungen behalten datierte Merkmale.
Drei ursprüngliche Identitäten, neun Listings, alle 862 BuyAndRent-Detailinhalte,
weitere Herstellerprüfung und gemessene Marktführerschaft bleiben offen.

447 Unit-Tests/34 Dateien bestanden. Ein neuer Test griff zunächst auf eine
Werteliste statt auf den vorhandenen Einzelwert des Gewerbereinigungsfilters zu;
Test anhand der stabilen Unterkategorie korrigiert.84 verschiedene Browserfälle
bestanden: 34 OrionStar, 32 Richtech-Regression und 18 Vergleich, darunter 28 Axe-Fälle
auf Desktop/Mobil in Hell/Dunkel. Erster Lauf 80 bestanden/vier fehlgeschlagen:
zwei neue Prüfungen nahmen die erste 24-Karten-Seite und die Auswahlreihenfolge
als Vergleichsspaltenfolge an. Tests nutzen nun Herstellerfilter beziehungsweise
Modellüberschriften; alle vier betroffenen Desktop-/Mobilfälle erneut bestanden.
Dafür keine Produktänderung nötig. Lint/Format bestanden. Build 2820 Seiten/rund 429 MB.
Datenprüfung null Fehler/652 Hinweise;acht zusätzliche Hinweise betreffen nur fünf
neue Modelle ohne Startjahr und drei offengelegte bislang unbelegte Startjahre.

HTML-/Exportprüfung: 13 Modellseiten, 225 Feldentscheidungen, 86 Quellenmarkierungen,
113 ausgelassene Leerfelder, 73 strukturierte technische Eigenschaften und 57
Merkmalsätze; ein Firmenfokus mit 13 Karten. Sechs ursprüngliche Modell-Exportzeilen/
sieben Ziele/119 Feldvorkommen exakt geprüft. Gesamt-Exporte 591/406/862/132 Zeilen.
Vergleichs-JSON990.575 Byte, Katalogskript 1.564.093 Byte; interne Recherchemetadaten
nicht ausgeliefert. Erneuter Import null Ergänzungen. Eigene Testprozesse, Browser und
Vorschau geschlossen, Port 4321 frei. Änderungen nur lokal;kein Commit, Push oder
Deployment. Verifizierter Fortschritt, vollständige Prüfung und Nr.1 weiter unbewiesen.


## Ergänzung vom 2. November 2026 – OTTO: Traglast, Ladefenster und Fahrraum

Fünf bestehende Modelle anhand der aktuell verlinkten Herstellerdatenblätter
überarbeitet: OTTO 100, 600, 1200, 1500 und Lifter. Keine zusätzlichen Modelle
oder Kategorieverschiebungen. 110 ausgewählte Feldentscheidungen: 64 dokumentiert,
45 unbekannt und ein Quellenkonflikt. Alle 273 früheren Feldprüfungen sowie 1.767
andere Katalogzeilen inhaltlich erhalten; lediglich zwei leere optionale Spalten
kommen bei anderen gewerblichen Zeilen hinzu. 642 frühere Merkmalsdatensätze bleiben
unverändert, fünf wurden überarbeitet. Ein Firmenfokus ergänzt.

Gangbreite und Wenderadius sind nun eigene Felder auf Modellseiten, in strukturierten
Daten und im Vergleich, mit englischen/deutschen Bezeichnungen und bestehendem
Sprachfallback. Gangbreiten gelten ausdrücklich ohne Nutzlast und je nach Ein- oder
Zweirichtungsverkehr. Drehen auf der Stelle bedeutet keine Null-Freiraum-Garantie.
OTTO 1500 nennt für den Zweirichtungsverkehr 3570 mm und 146 Zoll im selben Blatt;
146 Zoll entsprechen 3708,4 mm. Dieser Widerspruch bleibt beim Wert sichtbar.

OTTO 100 trägt insgesamt 150 kg einschließlich montierter Ausrüstung und Wagen,
OTTO 1500 insgesamt 1900 kg einschließlich Aufbau. Die Modellnummer ist keine
Traglastangabe. Der integrierte Hub von 100 beträgt 62 mm und ist keine maximale
Stapler-Hubhöhe. Laufzeiten von sechs bzw. zehn Stunden für 100/1500 gelten von
90 auf 10 Prozent Ladezustand. Ladezeiten 18/30/30/60 Minuten für 100/600/1200/1500
gelten von 10 auf 90 Prozent. 10.000/6000/3000 Ladezyklen sind Lebensdauerangaben,
keine Betriebsstunden. Für 600/1200 bleibt die Laufzeit unbekannt. Beim 600 stehen
42 A maximale Batterie-Laderate neben einem 100-A-Zubehörladegerät; diese Labels
werden nicht als identische Geräteauswahl behandelt.

Lifter: 1,0 m maximale Hubhöhe autonom und 2,7 m manuell; Wenderadius 1985 mm autonom
und 1420 mm manuell. Lastschwerpunkt 623 mm sowie 183 cm Last-Höhenlimit bei 1000 kg
gegenüber 134 cm bei 1200 kg bleiben getrennt von der Hubhöhe. Bleiakku lädt ungefähr
sechs Stunden, Lithium ungefähr eine Stunde mit 200-A-Supercharger, jeweils 10–90 %.
Die Web-Überschrift von 60 Minuten gilt nicht für jeden Akku. Palettenandocken ±50 mm
steht getrennt vom Absetzen mit Zielmarke (x ±13 mm, y ±10 mm, Winkel ±1°).
Unklare Winkel-/Wiederholgenauigkeitszeichen der anderen vier PDFs werden nicht
zu erfundenen Grad- oder Sigma-Grenzen normalisiert. IP20 gilt belegt nur für
100/1500; Bodenhindernis, Bodenfreiheit und überfahrbarer Spalt bleiben getrennt.

Fleet Manager, Open API/OPC-UA, VDA5050 ohne hier geprüfte Version, Ladegeräte,
HADS, Wagen, Aufbauten und Batterievarianten sind qualifizierte Software-/Zubehör-
oder Konfigurationsangaben. Sie erzeugen keine erfundenen Hardwaremodelle.
Sicherheits-, Normen-, ROI- und Marktführungswerbung bleibt Herstellerangabe.
Keine Formulare übermittelt, keine unabhängige Sicherheits-/Verfügbarkeitsprüfung.

14 gespeicherte HTTP-Körper erneut gehasht und alle als Quellen verwendet:
neun HTML-Seiten sowie fünf PDFs mit zehn Seiten. PDF-/HTML-Text exakt reproduziert;
66 technische Label-Wert-Paare, acht bedingte Gangbreiten und Lifter-Modus-/Akku-/
Lastgrenzen geprüft. Keine visuelle PDF- oder Bildprüfung behauptet.

Aktueller Gesamtbestand: 1.772 Modelle/Konfigurationen, 640 Herstellerschreibweisen,
1.034 Profile, 647 datierte Merkmalsdatensätze (517 Ergänzungen/130 bestehende Modelle),
2405 Aussagen und 935 Quellenreferenzen. 278 Modelle mit 3718 ausgewählten Feldern:
2046 dokumentiert, 1599 unbekannt, 66 widersprüchlich und sieben Roadmap. 39 Firmenfokus-
Prüfungen. Alle 430 Ziele ursprünglicher Modellnennungen behalten datierte Merkmale.
Drei ursprüngliche Identitäten, neun Listings, alle 862 BuyAndRent-Detailinhalte,
weitere Herstellerprüfung und gemessene Marktführerschaft bleiben offen.

459 Unit-Tests in 35 Dateien bestanden. Zwei neue Textprüfungen erwarteten zunächst
fehlende Leerzeichen; Erwartungen anhand der vorhandenen Prosa korrigiert.
80 Browserfälle bestanden: 28 OTTO, 34 OrionStar-Regressionen und 18 Vergleichsfälle,
darunter 28 Axe-Prüfungen auf Desktop/Mobil in Hell/Dunkel. Lint und Format bestanden.
Build: 2820 Seiten, ungefähr 430 MB; Datenprüfung null Fehler und unverändert
652 Hinweise. Fünf Modellseiten/110 Felder/60 Quellenmarkierungen/40 ausgelassene
Leerfelder/55 strukturierte Eigenschaften/31 Merkmalsätze und ein Firmenfokus mit
fünf Karten geprüft. Fünf ursprüngliche Modell-Exportzeilen mit 110 Feldvorkommen
exakt abgeglichen; Gesamt-Exporte 591/406/862/132 Zeilen. Vergleichs-JSON 1.013.708 Byte,
Katalogskript 1.579.797 Byte. Interne Recherchemetadaten werden nicht ausgeliefert.
Erneuter Import: null Ergänzungen. Eigene Testprozesse, Browser und Vorschau geschlossen,
Port 4321 frei. Änderungen nur lokal, kein Commit, Push oder Deployment.
Dies ist verifizierter Fortschritt; vollständige Herstellerprüfung und Nr. 1 bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Robotize: aktuelle GoPal-Modelle und historischer GoPal 400

Sechs bestehende Modelle anhand der aktuell verlinkten Herstellerseiten und Broschüre
überarbeitet: E22, E24, E24W, U22W, U24W und P35. GoPal 400 als separat benanntes
historisches Modell ergänzt: Die Herstellerchronik nennt den Start im Dezember 2017.
Kein technischer Wert wird aus der Modellnummer 400 oder aus aktuellen Nachfolgern
abgeleitet. Historische Traglast, Masse, Maße, Laufzeit und Generationsgleichheit bleiben
unbekannt. Alle 278 früheren Feldprüfungen und 1.766 andere Katalogzeilen unverändert.
641 frühere Merkmalsdatensätze erhalten, sechs überarbeitet, einer ergänzt.
Ein Firmenfokus ergänzt. Sieben neue Prüfungen umfassen 154 Felder: 46 dokumentiert,
79 unbekannt und 29 widersprüchlich.

Wiederholte Seitenübersichten nennen dieselben 187 kg, 1400×860×340 mm und 500 kg
bei verschiedenen Modellen. Die ausdrücklich benannten Spezifikationsabschnitte und
die sechs Broschürenspalten nennen stattdessen E24W 215 kg, U22W/U24W 242 kg und
P35 120 kg sowie abweichende Maße, Lasten und Geschwindigkeiten. Ausgewählte Werte
folgen benannten Abschnitten und Broschüre; die Unterschiede bleiben beim Wert sichtbar.
U24W nennt 1200 kg einschließlich Palette. P35 nennt 300 kg einschließlich Aufsatz;
Homepage-Karte 250 kg und Seitenübersicht 500 kg bleiben als Konflikt erhalten.
Höhere Lasten bestimmter Partnerkonfigurationen sind keine allgemeine Traglastfreigabe.

E22/E24 unterstützen Euro-/Halb-Euro-Paletten, E24W zusätzlich Industrie-Euro-Paletten;
U22W/U24W UK-/US-Paletten. Palettenzustand und Lastgeometrie bleiben Bedingungen.
2400 mm Lasthöhe ist weder Roboterhöhe noch maximale Bord-Hubhöhe. P35-Karosserie
960×660×295 mm und 120 kg bleiben getrennt von der 20-kg-Ladestation mit
505×790×258 mm und 1000 W. P35 hat 24-V-LFP und induktives Hauptladen sowie USB-C
für Notladen; Palettenmodelle haben 48-V-LFP und physische Dock-/Steckerschnittstellen.

Palettenseiten nennen 45 Minuten für Vollladung; die Broschüre nennt 45 Minuten von
30 auf 95 Prozent. P35-Seite und Broschüre nennen 45 beziehungsweise 55 Minuten für
dasselbe 30–95-Prozent-Fenster. Keine stille Harmonisierung. Laufzeit 6–14 Stunden
beziehungsweise P35 8–14 Stunden bleibt lastabhängig; 20 km Distanz, 5000 Ladezyklen
und 24/7/365-Flottenbetrieb sind keine zusätzlichen garantierten Betriebsstunden.

Gangbreiten trennen Minimum, Zweirichtungsverkehr, Ideal-/Hochgeschwindigkeitsbereich
und Türdurchfahrt. P35-Seite nennt 960 mm Gang und 760 mm Durchfahrt, Broschüre
1000 mm und 900 mm für das nackte AMR ohne Aufbau. P35-Radius 660 mm steht neben
1300 mm Broschüren-Drehdurchmesser; imperial erscheinen dort außerdem 3,3 bzw.
4,27 Fuß. Andere Seiten verwenden Durchmesser-Labels für Werte vom Roboterzentrum,
während die Broschüre 1900/2000 mm Drehdurchmesser nennt. Keine stillschweigende
Halbierung oder Freiraumgarantie. ±2 Prozent Steigung sind keine ±2 Grad. Bodenstufen,
Reibung, Temperatur und Feuchte bleiben getrennt von einer unbelegten IP-Klasse.

GoControl, Paletten-/Hub-/Förderstationen, IO Box, Tasten, Ladegeräte und Aufsätze von
Nord Modules/ROEQ bleiben Software, Zubehör oder Partnerintegration. Stationäre
Transaktionshöhen und 1500-kg-Förderstationen werden nicht zu Bord-Hub-/Traglastwerten.
Sicherheits-, Freigabe-, ROI- und Marktführungswerbung bleibt Herstellerpositionierung.
Keine Formulare übermittelt und keine unabhängige Leistungs-/Verfügbarkeitsprüfung.

Zwölf HTTP-Körper erneut gehasht: elf HTML-Seiten und eine 15-seitige Broschüre.
HTML-/PDF-Text exakt reproduziert, 30 HTML-Spezifikationsbeziehungen, 84 Werte in
sechs positionierten PDF-Modellspalten sowie 33 Werte in drei Fahrraum-Spalten geprüft.
Bildinput ist nicht verfügbar; keine visuelle PDF-/Bildprüfung behauptet.

Die erste Browserprüfung bestand 80 von 82 Fällen. Zwei Desktop-/Mobilprüfungen
zum historischen Modell deckten eine echte Darstellungslücke auf: zusätzliche
Spezifikationszeilen wie Startjahre hatten keine Feldkennung/Quellenmarkierung.
SpecsTable ergänzt diese Metadaten jetzt auch für zusätzliche geprüfte Felder.
Nach neuem Build wurden alle 82 Fälle erneut bestanden: 36 Robotize, 28 OTTO-
Regressionen und 18 Vergleichsfälle, einschließlich 28 Axe-Prüfungen in Hell/Dunkel
auf Desktop/Mobil. Alle 470 Unit-Tests in 36 Dateien, Lint und Format bestanden.
Übergreifender HTML-Abgleich: 285 Modellseiten, 3872 ausgewählte Feldwerte und
2254 sichtbare technische Werte mit Quellenmetadaten; alle 20 geprüften
Startjahre haben jetzt Quellenmarkierungen. Frühere Herstellerquellen wurden dabei
nicht erneut abgerufen oder unabhängig zertifiziert.

Neue Modell-/Exportprüfung: sieben Seiten, 154 Felder, 68 Quellenmarkierungen,
72 ausgelassene Leerfelder, 60 strukturierte Eigenschaften und 40 Merkmalsätze.
Ein Firmenfokus mit sieben Karten; sechs ursprüngliche Modell-Exportzeilen mit
132 Feldvorkommen exakt abgeglichen. Gesamt-Exporte unverändert 591/406/862/132 Zeilen.
Vergleichs-JSON 1054235 Byte, Katalogskript 1583066 Byte; keine internen
Recherchemetadaten ausgeliefert. Build 2821 Seiten, ungefähr 430 MB. Datenprüfung
null Fehler und unverändert 652 Hinweise. Erneuter Import: null Ergänzungen.

Gesamt: 1.773 Modelle/Konfigurationen, 640 Herstellerschreibweisen, 1.034 Profile,
648 datierte Merkmalsdatensätze (518 Ergänzungen/130 bestehende Modelle), 2427 Aussagen
und 949 Quellenreferenzen. 285 Modelle mit 3872 ausgewählten Feldern: 2092 dokumentiert,
1678 unbekannt, 95 widersprüchlich und sieben Roadmap. 40 Firmenfokus-Prüfungen.
Alle 430 Ziele ursprünglicher Modellnennungen behalten datierte Merkmale.
Drei ursprüngliche Identitäten, neun Listings, alle 862 BuyAndRent-Detailinhalte,
weitere Herstellerprüfung und gemessene Marktführerschaft bleiben offen.
Eigene Browser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.
Änderungen nur lokal, kein Commit, Push oder Deployment. Verifizierter Fortschritt;
vollständige Herstellerprüfung und Nr. 1 bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Deep Trekker und Pipe Trekker

Sieben bestehende Deep-Trekker-ROVs/Crawler korrigiert; VAC MAX, Pipe Trekker A-150/A-200
und die historisch benannten DTG2, DTG2 Worker, DTX2, DT320 und DT340 ergänzt.
Pipe Trekker bleibt als vom Hersteller ausdrücklich eingeführte Marke separat.
13 benannte S/X- und ROV-Pakete innerhalb der jeweiligen Modellbelege erhalten;
Ausstattungspakete werden nicht zu zusätzlichen Robotergrundmodellen.
15 Feldprüfungen mit 300 Entscheidungen: 68 dokumentiert, 220 unbekannt, zwölf Konflikte.
Zwei Firmenfokusse ergänzt; 285 frühere Prüfungen und 1.766 andere Katalogzeilen erhalten.

Konflikte bleiben sichtbar: SPECTRA 3,5/4 Knoten, PHOTON 200/215 Grad Kameradrehung,
MAG/VAC 406 mm/13 Zoll Breite, VAC 4K/1080p und Pipe Trekker fünf/acht Stunden Akku.
A-200-S-Shop wiederholt A-150-Masse, -Maße und -Geschwindigkeit; S/X-Elektriktabellen
widersprechen A-200-Seite bei Kapazität und Antriebsabdichtung. A-150, A-200 und DT320
haben weitere unvereinbare Maßpaare. Keine stille Reparatur oder Spezifikationsvererbung.
VAC MAX 36-Zoll-Kopfbreite ist keine Karosseriebreite. Generische angehängte Tabellen
belegen nicht die vollständige breitere Baugruppe; kein errechnetes Tempo von 24 m/min.
IP68-Kabeltrommel, Kabelbruchlast und Zug-/Schubkraft sind keine Roboter-IP-/Nutzlastwerte.
Controllerlaufzeit, Hybridstrom, Kabellänge und Tauchtiefe bleiben getrennt.
Historische Artikeldaten werden nicht zu Startjahren. Ein alter Worker-URL liefert jetzt
einen aktuellen SAR-Ratgeber; tatsächlicher Seiteninhalt hat Vorrang vor altem Slug.
Vier Manual-Landings führen nur zum Support-Shell; keine Handbücher daraus zertifiziert.

37 gespeicherte HTML-Körper gehasht und Text reproduziert; 92 konkrete Belege geprüft:
59 sichtbare Tabellenpaare, 20 eingebettete Shop-Werte, vier Paketlisten, PHOTON-Spalten-
beziehung, Product/FAQ-Daten und sechs Textstellen. 26 tatsächlich verwendete Snapshots.
Keine Bildsichtprüfung, Formularübermittlung oder weiteren Zugriffe auf blockierte Hosts.
15 gerenderte Modellseiten: 300 Felder, 64 Quellenmarkierungen, 206 ausgelassene Leerfelder,
49 strukturierte Werte und 68 Merkmalsätze. Zwei Firmenfokusse geprüft; sieben ursprüngliche
Modell-Exportziele mit 140 Feldvorkommen abgeglichen. Gesamt-Exporte 591/406/862/132 Zeilen.
Globaler Metadatenabgleich: 300 Seiten, 4172 Feldwerte und 2318 sichtbare technische Werte
mit Quellenmarkierung; 20 geprüfte Startjahre weiterhin belegt.

Alle 482 Unit-Tests in 37 Dateien bestanden; Lint und Format bestanden. 102 verschiedene
Browserfälle bestanden: 48 Deep/Pipe Trekker, 36 Robotize- und 18 Vergleichsregressionen,
einschließlich 36 Axe-Prüfungen auf Desktop/Mobil in Hell/Dunkel. Erster Lauf 100 bestanden,
zwei Fehler in einem neuen Testselektor (Karte und Favoritenknopf tragen dieselbe ID).
Selektor auf Roboterkarten begrenzt, beide Fälle erneut bestanden; keine Produktänderung.
Build 2830 Seiten, ungefähr 431 MB; null Datenfehler, 660 Hinweise (+8 fehlende Startjahre).
Erneuter Import null Ergänzungen. Vergleichs-JSON 1119217 Byte und
Katalogskript 1593285 Byte; interne Recherchemetadaten bleiben serverseitig.
Eigene Browser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Stand: 1.781 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1.035 Profile,
656 datierte Merkmalsdatensätze (526 Ergänzungen/130 bestehende Modelle), 2474 Aussagen,
970 Quellenreferenzen und 42 Firmenfokus-Prüfungen. 300 Modelle mit 4172 ausgewählten
Feldern: 2160 dokumentiert, 1898 unbekannt, 107 widersprüchlich und sieben Roadmap.
Drei ursprüngliche Modellidentitäten, neun Listings und alle 862 BuyAndRent-Detailinhalte
bleiben offen. Vollständige historische Prüfung und Marktführerschaft sind unbewiesen.
Änderungen nur lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Addverb Lagerrobotik und Physical AI

25 ausdrücklich benannte Modelle/Systeme ergänzt und neun vorhandene Einträge
korrigiert. Der Addverb-Bestand umfasst jetzt 34 Datensätze in vier Kategorien.
Dazu gehören Dynamo 100/200/500/1000/1500/2500; FlowT und 1000/1530/1520;
Dash Line/Tug; Veloce; Zippy 6/10/30/40/X; Cruiser/360; Multi-Pro; Quadron;
Medius; Skyron; SortIE; Travect; Trakr und 5/20; Elixis/Elixis-W; Syncro 5/10; JEN 6.
34 neue Modellprüfungen umfassen 697 Felder: 298 dokumentiert, 379 unbekannt,
18 widersprüchlich und zwei Zielwerte/Roadmap. 300 vorherige Prüfungen und
1.772 andere Katalogzeilen bleiben unverändert. Ein Firmenfokus ergänzt.

Die FlowT-1530-Auswahl verlinkt ein ausdrücklich FlowT 1520 genanntes Dokument.
Beide Namen bleiben separat, ohne Übernahme von 1520-Masse, -Maßen oder -Hubhöhe
in den 1530. 1000/2000-kg-FlowT-Angaben bleiben ein Quellenkonflikt. Dynamo 2500
nennt im PDF omnidirektionalen, im Web differentiellen Antrieb. Leere/beladene
Geschwindigkeit, 0–80-/20–80-Prozent-Ladefenster, Chassis-/Zuglast, Palettenmaße,
Systemdurchsatz und Einzelroboterleistung bleiben getrennt. Veloce und Zippy nennen
Wendedurchmesser, keine belegten Radien. Rackhöhen und AC-/Stromschienenbetrieb
werden nicht zu Karosseriemaßen oder Akkulaufzeiten. Skyron-Temperatur ist kein Gelände.

Physical-AI-Varianten wurden im öffentlichen Selektor getrennt aufgerufen:
Trakr 5/20, Syncro 5/10 und Elixis/Elixis-W. Trakr 5 hat widersprüchliche
Desktop-/Responsive-Akkuangaben und 120/170-mm-Stufenwerte. IP67 und automatisches
Laden sind optional. Elixis ist zweibeinig (75 kg), Elixis-W fährt auf Rädern (210 kg).
Laufzeiten sind ausdrücklich Zielwerte; fünf Kilogramm pro Arm werden nicht
unqualifiziert zur Gesamtnutzlast. Syncro-Controller sind keine Armabmessungen.
JEN 6 enthält einen kopierten Quadruped-Text; daraus entstehen keine 20 kg Armnutzlast.
Generische Trakr-/FlowT-Familien erhalten keine übernommenen Variantendaten.

30 gespeicherte HTML-Seiten, 24 PDFs mit 91 Seiten, drei JavaScript-Dateien und
15 öffentliche, rein lesende Selektorantworten: alle 72 Körper gehasht und die
HTML-/PDF-Textextraktion reproduziert. Sechs gerenderte Variantenstände gehasht.
178 konkrete Quellenbeziehungen geprüft: 90 positionierte PDF-Zeilen, 15 benannte
Selektoren, sechs Standnachweise, 30 sichtbare Label-/Wertpaare, 30 DOM-Eigenschafts-
zeilen, drei widersprechende Responsive-Zeilen und vier JEN-6-Spezifikationspaare.
Alle 30 HTML-Seiten samt Selektornamen haben explizite Klassifikationsentscheidungen.
Cruiser-Palettenklassen, Multi-Pro-Größen und Zippy-Bandanbauten bleiben Konfigurationen.
Movect/Mobinity/Concinity/Optimus sind Software; Rapido, Corzie, konventionelle
Förderer und eigenständige Lifte sind angrenzende Angebote. Deren Selektornamen
wurden inventarisiert; keine Vollprüfung sämtlicher angrenzender Variantendetails.
Keine Kontakt-/Angebots-/Abonnement-/Download-Einwilligungsformulare übermittelt.
Keine Bildsichtprüfung oder weiteren Zugriffe auf bereits blockierte Hosts.

34 gerenderte Modellseiten abgeglichen: 697 Felder, 284 Quellenmarkierungen,
345 ausgelassene Leerfelder, 247 strukturierte Werte und 146 Merkmalsätze.
Firmenfokus und Firmenexport stimmen überein; ein ursprünglicher Modell-Exportdatensatz
enthält sechs Dynamo-Ziele mit 132 Feldvorkommen. Gesamtexporte 591/406/862/132 Zeilen.
Globaler Abgleich: 334 Modellseiten, 4869 Feldwerte und 2602 sichtbare technische
Werte mit Quellenmarkierung; 20 geprüfte Startjahre weiter belegt.
Vergleichs-JSON 1248216 Byte und Katalogskript 1622120 Byte.

494 Unit-Tests in 38 Dateien bestanden; Lint und Format bestanden. Abschließender
Browserlauf vollständig bestanden: 100 Fälle, davon 34 Addverb, 48 Deep/Pipe-Trekker-
und 18 Vergleichsregressionen, einschließlich 32 Axe-Prüfungen auf Desktop/Mobil
in Hell/Dunkel. Erster Lauf: 96 bestanden, vier mobile Überläufe im neuen Firmenfokus.
Ursache war eine lange Aufzählung ohne Leerzeichen. Prosa lesbar aufgelöst, neu gebaut
und alle 100 Fälle erneut bestanden. Keine Quellcodeänderung hierfür erforderlich.
Build 2855 Seiten, etwa 435 MB; null Datenfehler, 687 Hinweise (+27 fehlende Startjahre:
25 neue Modelle und zwei gelöschte unbelegte Altjahre). Erneuter Import null Ergänzungen.
Eigene Browser, Vorschauen und Hilfsprozesse geschlossen; Port 4321 frei.

Aktueller Gesamtstand: 1.806 Modelle/Konfigurationen, 641 Herstellerschreibweisen,
1.035 Profile, 683 datierte Merkmalsdatensätze (551 neue/132 bestehende Modelle),
2599 Aussagen, 1024 Quellenreferenzen und 43 Firmenfokus-Prüfungen.
334 ausgewählte Modellprüfungen mit 4869 Feldern: 2458 dokumentiert, 2277 unbekannt,
125 widersprüchlich, neun Roadmap. Drei ursprüngliche Modellidentitäten, neun Listings
und sämtliche 862 BuyAndRent-Detailinhalte bleiben offen. Vollständige historische
Herstellerprüfung, exklusive USPs und Marktführerschaft sind nicht nachgewiesen.
Änderungen lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – DEEP Robotics Plattformen und Editionen

Lite3 Venture, Lite3 EDU und DR02 Standard ergänzt; neun bestehende Einträge
korrigiert: LYNX M20/M20 Pro, X30/X30 Pro, Lite3, Lynx S10/M20S und DR02/DR02 Pro.
Zwölf neue ausgewählte Prüfungen umfassen 183 Felder: 54 dokumentiert, 129 unbekannt.
334 frühere Prüfungen und 1.797 andere Katalogzeilen unverändert. Ein Firmenfokus
ergänzt. Jueying, Jueying Mini, X20 und Yunju bleiben außerhalb dieser Prüfung;
die frühere DR01-Prüfung bleibt erhalten. M20_Piper bleibt ein Integrationshinweis.

M20/M20 Pro: 33 kg einschließlich Akku, 15 kg effektive Last. Zwei Meter pro Sekunde
sind Arbeitsgeschwindigkeit; fünf sind ein nicht verfügbares Laborextrem, die Fußnote
nennt drei als Produktgrenze. Diese unterschiedlichen Bedingungen sind kein
gleichartiger Feldkonflikt. Leere/beladene Laufzeit und Reichweite bleiben getrennt.
Optionale Ladestation und zukünftige OTA-Funktionen erhalten keine Verfügbarkeitszusage.
Grafische Häkchen im PDF wurden nicht als Merkmale transkribiert.
X30: 56 kg und 1000 × 470 × 595 mm; Pro: 59 kg und 1000 × 470 × 715 mm.
Gemeinsame PDF-Zeilen bleiben als solche qualifiziert; Pro-Navigation wird nicht
automatisch zur Basisausstattung. Keine frei übertragene Fünf-Meter-Geschwindigkeit.

Lite3: Elf Kilogramm betreffen die benannte Körperbaugruppe, nicht das ganze Gerät.
Beinmassen werden wegen überlappender Bauteile nicht addiert; Körpermaße und
Koordinatenversätze ergeben keine belegte Standhöhe. Venture-SDK und EDU-Lightning-LM
haben eigene Bedingungen; Jetson AGX und Livox Mid360 sind keine universelle
Lieferumfangszusage. S10/M20S haben benannte SDK-Unterstützung ohne geerbte M20-Ratings.
DR02 Pro hat 31 Gelenke mit derzeit gesperrten Halsachsen 29/30; Standard hat 21
ohne Hals. DR02 bleibt eine eigene Familienreferenz. Eine externe Versorgung mit
72 V, 5 A und 360 W ist kein Akkukapazitäts- oder Ladezeitbeleg. Aus Bildern wurden
keine mechanischen Maße abgeschrieben. Unbelegte Preise, Jahres- und Leistungswerte
wurden in den ausgewählten Feldern entfernt.

54 gespeicherte HTTP-Körper gehasht und Extraktion reproduziert: 44 erfolgreich
(26 HTML, zwei PDFs mit vier Seiten, 15 Klartextdateien und ein JavaScript).
Zehn Produktrouten lieferten HTTP 520 und dienen nicht als Belege; danach keine
weiteren Zugriffe auf diesen Produkthost. 64 Quellenbeziehungen geprüft:
41 positionierte PDF-Spalten-/Zeilenbezüge, sieben HTML-Tabellenzeilen und 16
benannte SDK-/Herstellertextstellen. 20 verwendete Primär-Snapshot-URLs.
Alle 54 Antworten klassifiziert, zwölf Modellentscheidungen gespeichert.
Keine Bildsichtprüfung, Formularübermittlung oder Ausführung von Herstellercode.

Zwölf gerenderte Modellseiten: 183 Feldwerte, 42 Quellenmarkierungen, 117 ausgelassene
Leerfelder, 30 strukturierte Werte und 55 Merkmalsätze. Firmenfokus und Export
abgeglichen; sechs ursprüngliche Modell-Exportziele mit 91 Feldvorkommen geprüft.
Gesamtexporte weiterhin 591/406/862/132 Zeilen. Globaler Metadatenabgleich:
346 Seiten, 5052 Felder, 2644 sichtbare technische Werte mit Quellenstatus,
2097 ausgelassene Leer-/NA-Felder und 20 belegte Startjahre. Dieser Abgleich prüft
die Ausgabe vorhandener Reviews, nicht erneut die früheren Herstellerquellen.
Vergleichs-JSON 1295135 Byte; Katalogskript 1625505 Byte.

504 Unit-Tests in 39 Dateien bestanden; Lint und Format bestanden. 84 Browserfälle
bestanden: 32 DEEP Robotics, 34 Addverb- und 18 Vergleichsregressionen, darunter
28 Axe-Prüfungen auf Desktop/Mobil in Hell/Dunkel. Build 2858 Seiten, etwa 436 MB.
Null Datenfehler, 696 Hinweise (+9 fehlende Startjahre: drei neue Modelle und sechs
gelöschte unbelegte Altjahre). Erneuter Import null Ergänzungen. Keine UI-Codeänderung.
Eigene Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Gesamtstand: 1.809 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1.035 Profile,
688 datierte Merkmalsdatensätze (554 neue/134 bestehende Modelle), 2634 Aussagen,
1048 Quellenreferenzen und 44 Firmenfokus-Prüfungen. 346 ausgewählte Modellprüfungen
mit 5052 Feldern: 2512 dokumentiert, 2406 unbekannt, 125 widersprüchlich, neun Roadmap.
Drei ursprüngliche Modellidentitäten, neun Listings und sämtliche 862 BuyAndRent-
Detailinhalte bleiben offen. Historische Vollständigkeit, exklusive USPs und
Marktführerschaft sind nicht nachgewiesen. Änderungen lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – PAL Robotics Plattformen und Konfigurationen

Elf benannte Plattformen/Konfigurationen ergänzt: TIAGo Base, OMNI Base, Base AI,
Base Delivery, Base Actuated Conveyor, Base Shelf, TIAGo LITE, TIAGo++, Pro Arm,
TIAGo Head und REEM-C. Sechs bestehende Einträge korrigiert: TIAGo, TIAGo Pro,
StockBot, Kangaroo, TALOS und ARI. Keine Kategorienübertragung. Alle elf Plattformen
des gespeicherten Herstellerverzeichnisses sind vertreten; sechs weitere Namen sind
historische, Editions- oder ausgestattete Konfigurationen, keine sechs neuen Grunddesigns.
17 ausgewählte Modellprüfungen mit 287 Feldern: 95 dokumentiert, 184 unbekannt,
acht widersprüchlich. Die frühere Kangaroo-Prüfung mit acht Feldern wurde auf
16 Felder erweitert; ihre Quelle bleibt im Snapshot erhalten. 345 andere Reviews,
1.803 andere Katalogzeilen, 44 Firmenfokusse und ursprüngliche Quellenidentitäten
unverändert. Netto 16 zusätzliche Reviews und 279 zusätzliche Felder. Ein Firmenfokus ergänzt.

TIAGo Pro: 80 kg, 120–155 cm, 23 DoF inklusive Standardgreifern und vier Stunden
im verlinkten Datenblatt gelten für die dokumentierte Konfiguration. 92/236 cm
vertikale/horizontale Reichweite gehören zum mobilen Roboter; 96/240 cm gehören
zur ausdrücklich getrennten Teleoperation Station. Der bisherige Konfliktvermerk
war daher zu weitgehend. Drei Kilogramm pro ausgestrecktem Arm schließen den
Endeffektor aus; Torsohub 35 cm. Keine Verdopplung zur ungeprüften Gesamtnutzlast.
Die Station bleibt Zubehör. TIAGo mit einem/zwei Akkus hat 4–5/8–10 Stunden;
generische 70 kg und Familienwerte werden nicht in LITE oder ++ kopiert.
Die ++-Spalte nennt zwei Siebenachsarme, keine vollständige Gesamtgelenkzahl.

StockBot: ~10 Stunden und fünf Stunden Vollladung in der Webtabelle stehen gegen
zwölf und vier Stunden im Datenblatt/FAQ. Beide Felder bleiben widersprüchlich.
RFID-Erfassung bis vier Meter und optische Erfassung bis 2,4 Meter sind getrennte
Messgrößen; 0,5-Meter-Artikelortung ist keine Dockinggenauigkeit. Marketingzähler
werden nicht zu unabhängigen Genauigkeits- oder Laufzeitprüfungen.
Kangaroo: Armvarianten mit 4/5/7 DoF tragen ausgestreckt 7/5/3 kg; beidhändig
stehen separat 30/28/25 kg. Die beidhändigen Werte sind keine Summe ausgestreckter
Armlasten. 50–65 kg und 14–40 DoF bleiben konfigurationsabhängig. Die fehlerhafte
976-Ah-Schreibweise im PDF wird nicht als Akkukapazität übernommen.
TALOS: 1,5 Stunden Gehen versus drei Stunden Bereitschaft; Drehmomentsensor-Aussage
mit Ausnahme für Kopf, Handgelenke und Greifer. Separate Handgelenk-Kraftsensoren
heben diese Ausnahme nicht auf. ARI: 73/75 cm Tiefe bleiben ein Quellenkonflikt;
unbelegte 60 kg entfernt. Sprache, Navigation, Docking und Cloud-Funktionen bleiben
paketabhängig; Hersteller-Datenschutzwerbung ist keine unabhängige Rechtsprüfung.

TIAGo Base: 70/100 kg Nutzlast und 1/1,5 m/s Maximalgeschwindigkeit sind zwischen
aktueller Seite, verlinktem PDF und Herstellerartikel nicht auf eine exakte Revision
aufgelöst. Ein-Zentimeter-Stufe und etwa sechs Prozent Steigung im FAQ sind keine
150-mm-Stufe; die PDF-Beschriftung kombiniert Spalt/Stufe und bleibt unklar.
OMNI Base nennt 150 mm Spaltbreite, keine vertikale Stufenhöhe. Bare-Base-Werte
werden nicht auf Delivery-, Conveyor- oder Shelf-Gesamtsysteme übertragen.
Der Base-AI-Artikel von 2023 dokumentiert 150 kg, 245° LiDAR und zwei RGB-D-Kameras.
Seine alte Produktadresse leitet zur heutigen 100-kg-OMNI-Base-Seite um; daraus
folgen weder identische Hardware noch aktuelle Verfügbarkeit.

TIAGo Pro Arm: 9,5 kg, sieben Achsen; 110 cm Webhöhe gegen 105 cm im Datenblatt.
Sieben Kilogramm Spitzen- und sechs Kilogramm Dauerlast sind in der Tabelle
qualifiziert; die zusätzliche Drei-Kilogramm-Angabe im Überblick hat keine erklärte
Beziehung dazu. Diese Unsicherheit bleibt markiert. 75 cm horizontale Reichweite
und 95 cm unqualifizierte Reichweite werden nicht als gleiche Messung ausgegeben.
24-Stunden-Betriebszyklus bei externer Versorgung ist keine Akkulaufzeit.
Visual Programming ist im Überblick als künftig verfügbar gekennzeichnet.
TIAGo Head ist eine separat versorgte, zweiachsige HRI-Plattform, keine passive
Ersatzhülle. Sie und REEM-C sind im aktuellen Verzeichnis als Legacy klassifiziert.
Head-Paketpreise von 12.950/19.900 EUR im gespeicherten PDF enthalten zehn Prozent
Bildungsrabatt und schließen Versand/Steuern/Zölle aus; keine aktuellen allgemeinen
Offers daraus erzeugt. REEM-C: drei Stunden Gehen/sechs Bereitschaft getrennt;
Konzeption 2013 ist kein belegtes erstes kommerzielles Startjahr.

33 gespeicherte HTTP-Körper gehasht und Text reproduziert: 18 HTML und 15 PDF-Körper
mit 43 Seiten, einschließlich zweier Routen auf dasselbe Pro-PDF. Eindeutig sind
14 PDFs mit 41 Seiten. 88 konkrete Quellenbeziehungen geprüft: 63 Tabellenzeilen,
eine getrennte Zubehörsektion, 17 benannte Textbezüge, sechs positionierte PDF-
Regionen und eine finale Weiterleitungsadresse. 26 verwendete Primär-Snapshot-URLs.
Alle 33 Antworten, elf Hersteller-Verzeichnisplattformen und sechs weitere Namen
haben Klassifikationsentscheidungen. Keine Bildsichtprüfung, Formularübermittlung,
Preis-/Demoanfrage oder erneuten Zugriffe auf zuvor blockierte Hosts.

17 gerenderte Modellseiten: 287 Felder, 86 Quellenmarkierungen, 167 ausgelassene
Leerfelder, 63 strukturierte Werte und 59 Merkmalsätze. Firmenfokus und Export
abgeglichen; vier ursprüngliche Modell-Exportziele mit 68 Feldvorkommen geprüft.
Gesamtexporte 591/406/862/132 Zeilen. Globaler Metadatenabgleich: 362 Modellseiten,
5331 Felder, 2725 sichtbare technische Werte mit Quellenstatus, 2263 ausgelassene
Leer-/NA-Felder und 20 belegte Startjahre. Frühere Herstellerquellen wurden hierfür
nicht erneut unabhängig geprüft. Vergleichs-JSON 1350855 Byte,
Katalogskript 1638994 Byte; interne Recherchemetadaten bleiben serverseitig.

516 Unit-Tests in 40 Dateien, Lint und Format bestanden. Alle 84 Browserfälle
bestanden: 34 PAL, 32 DEEP-Robotics- und 18 Vergleichsregressionen, einschließlich
28 Axe-Prüfungen auf Desktop/Mobil in Hell/Dunkel. Build 2869 Seiten, etwa 437 MB.
Null Datenfehler, 711 Hinweise (+15 fehlende Startjahre: elf Ergänzungen und vier
entfernte unbelegte Altjahre). Erneuter Import null Ergänzungen. Keine UI-Codeänderung.
Eigene Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Gesamtstand: 1.820 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1.035 Profile,
701 datierte Merkmalsdatensätze (565 neue/136 bestehende Modelle), 2681 Aussagen,
1076 Quellenreferenzen und 45 Firmenfokus-Prüfungen. 362 ausgewählte Modellprüfungen
mit 5331 Feldern: 2601 dokumentiert, 2588 unbekannt, 133 widersprüchlich, neun Roadmap.
Drei ursprüngliche Modellidentitäten, neun Listings und alle 862 BuyAndRent-
Detailinhalte bleiben offen. Vollständige historische Prüfung, unabhängige Leistung,
exklusive USPs und Marktführerschaft sind nicht nachgewiesen. Änderungen lokal;
kein Commit, Push oder Deployment.


## 2026-11-02: current comparison and combined research queue (batch 62)

Removed the cross-manufacturer exact-name fallback and refreshed the stale
1,715-row heuristic comparison against all 1,820 current catalog rows without HTTP.
The 114 model/eleven brand hints include already reviewed aliases, families,
components and services; only three original model identities remain unresolved.
The 122 originally unclear listings remain preserved, with 113 reviews and nine
open. Original inventory bytes, source dates and historical embedded comparisons
remain unchanged. Use the separate current gap file and strict coverage decisions.

The combined JSON/CSV queue contains 518 scoped targets, including 430 from explicit
model mentions, 489 with reviewed listing resolutions, and 518 with reviewed
description references. All have dated highlights; 206 have selected-field reviews
and 312 await those reviews. The queue preserves source links, family/context scope
and review notes. Manufacturer priorities start with Unitree, Fourier and Intuitive
Surgical. Company focus evidence covers 44 of 591 source groups and 45 overall profiles.

Verification: 525 unit tests in 41 files and 20 Python tests pass; changed-file ESLint
and formatting pass. All 23 catalog/evidence files, 1,961 source identity records and
prior strict audit decisions preserved. Four exports retain 591/406/862/132 rows;
the new research CSV has 518 rows. No new build, browser or manufacturer HTTP run.
Batch 61 build/browser results remain historical. No own browser/server started;
previous 141 own test processes closed and port 4321 free. All 862 detail contents,
three model identities, nine listings, whole-product verification and market leadership
remain unresolved. Changes are local; no commit, push or deployment.


## Ergänzung vom 2. November 2026 – Fourier-Modelle und Quellenabgrenzung (Batch 63)

Sieben benannte Modelle/Konfigurationen ergänzt: GR-3C, GR-3C Ultra, GR Mini,
GRW, GRW Lite, ArmMotus M2 Pro und ExoMotus M4 Immersive. Elf bestehende Einträge
korrigiert, darunter GR-1, GR-2, GR-3, N1 und GR Nano. Die Dublette von GR Nano unter
Fourier/Fourier Intelligence wurde zusammengeführt; die bisherige Modelladresse
bleibt erhalten. Nexus-01 ist eine N1-Bezeichnung, kein zusätzliches Modell.
RehabHub, InfinityNet, reine Sensorik und Trainingsgeräte werden nicht pauschal
als neue Robotermodelle gezählt. 18 ausgewählte Modellprüfungen mit 293 Feldern:
109 dokumentiert, 176 unbekannt und acht widersprüchlich. Ein Firmenfokus ergänzt.

GR-1: unbelegte 125.000 USD und pauschale Traglast entfernt; etwa 3 kg pro Hand,
60 Minuten Betrieb gegenüber 45 Minuten Gehen, 315 Minuten Laden und getrennte
44/34-Konfigurationen. GR-2: optionale 12-DoF-Hände bleiben von Standardhänden getrennt.
GR-3: 43 Basisgelenke und bis zu 55 mit optionalen Händen sind unterschiedliche
Konfigurationen; Geschwindigkeit und Spannweite behalten dagegen Quellenkonflikte.
Laden etwa 1,5 Stunden, nicht drei Stunden. N1: 38/39 kg und Körpermaße bleiben
widersprüchlich; 2,7 km/h Gehen und unterschiedliche Laufangaben sind abgegrenzt.
GR-3C-Editionen erhalten keine aus der generischen GR-3-Seite kopierte Masse.
Mini erhält keine N1-Geschwindigkeit; die uneindeutige Ladezeit bleibt leer.

GRW: 160 kg auf der Website gegenüber etwa 240 kg in der Dokumentation sowie
abweichende Maße und Gelenkzahlen bleiben sichtbar. 16 kg gelten kombiniert für
beide Arme, nicht je Arm; die chinesische Unterlage nennt 8 kg je Arm.
Zwei Stunden Laden gelten für 0–80 Prozent. 880/895 mm Wendekreisdurchmesser werden
nicht als Wenderadius ausgegeben; maximale Greifhöhe wird nicht als Hubhöhe
übernommen. Lite erhält keine GRW-Nutzlast oder Gesamtgelenkzahl. Nano ist eine
200-g-Tischplattform mit drei Kopfachsen; ASR/TTS/LLM/VLM gehören zur externen
Kundenplattform. Reha-Trainingsraum, Patientengewicht oder Übungskraft werden nicht
als Gelenkzahl, Robotertraglast oder belegter klinischer Nutzen ausgegeben.

57 gespeicherte Quellenkörper gehasht: 54 erfolgreiche Antworten und drei 404;
23 HTML, 19 gerenderte HTML, ein Binärkörper und 14 PDF-Körper mit zusammen
180 Seiten einschließlich doppelter Körper. 30 unterschiedliche öffentliche
JavaScript-Ressourcenkörper zusätzlich gehasht. 83 konkrete Quellenbeziehungen
geprüft: 35 HTML-Tabellenzeilen, neun benannte Textbezüge, 20 positionierte
PDF-Textregionen, neun begrenzte Reha-PDF-Abschnitte, neun positionierte OCR-Belege
und eine lokale OCR-Gegenprüfung im Handbuch. 27 verwendete Primär-URLs.
32 Seiten aus neun PDF-Körpern maschinell erkannt; sechs lokale OCR-Regionen
nachgeprüft. Keine manuelle Bildsichtprüfung. Mehrdeutige Zeichen wurden nicht
zu technischen Angaben erklärt. Alte leere SPA-Routen und falsch befüllte
Reha-Detailtexte wurden nicht als Produktbelege verwendet. Beide eigenen
Recherchebrowser wurden geschlossen. Zuvor blockierte Hosts wurden nicht erneut
angefragt; keine Formulare, Bestellungen oder Demoanfragen übermittelt.

18 gerenderte Modellseiten: 293 Felder, 99 Quellenmarkierungen, 158 ausgelassene
Leerfelder, 69 strukturierte technische Werte und 65 Merkmalsätze.
Firmenfokus und Exporte abgeglichen; acht ursprüngliche Modell-Exportziele mit
128 Feldvorkommen. Alle 362 früheren Modellprüfungen, 45 früheren Firmenfokusse,
1.809 übrigen Katalogzeilen und 1.961 ursprünglichen Quellenidentitäten erhalten.
Globaler Metadatenabgleich: 380 Modellseiten und 5.624 ausgewählte Felder.
Vergleichs-JSON 1417857 Byte; Katalogskript 1649124 Byte.

540 Unit-Tests in 42 Dateien und alle 94 Browserfälle bestanden: 42 Fourier,
34 PAL und 18 Vergleichsfälle, einschließlich 28 Axe-Prüfungen auf Desktop/Mobil
in Hell/Dunkel. Build: 2.876 Seiten, etwa 438 MB. Datenprüfung: null Fehler,
718 Hinweise, sieben mehr als zuvor; unbekannte Erscheinungsjahre bleiben offen.
Erneuter Import: null Ergänzungen. Geänderte Tests bestehen Lint/Format.
Eigene Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Gesamtstand: 1.827 Modelle/Konfigurationen, 641 Herstellerschreibweisen,
1.035 Marken-/Firmenprofile, 711 datierte Merkmalsdatensätze (572 neue und
139 bestehende Modelle), 2.721 Aussagen, 1.118 Quellenreferenzen und 46 Firmenfokusse.
380 Modellprüfungen umfassen 5.624 Felder: 2.710 dokumentiert, 2.764 unbekannt,
141 widersprüchlich und neun Roadmap. Die gemeinsame Rechercheliste enthält
weiterhin 518 Ziele mit Merkmalsbelegen; 214 haben ausgewählte Feldprüfungen,
304 benötigen diese noch. Drei ursprüngliche Modellidentitäten, neun Listings
und alle 862 BuyAndRent-Detailinhalte bleiben offen. Exklusive USPs,
historische Vollständigkeit und Marktführerschaft sind nicht nachgewiesen.
Änderungen lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Unitree-Konfigurationen und Lastgrenzen (Batch 64)

Sechs ausdrücklich benannte Konfigurationen ergänzt: A2-PRO, As2-W X, As2-W EDU,
R1 AIR, R1 EDU und H1-2. Zwölf bestehende Einträge korrigiert: A2, As2 AIR/PRO/X/EDU,
AS2-W, B2, B2-W, R1, H2, H2 EDU und H1. Keine Kategorienübertragung.
18 ausgewählte Modellprüfungen umfassen 259 Felder: 160 dokumentiert und
99 unbekannt. Ein Herstellerfokus ergänzt. 1.815 übrige Katalogzeilen,
380 frühere Modellprüfungen, 46 Firmenfokusse und 1.961 Quellenidentitäten erhalten.
Frühere Erscheinungsjahre, Bilder und Videos liegen außerhalb dieser Feldprüfung.

A2: etwa 42 kg einschließlich Akku, 35 kg ohne Akku; die Standardspalte nennt
nur einen LiDAR, A2-PRO zwei. PRO nennt IP56–IP67, ausdrücklich IP67 für
Kernkomponenten; daraus folgt keine pauschale IP67-Gesamtroboterfreigabe.
25 kg Gehbelastung, ideale 35 kg und 100 kg Standlast sind getrennt.
30 cm Treppenstufe ist nicht die separate 0,5–1-m-Kletterhöhe. Hot-Swap bedeutet
nicht unbegrenzte Laufzeit pro Akkuladung.

As2 AIR: 65 N·m statt generischer 95 N·m, 10 kg Gehbelastung, etwa zwei Stunden
unbelastet, mehr als 1,5 Stunden bei 10 kg. Kein IP-Wert in der AIR-Spalte;
der generische IP54-Text wird nicht übertragen. PRO: 75 N·m, 13 kg Gehbelastung.
X/EDU: 95 N·m, 15 kg. Nur X/EDU bieten Sekundärentwicklung. AIR hat 8000 mAh
und Unitree L2, die anderen Spalten 15000 mAh und industriellen LiDAR. Ein
Ladedock ist nur für EDU gelistet. GPS/4G sind standardmäßig deaktiviert und
benötigen Benutzerfreigabe; ihre Existenz ist kein uneingeschränkter Betriebsnachweis.

As2-W: 16 Gelenkmotoren, etwa 25 kg einschließlich Akku, IP54. Kontinuierliche
30-cm-Treppen sind von 0,4–0,8 m maximaler Kletterhöhe getrennt; der 80-cm-Slogan
wird nicht als durchgängige Treppenspezifikation verwendet. Standlast 150 kg
ist keine Gehtraglast; diese beträgt etwa 16 kg. X und EDU unterstützen
Sekundärentwicklung, Dock und zusätzliche Rechenmodule sind nur bei EDU gelistet.
Der widersprüchliche Radiusdruck in der Reifentabelle wird nicht als Wenderadius
übernommen; unqualifizierte Geschwindigkeitswerbung ersetzt keine Messbedingungen.

B2: unbelegte 17.000 USD entfernt. >6 m/s gelten für besondere Konfigurationen
mit praktischer Geschwindigkeitsbegrenzung. Vier bis sechs Stunden allgemeine
Laufzeit, >5 Stunden unbelastetes Gehen und >4 Stunden mit 20 kg Last bleiben
getrennt. Radumrüstung und autonomes Laden sind Optionen. B2-W: etwa 85 kg
mit Akku statt 75 kg; eigene Herstelleradresse. 15 km/h und 25 km mit 40 kg
Last sind ausdrücklich besondere Konfigurationen. 30 km unbelastete Reichweite
werden nicht in Betriebsstunden umgerechnet; Akkudauer und Ladezeit bleiben leer.

R1 AIR: 20 Gelenke, etwa 27 kg mit Akku, Monokularkamera, 4900 USD ohne Steuern
und Versand. R1: 26 Gelenke, etwa 29 kg, Binokularkamera und 5900 USD. Nur EDU
listet Sekundärentwicklung, optionale Hände und zusätzliche Rechenmodule;
26–40 Gelenke bleiben konfigurationsabhängig. Die englische Tabellenzeile
„Maximum Torque of Arm Joint“ nennt etwa 2 kg und verweist auf eine Arm-Last-
Fußnote. Diese Einheiten-/Beschriftungsunklarheit wird nicht stillschweigend
in eine gesicherte Nutzlast oder ein Drehmoment umgewandelt.

H2: Tabellenmaße 1820 × 456 × 218 mm; etwa 70 kg mit Akku. Armnennlast etwa
7 kg, Spitzenlast etwa 15 kg; keine Gesamtkörper- oder verdoppelte Bimanuallast.
Standard nennt Core i5 und keine Zusatzmodule; EDU zusätzlich Core i7 und
wählbare Module wie Thor. Generische 2070 TOPS und ältere „3× Orin NX“-Prosa
begründen keine überall enthaltene Konfiguration. H1: etwa 47 kg Gesamtmasse,
unbelegte 90.000 USD, 30 kg Traglast und zwei Stunden Akku entfernt. 864 Wh
sind keine Akkudauer. 3,3 m/s und potenzielle >5 m/s sind getrennt. H1-2:
etwa 70 kg, 27 Gelenke, <2 m/s, 7 kg Armnennlast und 21 kg Spitzenlast.
H1-Gelenkzahlen werden nicht aus Gliedmaßenzahlen zu einer unbekannten
Gesamtzahl zusammengerechnet.

25 öffentliche HTML-Quellenkörper gespeichert, alle HTTP 200, gehasht und
Text reproduziert. Acht benannte Vergleichstabellen mit 239 Zeilen geprüft;
258 konkrete Quellenbeziehungen einschließlich 17 Fußnoten-/Textbezügen und
zweier variantengenauer Preiszeilen. Keine Bildsichtprüfung, Bestellungen,
Formulare oder Zugriffe auf früher blockierte Anbieter.
15 weitere Portfolioquellen sind enthalten: eine Firmenseite sowie 14 Produkt-/
Anwendungsreferenzen, die noch eine Modell-/Konfigurationsentscheidung benötigen.
Dazu gehören A2-W, H2-X, H2-D, R1-D, G1-D, G1-Comp, G1-Boxing, B2-Ex, G1+,
R1-7a, D1-T, Z1, AlienGo und D2. Sie sind in `portfolio-decisions.json`
mit Snapshot und Prüfbedarf gespeichert und werden in diesem Durchgang
nicht als zusätzliche Robotermodelle gezählt. Insbesondere benannte Arme,
Systeme, Konfigurationen und Anwendungen dürfen nicht pauschal gleichgesetzt werden.

18 gerenderte Modellseiten: 259 Felder, 139 Quellenmarkierungen, 84 ausgelassene
Leerfelder, 114 strukturierte technische Werte und 72 Merkmalsätze.
15 Modell-Exportziele mit 213 Feldvorkommen sowie Firmenfokus und Gesamtexporte
abgeglichen. Globaler Metadatenabgleich: 398 Modellseiten, 5883 ausgewählte Felder,
2963 sichtbare technische Werte samt Quellenstatus, 2505 ausgelassene Leer-/NA-Felder
und 25 zuvor belegte Startjahre. Drei veröffentlichte USD-Preise haben strukturierte
Offers; 15 unbekannte Preise erzeugen keine. Die Preise behalten den Ausschluss
von Steuern/Versand und sind keine Bestands- oder regionalen Lieferzusagen.
Vergleichs-JSON 1475471 Byte, Katalogskript 1657783 Byte.

556 Unit-Tests in 43 Dateien und alle 80 Browserfälle bestanden: 42 neue Unitree-,
20 frühere G1/Go2- und 18 Vergleichsfälle, einschließlich 32 Axe-Prüfungen.
Build: 2882 Seiten, etwa 439 MB. Datenprüfung: null Fehler und 724 Hinweise,
sechs zusätzliche nicht belegte Startjahre der Ergänzungen. Lint/Format der
geänderten Tests bestanden; erneuter Import null Ergänzungen. Eigene
Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Gesamtstand: 1833 Modelle/Konfigurationen, 641 Herstellerschreibweisen,
1035 Marken-/Firmenprofile, 720 datierte Merkmalsdatensätze (578 neue und
142 bestehende Modelle), 2766 Aussagen, 1127 Quellenreferenzen und 47 Firmenfokusse.
398 ausgewählte Modellprüfungen umfassen 5883 Felder: 2870 dokumentiert,
2863 unbekannt, 141 widersprüchlich und neun Roadmap. Von 518 ursprünglichen
Referenzzielen haben 223 ausgewählte Feldprüfungen, 295 benötigen diese noch.
Die 14 neuen Hersteller-Portfolioreferenzen werden getrennt geführt.
Drei ursprüngliche Modellidentitäten, neun Listings und 862 BuyAndRent-
Detailinhalte bleiben offen. Vollständigkeit, exklusive USPs, unabhängige
Leistung und Marktführerschaft sind nicht nachgewiesen. Änderungen lokal;
kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Unitree-Portfolio, Arme und mobile Systeme (Batch 65)

Alle 14 im vorherigen Durchgang gesicherten Produkt-/Anwendungsreferenzen haben
eine abgegrenzte Entscheidung. 26 benannte Modelle/Konfigurationen ergänzt:
A2-W/PRO, H2-X/EDU, H2-A Standard, H2-D Standard/Flagship, R1-A5/A7 und
R1-A5-D/A7-D, G1-D Standard/Ultimate, G1+/EDU, G1-Comp, B2-Ex Chassis/Inspection
Solution, AlienGo, R1-7a, D1, D1-T Standard/Full Edition, Z1 AIR/PRO und D2.
G1-Boxing ist ein Anwendungskontext am bestehenden G1, kein weiterer Hardwaretyp.
26 ausgewählte Modellprüfungen mit 409 Feldern: 206 dokumentiert, 203 unbekannt.
Alle 1833 vorherigen CSV-Zeilen und 398 vorherigen ausgewählten Modellprüfungen
unverändert; 719 frühere Merkmalsdatensätze unverändert, G1 um Kontext und Quelle
ergänzt. Ein Firmenfokus erweitert, 46 weitere unverändert. 1961 ursprüngliche
Quellenidentitäten erhalten. Unitree umfasst jetzt 58 Katalogeinträge; sechs ältere
Komponenten-/Legacy-Einträge sind weiterhin außerhalb der ausgewählten Feldprüfungen.

A2-W wiegt etwa 52 kg mit und 45 kg ohne Akku; 16 Motoren. Standard nennt einen,
PRO zwei LiDAR. PRO IP56–IP67 mit IP67 für Kernkomponenten ist keine einheitliche
Gesamtroboter-IP67-Freigabe. 25 kg Gehbelastung, ideale 35 kg und 100 kg Standlast
bleiben getrennt. Mehr als 3,5 Stunden unbelastet und mehr als 1,5 Stunden mit
25 kg sind Herstellerbedingungen; 30-cm-Treppen und 0,5–1 m Klettern verschieden.

H2-X: 65+ kg, 31 Körpergelenke, etwa 7 kg Nenn-/15 kg Spitzenlast pro Arm.
Die Herstellerseite nennt sowohl statische als auch gehende acht Stunden;
beides bleibt als ungemessene Herstellerangabe qualifiziert. Fünf Stunden des
optionalen Funkmikrofons sind keine Roboterlaufzeit, 7 A Ladestrom keine Ladezeit.
H2-X Standard 25400 USD ohne Steuer/Versand, EDU unbekannt. Optionale Thor-/AGX-
Module werden nicht zu einem überall enthaltenen Paket zusammengerechnet.

H2-A Standard ist eine feste Basis ohne gelistete Hubsäule oder angetriebenes
Fahrwerk; etwa 0,6 m Reichweite ohne geschickte Hände. H2-D Standard: 148 kg,
manuelles Fahrwerk und etwa 0,36 m Hub; direkter 7×24-Netzbetrieb liefert keine
Akkulaufzeit. Flagship: 120 kg, angetriebenes Fahrwerk, etwa 0,46 m Hub, 1,5 m/s
und etwa fünf Stunden Akku. 0,75 m Wendedurchmesser wird nicht Wenderadius;
2 m Arbeitsraum werden nicht Gabelhub. Arm-Nenn-/Spitzenlast bleibt pro Arm.

R1-A5/A7 sind feste Arme mit 11/13 kg einschließlich externer Stromversorgung;
die mobilen Varianten nennen 30/32 kg ohne daraus eine Akkuinklusion abzuleiten.
15/19 beziehungsweise 18/22 Gelenke schließen den Greifer ein. 2–4 kg Armlast
hängt von der Armstellung ab. 4290 USD ist ein Familien-Ab-Preis ohne exaktes
strukturiertes Angebot. Drei Fahrwerk-Freiheitsgrade bestimmen keinen Antriebstyp.

G1-D Standard/Ultimate: 17/19 Gelenke ohne Endgeräte, etwa 90 kg, zwei/sechs
Stunden Akku. Nur Ultimate nennt 1,5 m/s und angetriebenes Differentialfahrwerk.
24/7 betrifft Software-Dienstverfügbarkeit und ist keine Akkuzusage. 3 kg ist
maximale Einzelarmlast. Höhenpositionen werden nicht als belegter Hub verrechnet.
G1+ Standard/EDU: 25 beziehungsweise 25–45 Gelenke, 3/4 kg Armlast, 35/35+ kg.
0,45 m Armspanne ist keine sichere Armreichweite. Standardpreis 15000 USD ohne
Steuern/Versand, EDU unbekannt. G1-Comp-Optionen und Rechenmodule bleiben wählbar;
G1-Boxing-Demonstrationen begründen kein enthaltenes Boxpaket für jeden Standard-G1.

B2-Ex Chassis/Inspection: 130/170 kg, 45°/30°, sieben/vier Stunden unter den
jeweiligen Herstellerbedingungen. Chassis: 40 kg Gehlast und separate 70 kg
Maximalangabe ohne bekannten Betriebsmodus. Inspection-Testlast von 40 kg plus
etwa 80 W externer Last ist keine freie zusätzliche Nutzlast; diese bleibt leer.
Ex db mb IIB T4 Gb und Ex db eb ib mb IIB T4 Gb sind Herstellerkennzeichnungen,
kein unabhängig geprüftes Zertifikat. IP66 bleibt als generische Familienangabe
qualifiziert. AlienGo: 21,5 ± 1 kg ohne Akku; 13 kg Last ohne Betriebsmodus,
2,5–4,6 Stunden ohne veröffentlichte Bedingungen. Schutzmodus ist kein IP-Wert.

R1-7a: sieben Achsen, 2 kg, 650 mm einschließlich Hand; 1650 USD als Ab-Preis,
Masse unbekannt und begrenzte Steifigkeit/Kontrolloptionen sichtbar. D1 ist der
Einzelarm: 2,37 kg, 500 g Nutzlast, sechs Achsen plus Greifer. D1-T Standard/Full
sind Zwei-/Vierarm-Kits; ihre Gesamtmasse, Nutzlast und Gelenkzahl bleiben leer.
Unter 8500/16000 USD sind Preisobergrenzen ohne exakte strukturierte Offers.
Z1 AIR/PRO: 4,3/4,5 kg und 2/≥3 kg Last. 405 g beziehungsweise 33 N·m beziehen
sich auf eine Motorkomponente; 500 W liefert keine Akkulaufzeit. D2: netto
5,9 kg, sieben Achsen plus Greifer; 3 kg Tabellenlast und maximal 5 kg Übersicht
behalten ihre Bedingungen. 633 mm Armlänge sind nicht 780 mm Greiferradius.
As2 trägt laut Hersteller nur einen Arm; zwei Arme auf A2 schließen Hochgeschwindigkeits-
laufen aus. 60 W typisch/870 W Spitze werden nicht in Stunden umgerechnet.

Quellen: 14 am selben Tag gespeicherte Herstellerkörper aus Batch 64 bytegleich
wiederverwendet; ihre damals gesicherten HTTP-Status sind jeweils 200. Keine neuen
Quellsnapshots angefordert; ein gehosteter Web-Gegencheck. Hash und Text reproduziert,
13 benannte Tabellen mit 326 Zeilen und 362 konkrete Quellenbezüge geprüft.
Keine unabhängige Zertifikatsprüfung, Bildsichtprüfung oder Bestandsprüfung.
Keine Formulare und keine Wiederholung früher blockierter Anbieterzugriffe.

26 gerenderte Modellseiten: 409 Felder, 178 Quellenmarkierungen, 179 ausgelassene
Leerfelder, 136 strukturierte technische Werte und 102 Merkmalsätze geprüft;
zusätzlich bestehender G1-Boxing-Abschnitt und Firmenfokus. Diese 26 Ergänzungen
sind außerhalb der ursprünglichen Modellnennungen und erzeugen deshalb keine
zusätzlichen Modell-Exporttreffer. Gesamtexporte: 591 Firmen, 406 Modellnennungen,
862 Listings, 132 Beschreibungsentscheidungen und 518 Rechercheziele erhalten.
Global: 424 Modellseiten, 6292 Felder, 3141 sichtbare technische Werte samt Belegen,
2684 ausgelassene Leer-/NA-Felder und 25 bereits belegte Startjahre abgeglichen.
Zwei exakte veröffentlichte USD-Preise erzeugen Offers, 24 unbekannte Preise keine.
Vergleichs-JSON 1564511 Byte; Katalogskript 1685614 Byte.

574 Unit-Tests in 44 Dateien und 104 Browserfälle bestanden: 44 neue Portfolio-,
42 frühere Plattform- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Build: 2908 Seiten, etwa 443 MB. Datenprüfung: null Fehler und 750 Hinweise,
26 zusätzliche unbekannte Erscheinungsjahre. Lint/Format bestanden; erneuter
Import null Ergänzungen. Eigene Testbrowser, Vorschau und Hilfsprozesse beendet;
Port 4321 frei und Ressourcen anderer Aufgaben erhalten.

Gesamt: 1859 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
746 datierte Merkmalsdatensätze (604 neue/142 bestehende Modelle), 2869 Aussagen,
1154 Quellenreferenzen und 47 Firmenfokusse. 424 ausgewählte Prüfungen umfassen
6292 Felder: 3076 dokumentiert, 3066 unbekannt, 141 widersprüchlich, neun Roadmap.
Von den ursprünglichen 518 Referenzzielen haben weiterhin 223 ausgewählte
Feldprüfungen; 295 benötigen diese noch. Die 14 Unitree-Portfolioreferenzen sind
jetzt entschieden und keine offene Warteschlange mehr. Drei ursprüngliche
Modellidentitäten, neun Listings und 862 BuyAndRent-Detailinhalte bleiben offen.
Vollständigkeit, exklusive USPs und Marktführerschaft sind nicht belegt.
Änderungen lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Carbon Robotics: Anbaugeräte, Demonstrator und Traktorgrenzen (Batch 66)

Sechs bestehende Modelle technisch geprüft: LaserWeeder und LaserWeeder G2
200/300/400/600/1200. Das vom Hersteller ausdrücklich benannte „First Autonomous
LaserWeeder Unit“ ergänzt, eingeführt im März 2021 und nur für Felddemonstrationen,
nicht zum Verkauf. Es bleibt vom kommerziellen Traktoranbaugerät aus Februar 2022
getrennt. Sieben Prüfungen mit 119 Feldern: 42 dokumentiert, 77 unbekannt.
Ein Firmenfokus ergänzt; alle 47 bisherigen Firmenfokusse und 424 bisherigen
Modellprüfungen unverändert. Die 1853 übrigen alten Katalogzeilen behalten ihre
Werte; zwei optionale kommerzielle CSV-Spalten sind dort leer. Keine Kategorien-
übertragung; 1961 ursprüngliche Quellenidentitäten und alle Exportzeilen erhalten.

Die sechs kommerziellen Anbaugeräte bekommen belegte Behandlungskapazität in
ha/h und ac/h, sichtbar in Detailtabelle, strukturierten Eigenschaften und Vergleich.
LaserWeeder: 0,20–0,61 ha/h. G2 200: 0,16–0,28; 300: 0,30–0,61; 400: 0,32–0,65;
600: 0,61–1,21; 1200: 1,21–2,43 ha/h. Alle Werte sind Herstellerangaben unter
nicht vollständig dokumentierten Feldbedingungen. Unkrautschüsse pro Minute
werden weder Fläche pro Stunde noch Fahrgeschwindigkeit. Traktor-Mindesthubkraft
wird nicht Robotertraglast: G2 300 wiegt 2540 kg, fordert aber 3600 kg Hubkraft;
G2 1200 wiegt 8165 kg und fordert 8618 kg Hubkraft. Laser-/Modul-/Kamerazahlen
sind keine Gelenk-Freiheitsgrade.

G2 1200 verlangt hinteren PTO-Generator und IVT am 8R-Traktor; die anderen G2-
Spalten verlangen vorderen PTO-Generator und nennen eigene Motor-/PTO-Grenzen.
Ein nicht genannter Mindest-PTO-Wert des 1200 wird nicht aus anderen Modellen
übernommen. Der kommerzielle LaserWeeder nutzt 30 × 150 W Diodenlaser und
42 Kameras. Der autonome Demonstrator hat acht 150-W-CO2-Laser, zwölf Kameras,
74-hp-Cummins-Diesel und vier hydraulische Fahrmotoren. 75 Gallonen Tankkapazität
liefern keine Betriebsstunden; seine 80-Zoll-Spurweite ist keine Arbeitsbreite.

Die Quellen drucken nominell „20 ft / 6.01 m“ und separat 609 cm Gesamtbreite.
Die G2-Familienseite druckt „21 inches (61 cm)“ pro Modul. Diese Einheiten stimmen
nicht überein. Weder Rahmenbreite, ein Modulmaß noch verstellbare Reihen-/Spurweite
belegt die gesamte Behandlungsbreite; das Feld bleibt deshalb bei allen sieben
Einträgen leer, die Diskrepanzen stehen in Merkmalsätzen und Feldnotizen.
Eine zunächst zugeordnete nominale Breite wurde vor dem abschließenden Build
wegen dieser Bedeutungsgrenze zurückgenommen. Kein zusätzliches technisches
Konfliktfeld behauptet, eine belegte Arbeitsbreite zu enthalten.

24/7 bedeutet Software-/Fernunterstützung, nicht Akkulaufzeit. Kühlung und
versiegelte Module liefern keinen IP-Wert. Zielgenauigkeit unter einem Millimeter,
bis zu 99 % Unkrautvernichtung sowie Ertrags-/Kosten-/Amortisationswerte bleiben
zugeordnete Hersteller-/Fallbehauptungen, keine garantierten Betriebsergebnisse
oder Navigationsgenauigkeit. Alle Preise bleiben unbekannt und erzeugen keine
strukturierten Kaufangebote. G2-Varianten erhalten ohne Einzelmodellbeleg kein
Erscheinungsjahr aus der Familiennavigation.

Carbon ATK leitet auf Carbon Autonomy weiter: Nachrüstsatz für Deere 6R/8R/8RX/8RT
ab 2019, mit Kamera/Radar/LiDAR, menschlicher Fernüberwachung und manueller
Übernahme. Früher Zugang und anfänglich bestimmte US-Regionen bleiben sichtbar.
Der Satz ist kein zusätzliches komplettes Traktormodell und kein impliziter
Lieferbestandteil jedes LaserWeeders. Carbon AI, Large Plant Model, Plant Profiles,
Ops Center, Companion und iPad-App sind Software-/Modellfunktionen, keine weiteren
Roboterkarten. Das Firmenprofil dokumentiert diese Unterschiede mit Quellen.

Elf neue öffentliche HTML-Körper gespeichert, alle HTTP 200; Hash und Text
reproduziert. 33 ausdrücklich zugeordnete Spezifikationsabschnitte mit 151 Zeilen
und insgesamt 177 Quellenbezüge geprüft. Die beiden Unit-Specs-Blöcke derselben
LaserWeeder-Seite bleiben unter den jeweiligen kommerziellen/Demo-Überschriften.
26 Felder haben zusätzliche konkrete Abschnittszuordnung; Masse, Maßzahlen,
Flächenraten und PTO-Seite wurden gegen die passenden Blöcke geprüft.
Keine Formulare, Bildsichtprüfung, unabhängigen Feldversuche oder Wiederholung
früher gesperrter Anbieterzugriffe. Intuitive wurde wegen der dokumentierten
Sperrseiten nicht erneut abgerufen; der nächste substanzielle technische Review
ging deshalb an die sechs Carbon-Referenzziele.

Gerenderte Prüfung: sieben Seiten, 119 Felder, 35 Quellenmarkierungen,
70 ausgelassene Leerfelder, 26 strukturierte Eigenschaften, 45 Merkmalsätze und
ein Firmenfokus. Sieben unbekannte Preise ohne Offers. Der ursprüngliche
Modellnennungs-Export enthält einen LaserWeeder-Treffer mit 17 Feldern; die
gemeinsame Recherchewarteschlange enthält alle sechs Referenzmodelle mit
102 Feldern. Die zusätzlichen G2-Zuordnungen stammen aus geprüfter Firmen-
beschreibungsreferenz und sind keine fünf weiteren ursprünglichen Modellnennungen.
Globaler Metadatenabgleich: 431 Seiten und 6411 Felder, davon
3176 sichtbare technische Werte mit Quellen,
2754 ausgelassene Leer-/NA-Felder und 27 belegte Startjahre.
Vergleichs-JSON 1591095 Byte, Katalogskript 1700792 Byte.

585 Unit-Tests in 45 Dateien sowie insgesamt 96 verschiedene Browserfälle bestanden: 34 Carbon-,
44 frühere Unitree-Portfolio- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Im ersten Browserlauf bestanden 94 Fälle; zwei deutsche Vergleichserwartungen
verwendeten fälschlich Dezimalpunkte. Nach Korrektur auf die tatsächlich korrekt
lokalisierten Dezimalkommas bestehen beide gezielt wiederholten Fälle. Die
Produktdarstellung benötigte dafür keine Änderung; kein vollständiger zweiter
96-Fälle-Lauf behauptet.
Die erste Unit-Ausführung deckte einen falschen Testzugriff auf die Suchfunktion
auf; der Test verwendet nun deren tatsächlichen Rückgabetyp und der vollständige
abschließende Unit-Lauf besteht. Build: 2909 Seiten, etwa 444 MB. Datenprüfung:
null Fehler und unverändert 750 Hinweise. Lint/Format bestanden; erneuter Import
null Ergänzungen. Eigene Testbrowser, Vorschau und Hilfsprozesse beendet;
Port 4321 frei; andere Aufgabenressourcen erhalten. Änderungen bleiben lokal,
ohne Commit, Push oder Deployment.

Gesamt: 1860 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
747 datierte Merkmalsdatensätze (605 neue/142 bestehende Modelle), 2896 Aussagen,
1155 Quellenreferenzen und 48 Firmenfokusse. 431 ausgewählte Modellprüfungen
umfassen 6411 Felder: 3118 dokumentiert, 3143 unbekannt, 141 widersprüchlich,
neun Roadmap. Von 518 ursprünglichen Referenzzielen haben jetzt 229 ausgewählte
Feldprüfungen; die offene Zahl fällt von 295 auf 289. Drei Modellidentitäten,
neun Listings und 862 BuyAndRent-Detailinhalte bleiben offen. Vollständigkeit,
exklusive Vorteile, unabhängige Leistungswerte und Marktführerschaft sind nicht belegt.


## Ergänzung vom 2. November 2026 – FANUC CR/CRX, Lastmodi und Wiederholgenauigkeit (Batch 67)

Sechs bestehende CR-Arme geprüft: CR-4iA, CR-7iA, CR-7iA/L, CR-14iA/L, CR-15iA und
CR-35iB. Zwölf ausdrücklich benannte Konfigurationen ergänzt: CRX-3iA, -5iA, -10iA,
-10iA/L, -20iA/L, -30iA, -10iA/L Paint sowie Food-Ausführungen von -5iA, -10iA,
-10iA/L, -20iA/L und -30iA. 18 ausgewählte Prüfungen umfassen 288 Felder:
138 dokumentiert, 146 unbekannt, vier widersprüchlich. Ein Firmenfokus ergänzt.
Alle 431 alten Modellprüfungen, 48 alten Firmenfokusse und 1961 Quellenidentitäten
erhalten; 1854 übrige alte Katalogzeilen behalten ihre Werte. Die neue optionale
Arm-Spalte bleibt dort leer. Keine Kategorienübertragung.

Wiederholgenauigkeit des Arms ist als `armRepeatability` getrennt von absoluter
Positioniergenauigkeit und visueller Lokalisierung gespeichert. Detailtabelle,
Product-Eigenschaften und Vergleich zeigen Herstellerwert, ISO-9283-Bezug,
Prüfstatus und Quellenhinweis. Englisch/Deutsch sind beschriftet; andere vorhandene
Oberflächensprachen nutzen die bestehende englische Rückfallregel. Keine Werte
bei älteren Armen ohne gesonderte Prüfung nachgetragen. Vier Quelldateien wurden
um genau fünf Feld-/Übersetzungseinträge erweitert; vorherige Änderungen erhalten.

CR-14iA/L: 14 kg Maximal-Wristlast, aber 911 mm Reichweite nur unter 12 kg;
ab einschließlich 12 kg 820 mm. Der vermutete US-Modellpfad leitet auf die Familie
um; eine weitere vermutete EU-Route liefert 404. Beide sind keine Modellbelege.
CR-35iB: 35 kg bei 1831 mm; optionale 50 kg schränken den Raum auf 1643 mm ein.
Der 300-mm/s-Kollaborationsmodus und bis zu 750 mm/s unter Anwendungseinschätzung
werden nicht zu einer pauschal zulässigen Zellgeschwindigkeit. CR-15iA nennt
800/1500 mm/s mit separat angeordnetem Sicherheitssensor für die höhere Angabe.
CR-7iA/L hat 1000 mm/s maximale kartesische Geschwindigkeit ohne belegten
separaten Kollaborations-/High-Speed-Wert; der 500-mm/s-Wert der Nachbarseite
wurde nicht übernommen. Körper-IP54 versus IP67 für Handgelenk/J3 bleibt getrennt.

Vier Konflikte sichtbar: CR-7iA hat 717 mm in Tabelle/Broschüre und 911 mm in
generischer Seitenprosa; CR-35iB wiegt 386 kg in Broschüren/Datenblatt gegenüber
375 kg auf der US-Seite; Paint hat 47 kg in der aktuellen EU-Tabelle gegenüber
40 kg auf der US-Seite; CRX-30iA nennt in der Broschüre 1756 mm bei 30 kg und
1889 mm bei 25 kg, während die US-Tabelle 1889 mm neben 30 kg unqualifiziert
aufführt. Keine stille Auswahl oder rechnerische Controller-Subtraktion.

Die aktuelle CRX-30iA-Tabelle nennt zusätzlich 40 kg mit nur nach unten gerichtetem
Handgelenkflansch. Ein zusätzlicher 1700-mm-Eintrag verweist auf Fußnote 8, die
ISO 9283 statt des Lastmodus beschreibt. Deshalb wird daraus keine unbelegte
40-kg/Reichweiten-Paarung. Die alte CRX-25iA-Route leitet aktuell auf CRX-30iA um;
das begründet keine zusätzliche neue Karte oder vollständig geprüfte historische
Hardwaregleichheit. CRX-3iA: 11 kg, 692 mm, 3 kg und 1200/2500 mm/s nach Modus.
CRX-20iA/L erbt keine High-Speed-Zahl, die seine eigene Spalte nicht nennt.

Food-Seiten nennen fünf konkrete Ausführungen, IP67, korrosionsbeständige
Handgelenkoberfläche, geschlossene Kabelführung und NSF-H1-Fett für unbeabsichtigten
Lebensmittelkontakt. Daraus folgen keine universelle direkte Lebensmittel-
Kontaktzulassung, Sterilisation oder unabhängig geprüfte Hygienezertifizierung.
Food-Masse, Achszahl, Geschwindigkeit und Wiederholgenauigkeit bleiben leer;
Standardarmwerte sind nicht automatisch vollständige Ausstattungsdaten. Food
-30iA bleibt bei seinen 25/30-kg-Angaben ohne Übernahme des 40-kg-Modus.
Paint bleibt eine benannte Lackier-/Beschichtungsvariante; keine unabhängige
Explosionsschutz-Freigabe geprüft. Endwerkzeuge, Kameras, Kraftsensoren und
Controller bleiben paketabhängig. Acht Jahre Wartungspositionierung sind keine
Akkudauer, Garantiezeit oder gesicherte Verfügbarkeit. Unbelegte Preise,
Erscheinungsjahre und vollständige Armabmessungen bleiben leer. US-Seiten von
CR-4iA/-7iA/-7iA/L nennen nicht mehr produzierte Legacy-Produkte; das ist keine
weltweite Stilllegungsfrist für installierte Systeme.

27 neue Quellenkörper gespeichert: 26 HTTP 200, eine 404; 20 HTML und sieben PDF.
Hash und extrahierter Text reproduziert. Zwei Tabellen auf der jeweils elften
Broschürenseite mit 14 Modellspalten, 14 Headerpositionen und 112 einzelnen
Koordinatenzellen geprüft; acht US-DL-Tabellen und Fußnoten ergeben insgesamt
205 konkrete Quellenbezüge. PDF-Texte und Positionen wurden geprüft, keine
visuelle PDF-/Bildprüfung oder unabhängige Leistung-/Zertifikatsprüfung behauptet.
Die 2024/2026-Ordnerdaten sind keine Modell-Erscheinungsjahre. Keine Formulare,
Bestellungen oder erneuten Zugriffe auf zuvor gesperrte Anbieter.

18 gerenderte Modellseiten: 288 Felder, 124 Quellenmarkierungen, 128 ausgelassene
Leerfelder, 106 strukturierte Eigenschaften, 85 Merkmalsätze und ein Firmenfokus
abgeglichen. Ein ursprünglicher Familien-Export trifft sechs CR-Ziele mit 96
Feldvorkommen; alle sechs Rechercheziele entsprechen dem Export. 18 unbekannte
Preise erzeugen keine Offers. Globaler Abgleich: 449 Modellseiten und 6699 Felder,
3300 sichtbare technische Werte mit Quellen,
2882 ausgelassene Leer-/NA-Felder und 27 belegte Startjahre.
Vergleichs-JSON 1662629 Byte; Katalogskript 1717075 Byte.

597 Unit-Tests in 46 Dateien und 100 Browserfälle bestanden: 48 FANUC-,
34 Carbon- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Build: 2921 Seiten, etwa 445 MB. Datenprüfung: null Fehler, 762 Hinweise;
zwölf zusätzliche unbekannte Erscheinungsjahre. Lint/Format der geänderten
Quelldateien und Tests bestanden; erneuter Import null Ergänzungen. Eigene
Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei, Ressourcen
anderer Aufgaben erhalten. Änderungen lokal; kein Commit, Push oder Deployment.

Gesamt: 1872 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
759 datierte Merkmalsdatensätze (617 neue/142 bestehende Modelle), 2963 Aussagen,
1186 Quellenreferenzen und 49 Firmenfokusse. 449 ausgewählte Modellprüfungen mit
6699 Feldern: 3256 dokumentiert, 3289 unbekannt, 145 widersprüchlich, neun Roadmap.
Von 518 ursprünglichen Referenzzielen haben jetzt 235 ausgewählte Feldprüfungen;
die offene Zahl sinkt von 289 auf 283. Drei Modellidentitäten, neun Listings und
862 BuyAndRent-Detailinhalte bleiben offen. Andere industrielle/historische
FANUC-Familien sind nicht vollständig geprüft. Vollständigkeit, exklusive USPs,
unabhängige Leistung und Marktführerschaft bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Smart Robotics, Systemgrenzen und Durchsatz (Batch 68)

Sechs bestehende Systeme/Konfigurationen anhand von neun frisch gespeicherten
Herstellerseiten geprüft: Smart Palletizer Essential, Advanced und Premium,
Smart Item Picker, Smart Depalletizer und Smart Mixed Case Palletizer.
96 ausgewählte Felder: 21 dokumentiert, 73 unbekannt, zwei widersprüchlich.
Ein Firmenfokus ergänzt; keine neue Modellkarte. Homepage, Produktnavigation,
Lagerautomatisierungs- und Palettierübersicht nennen die vier bestehenden Systeme.
Der Footer-Link parcel-picking leitet auf Smart Depalletizer um und begründet
keinen weiteren Roboter. Alle 1961 Quellenidentitäten, 1866 übrigen Katalogzeilen,
449 bisherigen Modellprüfungen und 49 Firmenfokusse erhalten.

Die gespeicherte HTML-Vergleichsmatrix wurde nach benannten Spalten und zehn
Zellen je Spalte abgeglichen. Fußflächen: 2,4 × 2,3 m / 2,4 × 2,75 m /
2,4 × 3,5 m; jeweils 3 m maximale Stapelhöhe. Produkte/Stapelmuster: 10 / 20 /
unbegrenzt. Essential ohne Multi-picks und offene Kartons; Advanced mit Multi-picks,
aber ohne offene Kartons; Premium mit beiden Funktionen. Die Check-/Disable-
Dateinamen in den HTML-Zellen liefern 15 Funktionszuordnungen; keine visuelle
Bildprüfung behauptet. Die Matrix nennt Zwischenlagen, OEE-Dashboard und
Installation in einem halben Tag; die Hardware-FAQ nennt Zwischenlageneinheit
und vertikalen Lift optional. Funktionsversprechen und endgültige Stückliste
bleiben deshalb getrennt. Die familienweiten 1600 Kartons/h und 30 kg werden
keiner der drei Konfigurationen als exakter Wert zugeordnet. Partnerarme von
Universal Robots/Doosan und unterschiedliche Greifer ergeben keine pauschal
eingeschlossene Armmasse, Achszahl oder Greiferausstattung.

Durchsatz ist als `throughput` getrennt von linearer Geschwindigkeit gespeichert;
`stackingHeight` ist getrennt von Anlagenabmessungen, Reichweite und Gabelhubhöhe.
Detailseite, Product-Eigenschaften und Vergleich zeigen Werte, Status und Quellen.
Englisch/Deutsch beschriftet; bestehende englische Rückfallregel für andere
Oberflächensprachen. Vier Quelldateien um genau zehn Einträge ergänzt; frühere
Arm-Wiederholgenauigkeit erhalten. Die zwei optionalen kommerziellen CSV-Spalten
bleiben außerhalb dieser sechs Systeme leer.

Smart Item Picker: bis 1000 Items/h, Barcode und Wiegen, WCS/WMS-/AutoStore-/ASRS-/
AMR-/Fördertechnik-Integration. Die Formulierung oberhalb 5 kg ist keine maximale
5-kg-Traglast; obere Grenze unbekannt. Smart Depalletizer: bis 1000 Produkte/h,
KI-Saugkreiswahl ohne SKU-Teaching, einzelne/gemischte SKUs auf Paletten sowie
in Käfigen/Behältern und konfigurierbare Cobot-/Industriearmhardware.

Smart Mixed Case Palletizer: bis 500 Items/h und dynamische Platzierung ohne
vorberechnete Stapelsequenzen. Zwei Herstellerkonflikte sichtbar: Produkt-FAQ
bis 30 kg, Palettierübersicht 30 kg und darüber; Stapelhöhe bis 2 m in FAQ,
über 2 m in Feature-Text und Übersicht. Keine größere Angabe still ausgewählt,
keine gleichzeitige Erreichbarkeit von Last- und Durchsatzmaxima behauptet.
Herstellerangaben sind keine unabhängig gemessenen oder exklusiven USPs.
Preise, Anlagenmasse, Strom-/Akkulaufzeit, IP-Schutz und Erscheinungsjahre bleiben
unbekannt, wo die Quellen keine exakte Systemangabe liefern.

Quellenkörper: neun HTTP 200, Hash und extrahierter Text reproduziert; 20 begrenzte
Aussagen und drei benannte Konfigurationsspalten geprüft. Keine Formulare,
Bestellungen oder erneuten Zugriffe auf zuvor gesperrte Anbieter.
Sechs gerenderte Modellseiten mit 96 Feldern,
17 Quellenmarkierungen, 67 ausgelassenen
Leerfeldern und 11 strukturierten Eigenschaften
abgeglichen. 30 Merkmalsätze und ein Firmenfokus geprüft. Export und Recherchequeue
behalten alle sechs Ziele. Globaler Abgleich: 455 Seiten, 6795 Felder,
3317 sichtbare technische Werte mit Quellen,
2949 ausgelassene Leer-/NA-Felder und 27 belegte Startjahre.
Vergleichs-JSON 1684840 Byte; Katalogskript 1732641 Byte.

608 Unit-Tests in 47 Dateien und 106 Browserfälle bestanden: 40 Smart-Robotics-,
48 FANUC- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Build: 2921 Seiten, etwa 446 MB. Datenprüfung: null Fehler, 762 Hinweise,
unverändert zum Vorlauf. Lint/Format bestanden; erneuter Import null Ergänzungen.
Eigene Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei,
Ressourcen anderer Aufgaben erhalten. Änderungen lokal.

Gesamt: 1872 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
759 datierte Merkmalsdatensätze (617 neue/142 bestehende Modelle), 2975 Aussagen,
1187 Quellenreferenzen und 50 Firmenfokusse. 455 ausgewählte Modellprüfungen mit
6795 Feldern: 3277 dokumentiert, 3362 unbekannt, 147 widersprüchlich, neun Roadmap.
Von 518 ursprünglichen Referenzzielen haben 241 ausgewählte Feldprüfungen;
die offene Zahl sinkt von 283 auf 277. Drei Modellidentitäten, neun Listings und
862 BuyAndRent-Detailinhalte bleiben offen. Vollständigkeit, exklusive USPs,
unabhängige Leistung und Marktführerschaft bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Capra und Hypershell, Modellgrenzen und Preisangaben (Batch 69)

Fünf Capra- und fünf bestehende Hypershell-Modelle geprüft; drei ausdrücklich
benannte Hypershell-Modelle ergänzt: X Ultra, X Carbon und X Pro, jeweils getrennt
von den S-Varianten. 13 Prüfungen, 224 Felder: 86 dokumentiert, 138 unbekannt.
Zwei Firmenfokusse ergänzt. Alle 1961 Quellenidentitäten, 1862 übrigen alten
Katalogzeilen, 455 bisherigen Modellprüfungen und 50 Firmenfokusse erhalten.
Keine Kategorieübertragung. SmartFleet bleibt Software; Anwendungsfälle und die
nummerierte Halo Origin Edition ohne gesondert belegte Hardware werden nicht
als weitere Roboterkarten gezählt.

CAPRA200: 50 kg mit zwei Akkus, 1125 × 600 × 373 mm, 50 kg auf dem Chassis und
200 kg Zuglast, 6 km/h, 465 mm Wenderadius, bis 20 Stunden Betrieb abhängig von
Untergrund, Steigung und Nutzlast. Tabelle erlaubt bis vier Akkus; die Laufzeit
ist nicht ausdrücklich mit der gewogenen Zwei-Akku-Konfiguration gepaart.
CAPRA500: 73,5 kg ohne ausdrückliche Akku-Einschlussangabe, 1145 × 635 × 356 mm,
100 kg Chassislast und 500 kg Zuglast, 6 km/h, 480 mm Wenderadius, bis 15 Stunden
unter Last-/Streckenbedingungen. Beide: 60 Minuten drahtlos nur von 20 auf 80
Prozent, kein Volladeversprechen; IP65 Basisplattform, bis 50 Prozent Steigung
und 140 mm Stufe mit Geometrie-/Lastbedingungen. 50 Prozent sind keine 50 Grad.
Unter −10 °C ist ein zusätzliches Heizelement erforderlich. Tabellenwerte und
Fußnoten in zehn Zeilen mit zwei benannten Modellspalten geprüft; Flyertext
bestätigt die Trennung von Trag- und Zuglast. Keine visuelle PDF-Prüfung behauptet.

Carrier nennt 100 kg Oberdecklast und 500 kg beladenen Wagen. Die Hero-Zahl
500 kg wird nicht als 500 kg Chassislast übernommen. Konfigurierte Lösungen
Carrier/Scout/Urban behalten ihre Zehn-Stunden-Positionierung und erben keine
20-/15-Stunden-Dauer, Masse, Geschwindigkeit oder Abmessungen der Basisplattform.
Urban nennt zwei Stunden Laden ohne Start-/Endladezustand. Scout nennt
360-Grad-Überwachung, autonome Patrouillen, Fernüberwachung und manuelle
Übernahme. Urban arbeitet je nach Einsatz autonom oder teilautonom. IP- und
Sicherheitskomponentenbehauptungen zertifizieren keine beliebigen Aufbauten
oder öffentlichen Einsätze unabhängig.

Hypershell: X Ultra S und X Max S mit bis 1000 W, 22 Nm und unterstütztem Tempo
bis 25 km/h; X Pro S bis 800 W, 18 Nm und 20 km/h. Das sind Unterstützungswerte
für Träger, keine autonome Fahrgeschwindigkeit oder Frachttraglast. Ultra S
nennt bis 30 km je Akku und zwei enthaltene Akkus; kein garantiertes 60-km-Ziel
und keine Umrechnung in Akkustunden. Pro S nennt 17,5 km Standardreichweite;
Max S hat keine eigene belegte Kilometerangabe im geprüften Text. 1,8 kg sind
im Juni-Text speziell für Ultra S genannt, ohne geklärten Akku-Einschluss und
ohne Übernahme auf Max S/Pro S. Die neuen Felder `assistPower`, `assistancePace`
und `assistanceRange` erscheinen mit Quellenstatus in Detail, strukturierten
Product-Eigenschaften und Vergleich, mit Englisch/Deutsch und bestehendem
englischen Rückfall für andere UI-Sprachen. Andere Outdoor-Datensätze bleiben
in diesen optionalen Spalten leer.

Halo: vier aktive Hüft-/Kniegelenke, bis 1490 W Spitzenleistung, 2,6 kg genannte
Systemmasse, 370 g PocketVolt-Akku und bis 20 km je Akku. Akku-Einschluss in der
Systemmasse bleibt ungeklärt; keine Addition/Subtraktion geraten. Vier Motoren
sind keine vollständige mechanische Freiheitsgradzählung. Faltvolumen unter acht
Litern sind keine vollständigen Außenmaße; 85-Liter-Rucksackkompatibilität ist
keine Nutzlast. Ankündigung vom 3. September 2026: erste 200 Origin-Edition-Geräte
ab 2299 USD vorbestellbar, offizielle Verkäufe und gestaffelte Lieferungen für
November 2026 geplant. Diese Ankündigung bestätigt keine erfolgten Lieferungen
oder aktuellen Lagerbestand am 2. November. Die im Mai angekündigte S-Modell-
AI-Agent-Firmware bleibt ein Zukunftsplan. Herstellerberichtete SGS-/TÜV-Werte,
Ermüdungs- und Schutzvorteile sind keine unabhängig geprüften Gesundheits- oder
Verletzungspräventionswirkungen.

Der Juni-Portfolio-Text benennt X Ultra, X Carbon, X Pro und X Go mit damaligen
MSRP-Werten von 1999/1799/1199/999 USD. Die Juni-23-bis-30-Aktion ist abgelaufen.
Exakte Masse, Ausgangsleistung, Tempo, Reichweite, IP und Erstveröffentlichung
werden nicht aus dem speziell Ultra S betreffenden Absatz oder einer allgemeinen
X-Serienbehauptung übernommen. Die direkte Hypershell-Seite lieferte einmal HTTP
429; weitere Abrufe gestoppt. Drei frische herstellereigene Pressemitteilungen
über PRNewswire liefern datierte Belege, keine unabhängige Berichterstattung
oder vollständige aktuelle Shop-/Lieferprüfung.

Preisverarbeitung korrigiert: Betragsextraktion hängt keine Datumsziffern mehr an
den Geldbetrag an; zum Beispiel 1999 USD mit dem Datum 20. Mai 2026 sortiert als
1999. Preisbereiche nutzen die untere Grenze. Strukturierte exakte Offers nur für
unqualifizierte positive Beträge mit konsistenter Währung. Historische MSRP,
Vorbestellungs-Startpreise, Aktionen, Schätzungen, Bereiche und andere qualifizierte
Texte bleiben lesbarer Katalogtext. Globaler Abgleich aller 1875 Produktseiten:
352 unqualifizierte Offers erhalten,
1523 qualifizierte/unbekannte Preise ohne Offer,
18 ausdrücklich erkannte qualifizierte Preise und alle acht
Hypershell-Preise ohne exaktes Offer. Dies verifiziert keine aktuellen Verkäufer-
preise oder Lagerbestände des gesamten Altbestands.

Zwölf gespeicherte Quellenkörper: elf HTTP 200 und ein 429; zehn HTML, ein PDF,
eine Rate-Limit-Antwort. Hashes und extrahierter Text reproduziert, 51 begrenzte
Aussagen bzw. exakte Modellzellen geprüft. Keine Formulare/Bestellungen oder
Wiederholungsabrufe zuvor gesperrter Hosts. 13 gerenderte Modellseiten:
224 Felder, 65 Quellenmarkierungen,
133 ausgelassene Leerfelder, 48
strukturierte Eigenschaften und 58 Merkmalsätze. Zwei Firmenfokusse,
zehn ursprüngliche Modell-/Rechercheziele mit 170 Feldvorkommen und drei
Firmenbeschreibung-Ziele geprüft. Global: 468 geprüfte Modellseiten mit 7019
Feldern, 3382 sichtbare technische Werte mit Quellen,
3082 ausgelassene Leer-/NA-Felder und 31 belegte Startjahre.
Vergleichs-JSON 1739445 Byte; Katalogskript 1749655 Byte.

627 Unit-Tests in 48 Dateien und 106 Browserfälle bestanden: 48 Capra/Hypershell-,
40 Smart-Robotics- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Build: 2924 Seiten, etwa 446 MB. Datenprüfung: null Fehler, 765 Hinweise,
drei zusätzliche unbekannte Erscheinungsjahre der neuen alten X-Modelle.
Lint/Format bestanden; erneuter Import null Ergänzungen. Eigene Testbrowser,
Vorschau und Hilfsprozesse geschlossen; Port 4321 frei, andere Aufgaben erhalten.
Änderungen lokal; kein Deployment.

Gesamt: 1875 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
762 datierte Merkmalsdatensätze (620 neue/142 bestehende Modelle), 3004 Aussagen,
1194 Quellenreferenzen und 52 Firmenfokusse. 468 ausgewählte Modellprüfungen mit
7019 Feldern: 3363 dokumentiert, 3500 unbekannt, 147 widersprüchlich, neun Roadmap.
Von 518 ursprünglichen Referenzzielen haben 251 ausgewählte Feldprüfungen;
die offene Zahl sinkt von 277 auf 267. Drei Modellidentitäten, neun Listings und
862 BuyAndRent-Detailinhalte bleiben offen. Vollständigkeit, exklusive USPs,
unabhängige Leistung und Marktführerschaft bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Omron und ECOVACS, Varianten und Quellenkonflikte (Batch 70)

Zehn vorhandene Modelle geprüft und zwölf ausdrücklich benannte Hardware-/ESD-
Varianten ergänzt: LD-60 ESD, LD-90 ESD, LD-90x ESD, LD-250 ESD, OL-450S2,
OL-450S3, MD-650, MD-900, HD-1500 sowie GOAT A3000/A2000/O1000 LiDAR PRO.
22 Prüfungen mit 392 Feldern: 218 dokumentiert, 166 unbekannt, acht widersprüchlich.
Zwei Firmenfokusse ergänzt. Alle 1865 übrigen alten Katalogzeilen, 468 bisherigen
Modellprüfungen, 52 Firmenfokusse und 1961 Quellenidentitäten bleiben erhalten.
Keine Kategorieübertragung oder neue CSV-Spalte. Software, Mast-/Dock-/Pendant-
Optionen und GOAT-Zubehörpakete werden nicht als weitere Robotermodelle gezählt.
Die vorhandene OL-450S-Familie bleibt zusätzlich zu ihren benannten Varianten.

LD: Die ESD-Ausführungen stehen ausdrücklich in der Bestelltabelle mit eigenen
Bestellidentitäten; IEC 61340-5-1 bleibt eine Hersteller-Complianceangabe.
LD-60/90/90x einschließlich ESD: 62 kg mit Akku; LD-250/ESD: 148 kg mit Akku.
Der Akku muss separat bestellt werden: Masseneinschluss bedeutet keinen
Lieferumfang. LD-90x ist für Cart-Transporter-Anwendungen benannt. Laufzeiten
behalten Leer-/Volllastbezug. Alle LD-Ladezeiten von 2 h 10 min beziehen sich nur
auf 20–80 Prozent. LD-90/90x bleiben bei Nennlast auf ebenem Boden; die gemeinsame
PDF erlaubt die 4,8-Grad-/8,3-Prozent-Steigung nur bis 60 kg. LD-250 nennt maximal
1,7 Grad/3 Prozent. IP20 gilt für den Roboter, nicht andere Komponentenratings.

OL: Die Webseite druckt 1,2 mm/s; das gemeinsame S2/S3-Datenblatt nennt 1200 mm/s
vorwärts/seitwärts und 300 mm/s rückwärts. Der Einheitenkonflikt bleibt sichtbar
bei Familie und beiden Varianten. Plattenhöhe 108–308 mm ergibt 200 mm Hubweg;
308 mm sind keine Hubstrecke. S2: 771-mm-Platte, 188 kg ohne Mast/201 kg mit Mast;
S3: 851-mm-Platte, 192/205 kg, jeweils mit Akku. Kein einzelnes Familiengewicht
gewählt. 450 kg Hubkapazität, etwa elf Stunden leer/sieben Stunden voll, 25 Minuten
Laden nur 20–80 Prozent. Flache trockene Innenböden, keine Stufen; 10-mm-Spalten
nicht oberhalb 750 mm/s. 750-mm-Wenderadius und 685-mm-Schwenkradius sind getrennt.

MD/HD: 650/900/1500 kg Last; MD 220 kg ohne Akku/Zubehör, HD 506 kg mit Akku.
MD-900-Webspalte lässt Volllastlaufzeit aus; die gemeinsame PDF-Laufzeitzeile
deckt beide MD-Spalten ausdrücklich mit zehn Stunden leer/acht Stunden voll ab.
Kein Kopieren aus der Nachbar-Webspalte. HD hat 12,5/neun Stunden. Hilfsverbrauch
beeinflusst die Dauer. Laden 19,6 beziehungsweise 24 Minuten nur 20–80 Prozent;
eine Full-charge-Webüberschrift ändert den gedruckten Ladebereich nicht. MD-IP22
benötigt eingesetzte Top-Plate-Plugs, Ladepads bleiben IP10; Akku-IP33 ist nicht
Chassis-IP. Null Wenderadius bedeutet keinen verschwindenden Schwenkraum.

ECOVACS Commercial: K1-Webseite nennt 1,5 h Laden, Vergleichstabelle zwei Stunden.
700 m²/h Maximum und 1296 m²/h theoretische Kapazität tragen unterschiedliche
Bezeichnungen; beide Werte samt ungeklärtem Testbezug bleiben erhalten. 440 mm
Reinigungsbreite, 300 mm Walzenbreite und 420 mm Gehäusebreite sind verschiedene
Maße. Zehn Liter Staubbehälter werden kein Wassertank/Nutzlastwert. M1/M1 3D:
500-mm-Walze, 2160 m²/h theoretisch, 35/33 Liter Frisch-/Schmutzwasser, 2,5 h Laden
ohne Ladezustandsbereich. M1 3D: 126,5 kg und 1050 mm Höhe, M1: 125 kg/1012 mm.
3D-LiDAR wird nicht vom 3D-Modell auf die Standardausführung übertragen.

GOAT A3000: Verlinktes GPL11-Handbuch nennt 16,4 kg mit Akku und
680 × 460 × 342,5 mm. US-Tabellenhöhe 13,39 Zoll entspricht etwa 340,1 mm;
Abweichung bleibt gekennzeichnet. Mähen 118 Minuten von 100 auf 15 Prozent oder
80 Minuten von 85 auf 15 Prozent; kein pauschales Zwei-Stunden-Versprechen.
45 ± 5 Minuten Laden ohne genannte Ladezustände. 400 m²/h Labor-Mährate ist von
500 m² je zwei Stunden einschließlich Laden getrennt. 33 cm Schnittbreite,
IPX6 Mäher/IPX4 Station. US-Hauptprodukt: 2999,99 USD, ausverkauft, beobachtet am
2. November 2026. Der sichtbare 999,99-USD-Selektor gehört zum O1000 RTK.

GOAT PRO: A3000 PRO mit 7500 mAh/70 Minuten Laden, A2000 PRO 3000 mAh/50 Minuten,
O1000 PRO 5200 mAh/70 Minuten. A3000-PRO-Laufzeitzelle 160 hat keine Zeiteinheit;
kein 160-Minuten-Wert übernommen. Massenzelle 18.3KG unter lb-Überschrift bleibt
Einheitenkonflikt; Hero-Steigung 15 Grad widerspricht der 50-Prozent-/27-Grad-
Tabelle. A2000 PRO nennt 50 Minuten Mähen, O1000 PRO 90 Minuten. Mäher und
Trimmerbreiten, Maße mit/ohne Bürste, Arbeitsflächen-/Grenzsteigung und Station
bleiben getrennt. Regionale Hauptproduktpreise 2499,99/1999,99/1499,99 USD wurden
am 2. November als vorrätig angezeigt, nicht universell oder dauerhaft garantiert.
Zubehörpakete sind keine zusätzlichen Hardwareidentitäten.

WINBOT: Roboter 1,6 ± 0,1 kg und 271 × 271 × 77 mm, Station 5,5 ± 0,2 kg und
312 × 215 × 327 mm. 110 Minuten ±10 Prozent Akku-Betrieb sind von 30 Minuten
Stromausfall-Haftschutz getrennt; Netzbetrieb möglich. Ladezeit höchstens drei
Stunden ohne Ladezustandsgrenzen. Fast-Mode-Flächenzeit 1 min 45 s ± 15 s/m² ist
keine lineare Fahrgeschwindigkeit. 60 ± 5 ml Wassertank sind keine 4500-mAh-
Akkukapazität. Glas mindestens 3 mm und 30 × 40 cm Fenster; Außenglas nur mit
ordnungsgemäßer Sicherung, ruhigem Wind und ohne Regen/Schnee laut Handbuch.
Kein IP-Wert erfunden. Hauptproduktpreis 499,99 USD, datiert als vorrätig;
538-USD-Paket ist ein anderer Selektor. Unbelegte alte Startjahre von WINBOT und
ursprünglichem A3000 entfernt statt aus dem PDF-Uploaddatum neu datiert.

23 gespeicherte Quellenkörper, alle HTTP 200: 17 HTML und sechs PDFs. Hashes und
Text reproduziert; 161 begrenzte Aussagen/Modellzellen, neun Omron-Modelltabellen,
drei kommerzielle ECOVACS-Modellspalten und 14 PDF-Tabellenseiten geprüft.
Keine Formulare/Bestellungen, keine erneut abgerufenen gesperrten Hosts und keine
visuelle Bild-/PDF-Prüfung oder unabhängige Leistungs-/Zertifizierungsbehauptung.
Weitere Omron-Industrieroboter und übrige ECOVACS-Modelle bleiben außerhalb dieser
abgegrenzten Prüfung. A2500 RTK aus Zubehörkompatibilität bleibt Recherchehinweis.

22 gerenderte Produktseiten: 392 Felder, 199 Quellenmarkierungen, 149 ausgelassene
Leerfelder, 177 strukturierte Eigenschaften und 130 Merkmalsätze geprüft.
Zwei Firmenfokusse, zwei ursprüngliche Modell-Exportziele mit 36 Feldvorkommen,
fünf Firmenproduktziele und zehn ursprüngliche Rechercheziele mit 179 Feldern.
Globaler Metadatenabgleich: 490 Modellseiten, 7411 Felder, davon
3581 sichtbare technische Werte mit Belegen,
3231 ausgelassene Leer-/NA-Felder und 31 belegte Startjahre.
Globaler Preisabgleich: alle 1887 Produktseiten, 350
unqualifizierte Offers erhalten, 1537 qualifizierte/unbekannte Preise
ohne Offer. Datierte regionale Beobachtungen bleiben lesbarer Text ohne universelles
exaktes Offer. Dies ist keine erneute Verkäuferpreisprüfung sämtlicher Altmodelle.

636 Unit-Tests in 49 Dateien und 106 Browserfälle bestanden: 40 neue
Omron/ECOVACS-, 48 Capra/Hypershell- und 18 Vergleichsfälle, darin 36 Axe-Prüfungen
auf Desktop/Mobil und hell/dunkel. Kein vollständiger Repository-Browserlauf.
Build 2936 Seiten, etwa 448 MB; Datenprüfung null Fehler und 779 Hinweise
(+12 unbekannte Erstjahre neuer Modelle, +2 entfernte unbelegte Altjahre).
Semantische HTML-Korrektur: Vergleichsleiste als beschriftetes Aside, Produktkopf
als vom H1 benannte Section. Die zusätzliche Axe-Best-Practice-Prüfung hatte
Inhalte außerhalb von Landmarken gefunden; diese Ursache ist behoben. Keine
Änderung der Daten-/Vergleichslogik. Format/Lint, erneuter Import ohne Ergänzungen,
Inventar-/Quellen-/Such-/Vergleichsprüfungen bestanden. Eigene Browser, Server und
Hilfsprozesse geschlossen; andere Aufgaben unverändert.

Gesamtstand: 1887 Modelle/Konfigurationen, 774 datierte Merkmalsdatensätze,
632 neue Modelle dieser Aufgabe und 142 vorhandene Anreicherungen. 3104 einzelne
Merkmalaussagen, 1221 Produktquellenverweise, 54 Firmenfokusse, 7411 Felder auf
490 Modellen: 3581 dokumentiert, 3666 unbekannt, 155 widersprüchlich, neun Roadmap.
518 ursprüngliche Rechercheziele haben Merkmalsbelege; 261 ausgewählte Feldprüfungen,
257 offen. 53 von 591 Quellen-Firmengruppen mit Fokus, 538 ohne. Offline-
Heuristik weiter 114 Modell-/elf Markensuchhinweise; keine bestätigten Lücken.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte offen.
Vollständige Produktverifikation und Marktführerschaft bleiben unbelegt.
Prüfdateien: `scratch/competitor-research/primary/batch-70/`.


## Ergänzung vom 2. November 2026 – Quasi Robotics und Tennant (Batch 71)

Zehn vorhandene Modelle geprüft, drei neue Tennant-Modelle ergänzt: X2 ROVR SCRUB,
X16 SWEEP und P1 VAC. 13 Modellprüfungen mit 237 Feldern: 123 dokumentiert,
104 unbekannt und zehn widersprüchlich. Zwei Firmenfokusse ergänzt. Alle 1877
übrigen bisherigen Katalogzeilen behalten ihre Werte, 490 vorherige Modellprüfungen,
54 Firmenfokusse und 1961 Quellenidentitäten bleiben erhalten. Die Cleaning-CSV
hat zusätzlich die optionale Spalte minAisleWidth; andere Zeilen erhalten dort nur
einen leeren Wert. Vorhandene Oberfläche und Vergleich unterstützen das Feld bereits.
Keine Änderung am Anwendungscode oder Kategorieübertragung. Docks, Software,
Akkus und Regalzubehör sind keine zusätzlichen Roboteridentitäten.

Quasi: Elf HTML-Tabellen mit fünf expliziten Modellspalten und gemeinsam markierten
Zellen sichern Mini, Standard, Large, PartPorter und Heavy ab. Mindestgangbreiten
0,76/0,9/1,2/1,5/1,2 m, unterschiedliche Ablagen und vorgeschlagene Gesamtlasten
bleiben modellbezogen. Gerundete lb/kg-Werte werden nicht als exakte Umrechnung
oder universelle Traglast behandelt. Erste vier Varianten: Differentialantrieb,
720 Wh und bis 16 Stunden; Heavy: Mecanum, 1440 Wh und bis 14 Stunden. Laden
etwa 60/90 Minuten bis 50 Prozent und 2,5/4 Stunden bis 100 Prozent ohne genannten
Anfangsladezustand. Wireless optional nur bei Large, PartPorter und Heavy;
Komponenten-IP20 ist kein Roboter-IP-Wert. Sensor-, E-Stop- und Stack-Light-Optionen
bleiben je Spalte getrennt. 46.500 m² Arbeitsbereich ist keine Stundenleistung.
Steigung ist lastabhängig: zehn Grad leer, ungefähr fünf Prozent halb und drei
Prozent voll beladen. Geschwindigkeit ist konfigurierbar, aber ohne numerisches
Maximum. Local-WebSocket und Cloud-REST haben unterschiedliche Voraussetzungen.
Kauf/RaaS nach Angebot; Stundenlohn- und ROI-Rechner sind keine Kaufpreise.

Tennant: Dedicated X4-/X6-Sheets geben 1860/6967 m² je Lösungstank an; die
X-Series-Broschüre nennt separat 1860/1914 m² je Stunde theoretisch im manuellen
Modus. Keine Umdeutung zu autonomer Stundenleistung. X4-Länge 960 mm steht
940 mm in der X-Series-Broschüre gegenüber. X2-Datenblatt: 10.000 ft²/929 m²
je Tank; X-Series druckt theoretisch manuell je Stunde 10.000 ft²/1929 m², deren
Umrechnung nicht stimmt. Konflikt bleibt sichtbar. X2-Maße und Tankvolumen tragen
die dokumentierte Präzision sowie die Rundungen anderer Broschüren; Navigation,
90-Grad-Einfahrt und U-Turn unter 762 mm sind keine exakt festgelegte Mindestbreite.
Herstellerankündigungen belegen X4 2024, X6 2025 und X2 2026.

T380AMR-/T7AMR-Broschüren nennen Lithiumlaufzeiten bis fünf/6,5 Stunden; gemeinsames
März-2022-Sheet vier/sechs Stunden. Beide Broschüren tragen Februar-2022-Stände;
daraus folgt keine bewiesene spätere Aufrüstung. T380 nennt selbst 385 und 386 kg
für dieselben 850 lb. T7-Flächenangabe ohne Zeitintervall bleibt ohne Stundenwert.
T16: vier/5,5 Stunden Economy-Mode sind nicht die beworbenen bis 13 Reinigungsstunden
innerhalb eines 24-Stunden-Zyklus. Vier Stunden Laden gelten nur für Lithium mit
High-Capacity-Offboard-Lader, ohne angegebene Ladezustandsgrenzen. 635-kg-Lithium-
Konfiguration wird mit 11,5 beziehungsweise 12,2 kWh gekoppelt; Quellenkonflikt bleibt.
Autonome und manuelle Fahrgeschwindigkeiten, Betrieb-/Transportsteigungen sowie
Passage, Einfahrt und U-Turn bleiben getrennt. Unbelegtes T380-Startjahr entfernt.

X16 SWEEP: 4621 m²/h autonom gegenüber 9777 m²/h manuell; 150 L/158 kg beziehen
sich auf trockenen Hopperinhalt. Gangbreite web 1400 mm versus PDF/Broschüre 1440 mm
und bis sechs Stunden web versus mehr als sechs Stunden Eco im PDF bleiben
widersprüchlich. P1 VAC: bis 3,5 Stunden Standardmodus, 1,5 Stunden Laden ohne
Zustandsgrenzen, 700 m²/h ohne Seitenbürste. 440-mm-Arbeitsbreite mit Seitenbürste
ist von der 279-mm-Hauptbürste getrennt. Web 46 kg und 558×420×592 mm weichen von
44,7 kg und 558×425×608 mm in der Spezifikation ab. Staubbehälter, Auffangschale,
Ladegerät und Roboter bleiben getrennt; kein Wasser-, Nutzlast- oder achtstündiger
Laufzeitwert erfunden. Erstjahre von P1 und X16 nicht aus PDF-Revisionen abgeleitet.

51 gespeicherte Quellenkörper, alle HTTP 200: 26 HTML, 17 PDFs und acht regionale
Hersteller-Dokument-APIs. Hashes und Text reproduziert; 406 begrenzte Text-/Zellbelege,
elf Quasi-Tabellen und 35 PDF-Textseiten erfasst. Keine Formulare, keine erneut
abgerufenen gesperrten Hosts, keine visuelle PDF-/Bildprüfung und keine unabhängigen
Leistungs-, Exklusivitäts- oder Zertifizierungsnachweise.

13 gerenderte Produktseiten: 237 Felder, 120 Quellenmarkierungen, 91 ausgelassene
Leerfelder, 104 strukturierte Eigenschaften und 90 Merkmalsätze geprüft. Zwei
Firmenfokusse, vier ursprüngliche Modell-Exportziele mit 68 Feldvorkommen, zehn
Firmenproduktziele und zehn ursprüngliche Rechercheziele mit 180 Feldern geprüft.
Globaler Abgleich: 503 Modellseiten, 7648 Feldwerte, 3701 sichtbare technische Werte
mit Quellenstatus, 3322 ausgelassene Leer-/NA-Felder und 34 belegte Startjahre.
Alle 1890 Preis-Ausgaben geprüft: 350 unqualifizierte Offers, 1540 qualifizierte oder
unbekannte Preise ohne Offer. Keine erneute Verkäuferpreisprüfung aller Altmodelle.

643 Unit-Tests in 50 Dateien und 96 Browserfälle bestanden: 38 neue Quasi/Tennant-,
40 Omron/ECOVACS- und 18 Vergleichsfälle, darin 36 Axe-Prüfungen auf Desktop/Mobil,
hell/dunkel. Erster Lauf: 92 bestanden, vier Testannahmen fehlgeschlagen. Suchtest auf einen
reinen Merkmalsbegriff und Vergleichstest auf tatsächliche Spaltenüberschriften
sowie lokalisierte Dezimalzeichen korrigiert; alle vier gezielt nachgeprüften
Fälle bestanden. Keine Anwendungskorrektur dafür nötig. Kein vollständiger
Repository-Browserlauf. Build 2939 Seiten, etwa
449 MB; Datenprüfung null Fehler, 782 Hinweise (+2 neue unbekannte Erstjahre,
+1 entferntes unbelegtes Altjahr). Format/Lint, Import ohne Ergänzungen und
Inventar-/Quellen-/Such-/Vergleichsprüfungen bestanden. Eigene Testprozesse und
Server geschlossen und überprüft; andere Aufgaben unverändert.

Gesamtstand: 1890 Modelle/Konfigurationen, 777 datierte Merkmalsdatensätze,
635 neue Modelle dieser Aufgabe, 142 vorhandene Anreicherungen, 3164 einzelne
Merkmalaussagen, 1257 Produktquellenverweise und 56 Firmenfokusse. 7648 Felder auf
503 Modellen: 3704 dokumentiert, 3770 unbekannt, 165 widersprüchlich, neun Roadmap.
518 ursprüngliche Rechercheziele mit Merkmalsbelegen, 271 mit ausgewählten
Feldprüfungen, 247 offen. 55 von 591 Quellen-Firmengruppen mit Fokus, 536 ohne.
Offline-Heuristik weiterhin 114 Modell-/elf Markensuchhinweise, keine bestätigten
Lücken. Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte
bleiben offen. Vollständige Produktverifikation und Marktführerschaft unbelegt.
Prüfdateien: `scratch/competitor-research/primary/batch-71/`.


## Ergänzung vom 2. November 2026 – Cleanfix und EZ-Robot (Batch 72)

Acht vorhandene Modelle mit 13 neuen Prüfungen und 231 Feldern bearbeitet:
102 dokumentiert, 125 unbekannt, vier widersprüchlich. Fünf neue Produktidentitäten:
RA660 Navi XL Generation 2, EZ-InMoov Enhanced Robot Head, EZ-InMoov Humanoid Robot
(Hardware Kit), AdventureBot und Battle Flipper. JD Humanoid war eine originale
Dublette zu JD mit derselben Herstellerseite/SKU KI-0100. Alte Bilddatei zu JD
übernommen; alte URL führt per noindex-Weiterleitung mit kanonischem Ziel zu JD.
Favoriten und Vergleichsauswahlen werden über die bestehende Aliaslogik migriert
und dedupliziert. Alte URL bleibt aus Sitemaps; Markenprofil zeigt eine JD-Karte.
Keine Änderung des Anwendungsalgorithmus. Die Educational-CSV erhält die bereits
von Detailseite/Vergleich unterstützte optionale driveMode-Spalte.

Alle 1881 übrigen bisherigen Katalogzeilen behalten ihre Werte; 503 frühere
Modellprüfungen, 56 Firmenfokusse und 1961 Quellenidentitäten bleiben erhalten.
Zwei neue Firmenfokusse. Fünf Ergänzungen minus eine Dublette ergeben vier
zusätzliche Katalogeinträge. Ausgangsbestand bereinigt 1254 plus 640 Ergänzungen
während dieser Aufgabe ergibt 1894 Modelle/Konfigurationen. Keine neue Roboterkarte
für Controller-Developer-Kit, zwei Umbausätze, Softwarepakete oder Classroom-Bundles.

Cleanfix: Pure/Connect bleiben getrennt; iPad-App und Berichte sind Connect-spezifisch.
Optionaler Lithium-/120-Ah-Akku und Fast Charging werden nicht als universelle
Standardausstattung präsentiert. 40 Minuten bis 80 Prozent und 60 bis 100 Prozent
nennen keinen Anfangsladezustand. M- und XL-Membrantanks teilen Frisch-/Schmutz-
volumen; 45/45 beziehungsweise 110/110 Liter sind keine unabhängigen 90/220 Liter.
Mai-2025-XL-Konfiguration: 313 kg mit Wasser, 1010×850×1185 mm, 0,6 m/s. Explizit
benannte Generation 2: 1015×850×1100 mm, 215 kg mit Akku ohne Wasser auf der Webseite
und 315 kg mit Wasser im Flyer. Unterschiedliche Massenzustände sind kein Konflikt.
Web-Speedzelle 08. m/s bleibt als missgebildete Angabe sichtbar neben 0,8 m/s im
Gen.-2-Flyer. 24/7-Dockbetrieb ist kein kontinuierlicher Akkulaufzeitnachweis.

S170: 170-mm-Hauptwalze, 275 mm mit Seitenbürste, bis 250 Minuten. Ladewerte
5,5–6 Stunden auf Webseite/Flyer versus höchstens 5,5 im Juli-2024-Handbuch bleiben
widersprüchlich. Ramp-slope-Zeile mit 20 mm wird weder als Grad noch als bewiesene
Stufenhöhe umgedeutet. 320 m² ohne Zeitintervall bleibt ohne Stundenleistung;
Empfehlungen 20–300/320 m² behalten ihre Quellen. 0,28-L-Staubbehälter und 2,5-L-
Stationsbeutel sind keine Wassertanks. SIM-Nutzung braucht laut Handbuch ein
bezahltes FieldBots-OS-Abo. Indoor-Trockenreinigung, kein industrielles Umfeld,
keine nassen/gefährlichen Stoffe laut Handbuch. UVC-/Cybersecurity-Aussagen bleiben
Herstellerangaben ohne unabhängigen Wirksamkeitsnachweis.

EZ-Robot: Produktmassen und L×B×H bleiben getrennt von Versandwerten. Six nennt
zwölf Gelenke/zwölf Hebelservos; andere Servo- und Controllerkanalzahlen liefern
keinen pauschalen DOF-Wert. Servodrehmoment/Gradgeschwindigkeit sind weder Nutzlast
noch lineare Fahrgeschwindigkeit. JD-Altersangabe 10+ ersetzt keine allgemeine
Kit-Altersgrenze; 16 DOF und 2014 aus der alten Dublette werden nicht übernommen.
AdventureBot und Battle Flipper unterscheiden sich durch Mechanik und 0,71/0,79 kg.

InMoov-Kits benötigen selbst gedruckte Kunststoffteile. Standardkopf: vier Servos,
LiPo/USB-Lader, 1,25 kg zusammengebaut. Enhanced: fünf schwere plus zwei Mikroservos,
zusätzliche Halsbewegung/Faseroptik, 7,5-V-Netzteil und 1,75 kg. Enhanced-Höhe 33 cm
und 12,1 Zoll stimmen nicht überein und bleiben markiert. Torso/Kopf-Hardwarekit
ist kein fertig montierter laufender Ganzkörperroboter; eigene Masse, Maße und
Gelenkzahl bleiben unbekannt statt von verwandten Produktkarten übernommen.
Ein Jahr ARC Pro ist Softwareumfang, keine weitere Hardwareversion. Beobachtete
USD-Einzelpreise und Kopf-Optionsspannen sind auf den 2. November datiert und mit
Listinglabel Unavailable versehen; keine universellen exakten Offers. Die
2026-Preisliste rundet Dollarwerte; Paket-/Zubehörpreise bleiben getrennt.

31 nutzbare gespeicherte Quellenkörper: 21 HTML, zehn PDFs. Hashes und extrahierter
Text reproduziert, 27 begrenzte Text-/Modellbelege. Archivierte PDF-Textseiten sind
keine visuell geprüften Seiten; die weitgehend gescannte EZ-Broschüre liefert nur
elf Textzeichen und wird nicht für Produktbehauptungen genutzt. Neue 403-Sperre
auf cleanfix-robotics.com beobachtet und weitere Anfragen dort gestoppt; öffentliche
Herstellerunterlagen unter cleanfix.com genutzt. Keine früher gesperrten Hosts
erneut abgerufen, keine Formulare, keine visuelle Bild-/PDF-Prüfung.

13 gerenderte Produktseiten: 231 Felder, 86 Quellenmarkierungen, 119 ausgelassene
Leerfelder, 68 strukturierte Eigenschaften und 76 Merkmalsätze geprüft. Zwei
Firmenfokusse; vier ursprüngliche Modell-Exportziele mit 76 Feldvorkommen und acht
ursprüngliche Rechercheziele mit 144 Feldern. Globaler Metadatenabgleich: 516
Modellseiten/7879 Felder, 3787 sichtbare technische Werte,
3441 ausgelassene Leer-/NA-Felder und 34 belegte Startjahre. Alle 1894
Preis-Ausgaben geprüft: 350 unqualifizierte Offers, 1544 ohne Offer. Kein erneuter
Verkäuferpreischeck aller Altmodelle. 653 Unit-Tests in 51 Dateien und 94 Browserfälle
bestanden: 38 neue Cleanfix/EZ-, 38 Quasi/Tennant- und 18 Vergleichsfälle, darin 36
Axe-Prüfungen auf Desktop/Mobil, hell/dunkel. Build 2943 Seiten, etwa 450 MB;
Datenprüfung null Fehler/787 Hinweise, fünf neue unbekannte Erstjahre. Anfangs
falsche Unterfilter-Tags neuer Kits korrigiert und Generationsbezeichnung außerhalb
von Klammern geführt, damit der vorhandene Dublettencheck sie erhält. Format/Lint,
Import ohne Ergänzungen, Daten-/Quellen-/Such-/Vergleichs-/Identitätschecks bestanden.
Eigene Testprozesse/Server geschlossen und geprüft; andere Aufgaben unverändert.

Gesamtstand: 1894 Modelle/Konfigurationen, 782 datierte Merkmalsdatensätze,
640 Ergänzungen dieser Aufgabe und 142 bestehende Anreicherungen. 3216 einzelne
Merkmalaussagen, 1282 Produktquellenverweise und 58 Firmenfokusse. 7879 Felder auf
516 Modellen: 3806 dokumentiert, 3895 unbekannt, 169 widersprüchlich, neun Roadmap.
518 ursprüngliche Rechercheziele mit Merkmalsbelegen; 279 mit Feldprüfung und
239 offen. 57 von 591 Quellen-Firmengruppen mit Fokus. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Offline-Heuristik
weiter 114 Modell-/elf Markensuchhinweise, keine bestätigten Lücken. Vollständige
Produktverifikation und Marktführerschaft bleiben unbelegt.
Prüfdateien: `scratch/competitor-research/primary/batch-72/`.


## Ergänzung vom 2. November 2026 – DJI und HWArobotics (Batch 73)

Acht vorhandene Modelle geprüft und vier benannte Produkte ergänzt: DJI Mavic 3 Pro
Cine sowie HWArobotics FPSS1500A, FPSS1500B und GTR200. Zwölf neue Prüfungen umfassen
225 Felder: 91 dokumentiert, 131 unbekannt und drei widersprüchlich. Zwei neue
Firmenfokusse. Alle 1886 übrigen Katalogzeilen, 516 vorherigen Modellprüfungen,
58 Firmenfokusse und 1961 Quellenidentitäten bleiben erhalten. Keine Änderungen
am Anwendungsalgorithmus, an CSV-Spalten oder an Modell-Aliassen.

DJI: Die Mini 4 Pro erreicht laut Hersteller 34 Minuten mit Standardakku oder
45 Minuten mit Plus-Akku; Plus ist auf der geprüften Seite in Europa nicht
verfügbar und erhöht die Masse über 249 g. Flug, Schweben, Funkreichweite und
Flugdistanz behalten ihre unterschiedlichen Testbedingungen. Startmasse liefert
weder maximal zulässige Startmasse noch Nutzlast. Mavic Standard mit 958 g und
8 GB bleibt getrennt von Cine mit 963 g, 1 TB und Apple ProRes auf drei Kameras.
Fly More und Premium sind Zubehörpakete. Air 3S mit 27 m/s benötigt äquivalent
6 m/s Rückenwind, EU-Grenze 19 m/s; Flip mit 16 m/s benötigt 4 m/s Rückenwind,
Tracking bleibt bei 12 m/s. Ladezeiten behalten Ladegerät/Hub, Akkuzahl und
sequentielles/paralleles Laden; nur Flip nennt ausdrücklich 0–100 Prozent.
Dreiachsige Kamerastabilisierung ist keine Gesamtroboter-DOF-Zahl.

HWA: Ladeeinheit, Shuttle, Lift und vollständiges Regalsystem bleiben getrennt.
SLS300/400 nennen 35 kg Nennlast und 50 kg Maximum; SLS500 nennt 3–20 kg,
SLS600 35/50 kg. Die 2500 beziehungsweise mindestens 1000 Behälter pro Stunde
sind Single-Aisle-Compound-Systemraten; SLS400 behält die Fußnote mit 10 m Höhe
und 50 m Regallänge. SLS500 nennt mindestens 540 pro Stunde für einen Eingang.
Behältermaße sind keine Chassisabmessungen; 70 kg Güterlift und über 160 kg
Shuttle-plus-Tote-Lift sind andere Module. SLS300/400 behalten 4 m/s aus ihren
benannten Datenblättern, SLS500 bleibt ohne eigene Geschwindigkeitsangabe.
SLS600 behält die gedruckten Ungleichungen trotz Maximum-Überschriften.
24-Stunden-Systembetrieb belegt keine Laufzeit einer Akkuladung.

Die aktuellen Tote-Webseiten heißen SLS900 Standard, Variable, Buffer & Sort
und 4-Way, verlinken jedoch ältere SLS300/400/500/600-Datenblätter. Umbenennung
und Hardwarekontinuität sind ungeklärt. Abweichende aktuelle Geschwindigkeiten,
Behältergrenzen und Laufzeitaussagen werden nicht auf ältere Modelle übertragen.
Keine zusätzlichen SLS900-Karten oder behaupteten Aliasse angelegt.

FPSS1500A ist für −10 bis 50 °C, B für −25 bis 50 °C beschrieben. Das Shuttle
misst 1172 × 960 × 125 mm bei 350 kg Eigengewicht und 1500 kg Palettenlast.
1200 × 1000 mm ist das Palettenformat, 2000 kg die separate Hubwerkskapazität.
35 mm Shuttle-Hub in drei Sekunden ist nicht die 22 m Regallagerhöhe. Acht
Stunden pro Ladung bleiben getrennt von mehrtägigem Betrieb mit Nachladen;
die B-FAQ nennt zusätzlich 72 Stunden ohne klare Ladeabgrenzung und bleibt
als Konflikt markiert. Headline-Maximum 2 m/s versus Tabelle ≥2 m/s bleibt bei
beiden Varianten sichtbar. ±3 mm ist Shuttle-Positionierung. Keine IP-Klasse,
Ladezeit oder DOF aus Räderzahl abgeleitet. GTR200 ist eine kameragestützte
Roboter-Pickstation laut archivierter Herstellerbroschüre; PSD310/PSS105 sind
menschliche Arbeitsstationen, MFC ist Software. Keine fremden Arm-/Greiferwerte,
Projekt-Tagesraten oder Akku-Laufzeiten übernommen. Aktuelle Lieferung und genaue
Konfiguration bleiben unbestätigt.

25 gespeicherte Quellenkörper: 17 HTML und acht PDFs. Hashes und Text reproduziert,
21 begrenzte Textbelege sowie 63 PDF-Textseiten mit Koordinaten archiviert.
Keine visuelle Bild-/PDF-Prüfung, Formulare oder erneuten Abrufe gesperrter Hosts.
Zwölf gerenderte Modellseiten mit 225 Feldern, 82 Quellenmarkierungen, 119
Leerfeldauslassungen, 70 strukturierten Eigenschaften und 65 Merkmalsätzen geprüft.
Zwei Fokus-Seiten; vier ursprüngliche Modell-Exportziele mit 80 Feldern, vier
Firmenbeschreibungsziele und acht Rechercheziele mit 148 Feldern. Globaler Abgleich
von 528 Modellseiten/8104 Feldern: 3869 sichtbare Werte mit Quellen, 3560 ausgelassene
Leer-/NA-Felder und 34 belegte Erstjahre. Alle 1898 strukturierten Preisausgaben
geprüft: 350 Offers und 1548 ohne Offer; kein erneuter Verkäuferpreischeck aller
Altmodelle. 661 Unit-Tests in 52 Dateien und 94 Browserfälle bestanden: 38 neue
DJI/HWA-, 38 Cleanfix/EZ- und 18 Vergleichsfälle, darin 36 Axe-Prüfungen auf Desktop
und Mobil in hell/dunkel. Build: 2947 Seiten, etwa 450 MB. Datenprüfung: null
Fehler und 791 Hinweise, vier zusätzliche unbekannte Erstjahre. Der erste Testlauf
hatte nur einen veralteten globalen Konfliktzähler; nach Aktualisierung von 169
auf 172 bestehen alle 661 Fälle. Format, Lint, Bestands-/Quellen-/Vergleichschecks
und Import ohne Ergänzungen bestanden. Alle 159 eigenen Testprozesse beendet,
Serverport frei, keine eigenen Recherche-Hilfsprozesse; andere Aufgaben erhalten.

Gesamtstand: 1898 Modelle/Konfigurationen, 786 datierte Merkmalssätze, 644 Ergänzungen
und 142 bestehende Anreicherungen. Bereinigte Ausgangsbasis weiterhin 1254 nach
der früheren JD-Dubletten-Korrektur. 3257 einzelne Merkmalaussagen, 1299 Produkt-
quellenverweise und 60 Firmenfokusse. 8104 Felder auf 528 Modellen: 3897 dokumentiert,
4026 unbekannt, 172 widersprüchlich und neun Roadmap. Alle 518 ursprünglichen
Rechercheziele haben Merkmalsbelege; 287 haben Feldprüfungen, 231 sind offen.
59 von 591 Quellengruppen haben einen Firmenfokus. Drei ursprüngliche Modell-
identitäten, neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen;
dazu die SLS900-Namens-/Hardwarezuordnung. Die Heuristik bleibt bei 114 Modell-
und elf Markensuchhinweisen. Vollständige Herstellerverifikation und Marktführung
bleiben unbelegt. Prüfdateien: `scratch/competitor-research/primary/batch-73/`.


## Ergänzung vom 2. November 2026 – GreyOrange und KUKA (Batch 74)

Acht vorhandene Modelle geprüft und sieben benannte iisy-Varianten ergänzt:
LBR iisy 3 R760, 6 R1300, 8 R930, 11 R1300, 11 R1300 CR, 15 R930 und 15 R930 CR.
15 neue Prüfungen mit 275 Feldern: 114 dokumentiert, 160 unbekannt und ein Konflikt.
Zwei neue Firmenfokusse. Alle 1890 übrigen Katalogzeilen, 528 vorherigen
Modellprüfungen, 60 Firmenfokusse und 1961 Quellenidentitäten erhalten. Keine
Anwendungsänderungen, neuen CSV-Spalten oder behaupteten Modell-Aliasse.

GreyOrange: Uplift-L nennt 1000 kg und 2 m/s; Elevate 1400 kg und 1,50 m/s.
AnyPallet hat bis 2000 kg, XXL bis 2500 kg, beide 1,4 m/s beladen beziehungsweise
1,7 m/s unbeladen. Elevate nimmt geschlossene Paletten erhöht auf, AnyPallet
auch vom Boden. XXL nennt 2450 mm Gabeln; horizontale Gabellänge ist keine
Hubhöhe. Eigene Modellmaße bleiben getrennt von Gangbreite und Wenderadius.
Uplift-L druckt 1280 mm Länge und zugleich 51,2 Zoll; letzteres entspricht
1300,48 mm. Beide Angaben und der Konflikt bleiben sichtbar. Masse, Akku-/Lade-
dauer, IP-Code, Fahrwerkskinematik, Abstände und numerische Hubhöhen bleiben
unbelegt statt von anderen Modellen abgeleitet.

GreyMatter ist Software zur Orchestrierung; CRN umfasst ausdrücklich Hardware
von Drittanbietern. Die Ranger-Markenbezeichnung belegt nicht, wer jedes Chassis
fertigt. Sodimac mit 63 AMRs und 4000 Paletten pro Tag ist ein Einsatzbericht zum
Flottenbetrieb, keine einzelne Roboterleistung. Einsparung, Implementierungszeit
und ROI bleiben nicht unabhängig geprüfte Anbieterclaims mit Anwendungskontext.

KUKA: iiwa hat sieben Achsen und Sunrise Cabinet; iisy sechs Achsen mit aktueller
iiQKA.OS2-Plattform und KR C5 micro-2 laut benannter Webzeile. Standard-iiwa:
7 R800 mit 23,9 kg und ±0,1 mm Wiederholgenauigkeit; 14 R820 mit 29,9 kg und
±0,15 mm. Die Tabelle und Broschüre beschränken ihre Daten auf Standardversionen.
CR-Masse und -Wiederholgenauigkeit bleiben daher offen. iiwa-CR-Webzeilen nennen
nur Bodenmontage, Standard zusätzlich Wand/Decke. 800/820 mm Reichweite ist keine
komplette dreidimensionale Körperabmessung; ±2 Prozent Drehmomentgenauigkeit ist
keine kartesische Positioniergenauigkeit oder Nutzlastreserve.

iisy 3 R760 hat IP30 und 22,8 kg; größere Varianten IP54. Standard 6/11 R1300
haben 46,3 kg, 8/15 R930 43,2 kg. Standard-Wiederholgenauigkeit ±0,1 mm beim
3-kg-Modell und ±0,05 mm bei den größeren. Die eigenen CR-Zeilen für 11 und 15 kg
belegen Identität, Last, Reichweite, IP und Montage; Standardmassen und -präzision
werden nicht übernommen. Familienangaben zu optionaler ISO-Klasse 3 und ESD sind
keine individuellen Anwendungszertifikate. IP, Reinraumklasse und sichere
Kollaboration sind verschiedene Eigenschaften. Werkzeug, Medienflansch und
Softwarepakete werden nicht zu enthaltenen Händen oder zusätzlichen Robotern.
Kein garantierter schutzzaunfreier Einsatz und keine unabhängige Sicherheits-
oder Exklusivitätsprüfung. KMR iisy-2 sowie Education-Zellen/-Kits aus dem großen
Portfolio sind mit Seitenverweisen als gesondert zu prüfende Integrationsleads
festgehalten; nicht pauschal importiert.

Neun nutzbare Quellenkörper: sieben HTML und zwei PDFs. Zwei zunächst vermutete
PDF-Adressen lieferten allgemeines Fehler-HTML mit HTTP 200 und wurden
semantisch ausgeschlossen. Byte-Hashes und Text reproduziert, 13 exakte Textanker,
begrenzte Modellblöcke und acht PDF-Textseiten mit Koordinaten archiviert. Der
102-seitige Gesamtkatalog ist vollständig gespeichert, fünf ausgewählte Seiten
fließen in den Textbeleg ein. Keine visuelle Bild-/PDF-Prüfung, Formulare oder
erneuten Abrufe früher gesperrter Hosts.

15 gerenderte Modellseiten mit 275 Feldern, 100 Quellenmarkierungen, 145
Leerfeldauslassungen, 85 strukturierten Eigenschaften und 86 Merkmalsätzen geprüft.
Zwei Fokus-Seiten; ein ursprünglicher Modell-Export mit vier Zielmodellen/68
Feldern und acht Rechercheziele/156 Felder. Global 543
Modellseiten mit 8379 Feldern geprüft:
3969 sichtbare Werte samt Quellen,
3705 ausgelassene Leer-/NA-Felder und 34 belegte Erstjahre.
Alle 1905 strukturierten Preisausgaben geprüft: 350 Offers und 1555 ohne Offer;
kein erneuter Verkäuferpreischeck aller Altmodelle. 669 Unit-Tests in 53 Dateien
und 94 Browserfälle bestanden: 38 neue GreyOrange/KUKA-, 38 DJI/HWA- und 18
Vergleichsfälle, darin 36 Axe-Prüfungen auf Desktop/Mobil in hell/dunkel. Build:
2954 Seiten, etwa 452 MB. Datenprüfung: null Fehler und 798 Hinweise, sieben
zusätzliche unbekannte Erstjahre. Format, Lint, Import ohne Ergänzungen und
Bestands-/Quellen-/Vergleichschecks bestanden. Alle 159 eigenen Testprozesse beendet,
Serverport frei; keine eigenen Recherche-Hilfsprozesse, andere Aufgaben erhalten.

Gesamtstand: 1905 Modelle/Konfigurationen, 793 datierte Merkmalssätze, 651 Ergänzungen
und 142 bestehende Anreicherungen. Bereinigte Ausgangsbasis weiterhin 1254 nach
der früheren JD-Dubletten-Korrektur. 3319 einzelne Merkmalaussagen, 1329 Produkt-
quellenverweise und 62 Firmenfokusse. 8379 Felder auf 543 Modellen: 4011 dokumentiert,
4186 unbekannt, 173 widersprüchlich und neun Roadmap. Alle 518 ursprünglichen
Rechercheziele mit Merkmalen; 295 mit Feldprüfungen und 223 offen. 61 von 591
Quellengruppen haben einen Firmenfokus. Drei ursprüngliche Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Heuristik weiter
114 Modell- und elf Markensuchhinweise. Frühere offene Herstellerzuordnungen und
neue Integrationsleads bleiben erhalten. Vollständigkeit und Marktführung sind
weiter unbelegt. Prüfdateien: `scratch/competitor-research/primary/batch-74/`.


## Ergänzung vom 2. November 2026 – VideoRay und Standard Bots (Batch 75)

Acht vorhandene Modelle geprüft: VideoRay Defender, Pro 5, Ally und Wraith;
Standard Bots Spark, Core, Thor und Bolt. 131 neue Feldprüfungen: 65 dokumentiert,
58 unbekannt, sechs widersprüchlich und zwei Roadmap-Angaben. Zwei Firmenfokusse.
Keine neue Modellidentität, Kategorie oder CSV-Spalte. Alle 1897 übrigen Zeilen,
543 vorherigen Modellprüfungen, 62 Firmenfokusse und 1961 Quellenidentitäten erhalten.

VideoRay: Bewegungsachsen sind nicht Thruster oder die neun IMU-Sensorachsen.
Pro 5 hat drei, Ally vier, Defender und Wraith sechs kontrollierte Freiheitsgrade.
Der Herstellervergleich benennt Erstjahre 2019, 2024, 2017 und 2025 ausdrücklich.
Pro 5 nennt im Datenblatt 11,8 kg und 300 m, auf der Produktseite 10 kg und 305 m;
auch 4,4 versus über 4,4 Knoten bleibt als Quellenabweichung sichtbar. Wraith:
2026-Vergleich 4,3 Knoten und getrennt 1,0 m/s Heave/2,0 m/s Transit; Datenblatt
Version 250826: 4,2 Knoten und 1,5 m/s vertikal. Piloting-Manipulatorlasten
1,4/10,0/9,5/36,3 kg bleiben getrennt von Schub, Pollerzug und >100 lb Bergung.
Defender 300 m Standard sowie 1000/4000-m-Konfigurationen sind keine einheitliche
Standardtauchtiefe; 450/1500 m Tether-Reichweite ist kein Tiefenbeleg.
Ally-Akkus sind aktuell nicht verfügbar/integrationsbereit. Base/Premium und
Basic/SAR sind Zubehörpakete, keine zusätzlichen Grundroboter. Wraiths sechs
Akkus, Energie-/Leistungsangaben und Controller-IP65 belegen weder zwei Stunden
Laufzeit noch einen vollständigen ROV-IP-Code. Kamera-FOV-Konflikt Ally 180/200 Grad
bleibt bei den Merkmalen. Acht archivierte VideoRay-Handbuchnamen samt Links sind
als offene historische Identitäts-/Dublettenprüfungen gespeichert; Handbücher nicht
in diesem Durchgang abgerufen.

Standard Bots: Spark/Core/Thor 7/18/30 kg Nennlast, 21/32,5/79 kg Armmasse und
±0,025 mm Hersteller-Wiederholgenauigkeit ohne ausgewählten Prüfnormnachweis.
Spark 950 mm eigene Spezifikation versus 900 mm Modellkarte; Thor druckt wörtlich
2 mm (78.7 in), daneben 2000 mm und 2 m. Konflikte bleiben sichtbar. Fußabdruck
unter 200 beziehungsweise 296 mm Durchmesser wird nicht zur Körperabmessung.
Spark-Geschwindigkeit weiter Coming Q2 2026; ein vergangener Termin ist kein
Liefernachweis. Core bis 3 m/s und Thor 4 m/s sind eigene lineare Werkzeugwerte;
Thors 30-kg-FAQ gilt bei kollaborativen Geschwindigkeiten/TCP-Bedingungen.
IP65 ist bei Spark/Thor ausdrücklich Design Rating, keine verifizierte Zertifizierung
und kein auf Core übertragener Code. Lokaler Betrieb nach Programmübertragung,
Netzpflicht für Updates/Fernsupport/verbundene Anwendungen und Beta-Ausnahmen
bleiben zusammen erhalten. Werkzeugkompatibilität ist keine enthaltene Hand.
Startpreise $29.500/$39.500/$49.500 haben in den ausgewählten Texten keine explizite
Währung und keine vollständige Konfigurations-/Steuerabgrenzung; keine Offers.
Bolt und autonome Navigation bleiben Coming soon. Geplante mobile 6 mph sind
keine Festbasisgeschwindigkeit. Torso-Abdeckung bis sieben/zehn Fuß ist keine
Armreichweite. Hot-Swap-/24-Stunden-Wortlaut ist keine Einzelakku-Laufzeit.

16 nutzbare Quellenkörper (zehn HTML, sechs lesbare PDFs), 32 exakte Textanker und
zwölf PDF-Textseiten mit Koordinaten. Vier gescannte PDFs gerendert, aber wegen
nicht unterstützter Bildansicht/fehlender OCR nicht ausgewertet; keine Fakten
daraus gewählt. Zwei 404-Adressen und zwei kurze Linkseiten ausgeschlossen.
Keine visuelle Bild-/PDF-Prüfung, Formulare oder erneuten Abrufe gesperrter Hosts.
Acht Modellseiten: 131 Felder, 62 sichtbare Quellenmarkierungen, 53 ausgelassene
Leerfelder, 50 strukturierte Eigenschaften und 46 Merkmalsätze. Acht Modell-
Exportziele und acht Rechercheziele mit jeweils 131 Feldern sowie zwei Firmen-
Fokus-/Exportzeilen geprüft. Global 551 Modellseiten mit
8510 Feldern geprüft: 4031
sichtbare Quellen/Werte, 3758 ausgelassene Leer-/NA-Felder und
38 belegte Erstjahre. Alle 1905 strukturierten Preisausgaben geprüft: 350 Offers,
1555 ohne Offer; keine erneute Verkäuferprüfung aller Altpreise.
681 Unit-Tests in 54 Dateien und 94 Browserfälle bestanden: 38 neue VideoRay/
Standard-Bots-, 38 GreyOrange/KUKA- und 18 Vergleichsfälle, darunter 36 Axe-
Prüfungen auf Desktop/Mobil in hell/dunkel. Build: 2954 Seiten, etwa 452 MB.
Datenprüfung: null Fehler und 794 Hinweise, vier weniger durch belegte Erstjahre.
Format, Lint, wiederholter Import ohne Ergänzungen, Bestands-/Quellen-/Vergleichs-
prüfungen bestanden. Alle 159 eigenen Testprozesse beendet, Serverport frei;
keine eigenen Recherche-Hilfsprozesse, andere Aufgaben erhalten.

Gesamtstand: 1905 Modelle/Konfigurationen, 793 datierte Merkmalssätze, unverändert
651 Ergänzungen und 142 bestehende Anreicherungen. 3340 einzelne Merkmalaussagen,
1337 Produktquellenverweise und 64 Firmenfokusse. 8510 Felder auf 551 Modellen:
4076 dokumentiert, 4244 unbekannt, 179 widersprüchlich und elf Roadmap. Alle 518
ursprünglichen Rechercheziele mit Merkmalen; 303 mit Feldprüfungen und 215 offen.
63 von 591 Quellengruppen mit Firmenfokus. Drei ursprüngliche Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Heuristik weiter
114 Modell- und elf Markensuchhinweise, keine bestätigten Lücken. Frühere offene
Zuordnungen und neue historische Leads bleiben erhalten. Vollständigkeit und
Marktführung weiterhin unbelegt; nur lokale Änderungen. Prüfdateien:
`scratch/competitor-research/primary/batch-75/`.


## Ergänzung vom 2. November 2026 – Quantum Systems, Ohmnilabs und WIY Drones (Batch 76)

Acht Modelle ergänzt: Trinity Pro, Trinity Tactical, PULSE P19, Mandrill, Seavex,
Subvex, Skyron 400 und WIY Drones STRILA. Acht vorhandene Modelle geprüft:
Ohmni Telepresence Robot, Ohmni SuperCam, OhmniCare, OhmniClean, Reliant, Twister
und die beiden Vector-AI-Betriebsarten. 262 Feldentscheidungen: 109 dokumentiert,
138 unbekannt, zehn widersprüchlich und fünf Roadmap. Drei Firmenfokusse ergänzt.
1897 übrige Zeilen, 551 vorherige Modellprüfungen, 64 Firmenfokusse und alle 1961
Quellenidentitäten erhalten. Keine Kategorieübertragung oder neue CSV-Spalte.

Ohmni: Das Original ist seit August 2024 eingestellt. Die inzwischen auf den
Nachfolger ausgerichtete Altseite belegt keine Übertragung von 66 lb, vier Rädern
oder 8–9 Stunden auf das Original. Dessen 18 lb Eigenmasse bleiben von 31 lb Versand
getrennt; 4–5 Stunden Gespräch und 8–10 Stunden Standby sind Betriebsarten.
Die ungefähr drei Stunden Ladezeit gelten nur halbvoll bis voll bei ausgeschaltetem
Roboter. 2 versus 2,2 mph ist ein Quellenkonflikt. SuperCam gehört laut archivierter
Supportangabe zu Seriennummern ab PVT3000; 109/80/138 Grad FOV sind horizontal/
vertikal/diagonal, keine einzelne 360-Grad-Kamera. Die Supportangabe behält den
1. November 2026 als Prüfdatum. Der neue Abruf lieferte 403 und ist kein Beleg;
weitere Hostanfragen wurden gestoppt. OhmniCare: 14×18 gegenüber 15×9,5 Zoll
Grundfläche bleibt widersprüchlich; 20 Minuten Laden pro Betriebsstunde ist kein
Vollladezyklus. OhmniClean: 79 versus 71 lb und zwei Stunden durchschnittlicher
Betrieb versus 75 Minuten Desinfektion bleiben sichtbare Konflikte. 24 Stunden
dank Akkuwechsel sind keine Einzelakku-Laufzeit; 9000 Stunden Lampenlebensdauer
ebenfalls nicht. Raumzeit und Mappingrate belegen weder normierten Durchsatz noch
garantierte Infektionsreduktion. Sicherheits-/Betriebsbedingungen bleiben erhalten.

Quantum: Flugzeit und maximales Abfluggewicht bleiben von Akkulaufzeit und
Leergewicht getrennt. Reliants 9 kg Nutzlast stammt aus dem verlinkten englischen
Datenblatt; Controller-Akku/IP-Werte werden nicht aufs Fluggerät übertragen.
Vector AI behält getrennte Flächen-/Multicopter-Betriebsarten bei gleichem
umrüstbarem Rumpf. Trinity Pro nennt 90 Minuten, standardmäßig exportbedingt auf
59 Minuten begrenzt. Familienjahr und PDF-Datum sind kein Pro-Erstjahr. Trinity
Tactical nennt IP54 im Text und IP55 im Datenblatt. PULSE P19 ist ein vorläufiges
Juni-2026-Konzept: fünf ausgewählte Leistungsfelder bleiben Roadmap, bemannte und
geplante unbemannte Modi sowie gewichtsabhängige Nutzlast-/Treibstoffbudgets sind
qualifiziert; kein VTOL- oder Liefernachweis. Mandrill 750 versus 750+ kg bleibt
ein Konflikt; kurze/lange Bauform und Rad/Kette sind Optionen ohne Zusatzkarten.
Seavex: 4500 kg Verdrängung ist keine Leermasse, 1,8 m Tiefgang keine Körperhöhe.
Bis zwei Monate Missionsdauer sind keine Akkulaufzeit; Betrieb bis Seegang 3 und
Überleben bis 6 bleiben getrennt. Subvex: 533 versus 530 mm Durchmesser bleibt
widersprüchlich; 6000 m Tauchtiefe, USBL-Reichweite und Sonarreichweite sind eigene
Größen. Vier Tage Missionsdauer werden nicht aus 42 kWh hergeleitet. Skyron 400:
800 g Webseite versus 1,2 kg Datenblatt Nutzlast; Booster bleibt eine Option.

STRILA bleibt WIY Drones zugeordnet, Quantum als Integrationspartner. Beteiligung
und Joint Venture beweisen keine rechtliche Herstellerfusion. 5,7 versus 5,3 kg
Abfluggewicht und 415 versus 350 km/h bleiben widersprüchlich; die Quelle mit
fehlendem /h wird nicht stillschweigend korrigiert. Kein Wirksamkeits-, Kampf-,
Verfügbarkeits- oder unabhängiger Zertifizierungsnachweis. Trinity F90+, SCORPION,
TRON und Vector vor AI bleiben vier historische Identitäts-/Familienleads.

44 nutzbare aktuelle Quellenkörper: 20 HTML und 24 PDFs, zusätzlich eine archivierte
normalisierte Supportmomentaufnahme ohne erhaltenes HTML. 42 exakte Textanker und
108 PDF-Textseiten mit Koordinaten gespeichert. Zehn kurze Linkseiten, eine
vermutete 404-Adresse und der neue 403-Abruf ausgeschlossen. Keine visuelle
Bild-/PDF-Prüfung oder Formulare, keine Wiederholung früher gesperrter Hosts.
16 Modellseiten mit 262 Feldern und 107 Quellenmarkierungen geprüft; 123 Leerfelder
ausgelassen, 91 strukturierte Eigenschaften und 76 Merkmalaussagen geprüft.
Acht Modell-Exportziele und acht Rechercheziele mit jeweils 130 Feldern, drei
Firmenfokusse und zwei ursprüngliche Firmenexportzeilen geprüft. Global 567
Modellseiten mit 8772 Feldern: 4138
sichtbare Quellen/Werte, 3881 ausgelassene Leer-/NA-Felder und
38 belegte Erstjahre. Alle 1913 strukturierten Preisausgaben geprüft: 350 Offers,
1563 ohne Offer. Das ist keine erneute Verkäuferprüfung aller Altpreise.

696 Unit-Tests in 55 Dateien und 98 Browserfälle bestanden: 42 neue Quantum/Ohmni-,
38 GreyOrange/KUKA- und 18 Vergleichsfälle, darunter 36 Axe-Prüfungen auf Desktop/
Mobil in hell/dunkel. Eine zunächst fehlgeschlagene Prosa-Abstandserwartung
korrigiert, anschließend alle Unit-Tests bestanden; Erstprotokoll erhalten.
Build: 2963 Seiten, etwa 453 MB. Datenprüfung: null Fehler und 802 Hinweise,
acht zusätzliche unbekannte Erscheinungsjahre. Format, Lint, wiederholter Import
ohne Ergänzungen sowie Bestands-/Quellen-/Vergleichsprüfungen bestanden.
Alle 163 eigenen Testprozesse beendet, Serverport frei;
keine eigenen Recherche-Hilfsprozesse, Ressourcen anderer Aufgaben erhalten.

Gesamtstand: 1913 Modelle/Konfigurationen, 801 datierte Merkmalssätze, 659 Ergänzungen
und 142 bestehende Anreicherungen. 3392 einzelne Merkmalaussagen, 1367 Produktquellen-
verweise und 67 Firmenfokusse. 8772 Felder auf 567 Modellen: 4185 dokumentiert,
4382 unbekannt, 189 widersprüchlich und 16 Roadmap. Alle 518 ursprünglichen
Rechercheziele mit Merkmalen; 311 mit Feldprüfungen und 207 offen. 65 von 591
Quellengruppen mit Firmenfokus. Drei ursprüngliche Modellidentitäten, neun
Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Heuristik unverändert
114 Modell- und elf Markensuchhinweise, keine bestätigten Lücken. Frühere offene
Zuordnungen bleiben erhalten. Vollständigkeit und Marktführung weiterhin unbelegt;
nur lokale Änderungen. Prüfdateien: `scratch/competitor-research/primary/batch-76/`.


## Ergänzung vom 2. November 2026 – Robot.com und LocoRobo (Batch 77)

Vier benannte physische Angebote ergänzt: LocoXtreme, LocoArm, LocoRover und R-top.
Acht vorhandene ursprüngliche Rechercheziele geprüft: R-cargo, R-kiwi, R-noid,
R-dog, LocoScout, LocoHex, LocoDrone und LocoDrone X. 197 Feldentscheidungen:
48 dokumentiert, 148 unbekannt, eine Roadmap. Zwei Firmenfokusse ergänzt.
Alle 1905 übrigen Zeilen, 567 vorherigen Modellprüfungen, 67 Firmenfokusse und
1961 Quellenidentitäten erhalten. Keine Kategorieübertragung oder neue CSV-Spalte.

R-noid: Das verlinkte Datenblatt Revision 003 vom 14. Mai 2026 nennt zwei Arme mit
je sieben Achsen, vier Torso- und zwei Halsachsen sowie 2 m/s Spitze. 90 kg Gesamt-
masse, 1,7 m Höhe und 0,55 m Radbasis sind kein vollständiger Körperquader.
0,82 m Arm length ist keine ausgewiesene Nutzreichweite; 0–1,9 m vertikaler Arbeits-
raum ebenfalls nicht. 4 kg pro Arm werden nicht addiert oder als bei Höchsttempo
garantierte Last dargestellt. Drei Stunden Akku, Netzbetrieb und 110 V sind keine
Ladedauer oder mehrschichtige Einzelakku-Laufzeit. Modularer Endeffektor bedeutet
keine bestimmte enthaltene Hand. Kameras, acht Ultraschallsensoren und 360-Grad-
LiDAR werden nicht als mechanische Achsen gezählt. Der Hersteller nennt den
22. Juni 2026 ausdrücklich als kommerziellen Start; das Mai-PDF-Datum bleibt
Dokumentdatum. Fünf Rollen und 19 Aufgaben sind keine weiteren Modelle.

R-top: Eigene Herstelleradresse und Seitentitel sowie feste Oberflächen werden
ausdrücklich von R-noids mobiler Basis unterschieden. Gemeinsame Überschriften
mit sechs Achsen und 9 lb pro Arm belegen keine eindeutig abgegrenzte R-top-
Konfiguration und ersetzen keine R-noid-Modellspezifikation. Daher keine numerische
Übernahme. R-cargo nennt acht Stunden Akku; Payload und Speed stehen ohne Zahlen.
Selbst-/Drahtlosladen bleibt optional, API in 48 h ein Integrationsversprechen,
keine Ladedauer. R-kiwi: 10–12 Stunden Modellseite versus zwölf Stunden Portfolio
sind vereinbare Headlines ohne Belastungsprotokoll. 18 lb sind Massennutzlast,
19 L Ladevolumen, kein Quellenkonflikt. Historische Kiwibot-Generationen bleiben
getrennt. R-dog: Homepage sagt coming in 2027; Modellseite nennt Konzept, Warteliste
und Piloten. Gegenwärtige Werbe-/Inspektionsprosa einer allgemeinen Seite löst
die Verfügbarkeit nicht. Geplanter Umgebungseinsatz trägt Roadmap-Status;
kein tatsächliches Erscheinungsjahr, numerische Plattformdaten oder Offer.

LocoRobo: LocoScout/Hex sind schulische Vier-/Sechsbeiner; Beinanzahl ist keine
Gelenkzahl, Klassenstufe kein numerisches Alter. Rettungs-, Agrar- und Erkundungs-
übungen beweisen keinen Feldeinsatz. LocoXtreme nennt sechs integrierte Sensoren,
Blockcoding, Python/Java und gemeinsame Programmspeicherung; keine angenommene
Fahrmechanik. LocoArm nennt Python-gesteuerte Greif-/Sortier-/Montageübungen mit
mobilen oder stationären Projekten, keine standardmäßig enthaltene Basis/Hand.
LocoRover nennt vier Mecanum-Räder, HD-FPV-Kamera und integrierten Arm; dessen
Identität mit LocoArm ist nicht belegt. ROS/Gazebo/SLAM, HRI und Edge-AI bleiben
Hochschul-Lehrsystemkontext, keine konkrete Hardware-Revision, Messgenauigkeit
oder pauschale Open-Hardware-Lizenz. LocoDrone und LocoDrone X bleiben zwei
Anbieternamen ohne exakte Fluggerät-/OEM-Daten. Hochschulschreibweise LocoDroneX
ist kein drittes Gerät. CodeMyDrones/CodeMyRobots, LocoFly, TryDrones und
BuildMyDrones bleiben Software-, Vorbereitungs-, Wettbewerbs- oder Kitangebote.
FAA-Vorbereitung und Erfolgsquoten sind weder Zertifizierungsgarantie noch
Flugerlaubnis. Historische Revisionen, exakte Drohnen und R-top-Hardware bleiben Leads.

18 nutzbare aktuelle Quellenkörper (17 HTML, ein PDF), 47 exakte Textanker und eine
PDF-Textseite samt Koordinaten gespeichert. Eine vermutete 404-Adresse und kurze
Support-Linkseite ausgeschlossen; keine Formulare, gesperrten Hosts oder visuelle
Bild-/PDF-Prüfung. Zwölf Modellseiten mit 197 Feldern geprüft: 37 sichtbare Quellen-
markierungen, 136 ausgelassene Leerfelder, 23 strukturierte Eigenschaften und
53 Merkmalaussagen. Vier Modell-Exportziele mit 65 Feldern, acht Rechercheziele mit
130 Feldern sowie zwei Firmenfokus-/Exportzeilen geprüft. Global 579
Modellseiten mit 8969 Feldern: 4175
sichtbare Quellen/Werte, 4017 ausgelassene Leer-/NA-Felder und
39 belegte Erstjahre. Alle 1917 strukturierten Preisausgaben geprüft: 350 Offers,
1567 ohne Offer; keine erneute Verkäuferprüfung aller Altpreise.

709 Unit-Tests in 56 Dateien und 96 Browserfälle bestanden: 40 neue Robot.com/
LocoRobo-, 38 GreyOrange/KUKA- und 18 Vergleichsfälle, darunter 36 Axe-Prüfungen
auf Desktop/Mobil in hell/dunkel. Build: 2967 Seiten, etwa 454 MB. Datenprüfung:
null Fehler und 806 Hinweise, vier zusätzliche unbekannte Erscheinungsjahre.
Format, Lint, wiederholter Import ohne Ergänzungen und Bestands-/Quellen-/Vergleichs-
prüfungen bestanden. Alle 161 eigenen Testprozesse beendet, Serverport frei;
keine eigenen Recherche-Hilfsprozesse, andere Aufgaben erhalten.

Gesamtstand: 1917 Modelle/Konfigurationen, 805 datierte Merkmalssätze, 663 Ergänzungen
und 142 bestehende Anreicherungen. 3423 einzelne Merkmalaussagen, 1387 Produktquellen-
verweise und 69 Firmenfokusse. 8969 Felder auf 579 Modellen: 4233 dokumentiert,
4530 unbekannt, 189 widersprüchlich und 17 Roadmap. Alle 518 ursprünglichen
Rechercheziele mit Merkmalen; 319 mit Feldprüfungen und 199 offen. 67 von 591
Quellengruppen mit Firmenfokus. Drei ursprüngliche Modellidentitäten, neun
Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Heuristik unverändert
114 Modell- und elf Markensuchhinweise, keine bestätigten Lücken. Frühere offene
Zuordnungen erhalten. Vollständigkeit und Marktführung weiterhin unbelegt;
nur lokale Änderungen. Prüfdateien: `scratch/competitor-research/primary/batch-77/`.


## Ergänzung vom 2. November 2026 – SROD und Macco Robotics (Batch 78)

Zwölf neue SROD-Modelle: S190DHD, S300EHD, S200CHD, S150A, S150AF, S300YL,
S300Y, S450A, F100, S70, Micro Wriggling Cutting Robot und S3831E. Acht vorhandene
Modelle geprüft: S100C MINI, T200, D600D, D800F sowie Kime Bartender/Chef/Kiosk/V5.
356 Feldentscheidungen: 130 dokumentiert, 224 unbekannt, zwei widersprüchlich.
Drei Anwendungsrouten-Paare S150A/S190DHD/S150AF nennen dasselbe Modell und haben
identische technische Tabellen; keine zusätzlichen Karten. SROD-Firmenfokus neu,
Macco-Fokus erweitert mit Erhalt seiner drei bisherigen Aussagen und Quellen.
Alle 1909 übrigen Zeilen, 579 vorherigen Modellprüfungen, 68 unveränderten Fokusse
und 1961 Quellenidentitäten erhalten. Keine Kategorie-/CSV-Spaltenänderung.

SROD: T200 nennt 70 kg im Headlinefeld, 75 kg in der Körper-Spezifikation; getrennt
davon 115 kg Kabelwinde. DN600+ setzt Erweiterungschassis voraus. Kamera-Lift ist
keine Lasthebefähigkeit, Kameraachsen/Räder/Motoren sind keine belegte Gesamt-DOF.
S100C 4,5 kg gilt mit 70-mm-Rädern. 8–10-Stunden-Headlines und Reel-Batterien werden
nicht als reine Crawler-Laufzeit importiert. S300YL 125 kg Reel inklusive Kabel und
15 Ah sind keine Crawler-Masse/-Laufzeit. S450A behält vier Stunden als qualifizierte
System-Headline ohne Batteriestandort/Last; Pull 14 kg ist weder Masse noch Nutzlast.
D600D Hydraulik-/Spülströme sind kein Sedimentdurchsatz. D800F: 650 kg Roboter versus
2500 kg Supporteinheit; mindestens zwölf Stunden Terminal-Akku ist keine Roboter-
Laufzeit. 200 m³/h Pumpe, 40 m Förderhöhe und 40-mm-Partikel sind getrennte Maxima,
kein gemeinsamer Betriebspunkt. IP68/20 m sind keine Militär-/Ex-Zertifizierung;
Standardumgebung nicht explosionsgeschützt, Ex-Ausführung auf Anfrage, Diesel optional.
S70 externe Rückspeisung mit unlimited-Wortlaut ist keine Akkulaufzeit; Tether bis
2 km ist keine Tauchtiefe. Positions-/Leckempfindlichkeits-Headlines behalten fehlende
Prüf-/Referenzbedingungen. F100: 9,5 kg ohne Akku, mindestens vier Stunden pro Akku,
10–30 cm Positionsfehler pro 100 m als Herstellerwert; 100-m-Blatt in fünf Minuten
ist ein Beispiel, keine konstante Fahrgeschwindigkeit. 1080P-Panorama aktuell,
8K erst späteres Softwareupdate. S3831E: DN500–600 mm Headline gegen DN500–6000 mm
Tabelle bleibt Konflikt; 20 m Tauchtiefe, 0,25–6 m Sonar und 200–1000 m Tether bleiben
getrennt, zwei/vier Stunden gelten bei hoher/niedriger Stufe. Micro-Cutter: Standard
DN80–150, DN250 optional; Axialfeed 100 m Headline gegen 100 mm Tabelle wird nicht
still korrigiert oder zu Lift-/Armreichweite erklärt.

Macco: Bartender 200 Cocktails/h und bis zu 80 Rezepte, Chef 120 Gerichte/h und
Mehrrezeptfunktion sind eigene Angebots-Headlines ohne ausgewähltes Last-/Rezept-
Prüfprotokoll. Generische 300+ Getränke/h und Live-Demo-Präzision sind keine allen
Konfigurationen zugewiesenen Spezifikationen. Monatlich ab 1800/2300/2800 EUR sind
bankabhängige Finanzierungen, keine belegten Kauf-/Mietpreise oder Offers. Kime V5:
60 kg Roboter mit Basis, 1498 mm Roboterhöhe, circa zwei Meter Roboter plus Kiosk;
keine vollständige Systemmasse/-geometrie. 5 kg je Arm nicht addiert; zwei Sechs-
Achs-Arme, drei Kopf-/Halsachsen und 350-Grad-Taillenbereich nicht zu erfundener
Gesamt-DOF zusammengezählt. Fünffingerhände im Versionsblatt, 359–720 Grad/s keine
lineare Fahr-/TCP-Geschwindigkeit. IP44 innen, Betrieb 5–35 °C versus Lager 0–40 °C.
Netz-/Leistungswerte keine Akkulaufzeit. SDK bleibt durch Macco-Personalrechte
beschränkt; CE/USA/FCC/NSF und Hygieneprosa ohne ausgewählten Zertifikatsumfang.
Body-Pose-Vorschau mit Herstellertext erneut belegt, ohne visuelle Videoanalyse.
V5-Daten werden nicht auf alle unversionierten Angebote übertragen.

32 nutzbare aktuelle Quellenkörper: 30 statische HTML, ein gerendertes DOM, ein PDF
mit fünf Text-/Koordinatenseiten. 64 exakte Anker, gerenderte Anker zusätzlich im
gespeicherten DOM geprüft. Statische Macco-Apphülle ausgeschlossen. Ein eigener
Recherchebrowser samt Kontext und sieben Hilfsprozessen geschlossen/verifiziert.
Keine Formulare, gesperrten Hosts, visuelle Bild-/PDF-Analyse oder unabhängigen Tests.
20 Modellseiten mit 356 Feldern: 112 sichtbare Quellenmarkierungen, 204 ausgelassene
Leerfelder, 89 strukturierte Eigenschaften und 66 Merkmalaussagen geprüft. Keine
Treffer im ursprünglichen Modellnennungs-Export; zwei Beschreibungsreferenzen mit
vier Macco-Zielen, acht Rechercheziele mit 142 Feldern und zwei Firmenfokus-/Export-
zeilen geprüft. Global 599 Modellseiten/9325 Felder:
4287 sichtbare Quellen/Werte, 4221
ausgelassene Leer-/NA-Felder und 39 belegte Erstjahre. 1929 strukturierte Preise:
350 Offers, 1579 ohne Offer; keine erneute Verkäuferprüfung sämtlicher Altpreise.

721 Unit-Tests in 57 Dateien und 100 Browserfälle bestanden: 40 neue SROD/Macco-,
38 GreyOrange/KUKA-, 18 Vergleichs- und vier bisherige Macco-Markenfälle, darunter
36 Axe-Prüfungen Desktop/Mobil hell/dunkel. Build: 2979 Seiten, etwa 456 MB.
Datenprüfung: null Fehler, 818 Hinweise, zwölf neue unbekannte Erscheinungsjahre.
Format, Lint, wiederholter Import ohne Ergänzungen sowie Bestands-/Quellen-/Vergleichs-
prüfungen bestanden. Alle 165 eigenen Testprozesse und sieben Recherche-
prozesse beendet, Testserverport frei; Ressourcen anderer Aufgaben erhalten.

Gesamtstand: 1929 Modelle/Konfigurationen, 817 datierte Merkmalssätze, 675 Ergänzungen,
142 bestehende Anreicherungen. 3463 einzelne Merkmalaussagen, 1402 Produktquellen-
verweise, 70 Firmenfokusse. 9325 Felder auf 599 Modellen: 4363 dokumentiert,
4754 unbekannt, 191 widersprüchlich, 17 Roadmap. Alle 518 ursprünglichen Recherche-
ziele mit Merkmalen; 327 mit Feldprüfungen und 191 offen. 68 von 591 Quellengruppen
mit Firmenfokus. Drei ursprüngliche Modellidentitäten, neun Listingidentitäten und
862 Buy-Detailinhalte bleiben offen. Heuristik 114 Modell-/elf Markensuchhinweise,
keine bestätigten Lücken. Weitere SROD-Systemarten und frühere offene Zuordnungen
bleiben erhalten. Vollständigkeit und Marktführung weiterhin unbelegt; lokale
Änderungen. Prüfdateien: `scratch/competitor-research/primary/batch-78/`.


## Ergänzung vom 2. November 2026 – Avidbots und Event 38 (Batch 79)

Sechs bestehende Modelle geprüft: Neo 2, Neo 2W, Kas, E400 Mapping, E400 ISR und
E455. 114 Feldentscheidungen: 59 dokumentiert, 49 unbekannt, sechs widersprüchlich.
Zwei neue Firmenfokusse. Keine zusätzlichen Karten aus Reinigungsköpfen,
Sensor-/Funkoptionen, Home Base, Desinfektionsaufsatz, DROPS oder Command Center.
Alle 1923 übrigen Katalogzeilen, 599 bisherigen Modellprüfungen, 70 Firmenfokusse
und 1961 Quellenidentitäten erhalten. CSV-Spalten und Kategorien unverändert.

Kas: 172 kg leer versus 266 kg GVW; 552-mm-Arbeitsweg, 559-mm-Bürstendurchmesser
und 630-mm-Rakel getrennt. 500–1000 m²/h praktische Leistung versus 2186 m²/h
theoretisches Maximum. 2025-Blatt bis vier Stunden versus Produktseite bis drei
und Einführung 3+ Stunden; Akkuwechsel verlängert Schichten, keine Einzelladung.
Tankbelegung 45/46 L im Datenblatt, 46/45 L in FAQ, zusätzlich 50-L-Abwassertext
und 48-L-Lösung in Broschüre bleibt widersprüchlich. Gerade Durchfahrt 1,05 m im
Blatt versus 1,0 m auf Seite, 1,55-m-Wendemanöver separat. Anpresslast 36/36,8/40,8 kg
ist keine Roboter-Nutzlast. Allgemeine Neo-FAQ auf Kas-Seite liefert keine Kas-Werte.

Neo 2: Disc-GVW 661/669 kg, Zylinder-GVW 663/688 kg inklusive Akkus und voller
Lösung; Leermassen 283/291 bzw. 285/290 kg. Untere Seiten-GVW 581,5 kg ungeklärt.
Konfigurationsbezogene Bürstenbreiten und theoretische Flächenleistungen getrennt;
metrische 1374-mm-Höhe bleibt mit Hinweis auf inkonsistente Zollangabe. Neo 2
maximal 0,5 % Reinigungssteigung im gewählten Blatt, Neo 2W 3 % im 2024-Blatt.
Neo 2W: Paletten-/Gabelerkennung, Bulk Navigator und Debris Diverter mit Vorreinigung
und Standortprüfung; Home Base ist Rückkehrpunkt, kein belegter Lade-/Füll-Dock.
480-Stunden-Wartung ist keine Akkulaufzeit. Neo 2 eingeführt am 1. September 2020,
Kas am 10. April 2024; historische Datumsangaben nicht aus PDF-Uploaddaten abgeleitet.

Event 38: Erster HTML-main enthielt nur den Hero. Gesicherter #main-Rahmen enthält
auch technische Abschnitte und wurde aus Originalbytes reproduziert. E400 Mapping:
3-m-Spannweite/1,5-m-Länge getrennt vom Packmaß; 20 lb/9,3 kg Startmasse und
3 lb/1,3 kg Nutzlast als nicht exakte Hersteller-Einheitenpaare erhalten. 90 Minuten,
54 Meilen Flugstrecke und fünf Meilen Telemetrie getrennt; PPK ohne erfundene
Navigationsgenauigkeit, leichte Regenbeständigkeit ohne IP-Code. E400 ISR:
120 Minuten bei voller Flugmasse 20 lb/9 kg ist weder Leermasse noch MTOW;
320-g-Gimbal keine maximale Flugzeug-Nutzlast. Vier-Minuten-Aufbau keine Ladezeit;
40×-Zoom aus 20× optisch und 2× digital. IP53, Temperatur und Wind bleiben
Herstellerangaben. E455: über zwei Stunden mit sieben Pfund unter 55 lb Gesamtmasse
nicht auf Zwölf-Pfund-Option übertragen. Aktuelle 60 lb gegen 65 lb der Einführung
bleiben Konflikt; HTML datePublished 7. November 2023 getrennt von Änderung 2026.
BVLOS-/Part-108-Texte keine pauschale Flugerlaubnis; DROPS-Integration vom September
2026 liefert keine universell verbaute Hand, Ladezeit oder unbegrenzte Flugausdauer.

24 nutzbare Quellenkörper: 15 HTML, neun PDF mit 36 Text-/Koordinatenseiten,
108 exakte Quellenanker. Drei 404-Quellen ausgeschlossen. Keine Formulare,
gesperrten Hosts erneut abgerufen, Recherchebrowser oder visuelle PDF-/Bildanalyse.
Sechs Modellseiten: 114 Felder, 59 Quellenmarkierungen, 43 ausgelassene Leerfelder,
50 strukturierte Eigenschaften und 25 Merkmalaussagen geprüft. Sechs Modell-Export-
zeilen/sieben Zielvorkommen mit 133 Feldvorkommen, zwei Firmenfokus-Seiten/-Exporte,
zwei Beschreibungsreferenzen/drei Ziele und sechs Rechercheziele/114 Felder geprüft.
Global 605 Modellseiten/9439 Felder mit 4346 sichtbaren Quellenwerten, 4264
ausgelassenen Leer-/NA-Feldern und 42 belegten Erstjahren. 1929 Preisangaben:
350 Offers und 1579 ausgelassene Offers; keine aktuelle Verkäuferprüfung aller Altpreise.

729 Unit-Tests in 58 Dateien, 20 Python-Tests und 92 Browserfälle bestanden:
34 neue Avidbots/Event-38-, 40 SROD/Macco- und 18 Vergleichsfälle, darunter
36 Axe-Prüfungen Desktop/Mobil hell/dunkel. Build 2979 Seiten, ungefähr 456 MB.
Datenprüfung null Fehler, 817 Hinweise; ein bisher unbekanntes Erstjahr ergänzt.
Format, Lint, Bestands-, Quellen-, Vergleichs- und Wiederholungsimportprüfung bestanden.
Alle 157 eigenen Testprozesse beendet, Testserverport frei;
Ressourcen anderer Aufgaben erhalten. Dies ist keine erneute vollständige Browser-Suite.

Gesamtstand: 1929 Modelle/Konfigurationen, 817 Merkmalssätze, 3470 einzelne Aussagen,
1412 Produktquellenverweise, 72 Firmenfokusse. 9439 Felder auf 605 Modellen:
4422 dokumentiert, 4803 unbekannt, 197 widersprüchlich, 17 Roadmap. Von 518
ursprünglichen Zielen haben 333 Feldprüfungen und 185 bleiben offen. Firmenfokusse
decken 70 von 591 Quellengruppen ab. Drei Modell- und neun Listingidentitäten,
862 Buy-Detailinhalte und vorherige offene Portfolios bleiben erhalten; 114 Modell-
und elf Markenhinweise bleiben Heuristiken. Vollständigkeit und Marktführung unbelegt.
Prüfdateien: `scratch/competitor-research/primary/batch-79/`.

Auf Nutzerwunsch werden abgeschlossene Zwischenstände committed und auf
`origin/codex/competitor-directory-expansion` gepusht. Lokale Rohrecherche und
andere Aufgaben bleiben außerhalb dieser Commits; Pages-Publishing ist unverändert.


## Ergänzung vom 2. November 2026 – Geek+ (Batch 80)

31 benannte Modelle bzw. ausdrücklich bezeichnete Versionen in P/M/F/RS/S/X:
28 Ergänzungen und drei bestehende Modelle. 682 Feldprüfungen: 310 dokumentiert,
352 nicht dokumentiert, 20 widersprüchlich. Ein Firmenfokus ergänzt. Alle 1926
unbeteiligten Katalogzeilen, 605 bisherigen Modellprüfungen, 72 Firmenfokusse und
1961 Quellenidentitäten erhalten. Keine neuen CSV-Spalten oder Kategoriewechsel.

P500R: 600 kg Nutzlast; aktuelle globale Lastgeschwindigkeit 1,5 m/s gegenüber
japanischen 1,6 m/s. P800R aktuell 142 kg, regional 165 kg inklusive Batterie,
2022 162 kg; aktuelle 1095-mm-Länge gegenüber früher 1090 mm. Reguläre 195-mm-
und dickere PopPick-275-mm-Höhe bleiben Konfigurationen. Aktuelle 55-mm-Hubstrecke
gegenüber früheren 60 mm ungeklärt. P1200R aktuell 288 kg, regional 320 kg,
historisch 187 kg und abweichende Geschwindigkeiten. P800R V6.0 bleibt die explizite
historische 800-kg-Konfiguration. Globale/regionale/historische Zuordnung ungeklärt.
Ladeintervalle von zehn Minuten für definierte Arbeitsintervalle sind keine volle
Ladezeit; Abweichungen 1,5–2 gegen 2–3 Stunden bleiben bei den gewählten P-Quellen.

M200C hat 300 kg Nutzlast trotz seines Namens, 106 kg Körpermasse und getrennte
Fahrt-/endgestützte Stopptoleranzen. MP1000R-SNE V2.1 hat eigene 1105×855×275-mm-
Maße und wird nicht in generisches MP1000R oder M1000R umgedeutet. Seine gedruckte
0,7-m-Durchfahrt bei 855-mm-Körperbreite bleibt ungeklärt; 774-mm-Drehdurchmesser
wird kein erfundener Radius. M2000C/M3000C nennen ausdrücklich minimale,
anpassbare 1800×1000×350-mm-Körpermaße; Regalgrößen bleiben getrennt.

F12ML-Nutzlast ist höhenabhängig: 1500/1200/1000 kg in den Blattstufen
0–2/2–2,5/2,5–3 m. Blatt nennt 2300-mm-Hubhöhe gegenüber Webseite
2344/2844/3244 mm; Zuordnung ungeklärt. Stufen bis drei Meter beweisen nicht,
dass die 2300-mm-Version drei Meter erreicht. F20MT 2000 kg und 120-mm-Hub.
Körper-/Gabelmaße, Fahr-/Hubgeschwindigkeit und volle Ladezeit bleiben getrennt.
Gedruckte F12ML-„Rotation speed ≥800mm“ wird weder Winkelgeschwindigkeit noch
angenommener Wenderadius. CE/UKCA/PLd bleiben spezifische Herstellerangaben.

RS5-D, RS8-DA/DX, RS11-DA/DX behalten aktuelle 40-kg-Lastangaben. Historische
240/320-kg-Maximalnutzlast wird ohne belegte Aggregat-/Einzelbehälterzuordnung
nicht gleichgesetzt. RS8-DA 900/1000-kg-Masse und 4700/4600-mm-Körperhöhe bleiben
Quellenkonflikte; Lagerhöhe 8220 mm ist keine aktuelle Hubhöhe 7935 mm.
RS11-DA-Hubzyklus zwölf Sekunden auf Seite gegenüber zehn im Blatt bleibt im
Merkmalstext. Batteriestrom, Ah und Zyklen liefern keine Lauf-/Ladezeit.
RS Air hat im Hubhöhenfeld „Minimum Aisle width:1015“ ohne bestätigte Einheit;
Hubhöhe und Gangbreite bleiben leer. P40/P40R sind beide explizit bezeichnet,
aber ihre Gleichsetzung bleibt unbewiesen: Webseite 386 mm, P40R-Blatt 383 mm.
Historisches P40 75 kg/andere Maße wird nicht zu einer erfundenen dritten Generation.

S-Serie: sechs ausdrücklich benannte Blattversionen statt drei zusätzlicher
unversionierter Doppelkarten. S20C V2.0 75 kg/560-mm-Länge/2,0 m/s beladen,
V3.0 78 kg/650 mm/2,5 m/s. Generische Seitenzuordnung ungeklärt; S20T-Seite
2,5 m/s beladen überschreibt nicht V2.0-Blatt 2,0 m/s. Verstellbare Trägerhöhe
S20C-A ist keine belegte Hubstrecke. X1200H 245 kg und explizit beladen/unbeladen
2,5/1,8 m/s werden nicht vertauscht. X1200Z 270 kg, 1,6/1,5 m/s und getrennte
Raumtemperatur-/Kühlhaus-Akkuwerte. 8–10 h nach 1,2 h Ladung gehört nicht zur
Kühlhausvariante mit 6–8 h nach zwei Stunden. „Motor-driven“ ist kein belegtes
Lokalisierungsverfahren; Kühlhaus-CE/UL-Batterie ist TBD. Historisches X1200
bleibt separat. Dokumentdatum liefert kein Erstjahr oder aktuelle Lieferbarkeit.

21 nutzbare URL-Antworten (acht HTML, 13 PDF), davon 16 verschiedene Inhaltskörper
(acht HTML/acht PDF). 76 gespeicherte PDF-Text-/Koordinatenseiten einschließlich
identischer Downloads; 49 Seiten in den verschiedenen PDF-Inhalten. 97 exakte
Textanker geprüft. Leere 200-Antwort einer alten P-Route ausgeschlossen.
Keine Formulare, Recherchebrowser, erneuten Abrufe bekannter gesperrter Hosts oder
visuelle PDF-/Bildprüfung. Quellen-Hashes und Entscheidungen versioniert in
`reports/competitor-batch-80-evidence.json`; Rohdateien lokal in
`scratch/competitor-research/primary/batch-80/`.

742 Unit-Tests in 59 Dateien, 20 auf die Wettbewerber-Skripte begrenzte Python-Tests
und 82 Browserfälle bestanden: 30 Geek+-, 34 Avidbots/Event-38- und 18 Vergleichsfälle,
darunter 32 Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Build
3007 Seiten, ungefähr 460 MB. Datenprüfung null Fehler, 845 Hinweise, davon
28 zusätzliche unbelegte Erstjahre; kein Erstjahr geraten. Lint, Format, Quellen-,
Bestands-, Vergleichs-, Preis- und Wiederholungsimportprüfung bestanden. Alle
143 erfassten eigenen Testprozesse beendet; Port4321 frei,
Ressourcen anderer Aufgaben erhalten. Dies ist keine vollständige Browser-Suite.

Gesamtstand: 1957 Modelle/Konfigurationen, 703 Ergänzungen, 845 Merkmalssätze,
3576 Aussagen, 1465 Produktquellenverweise, 73 Firmenfokusse. 10121 Felder auf
636 Modellen: 4732 dokumentiert, 5155 unbekannt, 217 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 336 Feldprüfungen und 182 bleiben offen.
Firmenfokusse decken 71 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und alle vorherigen offenen Portfolios
bleiben erhalten. Auch Geek+-Altsysteme, neue Systemnamen und regionale Portfolios
bleiben Recherchepunkte; Vollständigkeit und Marktführung sind unbelegt.

Zwischencommit `ea35b27` mit Geek+-Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
folgen als zweiter Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Locus Robotics und Seegrid (Batch 81)

Acht ausgewählte Modelle: zwei Ergänzungen (historisches Locus Max, Seegrid Lift
EL1) und sechs bestehende Modelle. 184 Feldprüfungen: 49 dokumentiert, 132 nicht
dokumentiert, drei widersprüchlich. Seegrid-Firmenfokus ergänzt, vorhandenen
Locus-Fokus vertieft. Alle 1951 unbeteiligten Katalogzeilen, 636 bisherigen
Modellprüfungen, 72 anderen Firmenfokusse und 1961 Quellenidentitäten erhalten.
Keine neuen CSV-Spalten oder Kategoriewechsel.

Origin: 36 kg/80 lb als gerundetes Herstellerpaar, bis 14 h und ungefähr 50 min
Laden; Last-/Arbeitsprofil und Ladezustandsfenster fehlen. Die Seite benennt die
Achsen ihrer 20,4×22,8×62-Zoll-Maße nicht ausdrücklich. Vector: 272 kg/600 lb,
gleiche Lauf-/Ladezeitbedingungen. Öffentliche Einführung am 28. März 2022 steht
gegenüber 2023 in der aktuellen Firmenchronik; Versand-/Regionszuordnung offen.
Omnidirektionale Fahrt liefert keinen numerischen Wenderadius.

Array: globale Herstellerankündigung am 13. April 2026, frühe nordamerikanische
Einsätze und geplante regionale Skalierung getrennt. NeuraGrasp ist ein weicher,
nachgiebiger Greifer laut Hersteller; Gelenkzahl, Last und Reichweite unbekannt.
100 Prozent SKU-Abdeckung gehört zum gemischten System. 24/7-Betrieb und
250K/500K Einheiten pro Tag liefern keine einzelne Akkulaufzeit oder Roboterleistung.
Max ist in der Firmenankündigung vom 28. März 2022 ausdrücklich benannt; damalige
begrenzte Verfügbarkeit beweist keine heutige Lieferbarkeit. Keine numerische
Max-Last aus veralteten Suchauszügen oder inzwischen geänderten Blogtexten übernommen.

CR1: 4000 lb Palettenlast, maximal automatisch 5 mph und aktuell 15 ft Hubhöhe;
künftige höhere Masten sind keine heutige Bewertung. Debütankündigung vom
15. Februar 2024 steht gegenüber 2025 in der Firmenchronik. RS1: 3500 lb und
maximal 5 mph; Hero/FAQ nennen sechs Fuß, die Spezifikationskarte sechs Zoll.
Dieser Einheitenkonflikt bleibt ungeklärt. Seine Einführung im Dezember 2022 ist
in der CR1-Ankündigung ausdrücklich datiert. EL1: 2700 lb, maximal automatisch
3,4 mph und 5 ft 2 in Hubhöhe. Gabelabmessungen sind keine Körpermaße.
EL1-Seite behauptet VDA5050 2.1; ein Firmenplan vom Juli 2025 für 2026 beweist
keine abgeschlossene Umstellung aller Modelle.

S7: bis 10000 lb gesamte gezogene Wagenlast, keine aufliegende Nutzlast oder
Fahrzeugmasse; maximal automatisch 4 mph und Steigung bis 2,5 Prozent unter
Hersteller-/Einsatzbedingungen. Kein Palettenhub. Auto-Charge und Fleet Central
belegen keine numerische Einzelakku-Laufzeit, volle Ladezeit oder universelle
Kompatibilität. Unbekannte Eigengewichte, IP-Codes und Positioniertoleranzen
bleiben leer. RaaS/ROI liefert keinen konkreten Kaufpreis oder strukturiertes Angebot.

22 nutzbare HTML-URL-Inhalte, davon 21 verschieden, und 46 exakte Stichprobenanker
gegen gespeicherte Bytes geprüft. Zwölf 404-Antworten und drei Highspot-200-
Unsupported-Browser-Seiten ausgeschlossen; zwei Seegrid-Hub-Downloads mit Timeout.
Ein eigener Diagnosebrowser prüfte die drei Viewer, ohne nutzbares PDF. Seine
sieben Prozesse sind beendet. Keine Formulare, visuelle PDF-Prüfung, importierten
numerischen PDF-Suchauszüge oder erneuten Abrufe bekannter gesperrter Hosts.
Versioniertes Quellen-/Entscheidungsprotokoll:
`reports/competitor-batch-81-evidence.json`; Rohbelege lokal unter
`scratch/competitor-research/primary/batch-81/`.

751 Unit-Tests in 60 Dateien, 20 Wettbewerber-Python-Tests und 68 ausgewählte
Browserfälle bestanden: 20 Locus/Seegrid-, 30 Geek+- und 18 Vergleichsfälle,
darunter 24 Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung.
Build 3009 Seiten, ungefähr 461 MB. Datenprüfung null Fehler und 842 Hinweise
(drei weniger): ein neues unbelegtes Erstjahr, ein neues belegtes historisches
Erstjahr und vier bisherige Jahre mit belegtem oder widersprüchlichem Meilenstein.
Lint, Format, Wiederholungsimport (null Ergänzungen), Bestands-, Quellen-,
Seiten-, Vergleichs-, Preis- und globale Feldmetadatenprüfung bestanden.
Alle 152 erfassten eigenen Testprozesse beendet;
Port4321 frei, Ressourcen anderer Aufgaben erhalten. Keine vollständige Browser-Suite.

Gesamtstand: 1959 Modelle/Konfigurationen, 705 Ergänzungen, 847 Merkmalssätze,
3593 Aussagen, 1480 Produktquellenverweise und 74 Firmenfokusse. 10305 Felder auf
644 Modellen: 4781 dokumentiert, 5287 unbekannt, 220 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 342 Feldprüfungen und 176 bleiben offen.
Firmenfokusse decken 72 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `4e7b62d` mit Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
folgen als zweiter Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Robotnik (Batch 82)

15 benannte Angebote in sieben Plattformfamilien plus RB-THERON FP: neun neue
Modelle/Varianten und sechs vertiefte Bestandsprüfungen. 366 Felder: 167 dokumentiert,
189 nicht dokumentiert und zehn widersprüchlich. Firmenfokus ergänzt. Alle 1953
unbeteiligten Katalogzeilen, 644 bisherigen Modellprüfungen, 74 Firmenfokusse und
1961 Quellenidentitäten erhalten. Acht kommerzielle Ergänzungen und eine
Bildungsvariante nutzen bestehende Spalten; keine Kategoriewechsel.

RB-KAIROS: 100 kg mit Standardrädern, 250 kg nur mit stärkeren optionalen Rädern.
115 kg Basismasse und 978×776×690 mm sind keine Maße/Masse der Plus-Installation.
RB-KAIROS+ trennt UR7e/UR12e/UR16e-Armlast 7,5/12,5/16 kg, Restplattformlast
230/215/215 kg und Robotermasse 135/150/150 kg. Separate Armgewichte nicht nochmals
addiert; Rad-/Restlastzuordnung bleibt qualifiziert.

RB-ROBOUT: 1000 kg Standard, 2000 kg nur mit geänderter Länge/Breite. Blattmaße
1758×891×372 mm und 360 kg nicht unbesehen jeder schweren Variante zugeordnet.
Gemeinsamer Hero 8 h steht gegen technisches Basisfeld/Blatt 10 h. RB-ROBOUT+
trennt fünf UR-Arme, konfigurierte Masse und Restlast 755/765/760/735/765 kg;
800-kg-Hero/1000-kg-Basiskomponente nicht ohne Zuordnung gleichgesetzt. UR15-
Höhe 1758 mm in Tabelle gegen 1785 mm in Zeichnung bleibt widersprüchlich.
Optionale 1200-/800-mm-Säulen liefern keine Hubstrecke oder maximale Gabelhöhe.

WATCHER/WATCHER XL: 73/75 kg Selbstmasse, 50/40 kg Fracht, IP54/IP55 sowie 5/10 h.
IP65-Mikrofon und Lautsprecher sind keine IP65-Zertifizierung des Gesamtsystems.
XL-Wechselakku/14-cm-Hindernisfähigkeit nicht auf das Standardmodell übertragen.
FIQUS: 450 kg/1000 kg Fracht, IP42 und 10 h. FIQUS+: 600 kg konfigurierte Masse,
700–720 kg Restplattformlast und getrennte UR-Armlasten bis 35 kg, IP53 und 9 h.
±300 mm Querführung ist keine vertikale Hubstrecke oder zusätzliche Armreichweite;
verstellbare Breite 1177–1610 mm und Doppelarm bleiben Optionen.

SUMMIT: 65 kg, 50 kg Fracht, IP54 und 5 h. SUMMIT+ mit aktuellen Kinova-Optionen
70/72/73 kg, Armlast 0,5/4/4 kg und Reichweite 760/891/902 mm. Blatt-Hero 40 kg
Restlast widerspricht Tabelle 45/43/42 kg. XL-GEN leitet auf RB-GEN+ weiter,
benennt im Inhalt aber SUMMIT+ mit anderen Daten; historische Generation nicht
zugeordnet und keine zusätzliche erfundene Modellkarte angelegt.

THERON: 70 kg/200 kg, 8 h, differentialer Antrieb. Optionale Aufbauhöhe 418 statt
320 mm liefert keine belegte 98-mm-Hubstrecke. THERON+: UR7e in Seite/Tabelle,
UR5e in Blattprosa; 6 h technisch gegen 8 h im selben Blatt-Hero. Alternative
omnidirektionale Basis nicht vollständig den Tabellenwerten zugeordnet. FP ist
als benannte Ausbildungsvariante erfasst: 70 kg/200 kg, 5 h und eigenes Blatt.
Tabelle 717×550×320,5 mm gegen Zeichnung 717,70×550,56×320,40 mm bleibt als
ungeklärte Präzisions-/Rundungsabweichung sichtbar; kein Erstjahr aus AF08.26.

VOGUI: 165 kg Selbstmasse und 150 kg Fracht. VOGUI+ mit UR7e/UR8 Long/UR12e
185/210/200 kg konfigurierte Masse, 7,5/10/12,5 kg Armlast und getrennten Restlasten.
125 kg Plattformangabe auf Seite gegen 130/105/115 kg im Blatt bleibt ungeklärt.
1750-mm-Reichweite des UR8 Long hat ausdrücklich eingeschränkten Arbeitsraum.
Keine numerische Dockinggenauigkeit, volle Ladezeit, Erstjahre oder Preise geraten.
ROS2/RLC/Command Manager/HMI und URCap bleiben Software-/Integrationsbefunde;
Hersteller-UR+/ISO/CE/Alleinstellungsbehauptungen nicht unabhängig zertifiziert.

30 nutzbare URL-Inhalte: 15 HTML und 15 PDF, 28 verschiedene Inhaltskörper. 41 PDF-
Text-/Koordinatenseiten, 114 exakte Stichprobenanker sowie 42 koordinatengeprüfte
Tabellenzeilen mit 98 Zahlenzellen geprüft. 15 öffentliche Viewer-Hüllen zugunsten
der verlinkten PDF-Inhalte ausgeschlossen. Keine Formulare, Recherchebrowser,
bekannten gesperrten Hosts oder visuellen PDF-Prüfungen. Quellenprotokoll:
`reports/competitor-batch-82-evidence.json`; Rohdateien lokal unter
`scratch/competitor-research/primary/batch-82/`.

761 Unit-Tests in 61 Dateien, 20 Wettbewerber-Python-Tests und 66 ausgewählte
Browserfälle bestanden: 28 Robotnik-, 20 Locus/Seegrid- und 18 Vergleichsfälle,
darunter 20 Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Build
3018 Seiten, ungefähr 462 MB. Datenprüfung null Fehler, 851 Hinweise (neun neue
unbelegte Erstjahre). Lint, Format, Wiederholungsimport (null Ergänzungen), Bestands-,
Quellen-, Seiten-, Vergleichs-, Preis- und globale Feldmetadatenprüfung bestanden.
Alle 115 erfassten eigenen Testprozesse beendet;
Port 4321 frei, Ressourcen anderer Aufgaben erhalten. Keine vollständige Browser-Suite.

Gesamtstand: 1968 Modelle/Konfigurationen, 714 Ergänzungen, 856 Merkmalssätze,
3635 Aussagen, 1505 Produktquellenverweise und 75 Firmenfokusse. 10671 Felder auf
659 Modellen: 4948 dokumentiert, 5476 unbekannt, 230 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 345 Feldprüfungen und 173 bleiben offen.
Firmenfokusse decken 73 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `ef7c49f` mit Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
bilden einen separaten Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Rapyuta Robotics (Batch 83)

PA-AMR Weight Inspection als benannte Variante ergänzt; PA-AMR, PA-AMR XL,
PA-AMR Extra High Capacity und AFL vertieft geprüft. 125 Felder: 38 dokumentiert,
83 unbekannt und vier widersprüchlich. Ein Firmenfokus ergänzt. Alle 1964
unbeteiligten Katalogzeilen, 659 früheren Modellprüfungen, 75 Firmenfokusse und
1961 ursprünglichen Quellenidentitäten unverändert; keine neuen CSV-Spalten.

Standard/XL: acht Stunden in HTML gegen zehn Stunden in der weiterhin verlinkten
Familienbroschüre; Batterie-/Generations-/Einsatzzuordnung ungeklärt. Zwei 50-L-
oder vier 10-L-Behälter beim Standardmodell sind von 45 kg Gesamtfracht getrennt.
49×33×30 cm bezeichnen transportierbare Gegenstände, keine Chassisabmessungen.
10–15 cm Lokalisierung bleibt eine Herstellerangabe ohne definierte Fehlermetrik.
Der XL-Link führt zur High-Capacity-Seite; deren 45 kg Eigenmasse und 1,2 m
Gangempfehlung werden ohne Generationenbeleg nicht auf XL übertragen. Kein
zusätzliches identisches Zwei-Behälter-Chassis aus dem Redirect erfunden.
Extra High Capacity behält drei 75-L-Behälter, 39,2 kg Fracht, 63 kg Eigenmasse und
1,2 m/s; die vorläufige Vier-Fuß-Gangbreite ist kein bestätigter Grenzwert.

Weight Inspection: 40 kg Fracht sind keine Eigenmasse. 610×580 mm sind nur
Breite/Tiefe, die Höhe bleibt offen. Bis zu vier Wiegebehälter und Unterstützung
für Behälter bis 50 L belegen keine vier gleichzeitig passenden 50-L-Behälter.
10 g Mindestartikelgewicht und eine Reaktion unter einer Sekunde sind weder
Wiegegenauigkeit noch Kommissionierdurchsatz. Automatische/manuelle Ladung
bleibt mit einer/zwei Stunden getrennt; Ladezustandsfenster und Bedingungen fehlen.

AFL: 1,35 Tonnen und 4,5 m Hubhöhe ohne gemeinsamen Last-Höhen-Nachweis; drei
Stunden Ladung sind keine Betriebsdauer. 30 Paletten pro Stunde sind ein
Einsatzort-Ergebnis. Seitliche Abstände 150–200 mm und 50 mm hinten liefern keine
gesamte Mindestgangbreite. Japan-Verfügbarkeit, Altmodell-Videos und PLd-Sensor-
Behauptung behalten ihren Geltungsbereich. ASRS bleibt als konfigurierbares
Robotik-Lagersystem im Firmenfokus, rapyuta.io als Plattform; kein unbenanntes
Einzelchassis oder garantierter Faktor für Durchsatz/Speicherdichte abgeleitet.

14 URL-Abrufe: neun nutzbare Inhalte (acht HTML und eine verlinkte PDF-Broschüre).
Fünf HTTP-403-Routen ausgeschlossen und nicht erneut angefragt. Neun exakte
Stichprobenanker und Körper-Hashes im Quellenprotokoll
`reports/competitor-batch-83-evidence.json`. PDF-Text ausgewertet, keine visuelle
PDF-Prüfung behauptet. Keine Formulare oder Recherchebrowser verwendet.

769 Unit-Tests in 62 Dateien, 20 Wettbewerber-Python-Tests und 40 ausgewählte
Browserfälle bestanden: 22 Rapyuta- und 18 Vergleichsfälle, darunter zwölf
Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Build: 3019 Seiten,
ungefähr 462 MB. Datenprüfung: null Fehler, 852 Hinweise (ein zusätzliches
unbelegtes Erstjahr). Lint, Format, Wiederholungsimport mit null Ergänzungen,
Bestands-, Quellen-, Seiten-/Export- und Vergleichsprüfung bestanden. Metadaten
aller 664 geprüften Modellseiten mit 10796 Feldern kontrolliert; die übrigen
Herstellerquellen wurden dabei nicht erneut recherchiert. Veraltete öffentliche
Merkmalsdaten im ersten Testlauf erkannt und vor dem finalen Build neu erzeugt.
Alle 236 erfassten eigenen Testprozesse beendet; Port 4321 frei.

Gesamtstand: 1969 Modelle/Konfigurationen, 715 Ergänzungen, 857 Merkmalssätze,
3645 Aussagen, 1511 Produktquellenverweise und 76 Firmenfokusse. 10796 Felder auf
664 Modellen: 4986 dokumentiert, 5559 unbekannt, 234 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 348 Feldprüfungen und 170 bleiben offen.
Firmenfokusse decken 74 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `# BuyAn` mit Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
bilden einen separaten Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Cyberdyne (Batch 84)

Zwölf benannte Angebote ergänzt: HAL-FL08, HAL-FL07, HAL-FL05, Medical HAL Single
Joint, Well-being HAL Single Joint, HAL Lumbar Type for Well-being (BB04), HAL-LB06,
HAL-LB03-SSSJP, HAL-LB01, CL02, Transportation Robot und Medicalcare Pit
(HPD-BT04-JP). HAL-ML08, HAL-ML07 und HAL-ML05 vertieft geprüft. 384 Felder:
96 dokumentiert, 288 unbekannt; ein neuer Firmenfokus. Alle 1966 unbeteiligten
Katalogzeilen, 664 früheren Modellprüfungen, 76 Firmenfokusse und 1961 ursprünglichen
Quellenidentitäten unverändert; keine neuen CSV-Spalten oder Kategorieübertragungen.

Bei HAL bleiben Medizin-/Well-being-Angebote, Ein-/Zweibeinmasse inklusive Zubehör,
Geräteabmessungen und Körpergrößen/-massen getrennt. Die EU-Unterlage gilt nur für
ML07/ML08. Einzelgelenk-Masse/-Maße schließen Steuerung und Batterie aus. BB04 hat
eine gemeinsame 3,1-kg-Tabellenzelle für drei Größen; Lauf-/Ladezeit bleiben unbekannt.
Die japanische Arbeitshilfe ist ausdrücklich LB06 (2,7 kg, Batterieumfang offen;
zehn Stunden Betrieb, drei Stunden Ladung), die englische LB03-SSSJP (3,1 kg mit
Batterie; 4,5 Stunden Betrieb, zwei Stunden Ladung). Keine Sprachalias-Gleichsetzung
oder Übernahme dieser Werte auf das erwähnte LB01. IPX4 und IP5X bleiben getrennte
Herstellerangaben. Ein neuer Filter „Arbeitsunterstützung“ mit englischen/deutschen
Texten erschließt die gewerblichen Arbeitshilfen.

CL02: bis 3000 m² je Ladung ist kein Stundenwert; optionale Desinfektionseinheit
und Fahrstuhlanbindung bleiben optional. Transportplattform: 200 kg Bordfracht
sind keine Zugkraft und keine 25 kg Eigenmasse; Japan-Verfügbarkeit bleibt begrenzt.
Medicalcare Pit: robotisch unabhängige linke/rechte Entlastung mit HAL-Daten;
120 kg Körpermasse inklusive HAL/Orthesen sind keine freie Fracht. Bandgeschwindigkeit
0,2–8 km/h und 110 mm Einstiegshöhe sind weder mobile Fahrgeschwindigkeit noch
Hubweg. HALTREAD, All-in-One, Acoustic X, CYIN und Dienste bleiben abgegrenzte
Portfoliofunde. Keine Zulassung oder unabhängige klinische Wirkung bestätigt.

26 Abrufversuche: 24 nutzbare Inhalte (23 HTML und eine 14-seitige PDF). Ein
vorübergehender DNS-Fehler wurde behoben; eine bildbasierte vierseitige Broschüre
bleibt ungelesen und ausgeschlossen. 24 exakte Stichprobenanker und Körper-Hashes,
sechs HTML-Modellspalten, zwei gemeinsame Massezellen und sechs PDF-Zellen anhand
der Textkoordinaten geprüft. Keine visuelle PDF-Prüfung behauptet. Keine gesperrten
Hosts erneut angefragt, Formulare oder Recherchebrowser verwendet. Dauerhafte
Quellen-/Entscheidungsbelege: `reports/competitor-batch-84-evidence.json`.

781 Unit-Tests in 63 Dateien, 20 Wettbewerber-Python-Tests und 44 ausgewählte
Browserfälle bestanden: 26 Cyberdyne- und 18 Vergleichsfälle, darunter zwölf
Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Zwei anfängliche
Testfehler erwarteten einen Dezimalpunkt im deutschen Vergleich; die bestehende
korrekte Kommadarstellung und Modellqualifikation werden nun ausdrücklich geprüft.
Build: 3031 Seiten, ungefähr 469 MB. Datenprüfung: null Fehler, 864 Hinweise
(zwölf zusätzliche unbelegte Erstjahre). Lint, Format, Wiederholungsimport mit null
Ergänzungen, Bestands-, Quellen-, Seiten-/Export- und Vergleichsprüfung bestanden.
Metadaten aller 679 geprüften Modellseiten mit 11180 Feldern kontrolliert, ohne
erneute Herstellerrecherche für frühere Modelle. Alle 265
erfassten eigenen Testprozesse beendet; Port 4321 frei.

Gesamtstand: 1981 Modelle/Konfigurationen, 727 Ergänzungen, 869 Merkmalssätze,
3698 Aussagen, 1536 Produktquellenverweise und 77 Firmenfokusse. 11180 Felder auf
679 Modellen: 5082 dokumentiert, 5847 unbekannt, 234 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 351 Feldprüfungen und 167 bleiben offen.
Firmenfokusse decken 75 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `d4695f0` mit Daten, Filter und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
bilden einen separaten Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Interbotix und Trossen (Batch 85)

28 benannte Angebote ergänzt, drei bestehende ALOHA-Kits vertieft geprüft.
590 Felder: 200 dokumentiert, 353 unbekannt, neun widersprüchlich und 28 Roadmap.
Zwei Firmen-/Markenfokusse ergänzt. Alle 1978 unbeteiligten Katalogzeilen,
679 früheren Modellprüfungen, 77 Firmenfokusse und 1961 ursprünglichen
Quellenidentitäten unverändert; keine neuen CSV-Spalten oder Kategorieübertragungen.
Trossens bestehendes Quellenprofil ordnet nun ausdrücklich die 16 neuen Angebote
unter „Trossen Robotics“ zu. Interbotix bleibt eine getrennte Hardwaremarke mit
15 Modellen. Keine Quellennamen, Aliasse oder Erfassungsdaten überschrieben.

Zwölf X-Series-Arme mit eigener Modellübersicht: PincherX-100/-150,
ReactorX-150/-200, WidowX-200/-250/-250 6DOF, ALOHA WidowX-250 6DOF,
ViperX-250/-300/-300 6DOF und ALOHA ViperX-300 6DOF. Volle angegebene Arbeitslast
nur mit empfohlener maximal halber Ausladung; Arbeitsraum und Kühlpausen bleiben
qualifiziert. Servozahl ist keine Arm-DOF-Zahl, Wiederholgenauigkeit keine absolute
Genauigkeit. PincherX-150 nennt wörtlich 150 mm Reichweite bei 900 mm Gesamtspanne;
keine eigenmächtige Korrektur auf 450 mm. Axiale Kettenlänge und Greiferwagenabstand
bleiben von Reichweite und Kontaktöffnung getrennt.

ALOHA Stationary/Mobile/Solo bleiben die ursprünglichen Interbotix-Kits. Mobile
nennt 122 kg, 1 m/s und 1,4 kWh; Energie wird nicht zu Laufzeit umgerechnet.
750 g Traglast und 750 mm Reichweite gehören zum jeweiligen ViperX-Follower mit
Ausladungsgrenze. Frühere Trossen WidowX AI Base/Leader/Follower und die drei
AI-Kits bleiben eigene Angebote. Sechs Armachsen plus Greifer sind keine sieben
Armachsen. Rechneroptionen und Aussagen zur Modellkompatibilität behalten ihre
Bedingungen; weder Kit-Gesamtmassen noch aktuelle Lieferbarkeit abgeleitet.

Neue WidowX Core Follower, Core Leader, Pro und Heavy sowie Rivet Base, die
Rivet-Konfiguration mit zwei Pro-Armen/Kameras, drei Workbench-Lite-Arm-/Kamera-
Pakete und der angekündigte volle Workbench sind separat erfasst. Aktuelle
Arm-Unterlagen sind ausdrücklich vorläufig: Core/Pro-Reichweite 790 mm statt
700 mm auf der Produktseite, Heavy 1114 mm statt 1400 mm. Heavy nennt 6 kg je Arm,
das Workbench-Heavy-Paket 8 kg; Konfiguration/Lastbedingungen ungeklärt. Die
2026-Preise sind vorgeschlagen und warten auf Freigabe, keine festen strukturierten
Kaufangebote. Rivet Base enthält keine Arme, Kameras oder eingebauten Rechner;
890 mm sind vertikaler Verfahrweg, keine absolute Hubhöhe. Lite-Kamerapakete und
Rechnerverzicht bleiben getrennt, voller Workbench ausdrücklich „coming soon“.
Glide ist passiv, Cockpit ein Bedienstand und TRumi ein handgeführter Datensammler.
Sie sowie Computer, Dienste und fremde UGV-Angebote sind keine zusätzlichen
angetriebenen Roboter unter dieser Marke. SLATE/LoCoBot bleiben offene Folgespuren.

41 HTML-/PDF-Abrufe: 40 nutzbare Fach-/Portfolioquellen (35 HTML, fünf PDF mit
14 Textseiten); ein kurzer Dokumentationsindex dient nur der Linkfindung. Zwölf
Modelltabellen, eine expandierte Drei-Modell-Tabelle und 41 weitere exakte Anker
geprüft; Hashes und Spaltenzuordnung dauerhaft in
`reports/competitor-batch-85-evidence.json`. Zwei Rasterzeichnungen heruntergeladen,
aber wegen nicht verfügbarer Bildansicht nicht visuell geprüft; keine Maße daraus
abgeleitet. Keine Formulare/Warenkorbaktionen oder Recherchebrowser verwendet.
Früher gesperrte Hosts wurden nicht erneut angefragt.

793 Unit-Tests in 64 Dateien, 20 Wettbewerber-Python-Tests und 50 ausgewählte
Browserfälle bestanden: 32 Interbotix/Trossen- und 18 Vergleichsfälle, darunter
zwölf Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Build: 3059
Seiten, ungefähr 473 MB. Datenprüfung: null Fehler, 892 Hinweise (28 zusätzliche
unbelegte Erstjahre). Lint, Format, Wiederholungsimport mit null Ergänzungen,
Bestands-, Quellen-, Seiten-/Export- und Vergleichsprüfung bestanden. Metadaten
aller 710 geprüften Modellseiten mit 11770 Feldern kontrolliert, ohne erneute
Herstellerrecherche für frühere Modelle. Anfängliche Testannahmen über Profilfelder,
Trossens bislang leeren eigenen Produktbestand, Abschnittswortlaut und URL-Fragmente
korrigiert; veralteten Zwischenbuild vor dem finalen Build beendet. Alle
430 erfassten eigenen Testprozesse beendet; Port 4321 frei.

Gesamtstand: 2009 Modelle/Konfigurationen, 755 Ergänzungen, 897 Merkmalssätze,
3847 Aussagen, 1645 Produktquellenverweise und 79 Firmenfokusse. 11770 Felder auf
710 Modellen: 5282 dokumentiert, 6200 unbekannt, 243 widersprüchlich, 45 Roadmap.
643 exakte Herstellerbezeichnungen; 1036 Profile, davon 632 mit/404 ohne Modelle.
Von 518 ursprünglichen Zielen haben 354 Feldprüfungen und 164 bleiben offen.
Firmenfokusse decken 76 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `fa00c6b` mit Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
bilden einen separaten Commit; der Hauptbranch bleibt unverändert.

## Ergänzung vom 2. November 2026 – Ozobot (Batch 86)

Vier bestehende Modelle geprüft: Ari, Evo, Bit und getrennt davon Bit+.
68 Felder: 23 dokumentiert, 45 unbekannt. Keine neuen Robotermodelle oder
CSV-Spalten. Bit+ erhält eigene Primärmerkmale, Ozobot einen Firmenfokus.
Alle 2005 unbeteiligten Katalogzeilen, 710 früheren Feldprüfungen, 79 früheren
Firmenfokusse und 1961 ursprünglichen Quellenidentitäten bleiben unverändert.
Originale Inventardaten und die getrennte Bit/Bit+-Zuordnung bleiben erhalten.

Ari: 57 g Roboter, 43 × 43,0 mm Breite/Höhe ohne erfundene Tiefe, 3,7 V /
1050 mAh und etwa 240 Minuten Herstellerlaufzeit. 0,9 kg gehören zum Ladekoffer,
nicht zum Roboter; JSON-Versandgewicht 907 g wird nicht übertragen.
Etwa 60 Minuten mit externem 5 V / 1 A Ladegerät und etwa 168 Minuten bis 80 %
im Ladekoffer sind unterschiedliche Methoden/Zielzustände. PC-basierte
Editor-/Python-Programme verlangen laut Datenblatt laufende WLAN-Verbindung;
Bluetooth-/Flashloading-Angaben der Kompatibilitätstabelle behalten ihren
ungeklärten Workflow-/Firmwarebezug. Android/AI-Werbung belegt kein lokales
Generativmodell und keine gemessenen Lernresultate.

Evo: Herstellerdatenblatt nennt 1 oz Roboter und getrennt 2 lb Ladekoffer,
33,5 × 33,0 mm Breite/Höhe ohne Tiefe sowie etwa 60 Minuten Betrieb. Der ältere
geteilte Bit/Evo-Leitfaden nennt 60–90 Minuten ohne Betriebsmodus. Das ist keine
unabhängig gemessene Maximaldauer. 60 Minuten kabelgebundenes Laden und 60 Minuten
bis 80 % im Koffer bleiben getrennt. Gespeicherte Blockly-Programme bis 2 kB
können ohne aktiven PC laufen; daraus folgt kein eigenständiges Python.
Die Datenblattüberschrift „Python over WiFi“ widerspricht ihrer eigenen
BLE-Verbindungsbedingung und belegt keine native WLAN-Hardware. Zehn RGB-LEDs
auf der aktuellen Produktseite gegenüber fünf Front-/einer oberen LED im alten
Leitfaden bleiben ein ungeklärter Revisionsunterschied.

Original Bit: bis 40 Minuten Laden und geteilte historische 60–90-Minuten-Laufzeit,
Einzeltastensteuerung und Farbcode-/OzoBlockly-Lernen sind im alten Leitfaden
belegt. Sie werden nicht auf Bit+ übertragen. Für Bit+ sind Blockly und Arduino
via WebUSB im eigenen Hersteller-Kompatibilitätsblatt belegt. Die bisherigen
unbelegten Angaben zu Preis, Geschwindigkeit, Laufzeit und Erscheinungsjahr
wurden entfernt; Schulstufen werden nicht als Lebensalter ausgegeben.

Ari Entry Kit 250 USD und Evo Entry Kit 175 USD sind über exakte Produkt-/
Variantenmetadaten mit ausdrücklicher Währung belegt. Enthaltenes Zubehör,
Mehrfachpacks, Schulungs-/Curriculumpakete, Handelsrabatte und Lieferzusagen sind
getrennt. Das öffentliche Produkt-JSON enthält 82 Angebote, darunter ein
„Ora EEK Bundle“ mit leerem Beschreibungstext. Das reicht nicht für eine
exakte Ora-Modell-/Herstellerzuordnung oder zusätzliche Roboterkarte.

19 Quellenversuche: 16 HTTP-200-Inhalte, darunter zehn PDFs mit 59 Textseiten;
zwei vorübergehende DNS-Fehler und ein abschließendes HTTP 429. Danach keine
weiteren Anfragen an den Haupt-Host. PDF-Text und Wortkoordinaten sind gesichert,
keine visuelle PDF-/Checkbox-Auswertung behauptet. Die Wettbewerber-Hosts und
anderen früher gesperrten Hersteller wurden nicht erneut abgefragt.

Stand: 2009 Modelle/Konfigurationen, 898 Merkmalsdatensätze (755 Aufgaben-Ergänzungen,
143 bestehende Anreicherungen), 3863 Aussagen, 1654 Produktquellenverweise,
80 Firmenfokusse auf 77 der 591 Quellen-Firmengruppen. 11838 Felder auf 714
Modellseiten: 5305 dokumentiert, 6245 unbekannt, 243 widersprüchlich, 45 Roadmap.
Die ursprünglichen 518 Rechercheziele haben jetzt 357 Feldprüfungen und 161 bleiben offen.
Drei Modellidentitäten, neun Listing-Identitäten, 862 Detailinhalte und historische/
regionale Portfolios bleiben offen. Marktführerschaft ist nicht gemessen.

Prüfung: 793 Unit-Tests in 64 Dateien, 20 Python-Tests und 30 ausgewählte Browserfälle
bestanden (12 Ozobot, 18 Vergleich; darin acht Axe-Läufe). Build: 3059 Seiten,
473 MB. Datenprüfung: 0 Fehler, 894 Warnungen; zwei zusätzliche Warnungen folgen aus
entfernten unbelegten Erscheinungsjahren. Lint, Format, Import mit null Ergänzungen,
Offline-Refresh, Quellenhashes, Export-/Quellenerhalt und alle 714 gerenderten
Prüfseiten bestanden. Anfangs falsche Bestandskonstanten und Annahmen in den
zusätzlichen Prüfskripten wurden korrigiert; kein Anwendungsalgorithmus geändert.
Eigene Testserver, Browser und Hilfsprozesse beendet und geprüft.

Dauerhafter Beleg: `reports/competitor-batch-86-evidence.json`.

## Ergänzung vom 2. November 2026 – UFACTORY (Batch 87)

Vier neue Modelle: UFACTORY 850, Lite 6 sowie historisch getrennte uArm Swift und
uArm Metal. Vier bestehende Modelle geprüft: xArm 5/6/7 und uArm Swift Pro.
144 Felder: 58 dokumentiert, 83 unbekannt und drei widersprüchlich. Ein
Firmenfokus am bestehenden katalogeigenen UFACTORY-Profil ergänzt; keine
Zusammenführung mit einem Quellen-Händler/-Integrator. Alle 2005 unbeteiligten
Katalogzeilen, 714 früheren Feldprüfungen, 80 früheren Firmenfokusse und 1961
ursprünglichen Quellenidentitäten bleiben unverändert. Keine neuen CSV-Spalten.

Die aktuelle dreispaltige xArm-PDF-Tabelle und die fünf Modelle umfassende
Vergleichstabelle wurden einschließlich horizontal verbundener Zellen geprüft.
xArm 5/6/7 behalten 3/5/3,5 kg Last, 700 mm Reichweite, 5/6/7 Achsen, 1 m/s TCP-
Tempo und ±0,1 mm Wiederholbarkeit. Das ist keine absolute Positioniergenauigkeit.
Das 1305-Handbuch nennt 11,3/12,5/14,3 kg Armmasse; der Support-Vergleich dagegen
11,2/12,2/13,7 kg. Eine genaue Revisionszuordnung ist nicht geklärt. Der Support
nennt xArm 5 Lite und vier flexible kartesische Steuergrößen x/y/z/yaw trotz
fünf mechanischer Achsen; daraus entsteht keine zusätzliche unbelegte Lite-Karte.
850-Werte aus benachbarten Vergleichsblöcken werden nicht auf xArm übertragen.

850: sechs Achsen, 5 kg Last, 850 mm Reichweite, 20 kg Armkörper, 1 m/s und
±0,02 mm Wiederholbarkeit; Gigabit-Ethernet-Leitung für externe Peripherie.
Lite 6: sechs Achsen, 600 g Last, 440 mm Reichweite, 8 kg, 0,5 m/s und ±0,5 mm;
Steuerung in der Basis integriert. Ø190 mm bzw. 130 × 140 mm sind Grundflächen,
keine vollständigen Körperhüllen. Externe Steuerungsgewichte/-maße und die
IP40-Zeile des Gripper G2 bleiben Komponentendaten. Versionsabweichungen der
Steuerungen werden nicht als Armmasse oder vollständige Systemmaße ausgegeben.
Kollisionserkennung vergleicht Motorstrom mit einem dynamischen Modell und
hängt unter anderem von Last, Schwerpunkt, Montage und Reibungsparametern ab;
das belegt keinen enthaltenen Kraftsensor und keine unabhängig sichere Zelle.

Swift Pro: Entwicklerhandbuch Seite 13 nennt 2,2 kg, vier DOF, 500 g Maximal-
last, 50–320 mm Arbeitsbereich, 100 mm/s und 0,2 mm Wiederholbarkeit ohne ±.
150 × 140 × 281 sind ausdrücklich Millimeter; der alte Zentimeterwert und das
alte Tempo von 0,5 m/s wurden korrigiert. Verfügbare Benutzerhandbuchversion
4.10.2 streicht 3D-Druck, mobile Bluetooth-Verbindung, OpenMV und Gravieren.
Ältere Entwicklerbeispiele werden nicht zu aktuellen Studio-Funktionszusagen.
Swift/Swift Pro und Metal sind über getrennte, vom Herstellerhandbuch aus
verlinkte ROS-/Python-/Firmware-Projekte belegt. Physische Werte für den
ursprünglichen Swift und Metal bleiben leer; sie erben keine Pro-Daten.
Lesbare kanonische README-Seiten dienen als öffentliche Quellenlinks; die
zugehörigen öffentlichen API-Inhalte mit Hashes belegen den Abruf.

Produktseiten nennen für 850 und Lite 6 Einstiegspreise von 8999 bzw. 2999 USD;
sie bleiben ohne belegte Lieferkonfiguration qualifiziert und erzeugen kein
festes strukturiertes Angebot. Unterschiedliche xArm-Familien-Einstiegspreise,
„seit 2018“, PDF-Uploadpfade und SDK-Daten belegen weder Einzelmodell-Preise noch
Erscheinungsjahre. Gripper, Kraftsensor, Kamerahalter, Steuerungen, Slider/
Conveyor, Simulationssoftware und Integrator-Zellen sind getrennte Rollen.

26 Quellenversuche: 23 HTTP-200-Inhalte, darunter zehn PDFs mit 344 extrahierten
Textseiten und vier historische README-Antworten. Zwei DNS-Fehler und eine
404-Antwort auf einen nicht vorhandenen Repository-Kandidaten bleiben als nicht
nutzbare Belege erhalten. Keine früher gesperrten Wettbewerber-/Hersteller-Hosts
erneut angefragt, keine Formulare oder Warenkorbaktionen. Ausgewählte Textanker,
Wortkoordinaten und Tabellenzellen geprüft; keine visuelle Zeichnungsauswertung
oder vollständige historische/regionale Portfoliozertifizierung behauptet.

Stand: 2013 Modelle/Konfigurationen, 903 Merkmalsdatensätze (759 Aufgaben-Ergänzungen,
144 bestehende Anreicherungen), 3898 Aussagen, 1683 Produktquellenverweise,
81 Firmenfokusse auf 77 der 591 Quellen-Firmengruppen. 11982 Felder auf 722
Modellseiten: 5363 dokumentiert, 6328 unbekannt, 246 widersprüchlich, 45 Roadmap.
Die ursprünglichen 518 Rechercheziele haben jetzt 360 Feldprüfungen und 158 bleiben offen.
Drei Modellidentitäten, neun Listing-Identitäten, 862 Detailinhalte und historische/
regionale Portfolios bleiben offen. Marktführerschaft ist nicht gemessen.

Prüfung: 793 Unit-Tests in 64 Dateien, 20 Python-Tests und 32 ausgewählte Browserfälle
bestanden (14 UFACTORY, 18 Vergleich; darin acht Axe-Läufe). Build: 3063 Seiten,
474 MB. Datenprüfung: 0 Fehler, 900 Warnungen; vier neue und zwei entfernte unbelegte
Erscheinungsjahre erklären sechs zusätzliche Warnungen. Lint, Format, Import mit
null Ergänzungen, Offline-Refresh, Quellenhashes, Export-/Quellenerhalt und alle
722 gerenderten Prüfseiten bestanden. Nach Verfeinerung der historischen Quellen-
links erneut auf dem endgültigen Datenstand gebaut; kein Anwendungsalgorithmus
geändert. Eigene Testserver, Browser und Hilfsprozesse beendet und geprüft.

Dauerhafter Beleg: `reports/competitor-batch-87-evidence.json`.


## Ergänzung vom 2. November 2026 – Realbotix (Batch 88)

Sechs bestehende Identitäten geprüft: Aria, B-Series, M-Series, F-Series,
Echo Tabletop und Echo Full Body. Keine neue Modellkarte. 102 Felder: 21
dokumentiert, 74 unbekannt und sieben Roadmap. Ein Herstellerfokus ergänzt.
Alle 2007 unbeteiligten Katalogzeilen, 722 früheren Feldprüfungen, 81 früheren
Firmenfokusse und 1961 ursprünglichen Quellenidentitäten bleiben unverändert.

Aria bleibt als historische Demonstrator-Identität erreichbar, bezeichnet im
aktuellen Echo-Angebot aber eine wählbare Persona auf zwei Hardwareplattformen.
Die alten unbelegten Preis-, Masse-, Fahrtempo-, Laufzeit- und Alterswerte sind
entfernt. Aria/Mila/Dave/Amar ergeben keine acht zusätzlichen Roboter; die
Ereignisnamen David und Melody sind ohne eindeutige Hardwarezuordnung keine
neuen Standardmodelle. Die CES-Gesprächsdauer ist kein Akkulaufzeittest.

Der Herstellerbericht von 2025 beschreibt B-Series als Büste mit 17 bewegten
Gesichtspunkten, nicht mit verifizierten 17 mechanischen DOF. M-Series hat 39 DOF
und bleibt ab der Taille stationär. F-Series hat 44 DOF, eine motorisierte
Radbasis und eine geschätzte Akkulaufzeit von 4–8 Stunden ohne Testprofil.
Die frühere Angabe „480 min“ als Maximaldauer ist entfernt. Berichtspreise sind
historische Startbeträge; aktuelle Lieferkonfigurationen und Erstveröffentlichung
bleiben unbekannt. Die bisher unbelegten vier Erscheinungsjahre sind entfernt.

Die aktuelle Echo-Matrix wurde mit getrennten Hardware- und Persona-Spalten
geprüft: Tabletop 17 DOF, ca. 25 lb, 13 × 13 in Grundfläche und 31/32 in Höhe;
Full Body 39 DOF, ca. 88 lb, 28 × 28 in und 72/77 in. Höhen unterscheiden
weibliche/männliche Konfigurationen. Full-Body-Finger, Stereo-Kameras und vier
Mikrofone werden nicht automatisch auf Tabletop übertragen. Produktionswerte
bleiben angekündigt; Gehen, Last und Akkulaufzeit sind nicht belegt.

Die Preise werden als angezeigte Dollarbeträge ohne unbelegte ISO-Währung
geführt. Kaufbetrag, 199-Dollar-Reservierung, Pflicht-KI-Abo ab 19,99/Monat,
Steuern/Versand und optionale Vinci-Hardware bleiben getrennt. Gesprächsstunden
sind Tarifkontingente. Vinci benötigt Enterprise with Vision; dessen lokale
Verarbeitung belegt keinen pauschalen Offlinebetrieb sämtlicher KI-Funktionen.
Die Datenschutzerklärung beschreibt auch externe KI-/Sprachverarbeitung.

Die Veröffentlichung vom 26. Oktober 2026 plant Lieferung ab dem zweiten
Halbjahr 2027: zunächst 225 Tabletop und 25 Full Body. Reservierungen sind laut
Bedingungen auf 50 US-Staaten/DC begrenzt; Termine sind unverbindliche Schätzungen.
Der digitale Zwilling ist für 2027 angekündigt. Volljährigkeit des Kontoinhabers
ist keine 18–99-Nutzerfreigabe; Wellness-Themen belegen keine klinische Wirkung.

Aktuell: 2013 Katalogeinträge, 643 exakte Herstellernamen, 1036 Profile, 632 mit
und 404 ohne Modelle. 904 Merkmalsdatensätze (759 Ergänzungen/145 bestehende
Anreicherungen), 3916 Aussagen, 1693 Produkt-Quellenreferenzen. 82 Firmenfokusse
auf 78 der 591 Quellen-Firmengruppen. 12084 Felder auf 728 Modellseiten:
5384 dokumentiert, 6402 unbekannt, 246 widersprüchlich und 52 Roadmap.
Von 518 ursprünglichen Prüf-Zielen haben 363 Feldprüfungen, 155 warten;
die 5955 Zielfelder enthalten 2734 dokumentierte, 3058 unbekannte,
153 widersprüchliche und zehn Roadmap-Werte. Offen bleiben drei Modellidentitäten,
neun Listingidentitäten und alle 862 Buy-Detailinhalte. Vollständige historische
Herstellerabdeckung oder Marktführerschaft ist nicht bewiesen.

793 Unit-Tests/64 Dateien, 20 Python-Tests und 34 ausgewählte Browserfälle
bestanden (16 Realbotix/18 Vergleich, einschließlich acht Axe-Läufen). Build:
3063 Seiten, ca. 474 MB; Audit: null Fehler/904 Warnungen. Vier zusätzliche
Warnungen stammen von entfernten unbelegten Erscheinungsjahren. Lint, Format,
Import-Trockenlauf (null Ergänzungen), Offline-Refresh, sechs Modellseiten/
Exporte, vollständiger Vergleichsdatentransport und alle 728 gerenderten
Prüfseiten geprüft. Ein kopierter Scratch-Checker erwartete zunächst 54 statt
51 Exportfelder aus drei Humanoid-Prüfungen; nach Korrektur bestanden. Keine
Anwendungsänderung erforderlich. 14 Quellenversuche, 13 HTTP-200-Antworten,
darunter zwei PDF-Dokumente/28 Textseiten; ein FAQ-DNS-Fehler ausgeschlossen.
Keine visuelle PDF-Prüfung. Eigene Testprozesse und Browserressourcen beendet.
Dauerhafter Beleg: `reports/competitor-batch-88-evidence.json`.


## Ergänzung vom 2. November 2026 – LEGO (Batch 89)

Vier benannte Set-Konfigurationen ergänzt: MINDSTORMS NXT 2.0 8547 sowie
Computer Science & AI 45520 (K-2), 45521 (3-5), 45522 (6-8). Fünf bestehende
Identitäten geprüft: ursprüngliches NXT, EV3, Robot Inventor 51515 und SPIKE
Essential/Prime. 153 Felder: 35 dokumentiert, 118 unbekannt. Ein Herstellerfokus
am bestehenden LEGO-Education-Profil ergänzt. Alle 2008 unbeteiligten CSV-Zeilen,
728 früheren Feldprüfungen, 82 früheren Firmenfokusse und 1961 ursprünglichen
Quellenidentitäten bleiben unverändert. Zwei öffentliche Echo-Preishinweise
verlieren nur einen technischen Darstellungsbegriff; Aussagen/Quellen/Felder
bleiben unverändert. Keine neuen CSV-Spalten oder Profilzusammenführungen.

Set-Identitäten bleiben getrennt: NXT 8527 (579 Teile/2006), NXT 2.0 8547
(619/2009), EV3-Heimset 31313 (601/2013) und Robot Inventor 51515 (949/2020).
Die EV3-Katalogidentität beschreibt nicht automatisch alle Education-Bundles.
MicroPython startet bei EV3 von einer 4–32-GB-microSD-Karte; das ist weder
interner RAM noch eine universelle Softwarelösung für alle Generationen.
ARM9/Linux und Entwicklerprotokolle stammen aus der EV3-Dokumentation.
Blast, Charlie, Tricky, Gelo und M.V.P. sind fünf alternative Robot-Inventor-
Bauten eines Sets, keine fünf zusätzlich verkauften Roboter. Blast-Höhe und
Hub-Sensorachsen werden nicht als Set-Abmessung/mechanische DOF übertragen.

SPIKE Essential: Veröffentlichung vom 17. August 2021 nennt 449 Steine,
vier Minifiguren sowie Hub, Motoren, Lichtmatrix und Farbsensor; Alter 6+.
SPIKE Prime: Hersteller-FAQ nennt 528 Elemente, Alter 10+, sechs Hub-Ports,
5×5-Matrix, USB/Bluetooth und Python. Die 63 g ohne Akku und 88×56×32 mm sind
Hub-Werte; sie ersetzen keine Gesamtmasse oder vollständige Roboterhülle.
Akku: 2100 mAh/7,3 V und Zyklenbedingungen sind keine Betriebsstunden. Die
FAQ nennt ca. drei Stunden Ladung leer→voll bei USB 500 mA. Unbelegte feste
Set-Gewichte, Größen, Laufzeiten, Handtypen und Alters-Obergrenzen entfernt.

Direktverkauf von SPIKE endete am 30. Juni 2026. App-/Lehrplansupport ist bis
30. Juni 2031 geplant; keine neuen Funktionen nach Verkaufsende. Die aktuelle
Hersteller-FAQ nennt Wettbewerbseinsatz bis zur Saison 2027–2028, CS & AI ab
2026–2027. Das ist keine unbefristete Teilnahme- oder Betriebssystemzusage.
Die gemeinsame Prime-Produktseite enthält einen Essential-Textfehler; benannte
Setnummer, separate FAQ, Ruhestandstabelle und Komponentenblätter bestimmen
die Zuordnung. Ersatzteile/Erweiterungen bleiben Komponenten, keine Roboter.

Aktuelle CS-&-AI-Einzelsets: 45520 mit 276 Steinen/einem Einzelmotor, 45521 mit
321/einem Doppelmotormodul, 45522 mit 379/Doppel- plus Einzelmotor und Controller.
Farbsensor/Karten bleiben setgenau; 45522 nennt zwei statt einer Verbindungskarte.
Die strukturierten Herstellerangebote bestätigen 339,95/429,95/529,95 USD,
getrennt von Sechser-Klassenpaketen und erforderlichem Nutzergerät. Dreißig
Lektionen in sechs Einheiten, Gerätelokalität, PIN-Zugang, Offline-Nutzung nach
Installation und nötiger Internetzugriff für Einrichtung/Updates/Lehrerportal
behalten ihren Funktionsbereich. MoveNet/Pose-/Klassifizierungslernen ist kein
Chatbot, keine enthaltene Roboterkamera und kein autonomer Navigationsbeleg.
Schulklassenbänder werden nicht in Lebensalter oder Achszahlen umgedeutet.

41 Quellenversuche: 31 HTTP-200-Antworten, zwei DNS-Fehler, ein 403 und sieben
404. Vier leere Service-/Redirect-Antworten ausgeschlossen, darunter der
RCX/RIS-Kandidat 9719; HTTP 200 belegt dort kein Produkt. Fünf PDFs gespeichert:
60 Textextraktionsseiten plus 24 bildbasierte NXT-Seiten ohne nutzbaren Text.
Keine visuelle PDF-Prüfung, kein Übertragen ungesehener Bilddetails. Der zunächst
einmal aufgerufene Robot-Inventor-Verkaufspfad war schon in Batch 12 mit 403
protokolliert und antwortete erneut 403; er wurde ausgeschlossen und nicht
weiter angefragt. Öffentliche Presse-/Servicequellen lieferten die Belege.
Weitere RCX/RIS-, WeDo-/BOOST-, Education-/Retail-Bundles, vollständige historische
Portfolios und heutige Legacy-Softwarekompatibilität bleiben offen.

Aktuell: 2017 Katalogeinträge, 643 exakte Herstellernamen, 1036 Profile,
632 mit/404 ohne Modelle. 910 Merkmalsdatensätze (763 Ergänzungen/147 bestehende
Anreicherungen), 3954 Aussagen, 1716 Produkt-Quellenreferenzen. 83 Firmenfokusse
auf 79 der 591 Quellen-Firmengruppen. 12237 Felder auf 737 Modellseiten:
5419 dokumentiert, 6520 unbekannt, 246 widersprüchlich, 52 Roadmap. Von 518
ursprünglichen Prüfzielen haben 366 Feldprüfungen, 152 warten. Die 6006 Zielfelder
enthalten 2748 dokumentierte, 3095 unbekannte, 153 widersprüchliche und zehn
Roadmap-Werte. Offen: drei Modellidentitäten, neun Listingidentitäten und alle
862 Buy-Detailinhalte; Vollständigkeit und Marktführerschaft nicht bewiesen.

793 Unit-Tests/64 Dateien, 20 Python-Tests und 34 ausgewählte Browserfälle
bestanden (16 LEGO/18 Vergleich, einschließlich acht Axe-Läufen). Build:
3067 Seiten/ca. 475 MB, Audit null Fehler/907 Warnungen; drei zusätzliche
Warnungen stammen von neuen Kits ohne belegtes Erstveröffentlichungsjahr.
Lint, Format, Import-Trockenlauf null Ergänzungen, Offline-Refresh, neun
Modellseiten/Exporte, Vergleichsdatentransport und alle 737 gerenderten Prüfseiten
geprüft. Nach Textglättung und Synchronisierung der neuen Prüfnotizen wurden
Unit/Build/Audit auf dem finalen Stand erneut ausgeführt. Keine Anwendungs-
Algorithmen geändert. Eigene Testprozesse/Browserressourcen beendet.
Dauerhafter Beleg: `reports/competitor-batch-89-evidence.json`.


## Ergänzung vom 2. November 2026 – SMP Robotics (Batch 90)

17 benannte Konfigurationen ergänzt, drei vorhandene Modelle geprüft und ein
Herstellerfokus ergänzt. 370 Datenfelder: 71 dokumentiert, 296 unbekannt,
drei widersprüchlich. Unverändert bleiben 2014 unbeteiligte Katalogzeilen,
737 frühere Feldprüfungen, 83 Firmenfokusse und 1961 Quellenidentitäten.
Keine neuen CSV-Spalten oder Übertragung bestehender Modelle in andere Kategorien.
Die neuen S8-Varianten stehen unter Outdoor/Garten; S2 erhält Inspektion und S4
Landwirtschaft als belegte Suchzuordnung. Anwendungsalgorithmen unverändert.

Ergänzungen: Promt S5.2 IS 2020, Herchel S5.2 PTZ IR IS 2020, Prompt S5.2 ISD 2021,
S2 Umweltmessung, S3.2 Thermografie, S4 Vogel-/Tierabwehr, S6.3 Gasinspektion,
S5 G, S5 Gas Detector Solar, A5 Gas Detector, S11, S11 P, S5s,
S5 ALPR, S5 ALPR DUO sowie S8 P und S8 C. S7/S7.2 wird ohne eindeutige
Abgrenzung von Prompt nicht zusätzlich gezählt; Kepler/IPD sowie die
Herchel/Herschel/Argus-Codes und Auflösungsvarianten bleiben offen.

Bestandsmodelle: Argus S5.3 behält eigene Kamera-/TX2-/IP65-Angaben, ohne die
widersprüchlichen Detektionsreichweiten oder alte generische Acht-Stunden-Prosa
als gesicherte Modellwerte zu übernehmen. S5.4 ist durch die Ankündigung vom
2. März 2026 mit Orin NX, Entwicklerakkreditierung und SMP Store belegt;
angekündigter Versandbeginn März 2026 belegt keinen heutigen Lagerbestand.
Picard/Promt: Zehn/zwölf Stunden sind geschätzte Betriebszeit im 2020-Prospekt,
kein gemessenes Maximum. Ladezeit vier bis sechs Stunden bleibt getrennt.
Web-/Prospekt-Hüllen widersprechen sich. Picards 185 kg werden auf der Webseite
als Betriebsmasse, im Prospekt auch als Luftfrachtgewicht bezeichnet; keine
still gewählte Gesamtmasse. Abweichende 2021-Werte bleiben in ihrem Jahresumfang.

Prompt ISD 2021: 18 kg Last, 148 kg mit Akku ohne Fracht, vollständige Hülle
1420×720×1620 mm; 415×315×245 mm sind nur das Frachtfach. S6.3: Methan bis
50 m ist Sensorentfernung, Thermik/360°-Akustik sind Optionen. Die beschriebene
Ausführung ist ausdrücklich nicht als explosionsgeschützt oder eigensicher
dargestellt. Solar-Nachladung, Propanvorrat, Fahrstrecke, Kameraachsen und
Werbeaussagen über Schutzfläche/Wirtschaftlichkeit ergeben keine Akku-Laufzeit,
Roboter-DOF oder unabhängige Wirksamkeits-/Sicherheitsbestätigung.

22 Quellenversuche: 20 HTTP-200-Antworten, zwei vorübergehende DNS-Fehler.
Drei PDF-URLs mit zehn extrahierten Seiten entsprechen nur zwei verschiedenen
PDF-Inhalten/acht eindeutigen Textseiten: Picard/Promt sind bytegleich und keine
unabhängigen Bestätigungen. Wortkoordinaten gespeichert; keine visuelle
PDF-Prüfung oder Übernahme ungesehener Zeichnungsmaße. Keine gesperrten Hosts
wiederholt und kein 429 beobachtet. Historische/regionale Vollständigkeit,
heutige Lieferbarkeit und unabhängige Leistungswerte bleiben offen.

Aktuell: 2034 Katalogeinträge, 643 exakte Herstellernamen, 1036 Profile,
632 mit/404 ohne Modelle. 927 Merkmalsdatensätze (780 Ergänzungen/147 bestehende
Anreicherungen), 4025 Aussagen, 1742 Produkt-Quellenreferenzen. 84 Firmenfokusse
auf 80 der 591 Quellen-Firmengruppen. 12607 Felder auf 757 Modellseiten:
5490 dokumentiert, 6816 unbekannt, 249 widersprüchlich, 52 Roadmap. Von 518
ursprünglichen Prüfzielen haben 369 Feldprüfungen, 149 warten. Die 6063 Zielfelder
enthalten 2765 dokumentierte, 3133 unbekannte, 155 widersprüchliche und zehn
Roadmap-Werte. Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-
Detailinhalte bleiben offen; Vollständigkeit und Marktführerschaft unbewiesen.

793 Unit-Tests/64 Dateien, 20 Python-Tests und 34 ausgewählte Browserfälle
bestanden (16 SMP/18 Vergleich, einschließlich acht Axe-Läufen). Build:
3084 Seiten/ca. 477 MB. Audit: null Fehler/923 Warnungen; 17 neue ungeklärte
Erstjahre minus ein neu belegtes bestehendes Erstjahr ergeben netto 16 weitere
Warnungen. Lint, Format, Import-Trockenlauf null Ergänzungen, Offline-Refresh,
20 Modellseiten und Quellen-/Exporttransport sowie alle 757 gerenderten
Feldprüfseiten geprüft. Die erste Unit-Prüfung fand die korrigierte
Unterkategorie-Zuordnung; finale Prüfungen liefen auf dem korrigierten Stand.
Eigene Testprozesse/Browserressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-90-evidence.json`.


## Ergänzung vom 2. November 2026 – SoftBank/Aldebaran/Maxtronics (Batch 91)

Sechs Modelle ergänzt: Whiz i, Whiz B/P/V, Pepper+ und Maxtronics NAO7.
NAO7 bleibt ausdrücklich ein Entwicklungsprojekt mit unbekanntem Preis und
Erscheinungstermin; geplante Hand-/Hardwaremerkmale sind keine ausgelieferten
Werte. NAO6, Pepper und Whiz geprüft. Insgesamt 163 Felder: 62 dokumentiert,
99 unbekannt, eines widersprüchlich und eines Roadmap. Zwei Firmenfokusse
ergänzt; Maxtronics erhält die Modellbindung im vorhandenen Firmenprofil.
Historische NAO6/Pepper-Zuordnung bleibt Aldebaran; keine pauschale rechtliche
Nachfolger- oder OEM-Identität abgeleitet. 2031 unbeteiligte Katalogzeilen,
757 frühere Feldprüfungen, 84 Firmenfokusse und 1961 Quellenidentitäten bleiben
unverändert. Keine neuen CSV-Spalten oder Kategorieverschiebungen.

NAO6: H25600 mit 5,48 kg, 574×311×275 mm H×T×B, 25 DOF und IPX0.
60 Minuten aktive und 90 Minuten normale Nutzung sind getrennt; 90 Minuten
Ladezeit haben kein belegtes Ladezustandsintervall. Nicht belegtes Erstjahr,
Alter und Fingerzahl entfernt. Der Cloudwechsel zum 1. Oktober 2026 ist auf
NAO6 begrenzt; Offlinebetrieb kann fortbestehen, NAO5 ist ausgenommen.
Pepper: Legacy-Hülle mit Armen unten getrennt von maximaler Armhülle; keine
Armreichweite daraus abgeleitet. NAOqi 2.5/Python und 2.9/Android/QiSDK bleiben
getrennt. Japanische Plan-Endtermine am 1. Februar und 31. Mai 2027 sind kein
weltweites Ende aller Pepper. Pepper+ enthält qualifizierte japanische
Miettarife, keine strukturierten Kaufangebote oder übernommenen Legacy-Maße.

Whiz: 30 kg Maschine plus 5 kg Akku im US-Blatt; Japan-2020 nennt etwa 35 kg
inklusive Akku. Der gemeinsame aktuelle Modaltext vermischt Generationen;
Gewicht bleibt als Konflikt markiert. Whiz i hat eigene 34 kg und Betriebsmodi
3,6/1,8 Stunden sowie fünf Stunden Laden. Whiz B/P/V behalten ihre eigenen
Maße, Massen und Modi. Staubbehälter sind keine Wassertanks; Komponentenbreiten
keine kombinierte Arbeitsbreite. 600 mm Mindestdurchgang bei Whiz V ist keine
Roboterbreite. Alttexte/ähnliche Maße begründen keine Gausium-OEM-Gleichsetzung.
Software, Mietpakete und ServiQ-Koentwicklung erzeugen keine weiteren Karten.

41 Quellenversuche: 35 HTTP200-Antworten, drei vorübergehende DNS-Fehler,
drei 404. Vier PDFs mit 323 automatisch extrahierten Seiten. Das 312-seitige
Pepper+-Handbuch wurde nur für ausgewählte Einrichtungs-/Ladepassagen auf sechs
Seiten geprüft. Keine vollständige Handbuchprüfung, visuelle PDF-Prüfung oder
Verwendung passwortgeschützter Handbücher. Kein 429 und keine Wiederholung
bekannter gesperrter Hosts. Historische/regionale Vollständigkeit,
heutige Lieferbarkeit und unabhängige Wirksamkeit bleiben offen.

Aktuell: 2040 Katalogeinträge, 644 exakte Herstellernamen, 1036 Profile,
633 mit/403 ohne Modelle. 933 Merkmalsdatensätze (786 Ergänzungen/147 bestehende
Anreicherungen), 4053 Aussagen, 1773 Produkt-Quellenreferenzen. 86 Firmenfokusse
auf 82 der 591 Quellen-Firmengruppen. 12770 Felder auf 766 Modellseiten:
5552 dokumentiert, 6915 unbekannt, 250 widersprüchlich, 53 Roadmap. Von 518
ursprünglichen Prüfzielen haben 372 Feldprüfungen, 146 warten. 6116 Zielfelder:
2785 dokumentiert, 3165 unbekannt, 156 widersprüchlich, zehn Roadmap.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte
bleiben offen; Vollständigkeit und Marktführerschaft sind unbewiesen.

793 Unit-Tests/64 Dateien, 20 Python-Tests und 34 ausgewählte Browserfälle
bestanden (16 SoftBank/Maxtronics, 18 Vergleich, einschließlich acht Axe-Läufen).
Build: 3090 Seiten/ca. 478 MB. Audit: null Fehler/926 Warnungen. Zwei neue
unbekannte Erstjahre und das entfernte unbelegte NAO6-Erstjahr ergeben drei
zusätzliche Warnungen. Lint, Format, Import-Trockenlauf null Ergänzungen,
Offline-Refresh, neun Modellseiten/Quellen-/Exporttransport sowie alle 766
Feldprüfseiten geprüft. Initial fehlendes Plus im Pepper+-Slug, doppelte
Profilgenerierung und ein Datumsleerzeichen vor finaler Prüfung korrigiert.
Eigene Browser-/Testressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-91-evidence.json`.


## Ergänzung vom 2. November 2026 – 1X Technologies (Batch 92)

Vier vorhandene Modelle geprüft: NEO, NEO Beta, NEO Gamma und EVE. 68 Felder:
21 dokumentiert, 47 unbekannt. Keine neuen Modellkarten. Beta/Gamma erhalten
zwei zusätzliche datierte Merkmalsbelege für Bestandsmodelle; ein Firmenfokus
ergänzt. 2036 unbeteiligte CSV-Zeilen, 766 frühere Feldprüfungen, 86 Firmenfokusse,
alle Firmenprofile/Aliasse und 1961 Quellenidentitäten bleiben unverändert.
Keine CSV-Spalten oder Kategorieverschiebungen.

NEO: Einführung am 28. Oktober 2025 getrennt von Beta 2024, Gamma 2025 und dem
geplanten Kunden-Lieferbeginn 2026. US-Angebot: 20.000 USD Early-Access-Kauf,
499 USD Monatsabo, 200 USD rückerstattbare Reservierungsanzahlung. Kein
allgemeines strukturiertes Lager-Kaufangebot. 66 lb Masse, 5 ft 6 in Höhe;
55 lb Tragen, 154 lb Heben und 18 lb Armlast bleiben verschiedene Größen.
1,4 m/s Gehen, 6,2 m/s maximales Laufen und 8 m/s Handgeschwindigkeit werden nicht
vermischt. Vier Stunden Betrieb ohne belegtes gemessenes Maximum. Sechs Minuten
Laden je Stunde Betrieb sind keine volle Ladezeit. 842 Wh Hardwaretabelle und
0,75 kWh Kosten-FAQ bleiben eine offene Kapazitäts-/Revisionsabweichung.

Die neuere Handunterlage zählt 25 DOF als 22 in Fingern/Handfläche plus drei im
Handgelenk. Kein zusätzlicher Modell-Datensatz, kein ungeklärter 22/25-Konflikt
und keine doppelte Addition von Handgelenken in eine Roboter-Gesamtsumme.
IP68 gilt den Händen, IP44 dem Körper; laut FAQ ist der ganze Roboter nicht
wasserdicht. Fingertippgenauigkeit ist keine Armwiederholgenauigkeit. Expert-
Sitzungen werden laut öffentlicher FAQ vom Besitzer geplant/akzeptiert;
anfängliche Kochfunktionen bleiben eingeschränkt. Kapazitäts-/Fabrikaussagen
belegen keine erfolgte Kundenauslieferung oder unabhängige Sicherheitsprüfung.

NEO Beta: Ankündigung vom 30. August 2024 bezeichnet ihn als Prototyp für
begrenzte Forschung in ausgewählten Haushalten. Der Kochfilm vom 8. November 2024
verwendete VR-Teleoperation, gefilterte Sprachübertragung und menschliche Hilfe
zum Einschalten des Brenners. Keine autonome Kochleistung daraus abgeleitet.
NEO Gamma: Einführung 21. Februar 2025, interne Heimtests, 100-Hz-Körperregler,
neues Audio-/Kleidungsdesign. Der NVIDIA-Forschungsbericht vom 18. März 2025
beschreibt eine konkrete Tassen-/Spülmaschinenaufgabe mit 5-Hz-Sicht-Aktionsschleife
und möglicher On-/Offboard-Inferenz. Keine Übertragung auf jede Alltagssituation.
Unbelegte 75.000-USD-Preise und numerische Altangaben bei Beta/Gamma entfernt.

EVE: Firmenzeitachse belegt Fabrikeinsätze 2022. Der 2018-Eintrag betrifft den
Revo1-Motor und belegt kein erstes EVE-Erscheinungsjahr. Aktuelle EVE-/Flottenseiten
sind Anfrage-/Partnerformulare, keine technischen Datenblätter oder Lagerbelege.
Alte Masse, Geschwindigkeit, Last und Laufzeit sind durch diese ausgewählten
Quellen nicht bestätigt; NEO-Werte werden nicht übernommen. Komponenten,
AI-Modelle, Software, Miet-/Kaufpläne und Farben erzeugen keine weiteren Roboter.

26 Quellenversuche: 16 HTTP200, zwei vorübergehende DNS-Fehler, acht 404.
HTML-Text und öffentlich ausgelieferte FAQ-Hydrationsdaten geprüft; keine PDFs.
Ein optionaler externer Browserversuch fand die FAQ-Schaltfläche nicht vor
Zeitablauf und wurde geschlossen. Keine erfolgreiche Live-FAQ-Darstellung
behauptet. Keine Formulare oder Käufe ausgelöst, kein 429, keine bekannten
blockierten Hosts wiederholt. Historische/regionale Vollständigkeit, heutige
Lieferbarkeit und unabhängige Sicherheits-/Leistungswerte bleiben offen.

Aktuell: 2040 Katalogeinträge, 644 exakte Herstellernamen, 1036 Profile,
633 mit/403 ohne Modelle. 935 Merkmalsdatensätze (786 Ergänzungen/149 bestehende
Anreicherungen), 4065 Aussagen, 1786 Produkt-Quellenreferenzen. 87 Firmenfokusse
auf 83 der 591 Quellen-Firmengruppen. 12838 Felder auf 770 Modellseiten:
5573 dokumentiert, 6962 unbekannt, 250 widersprüchlich, 53 Roadmap. Von 518
ursprünglichen Prüfzielen haben 374 Feldprüfungen, 144 warten. 6150 Zielfelder:
2800 dokumentiert, 3184 unbekannt, 156 widersprüchlich, zehn Roadmap.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte bleiben
offen. Vollständigkeit und Marktführerschaft sind weiterhin unbewiesen.

793 Unit-Tests/64 Dateien, 20 Python-Tests und 34 ausgewählte lokale Browserfälle
bestanden (16 1X, 18 Vergleich, einschließlich acht Axe-Läufen). Build: 3090 Seiten,
ca. 478 MB. Audit: null Fehler/927 Warnungen; das nicht belegte EVE-Erstjahr
entfällt und erzeugt eine zusätzliche Warnung. Lint, Format, Import-Trockenlauf
null Ergänzungen, Offline-Refresh, vier Modellseiten/Quellen-/Exporttransport
sowie alle 770 gerenderten Feldprüfseiten geprüft. Der erste Scratch-Abgleich
fand veraltete abgeleitete Produktmerkmale nach einem Import-Trockenlauf;
explizites Importieren, Refresh und neue Manifeste korrigierten das vor finalen
Prüfungen. Eigene Browser-/Testressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-92-evidence.json`.


## Ergänzung vom 2. November 2026 – Agile Robots (Batch 93)

Sechs Modelle ergänzt: Diana 7, Thor 3, Thor 7, Thor 7 Pro, Thor 12 und Thor 20.
Agile ONE und Yu 5 Industrial geprüft. 143 Felder: 64 dokumentiert, 72 unbekannt,
sieben Roadmap. Thor 20 steht weiterhin als „Coming soon“ auf der Modellseite;
seine sieben numerischen technischen Werte bleiben angekündigte Spezifikationen.
Thor 3 ist ausdrücklich auf APAC begrenzt. Ein Firmenfokus ergänzt; 2038
unbeteiligte CSV-Zeilen, 770 frühere Feldprüfungen, 87 Firmenfokusse, alle
Firmenprofile/Aliasse und 1961 Quellenidentitäten bleiben unverändert.
Keine neuen CSV-Spalten oder Kategorieverschiebungen.

Agile ONE: Öffentliches HTML ordnet Animationswerte Einheiten/Bezeichnungen zu:
174 cm Höhe, 69 kg Masse, 2 m/s Gehen und 20 kg nicht näher verteilte Last.
Englische/deutsche Fassung gegengeprüft; keine Maße aus Bildern abgelesen.
21 Gelenke der beschriebenen Hand sind kein Beleg für frühere 71 Ganzkörper-DOF;
die Produktseite spricht von 21 Gelenken der beschriebenen Hand. Das separate
Agile-Hand-Modul hat 21 Gelenke und 15/16 DOF, nicht automatisch jede ausgelieferte
ONE-Handkonfiguration. Ehemalige Acht-Stunden-/480-Minuten-Werte sind durch
gewählte Primärquellen nicht belegt und entfallen. Einführung 19. November 2025,
früher Produktionsplan für 2026 und Vorführung am 4. Februar 2026 bleiben getrennt.
Cloud-Training und ein Knopfdruck bei der AI-Cloud-Eröffnung belegen keine
Roboterlaufzeit, freie Lieferbarkeit oder unabhängig geprüfte Fabrikautonomie.

Yu 5 Industrial: 5 kg bei 1000 mm oder 7 kg bei 850 mm; Last-/Radiuspaare nicht
kombinieren. Sechs Achsen, 31,5 kg Roboter, IP54 für Roboter/Controller,
±0,05 mm Wiederholgenauigkeit und maximal 2 m/s TCP ausdrücklich bei 5 kg Last.
2D-Kamera/LEDs, NPU, Python/Browserprogrammierung und Handführung bleiben benannte
Funktionen. Netzverbrauch 250 W ist keine Akkulaufzeit; Controller-/Zeichnungsmaße
sind keine vollständige Roboterhülle. Zwei vermutete aktuelle Produktpfade
liefern 404, das technische PDF ist erreichbar; daraus kein Abkündigungsdatum.

Diana 7: Sieben drehmomentsensitive Achsen, 7 kg/923 mm, 28 kg Roboter,
16 kg separater Controller, IP50, ±0,05 mm Wiederholgenauigkeit, 2,4 m/s TCP.
0,5 N Kraftregelgenauigkeit ist keine Lage-/Navigationsgenauigkeit. AgileCore,
C++/Python/Lua und die im Prospekt genannte FCI-Forschungsschnittstelle machen
Diana nicht zu einer Franka-FR3-Identität oder universell kompatiblen Konfiguration.

Thor-Spalten: 3/7/7 Pro/12/20 tragen 3/7/7/12/20 kg bei 600/900/900/1300/1700 mm.
Robotergewichte 14/32/38/35/72 kg, TCP-Geschwindigkeit 1,8/3,1/2,5/3,7/2,8 m/s.
Separate Controller: Thor 3 mit 20 kg, übrige mit 16 kg. Sechs Achsen je Modell.
Wiederholgenauigkeit ±0,03/0,03/0,03/0,05/0,1 mm. Thor 3 IP20; Thor 7/7 Pro/12
laut Robotertabelle IP54. Thor 20 nennt ausdrücklich IP54 am Handgelenk, während
die Tabelle die Komponente nicht abgrenzt; keine pauschale Gesamtsystemabdichtung.
Pro ist eine benannte Variante mit Gelenkmomentsensoren/0,5 N Kraftregelung,
eigener Masse/Geschwindigkeit. Die generische Web-Spanne 1,8–3 m/s ersetzt nicht
die exakten Modellwerte; der Prospekt nennt bis 3,7 m/s. Keine Winkelraten oder
Sockel-/Controllermaße als lineare Geschwindigkeit bzw. ganze Hülle übernommen.

Agile Hand, AgileCore und unbenannte AMR-/AGV-Kategorien erzeugen keine zusätzlichen
Roboterkarten. Franka, idealworks und BÄR behalten eigene Marken-/Modellidentitäten;
Unternehmenszugehörigkeit ist kein Produktalias. Hersteller-Qualitäts-/Sicherheits-
aussagen sind keine unabhängige Zertifizierung jeder eingebauten Anwendung.
Historische Erstjahre, volle regionale Produktbreite, konkrete Softwarepakete,
Thor-20-Auslieferung und heutige Yu-Verfügbarkeit bleiben offen.

15 Quellenversuche: zwölf HTTP200, ein vorübergehender DNS-Fehler, zwei 404.
Drei PDFs mit 16 textlich extrahierten Seiten/Wortkoordinaten; keine visuelle
PDF-Prüfung oder Übernahme ungesehener Zeichnungsmaße. HTML-Animationsattribute
beider Sprachfassungen ausgewertet; dies ist keine unabhängige Bestätigung.
Keine Formulare/Käufe, kein 429 oder Wiederholen bekannter blockierter Hosts.

Aktuell: 2046 Katalogeinträge, 644 exakte Herstellernamen, 1036 Profile,
633 mit/403 ohne Modelle. 941 Merkmalsdatensätze (792 Ergänzungen/149 bestehende
Anreicherungen), 4092 Aussagen, 1801 Produkt-Quellenreferenzen. 88 Firmenfokusse
auf 84 der 591 Quellen-Firmengruppen. 12981 Felder auf 778 Modellseiten:
5637 dokumentiert, 7034 unbekannt, 250 widersprüchlich, 60 Roadmap. Von 518
ursprünglichen Prüfzielen haben 376 Feldprüfungen, 142 warten. 6185 Zielfelder:
2817 dokumentiert, 3202 unbekannt, 156 widersprüchlich, zehn Roadmap.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte bleiben
offen. Vollständigkeit und Marktführerschaft sind weiterhin unbewiesen.

793 Unit-Tests/64 Dateien, 20 Python-Tests und 34 ausgewählte lokale Browserfälle
bestanden (16 Agile/18 Vergleich, einschließlich acht Axe-Läufen). Build:
3096 Seiten/ca. 479 MB. Audit: null Fehler/933 Warnungen; sechs neue ungeklärte
Erstjahre. Lint, Format, Import-Trockenlauf null Ergänzungen, Offline-Refresh,
acht Modellseiten/Quellen-/Exporttransport sowie alle 778 gerenderten Feldprüfseiten
geprüft. Eigene Browser-/Testressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-93-evidence.json`.


## Ergänzung vom 2. November 2026 – Knightscope (Batch 94)

Historischen stationären K1 Tower ergänzt; K1 Hemisphere, K3, K5 und K7 geprüft.
80 Felder: 27 dokumentiert, 50 unbekannt, drei Roadmap. Vier neue Feldprüfungen;
die bestehende Drei-Feld-Prüfung von K7 wird auf 16 Felder erweitert, nicht
dupliziert. Der alte Prüfstand bleibt im dauerhaften Beleg erhalten. K3 erhält
erstmals datierte Merkmalsbelege. Ein Firmenfokus ergänzt. 2042 unbeteiligte
CSV-Zeilen, 777 frühere Feldprüfungen, 88 Firmenfokusse, sämtliche Profile/Aliasse
und alle 1961 Quellenidentitäten bleiben unverändert. Keine neuen CSV-Spalten
oder Kategorieverschiebungen.

K5: Aktuell verlinktes V5-Datenblatt nennt 420 lb, 64,6 in Höhe, 44,6 in Länge,
34,9 in Breite und bis 3 mph. Die Werte sind aus beschriftetem PDF-Text und
Wortkoordinaten übernommen, nicht aus Bildmaßstäben. 2023 nennt der Geschäftsbericht
noch ungefähr 398 lb, 5 ft Höhe und 3 ft Breite; diese historischen Angaben
werden nicht zu einer aktuellen Konfiguration kombiniert. V5: durchschnittlich
2,5–3 Stunden Patrouille zwischen Ladestopps, durchschnittlich 20–30 Minuten
autonomes Nachladen. Kein belegter Leer-bis-voll-Ladezyklus oder Maximalwert.
24/7-Dienst umfasst Ladestopps. Vier Videokameras, eine Wärmebildkamera,
sechs LiDAR- und dreizehn Sonarsensoren. ADA-Flächen/-Rampen und bis 20 Prozent
Parkhaussteigung; Prozentwerte sind keine Gradwinkel und keine Offroad-Freigabe.

K1 Hemisphere: 30 lb, 24 in Durchmesser, 10 in Tiefe, IP65, stationäre Montage.
Bis ungefähr 210 Grad HD-Video, optionale Gesichtserkennung, Kennzeichenerkennung,
Rufknopf, Gegensprechen, Ansagen und Stroboskop. Beworbene Preise ab 545 USD/Monat
sind qualifizierte Abonnementangaben, kein verbindlicher Geräte-Kaufpreis;
weiterhin kein strukturiertes Kaufangebot. Netzanschluss, Erkennungsreichweite
und Videospeicherung sind keine Akkulaufzeit oder belegte Identifikationsgenauigkeit.

K3: 2023 belegtes Innenraum-ASR mit ungefähr 340 lb, 4 ft Höhe, 2 ft Breite.
Geofencing mit Lasern, Ultraschall, IMU und Encodern. Historische K3/K5-Familie:
ungefähr 2–3 Stunden Patrouille, ungefähr 20 Minuten oder mehr je Ladestopp;
Monitoring bleibt dabei aktiv. Parknutzung, Parkuhr und Kennzeichenerkennung
sind für K3 ausdrücklich abgeschaltet. Historisches KSOC und Kommunikations-
funktionen bedeuten keine automatisch ausgelieferte Signals-/ASF-Nachrüstung.
Aktueller vermuteter K3-Pfad liefert 404; keine Abkündigung allein daraus abgeleitet.

K7: Aktuelle Force-Seite führt ihn weiterhin unter „Under Development“.
Bis 10 mph, leichtes Offroad, PTZ/Wärmebild und Talk-down bleiben Roadmap.
Q2-2026-Präsentation plante begrenzte Beta-Einsätze für das zweite Halbjahr 2026
und eine September-Messevorführung; abgelaufene Zieltermine beweisen keine Erfüllung.
Historisches vierrädriges Konzept ist keine Garantie aller späteren Eigenschaften.
Die frühere Drei-Feld-Prüfung bleibt als Vorversion im Belegmanifest erhalten.

K1 Tower: Im 2023er Geschäftsbericht ausdrücklich benannte stationäre Sicherheits-
plattform, ungefähr 6 ft Höhe, 3 ft Breite und 150 lb, für Innen-/Außen-Eingänge.
Nicht als mobile Patrouille beschrieben. Getrennt von Hemisphere, Blue-Light-
Notrufsäule und angekündigtem Super Tower; gemeinsamer K1-Name ist kein Aliasbeleg.
Heutige Lieferbarkeit und Erstjahr bleiben offen. Frühere unbelegte Erstjahre
2018 bei Hemisphere, 2017 bei K3 und 2015 bei K5 entfernt; Unternehmens-Pilotverkäufe
im Jahr 2015 belegen keine exakte Modelleinführung.

Herstellerprofil erfasst benachbarte Blue-Light-/Notrufgeräte, Retrofit-Kit,
K1 Capsule und Super Tower samt Entwicklungsstatus. 7/14/21 ft sind Höhenoptionen;
die ASF-Broschüre grenzt PTZ auf 14/21 ft ein. Daraus keine zusätzlichen mobilen
Roboterkarten. H1 ist ein Wearable-Prototyp für menschliche Sicherheitskräfte,
kein humanoider Roboter; Signals, RTX, Mission Intelligence, Bewachung und
Personenschutz bleiben Software/Dienste. Alarmreduktions-, Kriminalitäts- und
Marktführerschaftsaussagen sind nicht unabhängig validiert.

16 tatsächliche Quellenversuche: zwölf HTTP200, zwei 404 und zwei 403.
403 bei altem IR-Host und SEC-Bericht; keine positiven Belege aus Fehlerseiten.
Sieben PDFs mit 184 automatisch textlich extrahierten Seiten; nur ausgewählte
Produkt-/Roadmap-/Geschäftsberichtsabschnitte gelesen. Wortkoordinaten gespeichert,
keine vollständige oder visuelle PDF-Prüfung behauptet. K5-Produktpfad leitet
auf die byteidentische Force-Seite um und ist kein unabhängiger Zusatzbeleg.
Keine Formulare, Käufe, neuen 429 oder Wiederholungen zuvor blockierter Hosts.

Aktuell: 2047 Modelle/Konfigurationen, 644 exakte Herstellernamen, 1036 Profile,
633 mit/403 ohne Modelle. 943 Merkmalsdatensätze (793 Ergänzungen/150 bestehende
Anreicherungen), 4106 Aussagen, 1810 Produkt-Quellenreferenzen. 89 Firmenfokusse
auf 85 der 591 Quellen-Firmengruppen. 13058 Felder auf 782 Modellseiten:
5664 dokumentiert, 7083 unbekannt, 250 widersprüchlich, 61 Roadmap. Von 518
ursprünglichen Prüfzielen haben 378 Feldprüfungen, 140 warten. 6230 Zielfelder:
2832 dokumentiert, 3231 unbekannt, 156 widersprüchlich, elf Roadmap.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte bleiben
offen. Vollständigkeit und Marktführerschaft sind weiterhin unbewiesen.

793 Unit-Tests/64 Dateien, 20 verfolgte Python-Tests und 32 ausgewählte lokale
Browserfälle bestanden (14 Knightscope/18 Vergleich, einschließlich acht Axe-Läufen).
Ein zusätzlicher Discovery-Lauf enthielt drei fremde unverfolgte Tests; diese
Dateien wurden nicht verändert oder aufgenommen. Build: 3097 Seiten/ca. 480 MB.
Audit: null Fehler/937 Warnungen; vier zusätzliche ungeklärte Erstjahre.
Lint, Format, Import-Trockenlauf null Ergänzungen, Offline-Refresh,
fünf Modellseiten, Quellen-/Exporttransport und alle 782 gerenderten Feldprüfseiten
geprüft. Eigene Browser-/Testressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-94-evidence.json`.


## Ergänzung vom 2. November 2026 – Rainbow Robotics Humanoide, Quadrupeds und AMRs (Batch 95)

Sechs benannte Plattformen ergänzt: RBM-D400, RBM-D1000, RBM-S100a, RBM-S100b,
RB-Y2 und RBQ-10W. Die letzten beiden stehen ausdrücklich auf „Coming soon“.
Sechs bestehende Identitäten geprüft: HUBO, HUBO 2, DRC-HUBO, FX-2, RB-Y1 und
RBQ-3. Zusammen 218 Felder: 55 dokumentiert, 159 unbekannt, zwei widersprüchlich
und zwei Roadmap. Elf neue Feldprüfungen; die bestehende Acht-Feld-Prüfung von
RB-Y1 auf 17 Felder erweitert. Alle 26 aktuellen Katalogidentitäten von Rainbow
haben damit ausgewählte Feldprüfungen; dies beweist keine vollständige historische
oder regionale Hersteller-Produktliste. HUBO und RBQ-3 erhalten erstmals datierte
Merkmalsbelege. Vorhandenen Firmenfokus erweitert, keine zusätzliche Firma gezählt.

2041 unbeteiligte CSV-Zeilen, 781 frühere Feldprüfungen, 88 andere Firmenfokusse,
sämtliche Profile/Aliasse und alle 1961 Quellenidentitäten bleiben unverändert.
Die ersten sechs Firmenfokus-Aussagen und sechs Quellen der früheren Arm-/RBQ-10-
Prüfung bleiben erhalten. Alte RB-Y1-Prüfung und vorheriger Rainbow-Fokus stehen
vollständig im dauerhaften Belegmanifest. FX-2 behält seine zusätzliche staatliche
Attributionsquelle. Keine neuen CSV-Spalten oder Kategorieverschiebungen.

Vier AMRs: D400/D1000 tragen 400/1000 kg bei 70/150 kg Robotergewicht;
600×800×240 beziehungsweise 800×1100×300 mm (B×T×H), maximal 1,2 m/s.
Differenzialantrieb mit zwei aktiven Rädern und vier Doppelrollen; zwei 2D-LiDAR,
eine Tiefenkamera, optional Boden-QR. 50 V/25 Ah beziehungsweise 50 V/50 Ah
sind keine Laufzeiten. Anschluss-/Ladestationsangaben belegen keine Ladedauer.
S100a: ungefähr 50 kg, 510×510×1250 mm und ausdrücklich 120 kg Nutzlast.
S100b: ungefähr 70 kg, 710×680×1250 mm und 100 kg Nutzlast. Der Familienname S100
belegt keine einheitliche 100-kg-Last. Beide Tabellen nennen zehn Stunden
kontinuierliche Fahrt und 3,5 Stunden Laden ohne Last-/SOC-Endpunkte;
kein unabhängig gemessenes Maximum daraus abgeleitet. Eine 2D-LiDAR und zwei
Tiefenkameras, optionale 3D-LiDAR. Erkennung etwa 5 cm niedriger Hindernisse ist
keine Kletterstufe. Cargo-Box- und optionale 450-W-Ladermaße sind keine Roboterhülle.
Web-FMS, SLAM, Simulation, MES/WMS und Topmodule bleiben Integrationsmerkmale.

RB-Y1: 3 kg je Arm, 600 mm bis Handgelenk plus nicht festgelegte Handlänge,
Plattformtabelle 600×690×1400 mm. A/M-Konfigurationen 131/170 kg.
Produktübersicht nennt 24 DOF, A/M-Tabelle 20/26. Entwicklerhandbuch nennt oben
A24/M26, in M-Detailtabelle dagegen insgesamt 24. Keine eigenmächtig korrigierte
Summe oder Gleichsetzung von Befehlsdimension, Gelenk- und Radzählung.
Aktuelle Seite/Handbuch nennen 1,5 m/s; Einführung vom 5. April 2024 nennt 2,5 m/s.
Zeit-/Konfigurationsunterschied bleibt sichtbar, ohne unbelegte Revisionszuordnung.
Handbuchübersicht 1270 Wh gegenüber Produkt-/Packwert 1250 Wh; der größere Pack
trägt in einem Handbuchabschnitt „Model B“. Daraus kein neues Ganzrobotermodell,
keine Laufzeit oder garantierte Ladezeit. Separate Robot/User-PCs, SDK/ROS 2,
Simulation und Teleoperation behalten Entwicklungsscope. Vorführung vom März 2025
ist ausdrücklich teleoperiert. V1.2/V1.3-Wrist, A/M-Basen, Neck/Gripper/Vision,
Leader Arms und SDK-Model UB bleiben Konfiguration/Komponenten; keine Zusatzkarten.
Einführung 2024 ist durch den Herstellerbericht mit erstem öffentlichen Auftritt
im März 2024 belegt; Vorbestellung ab 8. Mai ist ein gesonderter angekündigter Schritt.

Historische Forschung: Herstellerheritage beschreibt einen HUBO-Meilenstein 2004;
KAIST nennt Rainbow-Gründung 2011. Universitätsentwicklung ist keine damalige
Rainbow-Serienlieferung. Original-HUBO-Zahlen und Erstjahr 2005 bleiben durch die
gewählten Primärquellen unbelegt. HUBO 2 ist im KAIST-Bericht vom 14. Mai 2020
als zweite Generation und TV-Co-Anchor benannt, nicht als autonomes Nachrichtensystem.
DRC-HUBO ist durch KAIST als DARPA-Gewinner 2015 identifiziert; Wettbewerb ist
kein belegtes Erstjahr oder universelle Katastrophenschutz-Zertifizierung.
Unbelegte Altwerte etwa 45/80 kg, 40/32 DOF und Handkonfigurationen entfallen.
FX-2: KAIST dokumentiert menschlichen Fahrer bei der Fackelstaffel am 11. Dezember
2017. Zeitgenössischer Regierungsbericht bestätigt gemeinsame HUBO-Lab/Rainbow-
Entwicklung und erste Enthüllung an diesem Tag; 2017 bleibt als Einführung erhalten.
Keine allgemeine Fahrgastzulassung, autonome Navigation oder Traglast abgeleitet.

RBQ-3: Zwei tatsächliche Hersteller-Vorführungsberichte, darunter RoboWorld am
28. Oktober 2021, belegen Modellidentität. Publikations-/Eventdaten und 2026er
Website-Migrationszeit bleiben getrennt. Das aktuelle Handbuch bezeichnet explizit
RBQ10; dessen IP54, Interfaces und Leistungswerte nicht auf RBQ-3 übertragen.
Ehemalige 25 kg, 3 kg Last, 12 DOF, 2 m/s, 180 Minuten, ungefähr 40000 USD und
Erstjahr 2023 sind durch die ausgewählten exakten Quellen nicht belegt.
Ein Auftritt 2021 widerlegt die angenommene erste Existenz 2023, begründet aber
kein exaktes tatsächliches Erstjahr. Historische Verfügbarkeit bleibt offen.

RB-Y2/RBQ-10W sind in ihren jeweiligen Lineup-Karten innerhalb desselben Karten-
Elements mit „Coming soon“ markiert. Dedizierte Platzhalterseiten liefern eine
Positionierung ohne technische Tabelle. Leg-Wheel-Simulatorassets und Nachbar-
modelle liefern keine realen Auslieferungsspezifikationen. Generic Mobile
Manipulator, ASTRO, FMS, Lader und Erweiterungen bleiben separate System-/Software-
oder Zubehörbefunde. Keine zusätzlichen Roboter aus bloßen Höhen-/Interfaceoptionen.

36 tatsächliche Quellenversuche: 33 HTTP200, ein 404 und zwei DNS-Fehler auf den
beiden Labor-Domainnamen. Aktuelle WordPress-Suche führt zu tatsächlich gelesenen
öffentlichen Herstellerberichten; Suchtreffer allein sind keine technischen Belege.
GitHub-Baum und begrenzte historische Commitabfrage begründen weder gelieferte
Hardware noch eine vollständige Versionsgeschichte. RBY-/RBM-Kataloge verlangen
personenbezogene Angaben und Einwilligung; kein Abruf dieser geschützten Dateien,
keine Formulare/Einwilligung/Käufe. Keine PDFs oder visuelle PDF-Prüfung, keine
neuen 429 oder Wiederholungen vorher blockierter Hosts.

Aktuell: 2053 Modelle/Konfigurationen, 644 exakte Herstellernamen, 1036 Profile,
633 mit/403 ohne Modelle. 951 Merkmalsdatensätze (799 Ergänzungen/152 bestehende
Anreicherungen), 4137 Aussagen, 1827 Produkt-Quellenreferenzen. Weiterhin 89
Firmenfokusse auf 85 der 591 Quellen-Firmengruppen. 13268 Felder auf 793 Modellseiten:
5714 dokumentiert, 7240 unbekannt, 251 widersprüchlich, 63 Roadmap. Von 518
ursprünglichen Prüfzielen haben 381 Feldprüfungen, 137 warten. 6290 Zielfelder:
2842 dokumentiert, 3280 unbekannt, 157 widersprüchlich, elf Roadmap.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte bleiben
offen. Vollständigkeit und Marktführerschaft sind weiterhin unbewiesen.

793 Unit-Tests/64 Dateien, 20 verfolgte Python-Tests und 38 ausgewählte lokale
Browserfälle bestanden (20 Rainbow/18 Vergleich, einschließlich acht Axe-Läufen).
Ein anfänglicher Integrationstest fand fehlende bestehende Lagerlogistik-Filtertags
an den vier neuen AMRs. Tags sachgerecht ergänzt; vollständige Unit-Suite und
Build/Audit/Import gegen korrigierte Daten wiederholt, keine Prüfung abgeschwächt.
Build: 3103 Seiten/ca. 481 MB. Audit: null Fehler/947 Warnungen; zehn zusätzliche
ungeklärte Erstjahre, darunter vier entfernte unbelegte Altjahre.
Lint, Format, Import-Trockenlauf null Ergänzungen, Offline-Refresh,
zwölf Modellseiten, Quellen-/Exporttransport und alle 793 gerenderten Feldprüfseiten
geprüft. Eigene Browser-/Testressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-95-evidence.json`.


## Ergänzung vom 2. November 2026 – Bitcraze Flugkits und Ökosystem (Batch 96)

Crazyflie 2.1+ und Crazyflie 2.1 Brushless erhalten zwei neue ausgewählte
Feldprüfungen: 34 Felder, davon 18 dokumentiert und 16 unbekannt. Keine neue
Roboterkarte. Ein Herstellerfokus ergänzt, insgesamt 90. Alle 2051 anderen
Katalogzeilen, 793 bisherigen Feldprüfungen, 89 früheren Firmenfokusse, sämtliche
Profile/Aliasse und 1961 Quellenidentitäten unverändert. Beide bisherigen
Produktbelege mit ihren Metadaten sind im dauerhaften Manifest erhalten.

Herstellershop nennt ausdrücklich 240 USD für Plus und 480 USD für Brushless.
Das sind datierte Kit-Listenpreise; Steuer-/Versandbedingungen und zusätzlich
erforderliche Funk-, Deck- oder Positionierungskosten sind damit nicht belegt.
Keine exakten strukturierten Kaufangebote aus den qualifizierten Preistexten.
Plus: 29 g Abflugmasse, 92×92×29 mm in der veröffentlichten B×H×T-Reihenfolge
mit Motorabstand/Füßen; diese Achsen werden nicht still korrigiert. Sieben Minuten
Flug mit Standardakku, 40 Minuten Laden, maximal empfohlene 15 g Zusatzlast.
Die Herstellerliste nennt Coreless-Antrieb und 250-mAh-Akku.

Brushless: Rev-3-Datenblatt nennt 34 g mit Beinen und 37 g mit Schutzbügeln.
Die einleitenden 32 g ersetzen diese Abflugkonfigurationen nicht. 100 mm bezeichnet
diagonalen Motor-Mittelpunktabstand; 55-mm-Propeller und Schub je Motor sind weder
vollständige Roboterhülle noch Zusatznutzlast. Zehn Minuten Standardakku-Flug,
60 Minuten Laden, maximal empfohlene 40 g Standardnutzlast, 350-mAh-Akku im Kit.
Für beide fehlen Last-/Flugbedingungen und Lade-SOC-Endpunkte. Die zuvor doppelt
eingetragenen Flugzeiten entfallen als gesondertes Maximum, ohne die belegten
Flugintervalle zu entfernen. Dokumentrevision vom 2. Oktober 2024 ist kein
automatisch belegtes Erstlieferdatum; Erstjahr bleibt unbekannt.

BLE-Handsteuerung, PC-Radio/Python und externes ROS-2-Crazyswarm2 behalten ihren
jeweiligen Umfang. Automatisierter/autonomer Flug benötigt Positionierung, etwa
Lighthouse, UWB/Loco oder externe Motion-Capture-Systeme. Kontaktpads allein belegen
kein autonomes Andocken. Der LOS-Funktest über einen Kilometer ist keine belegte
autonome Flugreichweite oder Wetterfreigabe. Die LED-Ring-Ausnahme der Brushless-
Kompatibilität bleibt sichtbar. Bolt 1.1 ist laut Systemübersicht ein Controller;
Radios, Decks, Docks und Bundles erzeugen keine zusätzlichen Ganzrobotermodelle.

Neun gespeicherte Collector-Versuche: sechs HTTP200-Antworten, davon ein PDF,
ein HTTP403 am Produktindex und zwei DNS-Fehler. Index nicht wiederholt. Ein
Shop-DNS-Fehler einmal erfolgreich wiederholt; gescheiterter Brushless-Produktseiten-
Abruf bleibt erhalten. Dessen technische Angaben nutzen erfolgreich gespeichertes
modellgenaues Datenblatt und Shopseite. Alle gespeicherten Bodies per SHA256 geprüft;
HTML-/PDF-Text gelesen. PDF-Text und gespeicherte Quellen tragen die Prüfung; eine visuelle Sichtung
ist anhand der verfügbaren Werkzeugprotokolle nicht nachgewiesen. Lokaler Bildbetrachter unterstützte die Eingabe
nicht; daraus keine lokale Bildprüfung behauptet. Keine Zeichnungsmaße abgeleitet,
keine Formulare oder Warenkorbaktionen. Historische Varianten und vollständige
Herstellerhistorie sind mit dieser ausgewählten Prüfung nicht abgedeckt.

Aktuell 2053 Modelle/Konfigurationen, 951 Produktmerkmalsdatensätze, 4141 Aussagen
und 1831 Produktquellenverweise. Ausgewählte Prüfungen: 13302 Felder auf 795 Modellen,
5732 dokumentiert, 7256 unbekannt, 251 widersprüchlich und 63 Roadmap. Ursprüngliche
518 Zielmodelle: 383 mit ausgewählten Feldprüfungen, 135 offen. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte weiterhin offen. Kein Nachweis einer
Marktführerschaft oder vollständigen historischen/aktuellen Produktverifikation.

793 Unit-Tests/64 Dateien und zehn ausgewählte Desktop-/Mobil-Browserfälle bestanden,
einschließlich vier Axe-Läufen sowie Vergleich, Suche und Firmenprofil. Build:
3103 Seiten/ca. 481 MB. Audit null Fehler/947 Warnungen, unverändert zum Vorbatch.
Import-Trockenlauf null Ergänzungen, Offline-Refresh und alle 795 gerenderten
Feldprüfseiten/13302 Felder geprüft. Geänderten Test gelintet/formatiert. Keine
Anwendungslogik geändert; frühere Python-, Anwendungslint-/Format- und vollständige
Vergleichsregressionsresultate bleiben in Batch 95, ohne als neu ausgeführt zu gelten.
Eigene Test-/Browserressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-96-evidence.json`.


## Ergänzung vom 2. November 2026 – Blue Robotics ROV/USV und Betriebsbedingungen (Batch 97)

Zwei bestehende Plattformen geprüft: BlueROV2 und BlueBoat. 38 Felder, davon
21 dokumentiert, 16 unbekannt und eine ungeklärte Akku-Bedingung. Keine neue
Roboterkarte. Ein Firmenfokus ergänzt, insgesamt 91. Alle 2051 anderen Katalogzeilen,
795 bisherigen Feldprüfungen, 90 früheren Firmenfokusse, sämtliche Profile/Aliasse
und 1961 Quellenidentitäten unverändert. Beide früheren Produktbelege einschließlich
Metadaten bleiben im dauerhaften Manifest erhalten. Die aktuellen Ambi-Abrufe
begründen keine neue technische Prüfung; deren frühere Datensätze bleiben erhalten.

BlueROV2: sechs T200-Grundthruster, optional acht mit Heavy-Kit. Heavy ermöglicht
volle Sechs-Achsen-Fahrzeugregelung und aktive Nick-/Rollstabilisierung; keine
sechs mechanischen Armachsen und keine höhere Horizontalgeschwindigkeit abgeleitet.
Grundtabelle 457×338×254 mm, 11–12 kg mit Standardballast und Herstellerakku,
9–10 kg ohne beide. Acrylic/Aluminium-Gehäuse sind getrennt für 100/300 m Tiefe
bewertet. Tetherlänge und Sonarreichweite sind keine zusätzliche Tauchtiefe.
Verfügbare Zusatzauftriebsmasse 1,2 kg mit vier Lumen-Leuchten bis 1,4 kg ohne
Leuchten; 7 kgf vertikaler Bollardschub ist keine neutrale Zusatznutzlast.

Aktive HTML-Tabelle nennt ungefähr zwei Stunden normale/vier Stunden leichte
Nutzung mit 15,6-Ah-Akku; verlinktes PDF nennt dieselben Intervalle mit 18 Ah.
Diese nicht aufgelöste Bedingungsabweichung bleibt als Konflikt sichtbar, ohne
Revision oder unabhängig gemessene Laufzeit zu erfinden. Kein gesondertes Maximum
und keine Ladedauer daraus abgeleitet. Ungefähr 30 Sekunden Akkuwechsel ist kein
Laden. Ab 4900 USD laut sichtbarer Produktüberschrift; Produkt-JSON-LD nennt USD
und Steuerexklusion, aber keinen Betrag. Preisbetrag daher ausdrücklich aus der
sichtbaren From-Angabe, nicht aus einem erfundenen strukturierten Angebot. Base-Kit
enthält laut Käuferleitfaden weder Tether noch Leuchten; Akku, Ladegerät und Laptop
sind ebenfalls separat. Montage laut Hersteller ungefähr sechs bis acht Stunden.

BlueBoat: 14,5 kg ohne Akkus und Nutzlast. 15 kg ist die gemeinsame Grenze für
Akkus plus Instrumente. Bei 1 m/s und ungefähr 30 W ohne Nutzlast nennt die Tabelle
18/36/50/62 Stunden mit zwei/vier/sechs/acht Akkus. Größte aufgeführte Akkukonfiguration
2128 Wh; nicht mit Höchstgeschwindigkeit, voller Nutzlast oder beliebigen
Wetterbedingungen gleichgesetzt. 3 m/s gelten bei zwei Akkus ohne Nutzlast.
Benutzerseitige Solarversorgung mit theoretisch unbestimmter Dauer zählt nicht als
Akku-Maximum. Zwei M200-Motoren mit Weedless-Propellern, Differenzialschub.

L×B×H: 120×93×46 cm ausgeklappt, 120×71×24 cm gefaltet. Verpackungsmaße bleiben
separat. Der extrahierte PDF-Text enthält außerdem eine 38-cm-Höhenmarkierung; ihr
Bezugsumfang ist nicht visuell verifiziert. Sie ersetzt nicht die tabellierten
46 cm, und eine Zuordnung zu Antenne oder Konfiguration wird nicht behauptet. Standardfunk bis 250 m, optionale Richtantennen über 800 m
unter passenden Bedingungen: keine garantierte Missionsreichweite oder
Kollisionsvermeidung. 320 mm maximaler beladener Tiefgang ist keine Tauchtiefe.
Ab 4400 USD vor Steuern; Akkus, Ladegerät, Laptop, gewählte Funk-/Sonaroptionen
und Versand behalten ihren Umfang. Keine exakten strukturierten Kaufangebote
für die qualifizierten Startpreise erzeugt.

GPS, Navigator, ArduRover und BlueOS unterstützen Wegpunkte, Guided und Loiter.
Das Produktmarketing nennt Return-to-Home bei Funkverlust. Der Betriebsleitfaden
qualifiziert dagegen: Standard-GCS-Verlust nach fünf Sekunden führt außerhalb
Auto zu Hold mit gestoppten Motoren ohne aktives Positionhalten; Auto ignoriert
jenen Failsafe und setzt die Mission fort. Parameter und Modus sind entscheidend,
kein universelles selbständiges Heimkehren. Unterwasser-Gripper, Sonarsysteme,
Skids, Heavy, Gehäuse, BaseStation und Propulsionskomponenten bleiben Optionen bzw.
Komponenten. Ein Distributor-Tag „T500 Thruster ROV“ belegt kein zusätzliches
modellgenaues Herstellerfahrzeug. Firmenhistorie ab T100-Kampagne 2014 belegt nicht
das Erstjahr beider Roboter. Keine vollständige historische/regionale Produktliste,
IP-Klassifizierung, numerische Navigationsgenauigkeit oder Marktführerschaft abgeleitet.

14 gespeicherte Collector-Versuche: neun HTTP200-Bodies, davon zwei PDFs, vier
HTTP403 an vorab ausgewählten Ambi-URLs und ein HTTP404 am vermuteten alten ROV-
Handbuchpfad. Danach korrekten produktverlinkten Betriebspfad erfolgreich gelesen.
Keine weiteren Ambi-Anfragen nach dem beobachteten Batch. Alle gespeicherten Bodies
per SHA256 geprüft und HTML-/PDF-Text gelesen. Eine visuelle Prüfung beider
Datenblätter ist anhand der verfügbaren Werkzeugprotokolle nicht nachgewiesen.
Zusätzliche Webversuche sind nicht Teil der 14 Collector-Versuche. Keine Formulare oder Warenkorbaktionen.

Aktuell 2053 Modelle/Konfigurationen, 951 Produktmerkmalsdatensätze, 4149 Aussagen
und 1836 Produktquellenverweise. Ausgewählte Prüfungen: 13340 Felder auf 797 Modellen,
5753 dokumentiert, 7272 unbekannt, 252 widersprüchlich und 63 Roadmap. Ursprüngliche
518 Ziele: 385 mit ausgewählten Feldprüfungen, 133 offen. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Keine Vollständigkeit
oder Führungsposition allein aus Bestandszahlen abgeleitet.

793 Unit-Tests/64 Dateien und zwölf ausgewählte Desktop-/Mobil-Browserfälle bestanden,
einschließlich vier Axe-Läufen, Vergleich, Suche und Firmenprofil. Build 3103 Seiten/
ca. 481 MB. Audit null Fehler/947 Warnungen, unverändert. Import-Trockenlauf null
Ergänzungen, Offline-Refresh, alle 797 gerenderten Feldprüfseiten/13340 Felder und
Quellen-/Exporttransport geprüft. Zwei anfängliche Vergleichsfälle erwarteten einen
englischen Dezimalpunkt in der deutschen Ansicht. Neue Browsererwartung auf
15,6 Ah korrigiert und alle zwölf Fälle wiederholt; rohe 15.6-Ah-Belegprüfung
beibehalten, keine Daten- oder Anwendungsänderung daraus. Anfangsergebnisse erhalten.
Geänderten Test gelintet/formatiert. Keine
Anwendungslogik geändert; frühere Python-/Anwendungslint-/Format- und vollständige
Vergleichsregressionen in Batch95-Historie erhalten, ohne neue Ausführung zu behaupten.
Eigene Test-/Browserressourcen beendet. Dauerhafter Beleg:
`reports/competitor-batch-97-evidence.json`.


## Korrektur vom 2. November 2026 – Umfang der PDF-Prüfungen in Batch 96/97

Die zuvor behaupteten PDF-Screenshot-Sichtungen sind nicht durch die verfügbaren
Werkzeugprotokolle belegt und wurden in beiden Manifesten zurückgenommen.
Gespeicherte Antwortkörper, SHA256 und extrahierte technische Tabellentexte sind
weiterhin belegt. Zwei Größen-Feldhinweise nennen den 38-cm-Bezugsumfang der
BlueBoat-Zeichnung nun ausdrücklich ungeklärt. Tabellenwerte und Modellidentitäten
bleiben unverändert. Ursprungsaussagen bleiben in Git und im Korrekturbericht
nachvollziehbar. Siehe `reports/competitor-evidence-inspection-correction-2026-11-02.json`.


## Ergänzung vom 2. November 2026 – AgiBot-Varianten und aktuelle Produkte (Batch 98)

13 neue Modellkarten: A2 Ultra, A2 Lite, X2 Ultra, X2 REC, X2 EDU, G1 MAX,
D1 Edu, D1 Max, D1 MaxPro, C5, C4, C2 und C2P. Zwölf bestehende Modelle geprüft:
A2, A3, A3 Ultra, Lingxi X1/X2, Genie G1, G2, G2 Max, G2 Air, D1 Pro,
D1 Ultra und D1 Ultra-W. 431 ausgewählte Felder: 220 dokumentiert, 209 unbekannt,
zwei mit ungeklärtem Quellen-/Zählumfang. 24 neue Feldprüfungen, bestehende
Ultra-W-Prüfung erweitert. Ein Firmenfokus ergänzt, insgesamt 92. Die 2041 anderen
bisherigen Katalogzeilen, 796 übrigen Feldprüfungen, 91 bisherigen Firmenfokusse,
Profile/Aliasse und alle 1961 ursprünglichen Quellenidentitäten unverändert.
Vorherige Produktbelege und die ersetzte Ultra-W-Feldprüfung bleiben im Manifest.

A3 Ultra: Herstellerankündigung vom 18. Juli 2026 nennt 174 cm, 60 kg, 51 aktive
Freiheitsgrade, 5 kg je Arm und bis zu acht Stunden kombinierte Betriebszeit.
55 kg und zehn Stunden gehören zum Grundmodell A3. Broschüren-Handangabe bis
20 DOF wird nicht zum Ganzkörperwert addiert. Zehn Sekunden Akkutausch sind keine
Ladedauer. A2 Ultra/Lite behalten eigene Tabellenspalten; der Pfad A2_Pro nennt
heute A2 Lite und belegt kein zusätzliches Modell A2 Pro. Der alte A2_W-Pfad
liefert A2-Ultra-Inhalt. A2 Max und Yuanzheng A2-W daher nicht umgedeutet, sondern
unverändert mit offener historischer Identitäts-/Versionsprüfung belassen.
G1 MAX wird trotz ähnlicher 230-kg-Angabe nicht als belegter A2-W-Alias behandelt.

X2: vorhandenen Lingxi-X2-Datensatz als aktuelle Grundmodellkarte behalten,
keine zusätzliche Dublette erzeugt. Aktuelle Basisdaten 35 kg/25 DOF/fünf je Arm;
Ultra 39 kg/30 DOF/sieben je Arm, REC 40 kg/30 DOF, EDU 35 kg/29 DOF.
Historische Revisionsgleichheit ist damit nicht bewiesen. Die Serienseite
schließt Ultra-Navigation und Hindernisvermeidung ausdrücklich für Basis-X2 aus.
REC erhält nicht automatisch Laufzeit und Geschwindigkeit der Nachbarspalte.
EDU-Höhe enthält einen Dummy-Kopf; optionale Hände und Rechenmodule sind kein
serienmäßig enthaltenes Komplettsystem. G1 nennt 20 DOF ohne Endeffektor in der
Tabelle und 26 im Text ohne vollständige Aufschlüsselung; Zählumfang bleibt sichtbar.

G2 Max: Bekanntmachung im Juli, formeller Start am 29. Oktober 2026.
Letztere Herstellerquelle nennt 21 DOF, bis 40 kg gemeinsame Zweiarmlast und
0,1–2,5 m Arbeitshöhe. Keine 40 kg je Arm und keine Armreichweite daraus abgeleitet.
G2-Grundplattform hat eine eigene 5-kg-je-Arm-/26-DOF-Spezifikation; Jetson-T5000-
2070-TFLOPS(FP4)-Angabe bleibt mit Präzisionsformat, ohne TOPS-Umrechnung.
Herstellerberichtete Tablet-Linienkennzahlen sind keine Akkulaufzeit oder
unabhängige universelle Produktivitätsmessung. G2 Air bleibt ein betreutes,
einarmiges System; vollständige Autonomie ist ein Entwicklungspfad.

D1 Pro/Edu: aktuell 15,5 kg inklusive Akku und 3,5 m/s; SDK-Entwicklung ist
ausdrücklich Edu zugeordnet. Ultra/Ultra-W: 16/22 kg und 12/16 DOF; allgemeine
1–2 Stunden Betrieb und eine Stunde unter Last behalten ihre Bedingungen.
Ultra-W hat 16 cm kontinuierliche Treppen und separat 60 cm maximale Kletterhöhe.
D1 Max: 25 cm kontinuierliche Treppen sind nicht 80 cm einzelne Hindernishöhe;
HTML-Mindestlaufzeiten ≥5/≥3,5 h bleiben gegenüber PDF 5±0,5/3,5±0,5 h ungeklärt.
D1 MaxPro: 50 kg Last, 2081 Wh, 5,5±0,5 h ohne Last/zwei Stunden mit 50 kg.
3 m/s sind Labor-Extremwert; Produkt laut Fußnote auf 2 m/s begrenzt.
Laden 10–90 Prozent ungefähr 4,5 Stunden. 30-cm-Treppen, 20-cm-Waten,
LiDAR-Sensorgenauigkeit und Ganzfahrzeug-IP67 bleiben getrennte Messgrößen.

C5/C4/C2/C2P: Reinigungsleistung und Werkzeugbreiten getrennt nach Modell und
theoretischem/maximalem bzw. genanntem Stundenwert. 25 kg C5-Bürstendruck ist keine
Nutzlast; vier Minuten Tankselbstreinigung keine Akkuladedauer. Stations- und
Roboterbehälter werden nicht addiert oder doppelt als Frisch-/Schmutzwasser vergeben.
C2P: vier Stunden Laufzeit, zwei Stunden kontinuierlicher Betrieb mit vollem
Wassertank und zwei Stunden Laden sind drei unterschiedliche Angaben.
700 mm Mindest-Durchfahrtshöhe wird nicht als horizontale Gangbreite übernommen.
Bei C4 wird 800 mm tabellierter Wenderadius nicht in einen Durchmesser umgerechnet.

Worken bleibt ein vorgeschlagener Produktivitätsrahmen; AHA3, GO-Modelle,
Link-U OS, Genie Studio/Sim, Datensätze, Hände, Gelenke und Stationen sind keine
weiteren vollständigen Roboterkarten. Link-U-Komplettveröffentlichung als Open Source
bis Ende 2026 bleibt am 2. November eine Zukunftsangabe. Keine unabhängigen,
exklusiven USPs oder erreichte Marktführerschaft abgeleitet.

36 gespeicherte Collector-Versuche: 33 HTTP200-Bodies einschließlich sechs PDFs,
zwei vermutete Pfade mit404, Store429 ohne Wiederholung. Alle Body-Hashes geprüft.
Eine überlappende Collector-Ausführung verursachte einen Index-/Manifestkonflikt;
ursprüngliche Request-Metadaten und Bodies wiederhergestellt und sämtliche Hashes
abgeglichen, ohne Wiederabruf. Danach sequenziell abgerufen. PDF-Tabellen als Text
geprüft; keine visuelle Sichtung oder Zeichnungsinterpretation behauptet.
Die separate Inspektionskorrektur früherer Batches bleibt dokumentiert in
`reports/competitor-evidence-inspection-correction-2026-11-02.json`.

Aktuell 2066 Modelle/Konfigurationen, 973 Produktmerkmal-Datensätze, 4239 Aussagen,
1881 Produktquellenverweise. Ausgewählte Prüfungen: 13769 Felder auf 821 Modellen;
5972 dokumentiert, 7480 unbekannt, 254 widersprüchlich/ungeklärt und 63 Roadmap.
Ursprüngliche 518 Ziele: 387 mit Feldprüfungen, 131 offen. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte weiter offen.

793 Unit-Tests/64 Dateien, 14 ausgewählte Desktop-/Mobilfälle einschließlich vier
Axe-Läufen bestanden. Alle 821 gerenderten Prüfseiten/13769 Felder, 25 aktuelle
Modellseiten/431 Felder, Firmenfokus, Exporte, Suche und exakter Vergleichs-Payload
geprüft. Zwei anfängliche Suchtests verlangten einen Merkmalstreffer-Satz für eine
auch in der Beschreibung vorhandene Phrase. Bestehendes Verhalten war korrekt;
Test auf tatsächlich ausschließlich im Merkmal vorkommende Phrase geändert und
alle 14 Fälle bestanden. Keine Anwendungs- oder Datenänderung daraus abgeleitet.
Build 3116 Seiten/ca. 483 MB. Audit null Fehler/966 Warnungen: alle 19 zusätzlichen
Warnungen betreffen ausdrücklich unbekannte Erscheinungsjahre. Offline-Refresh und
Import-Trockenlauf mit null Ergänzungen bestanden. Geänderte Testdatei gelintet und
formatiert. Keine Anwendungslogik geändert; frühere vollständige Browser-/Python-
Prüfungen bleiben historische Ergebnisse. Eigene Test-/Browserprozesse geschlossen,
Port4321 frei; andere Aufgaben unangetastet. Dauerhafter Beleg:
`reports/competitor-batch-98-evidence.json`.


## Ergänzung vom 2. November 2026 – Boston Dynamics Generationen und Konfigurationen (Batch 99)

Zehn neue Modell-/Komplettkonfigurationskarten: Hydraulic Atlas, PETMAN, Stretch,
Stretch for Case Pick, Spot Enterprise Asset Management Kit, Handle, Spot Classic,
Sandflea, RHex und RiSE. Sieben bestehende Einträge geprüft: Atlas, E-Atlas, Spot,
Spot Enterprise, BigDog, LS3 und WildCat. 318 ausgewählte Felder: 98 dokumentiert,
218 unbekannt, zwei Quellenkonflikte. Ein Firmenfokus ergänzt, insgesamt 93.
Die 2059 anderen bisherigen Katalogzeilen, alle 821 früheren Feldprüfungen,
92 früheren Firmenfokusse, Profile/Aliasse und 1961 Quellenidentitäten unverändert.
Vorherige Atlas-/Spot-Produktbelege bleiben im Manifest erhalten.

Atlas: Die aktuelle Karte beschreibt die am 5. Januar 2026 angekündigte
Produktionsversion. Hersteller-Article-datePublished und explizite Ankündigung
belegen diesen Versionsstart, nicht den Beginn des Atlas-Gesamtprogramms.
1,9 m, 90 kg, 56 DOF und IP67 laut aktueller Seite/Datenblattrevision 15. Oktober
2026. Traglasten: 50 kg momentan, 30 kg dauerhaft, 20 kg einhändig. Vier Stunden
typische Laufzeit, zwei Stunden bei schwerem Heben. Ungefähr drei Minuten autonomer
Akkuwechsel sind getrennt von 1,5 Stunden Laden; kein 24-Stunden-Akku daraus.
2,3 m allgemeiner Reach-Wert wird nicht ohne Armbezug als mechanische Armreichweite
eingetragen. Unbelegten früheren 39000-USD-Preis, hydraulischen DOF-/Geschwindigkeits-
und alten Laufzeitbezug entfernt. Vorhandene Bild-/Videozuordnung bei Atlas/E-Atlas
geleert, weil die Zuordnung zur jeweils präzisen Generation nicht verifiziert ist;
keine Assetdateien gelöscht und keine Ersatzbilder erfunden.

E-Atlas bleibt als Katalogbezeichnung für die am 17. April 2024 vorgestellte
elektrische Entwicklungsplattform erhalten. Der Hersteller nennt sie Electric Atlas,
nicht ein eigenständiges offizielles E-Atlas-Produkt. Ihre exakten technischen Werte
werden nicht aus der 2026-Karte zurückübertragen. Hydraulic Atlas/HD Atlas als
historische Plattform separat ergänzt; aktuelle Elektrodaten nicht übernommen.
PETMAN ist in der Hersteller-Retrospektive als Schutzkleidungs-Testroboter benannt,
ohne daraus ein vollständiges Datenblatt zu erfinden.

Spot: aktive HTML-Seite nennt 33,8 kg mit Akku; verlinktes Datenblatt vom 22. Mai
2024 nennt 32,7 kg. Keine Hardware-/Revisionszuordnung löst den Unterschied auf.
PDF-Länge 1100 mm; HTML druckt 110 mm neben 43,3 Zoll. Beide Abweichungen sichtbar
als Konflikt, ohne stillschweigende Korrektur. 500 mm Breite, 610 mm Standard-Gehhöhe
bleiben Posenangaben; 520–700 mm Gehbereich und 191 mm Sitzhöhe nicht vermischt.
14 kg montierte Nutzlast, 1,6 m/s, ±30° Steigung, 300-mm-Stufe und IP54 behalten
ihren jeweiligen Umfang. Betriebsbereich −20°C bis 55°C; Einschalten laut PDF erst
ab 0°C. SDK nennt zwei Hüftgelenke plus ein Knie je Bein: zwölf an vier Beinen,
kein zusätzlich eingeschlossener Arm daraus abgeleitet.

564-Wh-Akku: durchschnittlich 90 Minuten, abhängig von Nutzlast und Umgebung;
180 Minuten Standby sind kein aktiver Betrieb. 60 Minuten generische Akku-Recharge-
Angabe bleibt getrennt von Docktabellen: bei 25°C 50 Minuten bis 80 Prozent/zwei
Stunden bis 100 Prozent; bei 35°C 2,5/3,5 Stunden. Optionaler Spot Arm: sechs DOF
plus Greifer, 8 kg Masse; 11 kg maximales Heben, 5 kg dauerhaft bei 0,5 m Ausladung,
25 kg Ziehen auf Teppich, jeweils mit 22°C-Laborbedingung. Keine pauschale 25-kg-
Traglast oder zusätzliche Armmasse außerhalb des Nutzlastbudgets zugesichert.

Spot Enterprise: Ankündigung vom 2. Februar 2021 belegt selbstladende Ausführung
mit Dock und geänderter Kommunikations-/Remote-Hardware. Damalige Basisrobotik,
CAM+IR-Komplettangebot und aktueller Bare-Spot-Bestand behalten ihren Umfang.
Das gesonderte Enterprise Asset Management Kit ist eine dokumentierte komplette
Sensor-/Software-/Dockkonfiguration, kein zusätzlicher Basis-Chassis-Typ.
Kitmasse mit Akku 43,8 kg ohne bzw. 47,5 kg mit optionalem Fluke SV600; Geh-Standardhöhe
mit Aufbauten 967 mm. IP54 und durchschnittlich 90 Minuten sind Roboterwerte;
IP65 und acht Stunden gehören zum Tablet. Kit-Umgebung −20°C bis 45°C.
EAP-2-LiDAR-100-m-Reichweite/±3-cm-Sensorgenauigkeit ist keine Roboternavigations-
genauigkeit. Kein verbleibender Nutzlastspielraum aus unvollständigen Angaben errechnet.

Stretch: Trailerentladung und Case Pick sind dokumentierte Komplettkonfigurationen
mit eigenen Tabellen. Entladung: 1300 kg Robotermasse, 40×48-Zoll-Footprint,
bis 16 Stunden Laufzeit, 50 lb/Herstelleräquivalent 23 kg Kistenlast,
600–800 Kisten/h als Herstellerangabe für diese Aufgabe. Vakuumgreifer,
Onboard-Beleuchtung, selbständige Bergung heruntergefallener Kisten und Multipick
werden genannt. Nominal ungefähr zwei Stunden bis 90 Prozent am Fast Charger;
unter-zwei-Stunden-Marketing bleibt keine bedingungslose Vollladegarantie.

Case Pick: 1500 kg Robotermasse, bis 1300 kg ziehbare Palette, 23 kg Kisten,
bis 2 m/s, gebaute Paletten bis 1,8 m. Eigenes Armdesign mit zusätzlichem Gelenk,
ohne vollständige DOF-Zahl daraus. Bis 16 Stunden Laufzeit; 90 Prozent in einer
Stunde 45 Minuten am Fast Charger. Mindestens zehn Fuß/Herstelleräquivalent drei
Meter breite Gänge und zunächst Umgebungslagerung im Regal. Engere Gänge,
offene Palettenfelder und Kühllager bleiben Entwicklungsperspektive. Keine
600–800-Kisten-Entladeleistung als Case-Pick-Durchsatz übernommen. Gemeinsame
3,2 m vertikale/1,95 m horizontale Arbeitsräume sind weder Stapelhöhe noch ein
eindeutig belegtes mechanisches Armlängenmaß. WMS-/Orbit-Integration ersetzt keine
unabhängig gemessene Facility-Produktivität.

Herstellerhistorie: Hydraulic Atlas, Handle, Spot Classic, WildCat, Sandflea,
LS3, RHex, RiSE und BigDog getrennt geprüft. Zeitleistenknoten sind Meilensteine,
keine automatisch verifizierten Erstjahre. LS3: 400 lb Last und 20 Meilen vor
Nachtanken, keine 24-Stunden-Akkulaufzeit. WildCat: 19 mph auf ebener Fläche,
keine belastete Geländegarantie. Sandflea: 11 lb und 30 Fuß vertikales Springen;
RHex: 30 lb, sechs Beine, ferngesteuert und kopfüber beweglich; RiSE: ungefähr
50 Haken je Fuß und 5 cm/s Klettergeschwindigkeit. Sechs Beine sind keine belegte
Sechs-DOF-Angabe. Nicht dokumentierte frühere Preise und Spezifikationen bleiben
unbekannt statt durch Werte aktueller Plattformen ersetzt zu werden.

27 gespeicherte Collector-Versuche: 25 HTTP200-Bodies einschließlich sechs PDFs,
zwei vermutete Pfade mit404, keine 403/429. Öffentliche Herstellerlinks, WP-Such-/
Media-API und SDK-Navigation genutzt; API-Suchergebnisse dienen zur Dokument-
auffindung, nicht als technische Produktbelege. Alle Body-Hashes geprüft.
PDFs als extrahierten Text geprüft; keine visuelle Bild-/Zeichnungs-/Videosichtung
behauptet. Keine Formulare oder Warenkorbaktionen, keine zuvor blockierten Hosts
erneut abgerufen. Die frühere separate Inspektionskorrektur bleibt dokumentiert.

Aktuell 2076 Modelle/Konfigurationen, 988 Produktmerkmal-Datensätze, 4304 Aussagen,
1909 Produktquellenverweise. Ausgewählte Prüfungen: 14087 Felder auf 838 Modellen;
6070 dokumentiert, 7698 unbekannt, 256 widersprüchlich/ungeklärt und 63 Roadmap.
Ursprüngliche 518 Ziele: 389 mit Feldprüfungen, 129 offen. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Keine Vollständigkeit,
exklusiven USPs oder erreichte Marktführerschaft allein aus diesen Beständen abgeleitet.

793 Unit-Tests/64 Dateien, 16 ausgewählte Desktop-/Mobilfälle einschließlich vier
Axe-Läufen bestanden. Alle 838 gerenderten Prüfseiten/14087 Felder, 17 ausgewählte
Seiten/318 Felder, Firmenfokus, Exporte, Suche und Vergleichs-Payload abgeglichen.
Build 3126 Seiten/ca. 484 MB. Audit null Fehler/980 Warnungen: alle 14 zusätzlichen
Warnungen sind ausdrücklich unbekannte Erstjahre. Import-Trockenlauf null Ergänzungen,
Offline-Refresh und Lint/Format der geänderten Testdatei bestanden. Keine Anwendungscode-
Änderung; frühere vollständige App-Browser-/Python-Ergebnisse bleiben historische
Ergebnisse. Eigene Prozesse beendet und Port4321 frei; andere Aufgaben unberührt.
Dauerhafter Beleg: `reports/competitor-batch-99-evidence.json`.
