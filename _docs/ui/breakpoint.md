---
---

# Breakpoint

Use this module to visualise or edit data breakpoints over a shared timeline.  
_The module relies on a [timeline](#timeline) instance._

## Example usage

{% comment %}
<iframe width="100%" height="300" src="http://jsfiddle.net/oa75a4s0/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
{% endcomment %}
<div id="breakpoint-layer-timeline" style="outline: 1px solid #ababab; width: 400px; margin: 50px auto;"></div>
<script>
  var timeline = wavesUI.timeline;
  var breakpoint = wavesUI.breakpoint;
  var d3 = timeline.d3;

  var data = [
    { cx: 10, cy: 20 },
    { cx: 60, cy: 90 },
    { cx: 110, cy: 30 }, 
    { cx: 170, cy: 4 }
  ];

  // create the graph
  var graph = timeline()
    .width(400)
    .height(120)
    .xDomain([0, 200]);
    
  // create the breakpoint layer
  var breakpointLayer = breakpoint()
    .params({ 
      yDomain: [0, 100], 
      interactions: { editable: true } 
    })
    .data(data);

  // add the breakpoint layer to the timeline
  graph.add(breakpointLayer);
  // draw the timeline
  d3.select('#breakpoint-layer-timeline').call(graph.draw);
</script>

## Inherited Methods

{% include includes/ui/inherits-layer.md %}

## Methods

{% assign method = 'cx' %}
{% assign argument = 'value' %}
{% assign type = 'Number' %}
{% include includes/method.md %}
If `value` is present sets the `cx` attribute of the breakpoint via the passed in `value`, otherwise returns the `value`.  



{% assign method = 'move' %}
{% assign arguments = 'element,deltaX,deltaY' %}
{% assign types = 'DOMNode,Number,Number' %}
{% include includes/method.md %}
Moves a given `element` by the number of pixels specified by the `deltaX` and `deltaY` numbers.
_Note that the registry point for the `move` position is relative to the center of the breakpoint_.


{% include includes/ui/color.md %}


{% assign method = 'cy' %}
{% assign argument = 'value' %}
{% assign type = 'Number' %}
{% include includes/method.md %}
If `value` is present sets the `cy` attribute of the breakpoint via the passed in `value`, otherwise returns the `value`.  


{% assign method = 'r' %}
{% assign argument = 'value' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

If `value` is present sets the `r` attribute of the breakpoint via the passed in `value`, otherwise returns the `value`.  
