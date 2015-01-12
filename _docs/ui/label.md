---
hash: label
category: ui
api:
  - x
  - y
  - text
  - bgColor
  - width
  - height
  - color
  - align
  - valign
  - update
  - draw
---

# Label {#label}

Use this module to visualise labels data over a shared timeline.  
The module relies on the [timeline](https://github.com/Ircam-RnD/timeLine) object.

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

var data = [{
  text: 'text 1',
  width: 200,
  height: 30,
  x: 0,
  y: 0,
  align: 'left'
}, {
  text: 'text 2',
  width: 200,
  height: 30,
  x: 200,
  y: 0,
  align: 'center'
}];

// create the graph
var graph = timeline()
  .xDomain([0, 400])
  .width(400)
  .height(30)
  
// create the label layer
var labelLayer = label()
  .data(data)

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


### #x {#label-x} 

`.x([func|number])`

If a function is passed in, the function will be used to access the corresponding property in the `data`. Acts as a mapper between the application data and the internal representation needed by the component. The given function receive the corresponding datum as first arguments, if the key maps to an attribute that is editable, 

~~~
this.y(function(d, v = null) {
  if (v === null) { return +d.y || 0 }
  d.y = (+v);
});
~~~

### #y {#label-y} 
### #text {#label-text} 
### #bgColor {#label-bgColor} 
### #width {#label-width} 
### #height {#label-height} 
### #color {#label-color} 
### #align {#label-align} 
### #valign {#label-valign} 
### #update {#label-update} 
### #draw {#label-draw} 
