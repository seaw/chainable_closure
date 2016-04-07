'use strict'

function sum(arg) {
  if (arg === undefined) {
    return 0;
  }

  var result = arg;

  return function inner(arg2){
    if (arg2 === undefined) {
      return result;
    }
    result += arg2;
    return inner;
  };
}

module.exports = sum;