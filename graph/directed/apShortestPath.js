const S = require('../s.js');
/**
 * Created by dipshrestha on 09/18/2018.
 */
class APShortestPath extends S {
    constructor(graph) {
        super(graph);
    }

    _init() {
        super._init();
        //this.path = [];
        const len = this.g.V;
        var dp = [len];
        this.path = [len];
        for (var i = 0; i < len; i++) {
            let row = dp[i] = [];
            let rowPath = this.path[i] = [];
            for (var j = 0; j < len; j++) {
                row[j] = this.g.adjacencyMatrix[i][j];
                if (row[j] != Infinity)
                    rowPath[j] = j;
                else
                    rowPath[j] = null;
            }
        }

        return dp;
    }

    find() {
        var dp = this._init();
        const len = this.g.V;
        for (var k = 0; k < len; k++)
            for (var i = 0; i < len; i++)
                for (var j = 0; j < len; j++) {
                    if (dp[i][j] > dp[i][k] + dp[k][j]) {
                        dp[i][j] = dp[i][k] + dp[k][j];
                        this.path[i][j] = this.path[i][k];
                    }
                }
        return [dp, this.path];
    }
}

module.exports = APShortestPath;