const S = require('../s.js');
/**
 * Created by dipshrestha on 10/01/2018.
 */
class Tarjan extends S {
    constructor(graph) {
        super(graph);
    }

    _init() {
        super._init();
        const len = this.g.V;

        this.low = [len]; // low-link values
        this.stack = [len];
        this.ids = [len]; // all ids
        this.id = 0; // counter for each node id
        this.sccCount = 0; // count number of Strongly connected components
        for (let i = 0; i < len; i++) {
            this.low[i] = 0;
        }
    }

    _recursive(startNode) {
        if (this._visited(startNode)) return;
        this._visit(startNode);

        const indx = this.g.nodeNames.indexOf(startNode);
        this.stack.push(indx);
        this.ids[indx] = this.low[indx] = this.id++;

        const adjacentEdges = this.g.adjacencyList.get(startNode) || [];
        for (let i = 0; i < adjacentEdges.length; i++) {
            let e = adjacentEdges[i];

            this._recursive(e.d);
            const indxDest = this.g.nodeNames.indexOf(e.d);
            if (this.stack.indexOf(indx) > -1) { // contains in stack
                this.low[indx] = Math.min(this.low[indx], this.low[indxDest]);
            }
        }

        if(this.ids[indx] == this.low[indx]) {
            do {
                let pop = this.stack.pop();
                this.low[pop] = this.ids[indx];
                if (pop == indx)
                    break;
                this.sccCount++;
            } while (true)
        }
    }

    traverseRec(startNode) {
        const len = this.g.V;
        for (var i = 0; i < len; i++)
            this._recursive(startNode || this.g.nodeNames[i])
        return this.low;
    }
}

module.exports = Tarjan;