// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
const numbersList = [];
let sum = 0;

do{
    let userNumber = parseFloat(prompt('Inserisci il tuo numero'));


    if(Number.isNaN(userNumber)){
        userNumber = 0;
    }

    numbersList.push(userNumber);
    sum+=userNumber;

    if(sum>50){
        sum-=userNumber;
        numbersList.pop();
        break;
    }
}while(sum < 50);

console.log(sum);
console.log(numbersList);