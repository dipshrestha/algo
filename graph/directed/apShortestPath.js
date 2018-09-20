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
        this.path = [];
        const len = this.V;
        var dp = [len][len];
        for (var i = 0; i < len; i++)
            for (var j = 0; j < len; j++) {
                //dp[i][j] = this.g.adjacencyMatrix[i][j];
                //if (this.g.adjacencyMatrix[i][j] == undefined) {
                //    this.g.adjacencyMatrix[i][j] = Infinity;
                //}
            }

        return dp;
    }

    find() {
        debugger
        var dp = this._init();
        const len = this.V;
        for (var k = 0; k < len; k++)
            for (var i = 0; i < len; i++)
                for (var j = 0; j < len; j++) {
                    if (dp[i][j] > dp[i][k] + dp[k][j]) {
                        dp[i][j] = dp[i][k] + dp[k][j];

                    }
                }
        return dp;
    }
}

module.exports = APShortestPath;