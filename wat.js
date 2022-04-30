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

  function _noop() {}

  var _time = Date.now || function () { return new Date().getTime(); };
  var _startTime = _time();
  var _now = typeof performance != 'undefined' && performance.now ?
    function() { return performance.now(); } : function() { return _time() - _startTime; };

  function AudioNode() {
    this.connect = function() {};
  }

  function AudioParam() {
    this.setTargetAtTime = function() {};
  }

  function OscillatorNode() {
    var self = new AudioNode();
    self.start = function() {};
    self.stop = function() {};
    return self;
  }

  function GainNode() {
    var self = new AudioNode();
    self.gain = new AudioParam();
    return self;
  }

  function AudioContext() {
    this.resume = function() {};
    this.createOscillator = function() { return new OscillatorNode(); };
    this.createGain = function() { return new GainNode(); };
  }

  var WAT = {
    AudioContext: AudioContext
  };

  Object.freeze(WAT);

  return WAT;
});
