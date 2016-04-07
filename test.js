'use strict'

var assert = require('assert');

var sum = require('.');

describe('sum()', function() {
  it('should return a number when the argument is not present', function () {
    assert.equal('number', typeof sum());
  });

  it('should return a function when the argument is present', function () {
    assert.equal('function', typeof sum(0));
  });
});