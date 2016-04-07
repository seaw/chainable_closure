'use strict'

function sum(arg) {
  if (arg === undefined) {
    return 0;
  }

  return function inner(arg2){
    if (arg2 === undefined) {
      return arg;
    }
    return inner;
  };
}

module.exports = sum;