const assert = require('assert');
const Bartender = require('../daily/297_bartender.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Bartender();
});

describe('Bartender', function() {
  describe('2 Common', function() {
    const expected = 2;
    let preferences = [
      [0, 1, 3, 6],
      [1, 4, 7],
      [2, 4, 7, 5],
      [3, 2, 5],
      [5, 8]
    ];
    it('Recursive', function() {
      const result = algo.recursive(preferences)
      assert.equal(result, expected);
    });
  })
  describe('3 Common', function() {
    const expected = 3;
    let preferences = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 4, 7, 5],
      [3, 2, 5],
      [5, 8]
    ];
    it('Recursive', function() {
      const result = algo.recursive(preferences)
      assert.equal(result, expected);
    });
  })
  describe('Highest not choosen', function() {
    const expected = 2;
    let preferences = [
      [1, 4],
      [0, 4],
      [0, 4],
      [0, 4],
      [0, 3],
      [2, 3]
    ];
    /*
        int [] [] a= {{1,2,3,4},
            {0},
            {5},
            {4,5},
            {0,1,2,3}};
    int[][] a = { { 1, 4 }, // 0
      { 0, 4 }, // 1
      { 0, 4 }, // 2
      { 0, 4 }, // 3
      { 0, 3 }, // 4
      { 2, 3 }, // 5
    };
    */
    it('Recursive', function() {
      const result = algo.recursive(preferences)
      assert.equal(result, expected);
    });
  })
});