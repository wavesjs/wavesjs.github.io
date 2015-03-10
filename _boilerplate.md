---
hash: ååå
category: "ui/audio/helpers"
api:
  - data
---

# ååå {#ååå}

Introtext.

~~~
# to use as a standalone module
$ npm install ircam-rnd/ååå
~~~

## Example usage {#ååå-example-usage}

~~~javascript
// consume from the "waves" namespace or as a standalone module
var ååå = (waves.ååå || require('ååå'));

var d3 = require('d3');
var timeline = require('timeline');

// create the graph
var graph = timeline()
//  .xDomain([0, buffer.duration])
  .width(1000)
  .height(150)
  
// create the ååå layer
var åååLayer = ååå()

// add the ååå layer to the timeline
graph.add(åååLayer);
// draw the timeline
d3.select('#timeline').call(graph.draw);
~~~


## Public API {#ååå-public-api}


### #params {#ååå-params}

`.params([object])`

If `object` is present sets the layer's parameters via the passed in `object`, otherwise returns the layer's internal parameters.  

Available parameters :

* `yDomain` {Array} _Defaults to `[-1, 1]`_  
  Sets the layer's scale's domain to the specified array of numbers.  
  The array must contain two or more numbers.  

~~~javascript
var layer = ååå()
  .params({
    yDomain: [0, 100],
    renderingStrategy: 'svg',
    // ...
  });
~~~ 


### #data {#ååå-data}

`.data([array{Buffer}])`

If `array` is present sets the data to be rendered via the passed in `array`, otherwise returns the internal data `array`.
