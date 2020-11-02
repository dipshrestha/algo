/*

1) Encode the positions
   round = 0
   empty = -1

 top, right, bottom, left, centers

   1
 4 5 2
   3

 index 6 for -1

2) Get count of ships types
   if count = 3
    then 0: round, 1: 2 block, 2: 3 block, 3: 4 blocks based on size of ships
 

Algo: Solve using backtracking


*/

const chalk = require('chalk');

class Battleships {
  /**
   *
   * N = 2,
   * shipsSegments = [['8-4','5-7'], [], ['3-7'], [], [], ['0-4']]
   * shipsSegmentsCount = [[1,1,2,1,2,1,5,2,1,4], [4,1,1,2,0,2,2,1,5,2]]
   * shipsCount = [4, 3, 2, 1]
   * 
   * @param  {[type]} N                  board length
   * @param  {[type]} shipsSegments      position of segments for each type o ↑ → ↓ ← ■ × 
   * @param  {[type]} shipsSegmentsCount array of segments counts in x & y axises
   * @param  {[type]} shipsCount         number of segments for each type
   * @return {[type]}                    [description]
   */
  recursive(N, shipsSegments, shipsSegmentsCount, shipsCount) {
    const startTime = Date.now();

    this.V = []; // all valid finished boards
    this.V1 = []; // all row signatures of the finished board
    this.board = [];
    this.shipsSegmentsCountCurrent = [];
    this.shipsCount = shipsCount; //shipsCount.sort((a, b) => b - a);
    this.shipsSegments = shipsSegments;
    this.shipsSegmentsCount = shipsSegmentsCount;
    this._resetBoard(N);
    this._setupBoard(N);

    this._printBoard(N);
    let ret = this._recursive_helper(N);

    const endTime = Date.now();
    let diff = (endTime - startTime);
    if (diff > 1000 * 60)
      diff = (diff / (1000 * 60)) + ' min';
    else if (diff > 1000)
      diff = (diff / 1000) + ' s';
    else
      diff = diff + ' ms';
    console.log(chalk.blue(diff));

    return this.V1.length;
    //return ret;
  }

  _getRowSignature(board, i) {
    let row = '';
    for (let j = 0; j < board.length; j++) {
      row += '(' + board[i][j] + ')' + ',';
    }
    return row;
  }

  _getColumnSignature(board, j) {
    let column = '';
    for (let i = 0; i < board.length; i++) {
      column += '(' + this.board[i][j] + ')' + ',';
    }
    return column;
  }

  _getBoardSignature(board) {
    let res = [];
    for (let i = 0; i < board.length; i++) {
      let row = this._getRowSignature(board, i);
      res.push(row);
    }
    return res.join('|');
  }

  /**
   *
   * Check if board is already existing in the set of sloutions
   * 
   * @param  {[type]}  board [description]
   * @return {Boolean}       [description]
   */
  _isNewSolutionBoard(board) {
    // create string out for each row
    let signature = this._getBoardSignature(board);

    for (let b = 0; b < this.V1.length; b++) {
      let solBoard = this.V1[b];
      if (solBoard == signature) return false;
    }
    return signature;
  }


  _resetBoard(N) {
    for (let i = 0; i < N; i++) {
      this.board[i] = [];
      for (let j = 0; j < N; j++) {
        this.board[i][j] = Infinity;
      }
    }
  }

  /**
   * 
   * Filll board with shipsSegmentsCount and update shipsSegmentsCountCurrent.
   * Also fill empty column/row with -1
   * @return {[type]} [description]
   */
  _setupBoard(N) {
    this.shipsSegmentsCountCurrent[0] = [...this.shipsSegmentsCount[0]];
    this.shipsSegmentsCountCurrent[1] = [...this.shipsSegmentsCount[1]];

    this._applyShipSegments(this.shipsSegments, true);

    // fill column
    let zeros = [];
    this.shipsSegmentsCount[0].forEach((column, i) => { if (column == 0) zeros.push(i) });
    zeros.forEach(z => {
      for (var i = 0; i < this.board.length; i++) {
        this.board[i][z] = -1;
      }
    });
    // fill rows
    zeros = [];
    this.shipsSegmentsCount[1].forEach((column, i) => { if (column == 0) zeros.push(i) });
    zeros.forEach(z => {
      for (var i = 0; i < this.board.length; i++) {
        this.board[z][i] = -1;
      }
    });

    // TODO: update the shipsCount based on the given patterns available for type >0
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (this.board[i][j] == 0) this.shipsCount[0]--;
      }
    }
  }

  _applyShipSegments(shipsSegments, isInit) {
    let cell = null;
    shipsSegments.forEach((segments, i) => {
      segments.forEach((segment, j) => {
        cell = segment.split('-');
        if (cell.length < 1) return;
        this.board[cell[0]][cell[1]] = i == 6 ? -1 : i;

        if (!isInit)
          // if this is same as given by default ignore;
          if (this.shipsSegments[i].indexOf(segment) > -1) return;

        if (i == 6) return;
        this.shipsSegmentsCountCurrent[0][cell[1]]--;
        this.shipsSegmentsCountCurrent[1][cell[0]]--;
      })
    })
  }

  /**
   * 
   * Update the board and shipsSegmentsCountCurrent based on shipsSegments
   * @param  {[type]} shipsSegments [description]
   * @param  {[type]} shipType      [description]
   * @return {[type]}               [description]
   */
  _updateBoard(shipsSegments, shipType) {
    this._applyShipSegments(shipsSegments);
    this.shipsCount[shipType]--;
  }

  /**
   * 
   * Revert board to older state
   * Revet the shipsSegmentsCountCurrent as well based on shipsSegments
   * 
   * @param  {[type]} oldBoard         [description]
   * @param  {[type]} shipsSegments [description]
   * @param  {[type]} shipType      [description]
   * @return {[type]}               [description]
   */
  _revertBoard(oldBoard, shipsSegmentsCountCurrent, shipsCount) {
    // _revertBoard(oldBoard, shipsSegments, shipType) {
    for (let i = 0; i < oldBoard.length; i++)
      for (let j = 0; j < oldBoard.length; j++)
        this.board[i][j] = oldBoard[i][j];
    this.shipsSegmentsCountCurrent = shipsSegmentsCountCurrent;
    this.shipsCount = shipsCount;
  }

  _copyBoard() {
    let newBoard = [];
    for (let i = 0; i < this.board.length; i++)
      newBoard.push([...this.board[i]]);
    return newBoard;
  }

  /**
   * value ←→↑↓xo■
   * @return {[type]} [description]
   */
  _printBoard(N) {
    let row = '',
      cell = '';
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        cell = this.board[i][j];
        row += getSymbol(cell);
      }
      row += this.shipsSegmentsCount[1][i];
      row += ' (' + this.shipsSegmentsCountCurrent[1][i] + ') ';
      console.log(row);
      row = '';
    }
    console.log(' ' + this.shipsSegmentsCount[0].join('　'));
    console.log('(' + this.shipsSegmentsCountCurrent[0].join(')(') + ')');

    function getSymbol(cell) {
      switch (cell) {
        case 0:
          return ' ○ ';
        case 1:
          return ' ↑ ';
        case 2:
          return ' → ';
        case 3:
          return ' ↓ ';
        case 4:
          return ' ← ';
        case 5:
          return ' ■ ';
        case -1:
          return ' × ';
        case Infinity:
          return ' ? ';
      }
    }
  }

  /**
   * When all shipsCount are depleted and shipsSegmentsCount match
   * 
   * @return {Boolean} [description]
   */
  _isFinished() {
    for (let i = 0; i < this.shipsCount.length; i++) {
      if (this.shipsCount[i] > 0) return false;
    }

    let count = 0;
    for (let i = 0; i < this.shipsSegmentsCountCurrent[0].length; i++) {
      count = this.shipsSegmentsCountCurrent[0][i];
      if (count != 0) return false;
    }
    for (let i = 0; i < this.shipsSegmentsCountCurrent[1].length; i++) {
      count = this.shipsSegmentsCountCurrent[1][i];
      if (count != 0) return false;
    }
    return true;
  }

  /**
   *
   * Check if ship type is already exhausted
   * 
   * Check if the shipsSegmentsCountCurrent has been depleted for the given shipsSegments
   * 
   * Check if the segments counts in rows & columns matches shipsSegmentsCount
   * 
   * Check for invalid patterns
   * 
   * @return {Boolean} [description]
   */
  //recursive(N, shipsSegments, shipsSegmentsCount, shipsCount) {
  _isValid(board, shipsSegments, _shipsSegmentsCountCurrent, shipsCount, shipType, pos) {
    if (shipsCount[shipType] <= 0) return false;
    let shipsSegmentsCountCurrent = [
      [..._shipsSegmentsCountCurrent[0]],
      [..._shipsSegmentsCountCurrent[1]]
    ];

    let N = board.length,
      count = 0,
      cell = null;

    for (var i = 0; i < shipsSegments.length; i++) {
      let segments = shipsSegments[i];
      for (var j = 0; j < segments.length; j++) {
        let segment = segments[j];
        // if this is same as given by default ignore;
        if (this.shipsSegments[i].indexOf(segment) > -1) continue;
        cell = segment.split('-');
        if (cell.length < 1) continue;
        count = --shipsSegmentsCountCurrent[0][+cell[1]];
        if (count < 0)
          return false;
        count = --shipsSegmentsCountCurrent[1][+cell[0]];
        if (count < 0)
          return false;
      }
    }



    let boardRowSignature = [],
      boardColumnSignature = [];
    // check for invalid patterns in all horizontal & vertical
    let invalidPatternHorizontalAll = [
      //↑ → ↓ ← ■ ×
      // ← o, ← x, ← ↑, ← ↓
      '(4),(0)', '(4),(-1)', '(4),(1)', '(4),(3)',
      // o →, x →, ↑ →, ↓ →
      '(0),(2)', '(-1),(2)', '(1),(2)', '(3),(2)',

      // ← ←, → →
      '(4),(4)', '(2),(2)',
    ];
    let invalidPatternVerticalAll = [
      '(1),(0)', '(1),(-1)', '(1),(2)', '(1),(4)',
      '(0),(3)', '(-1),(3)', '(2),(3)', '(4),(3)',

      '(1),(1)', '(3),(3)',
    ];

    // horizontal pattern search for first/last row
    for (let i = 0; i < N; i++) {
      let row = this._getRowSignature(this.board, i), //'',
        pattern = '';
      boardRowSignature[i] = row;
      for (let j = 0; j < invalidPatternHorizontalAll.length; j++) {
        pattern = invalidPatternHorizontalAll[j];
        if (row.indexOf(pattern) > -1)
          return false;
      }
    }

    // vertical pattern search for first/last column
    for (let i = 0; i < N; i++) {
      let column = this._getColumnSignature(this.board, i),
        pattern = '';
      boardColumnSignature[i] = column;
      for (let k = 0; k < invalidPatternVerticalAll.length; k++) {
        pattern = invalidPatternVerticalAll[k];
        if (column.indexOf(pattern) > -1)
          return false;
      }
    }




    // 
    // check for invalid patterns in horizontal & vertical
    // in first and last column/row
    let invalidPatternHorizontal = [
      //↑ → ↓ ← ■ ×
      // o ■, → ■, x ■, ↑ ■, ↓ ■
      '(0),(5)', '(2),(5)', '(-1),(5)', '(1),(5)', '(3),(5)',
      // ■ o, ■ ←, ■ x, ■ ↑, ■ ↓ 
      '(5),(0)', '(5),(4)', '(5),(-1)', '(5),(1)', '(5),(3)',

      /*
      // ← o, ← x, ← ↑, ← ↓
      '(4),(0)', '(4),(-1)', '(4),(1)', '(4),(3)',
      // o →, x →, ↑ →, ↓ →
      '(0),(2)', '(-1),(2)', '(1),(2)', '(3),(2)',

      // ← ←, → →
      '(4),(4)', '(2),(2)',
      */
    ];
    let invalidPatternVertical = [
      '(0),(5)', '(2),(5)', '(-1),(5)', '(4),(5)', '(3),(5)',
      '(5),(0)', '(5),(1)', '(5),(-1)', '(5),(2)', '(5),(4)',
      /*
      '(1),(0)', '(1),(-1)', '(1),(2)', '(1),(4)',
      '(0),(3)', '(-1),(3)', '(2),(3)', '(4),(3)',

      '(1),(1)', '(3),(3)',
      */
    ];

    // horizontal pattern search for first/last row
    for (let i = 0; i < N; i += (N - 1)) {
      let row = boardRowSignature[i], //this._getRowSignature(this.board, i), //'',
        pattern = '';
      for (let j = 0; j < invalidPatternHorizontal.length; j++) {
        pattern = invalidPatternHorizontal[j];
        if (row.indexOf(pattern) > -1)
          return false;
      }
    }

    // vertical pattern search for first/last column
    for (let i = 0; i < N; i += (N - 1)) {
      let column = boardColumnSignature[i], //this._getColumnSignature(this.board, i),
        pattern = '';
      for (let k = 0; k < invalidPatternVertical.length; k++) {
        pattern = invalidPatternVertical[k];
        if (column.indexOf(pattern) > -1)
          return false;
      }
    }

    // TODO: Infer possible mistakes
    // ○  ?  ?  ?  ■  ?  ? 4 (2)
    // ○  ←  →  ?  ■  ?  ? 4 (0)
    // 
    // if ■ is present, we can assume at least 2 more places will be occupied,
    // which means there is no use of adding type 1

    // conditional invalid pattern search based on the type and shipsSegmentsCount
    // ←  →  ?  ?  ■  ?  ?  ?  ?  ? 4 (1) 
    let invalidPatternPairRow = [
      //↑ → ↓ ← ■ ×
      // type 0
      [
        ['(0)', '(Infinity),(5),(Infinity)']
      ],
      // type 1
      [
        ['(4),(2)', '(Infinity),(5),(Infinity)'],
        ['(1)', '(Infinity),(5),(Infinity)'],
      ],
      // type 2
      [
        ['(4),(5),(2)', '(Infinity),(5),(Infinity)'],
        ['(1)', '(Infinity),(5),(Infinity)'],
      ]
    ];

    let invalidPatternPairColumn = [
      //↑ → ↓ ← ■ ×
      // type 0
      [
        ['(0)', '(Infinity),(5),(Infinity)']
      ],
      // type 1
      [
        ['(1),(3)', '(Infinity),(5),(Infinity)'],
        ['(4)', '(Infinity),(5),(Infinity)'],
      ],
      // type 2
      [
        ['(1),(5),(3)', '(Infinity),(5),(Infinity)'],
        ['(4)', '(Infinity),(5),(Infinity)'],
      ]
    ];
    let pairs = invalidPatternPairRow[shipType];
    if (pairs && pairs.length > 0) {
      for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        if (pair.length < 1) break;

        for (let i = 0; i < N; i++) {
          let row = boardRowSignature[i], //this._getRowSignature(this.board, i),
            pattern = '';
          //console.log('pair', pair, ' row', row);
          if (row.indexOf(pair[0]) > -1 && row.indexOf(pair[1]) > -1) {
            let emptyPos = pair.flatMap(f => f.split(',')).filter(f => f == '(Infinity)').length;
            let total = pair.flatMap(f => f.split(',')).length;
            let net = total - emptyPos;
            let actual_col = this.shipsSegmentsCountCurrent[0][pos.j];
            let actual_row = this.shipsSegmentsCountCurrent[1][pos.i];
            if (actual_col < total || actual_row < total)
              return false
          }
        }
      }
    }

    pairs = invalidPatternPairColumn[shipType];
    if (pairs && pairs.length > 0) {
      for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        if (pair.length < 1) break;

        for (let i = 0; i < N; i++) {
          let row = boardColumnSignature[i], //this._getColumnSignature(this.board, i),
            pattern = '';
          //console.log('pair', pair, ' row', row);
          if (row.indexOf(pair[0]) > -1 && row.indexOf(pair[1]) > -1) {
            let emptyPos = pair.flatMap(f => f.split(',')).filter(f => f == '(Infinity)').length;
            let total = pair.flatMap(f => f.split(',')).length;
            let net = total - emptyPos;
            let actual_col = this.shipsSegmentsCountCurrent[0][pos.j];
            let actual_row = this.shipsSegmentsCountCurrent[1][pos.i];
            if (actual_col < total || actual_row < total)
              return false
          }
        }
      }
    }

    return true;
  }

  /**
   * 
   * diff positions for each coordinate as top(vertical) or left (horizontal)
   * Get all possible positions for all types
   * 
   * @return {[type]} [description]
   */
  _getAllPositions() {
    let positions = [
      // type 0 = round
      [
        [
          ['0-0']
        ]
      ],
      // type 1
      [
        // horizontal
        [
          [],
          [],
          ['0-1'],
          [],
          ['0-0'],
        ],
        // vertical
        [
          [],
          ['0-0'],
          [],
          ['1-0'],
        ],
      ],
      // type 2
      [
        // horizontal
        [
          [],
          [],
          ['0-2'],
          [],
          ['0-0'],
          ['0-1']
        ],
        // vertical
        [
          [],
          ['0-0'],
          [],
          ['2-0'],
          [],
          ['1-0'],
        ],
      ],
      // type 3
      [
        // horizontal
        [
          [],
          [],
          ['0-3'],
          [],
          ['0-0'],
          ['0-1', '0-2']
        ],
        // vertical
        [
          [],
          ['0-0'],
          [],
          ['3-0'],
          [],
          ['1-0', '2-0'],
        ],
      ],
    ]
    return positions;
  }

  /**
   *
   * A type can be added vertically/horizontally with top/left at any postion
   * 
   * @param  {[type]} type        [description]
   * @param  {[type]} pos {i:column , j:row } 
   * @return {[type]}             [description]
   */
  _pick(allMoves, type, pos, idx) {
    for (; idx.i < allMoves[type].length;) {
      let shipsSegments = allMoves[type][idx.i];
      idx.i++;
      // get generated positions
      let cell = null;
      var generated = new Array(shipsSegments.length);
      generated.fill([]);

      for (var i = 0; i < shipsSegments.length; i++) {
        let segments = shipsSegments[i];
        let generatedSegment = [];
        for (var j = 0; j < segments.length; j++) {
          let segment = segments[j];
          cell = segment.split('-');
          cell[0] = cell[0] * 1 + pos.i;
          cell[1] = cell[1] * 1 + pos.j;

          // if out of bounds
          if (cell[0] >= this.board.length ||
            cell[1] >= this.board.length) {
            return false;
          }

          // if already occupied by another type
          if (this.board[+cell[0]][+cell[1]] != Infinity && this.board[+cell[0]][+cell[1]] != i)
            return false;
          generatedSegment.push(cell.join('-'));
        }
        generated[i] = generatedSegment;
      }
      //console.log('type: ', type, ' - seq: ', idx.i, ' - pos: ', pos, ' - ', generated);
      return generated;
    }
    return false;

  }

  _isRowFinished(index) {
    return this.shipsSegmentsCountCurrent[1][index] <= 0;
  }

  _isColumnFinished(index) {
    return this.shipsSegmentsCountCurrent[0][index] <= 0;
  }

  _recursive_helper(N) {
    if (this._isFinished()) return 1;
    let pos = {},
      count = 0,
      shipCount = this.shipsCount.length,
      typeIndex = new Array(shipCount),
      next = false,
      oldBoard = [],
      oldShipsSegmentsCountCurrent = [],
      oldShipsCount = [];

    // get possible solutions for each types, 
    let allPositions = this._getAllPositions();

    for (var i = 0; i < typeIndex.length; i++) {
      typeIndex[i] = { i: 0 };
    }

    // you can start filling for any of the row
    for (var rowIndex = 0; rowIndex < N; rowIndex++) {

      // we can add ship to any column in the row
      for (let j = 0; j < this.board.length && rowIndex < this.board.length; j++) {

        pos = { i: rowIndex, j: j };
        //console.log('adding for pos: ', pos);

        // can't add to this cell
        if (this.board[pos.i][pos.j] == -1) continue;

        // pick ship types one by one
        for (let shipType = 0; shipType < shipCount && pos.i < N && pos.j < N; shipType++) {

          // already occupied so skip
          if (shipType == 0 && this.board[pos.i][pos.j] != Infinity) continue;

          // row already filled
          if (shipType == 0 && this._isRowFinished(rowIndex)) continue;
          // column already filled
          if (shipType == 0 && this._isColumnFinished(j)) continue;

          //debugger
          // put ship in all positions available
          //while (next = this._pick(shipType, pos, typeIndex[shipType])) {
          // break loop if 
          // * no ships left
          // * all positions exhausted
          while (this.shipsCount[shipType] > 0 && typeIndex[shipType].i < allPositions[shipType].length) {

            next = this._pick(allPositions, shipType, pos, typeIndex[shipType])
            // next position can't be generated
            if (!next) continue;

            oldBoard = this._copyBoard();
            oldShipsSegmentsCountCurrent = [
              [...this.shipsSegmentsCountCurrent[0]],
              [...this.shipsSegmentsCountCurrent[1]]
            ];
            oldShipsCount = [...this.shipsCount];
            this._updateBoard(next, shipType);
            if (this._isValid(oldBoard, next, oldShipsSegmentsCountCurrent, oldShipsCount, shipType, pos)) {
              debugger;

              // move the pointer
              let cell = null;
              let shipsSegments = allPositions[shipType][typeIndex[shipType].i - 1]
              shipsSegments.forEach((segments) => {
                segments.forEach((segment) => {
                  cell = segment.split('-');
                  if (cell.length < 1) return;
                  if (cell[0] != 0) rowIndex++;
                  if (cell[1] != 0) j++;
                })
              })


              var result = this._recursive_helper(N);
              //count += result;
              if (this._isFinished()) {
                this._printBoard(N);
                //console.log('count: ' + count, result);
                let signature = this._isNewSolutionBoard(this.board)
                if (signature) {
                  this.V1.push(signature);
                }
              }
            }
            this._revertBoard(oldBoard, oldShipsSegmentsCountCurrent, oldShipsCount);
          }
          typeIndex[shipType] = { i: 0 };
        }
      }
    }
    return count;
  }

  // TODO: should we start filling from top left with avaible ships till all ships are out
  // or should we start with objective to fill the shipsSegmentsCount
  _recursive_helper_old(N) {
    return this._fillEachRow(N);
    /*
    // you can start filling for any of the row/column
    for (var i = 0; i < N; i++) {
      // 1) get choice for row [i]/ column[i]
      // 2) updateBoard
      // 3) backtrack
      this._fillEachRow(i);
    }
    */
  }

}

module.exports = Battleships;