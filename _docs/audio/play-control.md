---

---   


# Play Control

Extends Time Engine to provide playback control of a Time Engine instance.

~~~
# to use as a standalone module
$ npm install ircam-rnd/play-control
~~~

## Methods

{% assign method = 'constuctor' %}
{% assign argument = 'engine' %}
{% assign type = 'Object' %}
{% include includes/method.md %}

The Time Engine instance should be passed to the constructor.

{% assign method = 'currentTime' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Returns the current master time.

{% assign method = 'currentPosition' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Returns the current master position.

{% assign method = 'loop' %}
{% assign argument = 'enable' %}
{% assign type = 'Boolean' %}
{% assign return = 'Boolean' %}
{% include includes/method.md %}

If enable is provided sets the play control loop behavior, otherwise returns its value.

{% assign method = 'setLoopBoundaries' %}
{% assign argument = 'start,end' %}
{% assign type = 'Number,Number' %}
{% include includes/method.md %}

Sets loop start and end time.

{% assign method = 'loopStart' %}
{% assign argument = 'startTime' %}
{% assign type = 'Number' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

If startTime is provided sets loop start value, otherwise returns its value.

{% assign method = 'loopEnd' %}
{% assign argument = 'endTime' %}
{% assign type = 'Number' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

If startTime is provided sets loop start value, otherwise returns its value.

{% assign method = 'start' %}
{% include includes/method.md %}

Starts playback.

{% assign method = 'pause' %}
{% include includes/method.md %}

Pauses playback and stays at the same position.

{% assign method = 'stop' %}
{% include includes/method.md %}

Stops playback and seeks to initial (0) position.

{% assign method = 'speed' %}
{% assign argument = 'speed' %}
{% assign type = 'Number' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

If speed if provided, sets the playback speed. The speed value should be non-zero 
between -16 and -1/16 or between 1/16 and 16.
Otherwise, returns the current playing speed.

{% assign method = 'seek' %}
{% assign argument = 'position' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

Sets playing position.


{% assign method = 'clear' %}
{% include includes/method.md %}

 Remove time engine from the transport.