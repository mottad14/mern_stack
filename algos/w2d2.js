//Union Sorted Arrays
//Efficiently combine two pre-sorted arrays into a new sorted array
//no built in functions!!!

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]
//Union Sorted Arrays
//Efficiently combine two pre-sorted arrays into a new sorted array
//no built in functions!!!

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]

const union = (arr1, arr2) => {

    if(arr1.length > arr2.length){
        bigger=arr1;
        smaller=arr2;
    } else{
        smaller=arr1;
        bigger=arr2;
    }

    var newArr = [];
    var j = 0;
    var i = 0;

    while(i < bigger.length){
        if(bigger[i] === smaller[j]){
            newArr.push(smaller[j]);
            j++;
            i++;
        }
        while(smaller[j] < bigger[i] || (bigger[i] === undefined && smaller[j] !== undefined)){
            newArr.push(smaller[j]);
            j++;
        }
        while(smaller[j] > bigger[i] || (smaller[j] === undefined && bigger[i] !== undefined)){
            newArr.push(bigger[i]);
            i++;
        }
    }
    return newArr;
}

console.log(union([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(union([1,2,2,2,7],[2,2,6,6,7]));
console.log(union([1,5,9],[2,6,10]));
