function flippingBits(n) {
    let oppositeString = "";
    let binaryString = "";
    let remainder = null
    let quotient = n
    while (quotient != 0){
        remainder = quotient%2
        binaryString =  remainder.toString() + binaryString
        quotient = Math.floor(quotient/2)
    }
    while(binaryString.length < 32) binaryString = "0" + binaryString;

    for(var i = 0; i < binaryString.length; i++ ){
        if (binaryString[i] == '0') oppositeString += "1";
        else if (binaryString[i] == '1') oppositeString += '0';
    }
    
    let total = 0;
    for (let i = 0; i < oppositeString.length; i++){
    total = (total * 2) + parseInt(oppositeString[i])
    }
    return total;
}

console.log(flippingBits(9))
console.log(flippingBits(3))
console.log(flippingBits(6))

