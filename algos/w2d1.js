//Intersect Sorted Arrays
//Given two sorted arrays, return a new array containing all the numbers they have in common
//This includes duplicates too! The intersection of [2,2] and [2,2,2] would be [2,2]

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

const intersect = (arrLeft, arrRight) => {
    //save left and right arrays because this is gonna be destructive
    savedLeft = arrLeft;
    savedRight = arrRight;
    //create a new array to push stuff into
    newArray = []
    //iterate through the left array
    rightIndex = 0
    for (let i = 0; i < arrLeft.length; i++) {
        //for each value in the left array, look through the whole right array
        for (let j = rightIndex; j < arrRight.length && arrLeft[i]; j++) {
            //if we reach a value that is equal in both arrays...
            if (arrLeft[i] == arrRight[j]) {
                //push that value into the new array
                newArray.push(arrLeft[i]);
                //set both to null so we don't use them again
                arrLeft[i] = null;
                arrRight[j] = null;
                rightIndex = j;
            }
        }
    }
    //reset the destroyed arrays to their original states
    arrLeft = savedLeft;
    arrRight = savedRight;

    //return the new array
    return newArray;
}

console.log(intersect([2,4,7,9,10],[2,2,3,5,7,9,10]));
// console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]));
// console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));
// console.log(intersect([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));
// console.log(intersect([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));




//Ben's HASH MAP APPROACH

const intersectHashMap = (arrLeft, arrRight) => {
    let tracker = {};
    for(let i = 0; i < arrLeft.length; i++){
        if(Object.keys(tracker).includes(String(arrLeft[i]))){
            tracker[arrLeft[i]].left++;
        } else {
            tracker[arrLeft[i]] = {left: 1, right: 0}
        }
    }
    for(let i = 0; i < arrRight.length; i++){
        if(Object.keys(tracker).includes(String(arrRight[i]))){
            tracker[arrRight[i]].right++;
        }
    }
    console.log(tracker);
    let newArr = [];
    for (const key in tracker) {
        let tempObj = tracker[key];
        if(tempObj.right > 0){
            if(tempObj.left <= tempObj.right){
                for(let i = 0; i < tempObj.left; i++){
                    newArr.push(key);
                }
            } else if (tempObj.left > tempObj.right) {
                for(let i = 0; i < tempObj.right; i++){
                    newArr.push(key);
                }
            }
        }
    }
    return newArr.length > 0 ? newArr : "No Instersecting Values";
}