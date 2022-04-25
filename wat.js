(function(global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  }
  else if (typeof define === 'function' && define.amd) {
    define('WAT', [], factory);
  }
  else {
    if (!global) global = window;
    global.WAT = factory();
  }
})(this, function() {

  function _readonly(obj, name, val) {
    Object.defineProperty(obj, name, { get: function() { return val; }, enumerable: true });
  }

  function _changed(target, data) {
    if (target.onstatechange) target.onstatechange(new MIDIConnectionEvent(data));
  }

  function _noop() {}

  var _time = Date.now || function () { return new Date().getTime(); };
  var _startTime = _time();
  var _now = typeof performance != 'undefined' && performance.now ?
    function() { return performance.now(); } : function() { return _time() - _startTime; };

  function AudioContext() {
  }

  var WAT = {
    AudioContext: AudioContext
  };

  Object.freeze(WAT);

  return WAT;
});
