---
---

# Granular Engine

Used with a buffer to serve audio files via granular synthesis.

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

{% assign method = 'currentPosition' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Returns current time engine position.

{% assign method = 'advanceTime' %}
{% assign argument = 'time' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

Implementation of the transported time engine interface.

{% assign method = 'playbackLength' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Returns buffer's audio file duration.

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

Trigger a grain where time is the grain synthesis audio time. Returns the period
time between each grain. 