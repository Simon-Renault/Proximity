# Proximity.js

[![GitHub issues](https://img.shields.io/github/issues/Simon-Renault/Proximity)](https://github.com/Simon-Renault/Proximity/issues)


Proximity.js is a small libraryn meant to help when dealing with actions involving the distance or proximity feedback between the pointer and other elements.


## Usage

First start by creating a proximity instance

```js

import Proximity from "@srenault404/Proximity"

const proximity = new Proximity({
    mediaQuery : "(max-width : 700px)" // prevent from running on mobile devices, can be any mediaQuery
})


```

Then you can create handlers to the mouseMove event using Proximity primitives. Note there are different type of subscription with different performance costs and different output. The most standard one wich is also the most resource expansive one ( although very lightweight ) is box

```js
let el = document.querySelector(".el")
let b = proximity.box(el,{
        easing : proximity.easings.linear, //easing function, default is linear
        range : [0,700],  // the range onProgress will be activated
        onProgress : (val)=>{
            let {distance,progress,isInRange,mousePos} = val
            console.log(val)
        }
})


//subscribe the listener
proximity.subscribe(b)


//unsubscribe the listener
proximity.unSubscribe(b)

```