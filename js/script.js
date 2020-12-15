//Nome passeggero
//Codice treno (numero casuale tra 90000 e 100000 escluso)
//Numero carrozza
//Prezzo calcolato
//Categoria selezionata dall'utente

//dichiariamo le variabili
var nome, km, genere, costo, numeroCarrozza, codiceCp, message;


//definizione ciascuna variabile solamente quando l'utente fa il click su genera

document.getElementById("genera").addEventListener("click", function() {
  nome = document.getElementById('nome').value;
  km = document.getElementById('km').value;
  genere = document.getElementById('genere').value;
  numeroCarrozza = Math.floor(Math.random() *9 +1);
  document.getElementById('numeroCarrozza').innerHTML = numeroCarrozza;
  codiceCp = Math.floor(Math.random() * (90000 - 100000) +90000);
  document.getElementById('codiceCp').innerHTML = codiceCp;


  //calcolo del costo
  costo = km * 0.21;
  message = 'maggiorenne';
  if (genere == 'minorenne'){
    costo -= costo * 0.2;
    message = 'minorenne';
  } else if (genere == 'over65') {
    costo -= costo * 0.4;
    message = 'premium';
  }


  //visualizza negli appositi id i dati :
  document.getElementById('nome-stampato').innerHTML = nome;
  document.getElementById('offerta').innerHTML = message;
  document.getElementById('costo').innerHTML = costo.toFixed(2) + '€';


  //controlla se i dati vengono presi
  //console.log(nome, km,  costo, message);
});

document.getElementById("annulla").addEventListener("click", function() {
  document.getElementById('nome-stampato').innerHTML = ' ';
  document.getElementById('offerta').innerHTML = ' ';
  document.getElementById('costo').innerHTML = ' ';
  document.getElementById('codiceCp').innerHTML = ' ';
  document.getElementById('numeroCarrozza').innerHTML = ' ';
});