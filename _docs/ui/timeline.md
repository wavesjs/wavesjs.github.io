---
hash: timeline
category: ui
api:
  - data
---

# Timeline {#timeline}

Use this module to create time based visualisations. The module is essentially a component manager written on top of [d3.js](http://d3js.org/), it doesn't accomplish much by itself as long as you don't pass it in some component to display.

~~~
# to use as a standalone module
$ npm install ircam-rnd/timeline
~~~

## Example usage {#timeline-example-usage}

This illustrates how to use the `timeline` with a [`segment` component](#segment).

~~~javascript
// consume from the "waves" namespace or as a standalone module
var timeline = (waves.timeline || require('timeline'));

var d3 = require('d3');
var segment = require('segment');

var data = [
  [
    start: 200,
    duration: 200
  ], [
    start: 500,
    duration: 300
  ],
  // ...
];

// create the graph
var graph = timeline()
  .xDomain([0, 1000])
  .width(1000)
  .height(150);
  
// create the segment layer
var segmentLayer = segment()
  .data(data);

<<<<<<< HEAD
// add the segment layer to the timeline
graph.add(segmentLayer);
=======
// add the timeline layer to the timeline
graph.add(timelineLayer);
>>>>>>> 679f130bbe14c6ded0af2bf4d8e1ff827d201f81
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
