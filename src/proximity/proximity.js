import { getMousePos,getScrollPos } from './helpers/dom'
import * as easings from './helpers/easings'
import * as pModules from './modules/proximityPlugins'


class Proximity{
    constructor(params = {}){
        this.params = params
        this.isActive = this.params.mediaQuery ? false : true
        this.subs = []
        this.easings = easings
        this.init()
    }

    //subscription primitives
    box = (...args) => new pModules.ProximityBox(...args)
    radius = (...args) => new pModules.ProximityRadius(...args)
    point = (...args) => new pModules.ProximityPoint(...args)
    axisX = (...args) => new pModules.ProximityX(...args)
    axisY = (...args) => new pModules.ProximityY(...args)

    //subscription handler
    subscribe = (...sub) => this.subs.push(...sub)
    unsubscribe = (sub) => this.subs = this.subs.filter( (s) => {s === sub} )

    //event handlers
    mousemoveFn = (ev) => {
        if(this.isActive) return
        requestAnimationFrame(() => this.subs.map( (sub) => this.updateSub(ev,sub)))
    }
    updateSub = (ev,sub) => sub.update(getMousePos(ev))
    
    //lifecycles
    init = () => {
        window.addEventListener('mousemove',this.mousemoveFn,{capture: true,passive: true})
        if(this.params.mediaQuery){
            window.matchMedia(this.params.mediaQuery).matches 
                ? this.isActive = true 
                : this.isActive = false
            window.matchMedia(this.params.mediaQuery).addListener((ev)=>{
                ev.matches 
                    ? this.isActive = true 
                    : this.isActive = false
            })
        }
    }
}


class ProximityScroll{
    constructor(params = {}){
        this.params = params
        this.isActive = this.params.mediaQuery ? false : true
        this.subs = []
        this.easings = easings
        this.init()
    }

    //subscription primitives
    top = (...args) => new pModules.Scroll.Top(...args)
    bottom = (...args) => new pModules.Scroll.Bottom(...args)

    //subscription handler
    subscribe = (...sub) => this.subs.push(...sub)
    unsubscribe = (sub) => this.subs = this.subs.filter( (s) => {s === sub} )

    //event handlers
    scrollFn = (ev) => {
        if(this.isActive) return
        requestAnimationFrame(() => this.subs.map( (sub) => this.updateSub(ev,sub)))
    }
    updateSub = (ev,sub) => sub.update(getScrollPos(ev))
    
    //lifecycles
    init = () => {
        window.addEventListener('scroll',this.scrollFn,{capture: true,passive: true})
        if(this.params.mediaQuery){
            window.matchMedia(this.params.mediaQuery).matches 
                ? this.isActive = true 
                : this.isActive = false
            window.matchMedia(this.params.mediaQuery).addListener((ev)=>{
                ev.matches 
                    ? this.isActive = true 
                    : this.isActive = false
            })
        }
    }
}

export default Proximity