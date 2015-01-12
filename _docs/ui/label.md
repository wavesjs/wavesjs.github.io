---
hash: label
category: ui
api:
  - data
---

# label {#label}

Introtext.

~~~
# to use as a standalone module
$ npm install ircam-rnd/label
~~~

## Example usage {#label-example-usage}

~~~javascript
// consume from the "waves" namespace or as a standalone module
var label = (waves.label || require('label'));

var d3 = require('d3');
var timeline = require('timeline');

// create the graph
var graph = timeline()
//  .xDomain([0, buffer.duration])
  .width(1000)
  .height(150)
  
// create the label layer
var labelLayer = label()

// add the label layer to the timeline
graph.add(labelLayer);
// draw the timeline
d3.select('#timeline').call(graph.draw);
~~~


## Public API {#label-public-api}


### #params {#label-params}

`.params([object])`

If `object` is present sets the layer's parameters via the passed in `object`, otherwise returns the layer's internal parameters.  

Available parameters :

* `yDomain` {Array} _Defaults to `[-1, 1]`_  
  Sets the layer's scale's domain to the specified array of numbers.  
  The array must contain two or more numbers.  

~~~javascript
var layer = label()
  .params({
    yDomain: [0, 100],
    renderingStrategy: 'svg',
    // ...
  });
~~~ 


### #data {#label-data}

`.data([array{Buffer}])`

If `array` is present sets the data to be rendered via the passed in `array`, otherwise returns the internal data `array`.
