function pasanganTerbesar(angka) {
  var angkaArr = String(angka);
  var result ='';
  var counter = '0';
  for (var i = angkaArr.length-1; i >= 0; i--){
    result = angkaArr[i]+angkaArr[i+1]
    if (result >= counter){
      counter = result;
    }
  }
  return counter
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

// var angka = 9,76 ,78 ,37 ,5 , 27;
// var arr = [angka];
// console.log(arr);
