# almost_human
Animated typing plugin for jQuery. Attempts to simulate human typing by adding random delay values in between adding individual characters.

## Basic Usage
At a high level, you just load up a container with text and call the script on that container. It will clear out the text immediately and star typing whatever was in its place. 

Because it does this, however, the element must be rendered on the page. So best to either initialize the script within `$(document).ready()` or following the element you wish to type in.

**HTML**

```
<pre id="terminal">
GREETINGS PROFESSOR FALKEN
</pre>
```

**JAVASCRIPT**
```
$('#terminal').ahtype();
```

## Special Characters & Syntax

There are a few special characters that are interpreted by the script and change the animated typing in different ways. 

* Any of the characters `. ! ; \n` will add a 300ms extra delay before moving to the next character. These characters will still be printed.
* The `^` character will insert a full second extra delay. This character is not printed.
* The ``` ` ``` character will baskspace a character and add a 100ms delay

## Options
The `ahtype()` function accepts an options argument, whose properties can curerently be
* `callback` - simply a function to execute when the typing animation comlete
* `ionSound` - name of the sound to play as a character is typed; uses the jQuery [ion.sound plugin](http://ionden.com/a/plugins/ion.sound/en.html)

**Example Using ionSound and callback**
```
<pre id="terminal">
GREETINGS PROFESSOR FLAKEN^^`````ALKEN
</pre>

<script>
  var sound_name = 'type'

  ion.sound({
    sounds:[{name:sound_name}],
    preload: true,
    multiplay: false,
    volume: 0.5
  })
  
  $('#terminal').ahtype({
    callback: function() {
      console.log('HELLO')
    },
    ionSound:sound_name
  })
</script>
```
