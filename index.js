'use strict'

function closure_maker() {
  var result = 0;

  return function closure(val) {
    if (val === undefined) {
      return result;
    }

    result += val;

    return closure;
  };
}

function sum(init_val) {
  var closure = closure_maker();

  return closure(init_val);
}

module.exports = sum;