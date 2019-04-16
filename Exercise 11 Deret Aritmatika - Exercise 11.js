function tentukanDeretAritmatika(arr) {
  var temp = [];
  var temp2 = 0;
  var count = 0;
  for (var i = arr.length-1; i > 0; i--){
    count = arr[i]-arr[i-1]
    temp.push(count)
  }
  
  for(var j = 0; j < temp.length; j++){
    if(temp[j] === temp[j+1]){
      return true
    }else{
      return false
    }
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
