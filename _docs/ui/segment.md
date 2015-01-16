---
---

# Segment

Use this module to visualise or edit data segments over a shared timeline.  
_The module relies on a [timeline](#timeline) instance._

~~~
# to use as a standalone module
$ npm install ircam-rnd/segment
~~~

## Example usage

{% highlight js %}
var {segment, timeline} = require('waves');
var d3 = timeline.d3 // or require('d3');

var data = [{
    start: 50,
    duration: 20
  }, {
    start: 120,
    duration: 50
}];

// create the graph
var graph = timeline()
  .xDomain([0, 200])
  .width(1000)
  .height(150);
  
// create the segment layer
var segmentLayer = segment()
  .data(data);

// add the segment layer to the timeline
graph.add(segmentLayer);
// draw the timeline
d3.select('#timeline').call(graph.draw);
{% endhighlight %}

## Inherited Methods

The following attributes are inherited from [Layer](#ui-layer).

### .params `([params:Object])`

If `object` is present sets the layer's parameters via the passed in `object`, otherwise returns the layer's internal parameters.  

Available parameters :

* `edits:Array = ['x', 'y', 'width']`  
Each element of the `array` determines which characteristics of the `segment` can be modified when the `segment` is editable. 

* `handlerOpacity:Number = 0`  
Sets the segment handler's opacity.  

* `handlerWidth:Number = 2`  
Sets the segment handler's width in pixels.

* `height:Number`  
* `interactions:Object`
* `name:String`  
* `nameAsIdAttribute:Boolean`
* `opacity:Number`
* `selectedClass:String`
* `top:Number`
* `yDomain:Array`

_see [layer.params](#ui-layer-params)_


### .param `(key [, value])` _see [layer.param](#ui-layer-param)_

### .data `([array{Buffer}])` _see [layer.data](#ui-layer-data)_

### .draw `([el])` _see [layer.draw](#ui-layer-draw)_

### .update `([array])` _see [layer.update](#ui-layer-update)_

### .handleSelection `(el, e)` _see [layer.handleSelection](#ui-layer-handleSelection)_

### .handleDrag `(el, e)` _see [layer.handleDrag](#ui-layer-handleDrag)_

### .select `(...els)` _see [layer.select](#ui-layer-select)_

### .unselect `(...els)` _see [layer.unselect](#ui-layer-unselect)_

### .opacity `(...els)` _see [layer.opacity](#ui-layer-opacity)_

### .xZoom `(...els)` _see [layer.xZoom](#ui-layer-xZoom)_

### .each `(func)` _see [layer.each](#ui-layer-each)_



## Methods

### .color `([value:String])`

If `string` is present sets the color to be use for the rendering via the passed in `string`, otherwise returns the `string`.


### .start `([value:Function|Number])`

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the horizontal position of the segment. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


### .duration `([value:Function|Number])`

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the length of the segment. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


### .y `([value:Number])`

If `number` is present sets the `y` position of the segment via the passed in `number`, otherwise returns the `number`.  
_Note that the registry point for the `y` position is `bottom-left`_.


### .height `([value:Number])`

If `number` is present sets the height of the segment via the passed in `number`, otherwise returns the `number`.


### .move `(element:DOMNode, deltaX:Number, deltaY:Number)`

Moves a given `element` by the number of pixels specified by the `deltaX` and `deltaY` numbers.


### .resizeLeft `(element:DOMNode, deltaX:Number, deltaY:Number)`

Resizes a given `element` on his left side by a number of pixels specified by the `deltaX` and `deltaY` numbers.


### .resizeRight `(element:DOMNode, deltaX:Number, deltaY:Number)`

Resizes a given `element on his righr side by a number of pixels specified by the `deltaX` and `deltaY` numbers.