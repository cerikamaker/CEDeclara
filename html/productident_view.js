import init, {Declara} from "../js/pkg/sn_viewmodel_cedeclara.js"

export class ProductIdentView {
    product_ident;
    btn;
    project_specific_inputs;

    /**
     * 
     * @param {Declara} declara 
     */
    constructor(declara){
        this.declara = declara;
        console.log("ProductIdentView constructed.");
    }

    /**
     * @description
     * This function must be used directly after the html was loaded.
     * All the references to dom are done here.
     */
    InitView(){
        this.project_specific_inputs = document.querySelectorAll('#product-specific-data input');
        this.project_general_data = document.querySelectorAll('#product-general-data span');
        this.btn = document.getElementById("btn-productident-save");
        this.btn.addEventListener('click', (e) => this.SaveData(e));

        console.log("ProductIdentView init.")
        this.product_ident = this.declara.get_product_ident();
        this.writeFields();
        this.writeCommonFields();
    }

    SaveData() {
        this.readFields();
        this.declara.set_product_ident(this.product_ident);
    }

    writeFields() {
        this.project_specific_inputs[0].value = this.product_ident.project_number;
        this.project_specific_inputs[1].value = this.product_ident.order_number;
        this.project_specific_inputs[2].value = this.product_ident.serial_number;
        this.project_specific_inputs[3].value = this.product_ident.charge_number;
        this.project_specific_inputs[4].value = this.product_ident.build_year;
    }

    writeCommonFields(){
        this.project_general_data[0].innerHTML = this.product_ident.name;
        this.project_general_data[1].innerHTML = this.product_ident.model;
        this.project_general_data[2].innerHTML = this.product_ident.typ;
        this.project_general_data[3].innerHTML = this.product_ident.function;
        this.project_general_data[4].innerHTML = this.product_ident.additional_information;
    }

    readFields() {
        this.product_ident.project_number = this.project_specific_inputs[0].value;
        this.product_ident.order_number = this.project_specific_inputs[1].value;
        this.product_ident.serial_number = this.project_specific_inputs[2].value;
        this.product_ident.charge_number = this.project_specific_inputs[3].value;
        this.product_ident.build_year = this.project_specific_inputs[4].value;
    }
}