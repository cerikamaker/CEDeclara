import { CResizer } from "./CResizer.js";
import { ContentLoader } from "./ContentLoader.js";
import init, {hello_console, set_element_for_fun} from "./pkg/sn_viewmodel_cedeclara.js"


window.addEventListener('load', () => {
    let Loader = new ContentLoader();
    Loader.loadContentToAppArea('Intro');

    let AppResizer = new CResizer(false, 0, 0);

    /**
     * Here all mouse down events are handled
     */
    resizer.addEventListener('mousedown', (e) => {
        AppResizer.prepareForResize(e.clientX);
    });

    /**
     * Here all mouse up events are handled
     */
    document.addEventListener('mouseup', (e) => {
        AppResizer.finishResize();
    });

    document.addEventListener('mousemove', (e) => {
        AppResizer.doResize(e.clientX);
    });

    const site_nav = document.getElementById('site-navigator');
    site_nav.addEventListener('pagechange', (e) => {
        const view = e.detail.view;
        Loader.loadContentToAppArea(view);
    });

    const btn_info = document.getElementById('info-btn');
    btn_info.addEventListener('click', () => {
        let test = document.getElementById('test');
        test.innerHTML = "JavaSript says hello!";
    });

    const btn = document.getElementById('file-btn');
    btn.addEventListener('click', () => {
        init().then(() => {
            set_element_for_fun();
        });
    });
    
});

