var objectility = require('objectility');

//the name of your plugin
var pluginName = 'omniscroll-keyboard';
var source = 'keyboard';

var keyboard = {
  on: function(elem,cb){
    elem.addEventListener('keydown',cb);
  },
  off: function(elem,cb){
    elem.removeEventListener('keydown',cb);
  }
};

//the plugin constructor
var plugin = function(omniscroll,options) {

  var settings = {
    keyboardFactor: 10,
    preventDefault: true
  };

  objectility.extendOwn(settings,options);

  function onEvent(e) {

    if (settings.preventDefault) {
      e.preventDefault();
    }

    var delta;

    var keycodes = {
      '37': 'LEFT',
      '38': 'UP',
      '39': 'RIGHT',
      '40': 'DOWN'
    };

    var action;
    if (!(action = keycodes[event.keyCode.toString()])) return;

    switch(action) {

      case 'LEFT':
        delta = -settings.keyboardFactor;
        break;
      case 'RIGHT':
        delta = settings.keyboardFactor;
        break;
      case 'UP':
        delta = -settings.keyboardFactor;
        break;
      case 'DOWN':
        delta = settings.keyboardFactor;
        break;
    }

    omniscroll.consume(delta,source);
  }

  //exposed interface
  return {
    bind: function(element) {
      keyboard.on(element,onEvent);
    },
    unbind: function(element) {
      keyboard.off(element,onEvent);
    }
  }

};

module.exports = function(omniscroll,options) {
  return omniscroll.plugin(pluginName,plugin(omniscroll,options));
};