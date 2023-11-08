function advent(bewegung) {
  let etage = 0;
  let goUp = "(";
  let goDown = ")";
    for(i=0;i<bewegung.length;i++){
      if (bewegung[i]===goDown){
          etage--;
      }
      else if (bewegung[i]===goUp){
          etage++;
      }
    }
  return etage;
}

let weihnachtsmann = advent("(((())()");
console.log(weihnachtsmann);
