//take in a string representing an int in hexadecimal 
//notation and return the value in decimal notation
// given "1D2", return 466
const hexStrToDec = (str) => {
    for (let placeValue = 0; i < str.length; i++){
        // Each placeValue is demonstrates that we're at least 16 values held by that place unless it's the first. 
        // 16 ^ 0 = 1
        // 16 ^ 1 = 16
        if (placeValue == 0){

        }
        if (str[(length-1)-i] == 'a')
    }

    // go through the string at furthest most point to the right - 
    // depending on its value, if a value of a, b, c, d, e, or f are given --> 10, 11, 12, 13, 14, 15
    // should be known as its integrants. 

    // the next place value over is equivalent to 16 * whatever value is in it. 
    // so for example:  10 = 16, 1a = 32

}

// console.log(hexStrToDec("1D2"));
// console.log(hexStrToDec("2C1"));
// console.log(hexStrToDec("3B5"));
// console.log(hexStrToDec("FFF"));

//given an integer, return a string representing the 
//hexadecimal value
//given 108, return "6C"
const decToHexStr = (val) => {
}

// console.log(decToHexStr(108));
// console.log(decToHexStr(420));