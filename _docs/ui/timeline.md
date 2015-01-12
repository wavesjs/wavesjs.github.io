---
hash: timeline
category: ui
api:
  - data
---

# timeline {#timeline}

Introtext.

~~~
# to use as a standalone module
$ npm install ircam-rnd/timeline
~~~

## Example usage {#timeline-example-usage}

~~~javascript
// consume from the "waves" namespace or as a standalone module
var timeline = (waves.timeline || require('timeline'));

var d3 = require('d3');
var timeline = require('timeline');

// create the graph
var graph = timeline()
//  .xDomain([0, buffer.duration])
  .width(1000)
  .height(150)
  
// create the timeline layer
var timelineLayer = timeline()

// add the timeline layer to the timeline
graph.add(timelineLayer);
// draw the timeline
d3.select('#timeline').call(graph.draw);
~~~


## Public API {#timeline-public-api}


### #params {#timeline-params}

`.params([object])`

If `object` is present sets the layer's parameters via the passed in `object`, otherwise returns the layer's internal parameters.  

Available parameters :

* `yDomain` {Array} _Defaults to `[-1, 1]`_  
  Sets the layer's scale's domain to the specified array of numbers.  
  The array must contain two or more numbers.  

~~~javascript
var layer = timeline()
  .params({
    yDomain: [0, 100],
    renderingStrategy: 'svg',
    // ...
  });
~~~ 


### #data {#timeline-data}

`.data([array{Buffer}])`

If `array` is present sets the data to be rendered via the passed in `array`, otherwise returns the internal data `array`.
