/**
 * This class represent the resizer of the app and no other one.
 * This is also the reason, why we are using HTML-Elements insiede this class
 */
export class CResizer {
    IsResizing = false;
    LastX_position = 0;
    StartWidth = 0;
    NavigatorSection;
    Resizer;

    constructor(isResizing, lastX, startWidth){
        this.IsResizing = isResizing;
        this.LastX_position = lastX;
        this.StartWidth = startWidth;
        this.NavigatorSection = document.getElementById('navigator');
        this.Resizer = document.getElementById('resizer');
    }
    /**
     * This function is used when the mouse is pressed down an we need to prepare for resize
     * @param {number} mousePositionX -- Use e.clientX
     */
    prepareForResize (mousePositionX){
        this.IsResizing = true;
        this.LastX_position = mousePositionX;
        this.StartWidth = this.NavigatorSection.offsetWidth - 40;
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'ew-resize';
    }

    /**
     * Call this function to inform that resizing is finished.
     */
    finishResize(){
        if(this.IsResizing){
            this.IsResizing = false;
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        }
    }

    /**
     * Use this function during mousemovement.
     * @param {number} mousePositionX -- use e.clientX
     */
    doResize (mousePositionX){
        if(this.IsResizing){
            const dx = mousePositionX - this.LastX_position;
            this.StartWidth = this.StartWidth + dx;
            this.NavigatorSection.style.width = this.StartWidth + 'px';
            this.LastX_position = mousePositionX;
        }
    }
}