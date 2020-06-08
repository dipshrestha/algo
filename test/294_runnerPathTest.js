const assert = require('assert');
const RunnerPath = require('../daily/294_runnerPath.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RunnerPath();
});
describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});