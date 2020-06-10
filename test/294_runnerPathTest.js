const assert = require('assert');
const RunnerPath = require('../daily/294_runnerPath.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RunnerPath();
});
describe.only('Template', function() {
  it('Recursive - No allowed route', function() {
    const expected = Infinity;
    const elevations = { 0: 10, 1: 2, 2: 3 }
    const paths = {
      '0-1': 1,
      '1-2': 3,
      '2-0': 5,
    }
    const result = algo.recursive(paths, elevations)
    assert.equal(result, expected);
  });
  it('Recursive - Single route', function() {
    const expected = 9;
    const elevations = { 0: 1, 1: 2, 2: 1 }
    const paths = {
      '0-1': 1,
      '1-2': 3,
      '2-0': 5,
    }
    const result = algo.recursive(paths, elevations)
    assert.equal(result, expected);
  });
  it('Recursive - Multiple route', function() {
    const expected = 6;
    const elevations = { 0: 1, 1: 2, 2: 1 }
    const paths = {
      '0-1': 5,
      '0-2': 1,
      '1-2': 3,
      '2-0': 5,
    }
    const result = algo.recursive(paths, elevations)
    assert.equal(result, expected);
  });
  it('Recursive - Original route', function() {
    const expected = 28;
    const elevations = { 0: 5, 1: 25, 2: 15, 3: 20, 4: 10 }
    const paths = {
      '0-1': 10,
      '0-2': 8,
      '0-3': 15,
      '1-3': 12,
      '2-4': 10,
      '3-4': 5,
      '3-0': 17,
      '4-0': 10
    }
    const result = algo.recursive(paths, elevations)
    assert.equal(result, expected);
  });
});