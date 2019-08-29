const assert = require('assert');
const RecordLog = require('../daily/16_recordLog.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RecordLog();
});

describe('Template', function() {
  const result = 3;
  const expected = 3;

  it('Iterative', function() {
    assert.equal(result, expected);
  });
});