---
---

# AudioBufferLoader

### constructor ` : AudioBufferLoader`

### load `(:string|string[]), (options) : Promise `

Method for promise audio file loading and decoding.
The URL(s) of the audio files to load. Accepts a URL pointing to the file location or an array of URLs.

options: \{\{wrapAroundExtension: number\}\} - Object with a wrapAroundExtension key which set the length, in seconds to be copied from the begining at the end of the returned AudioBuffer(s)

