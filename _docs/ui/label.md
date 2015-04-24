---
---

# Label

Use this module to visualise labels data over a shared timeline.  
_The module relies on a [timeline](#timeline) instance._

## Example usage

{% comment %}
<iframe width="100%" height="300" src="http://jsfiddle.net/dv1xf2az/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
{% endcomment %}
<style>
#label-layer-timeline {
    outline: 1px solid #ababab;
    width: 400px;
    margin: 50px auto;
}

#label-layer-timeline text {
    font-family: arial;
    font-size: 10px;
}
</style>
<div id="label-layer-timeline"></div>
<script>
  var timeline = wavesUI.timeline;
  var label = wavesUI.label;
  var d3 = timeline.d3;

  var data = [{
    text: 'text 1',
    width: 200,
    height: 30,
    x: 0,
    y: 0,
    align: 'left',
    bgColor: 'steelblue'
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
    .yDomain([0, 30])
    .width(400)
    .height(30)
    
  // create the label layer
  var labelLayer = label()
    .data(data)
    .color(function(d) { return d.bgColor ? 'white' : 'black'; })
    .bgColor(function(d) { return d.bgColor || 'transparent'; })
    .valign('middle')
    .margin({ left: 4, top: 4, bottom: 4, right: 4 });

  // add the label layer to the timeline
  graph.add(labelLayer);
  // draw the timeline
  d3.select('#label-layer-timeline').call(graph.draw);
</script>

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


{% assign method = 'margin' %}
{% assign argument = 'obj' %}
{% assign type = 'Object' %}
{% assign default = '{ top: 0, right: 0, bottom: 0, left: 0 }' %}
{% include includes/method.md %}

Define the margin betweeen the text and the bounding box
_this method is an accessor, for more information refer to the [accessors](#accessors) section_