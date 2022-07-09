
function matchingStrings(strings, queries) {
    // identify how many times a string from our 'strings' parameter appears in the other array
    // commit a for loop to go through our query string, 
    // at each place, go through a for loop that iterates through our strings array
    const newArr = [];
    for(let i = 0; i < queries.length; i++){
        //as we iterate through the query
        // the innerIndex will go through the strings 
        let count = 0;
        for(let innerIndex = 0; innerIndex < strings.length; innerIndex++){
            // if the value is found, count ++
            if (queries[i] == strings[innerIndex]){ count++}
        }
        newArr.push(count);
    } 
    return newArr;
}

console.log (matchingStrings(["aba",
"baba",
"aba",
"xzxb"], ["aba",
"xzxb",
"ab"]))