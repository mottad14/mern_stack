//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
const encode = (str) => {
    // Create a newString
    let newString = '';
    // Create a count variable that resets to 1 everytime we jump out of the concatanating loop
    let count = 1;    
    // go through the string, identify if the current and the next character 
    //are the same (enter the concatanating loop that continually checks if the next set of characters are also equal --> for loop)
    for (let index = 0; index < str.length; index++) {    
        let iLIndex = index
        while (str[iLIndex] === str[iLIndex+1]) {
            iLIndex +=1;
            count +=1
        }
        index = iLIndex;
        newString += (str[index]) + count.toString();
        count = 1;
    }
    return newString;
    // then we push those into newString - with the "count" of the number of characters
}

// console.log(encode("aaabbcccc"));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
    let newString = ""
    //This regex allows us to identify multi-digit or single-digit numbers within
    // apparently, /\d+/g does a global search for digit-characters  
    let r = /\d+/g;
    let m;
    let index =0
    // The exec() method executes a search for a match in a specified string. Returns a result array, or null.
    while ((m = r.exec(str)) != null) {
        // here, I repeat() the character found at str[index] the amount of times found by our exec() function's array at m[0]
        // and I save it in multiStr -- **for some reason, I couldn't += concatenate the string 
        let multiStr = str[index].repeat(m[0]);
        console.log(multiStr)
        // ** Here I concatenate the multiString to a newString which saves all concatenated / decoded characters  
        newString += multiStr;
        index += 1 + (m[0].length)
    }
    return newString
}

console.log(decode("a3b2c4"));
console.log(decode("t2h10j4"));

// console.log(parseInt("432"));
// console.log(parseInt2("432"));