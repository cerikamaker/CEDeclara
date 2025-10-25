# Wiki CE-Declara

## MVVM-Pattern

The pattern consists of three parts.

### View

The View main part is the index html.
In there all other HTML views will be included.
Therfore js files are provided.

#### codebehind.js

This code handles all global events and is initializing the application.

#### ContentLoader.js

This code is initialized by codebehind.js.
It is responsible to load the correct html to the main conten.

## Prozess Laden und speichern

Beim Öffnen der PWA sind keine Daten im Arbeitsspeicher geladen.
Um die Daten zu strukturieren soll es im Reiter Datenquelle die Möglichkeit geben eine Datei zu laden, oder den Inhalt der IndexDB falls vorhanden zu laden.

Die Unterscheidung ob die Applikation gerade geöffnet oder jemand die F5-Taste gedrückt hat, kann wie folgt erfolgen.
Als erstes wird geprüft ob eine bestimmte Variable im Session-Speicher vorhanden ist.
Ist diese nicht vorhanden, dann muss es sich um das erstmalige Starten handeln.
Ist sie vorhanden, dann hat jemand wahrscheinlich die F5-Taste betätigt.

```mermaid
flowchart TD
    Load([PWA laden])
    CheckSession{Variable<br>in Session<br>Storage}
    Start([PWA geladen])
    Reload([F5-Taste])
    CheckDB{Datenmodell<br>in IndexDB?}
    EnableRecovery[Show<br>recovery<br>button]
    LoadFile[Datei laden]
    WriteWASM[Datenmodell<br>schreiben]
    WriteIndexDB[IndexDB<br>schreiben]
    SaveData[Änderung<br>übernehmen]
    Backup[In Datei<br>speichern]
    ViewData[Daten anzeigen]
    ReadIndexDB[IndexDB<br>lesen]

    Load --> CheckSession
    CheckSession -- Variable gefunden --> Reload
    CheckSession -- Kein Fund --> Start

    Start --> CheckDB
    CheckDB -- Yes --> EnableRecovery
    CheckDB -- No --> LoadFile

    EnableRecovery --> LoadFile
    LoadFile --> |JS to WASM| WriteWASM
    WriteWASM --> |WASM to IndexDB| WriteIndexDB

    Start --> SaveData
    SaveData --> |JS to WASM| WriteWASM

    WriteIndexDB --> |JS to File| Backup

    WriteWASM --> |WASM to JS| ViewData

    Reload --> |Index to JS| ReadIndexDB --> |JS to WASM| WriteWASM
```

Die Übertragung zwischen JS und WASM soll immer über das Datenmodell an sich erfolgen.
Theoretisch müssten so nur Objekte serialisiert werden.
D.h. wir verwenden das JSON-Format für die Speicherung.
