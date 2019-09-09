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

  // Prints all possible word breaks of given string 
  recursive(WM, str) {
    debugger;
    // initialize visited matrix
    this.WM = WM;
    // last argument is prefix 
    this.wordBreakUtil(str, str.length, "");
  }

  dictionaryContains(prefix) {
    return this.WM.indexOf(prefix) > -1;
  }

  // result store the current prefix with spaces 
  // between words 
  wordBreakUtil(str, n, result) {
    //Process all prefixes one by one 
    for (var i = 1; i <= n; i++) {
      //extract substring from 0 to i in prefix 
      var prefix = str.substr(0, i);

      // if dictionary conatins this prefix, then 
      // we check for remaining string. Otherwise 
      // we ignore this prefix (there is no else for 
      // this if) and try next 
      if (this.dictionaryContains(prefix)) {
        // if no more elements are there, print it 
        if (i == n) {
          // add this element to previous prefix 
          result += prefix;
          console.log(result); //print result 
          return;
        }
        this.wordBreakUtil(str.substr(i, n - i), n - i,
          result + prefix + " ");
      }
    } //end for 
  } //end function 

}

module.exports = OriginalSentence;