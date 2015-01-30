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

<!--
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
-->
<iframe width="100%" height="300" src="http://jsfiddle.net/gd6ywt7e/2/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


## Inherited Methods

{% include includes/ui/inherits-layer.md %}



## Methods

{% include includes/ui/color.md %}


{% assign method = 'start' %}
{% assign argument = 'value' %}
{% assign type = 'Function|Number' %}
{% include includes/method.md %}

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the horizontal position of the segment. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


{% assign method = 'duration' %}
{% assign argument = 'value' %}
{% assign type = 'Function|Number' %}
{% include includes/method.md %}

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the length of the segment. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


{% assign method = 'y' %}
{% assign argument = 'value' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

If `number` is present sets the `y` position of the segment via the passed in `number`, otherwise returns the `number`.  
_Note that the registry point for the `y` position is `bottom-left`_.


{% assign method = 'height' %}
{% assign argument = '' %}
{% assign type = 'Number' %}
{% include includes/method.md %}


If `number` is present sets the height of the segment via the passed in `number`, otherwise returns the `number`.


{% assign method = 'move' %}
{% assign arguments = 'element,deltaX,deltaY' %}
{% assign types = 'DOMNode,Number,Number' %}
{% include includes/method.md %}

Moves a given `element` by the number of pixels specified by the `deltaX` and `deltaY` numbers.

{% assign method = 'resizeLeft' %}
{% assign arguments = 'element,deltaX,deltaY' %}
{% assign types = 'DOMNode,Number,Number' %}
{% include includes/method.md %}

Resizes a given `element` on his left side by a number of pixels specified by the `deltaX` and `deltaY` numbers.

{% assign method = 'resizeLeft' %}
{% assign arguments = 'element,deltaX,deltaY' %}
{% assign types = 'DOMNode,Number,Number' %}
{% include includes/method.md %}

Resizes a given `element on his righr side by a number of pixels specified by the `deltaX` and `deltaY` numbers.