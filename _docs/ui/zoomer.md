---
---

# Zoomer

This component handles user interactions on a the selected `DOMNode` and triggers the necessary events to manipulate `timeline`'s `xZoom` method.

The **zoom** factor is increased or decreased when the mouse is clicked and moved across it's **y axis**, and the **position** offset by moving it across the **x axis**.

~~~
# to use as a standalone module
$ npm install ircam-rnd/zoomer
~~~

## Example usage

{% highlight js %}
var {zoomer, timeline} = require('waves');
var d3 = timeline.d3 // or require('d3');

// instanciate the zoomer layer
var zoom = zoomer()
  .select('#zoomer')
  .on('mousemove', function(e) {
    // update graph xZoom
    graph.xZoom(e);
  })
  .on('mouseup', function(e) {
    // set the final xZoom value of the graph
    graph.xZoomSet();
  });
{% endhighlight %}


## Methods

{% assign method = 'select' %}
{% assign argument = 'selector' %}
{% assign type = 'String' %}
{% include includes/method.md %}

Selects the `DOM` element specified by `selector` to instantiate and attach all the logic to it.


## Events

{% assign method = 'on' %}
{% assign arguments = 'evNane,cb' %}
{% assign types = 'String,Function' %}
{% include includes/method.md %}

This is the usual `event` handling function. The name of the event we want to subscribe to is set via a `String` as first agrument, and the second argument `cb` is the function that will be called when the desired event is triggered. 

Available events :


* `mousedown`  
  Triggered when the selected `DOMNode` is clicked, will call the provided callback and pass it an `Object` containing `anchor`: the x position where the event happened, and `originalEvent`: the default browser's `Event` object.



* `mousemove`  
  Triggered when the selected `DOMNode` is clicked and the mouse is moving, will call the provided callback and pass it an `Object` containing `anchor`: the x position where the event happened, `factor`: the computed zoom factor, `delta`: an object containing both `x` and `y` deltas relative to the `anchor`, and `originalEvent`: the default browser's `Event` object.


* `mouseup`  
  Triggered when the selected `DOMNode` is clicked, will call the provided callback and pass it `originalEvent` with the default browser's `Event` object.