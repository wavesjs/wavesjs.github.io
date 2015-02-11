---
---

# Metronome

Metronome audio engine. It extends Time Engine as a transported interface.

~~~
# to use as a standalone module
$ npm install ircam-rnd/metronome
~~~

## Override of Time Engine methods (!!!)

{% assign method = 'advanceTime' %}
{% assign argument = 'time' %}
{% assign type = 'Number' %}
{% assign default = '' %}   
{% include includes/method.md %}

{% assign method = 'syncPosition' %}
{% assign argument = 'time,position,speed' %}
{% assign type = 'Number,Number,Number' %}
{% include includes/method.md %}

{% assign method = 'advancePosition' %}
{% assign argument = 'time,position,speed' %}
{% assign type = 'Number,Number,Number' %}
{% include includes/method.md %}

## Methods

{% assign method = 'trigger' %}
{% assign argument = 'time' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

Trigger metronome click at the time specified.

{% assign method = 'gain' %}
{% assign argument = 'value' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

Sets gain attribute if a value argument is present, returns gain value if not.

{% assign method = 'phase' %}
{% assign argument = 'value' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

Sets phase attribute if a value argument is present, returns phase value if not.