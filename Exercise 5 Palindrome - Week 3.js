function palindrome(kata) {
  var word = kata;
  var result = '';
  for (i = kata.length-1; i >= 0; i--){
    result = result + word[i];  
  }
  if (result === kata) {
      return true;
    }
    else {
      return false;
    }
  return (result);
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
