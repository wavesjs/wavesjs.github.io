---

---

# Loaders


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

### Loader

{% assign method = 'constructor' %}
{% assign argument = 'responseType' %}
{% assign optional = 'true' %}
{% assign type = 'String' %}
{% assign return = 'Loader' %}
{% include includes/method.md %}

`responseType` default "" equal "text", possible values: "arraybuffer", "blob", "document" or "json"

{% assign method = 'load' %}
{% assign argument = 'url' %}
{% assign optional = 'false' %}
{% assign type = 'String|String[]' %}
{% assign return = 'Promise' %}
{% include includes/method.md %}

Method for a promise based file loading.
The `url`(s) of the files to load. Accepts a `url` pointing to the file location or an array of `url`s.

### AudioBufferLoader

{% assign method = 'constructor' %}
{% assign return = 'AudioBufferLoader' %}
{% include includes/method.md %}

{% assign method = 'load' %}
{% assign argument = 'url,options' %}
{% assign optional = 'false,true' %}
{% assign type = 'String|String[],Object' %}
{% assign return = 'Promise' %}
{% include includes/method.md %}

Method for promise audio file loading and decoding.
The `url`s of the audio files to load. Accepts a `url` pointing to the file location or an array of URLs.

options: \{\{wrapAroundExtension: number\}\} - Object with a wrapAroundExtension key which set the length, in seconds to be copied from the begining at the end of the returned AudioBuffer(s)

### SuperLoader

{% assign method = 'constructor' %}
{% assign return = 'SuperLoader' %}
{% include includes/method.md %}

{% assign method = 'load' %}
{% assign argument = 'url,options' %}
{% assign optional = 'false,true' %}
{% assign type = 'String|String[],Object' %}
{% assign return = 'Promise' %}
{% include includes/method.md %}

Method for promise audio and json file loading (and decoding for audio).
The `url`(s) of the files to load. Accepts a `url` pointing to the file location or an array of URLs.
options: \{\{wrapAroundExtension: number\}\} [options] - Object with a wrapAroundExtension key which set the length, in seconds to be copied from the begining at the end of the returned AudioBuffer

