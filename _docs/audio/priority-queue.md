---
---

# Priority Queue

Used by [Scheduler](#audio-scheduler) and [Transport](#audio-transport) to handle
events or callbacks by priority.

~~~
# to use as a standalone module
$ npm install ircam-rnd/priority-queue
~~~

## Attributes

{% assign attribute = 'reverse' %}
{% assign type = 'Boolean' %}
{% assign default = 'false' %}
{% include includes/attribute.md %}

Wheter the queue should be reversed or not.

## Methods

{% assign method = 'insert' %}
{% assign argument = 'object,time,sort' %}
{% assign type = 'Object,Number,Boolean' %}
{% assign default = ',,true' %}   
{% include includes/method.md %}

Insert an object to the queue. Using false as the third arguments prevents sorting
for each element.

{% assign method = 'move' %}
{% assign argument = 'object,time' %}
{% assign type = 'Object,Number' %}
{% include includes/method.md %}

Move an object to another time in the queue.

{% assign method = 'remove' %}
{% assign argument = 'object' %}
{% assign type = 'Object' %}
{% include includes/method.md %}

Remove an object from the queue.

{% assign method = 'clear' %}
{% include includes/method.md %}

Clear queue.

{% assign method = 'head' %}
{% assign return = 'Object' %}
{% include includes/method.md %}

Returns the first item in the queue of null if empty.

{% assign method = 'time' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

Returns the time reference of the first object in the queue or Infinity if empty.