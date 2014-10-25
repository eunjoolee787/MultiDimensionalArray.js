var MDA = require("../MultidimensionalArray");
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe("MultiDimensionalArray.generate", function(){
  it("should return an array(length 3)", function()){
    var array = MDA.generate();
    array.length.should.equal(3);

    array.forEach(function(element){
      element.length.should.equal(3)

    });
  });

  it("should return an array(length 4)", function(){
    var array = MDA.generate(4);
    array.length.should.equal(4);
  
  });

  it("should return an array(length 5, 4)", function(){
    var array = MDA.generate(5,4);
    array.length.should.equal(5);

    array.forEach(function(element){
      element.length.should.equal(4);
    });
  });

  it("should return an array(length)", function(){
    var array = MDA.generate(3,4,5);
    array.length.should.equal(3);

    array.forEach(function(element){
      element.length.should.equal(4);
  
    array.forEach(function(elementNew){
      elementNew.length.should.equal(5);
    });
    });
  });

});




