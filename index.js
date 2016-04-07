'use strict'

function chainable(init, f) {
  var c = (arg) => (next) => (next === undefined) ? arg : c(f(arg, next), f);
  return c(init);
}

module.exports = chainable;
