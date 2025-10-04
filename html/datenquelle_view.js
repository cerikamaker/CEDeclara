export class DatenquelleView {
    constructor() {

    }

    InitView(){
        const btn_file_loader = document.getElementById('dq-file-btn');
        btn_file_loader.addEventListener('click', async () => {
            try {
                // Dialog öffnen, nur JSON-Dateien erlauben
                const [fileHandle] = await window.showOpenFilePicker({
                    types: [{
                        description: 'JSON-Dateien',
                        accept: {'application/json': ['.json']}
                    }]
                });
                const file = await fileHandle.getFile();
                const content = await file.text();
                const data = JSON.parse(content);
                
                // Beispiel: Daten anzeigen oder weiterverarbeiten
                //document.getElementById('app-area').textContent = JSON.stringify(data, null, 2);
                
                // Hier kannst du unterscheiden, ob es Stammdaten oder eine Konformitätserklärung ist
                // und entsprechend weiterverarbeiten!
            } catch (err) {
                if (err.name !== 'AbortError') {
                    alert('Fehler beim Öffnen der Datei: ' + err.message);
                }
            }
        }); 
    }
}