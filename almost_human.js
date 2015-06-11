/*
  almost_human.js
  treyhyphen (https://keybase.io/treyhyphen)
*/
(function ($) {
	$.fn.ahtype = function (opts) {

		var string = this.text()

		this.text('')
		this.removeClass('ah')

		press(this, string.split(""))

		function press (el, string_arr) {
			var c = string_arr.shift()

			var delay = Math.floor(Math.random()*70) + 1;
			if (['.','!',';',"\n"].indexOf(c) !== -1)
				delay = 300
			else if (c == '`')
				delay = 100
			else if (c == '^')
				delay = 1000

			setTimeout(function() {
				var content = el.html()

				if (c == '`')
					el.html(el.html().slice(0,-1))		
				else if (c == '^')
					''
				else
					el.append(c)
					if (opts['ionSound'])
						ion.sound.play(opts['ionSound'])

				if (string_arr.length)
					press(el, string_arr)
				else
					if (opts['callback'])
						opts['callback'](); 
			}, delay);
		}
	}
}(jQuery));
