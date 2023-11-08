function reverseWeirdLength(string) {
  let reversedString = "";
  let arrayString = string.split("");
  if (string.length>7) {
    reversedString = arrayString.reverse();
  } else {
    reversedString = arrayString;
  }
  let finalString = reversedString.join("");
  return finalString;
}

console.log(reverseWeirdLength("hello wassup"));

