//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5
//you can assume the minute hand moves perfectly from one minute
//to the next.
//BONUS: the parameter accepts the number of SECONDS after midnight

const clockAngles = (minutes) => {
    //Take minutes, and find what division of 60 it's at
    let minuteHand = minutes%60 
    let hourHand = (minutes/60)%12
    console.log(`The time displayed is: ${Math.floor(hourHand)} hours and ${minuteHand} minutes`)
    let minuteAngle = 360 * (minuteHand/60) 
    let hourAngle = 360/12 * hourHand
    return (console.log(`The Hour hand sits at ${hourAngle}ºs, the Minute hand sits at ${minuteAngle}`)), [hourAngle, minuteAngle]
    
    //take minutes, divide by 60 
    //This will give us the total hours that the clock has had gone by 
    //for e.g. 310 - gives us 3.5
    //if we know that the hour hand is at 3 and the minute hand is at 30 
    //- we should be able to calculate that per every moved hour is 30º
}

console.log(clockAngles(360));
console.log(clockAngles(180));
console.log(clockAngles(210));
console.log(clockAngles(588));
console.log(clockAngles(980));
console.log(clockAngles(361));
