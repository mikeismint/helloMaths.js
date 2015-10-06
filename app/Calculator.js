// Calculator.js
(function() {

  'use strict';

  var Calculator = function() {};

  Calculator.prototype.add = function() {
    return arguments[0] + arguments[1];
  };


  module.exports = new Calculator();

}());
