function angkaPalindrome(num) {
  num++
  var isPalindrom = false;
  var result = '';
  var reverse = '';
  while (!isPalindrom){
    var result = String(num);
    var length = result.length;
    for ( i = length-1; i >= 0; i--){
    reverse += result[i]; 
  }
    if (reverse === result){
      isPalindrom = true
      return reverse;
    }
    num++
    reverse = '';
}
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 100
