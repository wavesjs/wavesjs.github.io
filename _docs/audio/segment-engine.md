---
---

# Segment Engine

Used with a buffer to serve audio files via granular synthesis.
The engine implements the "scheduled" and "transported" interfaces.
When "scheduled", the engine generates segments more or less periodically
(controlled by the periodAbs, periodRel, and perioVar attributes).
When "transported", the engine generates segments at the position of their onset time.  

~~~
# to use as a standalone module
$ npm install ircam-rnd/player-engine
~~~

## Attributes

{% assign attribute = 'buffer' %}
{% assign type = 'AudioBuffer' %}
{% assign default = 'buffer' %}
{% include includes/attribute.md %}

The audio buffer. Default as the object passed in the constructor.

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

Array of random sgment period variation relative to segment period.

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

Segment duration relative given segment duration or inter-segment distance.

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

{% assign attribute = 'segmentIndex' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Index of.

{% assign attribute = 'cyclic' %}
{% assign type = 'Boolean' %}
{% assign default = 'false' %}
{% include includes/attribute.md %}

Wheter the audio buffer and segment indices are considered as cyclic.

{% assign attribute = 'outputNode' %}
{% assign type = 'Object' %}
{% assign default = 'gainNode' %}
{% include includes/attribute.md %}

On instanciation an output gain node is created. Every tick should pass through this node.

## Methods

{% assign method = 'constuctor' %}
{% assign argument = 'buffer' %}
{% assign default = 'null' %}  
{% assign type = 'Object' %}
{% include includes/method.md %}

An audio buffer instance should be passed to the constructor in order to serve audio content.

{% assign method = 'bufferDuration' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Returns buffer's audio file duration.

{% assign method = 'advanceTime' %}
{% assign argument = 'time,position,speed' %}
{% assign type = 'Number,Number,Number' %}
{% include includes/method.md %}

Implementation of the transported time engine interface.

{% assign method = 'syncPosition' %}
{% assign argument = 'time,position,speed' %}
{% assign type = 'Number,Number,Number' %}
{% include includes/method.md %}

Implementation of the transported time engine interface.

{% assign method = 'advancePosition' %}
{% assign argument = 'time,position,speed' %}
{% assign type = 'Number,Number,Number' %}
{% include includes/method.md %}

Implementation of the transported time engine interface.

{% assign method = 'gain' %}
{% assign argument = 'value' %}
{% assign type = 'Number' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

If value is provided, sets audio node gain value. Otherwise, returns the gain value.

{% assign method = 'trigger' %}
{% assign argument = 'time' %}
{% assign type = 'Number' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Trigger a segment where time is the segment synthesis audio time. Returns the period
time between each segment. 