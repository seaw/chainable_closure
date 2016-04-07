'use strict'

function sum(arg) {
  if (arg === undefined) {
    return 0;
  }

  return function(){
    return arg;
  };
}

module.exports = sum;