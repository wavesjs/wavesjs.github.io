---

---
# Scheduler

The `Scheduler` class implements a master for time engines (see [`TimeEngine`](#audio-time-engine) or [`AudioTimeEngine`](#audio-audio-time-engine)) that implement the *scheduled* interface such as the [`Metronome`](#audio-metronome) and the [`GranularEngine`](#audio-granular-engine).
A `Scheduler` can also schedule simple callback functions.
The class is based on recursive calls to `setTimeOut` and uses the `audioContext.currentTime` as logical passed to the `advanceTime` methods of the scheduled engines or to the scheduled callback functions.
It extends the [`SchedulingQueue`](#audio-scheduling-queue) class that itself includes a [`PriorityQueue`](#audio-priority-queue) to assure the order of the scheduled engines (see [`SimpleScheduler`](#audio-simple-scheduler) for a simplified scheduler implementation without `PriorityQueue`).

To get a unique instance of `Scheduler` as the global scheduler of an application, the `getScheduler` factory function should be used. The function accepts an audio context as optional argument and uses the Waves default audio context (see [`Audio Context`](#audio-audio-context)) as default. The factory creates a single scheduler for each audio context.

## Usage

~~~
var wavesAudio = require('waves-audio');
var scheduler = wavesAudio.getScheduler();

scheduler.add(myEngine);
~~~

## Example

This example shows three [`Metronome`](#audio-metronome) engines running in a `Scheduler`.

<div id='scheduler-container'></div>
<script src="https://rawgit.com/wavesjs/audio/master/examples/scheduler.js"></script>
<a href="https://rawgit.com/wavesjs/audio/master/examples/scheduler.js" target="_blank">[source code]</a>

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

Lookahead time (>= period).

## Methods

{% assign method = 'currentTime' %}
{% assign argument = '' %}
{% assign type = '' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Returns scheduler current time including lookahead.

{% assign method = 'add' %}
{% assign argument = 'engineOrCallback,time' %}
{% assign type = 'TimeEngine|Function,Number' %}
{% assign default = ',this.currentTime' %}   
{% assign return = 'Object' %}
{% include includes/method.md %}  

Add a `TimeEngine` or a simple callback function to the scheduler at an optionally given time.
Whether the `add` method is called with a `TimeEngine` or a callback function it returns a `TimeEngine` that can be used as argument of the methods `remove` and `resetEngineTime`.
A `TimeEngine` added to a scheduler has to implement the *scheduled* interface.
The callback function added to a scheduler will be called at the given time and with the given time as argument.
The callback can return a new scheduling time (*i.e.* the next time when it will be called) or it can return `Infinity` to suspend scheduling without removing the function from the scheduler.
A function that does not return a value (or returns `null` or `0`) is removed from the scheduler and cannot be used as argument of the methods `remove` and `resetEngineTime` anymore.

{% assign method = 'remove' %}
{% assign argument = 'engine' %}
{% assign type = 'Object' %}
{% include includes/method.md %}

Remove a `TimeEngine` from the scheduler that has been added to the scheduler using the `add` method.

{% assign method = 'resetEngineTime' %}
{% assign argument = 'engine,time' %}
{% assign type = 'Object,Number' %}
{% include includes/method.md %}

Reschedule a scheduled time engine at a given time.

{% assign method = 'clear' %}
{% include includes/method.md %}

Remove all schdeduled callbacks and engines from the scheduler.