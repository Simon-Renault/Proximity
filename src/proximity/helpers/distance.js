

const BOX = (rect,p) => {
    let dx = Math.max(rect.minX - p.x, 0, p.x - rect.maxX);
    let dy = Math.max(rect.minY - p.y, 0, p.y - rect.maxY);
    return Math.round(Math.sqrt(dx*dx + dy*dy));
}

const X = (coords,p) => {
    return Math.abs(coords.x-p.x)
}

const Y = (coords,p) => {
    return Math.abs(coords.y-p.y)
}

const POINT = (coords,p) => {
    return 
}

const RADIUS = (coords,p) => {
    return 
}


export {
    BOX,
    X,
    Y,
    POINT,
    RADIUS
}