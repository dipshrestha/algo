/**
 * Created by dipshrestha on 08/26/2019 
 */

/*
Daily Coding Problem: Problem #11 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Twitter.
Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.
For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

 */


/*

 each level is a pointer to a new hash map
 [abc, abcd, abd, adb]
  a -> b -> c -> [-1,-1]
              -> d -> [-1,-1]
          > d
       d -> b

*/
class Autocomplete {

  constructor(WM) {
    this._init(WM);
  }

  _addWord(map, word) {
    if (word == null || word == '') {
      map.set(-1, -1);
      return;
      //return map;
    }
    var char = word.charAt(0); // get first char
    var childMap = map.get(char);
    if (!childMap) {
      childMap = new Map();
    }
    this._addWord(childMap, word.substr(1));
    map.set(char, childMap);
  }

  _init(WM) {
    this.map = new Map();
    // for each word
    //   for each letter find hashMap of the letter and add it to appropriate place
    var parentMap = new Map();
    for (var i = 0; i < WM.length; i++) {
      var word = WM[i];
      this._addWord(this.map, word);
    }
  }

  /**
  Traverse till the end you reach -1: return the path
   **/
  _getAll(map) {
    if (map == null || map.size == 0) return null;
    // for each of the entries in map.
    var ret = [];
    for (var [key, value] of map.entries()) {
      if (value == -1) {
        ret.push('');
        continue;
      }
      var x = this._getAll(value);

      for (var i = 0; i < x.length; i++) {
        var y = x[i];
        ret.push(key + y);
      }
    }
    return ret;
  }

  // time: O(N)
  // space: O(N) -- stack call
  recursive(searchString) {
    var s = this._getAll(this._recursive_helper(this.map, searchString));
    return s.map(f => searchString + f);
  }

  _recursive_helper(map, searchString) {
    if (map == null || map.size == 0) return null;
    if (searchString == null || searchString == '') return map;
    var char = searchString.charAt(0); // get first char
    var childMap = map.get(char);
    var res = this._recursive_helper(childMap, searchString.substr(1)); // excluding the first one
    return res;
  }
}

module.exports = Autocomplete;