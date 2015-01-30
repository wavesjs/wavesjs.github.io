
{% if arguments.size > 0 %}
  {% assign argument = arguments %}
  {% assign arguments = '' %}
{% endif %}
{% if types.size > 0 %}
  {% assign type = types %}
  {% assign types = '' %}
{% endif %}
{% if defaults.size > 0 %}
  {% assign default = defaults %}
  {% assign defaults = '' %}
{% endif %}

{% if argument contains ',' %} {% else %}
  {% assign argument = argument | apend: "," %}
{% endif %}
{% if type contains ',' %} {% else %}
  {% assign type = type | apend: "," %}
{% endif %}
{% if default contains ',' %} {% else %}
  {% assign default = default | apend: "," %}
{% endif %}


{% assign arguments = argument | split: "," %}
{% assign types = type | split: "," %}

{% if default.size > 0 %}
{% assign defaults = default | split: "," %}
{%endif%}


### .{{method}} `({% for arg in arguments %}{% assign i = forloop.index0 %}{{arguments[i]}}:{{types[i]}}{% if default and defaults[i] and defaults[i].size > 0 %} = {{defaults[i]}}{%endif%}{% if forloop.rindex0 > 0 %}, {%endif%}{%endfor%}){% if return.size > 0 %} : {{return}}{%endif%}`


{% include includes/reset.md %}