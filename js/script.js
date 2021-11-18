// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


// chiediamo all'utente il suo nome

let name = prompt ("Come ti chiami?");
console.log(name);

// chiediamo all'utente il suo cognome

let surname = prompt ("Qual è il tuo cognome?");
console.log(surname);

// chiediamo all'utente il suo colore preferito

let color = prompt ("Qual è il tuo colore preferito?");
console.log(color);

// chiediamo all'utente anche il suo numero preferito

let favNumber = parseInt(prompt ("Qual è il tuo numero preferito?"));
console.log(favNumber);

// al numero preferito sommiamo 5 e lo mettiamo nella password

let pswNumber = (favNumber+5);
console.log(pswNumber);



// scriviamo sulla pagina il risultato

document.writeln (name+surname+color+pswNumber);
console.log(name+surname+color+pswNumber);


// scriviamo nel div di riferimento

document.getElementById("random_id").innerHTML = name+surname+color+pswNumber;
console.log(name+surname+color+pswNumber);






