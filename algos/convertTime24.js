function timeConversion(s) {
    // Write your code here
    // Take a look at the final 2 values of the input string 
    // Then use that information to print either the same value, or 
    // A value with 12 hours added
    if (s[s.length-2] == 'P' && parseInt(s.slice(0,2)) != "12"){
        let newTime = parseInt(s.slice(0,2))
        newTime +=12;
        return(`${newTime}${s.slice(2,(s.length-2))}`)
        
    } 
    if (s.slice(0,2) == "12" && s[s.length-2] != 'P' ){
        return(`00${s.slice(2,(s.length-2))}`)
    }
    return (s.slice(0,(s.length-2)))
}
console.log(timeConversion("11:05:45PM"))
