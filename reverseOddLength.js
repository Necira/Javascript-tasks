
function reverseOddLength(string) {
  let reversedString = string;
  let arrayString = string.split("");
  if (string.length%2!=0) {
    reversedString= arrayString.reverse();
  } else {
    reversedString;
  }
  return reversedString;
}

let finalstring = reverseOddLength("hello my name is lalala");
console.log(finalstring);


