'use strict'

function chainable(current_val) {
  return function (new_arg) {
    if (new_arg === undefined) {
      return current_val
    } else {
      return chainable(current_val + new_arg);
    }
  }
}

var sum = chainable(0);

module.exports = sum;