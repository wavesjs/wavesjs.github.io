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
var {label, timeline} = require('waves');
var d3 = timeline.d3 // or require('d3');

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

* `verticalAlignment` {Array} _Defaults to `{ top: '1em', middle: '0.5em', bottom: '0' }`_  
  Sets values used for vertical alignement. Can be use to tweak vertical alignments for design adjustments


### #data {#label-data}

`.data([array{Buffer}])`

`.data(`

If `array` is present sets the data to be rendered via the passed in `array`, otherwise returns the internal data `array`.


### #x {#label-x} 

`.x([func|number])`

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the `x` position of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


### #y {#label-y} 

`.y([func|number])`

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the `y` position of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


### #text {#label-text} 

`.y([func|string])`

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the text of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


### #bgColor {#label-bgColor} 

`.y([func|string])`

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the background color of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


### #width {#label-width} 

`.y([func|number])`

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the width of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


### #height {#label-height} 

`.y([func|number])`

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the height of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


### #color {#label-color}

`.y([func|string])`

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the color of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


### #align {#label-align} 

`.y([func|'left'|'center'|'right'])`

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the horizontal alignment of the text of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


### #valign {#label-valign} 

`.y([func|'top'|'middle'|'bottom'])`

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the vertical alignment of the text of the label. If a value is provided, it will be used as a constant for all data items instead.
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


### #update {#label-update} 




### #draw {#label-draw} 
