function fibona(pos){
  let arr = [];
  for(i=0;i<=pos;i++){
    if (i < 1) {
      arr.push(0);
    } else if (i < 2) {
      arr.push(1);
    } else if (i < 3 ) {
      arr.push(2);
    } else {
    let pushing = arr[i - 1] + arr[i - 2];
      arr.push(pushing);
    }
  }
return arr[i=pos];
}

let pos = 9;
let fibonacci = fibona(pos);
console.log(fibonacci);