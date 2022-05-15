// const noMondays = new Promise( (resolve, reject) => {
//     if(2 !== 1) {
//         resolve("Good, it's not Monday!");
//     } else {
//         reject("Someone has a case of the Mondays!");
//     }
// });
// noMondays
//     .then( res => console.log(res) )
//     .catch( err => console.log(err) );


// Your mission is to rewrite the function using Promises. 
// Make sure your fiveHeads function will call the resolve function when 
// the coin has flipped "heads" five times in a row.

function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if(result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        var attempts = 0;
        let max = 100;
        while(headsCount < 5 && attempts <= max){
            attempts++;
            console.log(attempts);
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            
            } else {
            headsCount = 0;
        }
    }
        console.log(attempts)
        if (attempts <=max){
            resolve( `It took ${attempts} tries to flip five "heads"`);    
        } 
        else{
            reject( `After ${max} tries - we were unable to flip five "heads" in a row.`);    
        }
    })
};

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
// console.log( "When does this run now?" );




