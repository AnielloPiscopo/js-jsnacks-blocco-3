/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi randomicamente dalla lista, diversi tra loro.
 *
 */
const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const newList = [];
const numberOfElementsOfNewList = 10;

while(newList.length<numberOfElementsOfNewList){
    const randomIndex = getARandomNumber(0 , startingList.length-1);
    
    
    if(!newList.includes(startingList[randomIndex])){
        newList.push(startingList[randomIndex]);
    }
}

console.log(newList);


function getARandomNumber(minValue , maxValue){
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    return randomNumber;
}