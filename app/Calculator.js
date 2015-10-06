// Calculator.js
(function() {

  'use strict';

  var Calculator = function() {};

  /**
   *
   */
  Calculator.prototype.add = function() {
    var result = 0;

    for( var i = 0; i < arguments.length; i++ ) {
      if( Array.isArray( arguments[i] )) {
        var arr = arguments[i].slice();
        for( var n = 0; n < arr.length; n++ ) {
          result += arr[n];
        }
      } else {
        result += arguments[i];
      }
    }
    return result;
  };

  module.exports = new Calculator();

}());
