
const FS = require('../graph/fs.js');
//
class DFS extends FS{

    constructor(graph) {
        super(graph);
    }

    _recursive(startNode, searchNode) {
        if (searchNode == startNode) return true; // found !
        if (this._visited(startNode)) return;
        this._visit(startNode);

        const adjacentEdges = this.g.adjacencyList.get(startNode) || [];
        for (let i = 0; i < adjacentEdges.length; i++) {
            let e = adjacentEdges[i];
            this.path.push(e);
            const isFound = this._recursive(e.d, searchNode);
            if (isFound) return true;
        }
    }

    _iterative(startNode, searchNode) {
        if (searchNode == startNode) return true; // found !
        if (this._visited(startNode)) return;
        const stack = [];
        while (true) {
            // get first element
            const adjacentEdges = this.g.adjacencyList.get(startNode) || [];
            adjacentEdges.forEach(e => {
                stack.push(e);
            });
            if (stack.length == 0) break;

            const e = stack.pop();
            startNode = e.d;

            if (!this._visited(startNode)) {
                this._visit(startNode);
                this.path.push(e);
                if(searchNode == e.d) return true; // found !
            }
        }
    }
}

module.exports = DFS;