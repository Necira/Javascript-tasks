function bubbleSort(liste) {
  let len = liste.length;
  for (i = 0; i < len - 1; i++) {
    if (liste[i] > liste[i + 1]) {
      let temp = liste[i];
      liste[i] = liste[i + 1];
      liste[i + 1] = temp;
    }
  }
  return liste;
}

var liste = [39, 12, 18, 85, 72, 10, 2, 18];
var sortedListe = bubbleSort(liste);
console.log(sortedListe); 

