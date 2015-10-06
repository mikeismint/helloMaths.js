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
  });
});
