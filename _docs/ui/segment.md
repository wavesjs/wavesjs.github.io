---
---

# Segment

Use this module to visualise or edit data segments over a shared timeline.  
_The module relies on a [timeline](#timeline) instance._

## Example usage

{% comment %}
<iframe width="100%" height="300" src="http://jsfiddle.net/gd6ywt7e/3/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
{% endcomment %}
<style>
#segment-layer-timeline {
    outline: 1px solid #ababab;
    width: 400px;
    margin: 50px auto;
}

#segment-layer-timeline .segment-item line {
    cursor: ew-resize;
}
</style>
<div id="segment-layer-timeline"></div>
<script>
var timeline = wavesUI.timeline;
var segment = wavesUI.segment;
var d3 = timeline.d3;

var data = [
    {
        start: 100,
        duration: 200
    }, {
        start: 650,
        duration: 300
    }
];

var graph = timeline()
    .width(400)
    .height(120)
    .xDomain([0, 1000]);

var segmentLayer = segment()
    .params({
        interactions: { editable: true },
        opacity: 0.4,
        handlerOpacity: 0.6
    })
    .data(data)
    .color('steelblue');

graph.add(segmentLayer);

d3.select('#segment-layer-timeline').call(graph.draw);
</script>

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

{% assign method = 'resizeRight' %}
{% assign arguments = 'element,deltaX,deltaY' %}
{% assign types = 'DOMNode,Number,Number' %}
{% include includes/method.md %}

Resizes a given `element` on his right side by a number of pixels specified by the `deltaX` and `deltaY` numbers.
