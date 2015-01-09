---
hash: timeline
api:
  - params
  - data
  - duration
  - sampleRate
  - color
---

# Timeline {#timeline}

Use this module to visualise waveform data over a shared timeline.  
The module relies on the [timeline](https://github.com/Ircam-RnD/timeLine) object.

~~~
# to use as a standalone module
$ npm install ircam-rnd/waveform
~~~

<!-- _A working demo for this module can be found [here](#)_ -->

## Example usage {#timeline-example-usage}

~~~javascript
// consumme from the "waves" namespace or as a standalone module
var waveform = (waves.waveform || require('waveform'));

var d3 = require('d3');
var timeline = require('timeline');
var buffer = someAudioBuffer;

// create the graph
var graph = timeline()
  .xDomain([0, buffer.duration])
  .width(1000)
  .height(150)
  
// create the waveform layer
var waveformLayer = waveform()
  .params({ name: 'my-waveform', renderingStrategy: 'svg' })
  // pass the raw ArrayBuffer from our audio buffer
  .data(buffer.getChannelData(0).buffer)
  .sampleRate(buffer.sampleRate)
  .duration(buffer.duration)
  .color('steelblue');

// add the waveform layer to the timeline
graph.layer(waveformLayer);
// draw the timeline
d3.select('#timeline').call(graph.draw);
~~~


## Public API {#timeline-public-api}


### #params {#timeline-params}

`.params([object])`

If `object` is present sets the layer's parameters via the passed in `object`, otherwise returns the layer's internal parameters.  

Available parameters :

* `yDomain` {Array} _Defaults to `[-1, 1]`_  
  Sets the layer's scale's domain to the specified array of numbers.  
  The array must contain two or more numbers.  

* `renderingStrategy` {'svg'|'canvas'} _Defaults to `'svg'`_  
  Sets the layer's rendering strategy.  

* `triggerUpdateZoomDelta` {Float} _Defaults to 0.02_  
  Sets the minimum zoom delta level that will trigger an update call.  

* `triggerUpdateDragDelta` {Float} _Defaults to 1_  
  Sets the minimum dragged delta (in pixels) dragged that will trigger an update call.

~~~javascript
var layer = waveform()
  .params({
    yDomain: [0, 100],
    renderingStrategy: 'svg',
    // ...
  });
~~~ 


### #data {#timeline-data}

`.data([array{Buffer}])`

If `array` is present sets the data to be rendered via the passed in `array`, otherwise returns the internal data `array`.


### #duration {#timeline-duration}

`.duration([number])`

If `number` is present sets the duration of the data to be rendered via the passed in `number`, otherwise returns the `number`.  
_Must be specified in the same unit as the `timeline`'s xDomain._


### #sampleRate {#timeline-sampleRate}

`.sampleRate([number])`   

If `number` is present sets the sampleRate of the _`data`_ array via the passed in `number`, otherwise returns the `number`.


### #color {#timeline-color}

`.color([string])`

If `string` is present sets the color to be use for the rendering via the passed in `string`, otherwise returns the `string`.



















