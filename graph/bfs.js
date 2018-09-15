const FS = require('../graph/fs.js');
//
class BFS extends FS {

    constructor(graph) {
        super(graph);
    }

    _recursive(startNode, searchNode = null) {
        if (searchNode == startNode) return true; // found !
        if (this._visited(startNode)) return;
        this._visit(startNode);
        const adjacentEdges = this.g.adjacencyList.get(startNode) || [];
        for (let i = 0; i < adjacentEdges.length; i++) {
            let e = adjacentEdges[i];
            if (this._visited(e.d)) return;
            this.path.push(e);
            if (e.d == searchNode) return true; // found !
        };
        adjacentEdges.forEach(e => {
            this._recursive(e.d, searchNode);
        });
    }

    _iterative(startNode, searchNode = null) {
        if (searchNode == startNode) return true; // found !
        if (this._visited(startNode)) return;
        const queue = [];
        while (true) {
            // get first element
            const adjacentEdges = this.g.adjacencyList.get(startNode) || [];
            adjacentEdges.forEach(e => {
                queue.push(e);
            });
            if (queue.length == 0) break;

            const e = queue.shift();
            startNode = e.d;
            if (!this._visited(startNode)) {
                this._visit(startNode);
                this.path.push(e);
                if (searchNode == e.d) return true; // found !
            }
        }
    }
}

module.exports = BFS;