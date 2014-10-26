var MDA = require("../MultidimensionalArray");
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe("MultiDimensionalArray.generate", function(){

it("should return a number representing", function(){
  var sample_array = [1,0,0,1,0,0,0,0,1]; 
  var result = MDA.count(sample_array, true);
  result.should.equal(3);
});

it("should return a number representing", function(){
  var sample_array = [[1,0],[0,1],[0,0],[0,0]];
  var result = MDA.count(sample_array, false);
  result.should.equal(6);
});

it("should return a number representing", function(){
  var sample_array = [
    [  
      ["red","green","blue"],  
      ["red","green","blue"],  
      ["red","green","blue"],  
    ],  
    [  
      ["red","green","red"],  
      ["red","green","red"],  
      ["red","green","red"],  
    ],  
    [  
      ["red","red","blue"],  
      ["red","red","blue"],  
      ["red","red","blue"],  
    ], 
  ]; 
  var result = MDA.count(sample_array, "red");
  result.should.equal(15);
  });
});

