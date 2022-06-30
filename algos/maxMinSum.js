function miniMaxSum(arr) {
    // Write your code here
    // finding the min, max values that can come from
    // adding 4/5 integers in the array
    let minInd = 0;
    let maxInd = 0;
    let sum = 0;
    for(let i =0; i < arr.length; i++){
        if (arr[i] < arr[minInd]) minInd = i;
        if (arr[i] > arr[maxInd]) maxInd = i;
        sum += arr[i]
    }
    console.log("The current maxInd and minInd are", maxInd, minInd)
    let minSum = sum - arr[maxInd];
    let maxSum = sum - arr[minInd];
    console.log(minSum, maxSum)
}

miniMaxSum([7, 69, 2, 221, 8974]);

