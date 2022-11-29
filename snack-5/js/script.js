/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */
let userNumber1 = parseFloat(prompt('Inserisci il primo numero'));
let userNumber2 = parseFloat(prompt('Inserisci il secondo numero'));
alert(randomNumberBetweenTwoExtremis(userNumber1,userNumber2));




function randomNumberBetweenTwoExtremis(extremis1,extremis2){
    let minValue;
    let maxValue;

    
    if(extremis1 < extremis2){
        minValue = extremis1;
        maxValue = extremis2
    }else{
        minValue = extremis2;
        maxValue = extremis1;
    }


    return (Math.random() * (maxValue - minValue) + minValue).toFixed(2);
}