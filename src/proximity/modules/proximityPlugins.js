import * as distFunctions from '../helpers/distance'
import { map,clamp,toFixedFloat } from '../helpers/math'
import { getRect } from '../helpers/dom'



/*
 * Distance to a box
 *
*/
class ProximityBox{
    constructor(el,params){
        this.el = el
        this.rect = getRect(el)
        this.params = params
    }
    update(mousePos){
        let distance = distFunctions.BOX(this.rect,mousePos)
        let progress = toFixedFloat(clamp(map(distance,this.params.range[1],this.params.range[0],0,1),0,1),3);
        let isInRange = progress > 0
        this.params.onProgress({distance,progress,isInRange,mousePos})
    }
}
/*

this.params.onProgress({

    
    getDistance : () => {distFunctions.BOX(this.rect,mousePos)},
    getProgress : () => {toFixedFloat(clamp(map(distance,this.params.range[1],this.params.range[0],0,1),0,1),3)},
    getInRange : () => {progress > 0}
   
})


*/

/*
 * Distance to a circle
 *
*/
class ProximityRadius{
    constructor(el,params){
        this.el = el
        this.rect = getRect(el)
        this.params = params
    }
    update(mousePos){
        let distance = distFunctions.RADIUS(this.rect,mousePos)
        let progress = toFixedFloat(clamp(map(distance,this.params.range[1],this.params.range[0],0,1),0,1),3);
        let isInRange = progress > 0
        this.params.onProgress({distance,progress,isInRange,mousePos})
    }
}

/*
 * Distance to a point
 *
*/
class ProximityPoint{
    constructor(coords,params){
        this.coords = coords
        this.params = params
    }
    update(mousePos){
        let distance = distFunctions.POINT(this.coords,mousePos)
        let progress = toFixedFloat(clamp(map(distance,this.params.range[1],this.params.range[0],0,1),0,1),3);
        let isInRange = progress > 0
        this.params.onProgress({distance,progress,isInRange,mousePos})
    }
}

/*
 * distance to Y axis
 *
*/
class ProximityY{
    constructor(coords,params){
        this.coords = coords
        this.params = params
    }
    update(mousePos){
        let distance = distFunctions.Y(this.coords,mousePos)
        let progress = toFixedFloat(clamp(map(distance,this.params.range[1],this.params.range[0],0,1),0,1),3);
        let isInRange = progress > 0
        this.params.onProgress({distance,progress,isInRange,mousePos})
    }
}

/*
 * distance to X axis
 *
*/
class ProximityX{
    constructor(coords,params){
        this.coords = coords
        this.params = params
    }
    update(mousePos){
        let distance = distFunctions.X(this.coords,mousePos)
        let progress = toFixedFloat(clamp(map(distance,this.params.range[1],this.params.range[0],0,1),0,1),3);
        let isInRange = progress > 0
        this.params.onProgress({distance,progress,isInRange,mousePos})
    }
}





const Scroll = {

}

export {
    ProximityBox,
    ProximityRadius,
    ProximityPoint,
    ProximityY,
    ProximityX,
    Scroll
}