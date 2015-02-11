---
---

# Simple Scheduler

Simplified schduler singleton based on audio time, where Time Engine is the master.

~~~
# to use as a standalone module
$ npm install ircam-rnd/simple-scheduler
~~~

## Methods

{% assign method = 'currentTime' %}
{% assign argument = '' %}
{% assign type = '' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Return current scheduler time including lookahead. 

{% assign method = 'callback' %}
{% assign argument = 'callbackFunction,time' %}
{% assign type = 'Function,Number' %}
{% assign default = ',this.currentTime' %}   
{% assign return = 'Object' %}
{% include includes/method.md %}

Adds a callback to the scheduler at a specific time. Returns a scheduled engine object ment to be used for removal or reset.

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

Remove all schdeduled callbacks and engines from the scheduler.