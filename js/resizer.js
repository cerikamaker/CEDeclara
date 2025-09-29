const resizer = document.getElementById('resizer');
const navigatorSection = document.getElementById('navigator');
let isResizing = false;
let lastX = 0;
let startWidth = 0;

let test = document.getElementById('test');
test.innerText = "Thomas"
let test2 = document.getElementById('test2');
test2.innerText = "Thomas3"

resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    lastX = e.clientX;
    startWidth = navigatorSection.offsetWidth - 40;
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'ew-resize';
    test.innerText = "Resizing";
});

document.addEventListener('mouseup', (e) => {
    if(isResizing){
        isResizing = false;
        document.body.style.cursor = '';
    document.body.style.userSelect = '';
        test.innerText = "Ready";
    }
});

document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    const dx = e.clientX - lastX;
    test.innerText = dx;
    test2.innerText = navigatorSection.offsetWidth;
    startWidth = startWidth + dx; 
    navigatorSection.style.width = startWidth + 'px';
    lastX = e.clientX;
});