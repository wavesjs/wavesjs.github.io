---
---

# loaders

AudioBuffer loader and other loader utilities module.

~~~
# to use as a standalone module
$ npm install ircam-rnd/loaders
~~~

## Example usage

{% highlight js %}
  // We need an audio context to decode the file
  // By default,the loaders search for audioContext in the window.
  var audioContext = new AudioContext();

  // Load the file passing the path
  var myAudioBufferLoader = new loaders.AudioBufferLoader();
  myAudioBufferLoader.progressCallback = function(obj){
    // Do something with the progress value obj
    // obj: {value:.., total:..., loaded:...}
    // value is loaded/total
  }
  myAudioBufferLoader.load('sound/file/url').then(
      function(buffer){
        // Do something with the loaded audio buffer
      },
      function(error){
        // Catch an error during the loading or decodeAudioData process
      }
  );

{% endhighlight %}

