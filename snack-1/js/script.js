// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto
let correctNumber = Math.floor(Math.random() * 10 +1);
console.log(correctNumber);

let userNumber;

alert('Inserisci un numero da 1 a 10 finché non avrai trovato il valore corretto');

do{
    userNumber = parseFloat(prompt('Digita il tuo numero'));
}while(userNumber !== correctNumber)