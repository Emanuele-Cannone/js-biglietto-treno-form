//Nome passeggero
//Codice treno (numero casuale tra 90000 e 100000 escluso)
//Numero carrozza
//Prezzo calcolato
//Categoria selezionata dall'utente

//dichiariamo le variabili
var nome, km, genere, costo, numeroCarrozza, codiceCp;


//definizione ciascuna variabile
nome = document.getElementById('nome').value;
km = document.getElementById('km').value;
genere = document.getElementById('genere').value;
codiceCp = Math.floor(Math.random() * (90000 - 100000) +90000);
document.getElementById('codiceCp').innerHTML = codiceCp;


//calcolo del costo
costo = km * 0.21
if (genere == 'minorenne'){
  costo -= costo * 0.2;
} else if (genere == 'over65') {
  costo -= costo * 0.4;
}


//controlla se i dati vengono presi
//console.log(nome, km, genere, costo);




