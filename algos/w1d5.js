const partition = (arr) => {
    // console.log(arr);
    const pivot = arr[0];
    let pivi = 0;

    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < pivot) {
            ++pivi;
            for (let j = i - 1; j >= 0; --j) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return pivi;
};

const quickSort = (arr) => {
    // console.log(arr);
    if(arr.length < 2) return arr;

    const pivi = partition(arr);

    console.log(`partition: ${arr}`);
    let leftHalf = arr.slice(0,pivi);
    let rightHalf = arr.slice(pivi + 1);
    
    leftHalf = quickSort(leftHalf);
    rightHalf = quickSort(rightHalf);
    // console.log(`left after recursion: ${leftHalf}`);
    // console.log(`right after recursion: ${rightHalf}`);

    let combine = [...leftHalf, arr[pivi], ...rightHalf];
    console.log(`combine: ${combine}`);

    return combine;
}

console.log(quickSort([7,45,2,67,3,2,1,6,4,5,2,8,14,1,3, 82, 90,-1,0]));