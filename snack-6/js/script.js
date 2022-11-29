/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */
const list = ['1','shsihs12','asddsa',1,2,6];
console.log(list);
console.log(getSumOfArrayElements(list));



function getSumOfArrayElements(arr){
    let sumOfArrayElements = 0;

    for(let i=0 ; i<arr.length ; i++){
        let numericValue = parseFloat(arr[i] , 10);


        if(!Number.isNaN(numericValue)){
            sumOfArrayElements += numericValue;
        }
    }

    return sumOfArrayElements;
}