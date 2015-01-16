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

{% include _docs/ui/inherits-layer.md %}


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
