//Given an array of numbers and a target value, return true if there are any 2 
// elements in the array that can be multiplied together to produce the target value. 
// You cannot multiply an element with itself, but it is possible for a number to repeat more than once in the array.

function targetProduct (arr, target) {

    for (let index = 0; index < arr.length; index++) {
        const factor = arr[index];
        if (arr.includes((target/factor), index+1)){
            // console.log(`The current factor: ${factor} can be multipled by the following number in the array ${target/factor}`)
            return true
        }
        // console.log(`The current factor: ${factor} needs to be multiplied by ${target/factor} - which is not available in the provided array`)
        
        // Ensure that the position of the arr cannot be repeated so that the number you're on can't be 
        // multiplied again.
        // I can divide the target number by my number, and identify whether it's a number existant somewhere in my array...
        // I can multiply each number 
        
    }
    // console.log("No matching factor pairs have been found!")
    return false
}

//Tests:
console.log(targetProduct([1, 2, 3, 6, 5], 10))
//expected output: true

console.log(targetProduct([1, 8], 64))
//expected output: false

console.log(targetProduct([8, 1, 8], 64))
//expected output: true

console.log(targetProduct([10, 4, 5, 6, 3, 2], 12))
//expected output: true

console.log(targetProduct([1, 8, 7, 3, 8, 13], 47))
//expected output: false