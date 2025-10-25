import { DatenquelleView } from "../html/datenquelle_view.js";
import { ProductIdentView } from "../html/productident_view.js";
import { BaseProductView } from "../html/base_product_view.js";
import { Declara } from "./pkg/sn_viewmodel_cedeclara.js";
/**
 * @description
 * This class is loading HTML-Modules to show them inside the app-area.
 */
export class ContentLoader {

    static ContentFiles = {
        Intro: './html/introduction.html',
        Datenquelle: './html/datenquelle.html',
        Datenschutz: './html/datenschutz.html',
        Produktidentifikation: './html/productident.html',
        BaseProducts: './html/base_product.html'
    };

    /**
     * 
     * @param {Declara} declara 
     */
    constructor(declara) {
        this.declara = declara;
        this.datenquelle = new DatenquelleView();
        this.productident = new ProductIdentView(this.declara);
        this.baseproduct = new BaseProductView(this.declara);
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
        this.setEventListeners(content);
    }

    /**
     * @description
     * This function is loading the correct viewmodel depending on the selection in the sitenavigator
     * @param {string} content
     * Then content parameter comes from seitennaviagtor.js. 
     */
    setEventListeners(content){
        switch(content){
            case 'Datenquelle':
                this.datenquelle.InitView();
                break;
            case 'Produktidentifikation':
                this.productident.InitView();
                break;
            case 'BaseProducts':
                this.baseproduct.InitView();
                break;
            default:
        }
    }
}