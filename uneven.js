function ungerade(ende){
  let liste = [];
  for (i=0;i<ende;i++){
    if (i%2!=0) {
        liste.push(i);
    }
  }
  return liste;
}

console.log(ungerade(3,4,5,3,6));