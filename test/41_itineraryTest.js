const assert = require('assert');
const Itinerary = require('../daily/41_itinerary.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Itinerary();
});

describe('Itinerary', function() {
  const expected = ['A', 'B', 'C'];
  const WM = [
    ['A', 'B'],
    ['B', 'C']
  ];

  it('Recursive', function() {
    const result = algo.recursive(WM, 'A');
    assert.deepEqual(result, expected);
  });
});

describe('Itinerary', function() {
  const expected = ['A', 'B', 'C', 'D'];
  const WM = [
    ['C', 'D'],
    ['A', 'B'],
    ['B', 'C'],
  ];

  it('Recursive', function() {
    const result = algo.recursive(WM, 'A');
    assert.deepEqual(result, expected);
  });
});

describe('Itinerary', function() {
  const expected = [];
  const WM = [
    ['B', 'A'],
    ['A', 'B'],
    ['B', 'C'],
  ];

  it('Recursive', function() {
    const result = algo.recursive(WM, 'A');
    assert.deepEqual(result, expected);
  });
});

describe('Itinerary', function() {
  const expected = ['A', 'C', 'A', 'B', 'C'];
  const WM = [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'C'],
    ['C', 'A'],
  ];

  it('Recursive', function() {
    const result = algo.recursive(WM, 'A');
    assert.deepEqual(result, expected);
  });
});

describe('Itinerary', function() {
  const expected =  ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'];
  const WM = [
    ['SFO', 'HKO'],
    ['YYZ', 'SFO'],
    ['YUL', 'YYZ'],
    ['HKO', 'ORD']
  ];

  it('Recursive', function() {
    const result = algo.recursive(WM, 'YUL');
    assert.deepEqual(result, expected);
  });
});