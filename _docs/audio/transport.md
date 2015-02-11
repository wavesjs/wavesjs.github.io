---

---

# Transport

Provides synchronized scheduling of Time Engine instances.

~~~
# to use as a standalone module
$ npm install ircam-rnd/transport
~~~

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