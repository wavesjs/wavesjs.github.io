---
category: ui  
---

# Segment

Use this module to visualise or edit data segments over a shared timeline.  
_The module relies on a [timeline](#timeline) instance._

~~~
# to use as a standalone module
$ npm install ircam-rnd/segment
~~~

## Example usage

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

## Inherited Attributes

The following attributes are inherited from [`Layer`](#ui-layer).

## Attributes

### .color

`:Array[r:Number, g:Number, b:Number]`

Moves a given `element` by the number of pixels specified by the `deltaX` and `deltaY` numbers.


## Inherited Methods

The following attributes are inherited from [`Layer`](#ui-layer).

### .params

`([object])`

If `object` is present sets the layer's parameters via the passed in `object`, otherwise returns the layer's internal parameters.  

Available parameters :

* `edits:Array(x, y, width) = [0, 20, 300]`  
Each element of the `array` determines which characteristics of the `segment` can be modified when the `segment` is editable. 

* `edits:Array(x, y, width)` _Defaults to `[0, 20, 300]`_    
Each element of the `array` determines which characteristics of the `segment` can be modified when the `segment` is editable.  

* `handlerOpacity:Number = 0`  
Sets the segment handler's opacity.  

* `handlerWidth:Number`  
Sets the segment handler's width (defaults to `2`).

* `height:Number`  
* `interactions` {Object}  
* `name` {String}  
* `nameAsIdAttribute` {String}  
* `opacity` {Number}  
* `selectedClass` {String}  
* `top` {Number}  
* `yDomain` {Array}  
_see [`layer.params`](#layer-params) for the full description._


### .param {#segment-param}

`(key [, value])`  

_see [`layer.param`](#layer-param) for the full description._


### .data

`([array{Buffer}])`

_see [`layer.data`](#layer-data) for the full description._ 


### .draw

`([el])`

_see [`layer.draw`](#layer-draw) for the full description._ 


### .update

`([array])`

_see [`layer.update`](#layer-update) for the full description._ 

### .handleSelection

`(el, e)`

_see [`layer.handleSelection`](#layer-handleSelection) for the full description._ 


### .handleDrag

`(el, e)`

_see [`layer.handleDrag`](#layer-handleDrag) for the full description._ 


### .select

`(...els)`

_see [`layer.select`](#layer-select) for the full description._ 

### .unselect

`(...els)`

_see [`layer.unselect`](#layer-unselect) for the full description._ 

### .opacity

`(...els)`

_see [`layer.opacity`](#layer-opacity) for the full description._ 


### .xZoom

`(...els)`

_see [`layer.xZoom`](#layer-xZoom) for the full description._ 



## Methods

### .color

`([string])`

If `string` is present sets the color to be use for the rendering via the passed in `string`, otherwise returns the `string`.


### .start 

`([func|number])`

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the horizontal position of the segment. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


### .duration 

`(:Function|Number = null, :Number|String|Array = 0)`

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the length of the segment. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


### .y

`([number])`

If `number` is present sets the `y` position of the segment via the passed in `number`, otherwise returns the `number`.  
_Note that the registry point for the `y` position is `bottom-left`_.


### .height

`([number])`

If `number` is present sets the height of the segment via the passed in `number`, otherwise returns the `number`.


### .move

`(element, deltaX, deltaY)`

Moves a given `element` by the number of pixels specified by the `deltaX` and `deltaY` numbers.


### .resizeLeft {#segment-resizeLeft}

`(element:DOMNode, deltaX:Number, deltaY:Number)`

Resizes a given `element` on his left side by a number of pixels specified by the `deltaX` and `deltaY` numbers.


### .resizeRight

`(element, deltaX, deltaY)`

Resizes a given `element on his righr side by a number of pixels specified by the `deltaX` and `deltaY` numbers.