/**
 * @description
 * This class is loading HTML-Modules to show them inside the app-area.
 */
export class ContentLoader {

    static ContentFiles = {
        Intro: './html/introduction.html',
        Datenschutz: './html/datenschutz.html'
    };

    constructor() {

    }

    /**
     * 
     * @param {ContentFiles} content
     * The files that can be loaded are listed in ContentFiles.
     * Use the keyword for access. 
     */
    async loadContentToAppArea(content){
        const file = ContentLoader.ContentFiles[content];
        if (!file) {
            console.error("Unbekannter Content-Key");
            return;
        }
        const response = await fetch(file);
        const html = await response.text();
        document.getElementById('app-area').innerHTML = html;
    }
}