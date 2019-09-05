const assert = require('assert');
const MinClassroomTest = require('../daily/21_minClassroom.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MinClassroomTest();
});

describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});