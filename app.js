function sum(array) {
  var result = 0;
  for(var i in array) {
    result += array[i];
  }
  return result;
}
 
var array = new Array(1,2,3,4,5);
console.log("result=", sum(array));
