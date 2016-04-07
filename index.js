'use strict'

function chainable(current_val) {
  return (new_arg) =>
    (new_arg === undefined) ? current_val : chainable(current_val + new_arg);
}

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

var variants = {
  'new closure every time': chainable(0),
  'reuse closure': sum,
}

module.exports = variants;
