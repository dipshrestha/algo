const S = require('../s.js');
/**
 * Created by dipshrestha on 10/03/2018.
 */
class TSP extends S {
    constructor(graph) {
        super(graph);
    }

    _init() {
        super._init();
        const len = this.g.V;

        this.memo = [len];
        // initialize to Infinity
        for (let i = 0; i < this.g.V; i++) {
            let row = this.memo[i] = [];
            for (let j = 0; j < this.V; j++) {
                row[j] = Infinity;
            }
        }
    }

    /**
     * Initialize with optimal solution from start node to 
     * every other node
     **/
    setup(startNodeIdx) {
        for (let end = 0; end < this.g.V; end++) {
            if (end == startNodeIdx) continue;
            console.log('S:' + startNodeIdx + ', E:' + end + ', ' + this.g.adjacencyMatrix[startNodeIdx][end]);
            console.log('1 << ' + startNodeIdx + ': ' + (1 << startNodeIdx) + '| 1 << ' + end + ': ' + (1 << end));
            console.log('(1 << startNodeIdx) | (1 << end):' + ((1 << startNodeIdx) | (1 << end)) );
            this.memo[end][(1 << startNodeIdx) | (1 << end)] = this.g.adjacencyMatrix[startNodeIdx][end];
        }
    }

    notIn(i, subset) {
        return ((1 << i) & subset) == 0;
    }

    combinations(r, len) {
        let subsets = [];
        this.generateCombinations(0, 0, r, len, subsets);
        this.printSubsets(subsets);
        //console.log(subsets);
        return subsets;
    }
    printMatrix(m) {
        let str = '[\r\n';
        for (var i = 0; i < m.length; i++) {
            const row = m[i];
            let rowStr = i + ' [';
            for (var j = 0; j < row.length; j++) {
                if (row[j] == Infinity) {
                    rowStr += this.spacePad('X', 2);
                } else {
                    rowStr += this.spacePad(row[j] || "-", 2);
                }
            }
            rowStr += ']\r\n';
            str += rowStr;
        }
        str += ']'
        console.log(str)
    }

    printSubsets(subsets) {
        subsets.forEach(s => {
            console.log(this.getSubset(s));
        });
    }
    getSubset(s) {
        const binary = s.toString(2);
        return this.zeroPad(binary, 4);
    }
    /**
     * https://stackoverflow.com/questions/2998784/how-to-output-integers-with-leading-zeros-in-javascript
     */
    zeroPad(num, places) {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }
    spacePad(num, places) {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join(" ") + num;
    }
    generateCombinations(set, start, r, len, subsets) {
        if (r == 0) {
            subsets.push(set)
        } else {
            for (let i = start; i < len; i++) {
                // flip on the ith bit
                set = set | (1 << i)
                this.generateCombinations(set, i + 1, r - 1, len, subsets)

                // backtrap and flip off ith bit
                set = set & ~(1 << i)
            }
        }
    }

    findMinCost(startNodeIdx) {
        const len = this.g.V;
        const END_STATE = (1 << len) - 1;
        let minTourCost = Infinity;
        for (let end = 0; end < len; end++) {
            if (end == startNodeIdx) continue;

            let tourCost = this.memo[end][END_STATE] + this.g.adjacencyMatrix[end][startNodeIdx];
            if (tourCost < minTourCost) {
                minTourCost = tourCost;
            }
        }
        return minTourCost;
    }

    findOptimalTour(startNodeIdx) {
        const len = this.g.V;
        let lastIndex = startNodeIdx;
        let state = (1 << len) - 1;
        let tour = [];
        for (let i = len -1; i >=1; i-- ) {
            var index = -1;
            for (let j = 0; j < len; j++) {
                if (j == startNodeIdx || this.notIn(j, state)) continue;
                if (index == -1) index = j;
                let prevDist = this.memo[index][state] + this.g.adjacencyMatrix[index][lastIndex];
                let newDist = this.memo[j][state] + this.g.adjacencyMatrix[j][lastIndex];
                if (newDist < prevDist) index = j;

            }
            tour[i] = index;
            state = state ^ (1 << index);
            lastIndex = index;
        }
        tour[0] = tour[len] = startNodeIdx;
        return tour;

    }
    _iterative(startNodeIdx) {

        this.setup(startNodeIdx);
        const len = this.g.V;
        this.printMatrix(this.memo);
        // r is number of node is partially completed tour
        for (let r = 3; r <= len; r++) {
            let subsets = this.combinations(r, len);
            for (let i = 0; i < subsets.length; i++) {
                let subset = subsets[i];
                console.log(' subset: ' + subset);
                if (this.notIn(startNodeIdx, subset)) continue;
                for (let next = 0; next < len; next++) {
                    if (next == startNodeIdx || this.notIn(next, subset)) continue;
                    let subsetWithoutNext = subset ^ (1 << next);
                    console.log('   ' + subset + ' ^ (1 << ' + next + ')' + ' = ' +
                        this.getSubset(subset) + ' ^ ' + this.getSubset(1 << next) + ' = ' +
                        subsetWithoutNext + '(' + this.getSubset(subsetWithoutNext) + ')');
                    let minDist = Infinity;
                    for (let end = 0; end < len; end++) {
                        if (end == startNodeIdx || end == next || this.notIn(end, subset)) continue;
                        let newDistance = this.memo[end][subsetWithoutNext] + this.g.adjacencyMatrix[end][next];
                        console.log('     newDistance = memo[' + end +'][' + subsetWithoutNext +'] + adjacencyMatrix[' + end + '][' + next + ']='
                            + newDistance + ' = ' + this.memo[end][subsetWithoutNext] + ' + ' + this.g.adjacencyMatrix[end][next] );
                        if (newDistance < minDist) {
                            minDist = newDistance;
                        }
                    }
                    console.log('   memo[next][subset] = ' + 'memo[' + next + '][' + subset + '] = ' + minDist)
                    this.memo[next][subset] = minDist;
                }
            }
        }
        this.printMatrix(this.memo);

        var minCost = this.findMinCost(startNodeIdx);
        return [minCost, this.findOptimalTour(startNodeIdx)];
    }

    traverseIter(startNode) {
        let startNodeIdx = 0 // default
        if (startNode) {
            startNodeIdx = this.g.nodeNames.indexOf(startNode);
        }
        return this._iterative(startNodeIdx);
    }
}

module.exports = TSP;