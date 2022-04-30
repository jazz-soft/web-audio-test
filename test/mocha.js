const JZZ = require('jzz');
global.window = require('..');

describe('web-audio', function() {
  it('AudioContext', function() {
    var ac = new window.AudioContext();
  });
});

describe('jzz', function() {
  it('getAudioContext', function() {
    var ac = JZZ.lib.getAudioContext();
  });
});
