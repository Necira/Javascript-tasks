function lock(endzahlen) {
  let kombinationen = 1;
  for (let zahl = 0; zahl < endzahlen.length; zahl++) {
      kombinationen *= endzahlen[zahl] +1;
  }
  return kombinationen;
}

const endzahlen = [9,9,9];
const anzahlKombinationen = lock(endzahlen);

console.log(anzahlKombinationen);
