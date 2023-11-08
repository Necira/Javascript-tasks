// Mehrere gleiche buchstaben in einem satz
function bestChar(sentence){
  sentence = sentence.toLowerCase() && sentence.replace(/\s/g, '');

  let numberChar = {};

  for (let char=0;char<sentence.length;char++){
    const letter = sentence[char];
    if (numberChar[letter]){;
        numberChar[letter]++;
    } else {numberChar[letter]=1};
  } 

  let bestChar = "";
  let highestNumber = 0;

  for (let letter in numberChar) {
    if (numberChar[letter] > highestNumber) {
      bestChar = letter;
      highestNumber = numberChar[letter];
    }
  }
return bestChar + highestNumber;
}

let sentence = "the red fox jumps over the blue frog"
console.log(bestChar(sentence));