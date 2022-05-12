const dedupe = (str) => {
    // create a new array 
  let newStr = [];
  // split the str to an array
  let strList = str.split( '' );
  // make a reverse loop and unshift the first letter
  for ( let i = strList.length - 1; i >= 0; i-- ) {
    // checking if has already a char in the new array
        if (!newStr.includes(strList[i])) {
            newStr.unshift(strList[i]);
        }
    }

  // join an set the str = the the filtered array
    str = newStr.join('');

    return str;
};