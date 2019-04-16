function targetTerdekat(arr) {
  var arrO = [];
  var arrX = [];
  var hitung = arr.length;
  for (i = 0; i < arr.length; i++){
    if (arr[i]=== 'x'){
      arrO.push(i)
      console.log(arrO);
    }
    else if (arr[i] === 'o'){
      arrX.push(i)
      console.log(arrX);
    }
    }
    if (arrO.length === 0 || arrX.length === 0){
      return 0;
    }
    for (j = 0; j < arrO.length; j++){
      var temp
      for (k = 0; k < arrX.length; k++){
        temp = Math.abs(arrO[j]-arrX[k])
      }
      if (temp < hitung){
        hitung = temp
      }
    }

  return hitung
}

//atau
//function targetTerdekat(arr) {
//   var counterO, counterX, temp;
//   var min = arr.length;

//   for(var i = 0; i < arr.length; i++){
//     if(arr[i] === 'o'){
//       counterO = i
//     }else if(arr[i] === 'x'){
//       counterX = i
//     }

//     console.log(counterX, counterO)

//     temp = Math.abs(counterO - counterX)

//     if(temp < min){
//       min = temp
//     }
//   }

//   if(counterO === undefined || counterX === undefined){
//       return 0
//     }
//   return min
// }




// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
