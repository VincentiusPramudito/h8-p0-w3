//input "hello world!"
function balikString(input){
  var length = input.length;
  var word = input;
  var result= '';
  for (i = length-1; i >= 0; i--){
    result = result + word[i]
  }
  return result;
}

console.log(balikString('hello world!'))

//output
//"!dlrow olleh"
