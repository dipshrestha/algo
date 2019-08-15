 /**
 * Created by dipshrestha on 08/14/2019.
 */
/*
Good morning! Here's your coding interview problem for today.
This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
Bonus: Can you do this in one pass?
*/

class Add2toN {

	// Time: O(N^2)
	// Space: O(1)
	iterative(WM, W) {
		for (let i = 0; i < WM.length; i++) {
			for (let j = i + 1; j < WM.length; j++) {
				if (WM[i] + WM[j] == W) return true;
			}
		}
		return false;
	}

	// https://leetcode.com/problems/two-sum/solution/
	// Use a hashmap
	// Time: O(N)
	// Space: O(N)
	iterativeBest(WM, W) {
		let m = new Set();
		//WM.foreach(e => m.add(e)); --> no need to do this initially
		for (let i = 0; i < WM.length; i++) {
			if (m.has(W - WM[i])) return true;
			m.add(WM[i]);
		}
		return false;
	}
}

module.exports = Add2toN;