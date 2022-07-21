// Given an array of integers, where all elements but one 
// occur twice, find the unique element.

// Example
// a = [1,2,3,4,3,2,1]
// The unique element is 4.

// Here, I used the exclusive-or operator (^) - XOR - is a bitwise operator, 
// and it stands for "exclusive or." It performs logical operation. If input bits 
// are the same, then the output will be false(0) else true(1).

function lonelyinteger(a) {
    // Write your code here
    let exOr = a[0]
    for(let i=1; i < a.length; i++){
        exOr= exOr ^ a[i]        
        }
    return exOr;
}

