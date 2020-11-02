const assert = require('assert');
const Battleships = require('../game/battleships.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Battleships();
});

describe.skip('Battleships', function() {

  it.skip('Recursive', function() {
    const N = 10,
      expected = 34,
      shipsSegments = [
        ['8-4', '5-7'],
        [],
        ['3-7'],
        [],
        [],
        ['0-4']
      ],
      shipsSegmentsCount = [
        [1, 1, 2, 1, 2, 1, 5, 2, 1, 4],
        [4, 1, 1, 2, 0, 2, 2, 1, 5, 2]
      ],
      shipsCount = [4, 3, 2, 1];

    const result = algo.recursive(N, shipsSegments, shipsSegmentsCount, shipsCount);
    assert.equal(result, expected);
  });

  it.skip('Recursive: 10x10 : Bay Area News Group Sept 27, 2020', function() {

    const N = 10,
      expected = 34,
      shipsSegments = [
        ['7-2'],
        ['2-4'],
        [],
        [],
        [],
        ['0-8'],
        ['3-2']
      ],
      shipsSegmentsCount = [
        [2, 1, 3, 2, 4, 0, 1, 2, 1, 4],
        [3, 1, 1, 3, 0, 6, 0, 2, 1, 3]
      ],
      shipsCount = [4, 3, 2, 1];

    const result = algo.recursive(N, shipsSegments, shipsSegmentsCount, shipsCount);
    assert.equal(result, expected);
  });

  it.only('Recursive: 10x10 : Bay Area News Group Aug 9, 2020', function() {

    const N = 10,
      expected = 34,
      shipsSegments = [
        ['1-3'],
        [],
        [],
        [],
        [],
        ['3-1'],
        ['2-9']
      ],
      shipsSegmentsCount = [
        [4, 3, 0, 1, 2, 2, 1, 1, 2, 4],
        [3, 1, 2, 1, 1, 4, 0, 4, 2, 2]
      ],
      shipsCount = [4, 3, 2, 1];

    const result = algo.recursive(N, shipsSegments, shipsSegmentsCount, shipsCount);
    assert.equal(result, expected);
  });

  it('Recursive: 3x3: one type one place with x', function() {
    /*

     x  ?  o  1
     x  x  o  1
     x  o  ?  1
     1  1  2 

    --- start ---
     x  ?  o  1 (0)
     x  x  ?  1 (1)
     x  ?  ?  1 (1)
     0  1  2
    (0)(1)(1)

    shipsSegments = [
      ['0-2'],
      [],
      [],
      [],
      [],
      [],
      ['1-1']
    ],
    shipsSegmentsCount = [
      [0, 1, 2],
      [1, 1, 1]
    ],
    shipsCount = [3];

     */
    const N = 3,
      expected = 1;

    shipsSegments = [
        ['0-2', '2-1'],
      ],
      shipsSegmentsCount = [
        [0, 1, 2],
        [1, 1, 1]
      ],
      shipsCount = [3];
    //console.time('1bc');
    const result = algo.recursive(N, shipsSegments, shipsSegmentsCount, shipsCount);
    //console.timeEnd('1bc');
    assert.equal(result, expected);
  });

  it('Recursive: 3x3: one type one place', function() {
    /*

     x  ?  o  1
     x  ?  o  1
     x  o  ?  1
     0  1  2 

    --- start ---
     x  ?  o  1 (0)
     x  ?  ?  1 (1)
     x  o  ?  1 (1)
     0  1  2
    (0)(0)(1)

    shipsSegments = [
      ['0-2', '2-1'],
    ],
    shipsSegmentsCount = [
      [0, 1, 2],
      [1, 1, 1]
    ],
    shipsCount = [3];

     */
    const N = 3,
      expected = 1;

    shipsSegments = [
        ['0-2', '2-1'],
      ],
      shipsSegmentsCount = [
        [0, 1, 2],
        [1, 1, 1]
      ],
      shipsCount = [3];
    //console.time('1bc');
    const result = algo.recursive(N, shipsSegments, shipsSegmentsCount, shipsCount);
    //console.timeEnd('1bc');
    assert.equal(result, expected);
  });

  it('Recursive: 3x3: one type 2 places', function() {
    /*
     o ↑ → ↓ ← ■ × 

     ?  ?  o  1
     ?  ?  o  1
     o  o  ?  2
     0  1  2 

    --- start ---
     ?  ?  o  1 (0)
     ?  ?  ?  1 (1)
     ?  o  ?  2 (1)
     1  1  2
    (1)(0)(1)

    shipsSegments = [
      ['0-2', '2-1'],
    ],
    shipsSegmentsCount = [
      [0, 1, 2],
      [1, 1, 2]
    ],
    shipsCount = [4];

     */
    const N = 3,
      expected = 2;

    shipsSegments = [
        ['0-2', '2-1'],
      ],
      shipsSegmentsCount = [
        [1, 1, 2],
        [1, 1, 2]
      ],
      shipsCount = [4];

    const result = algo.recursive(N, shipsSegments, shipsSegmentsCount, shipsCount);
    assert.equal(result, expected);
  });


  it('Recursive: 3x3: 2 types', function() {
    /*
     o ↑ → ↓ ← ■ × 

     ?  ?  o  1
     ?  ?  o  1
     ←  →  ?  2
     1  1  2 

    --- start ---
     ?  ?  o  1 (0)
     ?  ?  ?  1 (1)
     ←  ?  ?  2 (1)
     1  1  2
    (0)(1)(1)

    shipsSegments = [
      ['0-2'],
      ['2-0'],
    ],
    shipsSegmentsCount = [
      [1, 1, 2],
      [1, 1, 2]
    ],
    shipsCount = [2, 1];

     */
    const N = 3,
      expected = 1;

    shipsSegments = [
        ['0-2'],
        [],
        [],
        [],
        ['2-0'],
      ],
      shipsSegmentsCount = [
        [1, 1, 2],
        [1, 1, 2]
      ],
      shipsCount = [2, 1];

    const result = algo.recursive(N, shipsSegments, shipsSegmentsCount, shipsCount);
    assert.equal(result, expected);
  });


  it('Recursive: 3x3: 3 types, one type 1 horizontal', function() {
    /*
     o ↑ → ↓ ← ■ × 

     ←  ■  →  3
     ?  ?  o  1
     ←  →  ?  2
     2  2  2 

    --- start ---
     ?  ■  ?  3 (2)
     ?  ?  ?  1 (1)
     ←  ?  ?  2 (1)
     2  2  2
    (1)(1)(2)

    shipsSegments = [
      [],
      [],
      [],
      [],
      ['2-0'],
      ['0-1']
    ],
    shipsSegmentsCount = [
      [2, 2, 2],
      [3, 1, 2]
    ],
    shipsCount = [1, 1, 1];

     */
    const N = 3,
      expected = 1;

    shipsSegments = [
        [],
        [],
        [],
        [],
        ['2-0'],
        ['0-1']
      ],
      shipsSegmentsCount = [
        [2, 2, 2],
        [3, 1, 2]
      ],
      shipsCount = [1, 1, 1];

    const result = algo.recursive(N, shipsSegments, shipsSegmentsCount, shipsCount);
    assert.equal(result, expected);
  });


  it('Recursive: 3x3: 3 types, type 1 both horizontal and vertical', function() {
    /*
     o ↑ → ↓ ← ■ × 

     ←  ■  →  3
     o  ?  ↑  2
     ←  →  ↓  3
     3  2  3 

    --- start ---
     ?  ■  ?  3 (2)
     ?  ?  ?  2 (2)
     ←  ?  ?  3 (2)
     3  2  3 
    (2)(1)(3)

    shipsSegments = [
      [],
      [],
      [],
      [],
      ['2-0'],
      ['0-1']
    ],
    shipsSegmentsCount = [
      [3, 2, 3],
      [3, 2, 3]
    ],
    shipsCount = [1, 2, 1];

     */
    const N = 3,
      expected = 1;

    shipsSegments = [
        [],
        [],
        [],
        [],
        ['2-0'],
        ['0-1']
      ],
      shipsSegmentsCount = [
        [3, 2, 3],
        [3, 2, 3]
      ],
      shipsCount = [1, 2, 1];

    const result = algo.recursive(N, shipsSegments, shipsSegmentsCount, shipsCount);
    assert.equal(result, expected);
  });

  it('Recursive: 5x5', function() {
    /*
     o ↑ → ↓ ← ■ × 

     ?  ←  ■  ■  →  4 (2) 
     ?  ?  ?  ↑  ?  1 (1) 
     ?  ?  ?  ■  ?  1 (1) 
     ?  o  ?  ↓  ?  2 (1) 
     ←  →  ?  ?  o  3 (1) 
     1  3  1  4  2
    (1)(3)(2)(1)(0)

    --- start ---
     ?  ?  ■  ?  →  4 (2) 
     ?  ?  ?  ?  ?  1 (0) 
     ?  ?  ?  ■  ?  1 (1) 
     ?  o  ?  ?  ?  2 (1) 
     ←  ?  ?  ?  o  3 (2) 
     1  3  1  4  2
    (1)(1)(1)(1)(1)

    shipsSegments = [
      ['3-1', '4-4'],
      [],
      ['0-4'],
      [],
      ['4-0'],
      ['0-2','2-3']
    ],
    shipsSegmentsCount = [
      [1, 3, 1, 4, 2],
      [4, 1, 1, 2, 3]
    ],
    shipsCount = [2, 1, 1, 1];

     */
    const N = 5,
      expected = 1;

    shipsSegments = [
        ['3-1', '4-4'],
        [],
        ['0-4'],
        [],
        ['4-0'],
        ['0-2', '2-3']
      ],
      shipsSegmentsCount = [
        [1, 3, 1, 4, 2],
        [4, 1, 1, 2, 3]
      ],
      shipsCount = [2, 1, 1, 1];

    const result = algo.recursive(N, shipsSegments, shipsSegmentsCount, shipsCount);
    assert.equal(result, expected);
  });


  it('Recursive: 5x5: with x', function() {
    /*
     o ↑ → ↓ ← ■ × 

     ?  ←  ■  ■  →  4 (2) 
     ?  ?  ?  ↑  ?  1 (1) 
     ?  ?  ?  ■  ?  1 (1) 
     ?  o  ?  ↓  ?  2 (1) 
     ←  →  ?  ?  o  3 (1) 
     1  3  1  4  2
    (1)(3)(2)(1)(0)

    --- start ---
     ?  ?  ■  ?  →  4 (2) 
     ?  x  ?  ?  ?  1 (0) 
     ?  ?  ?  ■  ?  1 (1) 
     ?  o  ?  ?  ?  2 (1) 
     ←  ?  ?  ?  o  3 (2) 
     1  3  1  4  2
    (1)(1)(1)(1)(1)

    shipsSegments = [
      ['3-1', '4-4'],
      [],
      ['0-4'],
      [],
      ['4-0'],
      ['0-2','2-3'],
      ['1-1'],
    ],
    shipsSegmentsCount = [
      [1, 3, 1, 4, 2],
      [4, 1, 1, 2, 3]
    ],
    shipsCount = [2, 1, 1, 1];

     */
    const N = 5,
      expected = 1;

    shipsSegments = [
        ['3-1', '4-4'],
        [],
        ['0-4'],
        [],
        ['4-0'],
        ['0-2', '2-3'],
        ['1-1']
      ],
      shipsSegmentsCount = [
        [1, 3, 1, 4, 2],
        [4, 1, 1, 2, 3]
      ],
      shipsCount = [2, 1, 1, 1];

    const result = algo.recursive(N, shipsSegments, shipsSegmentsCount, shipsCount);
    assert.equal(result, expected);
  });

});

/*
o ↑ → ↓ ← ■ × 

------------------------
------------------------



 ?  ?  x  ?  o  1 (0) 
 ?  ?  x  ↑  ?  1 (0) 
 ?  ?  x  ■  ?  1 (1) 
 ?  o  x  ↓  ?  2 (1) 
 ←  →  x  ?  ?  2 (1) 
 1  2  0  3  1
(0)(1)(0)(1)(0)

--- start ---
 ?  ?  x  ?  ?  1 (1) 
 ?  ?  x  ?  ?  1 (1) 
 ?  ?  x  ■  ?  1 (0) 
 ?  o  x  ?  ?  2 (1) 
 ←  ?  x  ?  ?  2 (1) 
 1  2  0  3  1
(0)(1)(0)(2)(1)

shipsSegments = [
  ['3-1'],
  [],
  [],
  [],
  ['4-0'],
  ['2-3']
],
shipsSegmentsCount = [
  [1, 2, 0, 3, 1],
  [1, 1, 1, 2, 2]
],
shipsCount = [2, 1, 1];


------------------------
------------------------
 ?  ←  ■  ■  →  4 (2) 
 ?  ?  ?  ↑  ?  1 (1) 
 ?  ?  ?  ■  ?  1 (1) 
 ?  o  ?  ↓  ?  2 (1) 
 ←  →  ?  ?  o  3 (1) 
 1  3  1  4  2
(1)(3)(2)(1)(0)

--- start ---
 ?  ?  ■  ?  →  4 (2) 
 ?  ?  ?  ?  ?  1 (0) 
 ?  ?  ?  ■  ?  1 (1) 
 ?  o  ?  ?  ?  2 (1) 
 ←  ?  ?  ?  ?  3 (1) 
 1  3  1  4  2
(1)(1)(1)(1)(0)

shipsSegments = [
  ['3-1'],
  [],
  ['0-4'],
  [],
  ['4-0'],
  ['0-2','2-3']
],
shipsSegmentsCount = [
  [1, 3, 2, 4, 2],
  [4, 1, 1, 2, 3]
],
shipsCount = [2, 1, 1, 1];
 */