
const FS = require('../graph/fs.js');
//
class TopSort extends FS{

    constructor(graph) {
        super(graph);
    }

    _recursive(startNode, searchNode) {
        debugger
        if (searchNode == startNode) return true; // found !
        if (this._visited(startNode)) return;
        this._visit(startNode);

        const adjacentEdges = this.g.adjacencyList.get(startNode) || [];
        for (let i = 0; i < adjacentEdges.length; i++) {
            let e = adjacentEdges[i];
            const isFound = this._recursive(e.d, searchNode);
            this.path.push(e);
            if (isFound) return true;
        }
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
        return this.path.reverse();
    }
}

module.exports = TopSort;