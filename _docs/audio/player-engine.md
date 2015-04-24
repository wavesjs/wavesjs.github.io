---
---

# Player Engine

Used with a buffer to serve audio files.

~~~
var wavesAudio = require('waves-audio');
var playerEngine = wavesAudio.PlayerEngine();
var playControl = new wavesAudio.PlayControl(playerEngine);

playControl.start();
~~~

##Example

<div id='player-engine-container'></div>
<script src="https://rawgit.com/wavesjs/audio/master/examples/player-engine.js"></script>
<a href="https://rawgit.com/wavesjs/audio/master/examples/player-engine.js" target="_blank">[source code]</a>

## Attributes

{% assign attribute = 'transport' %}
{% assign type = 'Object' %}
{% assign default = 'null' %}
{% include includes/attribute.md %}

Refers to a transport object when added to one.

{% assign attribute = 'buffer' %}
{% assign type = 'AudioBuffer' %}
{% assign default = 'buffer' %}
{% include includes/attribute.md %}

The audio buffer. Default as the object passed in the constructor.

{% assign attribute = 'fadeTime' %}
{% assign type = 'Number' %}
{% assign default = '0.005' %}
{% include includes/attribute.md %}

Fade time for chaining segments (e.g. in start, stop, and seek).

{% assign attribute = 'wrapAroundExtension' %}
{% assign type = 'Number' %}
{% assign default = '0' %}
{% include includes/attribute.md %}

Portion at the end of the audio buffer that has been copied from the beginning to assure cyclic behavior.
This attribute corresponds to the `wrapAroundExtension` option of the `load` method of the [`AudioBufferLoader`](http://wavesjs.github.io/loaders/#loaders-loaders-audiobufferloader) and [`SuperLoader`](http://wavesjs.github.io/loaders/#loaders-loaders-superloader)).

{% assign attribute = 'outputNode' %}
{% assign type = 'Number' %}
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

{% assign method = 'syncSpeed' %}
{% assign argument = 'time,position,speed,seek' %}
{% assign type = 'Number,Number,Number,Boolean' %}
{% assign default = ',,,false' %}
{% include includes/method.md %}

Implementation of the speed-controlled interface.

{% assign method = 'cyclic' %}
{% assign argument = 'cyclic' %}
{% assign type = 'Boolean' %}
{% assign return = 'Boolean' %}
{% include includes/method.md %}

If cyclic is provided sets whether the audio buffer is considered as cyclic.
Otherwise, returns whether the audio buffer is considered as cyclic.

{% assign method = 'gain' %}
{% assign argument = 'value' %}
{% assign type = 'Number' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

If value is provided, sets audio node gain value. Otherwise, returns the gain value.