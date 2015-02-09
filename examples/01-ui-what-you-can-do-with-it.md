---
layout: examples
---

# UI - What you can with it

The aim of this tutorial is to create a more complex visualization, combining several components of the `waves.js` library, as well as how they can be integrated with d3.  
At the end of the tutorial, you should be able to build the following example:

<div id="zoomer"></div>
<div id="timeline"></div>
<script src="{{ "/js/examples/01-ui-what-you-can-do-with-it.js" | prepend: site.baseurl }}"></script>

let dig into the code step-by-step :

## 1. Html setup

first, define some html tag to host the visualization, and load the library

{% highlight html %}
<div id="zoomer"></div>
<div id="timeline"></div>
{% endhighlight %}

- the `#zoomer` tag will host the d3.scale which will be used to interact with the `zoom` helper
- the `#timeline` tag will host the waves.js visualization
- finally, load the libray at the end the body tag

{% highlight html %}
<script src="/path/to/waves.js"></script>
{% endhighlight %}


## 2. Javascript setup

In order to visualize something, we will need some data to visualize:

{% highlight js %}
// define a path to sound file
// @NOTE: for performance consideration, you should consider to serve some
// mp3 or ogg file according to the client browser
var filePath = '/assets/sound.wav';

// define some labels/segments to draw above the waveform
var metadata = [
  {
    start: 0.3,
    duration: 0.4,
    text: 'label 1'
  }, {
    start: 2,
    duration: 0.5,
    text: 'label 2'
  }
];
{% endhighlight %}

The time unit used inside a timeline, especially if visualizing audio data through a waveform should be the second. The `start` and `duration` properties inside the data are therefore expressed in seconds.


## 3. Load the audio file

The waves library provide an `AudioBufferLoader` to load some audio file and converting it to a audioBuffer with a promise API, so let's use it:

{% highlight js %}
// create an instance of the buffer
var bufferLoader = new waves.loaders.AudioBufferLoader();

// load an audio file
bufferLoader.load(filePath).then(
  function(buffer) {
    // add a try/catch to work around promises error throwing
    try {
      // main function - all subssquent code should be considered inside this function
      // this function receive the buffer as argument
      drawGraph(buffer);
    } catch (err) {
      console.error(err.stack);
    }
  },
  function(err) {
    console.error(err);
  }
);
{% endhighlight %}


## 4. Create the graph and its layers

The following code show you how to create a graph containing several components. It will use the `waveform` component to display the audio buffer, a `segment` and a `label` component binded to the same data (see `metadata` in 2. javascript setup), and `marker` layer to create an anchor that will be used to visualize the center of the zoom.

{% highlight js %}
// the following code should be considered inside the `drawGraph` function, 
// therefore the variable `buffer` is an `audioBuffer` instance

// 1. create the graph / timeline
// ----------------------------------------
var graph = waves.ui.timeline()
  .xDomain([0, buffer.duration]) // set the time domain of the graph
  .width(800) // sets the graph width in pixels
  .height(200); // sets the graph height in pixels

// 2. create the waveform visualizer
// ----------------------------------------
var waveformLayer = waves.ui.waveform()
  // the waveform use raw data internally, so pass it the raw `arrayBuffer`
  .data(buffer.getChannelData(0).buffer) 
  .sampleRate(buffer.sampleRate)
  .color('#586e75');

// 3. create some segments / labels to display metadata
// ----------------------------------------
var segmentLayer = waves.ui.segment()
  .params({
    interactions: { editable: true },
    opacity: 0.3,
    handlerOpacity: 0.5 // handlers opacity are higher to see them with ease
  })
  .data(metadata)
  .color('#cb4b16');

var labelLayer = waves.ui.label()
  .data(segmentData)
  .x(function(d, v) { return d.start; })
  .y(0)
  .width(function(d, v) { return d.duration; })
  .height(1)
  .margin({ top: 2, right: 0, bottom: 0, left: 4 })
  .bgColor('none')
  .color('#686868');

// in order to keep the illusion of synchronism between segments and labels,
// the labels needs to be updated when segments are modified by the user
segmentLayer.on('drag', function(item, e) {
  graph.update(labelLayer);
});

// 4. create an anchor to visualize zooming center
// ----------------------------------------
var anchor = waves.ui.marker()
  // set `displayHandle` to false to remove the handle of markers
  .params({ displayHandle: false })
  .color(anchorColor)
  .opacity(0.9);

// 5. add all the components to the graph
// ----------------------------------------
graph.add(waveformLayer);
graph.add(segmentLayer);
graph.add(labelLayer);
graph.add(anchor);

// 6. draw the graph and all its components through a `d3.call` inside the `#timeline` tag
// ----------------------------------------
d3.select('#timeline').call(graph.draw);
{% endhighlight %}


## 5. Add the zooming ability to the whole timeline

first, let's create a d3 axis inside the `#zoomer` tag (the following code is pure d3):

{% highlight js %}
// create a svg element for the zoomer
var zoomerSvg = d3.select('#zoomer').append('svg')
  .attr('width', graphWidth)
  .attr('height', 30);

// create the time axis - here a common d3 axis
// graph must be drawn in order to have `graph.xScale` up to date
var xAxis = d3.svg.axis()
  .scale(graph.xScale)
  .tickSize(1)
  .tickFormat(function(d) {
    var form = d % 1 === 0 ? '%S' : '%S:%L';
    var date = new Date(d * 1000);
    var format = d3.time.format(form);
    return format(date);
  });

// add the axis to the newly created svg element
var axis = zoomerSvg.append('g')
  .attr('class', 'x-axis')
  .attr('transform', 'translate(0, 0)')
  .attr('fill', '#555')
  .call(xAxis);
{% endhighlight %}

then, bind the `waves.ui.zoomer` helper to this newly created axis, and configure it to interact with the graph we created earlier:

{% highlight js %}
var zoom = zoomer()
  .select('#zoomer') // bind the zoomer helper to the `#zoomer` tag
  .on('mousedown', function(e) {
    // get the current time from the mouse coordinate
    var xDomainPos = graph.xScale.invert(e.anchor);
    // update the anchor position
    anchor.setCurrentTime(xDomainPos);
    graph.update(anchor);
  })
  .on('mousemove', function(e) {
    e.originalEvent.preventDefault();
    // update anchor position
    var xDomainPos = graph.originalXscale.invert(e.anchor);
    anchor.setCurrentTime(xDomainPos).draw();
    // update graph xZoom
    graph.xZoom(e);
    // redraw the axis to keep it up to date with the graph
    axis.call(xAxis);
  })
  .on('mouseup', function(e) {
    // set the final xZoom value of the graph
    graph.xZoomSet();
    // update axis with the new graph xScale
    xAxis.scale(graph.xScale);
    // update axis
    axis.call(xAxis);
  });
{% endhighlight %}

## Et voilà !


