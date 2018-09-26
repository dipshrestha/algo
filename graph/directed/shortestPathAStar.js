const S = require('../s.js');
/**
 * Created by dipshrestha on 09/06/2018.
 */
class ShortestPathAStar extends S {
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

    dijkstra(s, d, distance) {
        function findNextNode(queue) {
            //return queue.shift();
            // find first index of edges starting with s.
            var least = 0;
            for (var i = 0; i < queue.length; i++) {
                var e = queue[i];
                if (queue[least].w + distance[queue[least].d] > e.w + distance[e.d])
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
            //console.log("next edge: " + e.s);
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

module.exports = ShortestPathAStar;