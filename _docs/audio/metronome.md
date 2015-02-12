---
---

# Metronome

Metronome audio engine. It extends Time Engine as a transported interface.

~~~
# to use as a standalone module
$ npm install ircam-rnd/metronome
~~~

## Attributes

{% assign attribute = 'period' %}
{% assign type = 'Number' %}
{% assign default = 'period = 1' %}
{% include includes/attribute.md %}

Metronome period in seconds. Default as the value passed in the constructor.

{% assign attribute = 'clickFreq' %}
{% assign type = 'Number' %}
{% assign default = '600' %}
{% include includes/attribute.md %}

Metronome click frequency.

{% assign attribute = 'clickAttack' %}
{% assign type = 'Number' %}
{% assign default = '0.002' %}
{% include includes/attribute.md %}

Metronome click attack time.

{% assign attribute = 'clickRelease' %}
{% assign type = 'Number' %}
{% assign default = '0.098' %}
{% include includes/attribute.md %}

Metronome click release time.

{% assign attribute = 'outputNode' %}
{% assign type = 'Object' %}
{% assign default = 'gainNode' %}
{% include includes/attribute.md %}

On instanciation an output gain node is created. Every tick should pass through this node.

## Methods

{% assign method = 'constuctor' %}
{% assign argument = 'period' %}
{% assign default = '1' %}  
{% assign type = 'Number' %}
{% include includes/method.md %}

The pediod passed as a parameter on instanciation sets the pediod between each tick.

{% assign method = 'advanceTime' %}
{% assign argument = 'time' %}
{% assign type = 'Number' %}
{% assign default = '' %}   
{% include includes/method.md %}

Implementation of the scheduled interface.

{% assign method = 'syncPosition' %}
{% assign argument = 'time,position,speed' %}
{% assign type = 'Number,Number,Number' %}
{% include includes/method.md %}

Implementation of the transported interface.

{% assign method = 'advancePosition' %}
{% assign argument = 'time,position,speed' %}
{% assign type = 'Number,Number,Number' %}
{% include includes/method.md %}

Implementation of the transported interface.

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