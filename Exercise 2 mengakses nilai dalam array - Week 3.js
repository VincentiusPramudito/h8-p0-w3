//input "hello world!"

var input = 'hello World!'

function balikString(input){
  var result = '';
  for(var i = input.length-1; i >= 0; i--){
    result += input[i]
  }
  return result
}

console.log(balikString(input))

//output
//"!dlrow olleh"
