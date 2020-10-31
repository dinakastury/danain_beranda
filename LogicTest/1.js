

var array = [11, 6, 31, 201, 99, 861, 1, 7, 14, 79];
var temp;

for(var i=0; i < array.length; i++){
  for(var j = i + 1; j < array.length; j++){
    if(array[i] > array[j]) {
      temp = array[i];
    }
  }
}

console.log(temp);

