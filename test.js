'use strict'

var assert = require('assert');

var chainable = require('.');

describe('chainable sum()', function() {
  var sum = chainable(0, (x, y) => x + y);

  describe('returned type', function () {
    it('should return a number when the argument is not present', function () {
      assert.equal('number', typeof sum());
    });

    it('should return a function when the argument is present', function () {
      assert.equal('function', typeof sum(0));
    });

    it('returned function should behave in the same way', function () {
      var f = sum(0);
      assert.equal('number', typeof f());
      assert.equal('function', typeof f(0));
    });

    it('could make chained call as many as wanted', function () {
      var f = sum(0)(0)(0);
      assert.equal('number', typeof f());
      assert.equal('function', typeof f(0));
    });
  });

  describe('returned value', function () {
    it('should return 0 when called without arguments directly', function () {
      assert.equal(0, sum());
    });

    it('should return the same value when called with arguments one times', function () {
      assert.equal(3, sum(3)());
    });

    it('should return sum of each arguments when called with arguments multiple times', function () {
      assert.equal(7, sum(3)(4)());
      assert.equal(12, sum(3)(4)(5)());
    });
  });

  describe('returned closure', function () {
    it('should be reusable', function () {
      var f = sum(3)(4);
      assert.equal(7, f());
      assert.equal(12, f(5)());
      assert.equal(10, f(3)());
    });
  });

});
