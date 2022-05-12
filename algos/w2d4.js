/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/
const findConsecutiveSums = (nums, targetSum) => {
    let count = 0
    for (let index = 0; index < nums.length; index++) {
        for (let innerInd= 0; innerInd < nums.length; innerInd++){
            if(nums[innerInd] + nums[innerInd+1] != targetSum)
        }
            
            // Count that keeps track of what index we've checked
            //Create a new array that we can push consecutive numbers into

            // For-loop that itierates through array
            // An inner for-loop that starts adding consecutive
            // numbers to the outer loop
            // The inner for-loop starts at the outer loop index
            // When added numbers give a sum of targetSum
            // If number is greater than targetSum - breakout? 
            // --> or natural break when inner loop ends
            // create a temp variable that adds up numbers for comparison
        
    }
}

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
console.log(findConsecutiveSums(nums1,sum1));
// const expected1 = [
//   [2, 5, 3, 6],
//   [3, 6, 7],
// ];

const nums2 = [];
const sum2 = 5;
console.log(findConsecutiveSums(nums2,sum2));
// const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
console.log(findConsecutiveSums(nums3,sum3));
// const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
console.log(findConsecutiveSums(nums4,sum4));
// const expected4 = [
//   [2, 5, 3, 6],
//   [3, 6, 7],
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ];


// Cayla's solution

// const findConsecutiveSums = (nums, targetSum) => { //function with two parameters: an array 'nums', and an integer 'targetSum'
//     let arr = []; //declare a array to save values

//     for(let i = 0; i < nums.length; i++){ //loop through nums
//         let tempArray = [];
//         let tempSum = 0;
//         let j = i;
//         while(tempSum < targetSum || nums[j] == 0){
//             tempSum += nums[j]
//             tempArray.push(nums[j])
//             j++
//         }
        
//         if(tempSum === targetSum){
//             arr.push(tempArray)
//         }
//     }
//     return arr;
// };

//Eirikur_Crockett's solution
// const findConsecutiveSums = (nums, targetSum) => {
//     let output = [];
//     for (let i = 0; i < nums.length; i++) {
//         let tempArr = [];
//         let tempSum = 0;
//         for (let j = i; j < nums.length; j++) {
//             if (nums[j] > targetSum) break;
//             tempSum += nums[j];
//             tempArr.push(nums[j]);
//             if(tempSum === targetSum) output.push([...tempArr]);
//             else if (tempSum > targetSum) break;
//         }
//     }
//     return output;
// }