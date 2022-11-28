const arr1 = [1,2,23,'asdhiuasdh','asdas'];
const arr2 = [1,2,23,'asdhiuasdh','asdas','asdasdasd',3434];

console.log('Lista 1 prima del lavoro ' + arr1);
console.log('Lista 2 prima del lavoro ' + arr2);


if(arr1.length < arr2.length){
    alert('La prima lista di array è più piccola della seconda')
    
    arrayLengthControl(arr1 , arr2);
}else if(arr1.length > arr2.length){
    alert('La seconda lista di array è più piccola della prima');

    arrayLengthControl(arr2 , arr1);
}else{
    alert('I due array sono uguali');
}


console.log('Lista 1 dopo il lavoro: ' + arr1);
console.log('Lista 2 dopo il lavoro: ' + arr2);





function controlOfValue(a){
    while(a === null || a === ''){
        a = prompt('Ridigita il valore');
    }
    return a;
}

function arrayLengthControl(a,b){
    while(a.length < b.length){
        let newElement = prompt('Inserisci un valore nell\'array');
        
        newElement = controlOfValue(newElement);
        
        a.push(newElement);
    }
}