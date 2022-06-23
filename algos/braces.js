function validBraces(braces){
    while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1) {
        braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
    }
    return braces.length == 0;
}
  


//TESTS:
console.log(validBraces("(){}[]")) //True
console.log(validBraces("([{}])")) //True
console.log(validBraces("(}")) //False
console.log(validBraces("[(])")) //False
console.log(validBraces("[({})](]")) //False