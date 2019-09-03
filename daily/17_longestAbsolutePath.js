/**
 * Created by dipshrestha on 08/31/2019
 */

/*
Daily Coding Problem: Problem #17 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Suppose we represent our file system by a string in the following manner:
The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

dir
    subdir1
    subdir2
        file.ext
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. 
subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.
We are interested in finding the longest (number of characters) absolute path to a file within our file system. 
For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).
Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

Note:
The name of a file contains at least a period and an extension.
The name of a directory or sub-directory will not contain a period.
 */

class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  addChild(child) {
    this.children.push(child)
  }
}

class LongestAbsolutePath {

  constructor() {
    this.maxLength = 0;
  }

  _isFile(fName) {
    return fName.indexOf('.') > -1;
  }

  _findLength(charArr, depthArr, depth) {
    var s = 0;
    if (this._isFile(charArr)) {
      s = charArr.length;
      for (var j = 0; j < depth; j++) s += (depthArr[j] + 1);
    }
    return s;
  }

  // Time: O(N)
  // Space: O(N) worst case
  iterative(str) {
    var char = null,
      depth = 0,
      depthArr = [],
      charArr = [];
    for (var i = 0; i < str.length; i++) {
      char = str[i];
      if (char == '\n') { // file has changed, it's time to count the characters
        depthArr[depth] = charArr.length;
        this.maxLength = Math.max(this.maxLength, this._findLength(charArr, depthArr, depth))
        charArr = []; // reset
        depth = 0;
      } else if (char == '\t') { // increase depth counter
        depth++;
      } else {
        charArr.push(char);
      }
    }
    return Math.max(this.maxLength, this._findLength(charArr, depthArr, depth));
  }

  /**
  Didn't complete the recursive way.
  */
  recursive(str) {
    str = str.replace('\n', '');
    //_recursive_helper(str, '', '\t');

    return null;
  }

  /*
    _recursive_helper(node, parent, startIdx, delimiter) {
      if (node == null) return 0;
      // find all the children
      var startIdx = 0,
        child = null,
        childIndex = 0,
        childLength = 0;
      while (i != node.length) {
        childIndex = node.indexOf(delimiter);
        if (childIndex == -1) break;

        child = node.substring(startIdx, childIndex);
        if (this._isFile(child)) {
          childLength = parent + 1 + child.length;
          this.maxLength = Math.max(this.maxLength, childLength);
          continue;
        }
        _recursive_helper(node, child.length, childIndex, delimiter + '\t');
      }
    }
    */
  /*
    _recursive_helper(node, parent, delimiter) {
      var len = 0;
      if (node.)
        if (_isFile(node)) {
          // calculate the length
          len = node.length + 1 + parent;
          this.maxLength = Math.max(maxLength, len);
          return;
        }
      // get all the child nodes
      var all = node.split(delimiter)
      var parent = all[0];
      var children = parent.shift();
      for (var i = 0; i < children.length; i++) {
        var child = children[0];
        this._recursive_helper(child, parent, delimiter);
      }
    }
  */
}

module.exports = LongestAbsolutePath;