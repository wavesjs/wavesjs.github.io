---
---

# Waveform

Use this module to visualise waveform data over a shared timeline.  
The module relies on the [timeline](https://github.com/Ircam-RnD/timeLine) object.

## Example usage

{% highlight js %}
var {waveform, timeline} = require('waves');
var d3 = timeline.d3 // or require('d3');

var buffer = someAudioBuffer;

// create the graph
var graph = timeline()
  .xDomain([0, buffer.duration])
  .width(1000)
  .height(150);
  
// create the waveform layer
var waveformLayer = waveform()
  .params({ name: 'my-waveform', renderingStrategy: 'svg' })
  // pass the raw ArrayBuffer from our audio buffer
  .data(buffer.getChannelData(0).buffer)
  .sampleRate(buffer.sampleRate)
  .color('steelblue');

// add the waveform layer to the timeline
graph.add(waveformLayer);
// draw the timeline
d3.select('#timeline').call(graph.draw);
{% endhighlight %}

## Inherited Methods

{% include includes/ui/inherits-layer.md %}

## Methods

{% assign method = 'params' %}
{% assign argument = 'config' %}
{% assign type = 'Object' %}
{% include includes/method.md %}

If `config` is present sets the layer's parameters via the passed in `config`, otherwise returns the layer's internal parameters.  

Other available parameters :

* `renderingStrategy:String = svg`  
  Sets the layer's rendering strategy. The two available modes are `svg` or `canvas`. 

* `triggerUpdateZoomDelta:Float = 0.02`  
  Sets the minimum zoom delta level that will trigger an update call.  

* `triggerUpdateDragDelta:Float = 1`  
  Sets the minimum dragged delta (in pixels) dragged that will trigger an update call.

{% highlight js %}
var layer = waveform()
  .params({
    yDomain: [0, 100],
    renderingStrategy: 'svg',
    // ...
  });
{% endhighlight %}


{% assign method = 'data' %}
{% assign argument = 'd' %}
{% assign type = 'Array|ArrayBuffer' %}
{% include includes/method.md %}

If `array` is present sets the data to be rendered via the passed in `array`, otherwise returns the internal data `array`.


{% assign method = 'sampleRate' %}
{% assign argument = 'rate' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

If `rate` is present sets the sampleRate of the _`data`_ array via the passed in `rate`, otherwise returns the `rate`.


{% include includes/ui/color.md %}
