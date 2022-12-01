/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi randomicamente dalla lista, diversi tra loro.
 *
 */
const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const newList1 = [];
const newList2 = [];
const numberOfElementsOfNewList = 10;

// ? FIRST METHOD
while(newList1.length<numberOfElementsOfNewList){
    const randomIndex = getARandomNumber(0 , startingList.length-1);
    
    
    if(!newList1.includes(startingList[randomIndex])){
        newList1.push(startingList[randomIndex]);
    }
}

// ? SECOND METHOD
for(let i=0 ; i<numberOfElementsOfNewList ; i++){
    let elementOfStartingList = startingList[getARandomIndexFromAList(startingList , 0 , startingList.length-1)];
    newList2.push(elementOfStartingList);
}

// ? CONSOLE.LOG
console.log(newList1);
console.log(newList2);






function getARandomNumber(minValue , maxValue){
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    return randomNumber;
}


function getARandomIndexFromAList(blacklist , min , max){
    let isValid;
    let randomIndex;

    do{
        randomIndex = getARandomNumber(min , max);

        if(blacklist.includes(randomIndex)){
            isValid = true;
        }
    }while(!isValid)

    return randomIndex;
}