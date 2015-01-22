---
---

# SuperLoader

### constructor ` : SuperLoader`

### load `(:string|string[]), (options) : Promise `

Method for promise audio and json file loading (and decoding for audio).
The URL(s) of the files to load. Accepts a URL pointing to the file location or an array of URLs.
options: \{\{wrapAroundExtension: number\}\} [options] - Object with a wrapAroundExtension key which set the length, in seconds to be copied from the begining at the end of the returned AudioBuffer

