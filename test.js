'use strict'

var assert = require('assert');

var sum = require('.');

describe('sum()', function() {
  describe('return type', function () {
    it('should return a number when the argument is not present', function () {
      assert.equal('number', typeof sum());
    });

    it('should return a function when the argument is present', function () {
      assert.equal('function', typeof sum(0));
    });
  })

  describe('return value', function () {
    it('should return 0 when called without arguments directly', function () {
      assert.equal(0, sum());
    });

    it('should return the same value when called with arguments one times', function () {
      assert.equal(3, sum(3)());
    });
  })
});