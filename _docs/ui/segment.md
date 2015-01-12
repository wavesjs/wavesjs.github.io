---
hash: segment
category: ui
api:
  - data
---

# Segment {#segment}

Use this module to visualise or edit data segments over a shared timeline.  
_The module relies on a [timeline](#timeline) instance._

~~~
# to use as a standalone module
$ npm install ircam-rnd/segment
~~~

## Example usage {#segment-example-usage}

~~~javascript
var {segment, timeline} = require('waves');
var d3 = timeline.d3 // or require('d3');

// create the graph
var graph = timeline()
//  .xDomain([0, buffer.duration])
  .width(1000)
  .height(150);
  
// create the segment layer
var segmentLayer = segment();

// add the segment layer to the timeline
graph.add(segmentLayer);
// draw the timeline
d3.select('#timeline').call(graph.draw);
~~~


## Public API {#segment-public-api}


### #params {#segment-params}

`.params([object])`

If `object` is present sets the layer's parameters via the passed in `object`, otherwise returns the layer's internal parameters.  

Available parameters :

* `yDomain` {Array} _Defaults to `[-1, 1]`_  
  Sets the layer's scale's domain to the specified array of numbers.  
  The array must contain two or more numbers.  

~~~javascript
var layer = segment()
  .params({
    yDomain: [0, 100],
    renderingStrategy: 'svg',
    // ...
  });
~~~ 


### #data {#segment-data}

`.data([array{Buffer}])`

If `array` is present sets the data to be rendered via the passed in `array`, otherwise returns the internal data `array`.
