// DESCRIPTION:
// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, 
// and false if it's invalid. All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// A string of braces is considered valid if all braces are matched with the correct brace.

function validBraces(braces){
    const bracket = new Map();
    let placeN = 1
    for (let index = 0; index < braces.length; index++) {
        // We've created a map, and a count - to potentially reference for the order that things have happened in
        //so as brackets go in, we reference the closing bracket
        //So long as the latest placeN has a closing bracket, then we should be able to delete that placeN value
        if(braces[index] == ")"){
            if (bracket.get(placeN-1) != "("){
                placeN--
                return false
            }
            placeN--
        }
        if(braces[index] == "]"){
            if (bracket.get(placeN-1) != "["){
                placeN--
                return false
            }
            placeN--
        }
        if(braces[index] == "}"){
            if (bracket.get(placeN-1) != "{"){
                placeN--
                return false
            }
            placeN--
        }
        //If the above conditions are not met, and an opening bracket-type is encountered, we increase the placeN
        if(braces[index] == "(" || braces[index] == "[" || braces[index] == "{"){
            bracket.set(placeN, braces[index])
            placeN++
        }
    }       
    // console.log(bracket)
    // console.log(placeN) 
    if (placeN == 1){
        return true
    }
    return false
}
  
//TESTS:
console.log(validBraces("(){}[]")) //True

// For this next case - we need a way to demarcate that there are multiple brackets that can be opened up within another portion 
// so long as the latter half of the brackets are closed in the same order
// We could push into an array with the currently selected bracket type -- the closing bracket type should be of the same type when closing 

console.log(validBraces("([{}])")) //True
console.log(validBraces("(}")) //False
console.log(validBraces("[(])")) //False
console.log(validBraces("[({})](]")) //False