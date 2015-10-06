var should = require( 'chai' ).should();
var calc = require( '../app/Calculator' );

describe("Calculator", function() { 
  describe("Add", function() {
    it('should add together two numbers', function() {
      calc.add( 1, 1 ).should.equal( 2 );
      calc.add( 2, 4 ).should.equal( 6 );
      calc.add( 10, 10 ).should.equal( 20 );
      calc.add( 73, 27 ).should.equal( 100 );
    });

    it('should add together all arguments passed', function() {
      calc.add( 1, 3, 5 ).should.equal( 9 );
      calc.add( 2, 4, 6 ).should.equal( 12 );
      calc.add( 1, 1, 1, 1 ).should.equal( 4 );
      calc.add( 3 , 10, 8, 1 ).should.equal( 22 );
    });

    it('should add together contents of an array as an argument', function() {
      calc.add([ 1, 1 ]).should.equal( 2 );
      calc.add([ 1, 1, 1, 1, 1 ]).should.equal( 5 );
      calc.add([ 3, 4, 5 ]).should.equal( 12 );
      calc.add([ 7, 2, 1 ]).should.equal( 10 );
    });
  });
});
