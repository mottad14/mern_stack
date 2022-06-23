//DESCRIPTION 
//Given a sorted array and a number x, find the pair of numbers in the array whose sum is closest to x

function closestSum(arr,  x) {
    // So in order to predict which of the numbers sum up to the closest value possible...
    // I'm thinking we have to brute force this one... go through each of the 
    // we could add all the numbers by each other... which could be a timely process.
    // we could subtract each number from from the given, number, and see which of the following numbers match with the lowest quantity 

    //So if I subtract 54 - 10 = 44
    // I'm going to want the number as close as possible to this number
    // Then I store the difference between these two number as the closestDifference
    let firstStamp = 0;
    let secondStamp = 0;
    let closestDiff = x
    for(let i = 0; i < arr.length; i++){
        let currentDiff = x - arr[i]
        for(let innerIndex = i+1; innerIndex < arr.length; innerIndex++){
            let newDiff = Math.abs(currentDiff - arr[innerIndex])
            if (newDiff < closestDiff){
                console.log(`the newest difference: ${newDiff}, is smaller than the previous closest difference: ${closestDiff}. The 2 numbers involved are: ${arr[i]}, and ${arr[innerIndex]}`)
                closestDiff = newDiff
                firstStamp = arr[i]
                secondStamp = arr[innerIndex]
            } 
        } 
    } 
    return (`${firstStamp}, ${secondStamp}`);
}

//TESTS
console.log(closestSum([10, 22, 28, 29, 30, 40], 54))
//Output: 22 and 30

console.log(closestSum([1, 3, 4, 7, 10], 15))
//Output: 4 and 10