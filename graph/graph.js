class Edge {
    constructor(s, d, w=0) {
        this.s = s;
        this.d = d;
        this.w = w;
    }

    toString() {
        return "S: " + this.s + " ,D: " + this.d + " ,W: " + this.w;
    }
}

class Graph {

    constructor(edgeList) {
        this.E = 0;
        this.edges = [];
        this.V = 0;
        this.adjacencyList = new Map();
        const nodeNamesSet = new Set();

        for (var i = 0; i < edgeList.length; i++) {
            const edge = edgeList[i];
            this.E++;
            
            const s = edge[0], e = edge[1], w = edge[2]; 
            nodeNamesSet.add(s);
            nodeNamesSet.add(e);

            const edgeObj = new Edge(s, e, w);
            this.edges.push(edgeObj);

            const adjacentEdges = this.adjacencyList.get(s) || [];
            adjacentEdges.push(edgeObj);
            this.adjacencyList.set(s, adjacentEdges);
        }
        this.nodeNames = Array.from(nodeNamesSet);
        this.V = this.nodeNames.length;
    }
}

class GraphHelper {
    computePath(s, d, path) {
        const arr = [];
        let tmp = path.get(d);
        if(typeof tmp !== 'undefined') 
            arr.push(tmp);
        while(tmp!= null && tmp.s != s) {
            tmp = path.get(tmp.s);
            arr.push(tmp);
        }
        return arr.reverse();
    }
}

module.exports = {Graph, Edge, GraphHelper};