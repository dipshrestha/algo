const assert = require('assert');
const expect = require('chai').expect;
const Dodgeball = require('../daily/292_dodgeball.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Dodgeball();
});

describe('Dodgeball', function() {

  it('Iterative', function() {
    const expected = [
      [0, 1, 4, 5],
      [2, 3]
    ];
    const WM = {
      0: [3],
      1: [2],
      2: [1, 4],
      3: [0, 4, 5],
      4: [2, 3],
      5: [3]
    };
    const result = algo.iterative(WM)
    expect(result[0]).to.have.all.members(result[0]);
    expect(result[1]).to.have.all.members(result[1]);
  });

  it('Iterative', function() {
    const expected = false;
    const WM = {
      0: [3],
      1: [2],
      2: [1, 3, 4],
      3: [0, 2, 4, 5],
      4: [2, 3],
      5: [3]
    }
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });

  it('Iterative', function() {
    const expected = [
      [0, 2],
      [1, 3, 4, 5]
    ];
    const WM = {
      0: [1],
      1: [0],
      2: [3, 4, 5],
      3: [2],
      4: [2],
      5: [2]
    }
    const result = algo.iterative(WM)
    expect(result[0]).to.have.all.members(result[0]);
    expect(result[1]).to.have.all.members(result[1]);
  });
  it('Iterative', function() {
    const expected = false
    const WM = {
      0: [1],
      1: [0],
      2: [3, 4, 5],
      3: [2],
      4: [2, 5],
      5: [2, 4]
    }
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});