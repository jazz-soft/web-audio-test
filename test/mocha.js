var window = require('..');

describe('web-audio', function() {
  it('AudioContext', function() {
    var ac = new window.AudioContext();
    console.log(ac);
  });
});
