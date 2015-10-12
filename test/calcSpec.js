var should = require( 'chai' ).should();
var calc = require( '../app/Calculator' );

describe("Calculator", function() {

  describe("#Add", function() {
    it('should return the arguement when ther is only one', function() {
      calc.add( 1 ).should.equal( 1 );
      calc.add( 10 ).should.equal( 10 );
      calc.add( -548 ).should.equal( -548 );
      calc.add( 1.0 ).should.equal( 1.0 );
      calc.add( -54.8 ).should.equal( -54.8 );
    });

    it('should add together two numbers', function() {
      calc.add( 1, 1 ).should.equal( 2 );
      calc.add( 2, 4 ).should.equal( 6 );
      calc.add( 10, 10 ).should.equal( 20 );
      calc.add( 2, 4 ).should.equal( 6 );
      calc.add( 10, -10 ).should.equal( 0 );
      calc.add( -2, -4 ).should.equal( -6 );
    });

    it('should add together all arguments passed', function() {
      calc.add( 1, 3, 5 ).should.equal( 9 );
      calc.add( 2, 4, 6 ).should.equal( 12 );
      calc.add( 1, 1, 1, 1 ).should.equal( 4 );
      calc.add( 3 , 10, 8, 1 ).should.equal( 22 );
      calc.add( 1, -3, 5 ).should.equal( 3 );
    });

    it('should add together contents of an array as an argument', function() {
      calc.add([ 1, 1 ]).should.equal( 2 );
      calc.add([ 1, 1, 1, 1, 1 ]).should.equal( 5 );
      calc.add([ 3, 4, 5 ]).should.equal( 12 );
      calc.add([ 7, 2, 1 ]).should.equal( 10 );
    });

    it('should add numbers together if they some passed as strings', function() {
      calc.add( "1", "1", "1" ).should.equal( 3 );
      calc.add( "22", "5" ).should.equal( 27 );
      calc.add( "1", 1, "1" ).should.equal( 3 );
      calc.add( 5, 1.5, "2.5" ).should.equal( 9 );
    });

    it('should add arguments when arrays are mixed with single elements', function() {
      calc.add(1, [1, 1]).should.equal( 3 );
      calc.add(1, 1, [1]).should.equal( 3 );
      calc.add([ 1, 1, 1], 1 ).should.equal( 4 );
      calc.add([ 1, 1 ], [ 1, 1 ]).should.equal( 4 );
    });

    it('should correctly add floating point numbers', function() {
      calc.add( 1.0, 10 ).should.equal( 11 );
      calc.add( -7.3, 27 ).should.equal( 19.7 );
      calc.add( -2, 0.4, 6 ).should.equal( 4.4 );
      calc.add( 1.0, 1.0, 1.0, 1.0 ).should.equal( 4.0 );
      calc.add( -3,  -10, 8.2, -1 ).should.equal( -5.8 );
    });
  }); /* END #ADD TESTS */


  describe('#Subtract', function() {
    it('should return the argument as entered if only one argumnet exists',  function() {
      calc.subtract( 1 ).should.equal( 1 );
      calc.subtract( 10 ).should.equal( 10 );
      calc.subtract( -548 ).should.equal( -548 );
      calc.subtract( 1.0 ).should.equal( 1.0 );
      calc.subtract( -54.8 ).should.equal( -54.8 );
    });

    it('should return the first argument minus the follwoing arguments', function() {
      calc.subtract( 10, 10 ).should.equal( 0 );
      calc.subtract( 100, 50, 50 ).should.equal( 0 );
      calc.subtract( 10, 2, 5, 3 ).should.equal( 0 );
      calc.subtract( -10, 10, -20 ).should.equal( 0 );
    });

    it('should give the correct answer when passed an array as an argument', function() {
      calc.subtract( 10, [ 5, 5 ]).should.equal( 0 );
      calc.subtract( 10, 5, [5]).should.equal( 0 );
      calc.subtract( 10, [2, 3], [2, 3]).should.equal( 0 );
      calc.subtract( 10, [2, 3], 2, 3 ).should.equal( 0 );
    });

    it('should be able to use the first value of an array as the start value', function() {
      calc.subtract([ 10, 5, 5 ]).should.equal( 0 );
      calc.subtract([ 10 ], 5, 5 ).should.equal( 0 );
      calc.subtract([ 10, 2, 3 ], [2, 3]).should.equal( 0 );
    });

    it('should convert strings and subtract correctly', function() {
      calc.subtract( "10", "10" ).should.equal( 0 );
      calc.subtract( 10.5, "10.5" ).should.equal( 0 );
      calc.subtract( "10", 10 ).should.equal( 0 );
      calc.subtract( "-10", 10 ).should.equal( -20 );
    });

    it('should subtract floating point numbers correctly', function() {
      calc.subtract( 10, 7.8, 2.2 ).should.equal( 0 );
      calc.subtract( 10.8, 7, 3 ).should.equal( 0.8 );
      calc.subtract( 10.2, -4.8, 14.8 ).should.equal( 0.2 );
      calc.subtract( 10.6, 2.4, 6.9, 4 ).should.equal( -2.7 );
    });
  }); /* END #SUBTRACT TESTS */


  describe('#Multiply', function() {
    it('should return the input if there is only one argument', function() {
      calc.multiply( 10 ).should.equal( 10 );
      calc.multiply( 7.5 ).should.equal( 7.5 );
      calc.multiply( -7.5 ).should.equal( -7.5 );
      calc.multiply( 0 ).should.equal( 0 );
    });

    it('should multiply all the arguments starting with the first', function() {
      calc.multiply( 1, 1 ).should.equal( 1 );
      calc.multiply( 2, 2 ).should.equal( 4 );
      calc.multiply( 2, 2, 2).should.equal( 8 );
      calc.multiply( 2, -2, 2 ).should.equal( -8 );
    });

    it('should give the correct answer when passed an array as an argument', function() {
      calc.multiply( 1, [ 1, 1 ]).should.equal( 1 );
      calc.multiply( 2, [ 2, 2 ]).should.equal( 8 );
      calc.multiply([ 2, 2, 2 ]).should.equal( 8 );
      calc.multiply([ 2, 2 ], [ 2, 2 ]).should.equal( 16 );
    });
  }); /* END #MULTIPLY TESTS */
});
