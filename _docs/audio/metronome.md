---
---

# Metronome

Metronome audio engine. It extends Time Engine as a transported interface.

##Usage

~~~
var wavesAudio = require('waves-audio');
var scheduler = wavesAudio.getScheduler();
var metronome = new wavesAudio.Metronome({period: 0.333});

scheduler.add(metronome);
~~~

##Example

<div id='metronome-container'></div>
<script src="https://rawgit.com/wavesjs/audio/master/examples/metronome.js"></script>
<a href="https://rawgit.com/wavesjs/audio/master/examples/metronome.js" target="_blank">[source code]</a>

## Attributes

{% assign attribute = 'period' %}
{% assign type = 'Number' %}
{% assign default = '1' %}
{% include includes/attribute.md %}

Metronome period in seconds.

{% assign attribute = 'phase' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Metronome phase when driven through *transported* interface [0, 1[.

{% assign attribute = 'clickFreq' %}
{% assign type = 'Number' %}
{% assign default = '600' %}
{% include includes/attribute.md %}

Click sound frequency.

{% assign attribute = 'clickAttack' %}
{% assign type = 'Number' %}
{% assign default = '0.002' %}
{% include includes/attribute.md %}

Click sound attack time.

{% assign attribute = 'clickRelease' %}
{% assign type = 'Number' %}
{% assign default = '0.098' %}
{% include includes/attribute.md %}

Click sound release time.

{% assign method = 'gain' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Linear gain factor.

## Methods

{% assign method = 'constuctor' %}
{% assign argument = 'options' %}
{% assign default = '{}' %}  
{% assign type = 'Object' %}
{% include includes/method.md %}

The constructor accepts a set of options:

- audioContext, the audio context used

- all parameter attributes, to initialize the parameter values

{% assign method = 'advanceTime' %}
{% assign argument = 'time' %}
{% assign type = 'Number' %}
{% assign default = '' %}   
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
{% include includes/method.md %}

Trigger metronome click at a given time.
