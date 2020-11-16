// Lista Cognomi


// Chiedere all’utente il cognome,
var cognome = (prompt("Inserisci il tuo cognome (usa il maiuscolo per la prima lettera!)"));
console.log(cognome);

// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).

var listaCognomi = ['Pesce', "Castenetto", 'Passaro', 'Grimaldi', "Mioli"];
listaCognomi.push (cognome);

// Stampa la lista ordinata alfabeticamente.
listaCognomi.sort();
for (var i = 0; i < listaCognomi.length; i++) {
  console.log( i + ": " + listaCognomi[i]);
}

// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.
//
var posCognome = (listaCognomi.indexOf(cognome)) + 1;
console.log("posizione"+ " " + posCognome) ;
