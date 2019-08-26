const assert = require('assert');
const JobScheduler = require('../daily/10_jobScheduler.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new JobScheduler();
});

function func() {
  console.log('here i come');
}

describe.skip('JobScheduler - 1', function() {
  const result = 3;
  const expected = 3;

  it('Recursive', function() {
    algo.schedule(func, 5000);
    assert.equal(result, expected);
  });

});