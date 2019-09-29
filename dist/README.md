# Proximity.js

[![GitHub issues](https://img.shields.io/github/issues/Simon-Renault/Proximity)](https://github.com/Simon-Renault/Proximity/issues)

![License MIT](https://img.shields.io/badge/License-MIT-green)


Proximity.js is a small libraryn meant to help when dealing with actions involving the distance or proximity feedback between the pointer and other elements.


## Usage
This is how to use the library.

First start by creating a proximity instance, this is for performance issue. Everything lives inside a requestAnimationFrame callback.

```js

import Proximity from "@srenault404/Proximity"

const proximity = new Proximity({
    mediaQuery : "(max-width : 700px)" // can be any mediaQuery
})

```

Then you can create handlers to the mouseMove event using Proximity primitives. Note there are different type of subscription with different performance costs and different output. The most standard one wich is also the most resource expansive one ( although very lightweight ) is box

```js
let el = document.querySelector(".el")

let b = proximity.box(el,{
        easing : proximity.easings.linear, 
        range : [0,700],  
        onProgress : (val)=>{
            let { distance,progress,isInRange,mousePos } = val
            console.log(val)
        }
})

```

For performance issue an unique listner is added per instance and you need to subscibe your handlers.

```js

//subscribe the listener
proximity.subscribe(b)


//unsubscribe the listener
proximity.unSubscribe(b)

```



## Develop 

First init yarn or npm and then all the dependencies of the package
```bash
yarn install
```


```bash

// clear the dist directory
yarn run clean


// build the bundle using microbundle
yarn run bundle

// publish the bundle
yarn run publish


```


## History
For a long time I have been building components involving listening to mouse pointer movements to trigger some animations. While the mousemove event is somewhat useful it have it's limits.


[Codedrops](https://tympanus.net/codrops/2018/05/02/ideas-for-proximity-feedback-with-progressive-hover-effects/)



## Roadmap

- [ ] Adding distance to a radius
- [ ] Adding distance to a point
- [ ] Adding distance to axes (X,Y)

- [X] Basic optimisations
- [X] Switch to passive listeners
- [ ] Optimize getters

- [ ] Building another library to handle scroll

- [ ] Add helpers for tweenMax
