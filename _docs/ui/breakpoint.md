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

<iframe width="100%" height="300" src="http://jsfiddle.net/oa75a4s0/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

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
