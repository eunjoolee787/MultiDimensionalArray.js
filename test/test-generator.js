var MDA = require("../MultidimensionalArray");
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe("MultiDimensionalArray.generate", function(){

  it("should return an array(length 5, 4)", function(){
    var array = MDA.generate(5,4);
    array.length.should.equal(5);

    array.forEach(function(element){
      element.length.should.equal(4);
    });
  });


});




