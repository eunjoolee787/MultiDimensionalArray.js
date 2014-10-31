module.exports = {

  generate:function(arrayLength1, arrayLength2){
    var arr = [];
    for(var i = 0; i < arrayLength1; i++){
      arr.push([]);
    }
    arr.forEach(function (element) {
     for(var i = 0; i < arrayLength2; i++){
      element.push(Math.floor(Math.random()*2));
     } 
    });
    return arr;
  },

  //the purpose is to see the amount of value in each array 
  count:function(array1, test){ 
    
    var myCount = 0; //myCount counts the amount in each Array
    for (var i = 0; i < array1.length; i++){ //start from left to right
      if (array1[i] instanceof Array){ //looking at current value to see if is an Array
        myCount+= this.count(array1[i],test); //increases myCount by the value in each array in array1[i] (current value in the array)
        //the number of times test appears in each array
      } else if (array1[i] == test){ //if the current value is equal to the test value
        myCount++; //then if equal, it increments count by 1
      }
    }
   return myCount; //return the value in of how many times the test value is in the array
  }
};



  








