function change(sentence, rotate = -3, coding = true ) {
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let result = ''
  if (coding === false) {
    rotate = -rotate;
  }
  const max = 10;
  let counter = 10;
  while(counter < max) {
  counter++;
  }
  counter = 10;
  do {
  counter++;
  } while (counter < max);
  for(i=0;i<sentence.length;i++){
  let letter = alphabet.indexOf(sentence[i]);
  if (alphabet.includes(sentence[i])){
    if (letter+rotate<0){
      result += alphabet[letter + rotate + 26];
    }
    else if (letter+rotate>26){
      result += alphabet[letter + rotate - 26];
    }
    else{
      result += alphabet[letter + rotate];
    }
    }  
    else {result+= sentence[i]}
    }   
  return result;
}

function decode(sentence, rotate){
  return change(sentence, rotate, false);  
}

function encode(sentence, rotate){
  return change(sentence, rotate, true);    
}
 
let rotation = -7;
let encodedString = encode("hello WORLD", rotation);
let decodedString = decode(encodedString,rotation);
console.log(encodedString, decodedString);