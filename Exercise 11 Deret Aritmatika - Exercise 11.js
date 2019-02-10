function tentukanDeretAritmatika(arr) {
  var hitung = 0;
  var result = 0;
  var jumlahSelisih = 0;
  for (i = arr.length-1; i > 0; i--){
    var selisih = arr[i]-arr[i-1]
    jumlahSelisih += selisih   
  }
  result = jumlahSelisih%(arr.length-1)
  if (result === 0){
    return true
  }
  else {
    return false
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
