### .params `.params([config:Object])`

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


### .param `(key [, value])`

Sets one parameter, see [`params`](#ui-layer-params) for a more in depth description of available parameters.


{% assign name = 'start' %}
{% assign var = 'data' %}
{% assign optional = 'true' %}
{% assign type = 'Array' %}
{% include _docs/method.md %}

If `data` is provided, sets the data of the layer to be displayed, if no argument is given, returns the data of the layer.


{% assign name = 'draw' %}
{% assign var = 'el' %}
{% assign optional = 'true' %}
{% assign type = 'd3Selection' %}
{% include _docs/method.md %}

Updates the DOM with the actual values of the component's data. If `el` is defined, only the given element will be updated.


{% assign name = 'update' %}
{% assign var = 'data' %}
{% assign optional = 'true' %}
{% assign type = 'Array' %}
{% include _docs/method.md %}

Prepares the DOM according to the d3's enter/update/remove pattern. If array is given, replace the internal data of the component.


### .handleSelection `(el:DOMNode, e:Event)`

Defines the logic performed to select an item when a layer is configured as `selectable`. `el` is set to the clicked DOM element if the element is owned by the component or `null` otherwise.  
_Any application logic to handle more complex behavior (keyboard use, etc.) should be done overriding this method._


### .handleDrag `(el:DOMNode, e:Event)`

Defines the logic performed to edit an item when a layer is configured as `selectable`. `el` is set to the clicked DOM element if the element is owned by the component or `null` otherwise. These method are very component specific and are implemented inside child classes of the Layer.  
_Any application logic to handle more complex behavior (keyboard use, etc.) should be done overriding this method._


{% assign name = 'select' %}
{% assign var = 'els' %}
{% assign type = 'DOMNodes' %}
{% include _docs/method.md %}

Adds the `selected` class to each given elements and moves the item at the end of the component's group to display it in front of others.


{% assign name = 'unselect' %}
{% assign var = 'els' %}
{% assign type = 'DOMNodes' %}
{% include _docs/method.md %}

Removes the `selected` class to each given elements.


{% assign name = 'opacity' %}
{% assign var = 'value' %}
{% assign type = 'Number' %}
{% include _docs/method.md %}

Sets the layer opacity at the layer's group level.


{% assign name = 'xZoom' %}
{% assign var = 'value' %}
{% assign type = 'Number' %}
{% include _docs/method.md %}

Updates the scales of the layer according to the zoom factor provided.


{% assign name = 'each' %}
{% assign var = 'callback' %}
{% assign type = 'Function' %}
{% include _docs/method.md %}

D3 like each. this function is provided as a helper to handle application specific needs
