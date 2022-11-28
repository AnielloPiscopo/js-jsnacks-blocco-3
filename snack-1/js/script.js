let correctNumber = Math.floor(Math.random() * 10 +1);
console.log(correctNumber);

let userNumber;

do{
    userNumber = parseFloat(prompt('Digita il tuo numero'));
}while(userNumber !== correctNumber)