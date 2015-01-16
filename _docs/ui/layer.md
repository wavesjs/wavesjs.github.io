---
---

# Layer {#layer}

This module is the base class for all visualisation components. It exposes all shared behavior between components.

~~~
# to use as a standalone module
$ npm install ircam-rnd/layer
~~~

## Public API 

### .params `.params([object])`

If `object` is present sets the layer's parameters via the passed in `object`, otherwise returns the layer's internal parameters.  

Shared parameters :

* `height:Number`  
  Sets the height of the component. _Defaults to timeline's height_

* `interactions:Object`  
  Sets the interactions allowed on the components. _Defaults to {}_  
  `{ selectable: true|false, editable: true|false }`  
  _warning: at that time, only segments and breakpoints supports edition_  

* `name:String`   
  Sets the name of the component. _Defaults to unique generated string_

* `nameAsIdAttribute:Boolean`  
  Use the `name` parameter of the created component to set the `id` attribute of the component's `g` element. Allow to easily match a specific group add css or specific logic. _Defaults to false_  

* `opacity:Float`  
  Sets the opacity of the layer at it's group level. _Defaults to 1_  

* `selectedClass:String`  
  Sets the class used to mark selected items. _Defaults to 'selected'_  

* `top:Number`  
  Sets the position (_in pixels_) of the component's group from the timeline's top boundary. _Defaults to 0_

* `yDomain:Array`   
  Sets data domain in the y axis from the component perspective. _Defaults to timeline's yDomain_ 


### .param `(key [, value])`

Sets one parameter, see [`params`](#ui-layer-params) for a more in depth description of available parameters.


### .data `([data:Array])`

If `data` is provided, sets the data of the layer to be displayed, if no argument is given, returns the data of the layer.


### .draw `([el:d3Selection])`

Updates the DOM with the actual values of the component's data. If `el` is defined, only the given element will be updated.


### .update `([data:Array])`

Prepares the DOM according to the d3's enter/update/remove pattern. If array is given, replace the internal data of the component.


### .handleSelection `(el:DOMNode, e:Event)`

Defines the logic performed to select an item when a layer is configured as `selectable`. `el` is set to the clicked DOM element if the element is owned by the component or `null` otherwise.  
_Any application logic to handle more complex behavior (keyboard use, etc.) should be done overriding this method._


### .handleDrag `(el:DOMNode, e:Event)`

Defines the logic performed to edit an item when a layer is configured as `selectable`. `el` is set to the clicked DOM element if the element is owned by the component or `null` otherwise. These method are very component specific and are implemented inside child classes of the Layer.  
_Any application logic to handle more complex behavior (keyboard use, etc.) should be done overriding this method._


### .select `(...els:DOMNodes)`

Adds the `selected` class to each given elements and moves the item at the end of the component's group to display it in front of others.


### .unselect `(...els:DOMNodes)`

Removes the `selected` class to each given elements.


### .opacity `(value:Number)`

Set the layer opacity at the layer's group level.


### .xZoom `(value:Number)`

Update the scales of the layer according to the zoom factor provided.


### .each `(callback:Function)`

D3 like each. this function is provided as a helper to handle application specific needs

