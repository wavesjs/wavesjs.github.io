---
---

# Granular Engine

Granular synthesis `TimeEngine` implementing the *scheduled* interface.

## Usage

~~~
var wavesAudio = require('waves-audio');
var scheduler = wavesAudio.getScheduler();
var granularEngine = new wavesAudio.GranularEngine();

scheduler.add(granularEngine);
~~~

## Example

This example shows a `GranularEngine` (with a few parameter controls) driven by a `Scheduler` and a `PlayControl`.

<div id='granular-engine-container'></div>
<script src="https://rawgit.com/wavesjs/audio/master/examples/granular-engine.js"></script>
<a href="https://rawgit.com/wavesjs/audio/master/examples/granular-engine.js" target="_blank">[source code]</a>

## Attributes

{% assign attribute = 'buffer' %}
{% assign type = 'AudioBuffer' %}
{% assign default = 'null' %}
{% include includes/attribute.md %}

Audio buffer.

{% assign attribute = 'periodAbs' %}
{% assign type = 'Number' %}
{% assign default = '0.01' %}
{% include includes/attribute.md %}

Absolute grain period in seconds.

{% assign attribute = 'periodRel' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Grain period relative to absolute duration.

{% assign attribute = 'periodVar' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Amout of random grain period variation relative to grain period.

{% assign attribute = 'position' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Grain position (onset time in audio buffer) in seconds.

{% assign attribute = 'positionVar' %}
{% assign type = 'Number' %}
{% assign default = '0.003' %}
{% include includes/attribute.md %}

Amount of random grain position variation in seconds.

{% assign attribute = 'durationAbs' %}
{% assign type = 'Number' %}
{% assign default = '0.1' %}
{% include includes/attribute.md %}

Absolute grain duration in seconds.

{% assign attribute = 'durationRel' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Grain duration relative to grain period (*i.e* grain *overlap*).

{% assign attribute = 'attackAbs' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Absolute attack time in seconds.

{% assign attribute = 'attackRel' %}
{% assign type = 'Number' %}
{% assign default = '0.5' %}
{% include includes/attribute.md %}

Attack time relative to grain duration.

{% assign attribute = 'releaseAbs' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Absolute release time in seconds.

{% assign attribute = 'releaseRel' %}
{% assign type = 'Number' %}
{% assign default = '0.5' %}
{% include includes/attribute.md %}

Release time relative to grain duration.

{% assign attribute = 'resampling' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Grain resampling in cent.

{% assign attribute = 'resamplingVar' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Amount of random resampling variation in cent.

{% assign method = 'gain' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Linear grain gain factor.

{% assign attribute = 'centered' %}
{% assign type = 'Boolean' %}
{% assign default = 'true' %}
{% include includes/attribute.md %}

Whether the grain position refers to the center of the grain (or to the beginning).

{% assign attribute = 'cyclic' %}
{% assign type = 'Boolean' %}
{% assign default = 'false' %}
{% include includes/attribute.md %}

Whether the audio buffer and grain position are considered as cyclic.

{% assign attribute = 'currentPosition' %}
{% assign type = 'Number' %}
{% assign default = 'this.position' %}
{% include includes/attribute.md %}

Current position.

{% assign attribute = 'wrapAroundExtension' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Portion at the end of the audio buffer that has been copied from the beginning to assure cyclic behavior.
This attribute corresponds to the `wrapAroundExtension` option of the `load` method of the [`AudioBufferLoader`](http://wavesjs.github.io/loaders/#loaders-loaders-audiobufferloader) and [`SuperLoader`](http://wavesjs.github.io/loaders/#loaders-loaders-superloader)).

{% assign attribute = 'bufferDuration' %}
{% assign type = 'Number' %}
{% assign default = 'this.buffer.duration' %}
{% include includes/attribute.md %}

Duration of the current audio buffer (*i.e.* `buffer` attribute) excluding the `wrapAroundExtension`.

## Methods

{% assign method = 'constuctor' %}
{% assign argument = 'options' %}
{% assign default = '{}' %}  
{% assign type = 'Object' %}
{% include includes/method.md %}

The constructor accepts a set of options:
<ul>
  <li>audioContext, the audio context used</li>
  <li>all parameter attributes, to initialize the parameter values</li>
</ul>

{% assign method = 'advanceTime' %}
{% assign argument = 'time' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

Implementation of the *scheduled* `TimeEngine` interface.

{% assign method = 'trigger' %}
{% assign argument = 'time' %}
{% assign default = 'this.audioContext.currentTime' %}  
{% assign type = 'Number' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Trigger a single grain with the current parameters at the given audio time.
Returns the current grain period (*i.e.* time until next grain).
