



const getRect = (el) => {
    const elRect = el.getBoundingClientRect()
    const docScrolls = { 
        left : document.body.scrollLeft + document.documentElement.scrollLeft, 
        top : document.body.scrollTop + document.documentElement.scrollTop
    };
    return {
        minX: elRect.left + docScrolls.left, 
        maxX: elRect.width + elRect.left + docScrolls.left,
        minY: elRect.top + docScrolls.top, 
        maxY: elRect.height + elRect.top + docScrolls.top
    };
}


const getMousePos = (e) => {
    let x = 0;
    let y = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) {
        x = e.pageX;
        y = e.pageY;
    }
    else if (e.clientX || e.clientY) {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return { x, y }
};


const getScrollPos = (e) => {
    let x
    let y

    return { x, y }
}
   
const isElement = (el) =>{
    return el instanceof Element || el instanceof HTMLDocument;  
}


export {
    getMousePos,
    getRect,
    isElement,
    getScrollPos
}