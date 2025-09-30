import { CResizer } from "./CResizer.js";

let test = document.getElementById('test');
test.innerText = "Thomas"
let test2 = document.getElementById('test2');
test2.innerText = "Thomas3"

window.addEventListener('load', () => {
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
});

