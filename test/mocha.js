const JZZ = require('jzz');
global.window = require('..');

describe('web-audio', function() {
  it('AudioContext', function() {
    var ac = new window.AudioContext();
  });
  it('Buffer', function() {
    var ac = new window.AudioContext();
    ac.createBuffer();
  });
  it('Convolver', function() {
    var ac = new window.AudioContext();
    ac.createConvolver();
  });
  it('DynamicsCompressor', function() {
    var ac = new window.AudioContext();
    ac.createDynamicsCompressor();
  });
  it('Gain', function() {
    var ac = new window.AudioContext();
    ac.createGain();
  });
  it('Oscillator', function() {
    var ac = new window.AudioContext();
    ac.createOscillator();
  });
  it('PeriodicWave', function() {
    var ac = new window.AudioContext();
    ac.createPeriodicWave();
  });
  it('AudioBufferSource', function() {
    var ac = new window.AudioContext();
    ac.createBufferSource();
  });
});

describe('jzz', function() {
  it('getAudioContext', function() {
    var ac = JZZ.lib.getAudioContext();
  });
});
