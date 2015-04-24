---
---

# Marker

Use this module to visualise or edit markers or cursor over a shared timeline.  
_The module relies on a [timeline](#timeline) instance._

## Example usage

{% comment %}
<iframe width="100%" height="300" src="http://jsfiddle.net/b5cu2xtL/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
{% endcomment %}
<style>
#marker-layer-timeline {
    outline: 1px solid #ababab;
    width: 400px;
    margin: 50px auto;
}
</style>
<div id="marker-layer-timeline"></div>
<script>
var timeline = wavesUI.timeline;
var marker = wavesUI.marker;
var d3 = timeline.d3;

var duration = 10;
var data = [{ x: 2.3 }, { x: 4.2 }, { x: 8.6 }];

// 1. create the timeline
var graph = timeline()
  .width(400)
  .height(120)
  .xDomain([0, duration]);

// 2. create some traditionnal markers
var markerLayer = marker()
  .params({
    interactions: { editable: true },
  })
  .data(data)
  .color('steelblue');

// 3. create a cursor
var cursor = marker()
  .params({ displayHandle: false })
  .color('red');

// 4. add layers to the graph
graph.add(markerLayer);
graph.add(cursor);
// 5. draw the graph
d3.select('#marker-layer-timeline').call(graph.draw);

(function loop() {
  // mimic a dummy audio current position
  var now = new Date().getTime();
  now = (now / 1000) % duration;
  // update the graph
  cursor.setCurrentTime(now);
  graph.update(cursor);

  requestAnimationFrame(loop);
}());
</script>

## Inherited Methods

{% include includes/ui/inherits-layer.md %}

## Methods

{% assign method = 'setCurrentTime' %}
{% assign argument = 'value' %}
{% assign type = 'Number' %}
{% include includes/method.md %}
If used as a cursor, sets the current time of the cursor

<!--
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
-->
