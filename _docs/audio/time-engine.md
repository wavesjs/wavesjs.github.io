---
---

# Time Engine

Base class for time engines

A `time engine` generates more or less regular events and/or plays back a media stream.
It implements one or multiple interfaces to be driven by a `master` (*i.e.* a `Scheduler`, a `Transport` or a `PlayControl`) in synchronization with other engines.
The provided interfaces are *scheduled*, *transported*, and `play-controlled`.

## Usage

~~~
// ES6 and CommonJS
var wavesAudio = require("waves-audio");

class MyEngine extends wavesAudio.TimeEngine {
  constructor() {
    // call TimeEngine super-class constructor
    super();

    // ...
  }
}
~~~

~~~
// ES5 and CommonJS
var wavesAudio = require('waves-audio');

function MyEngine() {
  // call TimeEngine super-class constructor
  wavesAudio.TimeEngine.call(this);

  // ...
}

// extend TimeEngine prototype
MyEngine.prototype = Object.create(wavesAudio.TimeEngine.prototype, {
  constructor: {
    value: MyEngine,
  },
});

// engine methods
MyEngine.prototype.itsMethod = function() {
  // ...
};
~~~

## Example

This example shows a `TimeEngine` running in a `Scheduler` that counts up at a given frequency.

## Attributes

{% assign attribute = 'master' %}
{% assign type = 'Object' %}
{% assign default = 'null' %}
{% include includes/attribute.md %}

The engine's master.

{% assign attribute = 'currentTime' %}
{% assign type = 'Number' %}
{% include includes/attribute.md %}

The time engine's current (master) time

{% assign attribute = 'currentPosition' %}
{% assign type = 'Number' %}
{% include includes/attribute.md %}

The time engine's current (master) position

## The *scheduled* interface

The *scheduled* interface allows for synchronizing an engine to a monotonous time as it is provided by the [`Scheduler`](http://wavesjs.github.io/audio/#audio-transport) master.

{% assign method = 'advanceTime' %}
{% assign argument = 'time' %}
{% assign type = 'Number' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

The `advanceTime` method has to be implemented by an engine as part of the *scheduled* interface.
The method is called by the master (*e.g.* the scheduler).
It generates an event and to returns the time of the next event (*i.e.* the next call of `advanceTime`).
The returned time has to be greater than the time received as argument of the method.
In case that a `TimeEngine` has to generate multiple events at the same time, the engine has to implement its own loop `while(event.time <= time)` and return the time of the next event (if any).

{% assign method = 'resetTime' %}
{% assign argument = 'time' %}
{% assign type = 'Number' %}
{% assign default = 'undefined' %}
{% include includes/method.md %}

The `resetTime` method is provided by the `TimeEngine` base class.
An engine may call this method to reset its next event time (*e.g.* when a parameter is changed that influences the engine's temporal behavior).
When no argument is given, the time is reset to the current master time. 
When calling the method with `Infinity` the engine is suspended without being removed from the master.

## The *transported* interface

The *transported* interface allows for synchronizing an engine to a `position` (*i.e.* media playback time) that can run forward and backward and jump as it is provided by the [`Transport`](http://wavesjs.github.io/audio/#audio-transport) master.

{% assign method = 'syncPosition' %}
{% assign argument = 'time, position, speed' %} 
{% assign type = 'Number, Number, Number' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

The `syncPositon` method has to be implemented by a TimeEngine as part of the *transported* interface.
The method `syncPositon` is called whenever the master of a *transported* engine has to (re-)synchronize the engine's position.
This is for example required when the master (re-)starts playback, jumps to an arbitrary position, and when reversing playback direction.
The method returns the next position of the engine in the given playback direction (*i.e.* `speed < 0` or `speed > 0`).

{% assign method = 'advancePosition' %}
{% assign argument = 'time, position, speed' %} 
{% assign type = 'Number, Number, Number' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

The `advancePosition` method has to be implemented by a `TimeEngine` as part of the *transported* interface.
The master calls the `advancePositon` method when the engine's event position is reached.
The method generates an event and returns the next position in the given playback direction (*i.e.* `speed < 0` or `speed > 0`).
The returned position has to be greater (*i.e.* when speed > 0) or less (*i.e.* when speed < 0) than the position received as argument of the method.

{% assign method = 'resetPosition' %}
{% assign argument = 'position' %}
{% assign type = 'Number' %}
{% assign default = 'undefined' %}
{% include includes/method.md %}

The `resetPosition` method is provided by the `TimeEngine` base class.
An engine may call this method to reset its next event position.
When no argument is given, the time is reset to the current master time. 
When calling the method with `Infinity` the engine is suspended without being removed from the master.

## The *speed-controlled* interface

The "speed-controlled" interface allows for syncronizing an engine that is neither driven through the *scheduled* nor the *transported* interface.
The interface allows in particular to synchronize engines that assure their own scheduling (*i.e.* audio player or an oscillator) to the event-based *scheduled* and *transported* engines.

{% assign method = 'syncSpeed' %}
{% assign argument = 'time,position,speed,seek' %} 
{% assign type = 'Number,Number,Number,Boolean' %}
{% assign default = ',,,false' %}
{% include includes/method.md %}

The `syncSpeed` method has to be implemented by a `TimeEngine` as part of the *speed-controlled* interface.
The method is called by the master whenever the playback speed changes or the position jumps arbitarily (*i.e.* on a seek).

## Master methods

These methods are intended to be called by a `TimeEngine` master.

{% assign method = 'implementsScheduled' %}
{% assign return = 'Boolean' %}   
{% include includes/method.md %}

Checks whether the TimeEngine implements the scheduled interface.

{% assign method = 'implementsTransported' %}
{% assign return = 'Boolean' %}
{% include includes/method.md %}

Checks whether the time engine implements the transported interface.

{% assign method = 'implementsSpeedControlled' %}
{% assign return = 'Boolean' %}   
{% include includes/method.md %}

Checks whether the time engine implements the speed-controlled interface.
