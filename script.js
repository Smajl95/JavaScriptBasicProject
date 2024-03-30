/*aggiungo un listener per l'evento DOMContentLoaded,
che viene attivato quando il DOM è completamente caricato*/
document.addEventListener("DOMContentLoaded", function() {

  // Apro la variabile con count a 0, che poi manipolerò
  let count = 0;

  //Seleziono il primo elemento ID decrease e aggiungo un listener per l'evento click
  document.getElementById("decrease").onclick = function(){

  //quando il pulsante decrease viene cliccato, il numero decrementa il valore del count, inoltre ho aggiunto la condizione if
  //per non far entrare il numero in negativo
  if (count !== 0){
    count --;
  }

  //Aggiorno il contenuto con l'elemento ID number con il nuovo valore di count
  document.getElementById("number").innerHTML = count;

};

// Selexiono il secondo elemento ID resetButton e aggiungo un listener per l'evento click
document.getElementById("resetButton").onclick = function(){

  //quando il pulsante reset viene cliccato, il numero automaticamente si resetta
  count = 0;

// Aggiorno il contenuto con l'elemento ID number modificato
  document.getElementById("number").innerHTML = count;

};
// Seleziono il terzo e ultimo elemento increase e aggiungo sempre il listener per l'evento click
document.getElementById("increase").onclick = function(){

  // quando il pulsante viene cliccato il numero incrementa di uno
  count += 1;

  // Aggiorno il contenuto di quest'ultima funzione con l'elemento ID number per quest'ultima function 
  document.getElementById("number").innerHTML = count;

};

});