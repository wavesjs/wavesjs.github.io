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