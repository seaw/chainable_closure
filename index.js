'use strict'

var chainable = (current_val) =>
    (new_arg) =>
      (new_arg === undefined) ? current_val : chainable(current_val + new_arg)

module.exports = chainable(0);
