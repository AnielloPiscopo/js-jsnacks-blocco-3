/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */
let userNumber1 = parseFloat(prompt('Inserisci il primo numero'));
let userNumber2 = parseFloat(prompt('Inserisci il secondo numero'));
alert(randomNumberBetweenTwoExtremis(userNumber1,userNumber2));





function randomNumberBetweenTwoExtremis(minValue,maxValue){
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}