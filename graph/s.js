// 
class S {

    constructor(graph) {
        this.g = graph;
        this._init();
    }

    _init() {
        this.path = []; // Edges
        this.visitedNodes = new Set();
    }

    _visited(node) {
        return this.visitedNodes.has(node);
    }

    _visit(node) {
        this.visitedNodes.add(node);
    }
}

module.exports = S;