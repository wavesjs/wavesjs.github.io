{% assign method = 'params' %}
{% assign argument = 'config' %}
{% assign type = 'Object' %}
{% include includes/method.md %}

If `config` is present sets the layer's parameters via the passed in `config`, otherwise returns the layer's internal parameters.  

Shared parameters :

* `height:Number = timeline.height()`  
  Sets the height of the component.

* `interactions:Object = {}`  
  Sets the interactions allowed on the components.  
  `{ selectable: true|false, editable: true|false }`  
  _warning: at that time, only segments and breakpoints supports edition_  

* `name:String = generatedString`     
  Sets the name of the component.

* `nameAsIdAttribute:Boolean = false`  
  Use the `name` parameter of the created component to set the `id` attribute of the component's `g` element. Allow to easily match a specific group add css or specific logic.  

* `opacity:Number = 1`  
  Sets the opacity of the layer at it's group level.

* `selectedClass:String = 'selected'`  
  Sets the class used to mark selected items.

* `top:Number = 0`  
  Sets the position (_in pixels_) of the component's group from the timeline's top boundary.

* `yDomain:Array = timeline.domain()`   
  Sets data domain in the y axis from the component perspective.


{% assign method = 'param' %}
{% assign arguments = 'key,value' %}
{% assign types = 'String,Any' %}
{% assign defaults = ',null' %}
{% include includes/method.md %}

Sets one parameter, see [`params`](#ui-layer-params) for a more in depth description of available parameters.


{% assign method = 'start' %}
{% assign argument = 'data' %}
{% assign type = 'Array' %}
{% include includes/method.md %}

If `data` is provided, sets the data of the layer to be displayed, if no argument is given, returns the data of the layer.


{% assign method = 'draw' %}
{% assign argument = 'el' %}
{% assign type = 'd3Selection' %}
{% include includes/method.md %}

Updates the DOM with the actual values of the component's data. If `el` is defined, only the given element will be updated.


{% assign method = 'update' %}
{% assign argument = 'data' %}
{% assign type = 'Array' %}
{% include includes/method.md %}

Prepares the DOM according to the d3's enter/update/remove pattern. If array is given, replace the internal data of the component.


{% assign method = 'handleSelection' %}
{% assign arguments = 'element,e' %}
{% assign types = 'DOMNode,Event' %}
{% include includes/method.md %}

Defines the logic performed to select an item when a layer is configured as `selectable`. `el` is set to the clicked DOM element if the element is owned by the component or `null` otherwise.  
_Any application logic to handle more complex behavior (keyboard use, etc.) should be done overriding this method._


{% assign method = 'handleDrag' %}
{% assign arguments = 'element,e' %}
{% assign types = 'DOMNode,Event' %}
{% include includes/method.md %}

Defines the logic performed to edit an item when a layer is configured as `selectable`. `el` is set to the clicked DOM element if the element is owned by the component or `null` otherwise. These method are very component specific and are implemented inside child classes of the Layer.  
_Any application logic to handle more complex behavior (keyboard use, etc.) should be done overriding this method._


{% assign method = 'select' %}
{% assign argument = 'els' %}
{% assign type = 'DOMNodes' %}
{% include includes/method.md %}

Adds the `selected` class to each given elements and moves the item at the end of the component's group to display it in front of others.


{% assign method = 'unselect' %}
{% assign argument = 'els' %}
{% assign type = 'DOMNodes' %}
{% include includes/method.md %}

Removes the `selected` class to each given elements.


{% assign method = 'opacity' %}
{% assign argument = 'value' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

Sets the layer opacity at the layer's group level.


{% assign method = 'xZoom' %}
{% assign argument = 'value' %}
{% assign type = 'Number' %}
{% include includes/method.md %}

Updates the scales of the layer according to the zoom factor provided.


{% assign method = 'each' %}
{% assign argument = 'callback' %}
{% assign type = 'Function' %}
{% include includes/method.md %}

D3 like each. this function is provided as a helper to handle application specific needs
