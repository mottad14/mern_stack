//given a string of words(with spaces),
//return an array of words
//spaces are considered the separation between words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]

// The solutions below use Built-Ins

// const stringToWordArray = (str) => {
//   // split the string into an array of words using the space as the delimiter
//   let wordArray = str.split( ' ' );
//   // filter out the empty strings
//   wordArray = wordArray.filter( word => word !== '' );

//   return wordArray;
// }

// console.log(stringToWordArray("Did I shine my shoes today?"));
// console.log(stringToWordArray("Did I shine my shoes today?      "));
// console.log(stringToWordArray("two             words"));

// //write a function that, given a string of words(with spaces),
// //returns a new string with words in reverse sequence.
// //"This is a test" -> "test a is This"
// const reverseWordOrder = (str) => {
//   // split the string into an array of words using the space as the delimiter
//   let WordArray = stringToWordArray( str );
//   // reverse the array
//   let reversedWordArray = WordArray.reverse();
//   // join the array back into a string
//   let reversedString = reversedWordArray.join( ' ' );
//   // return the reversed string
//   return reversedString;
// }

// console.log(reverseWordOrder("This is a test"));
// console.log(reverseWordOrder("A man a plan a canal Panama"));




// The solutions below do not use many built in functions/methods
// const stringToWordArray = (str) => {
//     var strArray = []
//     for (let i = 0; i < str.length; i++) {
//         var word = ""
//         while (str[i] != " " && i < str.length) {
//             word += str[i]
//             i++;
//         }
//         strArray.push(word);
//         while (str[i+1] && str[i+1] == " ") {
//             i++;
//         }
//     }
//     return strArray;
// }

// const reverseWordOrder = (str) => {
//     var reverseWords = ""
//     for (let i = 0; i < str.length; i++) {
//         var word = ""
//         while (str[i] != " " && i < str.length) {
//             word += str[i]
//             i++;
//         }
//         reverseWords = word + " " + reverseWords
//         while (str[i+1] && str[i+1] == " ") {
//             i++;
//         }
//     }
//     return reverseWords;
// }