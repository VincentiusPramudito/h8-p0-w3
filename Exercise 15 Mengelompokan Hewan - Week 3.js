function groupAnimals(input){
  var firstWord = [];
  for (var i = 0; i < input.length; i++){
    firstWord.push(input[i][0])
  }
  firstWord.sort();
  var anotherWord = [];
  for(var j = 0; j < firstWord.length; j++){
    if (firstWord[j] !== firstWord[j+1]){
      anotherWord.push(firstWord[j])
    }
  }
  var regions = []
  for(var k = 0; k < anotherWord.length; k++){
    var region = []
    for(var l = 0; l < input.length; l++){
      if(input[l][0] === anotherWord[k]){
        region.push(input[l])
      }
    }
    regions.push(region)
  }
  return regions;
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
