Omniscroll-keyboard
===================

An omniscroll plugin to calculate delta values based on a KeyboardEvent.

	var omniscroll = require('omniscroll');
	var omniscrollKeyboard = require('omniscroll-keyboard')(omniscroll);

	function keydownHandler(e) {
		var values = omniscroll(e,'omniscroll-keyboard');
	}

	document.addEventListener('keydown',keydownHandler);