(function(factory){
  if ( typeof define === 'function' && define.amd ) {
    // AMD. Register as an anonymous module.
    define([], factory());
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory();
  } else {
    // Browser globals
    window.omniscrollKeyboard = factory();
  }
}
(function(){

  var pluginName = 'omniscroll-keyboard';

  var plugin = function(event,deltaObj) {

    //the event originated from a keyboard
    if (event instanceof KeyboardEvent) {

      var baseDelta = 4;

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
          deltaObj.x = -baseDelta;
          break;
        case 'RIGHT':
          deltaObj.x = baseDelta;
          break;
        case 'UP':
          deltaObj.y = -baseDelta;
          break;
        case 'DOWN':
          deltaObj.y = baseDelta;
          break;
      }

    }

  });

  return function(omniscroll) {
    return omniscroll.plugin(pluginName,plugin);
  };

}));