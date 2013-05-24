//Register functions to be performed when DOM is ready, similar to $( function() {} ) in jQuery.
//Param: handler - function that is expected to be invoked once DOM is ready
function init(handler) {
	if (init.done)
		handler(); 
	else {
		init.handlers.push(handler);
		if (!init.timer && !init.ready) init.timer = setInterval(domReady, 5);
	}
}

function domReady() {
	if (document && document.getElementById && document.getElementsByTagName && document.body) {
		init.ready = true;
		clearInterval(init.timer);
		init.timer = null;
		for (var i = 0, len = init.handlers.length; i < len; i++) (init.handlers.shift())();
		init.done = true;
	}
}

init.handlers = [];
init.done = init.ready = false;
init.timer = null;
