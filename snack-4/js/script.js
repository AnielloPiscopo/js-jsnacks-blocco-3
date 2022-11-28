// Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
const arr1 = ['a','b','c','asdasd','bhe'];
const arr2 = [1,2,3,'asd',2,324,345345,65];
let increaseNumber = 0;
const arrMix = [];


for(let i=0 ; (i<arr1.length) || (i<arr2.length) ; i++){
    let arr1Element = arr1[i];
    let arr2Element = arr2[i];


    if((i>=arr1.length) || (i>=arr2.length)){        
        if(i>=arr1.length){
            arr1Element = arr1[increaseNumber];
        }else if(i>=arr2.length){
            arr2Element = arr2[increaseNumber];
        }

        increaseNumber++;
    }


    arrMix.push(arr1Element + ' ' + arr2Element);
}


console.log(arr1);
console.log(arr2);
console.log(arrMix);