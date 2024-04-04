// Associamo il gestore di eventi all'elemento HTML, e carico con DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {

  let count = 0;

  // funzione per incrementare il contatore
  function increment() {
    count++;
    updateCounterElement();
  }

  // funzione per decrementare il contatore
  function decrement() {
    if (count !== 0) {
      count--;
      updateCounterElement();
    }
  } 

  // funzione per reimpostare il contatore a zero
  function reset() {
    count = 0;
    updateCounterElement();
  }

  // funzione per aggiornare l'elemento HTML
  function updateCounterElement() {
    document.getElementById("number").innerHTML = count;
  }

  // Associamo le diverse funzioni ai pulsanti
  document.getElementById("decrease").onclick = decrement;
  document.getElementById("resetButton").onclick = reset;
  document.getElementById("increase").onclick = increment;
});
