/**
 * Created by dipshrestha on 06/18/2020
 */

/*
Daily Coding Problem: Problem #297 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Amazon.

At a popular bar, each customer has a set of favorite drinks, 
and will happily accept any drink among this set. For example, 
in the following situation, customer 0 will be satisfied with drinks 0, 1, 3, or 6.

preferences = {
    0: [0, 1, 3, 6],
    1: [1, 4, 7],
    2: [2, 4, 7, 5],
    3: [3, 2, 5],
    4: [5, 8]
}

A lazy bartender working at this bar is trying to reduce his effort 
by limiting the drink recipes he must memorize. Given a dictionary input such as the one above, 
return the fewest number of drinks he must learn in order to satisfy all customers.

For the input above, the answer would be 2, as drinks 1 and 5 will satisfy everyone.

 */

/*

drinks = {
    0: [0],
    1: [0, 1],
    2: [      2, 3],
    3: [0,       3],
    4: [   1, 2],
    5: [      2, 3, 4],
    6: [0],
    7: [   1, 2],
    8: [            4]
}
 Algo: Solve using backtracking
 * 1) It's easier to have isFinished() & isValid()
 * 2) Make copy of only thing that changes while recursion
 * 3) Have a global variable(like this.V) to track
 * 4) Use the index of Length as starting point of the iterator i
 *
 * 
*/
class Bartender {

  constructor() {
    this.V = Infinity;
  }
  // Time: O(2^N)
  // Space: O(N)

  _changeToDrinks(customers) {
    var drinks = [];
    customers.forEach((c, i) => {

      c.forEach(d => {
        if (!drinks[d]) {
          drinks[d] = [];
        }
        drinks[d].push(i)
      });
    });
    // make unique
    var ret = drinks.map(d => [...new Set(d)]);
    return ret;
  }

  recursive(customers) {
    // change to drinks
    var drinks = this._changeToDrinks(customers);
    var res = this._recursive_helper(drinks, customers, []);
    return this.V;
  }

  _getVisitedCustomers(drinks, drinkList) {
    // compose drinks
    let visitedCustomers = [];
    drinkList.forEach(d => visitedCustomers.push(...drinks[d]));
    var set = new Set(visitedCustomers);
    return set;
  }

  /**
   * A drink is valid if all of it's customers aren't visited yet
   */
  _isValid(drinkCustomers, visitedCustomers) {
    return drinkCustomers.some(f => !visitedCustomers.has(f));
  }

  /**
   * It's finished when all of the customers are visited
   */
  _isFinished(customers, visitedCustomers) {
    return customers.length == visitedCustomers.size;
  }

  // instead of pos, use drinkList size
  _recursive_helper(drinks, customers, drinkList) {
    if (this._isFinished(customers, this._getVisitedCustomers(drinks, drinkList))) {
      return drinkList.length;
    }

    for (var i = drinkList.length; i < drinks.length; i++) {
      var d = drinks[i];
      var visitedCustomers = this._getVisitedCustomers(drinks, drinkList);
      drinkList.push(i);
      if (this._isValid(d, visitedCustomers)) {
        var ret = this._recursive_helper(drinks, customers, [...drinkList]);
        if (this._isFinished(customers, this._getVisitedCustomers(drinks, drinkList))) {
          if (ret < this.V) {
            this.V = ret;
            console.log(drinkList);
          }
        }
      }
      drinkList.pop();
    }
    return drinkList.length;
  }

}

module.exports = Bartender;