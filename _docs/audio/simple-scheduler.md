---
---

# Simple Scheduler

The `SimpleScheduler` class implements a simplified master for time engines (see [`TimeEngine`](#audio-time-engine) or [`AudioTimeEngine`](#audio-audio-time-engine)) that implement the *scheduled* interface such as the [`Metronome`](#audio-metronome) and the [`GranularEngine`](#audio-granular-engine).
The API and funtionalities of the `SimpleScheduler` class are identical to the [`Scheduler`](#audio-scheduler) class. But, other than the `Scheduler`, the `SimpleScheduler` class does not guarantee the order of events (*i.e.* calls to the `advanceTime` method of scheduled time engines and to scheduled callback functions) within a scheduling period (see `period` attribute).

To get a unique instance of `SimpleScheduler` as the global scheduler of an application, the `getSimpleScheduler` factory function should be used. The function accepts an audio context as optional argument and uses the Waves default audio context (see [`Audio Context`](#audio-audio-context)) as default. The factory creates a single (simple) scheduler for each audio context.

## Usage

~~~
var wavesAudio = require('waves-audio');
var scheduler = wavesAudio.getSimpleScheduler();

scheduler.add(myEngine);
~~~

## Example

This example shows three [`Metronome`](#audio-metronome) engines running in a `SimpleScheduler`.

<iframe width="100%" height="300" src="//jsfiddle.net/416tnu4g/1/embedded/result,js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
