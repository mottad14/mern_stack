//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array

//THIS USES SHIFT - DESTRUCTIVE OF THE GIVEN ARRAYS
// const combine = (leftArr, rightArr) => {
//     let newArr = []
//     while(leftArr.length != 0 || rightArr.length !=0){
//         if(leftArr.length > 0 && rightArr.length > 0){
//             if(leftArr[0] > rightArr[0]){
//                 newArr.push(rightArr.shift())
//             } else {
//                 newArr.push(leftArr.shift())
//             }
//         }else if(leftArr.length > 0 && rightArr.length == 0){
//             newArr.push(leftArr.shift())
//         }else if(leftArr.length == 0 && rightArr.length > 0){
//             newArr.push(rightArr.shift())
//         }
//     }
//     return newArr
// }

//Carmen, Andres, and John's alternative 

const combine = (leftArr, rightArr) => {
    let newArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let count = 0;
    while (newArr.length < leftArr.length + rightArr.length) {
        if (leftIndex == leftArr.length) {
            for (var i = rightIndex; i< rightArr.length; i++) {
                newArr.push(rightArr[rightIndex]);
                rightIndex++;
            }
        }
        if (rightIndex == rightArr.length) {
            for (var i = leftIndex; i< leftArr.length; i++) {
                newArr.push(leftArr[leftIndex]);
                leftIndex++;
            }
        }
        if (leftArr[leftIndex] < rightArr[rightIndex] && newArr.length != leftArr.length + rightArr.length){
            newArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else if (leftArr[leftIndex] > rightArr[rightIndex] && newArr.length != leftArr.length + rightArr.length) {
            newArr.push(rightArr[rightIndex]);
            rightIndex++;
        }

    }
    return newArr;
}



// should return [0,1,2,3,4,6,7,9,11]
console.log(combine([1,2,7,9],[0,3,4,6,11]));

// should return [0,1]
console.log(combine([1],[0]));

