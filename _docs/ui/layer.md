---
hash: layer
category: ui
api:
  - params
  - param
  - handleSelection
  - handleDrag
  - select
  - unselect
  - each
---

# Layer {#layer}

This module is the base class for all visualisation components. It exposes all shared behavior between components.

~~~
# to use as a standalone module
$ npm install ircam-rnd/layer
~~~


## Public API {#layer-public-api}


### #params {#layer-params}

`.params([object])`

If `object` is present sets the layer's parameters via the passed in `object`, otherwise returns the layer's internal parameters.  

Shared parameters :

* `nameAsIdAttribute` {Boolean} _Defaults to `false`_  
  Use the name parameter of the created component to set the id attribute of the component's g element. Allow to easily match a specific group add css or specific logic

* `opacity` {Float} _Defaults to `1`_  
  Sets the opacity of the layer at it's group level  

* `height` {Number} _Defaults to timeline's height_  
  Sets the height of the component  

* `top` {Number} _Defaults to 0_  
  Sets the position of the component from the timeline's top boundarie. _in pixels_

* `yDomain` {Array} _Defaults to timeline's yDomain_  
  Sets data domain in the y axis from the component perspective.

* `selectedClass` {String} _Defaults to 'selected'_  
  Sets the class used to mark selected items.

* `interactions` {Object} _Defaults to {}_  
  Sets the interactions allowed on the components.  
  `{ selectable: true|false, editable: true|false }`  
  _warning: at that time, only segments and breakpoints supports edition_


### #param {#layer-param}

`.param(key [, value])`

Sets one parameter, _cf._ `params` for a more in depth description of available parameters.


### #handleSelection {#layer-handleSelection}

`.handleSelection(el, e)`

Defines the logic performed to select an itm when a layer is configured as `selectable`. `el` is set to the clicked DOM element if the element is owned by the component or `null` otherwise.  
Any application logic to handle more complex behavior (keyboard use, etc.) should be done overriding this method.


### #handleDrag {#layer-handleDrag}

`.handleDrag(el, e)`

Defines the logic performed to edit an item when a layer is configured as `selectable`. `el` is set to the clicked DOM element if the element is owned by the component or `null` otherwise. These method are very component specific and are implemented inside child classes of the Layer.  
Any application logic to handle more complex behavior (keyboard use, etc.) should be done overriding this method.


### #select {#layer-select}

`.select(...els)`

Adds the `selected` class to each given elements. Move the item at the end of the component's group to display it in front of others.


### #unselected {#layer-unselected}

`.unselect(...els)`

Removes the `selected` class to each given elements.
