'use strict'

function chainable(current_val) {
  return (new_arg) =>
    (new_arg === undefined) ? current_val : chainable(current_val + new_arg);
}

var variants = {
  'new closure every time': chainable(0)
}

module.exports = variants;
