//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"

//This one is WITH built-ins
// const rotateString = (str, num) => {
//     let startIndex = (str.length) - num
//     let endChars = str.slice(startIndex, str.length)
//     let startChars = str.slice(0, startIndex);
//     return endChars + startChars;
// }

//WITHOUT Built Ins
const rotateString = (str, num) => {
    let startIndex = (str.length) - num;
    let rotatedString = '';

    for (let i=startIndex;i<str.length;i++) {
        rotatedString += str[i];
    }

    for (let i=0;i<startIndex;i++) {
        rotatedString += str[i]
    }

    return rotatedString;
}

// let testString = "012345";
// console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 27));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2) => {
    for (let i=0;i<str1.length;i++) {
        if (rotateString(str1, i) === str2) {
            return true;
        }
    }
    return false;
}

console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));