---
---

# Utils

In this module you can find a collection of helpers used trhoughout the modules of the lib.  

~~~
# to use as a standalone module
$ npm install ircam-rnd/utils
~~~

## Attributes

### .accessors `:Object`  

This object contains several methods that allows you to add generic accessors to a given object.

* __identity__ `(object:Object, names:Array|String = null)`  
Adds an accessor per given name inside the provided `names` to the provided `object`. The resulting accessor allows you to get and set an internal attribute of the augmented object. In this case the value returned will be exactly the value given.

* __getFunction__ `(object:Object, names:Array|String = null)`  
Adds an accessor per given name inside the provided `names` to the provided `object`. The resulting accessor allows you to get and set an internal attribute of the augmented object. These accessors can take any value and will always return a function.  
In the case that the given value is not a function, it will be wrapped in a function that returns your value when called.

* __getValue__ `(object:Object, names:Array|String = null)`  
Adds an accessor per given name inside the provided `names` to the provided `object`. The resulting accessor allows you to get and set an internal attribute of the augmented object. These accessors can take any value and will always return a value.  
In the case that the given value is a function, the accessor will execute that function and return its return value.


## Methods

### .isFunction `(value:Any) : Boolean `  

Tests whether the `value` provided is a `Function`.

### .uniqueId `(prefix:String = '') : String `  

Generates a globally-unique id. If `prefix` is passed, the id will be appended to it.

### .toFront `(item:DOMNode = '') `  

Moves the provided `item` to the end of it's parent `DOMNode`.
