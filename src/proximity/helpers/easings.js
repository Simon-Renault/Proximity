
/*
 * List of all the easings availiable
 *
*/
const linear =  t => t 
const easeInQuad =  t => t*t 
const easeOutQuad =  t => t*(2-t) 
const easeInOutQuad =  t => t<.5 ? 2*t*t : -1+(4-2*t)*t 
const easeInCubic =  t => t*t*t 
const easeOutCubic =  t => (--t)*t*t+1 
const easeInOutCubic =  t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 
const easeInQuart =  t => t*t*t*t 
const easeOutQuart =  t => 1-(--t)*t*t*t 
const easeInOutQuart =  t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t 
const easeInQuint =  t => t*t*t*t*t 
const easeOutQuint =  t => 1+(--t)*t*t*t*t 
const easeInOutQuint =  t => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t

export {
    linear,
    easeInQuad,
    easeOutQuad,
    easeInOutQuad,
    easeInCubic,
    easeOutCubic,
    easeInOutCubic,
    easeInQuart,
    easeOutQuart,
    easeInOutQuart,
    easeInQuint,
    easeOutQuint,
    easeInOutQuint
}