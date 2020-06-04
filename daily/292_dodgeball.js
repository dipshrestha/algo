/**
 * Created by dipshrestha on 06/03/2020
 */

/*
Daily Coding Problem: Problem #292 [Hard]

Good morning! Here's your coding interview problem for today.

This problem was asked by Twitter.

A teacher must divide a class of students into two teams to play dodgeball. 
Unfortunately, not all the kids get along, and several refuse to be put on 
the same team as that of their enemies.

Given an adjacency list of students and their enemies, write an algorithm 
that finds a satisfactory pair of teams, or returns False if none exists.

For example, given the following enemy graph you should return the teams {0, 1, 4, 5} and {2, 3}.

students = {
    0: [3],
    1: [2],
    2: [1, 4],
    3: [0, 4, 5],
    4: [2, 3],
    5: [3]
}
On the other hand, given the input below, you should return False.

students = {
    0: [3],
    1: [2],
    2: [1, 3, 4],
    3: [0, 2, 4, 5],
    4: [2, 3],
    5: [3]
}

 */

/*
 Algo: 
    // create 2 groups A,B
    // for each k in keys
    //   if not visited
    //      add k and val(k) in separate groups
*/
class Dodgeball {

  // create 2 groups 1 & -1
  _get2Groups(map) {
    let group1 = [],
      group2 = [];

    let keys = [...map.keys()];
    keys.forEach(k => map.get(k) == 1 ? group1.push(k) : group2.push(k))
    return [group1, group2];
  }

  // Time: O(edges)
  // Space: O(nodes)
  iterative(adjacency) {
    let keys = [];
    for (let k in adjacency)
      keys.push(k);


    let visited = new Map();
    let mygroup = null,
      yourgroup = null;
    for (let i = 0; i < keys.length; i++) {
      let item = keys[i] * 1;
      if (mygroup = visited.get(item) || 1);
      visited.set(item, mygroup)
      yourgroup = mygroup * -1;

      let enemies = adjacency[item];
      for (let j = 0; j < enemies.length; j++) {
        let youritem = enemies[j] * 1;
        if (visited.get(youritem) == mygroup)
          return false;
        visited.set(youritem, yourgroup);
      }
    }
    console.log(visited);
    return this._get2Groups(visited);
  }

}

module.exports = Dodgeball;