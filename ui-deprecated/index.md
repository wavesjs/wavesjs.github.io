---
layout: default
---

# UI

**Warning**: this version will soon be deprecated

The UI part of the `waves.js` librayr is build on top of [d3.js](http://d3js.org/), it provides a set of low level abstractions to visualize audio content using a data-driven approach.

## List of components

The libray is composed of the following parts:

- #### [timeline](#timeline)
This component is the main entry point for a visualisation. It is responsible for time axis consistency, but also formalize the means by which every layer layer is edited, positionned and zoomed.

- #### [layer](#layer)
Base class for every visualization components, this class abstract common methods (`params`, `data`, etc.) as well as life-cycle-hooks (`load`, `setScales`, `delegateEvents`)

- #### [segment](#segment)
The Segment component provide a low-level building block to create many kind of visuallisation, from mouse selection on a timeline to piano-roll like visaulizations

- #### [waveform](#waveform)
The Waveform component allow to visualize the content of an `audioBuffer` in the timeline, howerever it accepts raw array and should be therefore able to render any kind of signal data.

- #### [marker](#marker)
The Marker component allow to visualize markers on a timeline, it can also be used to create a cursor in a timeline.

- #### [breakpoint](#breakpoint)
The Breakpoint component allow to draw and edit breakpoint function, usefull to visualize automations.

- #### [label](#label)
The Label component allow to visualize text data on your waveform, if no particular edition behavior is needed, it can be a good replacement for the [`segment`](#segment) component

- #### [zoomer](#zoomer)
The zoomer is an helper tool which interact with the [`waveform`](#waveform) to give it zooming ability


## Architecture - Conventions

All visualizations relies on the [`timeline`](#timeline) object. This object mainly keep track of the time consistency for the x axis and acts as a layer manager with a plugin like API to allow the user to add and remove components extending the [`layer`](#layer) class.
The components / layers installed on a [`timeline`](#timeline), are in charge of their own rendering and editing capabilities. Each of these layers can be configured by it's `params` method.

## Accessors

The library tends to be agnostic concerning the data structure of your application. For this matter, we provide a general way to specify how the component interacts with your data. A set of methods is therefore available on each components, they allow you to customize the way the component use your data for getting as for setting purposes.

For example the [`segment`](#segment), works "natively" with data following this structure :

{% highlight js %}
var data = [
  {
    start: 10,
    duration: 400,
    color: '#ef45d3'
  }, {
    // ...
  }
];
{% endhighlight %}

If your data doesn't match this structure, you can provide a function to the accessor method for each required key, in order to configure the interaction between the layer and your data.

{% highlight js %}
var data = [
  {
    start: 10,
    width: 400 // here, the data has `width` instead of `duration`
  },
  // ...
];

var segmentLayer = segment()
  .params( /* ... */ )
  .data(data)
  .duration(function(d, v) {
    if (v === undefined) { return d.x; }
    d.x = v;
  })
  // accessors can also accepts values which are used as constants for all items
  .color('#ed34d2');
{% endhighlight %}

If used as a `getter`, the provided function is called with only one argument: the current datum.
If used as a `setter`, a second argument is provided: the new value of the entry _(this behavior is needed when the layer is configured as `editable`)_

## Events

The following events are triggered by the timeline:

- #### mousedown
- #### mouseup
- #### mousemove
- #### mouseleave
- #### drag

The library implements an event delegation system. All events are captured by the [`timeline`](#timeline) and forwarded to the registered layers. The forwarded events are `d3.events` (except for the `drag` event where the d3 event is available in the `originalEvent` property).
The user can access these events by registering a callback on the `on` method of the timeline

{% highlight js %}
timeline.on('mousedown', function(e) {
  // do something
});
{% endhighlight %}

The following events are triggered by the layers:

- #### mousedown
- #### drag

These events are forwarded by layers when an interaction occurs, a callback can be registered the following way:

{% highlight js %}
someLayer.on('mousedown', function(item, e) {
  // do something
});
{% endhighlight %}

The callback function receive two arguments, `item` is set to the item DOM Element if the clicked item belongs to the layer or `null` otherwise. The second parameter is set to the event sended by the timeline.


## DOM

The DOM is created by the timeline and the layers according to the following conventions.

The timeline creates the following DOM tree inside the given d3 selection:

{% highlight html %}
<svg>
  <g class="bounding-box"></g>
</svg>
{% endhighlight %}

Each layer added to the timeline use the `.bounding-box` group as a container for their own layer group. A rendered layer creates a DOM structure of this type (a [`segment`](#segment) with to segments for example):

{% highlight html %}
<g class="segment layer">
  <g class="segment-item item"></g>
  <g class="segment-item item"></g>
</g>
{% endhighlight %}

If you need to match specifically a layer for css purpose or something, you can set an `id` to the layer  and set the `nameAsIdAttribute` to true using the `params` method:
For example, the following code:

{% highlight js %}
var layer = segment()
  .param({
    name: 'my-segment',
    nameAsIdAttribute: true
  });
{% endhighlight %}

leads to the following html group:

{% highlight html %}
<g class="segment layer" id="my-segment"></g>
{% endhighlight %}

If the `name` attribute is not manually set, a unique name `cname` is generated by the layer for internal use.

