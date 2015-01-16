## Inherited Methods

The following attributes are inherited from [Layer](#ui-layer).

### .params `([params:Object])`

If `object` is present sets the layer's parameters via the passed in `object`, otherwise returns the layer's internal parameters.  

Available parameters :

* `edits:Array = ['x', 'y', 'width']`  
Each element of the `array` determines which characteristics of the `segment` can be modified when the `segment` is editable. 

* `handlerOpacity:Number = 0`  
Sets the segment handler's opacity.  

* `handlerWidth:Number = 2`  
Sets the segment handler's width in pixels.

* `height:Number`  
* `interactions:Object`
* `name:String`  
* `nameAsIdAttribute:Boolean`
* `opacity:Number`
* `selectedClass:String`
* `top:Number`
* `yDomain:Array`

_see [layer.params](#ui-layer-params)_


### .param `(key [, value])` _see [layer.param](#ui-layer-param)_

### .data `([array{Buffer}])` _see [layer.data](#ui-layer-data)_

### .draw `([el])` _see [layer.draw](#ui-layer-draw)_

### .update `([array])` _see [layer.update](#ui-layer-update)_

### .handleSelection `(el, e)` _see [layer.handleSelection](#ui-layer-handleSelection)_

### .handleDrag `(el, e)` _see [layer.handleDrag](#ui-layer-handleDrag)_

### .select `(...els)` _see [layer.select](#ui-layer-select)_

### .unselect `(...els)` _see [layer.unselect](#ui-layer-unselect)_

### .opacity `(...els)` _see [layer.opacity](#ui-layer-opacity)_

### .xZoom `(...els)` _see [layer.xZoom](#ui-layer-xZoom)_

### .each `(func)` _see [layer.each](#ui-layer-each)_