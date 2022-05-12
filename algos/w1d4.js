//partition the array around the value at arr[0]
//without creating a new array
//values left of the original pivot should be less than the pivot
//values right of the pivot should be >= the pivot value
//note: each side of the partitioned value does not
//have to be sorted.
//return the partitioned array
//bonus: return the index where the value at 0 ends up
//[5,4,9,2,5,3] -> [4,2,3,5,9,5], return 3
const partition = (arr) => {
    // var randomIndex = Math.floor((Math.random())*arr.length);
    // console.log(arr[randomIndex]);
    // let newArr =[]
    let pivot = arr[0];
    // newArr.push(pivot)
    let pivotLoc = 0
    for(let i = 1; i<arr.length; i++){
        if(arr[i] < pivot && i > pivotLoc) {
            // newArr.unshift(arr[i])
            arr.unshift(arr.splice(i, 1)[0])
            pivotLoc++

        }
        else if( i < pivotLoc && arr[i] >=pivot){
            arr.push(arr.splice(i,1)[0]);
            i--;
        }
    }
    console.log(arr)
    return pivotLoc;
}


// expected return [4,2,3,5,5,9,5]
let arr = [5,4,9,2,5,3];
let arrTwo = [7, 4];
let arrThree = [3, 5, 1, 2, 4];
let arrFour = [7, 2, 10, 15, 1];
console.log(partition(arr));
console.log(partition(arrTwo));
console.log(partition(arrThree));
console.log(arr);
