import {innerBoxStyle} from "../styles/inner_box.js";
import { inputTextStyle } from "../styles/input_text.js";


const htmlstruct = document.createElement('template');

htmlstruct.innerHTML = 
`
<style>
    #item-product {
        display: flex;
        flex-direction: column;
        padding: 20px;
        border-radius: 8px;
        min-width: 0;
    }

    #item-product-data {
        display: grid;
        grid-template-columns: repeat(6, auto) ;
        grid-template-rows: auto;
        gap: 5px 10px;
        min-width: 0;
    }

    #item-product-data input[type="text"] {
        min-width: 0;
    }

    #item-product-desc.visible-desc {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        gap: 5px 10px;
        min-width: 0;
    }

    #item-product-desc {
        display: none;
    }  

    .item-product-textarea {
        resize: none;
        min-width: 0;
        height: 100%
    }

    #item-product-collaps-header {
        display: flex;
        flex-direction: row;        
        align-items: center;
        align-self: flex-start;
        margin-bottom: 20px;
        margin-top: 20px;
        min-width: 0;
        gap: 10px;
        cursor: pointer;
    }
    ${innerBoxStyle}
    ${inputTextStyle}
</style>

<div id="item-product" class="inner-box-area">
    <div id="item-product-data">
        <label for="input-projectnumber">Projektnummer: </label>
        <input type="text" id="input-projectnumber">
        <label for="input-ordernumber">Auftragsnummer: </label>
        <input type="text" id="input-ordernumber">
        <label for="input-marketname">Handelsname: </label>
        <input type="text" id="input-marketname">
        <label for="input-serialnumber">Seriennummer: </label>
        <input type="text" id="input-serialnumber">
        <label for="input-chargenumber">Chargennummer: </label>
        <input type="text" id="input-chargenumber">
        <label for="input-buildyear">Baujahr: </label>
        <input type="text" id="input-buildyear">
        <label for="input-type">Typ: </label>
        <input type="text" id="input-type">
        <label for="input-model">Modell: </label>
        <input type="text" id="input-model">
    </div>
    <div id="item-product-collaps-header">
        <svg width="22" height="22" viewBox="0 0 22 22">
            <polyline points="6,4 18,11 6,18 6,4" fill="#000000" stroke="#1e90ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
        </svg>
        <div>Detail Informationen</div>
    </div>
    <div id="item-product-desc">
        <label for="input-function">Funktion:</label>
        <label for="input-remark">Zusatz:</label>
        <textarea id="input-function" class="item-product-textarea" rows="8"></textarea>
        <textarea id="input-remark" class="item-product-textarea" rows="8"></textarea>
    </div>
</div>
`;
class ItemProduct extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}).appendChild(htmlstruct.content.cloneNode(true));
    }

    connectedCallback(){
        this.setEventHandlers();
    }

    setEventHandlers() {
        let clapp = this.shadowRoot.getElementById("item-product-collaps-header");
        let desc = this.shadowRoot.getElementById("item-product-desc");
        const arrow = clapp.querySelector('svg');

        if (!clapp || !desc || !arrow) {
            console.error("InitView of base_product_view failed");
            return;   
        }

        clapp.addEventListener('click', () => {
            desc.classList.toggle('visible-desc');
            if (desc.classList.contains('visible-desc')) {
                arrow.style.transform = 'rotate(90deg)';
            } else{
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    }
}

customElements.define('item-product', ItemProduct);