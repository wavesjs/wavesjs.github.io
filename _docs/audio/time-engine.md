---
---

# Time Engine

This is the base class for all audio engine related components. It is used to handle
audio related events such as the playback of a media stream. It exposes interfaces
that enable synchronisation to a master and handle how absolute or relative time
*watched*.

~~~
# to use as a standalone module
$ npm install ircam-rnd/time-engine
~~~

## Example

<iframe width="100%" height="300" src="//jsfiddle.net/jcox95yv/37/embedded/result,js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Attributes

{% assign attribute = 'interface' %}
{% assign type = 'String' %}
{% assign default = 'null' %}
{% include includes/attribute.md %}

Interface currently used.

{% assign attribute = 'outputNode' %}
{% assign type = 'Object' %}
{% assign default = 'null' %}
{% include includes/attribute.md %}

Output audio node.

## Methods

{% assign method = 'currentTime' %}
{% assign argument = '' %}
{% assign type = '' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Get the time engine's current master time

{% assign method = 'currentPosition' %}
{% assign argument = '' %}
{% assign type = '' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Get the time engine's current master position

{% assign method = 'resetNextTime' %}
{% assign argument = 'time' %}
{% assign type = 'Number' %}
{% assign default = 'nul' %}   
{% include includes/method.md %}

Function provided by the scheduler to reset the engine's next time

{% assign method = 'resetNextPosition' %}
{% assign argument = 'position' %}
{% assign type = 'Number' %}
{% assign default = 'nul' %}   
{% include includes/method.md %}

Function provided by the scheduler to reset the engine's next position

{% assign method = 'connect' %}
{% assign argument = 'target' %}
{% assign type = 'Object' %}
{% assign return = 'this' %}
{% include includes/method.md %}

Connect to other audio node e.g.: AudioContext.destionation.

{% assign method = 'disconnect' %}
{% assign argument = 'connection' %}
{% assign type = 'Object' %}
{% assign return = 'this' %}   
{% include includes/method.md %}

Disconnect from the audio node passed as a parameter.

## Static methods

{% assign method = 'implementsScheduled' %}
{% assign argument = 'engine' %}
{% assign type = 'Object' %}
{% assign return = 'Boolean' %}   
{% include includes/method.md %}

Check whether the time engine implements the scheduled interface.

{% assign method = 'implementsTransported' %}
{% assign argument = 'engine' %}
{% assign type = 'Object' %}
{% assign return = 'Boolean' %}   
{% include includes/method.md %}

Check whether the time engine implements the transported interface.

{% assign method = 'implementsSpeedControlled' %}
{% assign argument = 'engine' %}
{% assign type = 'Object' %}
{% assign return = 'Boolean' %}   
{% include includes/method.md %}

Check whether the time engine implements the speed-controlled interface.

{% assign method = 'setScheduled' %}
{% assign argument = 'engine,resetNextTime,getCurrentTime,getCurrentPosition' %}
{% assign type = 'Object,Boolean,Function,Function' %}
{% include includes/method.md %}

Set the engine interface to a scheduled type with time dependecy.

{% assign method = 'setTransported' %}
{% assign argument = 'engine,resetNextPosition,getCurrentTime,getCurrentPosition' %}
{% assign type = 'Object,Boolean,Function,Function' %}
{% include includes/method.md %}

Set the engine interface to a transported type with position dependecy.

{% assign method = 'setSpeedControlled' %}
{% assign argument = 'engine,getCurrentTime,getCurrentPosition' %}
{% assign type = 'Object,Function,Function' %}
{% include includes/method.md %}

Set the engine interface to a speed-controlled type.

{% assign method = 'resetInterface' %}
{% assign argument = 'engine' %}
{% assign type = 'Object' %}
{% include includes/method.md %}

Resets engine interface reference, getters as well as next time and position attributes.