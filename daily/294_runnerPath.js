/**
 * Created by dipshrestha on 06/08/2020
 */

/*
Daily Coding Problem: Problem #294 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Square.
A competitive runner would like to create a route that starts and ends at his house, 
with the condition that the route goes entirely uphill at first, and then entirely downhill.
Given a dictionary of places of the form {location: elevation}, 
and a dictionary mapping paths between some of these locations to their corresponding distances, 
find the length of the shortest route satisfying the condition above. 
Assume the runner's home is location 0.
For example, suppose you are given the following input:

elevations = {0: 5, 1: 25, 2: 15, 3: 20, 4: 10}
paths = {
    (0, 1): 10,
    (0, 2): 8,
    (0, 3): 15,
    (1, 3): 12,
    (2, 4): 10,
    (3, 4): 5,
    (3, 0): 17,
    (4, 0): 10
}
In this case, the shortest valid path would be 0 -> 2 -> 4 -> 0, with a distance of 28.

 */

/*
 Algo:
 Recursive:
    for each adjacent node from source
        until it reached the destination or there is no route to destination
            find the distance till destination with the conditions met (no V shape)
    return the min from all the distances

 DP:
    similar to DP of ShortestPath
    for each node
        for each adjacent node (k) such that k meets conditions (no V shape)
            if(dist(k) > dist(before) + dist(current)) then
                dist(k) = dist(before) + dist(current)

*/
class RunnerPath {

  // Time: O(V.E)
  // Space: O(E)
  dp(path, elevations, start = 0, end = 0) {
    const adjacencyList = this._createAdjacency(path);
    const beforeList = new Map();
    const distList = new Map();

    distList.set(0,0);

    for (var k of adjacencyList.entries()) {
      let current = k[0];
      let before = beforeList.get(current);

      let edges = adjacencyList.get(current); // or k[1];
      let dist = null,
        next = null,
        localDist = 0,
        subDist = 0;
      for (let j = 0; j < edges.length; j++) {
        next = edges[j];
        dist = distList.get(next) || Infinity;
        if (this._isVshape(before, current, next, elevations))
          continue;
        // get distance to next
        localDist = path[current + '-' + next];
        subDist = localDist + distList.get(current);
        if (dist > subDist) {
          dist = subDist;
          beforeList.set(next, current);
        }
        distList.set(next, dist);
      }
    }
    console.log(distList);
    return distList.get(start);
  }

  // Time: O(N^2)
  // Space: O(E)
  recursive(path, elevations, start = 0, end = 0) {
    // create adjacencyList
    const adjacencyList = this._createAdjacency(path);
    const ret = this._recursive_helper(path, elevations, adjacencyList, null, start, end, {})
    return ret;
  }

  /**
   *
   * Create a map with list of adjacent nodes for each node
   */
  _createAdjacency(path) {
    const map = new Map();
    const keys = Object.keys(path);
    keys.forEach(k => {
      const [src, dst] = k.split('-');
      if (!map.get(src * 1)) {
        map.set(src * 1, []);
      }
      map.get(src * 1).push(dst * 1);
    });
    return map;
  }

  _isVshape(before, current, next, elevations) {
    if (!before && elevations[next] < elevations[current]) return false;
    return elevations[before] > elevations[current] && elevations[next] > elevations[current];
  }

  // - not visited
  // - doesn't make V shape
  _getNext(elevations, adjacencyList, before, current, END, visited) {
    if (visited[current] && current == END) return null;
    // get all adjacency for current
    const list = adjacencyList.get(current);
    if (!list) return false;
    const ret = list.filter(next => !visited[next] && !this._isVshape(before, current, next, elevations));
    return ret.length > 0 ? ret[0] : null;
  }

  _recursive_helper(path, elevations, adjacencyList, before, current, END, visited) {
    console.log(before, current, END, visited);

    if (before != null) {
      visited[current] = 1;
      if (current == END) {
        return 0;
      }
    }

    let dist = Infinity,
      next = null,
      localDist = 0,
      subDist = 0;
    while (true) {
      next = this._getNext(elevations, adjacencyList, before, current, END, visited);
      if (next == null) break;
      // get distance to next
      localDist = path[current + '-' + next];
      subDist = localDist + this._recursive_helper(path, elevations, adjacencyList, current, next, END, { ...visited });
      visited[next] = 1;
      console.debug(' >>', dist, localDist, subDist);
      dist = Math.min(dist, subDist);
    }
    return dist;
  }

  _recursive_helper1(path, elevations, adjacencyList, before, current, END, visited) {
    console.log(before, current, END, visited);
    if (before != null && current == END)
      return path[before + '-' + current];
    visited.add(current);
    let dist = 0,
      next = null;
    do {
      next = this._getNext(elevations, adjacencyList, before, current, END, visited);
      dist = Math.max(dist, this._recursive_helper(path, elevations, adjacencyList, current, next, END, visited));
    } while (typeof next !== 'undefined' && next != END);
    //visited.delete(current);
    console.log('ret: ' + dist);
    return dist;
  }


}

module.exports = RunnerPath;