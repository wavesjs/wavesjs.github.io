---
---

# Breakpoint

Use this module to visualise or edit data breakpoints over a shared timeline.  
_The module relies on a [timeline](#timeline) instance._

~~~
# to use as a standalone module
$ npm install ircam-rnd/breakpoint
~~~

## Example usage

{% highlight js %}
var {breakpoint, timeline} = require('waves');
var d3 = timeline.d3 // or require('d3');

var breakpointData = [{
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
  
// create the breakpoint layer
var breakpointLayer = breakpoint()
  .data(breakpointData);

// add the breakpoint layer to the timeline
graph.add(breakpointLayer);
// draw the timeline
d3.select('#timeline').call(graph.draw);
{% endhighlight %}

## Inherited Methods

The following attributes are inherited from [Layer](#ui-layer).

### .params `([params:Object])`

If `object` is present sets the layer's parameters via the passed in `object`, otherwise returns the layer's internal parameters.  

Available parameters :

* `edits:Array = ['x', 'y', 'width']`  
Each element of the `array` determines which characteristics of the `breakpoint` can be modified when the `breakpoint` is editable. 

* `handlerOpacity:Number = 0`  
Sets the breakpoint handler's opacity.  

* `handlerWidth:Number = 2`  
Sets the breakpoint handler's width in pixels.

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

### .cx `([value:Number])`

If `value` is present sets the `cx` attribute of the breakpoint via the passed in `value`, otherwise returns the `value`.  


### .move `(element:DOMNode, deltaX:Number, deltaY:Number)`

Moves a given `element` by the number of pixels specified by the `deltaX` and `deltaY` numbers.
_Note that the registry point for the `move` position is relative to the center of the breakpoint_.


### .color `([value:String])`

If `string` is present sets the color to be use for the rendering via the passed in `string`, otherwise returns the `string`.



### .cy `([value:Number])`

If `value` is present sets the `cy` attribute of the breakpoint via the passed in `value`, otherwise returns the `value`.  


### .r `([value:Number])`

If `value` is present sets the `r` attribute of the breakpoint via the passed in `value`, otherwise returns the `value`.  
