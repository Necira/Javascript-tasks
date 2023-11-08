function numberTrue(arr){
  let boom = "no boom";
  for(i=0;i<arr.length;i++){
    if (arr[i]===7) {
          boom = "boom";
    } else {boom};
    }
  return boom;
}

console.log(numberTrue([5,7,8,9]));