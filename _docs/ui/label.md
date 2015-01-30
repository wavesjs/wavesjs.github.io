---
---

# Label

Use this module to visualise labels data over a shared timeline.  
The module relies on the [timeline](https://github.com/Ircam-RnD/timeLine) object.

~~~
# to use as a standalone module
$ npm install ircam-rnd/label
~~~

## Example usage

{% highlight js %}
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
{% endhighlight %}

## Inherited Methods

{% include includes/ui/inherits-layer.md %}

## Methods


{% assign method = 'x' %}
{% assign argument = 'value' %}
{% assign type = 'Function|Number' %}
{% include includes/method.md %}

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the `x` position of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


{% assign method = 'y' %}
{% assign argument = 'value' %}
{% assign type = 'Function|Number' %}
{% include includes/method.md %}

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the `y` position of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


{% assign method = 'text' %}
{% assign argument = 'value' %}
{% assign type = 'Function|String' %}
{% include includes/method.md %}

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the text of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


{% assign method = 'bgColor' %}
{% assign argument = 'value' %}
{% assign type = 'Function|String' %}
{% include includes/method.md %}

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the background color of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


{% assign method = 'width' %}
{% assign argument = 'value' %}
{% assign type = 'Function|Number' %}
{% include includes/method.md %}

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the width of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


{% assign method = 'height' %}
{% assign argument = 'value' %}
{% assign type = 'Function|Number' %}
{% include includes/method.md %}

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the height of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_

{% include includes/ui/color.md %}
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


{% assign method = 'align' %}
{% assign argument = 'value' %}
{% assign type = 'Function|String' %}
{% assign default = 'left|center|right'%}
{% include includes/method.md %}

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the horizontal alignment of the text of the label. If a value is provided, it will be used as a constant for all data items instead.  
_for more information about this type of accessors, refer to the [accessors](#accessors) section_


{% assign method = 'valign' %}
{% assign argument = 'value' %}
{% assign type = 'Function|String' %}
{% assign default = 'top|middle|bottom' %}
{% include includes/method.md %}

If a function is provided, the function will be used to access the corresponding property in the `data` in order to define the vertical alignment of the text of the label. If a value is provided, it will be used as a constant for all data items instead.
_for more information about this type of accessors, refer to the [accessors](#accessors) section_