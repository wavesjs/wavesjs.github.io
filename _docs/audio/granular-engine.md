---
---

# Granular Engine

Used with a buffer to serve audio files via granular synthesis.

~~~
# to use as a standalone module
$ npm install ircam-rnd/player-engine
~~~

## Example usage

<iframe width="100%" height="300" src="//jsfiddle.net/renaudfv/jcox95yv/28/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Attributes

{% assign attribute = 'buffer' %}
{% assign type = 'AudioBuffer' %}
{% assign default = 'buffer' %}
{% include includes/attribute.md %}

The audio buffer. Default as the object passed in the constructor.

{% assign attribute = 'periodAbs' %}
{% assign type = 'Number' %}
{% assign default = '0.01' %}
{% include includes/attribute.md %}

Absolute grain period in sec.

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

Grain duration relative to grain period (overlap).

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

{% assign attribute = 'centered' %}
{% assign type = 'Boolean' %}
{% assign default = 'true' %}
{% include includes/attribute.md %}

Wheter the grain position refers to the center of the grain (or the begenning).

{% assign attribute = 'cyclic' %}
{% assign type = 'Boolean' %}
{% assign default = 'false' %}
{% include includes/attribute.md %}

Wheter the audio buffer and grain position are considered as cyclic.

{% assign attribute = 'outputNode' %}
{% assign type = 'Object' %}
{% assign default = 'gainNode' %}
{% include includes/attribute.md %}

On instanciation an output gain node is created. Audio content should pass through that node.

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
