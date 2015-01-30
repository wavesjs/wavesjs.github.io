---
---

# Timeline

Use this module to create time based visualisations. The module is essentially a component manager written on top of [d3.js](http://d3js.org/), it doesn't accomplish much by itself as long as you don't pass it in some component to display.

~~~
# to use as a standalone module
$ npm install ircam-rnd/timeline
~~~

## Example usage

This illustrates how to use the `timeline` with a [segment](#ui-segment) component.

{% highlight js %}
var {segment, timeline} = require('waves');
var d3 = timeline.d3 // or require('d3');

// some data to display
var segmentData = [
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
  .data(segmentData);

// add the segment layer to the timeline
graph.add(segmentLayer);
// draw the timeline
d3.select('#timeline').call(graph.draw);

// ...later you may want to remove the layer
graph.remove(segmentLayer);
{% endhighlight %}


## Methods


{% assign method = 'constructor' %}
{% assign argument = 'opts' %}
{% assign type = 'Object' %}
{% include includes/method.md %}

If `opts` is present sets the timeline's parameters via the passed in `Object`.  

Available parameters :

* `name:String = n:Number (generated unique id)`    
  Sets the timeline's svg name. Can be recovered though the `timeline.name()` getter

* `fps:Number = 60`  
  Sets the refresh rate of the internal `requestAnimationFrame`. In most case the default value should be fine, but can be used to force a slower drawing rate in case of heavy DOM applications

~~~javascript
var graph = timeline({
  name: 'my-timeline',
  fps: 60,
});
~~~ 


## Methods

{% assign method = 'xDomain' %}
{% assign argument = 'domain' %}
{% assign type = 'Array' %}
{% include includes/method.md %}

Sets the domain of the timeline in the x axis, the given `array` represents the time domain if the visualised data. To keep time consistency, this value is shared with the installed components.  


{% assign method = 'yDomain' %}
{% assign argument = 'domain' %}
{% assign type = 'Array' %}
{% assign default = '[0, 1]' %}
{% include includes/method.md %}

Sets the domain of the timeline in the y axis, this value can be overriden from each installed components. If setted, the value basically acts as a default domain for the y axis in all components.


{% assign method = 'width' %}
{% assign argument = 'w' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

Sets the width of the `svg` tag. Is also used to create the internal scale in the x axis, basically  a `d3.scale.linear()` with domain setted to the timeline's `xDomain` and a range setted to `[0, width]`


{% assign method = 'height' %}
{% assign argument = 'h' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

Sets the height of the `svg` tag. Is also used to create the internal scale in the y axis, basically  a `d3.scale.linear()` with domain setted to the timeline's `yDomain` and a range setted to `[height, 0]`


{% assign method = 'margin' %}
{% assign argument = 'm' %}
{% assign type = 'Object' %}
{% assign default = '{ top: 0, right: 0, bottom: 0, left: 0 }' %}
{% include includes/method.md %}

Sets the margin of of the layout inside the create `svg` element. [insert Bostock link here]


{% assign method = 'add' %}
{% assign type = 'Layer' %}
{% include includes/method.md %}

Register a new component to the timeline. The added component is then configured and initialized by the timeline.


{% assign method = 'remove' %}
{% assign type = 'Layer' %}
{% include includes/method.md %}

Remove a previously registered component from the timeline. The component's group is also removed from the DOM

{% include includes/ui/color.md %}