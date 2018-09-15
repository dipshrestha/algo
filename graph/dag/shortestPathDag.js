const TopSort = require('../topSort.js');
/**
 * Created by dipshrestha on 09/15/2018.
 */
class ShortestPathDAG extends S {
    constructor(graph) {
        super(graph);
    }

    _init() {
        super._init();
        this.path = new Map();
        var dist = new Map();
        for (var i = 0; i < this.g.nodeNames.length; i++) {
            dist.set(this.g.nodeNames[i], Infinity);
        }
        return dist;
    }


    find(s, d) {
        if (this.g == null || this.g.V <= 0 || this.g.E <= 0) return null;

        var dist = this._init();
        dist.set(s, 0); // init src

        const sort = new TopSort(this.g);
        var sortedPath = sort.traverseRec(s, d);
        const adjacentEdges = this.g.adjacencyList.get(s) || [];

        while (sortedPath.length > 0) {
            var e = sortedPath.unshift();
            if (e.d == d) break; // found !
            
            adjacentEdges.forEach(e => {
                var newW = dist.get(e.s) + e.w;
                if (newW < dist.get(e.d)) {
                    dist.set(e.d, newW);
                    this.path.set(e.d, e);
                }
            });
        }
        return [dist.get(d), this.path];
    }

    dijkstra(s, d) {
        function findNextNode(queue) {
            //return queue.shift();
            // find first index of edges starting with s.
            var least = 0;
            for (var i = 0; i < queue.length; i++) {
                var e = queue[i];
                if (queue[least].w > e.w)
                    least = i;
            }
            return queue.splice(least, 1)[0];
        }

        if (this.g == null || this.g.V <= 0 || this.g.E <= 0) return null;

        var dist = this._init();
        dist.set(s, 0); // init src

        const queue = [];
        queue.push({ s: s, d: s, w: 0 });
        while (queue.length > 0) {
            const e = findNextNode(queue);
            this._visit(e.s);
            if (e.d == d) break; // found it!

            s = e.d;
            const adjacentEdges = this.g.adjacencyList.get(s) || [];
            adjacentEdges.forEach(e => {
                if (!this._visited(e.d)) {
                    var newW = dist.get(e.s) + e.w;
                    if (newW < dist.get(e.d)) {
                        dist.set(e.d, newW);
                        // if indexed priority queue was used this wouldn't result into addition
                        // of new node, rather it'll update
                        queue.push({ s: e.s, d: e.d, w: newW });
                        this.path.set(e.d, e);
                    }
                }
            });

        }

        return [dist.get(d), this.path];
    }

}

module.exports = ShortestPathDAG;