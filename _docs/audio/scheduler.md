---

---
# Scheduler

The scheduler is a global singleton that allows for scheduling time-engines (see [TimeEngine](#audio-time-engine)) like the granular engine and the metronome as well as simple callback functions.

~~~
# to use as a standalone module
$ npm install ircam-rnd/scheduler
~~~

## Attributes

{% assign attribute = 'period' %}
{% assign type = 'Number' %}
{% assign default = '0.025' %}
{% include includes/attribute.md %}

Value for setTimeout period.

{% assign attribute = 'lookahead' %}
{% assign type = 'Number' %}
{% assign default = '0.1' %}
{% include includes/attribute.md %}

Lookahead time. Should be greater than the period attribute.

## Methods

{% assign method = 'currentTime' %}
{% assign argument = '' %}
{% assign type = '' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Returns scheduler current time including lookahead.

{% assign method = 'callback' %}
{% assign argument = 'callbackFunction,time' %}
{% assign type = 'Function,Number' %}
{% assign default = ',this.currentTime' %}   
{% assign return = 'Object' %}
{% include includes/method.md %}

Adds a callback to the scheduler at a specific time. Returns a scheduled engine
object ment to be used for removal or reset.

{% assign method = 'add' %}
{% assign argument = 'engine,time,getCurrentPosition' %}
{% assign type = 'Object,Number,Function' %}
{% assign default = ',this.currentTime,null' %}   
{% assign return = 'Object' %}
{% include includes/method.md %}  

Add a time engine to the scheduler at a specific time. The getCurrentPosition
function is used as a callback to get the current position value.

_Make sure the engine implements scheduled and that it hasn't already been added to the scheduler_.

{% assign method = 'remove' %}
{% assign argument = 'engine' %}
{% assign type = 'Object' %}
{% include includes/method.md %}

Remove time engine or callback from the scheduler

_Make sure the enging has already been added to the scheduler_.

{% assign method = 'reset' %}
{% assign argument = 'engine,time' %}
{% assign type = 'Object,Number' %}
{% include includes/method.md %}

Reschedule a scheduled time engine or callback at a given time

{% assign method = 'clear' %}
{% include includes/method.md %}

Remove all schdeduled callbacks and engines from the scheduler