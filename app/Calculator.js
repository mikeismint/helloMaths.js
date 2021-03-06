// Calculator.js

(function() {

  'use strict';

  var Calculator = function() {
    this.precision = 12;
  };
  module.exports = new Calculator();

  /**
   * Adds together all arguments passed in
   *
   * @param arguments can consist of arrays, strings or a list of number
   *
   * @return Number - the sum of all the arguments
   */
  Calculator.prototype.add = function() {
    var result = parseFloat( "0" );

    for( var i = 0; i < arguments.length; i++ ) {

      if( Array.isArray( arguments[i] )) {
        // Copy the array and iterate through it
        var arr = arguments[i].slice();
        for( var n = 0; n < arr.length; n++ ) {
          result += arr[n];
        }

      } else if ( typeof arguments[i] === 'string' || arguments[i] instanceof String ) {
        // Convert strings to Float
        result += parseFloat(arguments[i], 10);

      } else {
        result += arguments[i];
      }

    } /* END for */

    // toPrecision call removes strange results from floating point arithmetic
    // parseFloat removes trailing zeros
    return parseFloat(result.toPrecision(this.precision), 10 );
  }; /* END ADD */


  /**
   * Subtracts all subsequent arguments from the first arugument
   *
   * @param arguments can consist of arrays, strings or a list of number
   *
   * @return the first argument minus the following arguments
   */
  Calculator.prototype.subtract = function() {
    var result;

    // Convert arguments object to an Array
    var args = Array.prototype.slice.call(arguments);

    if( Array.isArray( args[0] )) {
      result = args[0].shift();
    } else {
      result = args.shift();
    }

    for( var i = 0; i < args.length; i++ ) {

      if( Array.isArray( args[i] )) {
        // Copy the array and iterate through it
        var arr = args[i].slice();
        for( var n = 0; n < arr.length; n++ ) {
          result -= arr[n];
        }

      } else {
        result -= args[i];
      }
    }

    // toPrecision call removes strange results from floating point arithmetic
    // parseFloat removes trailing zeros
    return parseFloat(result.toPrecision(this.precision), 10 );
  }; /* END SUBTRACT */


  /**
   * Multiplies all argments
   *
   * @param arguments can consist of arrays, strings or a list of number
   *
   * @return the first argument multiplied with  the following arguments
   */
  Calculator.prototype.multiply = function() {
    var result;

    // Convert arguments object to an Array
    var args = Array.prototype.slice.call(arguments);

    if( Array.isArray( args[0] )) {
      result = args[0].shift();
    } else {
      result = args.shift();
    }

    for( var i = 0; i < args.length; i++ ) {
      if( Array.isArray( args[i] )) {
        // Copy the array and iterate through it
        var arr = args[i].slice();
        for( var n = 0; n < arr.length; n++ ) {
          result *= arr[n];
        }
      } else {
        result *= args[i];
      }
    }

    // toPrecision call removes strange results from floating point arithmetic
    // parseFloat removes trailing zeros
    return parseFloat(result.toPrecision(this.precision), 10 );
  };


  /**
   * Divides all argments
   *
   * @param arguments can consist of arrays, strings or a list of number
   *
   * @return the first argument divided by the following arguments
   */
  Calculator.prototype.divide = function() {
    var result;

    // Convert arguments object to an Array
    var args = Array.prototype.slice.call(arguments);

    if( Array.isArray( args[0] )) {
      result = args[0].shift();
    } else {
      result = args.shift();
    }

    for( var i = 0; i < args.length; i++ ) {
      result /= args[i];
    }

    return result;
  };

}());
