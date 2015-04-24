---
---

# Segment Engine

Used with a buffer to serve audio files via granular synthesis.
The engine implements the "scheduled" and "transported" interfaces.
When "scheduled", the engine generates segments more or less periodically
(controlled by the periodAbs, periodRel, and perioVar attributes).
When "transported", the engine generates segments at the position of their onset time.  

## Usage

~~~
var wavesAudio = require('waves-audio');
var scheduler = wavesAudio.getScheduler();
var segmentEngine = new wavesAudio.SegmentEngine();

scheduler.add(segmentEngine);
~~~

## Example

This example shows a `SegmentEngine` with a few parameter controls running in a [`Scheduler`](#audio-scheduler).

## Attributes

{% assign attribute = 'buffer' %}
{% assign type = 'AudioBuffer' %}
{% assign default = 'buffer' %}
{% include includes/attribute.md %}

Audio buffer.

% assign attribute = 'periodAbs' %}
{% assign type = 'Number' %}
{% assign default = '0.1' %}
{% include includes/attribute.md %}

Absolute segment period in sec.

{% assign attribute = 'periodRel' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Segment period relative to inter-segment distance.

{% assign attribute = 'periodVar' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Amout of random segment period variation relative to segment period.

{% assign attribute = 'positionArray' %}
{% assign type = 'Array' %}
{% assign default = '[0.0]' %}
{% include includes/attribute.md %}

Array of random segment segment positions in seconds.

{% assign attribute = 'positionVar' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Amount of random segment position variation in seconds.

{% assign attribute = 'durationArray' %}
{% assign type = 'Array' %}
{% assign default = '[0.0]' %}
{% include includes/attribute.md %}

Array of segment durations in seconds.

{% assign attribute = 'durationAbs' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Absolute segment duration in seconds.

{% assign attribute = 'durationRel' %}
{% assign type = 'Number' %}
{% assign default = '1' %}
{% include includes/attribute.md %}

Segment duration relative to the duration determined by the `durationArray` or inter-segment distance.

{% assign attribute = 'offsetArray' %}
{% assign type = 'Array' %}
{% assign default = '[0.0]' %}
{% include includes/attribute.md %}

Array of segment offsets in seconds. If greate than 0, the segment's reference position is after the given segment position. Otherwise, the given segment position is the segment's reference position and the duration has to be corrected by the offset.

{% assign attribute = 'offsetAbs' %}
{% assign type = 'Number' %}
{% assign default = '-0.005' %}
{% include includes/attribute.md %}

Absolute segment offset in seconds. 
The offset determines the actual reference position of the segment. 
More precisely, it corresponds to the offset of the segment's reference position in respect to the given segment position.
A positive offset indicates the segment's reference position after the segment position (*i.e.* at `position + offset`).
If the offset is negative, the segment position refers to the segment's reference position, but the segment actually starts by the given offset earlier (*i.e.* at `position + offset`). Consequently, also the segment's actual duration is by the given offset longer (*i.e.* position - offset).

{% assign attribute = 'offsetRel' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Segment offset relative to segment duration.

{% assign attribute = 'delay' %}
{% assign type = 'Number' %}
{% assign default = '0.005' %}
{% include includes/attribute.md %}

Time by which all segments are delayed (especially to realize segments offsets).

{% assign attribute = 'attackAbs' %}
{% assign type = 'Number' %}
{% assign default = '0.005' %}
{% include includes/attribute.md %}

Absolute attack time in seconds.

{% assign attribute = 'attackRel' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Attack time relative to segment duration.

{% assign attribute = 'releaseAbs' %}
{% assign type = 'Number' %}
{% assign default = '0.005' %}
{% include includes/attribute.md %}

Absolute release time in seconds.

{% assign attribute = 'releaseRel' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Release time relative to segment duration.

{% assign attribute = 'resampling' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Segment resampling in cent.

{% assign attribute = 'resamplingVar' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Amount of random resampling variation in cent.

{% assign method = 'gain' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Linear segment gain factor.

{% assign attribute = 'segmentIndex' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Segment index.

{% assign attribute = 'cyclic' %}
{% assign type = 'Boolean' %}
{% assign default = 'false' %}
{% include includes/attribute.md %}

Wheter the audio buffer and segment indices are considered as cyclic.

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

{% assign method = 'syncPosition' %}
{% assign argument = 'time,position,speed' %}
{% assign type = 'Number,Number,Number' %}
{% include includes/method.md %}

Implementation of the *transported* `TimeEngine` interface.

{% assign method = 'advancePosition' %}
{% assign argument = 'time,position,speed' %}
{% assign type = 'Number,Number,Number' %}
{% include includes/method.md %}

Implementation of the *transported* `TimeEngine` interface.

{% assign method = 'trigger' %}
{% assign argument = 'time' %}
{% assign type = 'Number' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Trigger a single segment with the current parameters at the given audio time.
Returns the current segment period (*i.e.* time until next segment).
