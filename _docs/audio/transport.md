---

---

# Transport

Provides synchronized scheduling of Time Engine instances.

##Usage

~~~
var wavesAudio = require('waves-audio');
var transport = wavesAudio.Transport();
var playControl = new wavesAudio.PlayControl(transport);
var myEngine = new MyEngine();
var yourEngine = new yourEngine();

transport.add(myEngine);
transport.add(yourEngine);

playControl.start();
~~~

##Example

<div id='transport-container'></div>
<script src="https://rawgit.com/wavesjs/audio/master/examples/transport.js"></script>
<a href="https://rawgit.com/wavesjs/audio/master/examples/transport.js" target="_blank">[source code]</a>

## Methods

{% assign method = 'currentTime' %}
{% assign argument = '' %}
{% assign type = '' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Returns current master time.

{% assign method = 'currentPosition' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Returns current master position.

{% assign method = 'resetNextPosition' %}
{% assign argument = 'nextPosition' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

Reset next tranport position.

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

{% assign method = 'syncSpeed' %}
{% assign argument = 'time,position,speed,seek' %}
{% assign type = 'Number,Number,Number,Boolean' %}
{% assign default = ',,,false' %} 
{% include includes/method.md %}

Implementation of the speed-controlled time engine interface.

{% assign method = 'add' %}
{% assign argument = 'engine,startPosition,endPosition,offsetPosition' %}
{% assign type = 'Object,Number,Number,Number' %}
{% assign default = ',-Infinity,Infinity,startPosition' %}   
{% assign return = 'Object' %}
{% include includes/method.md %}

Adds a time engine to a specific position and returns the transported object.

_Make sure the engine hasn't already been added to the transport_.

{% assign method = 'remove' %}
{% assign argument = 'engineOrTransported' %}
{% assign type = 'Object' %}
{% include includes/method.md %}

Remove a time engine from the transport.

_Make sure the enging has already been added to the transport_.

{% assign method = 'clear' %}
{% include includes/method.md %}

Remove all time engines from the transport.