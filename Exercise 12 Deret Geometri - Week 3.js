function tentukanDeretGeometri(arr) {
  var result = 0;
  var deret = 0;
  var jumlahDeret = 0;
  for (i = arr.length -1; i > 0; i--){
    deret = arr[i] % arr[i-1]
    jumlahDeret += deret
  }
  if (jumlahDeret === 0){
    return true;
  }
  else {
    return false;
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
