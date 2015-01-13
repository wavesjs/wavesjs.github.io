---
hash: zoomer
category: helpers
api:
  - data
---

# zoomer {#zoomer}

Introtext.

~~~
# to use as a standalone module
$ npm install ircam-rnd/zoomer
~~~

## Example usage {#zoomer-example-usage}

~~~javascript
var {zoomer, timeline} = require('waves');
var d3 = timeline.d3 // or require('d3');

// create the graph
var graph = timeline()
//  .xDomain([0, buffer.duration])
  .width(1000)
  .height(150);
  
// create the zoomer layer
var zoomerLayer = zoomer();

// add the zoomer layer to the timeline
graph.add(zoomerLayer);
// draw the timeline
d3.select('#timeline').call(graph.draw);
~~~


## Public API {#zoomer-public-api}


### #params {#zoomer-params}

`.params([object])`

If `object` is present sets the layer's parameters via the passed in `object`, otherwise returns the layer's internal parameters.  

Available parameters :

* `yDomain` {Array} _Defaults to `[-1, 1]`_  
  Sets the layer's scale's domain to the specified array of numbers.  
  The array must contain two or more numbers.  

~~~javascript
var layer = zoomer()
  .params({
    yDomain: [0, 100],
    renderingStrategy: 'svg',
    // ...
  });
~~~ 


### #data {#zoomer-data}

`.data([array{Buffer}])`

If `array` is present sets the data to be rendered via the passed in `array`, otherwise returns the internal data `array`.
