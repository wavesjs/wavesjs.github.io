---
hash: timeline
category: ui
api:
  - constructor
  - xDomain
  - yDomain
  - width
  - height
  - margin
  - add
  - remove
---

# Timeline {#timeline}

Use this module to create time based visualisations. The module is essentially a component manager written on top of [d3.js](http://d3js.org/), it doesn't accomplish much by itself as long as you don't pass it in some component to display.

~~~
# to use as a standalone module
$ npm install ircam-rnd/timeline
~~~

## Example usage {#timeline-example-usage}

This illustrates how to use the `timeline` with a [segment](#segment) component.

~~~javascript
var {segment, timeline} = require('waves');
var d3 = timeline.d3 // or require('d3');

// some data to display
var data = [
  { start: 200, duration: 200 }, 
  { start: 500, duration: 300 },
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

// add the segment layer to the timeline
graph.add(segmentLayer);
// draw the timeline
d3.select('#timeline').call(graph.draw);

// ...later you may want to remove the layer
graph.remove(segmentLayer);
~~~


## Public API {#timeline-public-api}


### #constructor {#timeline-constructor}

`.timeline([object])`

If `object` is present sets the timeline's parameters via the passed in `object`.  

Available parameters :

* `name` {String} _Defaults to generated unique id_  
  Sets the timeline's svg name. Can be recovered though the `timeline.name()` getter

* `fps` {Number} _Defaults to 60_  
  Sets the refresh rate of the internal `requestAnimationFrame`. In most case the default value should be fine, but can be used to force a slower drawing rate in case of heavy DOM applications

~~~javascript
var graph = timeline({
  yDomain: 'my-timeline',
  fps: 60,
});
~~~ 

### #xDomain {#timeline-xDomain}

`.xDomain(array)` _mandatory_

Sets the domain of the timeline in the x axis, the given `array` represents the time domain if the visualised data. To keep time consistency, this value is shared with the installed components.  


### #yDomain([array]) {#timeline-yDomain} 

`yDomain([array])` _defaults to `[0, 1]`_

Sets the domain of the timeline in the y axis, this value can be overriden from each installed components. If setted, the value basically acts as a default domain for the y axis in all components.


### #width {#timeline-width} 

`.width(number)` _mandatory_

Sets the width of the `svg` tag. Is also used to create the internal scale in the x axis, basically  a `d3.scale.linear()` with domain setted to the timeline's `xDomain` and a range setted to `[0, width]`


### #height {#timeline-height}

`.height(number)` _mandatory_

Sets the height of the `svg` tag. Is also used to create the internal scale in the y axis, basically  a `d3.scale.linear()` with domain setted to the timeline's `yDomain` and a range setted to `[height, 0]`


### #margin {#timeline-margin} 

`.margin({object})` _Defaults to `{ top: 0, right: 0, bottom: 0, left: 0 }`_

Sets the margin of of the layout inside the create `svg` element. [insert Bostock link here]


### #add {#timeline-add}

`.add(layer)`

Register a new component to the timeline. The added component is then configured and initialized by the timeline.


### #remove {#timeline-remove}

`.remove(layer)`

Remove a previously registered component from the timeline. The component's group is also removed from the DOM

