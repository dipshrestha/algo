/**
 * Created by dipshrestha on 09/06/2019
 */

/*
Daily Coding Problem: Problem #22 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Microsoft.
Given a dictionary of words and a string made up of those words (no spaces), 
return the original sentence in a list. If there is more than one possible reconstruction, 
return any of them. If there is no possible reconstruction, then return null.
For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", 
you should return ['the', 'quick', 'brown', 'fox'].
Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", 
return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

 */

/**
 * Created by dipshrestha on 09/06/2019
 */

/*
Daily Coding Problem: Problem #22 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Microsoft.
Given a dictionary of words and a string made up of those words (no spaces), 
return the original sentence in a list. If there is more than one possible reconstruction, 
return any of them. If there is no possible reconstruction, then return null.
For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", 
you should return ['the', 'quick', 'brown', 'fox'].
Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", 
return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

 */

class OriginalSentence {

  constructor() {
    this._init();
  }

  _init() {
    this.V = [];
  }
  // Prints all possible word breaks of given string 
  recursive(WM, str) {
    // initialize dictionary 
    this.WM = WM;
    // last argument is prefix 
    this.wordBreakUtil(str, str.length, "", []);
    return this.V;
  }

  /*

  // Didn't do this way
    _recursive_helper(WM, str) {
      if (str == null || str.length == 0) return null;
      if (str.length == 1 && this.dictionaryContains(prefix)) {
        return true;
      }
      for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (this._recursive_helper(WM, str.substr(i + 1, str.length))) {
          var val = this._recursive_helper(WM, str.substr(i, str.length))
        }
      }
    }
  */

  dictionaryContains(prefix) {
    return this.WM.indexOf(prefix) > -1;
  }

  // result store the current prefix with spaces 
  // between words 
  wordBreakUtil(str, n, resultArr) {
    //Process all prefixes one by one 
    for (var i = 1; i <= n; i++) {
      //extract substring from 0 to i in prefix 
      var prefix = str.substr(0, i);

      // if dictionary contains this prefix, then 
      // we check for remaining string. Otherwise 
      // we ignore this prefix (there is no else for 
      // this if) and try next 
      if (this.dictionaryContains(prefix)) {
        // if no more elements are there, print it 
        if (i == n) {
          // add this element to previous prefix 
          resultArr.push(prefix);
          this.V = resultArr;
          //console.log(result); //print result 
          return;
        }
        this.wordBreakUtil(str.substr(i, n - i), n - i, [...resultArr, prefix]);
      }
    } //end for 
  } //end function 

}

module.exports = OriginalSentence;