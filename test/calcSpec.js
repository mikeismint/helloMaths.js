var should = require( 'chai' ).should();
var calc = require( '../src/Calculator' );

describe("Calculator", function() { 
  describe("Add", function() {
    it('should add together two numbers', function() {
      add( 1, 1 ).should.equal( 2 );
      add( 2, 4 ).should.equal( 6 );
      add( 10, 10 ).should.equal( 20 );
      add( 73, 27 ).should.equal( 100 );
    });
  });
});
