const assert = require('assert');
const SegregateArray = require('../daily/35_segregateArray.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new SegregateArray(['R', 'G', 'B']);
});

describe('SegregateArray - GBRRBRG ', function() {
  const expected = ['R', 'R', 'R', 'G', 'G', 'B', 'B'];
  const WM = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});


describe('SegregateArray - GRGB ', function() {
  const expected = ['R', 'G', 'G', 'B'];
  const WM = ['G', 'R', 'G', 'B'];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});

describe('SegregateArray - BRGB ', function() {
  const expected = ['R', 'G', 'B', 'B'];
  const WM = ['B', 'R', 'G', 'B'];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});

describe('SegregateArray - RGR ', function() {
  const expected = ['R', 'R', 'G'];
  const WM = ['R', 'G', 'R'];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});

describe('SegregateArray - GBG ', function() {
  const expected = ['G', 'G', 'B'];
  const WM = ['G', 'B', 'G'];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});

describe('SegregateArray - GRG ', function() {
  const expected = ['R', 'G', 'G'];
  const WM = ['G', 'R', 'G'];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});

describe('SegregateArray - BRB ', function() {
  const expected = ['R', 'B', 'B'];
  const WM = ['B', 'R', 'B'];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});

describe('SegregateArray - BRG ', function() {
  const expected = ['R', 'G', 'B'];
  const WM = ['B', 'R', 'G'];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});

describe('SegregateArray - BRR ', function() {
  const expected = ['R', 'R', 'B'];
  const WM = ['B', 'R', 'R'];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});

describe('SegregateArray - RG ', function() {
  const expected = ['R', 'G'];
  const WM = ['R', 'G'];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});

describe('SegregateArray - GR', function() {
  const expected = ['R', 'G'];
  const WM = ['G', 'R'];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});

describe('SegregateArray - GB ', function() {
  const expected = ['G', 'B'];
  const WM = ['G', 'B'];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});

describe('SegregateArray - BG ', function() {
  const expected = ['G', 'B'];
  const WM = ['B', 'G'];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});