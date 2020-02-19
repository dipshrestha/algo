const assert = require('assert');
const BishopAttack = require('../daily/68_bishopAttack.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new BishopAttack();
});

describe.skip('BishopAttack 5x5', function() {
  /*

[b 0 0 0 0]
[0 0 b 0 0]
[0 0 b 0 0]
[0 0 0 0 0]
[b 0 0 0 0]

(0, 0)
(1, 2)
(2, 2)
(4, 0)
 */
  const expected = 2;
  const N = 5;
  const WM = [
    [0, 0],
    [1, 2],
    [2, 2],
    [4, 0]
  ];
  it('Iterative-Better', function() {
    const result = algo.iterative_better(N, WM)
    assert.equal(result, expected);
  });
});

describe.skip('BishopAttack 6x6', function() {
  /*

[○ ○ × ○ ○ ○]
[○ × ○ ○ × ○]
[○ × ○ ○ ○ ○]
[○ ○ ○ ○ × ○]
[○ ○ × ○ ○ ○]
[× ○ ○ ○ × ○]


(0, 2)
(1, 1)
(1, 4)
(2, 1)
(3, 4)
(4, 2)
(5, 0)
(5, 4)
 */
  const expected = 3;
  const N = 5;
  const WM = [
    [0, 2],
    [1, 1],
    [1, 4],
    [2, 1],
    [3, 4],
    [4, 2],
    [5, 0],
    [5, 4],
  ];
  it('Iterative-Better', function() {
    const result = algo.iterative_better(N, WM)
    assert.equal(result, expected);
  });
});