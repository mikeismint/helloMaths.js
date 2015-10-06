// Calculator.js
(function() {

  'use strict';

  var Calculator = function() {};

  Calculator.prototype.add = function() {
    var result = 0;

    for( var i = 0; i < arguments.length; i++ ) {
      result += arguments[i];
    }
    return result;
  };


  module.exports = new Calculator();

}());
