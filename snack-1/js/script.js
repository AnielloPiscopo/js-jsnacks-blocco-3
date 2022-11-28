// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto
let userNumber;

alert('Inserisci un numero da 1 a 10');


do{
    userNumber = parseFloat(prompt('Digita il tuo numero'));

    if(Number.isNaN(userNumber)){
        userNumber = 0;
    }
}while(userNumber>10 || userNumber<1)