const S = require('../s.js');
/**
 * Created by dipshrestha on 08/14/2018.
 */
class ShortestDistance extends S {
    constructor(graph) {
        super(graph);
    }

    _init() {
        super._init();
        var dist = new Map();
        for (var i = 0; i < this.g.nodeNames.length; i++) {
            dist.set(this.g.nodeNames[i], Infinity);
        }
        return dist;
    }
    /**
     * http://www.geeksforgeeks.org/dynamic-programming-set-23-bellman-ford-algorithm/
     *
     * Viewo explanation
     * https://www.youtube.com/watch?v=-mOEd_3gTK0&list=PLrmLmBdmIlpu2f2g8ltqaaCZiq6GJvl1j&index=6
     *
     * <p>
     * Modified to return only the shortest distance between s & d.
     * The s doesn't have to be the first in edge list.
     *
     * @param graph
     * @param s source
     * @param d destination
     * @return
     */
    dp(s, d) {

        if (this.g == null || this.g.V <= 0 || this.g.E <= 0) return null;

        var dist = this._init();
        dist.set(s, 0); // init src

        for (var i = 0; i < this.g.V; i++) {
            for (var j = 0; j < this.g.E; j++) {
                var e = this.g.edges[j];
                var u = e.s;
                var v = e.d;
                var w = e.w;

                if (dist.get(u) != Infinity) {
                    var newW = dist.get(u) + w;
                    if (newW < dist.get(v))
                        dist.set(v, newW);
                }
            }
        }

        return dist.get(d);
    }


    dijkstra(s, d) {
        /**
        Implement better with min heap
        */
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
            //console.log(e);
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
                    }
                }
            });

        }

        return dist.get(d);
    }

    dijkstra_old(s, d) {

        function findNextNode(queue, s) {
            //return queue.shift();
            // find first index of edges starting with s.
            var least = null;
            for (var i = 0; i < queue.length; i++) {
                var e = queue[i];
                if (e.s == s) {
                    if (least == null) least = i;
                    break;
                }
            }

            // item not found, so get the last
            if (least === null) {
                var peek = queue[queue.length - 1];
                return findNextNode(queue, peek.s);
            }

            ///*
            // find the node with least weight
            for (var i = 1; i < queue.length; i++) {
                var e = queue[i];
                if (e.s == s && queue[least].w > e.w)
                    least = i;
            }
            //*/
            return queue.splice(least, 1)[0];
        }

        if (this.g == null || this.g.V <= 0 || this.g.E <= 0) return null;

        var dist = this._init();
        dist.set(s, 0); // init src

        const queue = [];
        debugger
        while (true) {
            // get first element
            if (s != d) {
                const adjacentEdges = this.g.adjacencyList.get(s) || [];
                adjacentEdges.forEach(e => {
                    if (!this._visited(e.d)) {
                        queue.push(e);
                        if (dist.get(e.s) != Infinity) {
                            var newW = dist.get(e.s) + e.w;
                            if (newW < dist.get(e.d))
                                dist.set(e.d, newW);
                        }
                    }
                });
            }

            if (queue.length == 0) break;

            //console.log("--before--" + queue);
            const e = findNextNode(queue, s);
            //console.log("--after --" + queue);
            s = e.d;
            if (!this._visited(e.s)) {
                this._visit(e.s);
            }
            if (!this._visited(s)) {
                this._visit(s);
                this.path.push(e);
                //if (d == s) break; // found !
            }
        }

        return dist.get(d);
    }
}

module.exports = ShortestDistance;