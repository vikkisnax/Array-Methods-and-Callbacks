const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //






/* 🚀 Task 1: 
Practice accessing data by console.log-ing the following pieces of data note, you may want to FILTER the data first 😉*/



const finals2014 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === 'Final';
});

console.log(finals2014);





//(a) Home Team name for 2014 world cup final
finals2014.forEach(function(item){
    console.log(`Home Team: ${item[ 'Home Team Name' ]}`);
});

    // can i put const home2014 =  in front?




//(b) Away Team name for 2014 world cup final
        // i did it as an arrow function
finals2014.forEach((item)=>
console.log(`Away Team: ${item[ 'Away Team Name']}`)
);





//(c) Home Team goals for 2014 world cup final
finals2014.forEach((item)=>
console.log(`Home Goals: ${item[ 'Home Team Goals']}`)
);






//(d) Away Team goals for 2014 world cup final
finals2014.forEach((item)=>
console.log(`Away Goals: ${item[ 'Away Team Goals']}`)
);








//(e) Winner of 2014 world cup final */
finals2014.forEach((item)=>
console.log(`2014 Winner: ${item[ 'Win conditions']}`)
);









/* 🚀 Task 2: 🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
   return data.filter(function(item){
       return item.Stage === 'Final';
   });
}

console.log(getFinals(fifaData));







/* 🚀 Task 3: 🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(arr, getFinalsCB) {
//    const years = [];

//    getFinalsCB(arr).forEach((item)=>
//     years.push(`Year in Finals: ${item.Year}`)
//    );

   const years = getFinalsCB(arr).map(item => item.Year);
   return years;
}

console.log(getYears(fifaData, getFinals));

// could also have used map:
// const years = getFinalsCB(arr).map(item => 
// (`Year in Finals: ${item.Year}`));
// return years;









/* 🚀🚀 Task 4: 🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning COUNTRIES in an array called `winners` */ 

function getWinners(arr, getFinalsCB) {
    const winners = getFinalsCB(arr).map((item) => {
        if (item['Home Team Goals'] === item['Away Team Goals']){
            return `${item['Home Team Name']} and ${item['Away Team Name']}`;
        } else if (item['Home Team Goals'] > item['Away Team Goals']){
            return `${item['Home Team Name']}`;
        } else {
            return `${item['Away Team Name']}`;
        }  
    })
    return winners;
}

console.log(getWinners(fifaData, getFinals))

//consider win conditions and Goals
//need to do if condition to see who won - look at score
// getFinals has data from teams in the finals
// so we need to access the getFinals data INSIDE of getWinners












/* 🚀🚀 Task 5: 🚀🚀🚀
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getFinals from task 2
3. Receive a callback function getYears from task 3
4. Receive a callback function getWinners from task 4
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 5.
 */

function getWinnersByYear(arr, getFinalsCB, getYearsCB, getWinnersCB) {
    const years = getYearsCB(arr, getFinalsCB);
    // console.log(years);
    const countries = getWinnersCB(arr, getFinalsCB);
    // console.log(countries); 
    return years.map((item, i) => {
        return `In ${item}, ${countries[i]} won the world cup!`;
    });
}

console.log(getWinnersByYear(fifaData, getFinals, getYears, getWinners));






/* 🚀🚀🚀 Task 6: 🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(arr, getFinalsCB) {
    const finals = getFinalsCB(arr);
    const total = finals.reduce(function(accumulator, item){
        return accumulator + item['Home Team Goals'] + item['Away Team Goals']
    }, 0); 
  return (total / finals.length).toFixed(2);    
}

console.log(getAverageGoals(fifaData, getFinals));











/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the NUMBER of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */






// function teamInitials(arr){
//     const finals = getFinals(arr);

//     return finals.map(function(item){
//         return `${item['Home Team Initials']}, ${item['Away Team Initials']}`
//     });
// }
// console.log(teamInitials(fifaData));



// function getCountryWins(arr, teamInitialsCB, getFinalsCB, getWinnersCB) {
//     const winnerYear = getWinnersCB(arr, getFinalsCB);

//     const country = winnerYear.reduce(function(accumulator, item){
//         return accumulator + item['Home Team Initials']
//     }, 0);

//     return country;
// }

// console.log(getCountryWins(fifaData, teamInitials, getFinals, getWinners))




/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}