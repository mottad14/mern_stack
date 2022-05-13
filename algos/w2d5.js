/*
* Returns the k most frequently occurring numbers from the given unordered
* nums array. Order in the return array should be highest frequecy first, 
* ordered to lowest frequency. If two or more numbers match frequency, the
* order they appear in the array does not matter.
*/

const kMostFrequent = (nums, k) => {
    // keep track in a dictionary of key value pairs the number of occurences of a given value in our array. 
    // Create a Key -Value pair object with Value: K in the array, and Occurences: the number of times that K repeats
    const Dictionary = {
        "Value" : 0,
        
    }
    const newArray = []
    for (let index = 0; index < nums.length; index++) {
        if (nums[index]) {
            
        }
        
    }
    
    // Go through the given array in a for loop

        // identify whether the value that we're at is already in our Object - if so, skip it.
        
        //if the value that we've reached is not in the object,

            //push the Value in, and count the number of times that item is in the array

        //Finally, identify the K number required of us - and select that many Values from our objects
        //in order (according to which have the most occurences) - push them into a new Array object
}

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
console.log(kMostFrequent(nums1,k1));
// const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
console.log(kMostFrequent(nums2,k2));
// const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
console.log(kMostFrequent(nums3,k3));
// const expected3 = [1, 2, 3];

const nums4 = [5,8,2,4,0,15,16,90,5,1,5,23,42,0,6,2,8,2,5];
const k4 = 4;
console.log(kMostFrequent(nums4,k4));
// const expected3 = [5, 2, 0];

//Ben's solution

// const kMostFrequent = (nums, k) => {
//     let output = [];
//     let tracker = {};
//     for (let i = 0; i < nums.length; i++) {
//         if(!tracker[nums[i]]){
//             tracker[nums[i]] = 1;
//             for (let j = i+1; j < nums.length; j++) {
//                 if(nums[j] === nums[i]) tracker[nums[i]]++;
//             }
//         }
//     }
//     console.log(tracker);
//     for (let l = 0; l < k; l++) {
//         let currentLargest = Object.keys(tracker)[0];
//         for (const key in tracker) {
//             if(tracker[key] > tracker[currentLargest]){
//                 currentLargest = key;
//             }
//         }
//         tracker[currentLargest] = 0;
//         output.push(currentLargest)
//     }
//     return output;
// }

// Cameron's solution
// const kMostFrequent = (nums, k) => {
//     let unSorted = [];
//     let newArr = [];
//     let dupes = {};
//     let count = 0;
//     for (let i=0;i<nums.length;i++) {
//         if (nums[i] in dupes) {
//             //console.log(nums[i] + " Duplicate");
//             dupes[nums[i]] = dupes[nums[i]] + 1;
//         } else {
//             dupes[nums[i]] = 1;
//         }
//     }
//    // console.log(dupes)
//     for (let dupe in dupes) {
//         unSorted.push([parseInt(dupe), dupes[dupe]])
//     }

//     unSorted.sort((a, b) => {
//         return b[1] - a[1];
//     })

//     //console.log(unSorted);

//     for (let item in unSorted) {
//         if (count < k) {
//             newArr.push(unSorted[item][0]);
//             count++;
//         }
//     }
    
//     return newArr;

// }