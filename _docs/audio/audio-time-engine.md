---
---

# Audio Time Engine

This is the base class for all audio related time engine components. It is used to handle
audio related events such as the playback of a media stream. It extends the TimeEngine class
by the standard web audio node methods `connect` and `disconnect`.

## Usage

~~~
// ES6 and CommonJS
var wavesAudio = require('waves-audio');

class MyEngine extends wavesAudio.AudioTimeEngine {
  constructor() {
    // call AudioTimeEngine super-class constructor
    super();

    // ...
  }
}
~~~

~~~
// ES5 and CommonJS
var wavesAudio = require('waves-audio');

function MyEngine() {
  // call AudioTimeEngine super-class constructor
  wavesAudio.AudioTimeEngine.call(this);

  // ...
}

// extend AudioTimeEngine prototype
MyEngine.prototype = Object.create(wavesAudio.AudioTimeEngine.prototype, {
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

This example shows an `AudioTimeEngine` running in a `Scheduler` that repeats the waveform of a given vowel – cut outof a voice recording – at a given frequency.

<div id='audio-time-engine-container'></div>
<script src="https://rawgit.com/wavesjs/audio/master/examples/audio-time-engine.js"></script>

## Attributes

{% assign attribute = 'outputNode' %}
{% assign type = 'Object' %}
{% assign default = 'null' %}
{% include includes/attribute.md %}

Output audio node. By default the `connect` method connects a given node to this output node.

## Methods

{% assign method = 'connect' %}
{% assign argument = 'target' %}
{% assign type = 'Object' %}
{% assign return = 'this' %}
{% include includes/method.md %}

Connect to an audio node (e.g. audioContext.destination).

{% assign method = 'disconnect' %}
{% assign argument = 'connection' %}
{% assign type = 'Object' %}
{% assign return = 'this' %}   
{% include includes/method.md %}

Disconnect from the conection passed as a parameter.
