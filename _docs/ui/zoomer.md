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


### .select `(selector:String)`

Selects the `DOM` element specified by `selector` to instantiate and attach all the logic to it.


## Events

### .on `.on(evNane:String, cb:Function)`

This is the usual `event` handling function. The name of the event we want to subscribe to is set via a `String` as first agrument, and the second argument `cb` is the function that will be called when the desired event is triggered. 

Available events :


* `mousedown:String, cb:Function, cb(e:Object)`  
{% highlight js %}
e:Object = { anchor: x, originalEvent: e }
{% endhighlight %}   
Triggered when the selected `DOMNode` is clicked, will call the provided callback and pass it an `Object` containing the x position where the event hapened, and the default browser's `Event` object.



* `mousemove:String, cb:Function, cb(e:Object)`  
{% highlight js %}
e:Object = {
  anchor: x,
  factor: zoomFactor,
  delta: { x: deltaX, y: deltaY },
  originalEvent: evt
}
{% endhighlight %}  
Triggered when the selected `DOMNode` is clicked and the mouse is moving, will call the provided callback and pass it an `Object` containing the `anchor` where the click event started, the cmputed zoom factor, a `delta` object containing both x and y deltas relative to the `anchor`, and the default browser's `Event` object.


* `mouseup:String, cb:Function, cb(e:Event)`  
Triggered when the selected `DOMNode` is clicked, will call the provided callback and pass it the default browser's `Event` object.