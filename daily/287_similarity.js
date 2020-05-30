/**
 * Created by dipshrestha on 05/28/2020
 */

/*
Daily Coding Problem: Problem #287 [Medium]

Good morning! Here's your coding interview problem for today.

This problem was asked by Quora.

You are given a list of (website, user) pairs that represent users visiting websites.
Come up with a program that identifies the top k pairs of websites with the greatest similarity.

For example, suppose k = 1, and the list of tuples is:

[('a', 1), ('a', 3), ('a', 5),
 ('b', 2), ('b', 6),
 ('c', 1), ('c', 2), ('c', 3), ('c', 4), ('c', 5)
 ('d', 4), ('d', 5), ('d', 6), ('d', 7),
 ('e', 1), ('e', 3), ('e': 5), ('e', 6)]
Then a reasonable similarity metric would most likely conclude that a and e are the most similar,
so your program should return [('a', 'e')].


 */

/*
 Algo:
 // create matrix
 // find (similar/dissimilar) pairs between nodes
 // order then to find the most similar k based on similarity 
*/
class Similarity {


  _createMatrix(pairs) {
    const map = new Map();

    function createMap(pair) {
      const set = map.get(pair[0]) || new Set();
      set.add(pair[1]);
      map.set(pair[0], set);
    }
    pairs.forEach(pair => createMap(pair));
    return map;
  }

  _getSimilarity(map) {
    const keys = [...map.keys()];
    let s1 = null,
      s2 = null;
    let pairArr = [];

    for (let i = 0; i < keys.length; i++) {
      s1 = map.get(keys[i]);
      const setKeys = [...s1.keys()];
      let pairName = null;
      for (let j = i + 1; j < keys.length; j++) {
        pairName = keys[i] + keys[j];

        s2 = map.get(keys[j]);
        let similar = 0,
          similarity = 0;
        setKeys.forEach(k => {
          if (s2.has(k)) similar++;
        })
        similarity = similar / (s1.size + s2.size);
        pairArr.push([pairName, similarity]);

      }

    }
    return pairArr;
  }

  // Time: O(N^2)
  // Space: O(N)
  iterative(pairs, k) {

    const map = this._createMatrix(pairs);
    const similarity = this._getSimilarity(map);
    console.log(similarity);
    similarity.sort((a, b) => b[1] - a[1]);
    return similarity.slice(0, k).map(r => r[0]);
  }
}

module.exports = Similarity;