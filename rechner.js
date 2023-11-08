
function calculator(calc,a,b){
  if (calc === "minus"){
    return a - b;
  }  
  if (calc === "plus"){
    return  a + b;
  } 
  if(calc === "divide"){
    return  a / b;
  } 
  if (calc === "multiply"){
    return a * b;
  } else { return "// --> unknown operation:" + calc ;

  }
}

console.log(calculator("blub",2,5));










    
        



// let caesar = ["D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","WXYZABC"]
// function letters(alphabet){
    
//     for(i=0;i<alphabet.length;i++) {
//     alphabet[i] = caesar[i]
//     return alphabet
// }
// }

// function change(sentence, rotate = -3, coding = true) {
//   let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//   let result = ''
//   if (coding === false) {
//     rotate = -rotate
   
//    }

//   for(i=0;i<sentence.length;i++){
//       let letter = alphabet.indexOf(sentence[i])
  
//         if (alphabet.includes(sentence[i])){
//           if (letter+rotate<0){
//             result += alphabet[letter + rotate + 25]
//           }else{
//             result += alphabet[letter + rotate]
//           }
//     }  
//     else {result+= sentence[i]}
//   }   
      
  
//   return result
// }

// console.log (change("hello world", -7, true))
    
    function change(sentence, rotate = -3, coding = true ) {
      let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
      let result = ''
      if (coding === false) {
        rotate = -rotate
       }
      for(i=0;i<sentence.length;i++){
          let letter = alphabet.indexOf(sentence[i])
            if (alphabet.includes(sentence[i])){
              if (letter+rotate<0){
                result += alphabet[letter + rotate + 26]
                
              }
              else if (letter+rotate>26){
                result += alphabet[letter + rotate - 26]
              }
              else{
                result += alphabet[letter + rotate]
              }
          }  
        else {result+= sentence[i]}
      }   
      return result
    }
    function decode(sentence, rotate){
      return change(sentence, rotate, false)    
    }
    function encode(sentence, rotate){
      return change(sentence, rotate, true)    
    }
    let rotation = -7
    let encodedString = encode("hello world", rotation)
    let decodedString = decode(encodedString,rotation)
    console.log(decodedString)

    