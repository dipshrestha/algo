const assert = require('assert');
const RainTrap = require('../daily/30_rainTrap.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RainTrap();
});

describe('RainTrap [2, 3, 4]', function() {
  const expected = 0;
  const WM = [2, 2, 4];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});
describe('RainTrap [4, 2, 1,1,0]', function() {
  const expected = 0;
  const WM = [4, 2, 1, 1, 0];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('RainTrap [2, 2, 2]', function() {
  const expected = 0;
  const WM = [2, 2, 2];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});
describe('RainTrap [2, 1, 2]', function() {
  const expected = 1;
  const WM = [2, 1, 2];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('RainTrap [2, 1, 0, 2]', function() {
  const expected = 3;
  const WM = [2, 1, 0, 2];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('RainTrap [2, 1, 2, 1]', function() {
  const expected = 1;
  const WM = [2, 1, 2, 1];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});
describe('RainTrap [3, 2, 1, 2, 3]', function() {
  const expected = 4;
  const WM = [3, 2, 1, 2, 3];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});
describe('RainTrap [3, 2, 1, 1, 2, 3, 2, 2]', function() {
  const expected = 6;
  const WM = [3, 2, 1, 1, 2, 3, 2, 2];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});
describe('RainTrap [2, 1, 0, 2, 0, 0, 2]', function() {
  const expected = 7;
  const WM = [2, 1, 0, 2, 0, 0, 2];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('RainTrap [2, 3, 4, 3, 2, 3, 4]', function() {
  const expected = 1;
  const WM = [2, 3, 4, 3, 2, 3];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('RainTrap [3, 0, 1, 3, 0, 1, 5]', function() {
  const expected = 10;
  const WM = [3, 0, 1, 3, 0, 1, 5];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});
describe('RainTrap [3, 0, 1, 3, 0, 5]', function() {
  const expected = 8;
  const WM = [3, 0, 1, 3, 0, 5];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});