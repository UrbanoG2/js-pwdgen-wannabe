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

// anno attuale

let year = "21"

// scriviamo sulla pagina il risultato

document.writeln (name+surname+color+year);
console.log(name+surname+color+year);


// scriviamo nel div di riferimento

document.getElementById("random_id").innerHTML = name+surname+color+year;
console.log(name+surname+color+year);