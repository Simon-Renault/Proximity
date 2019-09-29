/*
 * List of useful Math hlpers
 *
*/

//convert a range to another range
const map = (n, start1, stop1, start2, stop2)  => ((n-start1)/(stop1-start1))*(stop2-start2)+start2 

//avoid escaping values
const clamp = (n,min,max) => Math.min(Math.max(n, min), max)
const toFixedFloat = (float,num) => parseFloat(float.toFixed(num));

const distancePoints = (x1, y1, x2, y2) => Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));

export {
    map,
    clamp,
    toFixedFloat
}