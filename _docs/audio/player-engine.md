---
---

# Player Engine

Used with a buffer to serve audio files.

~~~
# to use as a standalone module
$ npm install ircam-rnd/player-engine
~~~

## Methods

{% assign method = 'constuctor' %}
{% assign argument = 'buffer' %}
{% assign default = 'null' %}  
{% assign type = 'Object' %}
{% include includes/method.md %}

An audio buffer instance should be passed to the constructor in order to serve audio content.

{% assign method = 'cyclic' %}
{% assign argument = 'cyclic' %}
{% assign type = 'Boolean' %}
{% assign return = 'Boolean' %}
{% include includes/method.md %}

If cyclic is provided sets whether the audio buffer is considered as cyclic.
Otherwise, returns whether the audio buffer is considered as cyclic.

{% assign method = 'gain' %}
{% assign argument = 'value' %}
{% assign type = 'Number' %}
{% assign return = 'Number' %}
{% include includes/method.md %}

If value is provided, sets audio node gain value. Otherwise, returns the gain value.