const S = require('./s.js');
// parent of BFS, DFS
// contains common properties
class FS extends S {

    constructor(graph) {
        super(graph);
    }

    traverseIter(startNode, searchNode = null) {
        this._init();
        if (!this.g) return this.path;
        if (!startNode) {
            // get first node
            startNode = Array.from(this.g.nodeNames)[0];
            console.log('No starting node supplied, starting with node: ' + startNode);
        }
        this._iterative(startNode, searchNode);
        return this.path;
    }

    traverseRec(startNode, searchNode = null) {
        this._init();
        if (!this.g) return this.path;
        if (!startNode) {
            // get first node
            startNode = Array.from(this.g.nodeNames)[0];
            console.log('No starting node supplied, starting with node: ' + startNode);
        }
        this._recursive(startNode, searchNode);
        return this.path;
    }
}

module.exports = FS;