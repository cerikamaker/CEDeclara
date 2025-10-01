class SiteNavigator extends HTMLElement {
    arrow = `
        <span>
            <svg width="16" height="16" viewBox="0 0 16 16">
                <polyline points="3,4 10,8 3,12" fill="none" stroke="#1e90ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
            </svg>
        </span>
    `;

    navigatorStyle = `
        <style>
            h1 {
                margin: 0px;
            }

            nav {
                margin-left: 20px;
                cursor: pointer;
            }

            nav ul {
                list-style: none;
            }
            
            nav > ul {
                padding-left: 0px;
                margin-left: 0px;
            }

            .tree-label {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            
            .tree-label svg {
                display: block;
            }

            ul ul.collapsed {
                display: none;
            }
        </style>
    `;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
        this.addToggleListeners();
        this.addPageNavigatorListeners();
        //this.addEventListener();
    }

    addToggleListeners() {
        const labels = this.shadowRoot.querySelectorAll('.tree-label');
        labels.forEach(label => {
            label.addEventListener('click', (e) => {
                e.stopPropagation();
                const li = label.parentElement;
                const sublist = li.querySelector('ul');
                if(sublist){
                    sublist.classList.toggle('collapsed');
                }
            });
        });
    }

    addPageNavigatorListeners() {
        const leaves = this.shadowRoot.querySelectorAll('li[data-view]');
        leaves.forEach (leaf => {
            leaf.addEventListener('click', (e) => {
                e.stopPropagation();
                const view = leaf.getAttribute('data-view');
                this.dispatchEvent(new CustomEvent('pagechange', {
                    detail: {view},
                    bubbles: true,
                    composed: true
                }));
            });
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
            ${this.navigatorStyle}
            <h1>Seiten-Navigator</h1>
            <nav id="site-nav">
                <ul>
                    <li data-view="Intro">ReadMe</li>
                    <li>
                        <span class="tree-label">
                            ${this.arrow}
                            Organisation
                        </span>
                        <ul class="collapsed">
                            <li>Datenquelle</li>
                        </ul>
                    </li>
                    <li>
                        <span class="tree-label">
                            ${this.arrow}
                            Eingabemasken
                        </span>
                        <ul class="collapsed">
                            <li>Harmonisierungsvorschriften</li>
                            <li>Produktidentifikation</li>
                            <li>
                                <span class="tree-label">
                                    ${this.arrow}
                                    Fundstellen
                                </span>
                                <ul class="collapsed">
                                    <li>Harmonisierte Normen</li>
                                    <li>Sonstige Normen</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span class="tree-label">
                            ${this.arrow}
                            Stammdaten
                        </span>
                        <ul class="collapsed">
                            <li>Hersteller</li>
                            <li>Bevollmächtigte</li>
                            <li>Unterzeichnungsberechtigte</li>
                            <li>Dokumentationsbevollmächtigte</li>
                            <li>Produkte</li>
                            <li>Benannte Stellen</li>
                        </ul>
                    </li>
                    <li>Export</li>
                    <li data-view="Datenschutz">Datenschutz</li>
                </ul>
            </nav>
        `;
    }
}
customElements.define('site-navigator', SiteNavigator);