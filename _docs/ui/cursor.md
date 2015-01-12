---
hash: cursor
category: ui
api:
  - data
---

# cursor {#cursor}

Introtext.

~~~
# to use as a standalone module
$ npm install ircam-rnd/cursor
~~~

## Example usage {#cursor-example-usage}

~~~javascript
var {cursor, timeline} = require('waves');
var d3 = timeline.d3 // or require('d3');

// create the graph
var graph = timeline()
//  .xDomain([0, buffer.duration])
  .width(1000)
  .height(150);
  
// create the cursor layer
var cursorLayer = cursor();

// add the cursor layer to the timeline
graph.add(cursorLayer);
// draw the timeline
d3.select('#timeline').call(graph.draw);
~~~


## Public API {#cursor-public-api}


### #params {#cursor-params}

`.params([object])`

If `object` is present sets the layer's parameters via the passed in `object`, otherwise returns the layer's internal parameters.  

Available parameters :

* `yDomain` {Array} _Defaults to `[-1, 1]`_  
  Sets the layer's scale's domain to the specified array of numbers.  
  The array must contain two or more numbers.  

~~~javascript
var layer = cursor()
  .params({
    yDomain: [0, 100],
    renderingStrategy: 'svg',
    // ...
  });
~~~ 


### #data {#cursor-data}

`.data([array{Buffer}])`

If `array` is present sets the data to be rendered via the passed in `array`, otherwise returns the internal data `array`.
