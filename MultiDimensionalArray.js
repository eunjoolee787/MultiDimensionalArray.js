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


  count:function(array1, test){
    
    var myCount = 0;
    for (var i = 0; i < array1.length; i++){
      if (array1[i] instanceof Array){
        myCount+= this.count(array1[i]);
      } else if (array1[i] == test){
        myCount++;
      }
    }
   return myCount;
  }
};



  








