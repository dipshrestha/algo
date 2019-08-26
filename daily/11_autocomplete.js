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

class Autocomplete {

  constructor(WM) {
    this._init(WM);
  }

  _addWord(parentMap, word) {
    if (word == null || word == '') return -1;
    if (word.length == 1) {
      var childMap = parentMap.get(word[i]);
      if (childMap) {
        return childMap;
      }
      childMap = new Map();
      childMap.set(word[i], childMap);
      return childMap;
    } else {
      var lastChar = word.substr(-1);
      var childMap = this._addWord(parentMap.get(), word.substr(-1));
      parentMap.set()
    }
  }

  _init(WM) {

    // for each word
    //   for each letter find hashMap of the letter and add it to appropriate place
    var parentMap = new Map();
    for (var i = 0; i < WM.length; i++) {
      var word = WM[i];
      /*
      for (var j = 0; j < word.length; i++) {
        var letter = word[i];
        var childMap = parentMap.has(letter)
        if (childMap) {
          childMap.push(letter, letter);

        }
        childMap = new Map();
        childMap.push(letter, new Map())
      }*/
    }
  }


  _getAll() {

  }

  recursive(maps, searchString) {
    // find inside the child
    while (searchString != null) {
      var s = searchString[i];
      if (maps.has(s)) {
        maps = maps.get(s);
      }
    }
    return _getAll(maps);
  }

}

module.exports = Autocomplete;