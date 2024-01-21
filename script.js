//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

function findWords(inputString, dogNames) {
    //Your code goes here
    let matches = [];

    for (let i = 0; i < dogNames.length; i++) {
        let currentDogName = dogNames[i];
        
        if (inputString.includes(currentDogName)) {
            matches.push(`Matched ${currentDogName}`);
        }
    }

    if (matches.length > 0) {
        for (let match of matches) {
            console.log(match);
        }
    } else {
        console.log("No Matches");
    }
}


let inputString = "I have a dog named Max and a cat named Whiskers.";
let dogNames = ["Max", "Buddy", "Whiskers", "Charlie"];



//Call method here with parameters
console.log(findWords(inputString, dogNames));



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
    }
}


let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
replaceEvens(arr);
console.log(arr);


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Codewars Problem 1
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Example: 1 -> -1  ,   -5 ->5

function makeNegative(number) {
    if (number > 0) {
        return -number;
    } else {
        return number;
    }
}

console.log(makeNegative(1));
console.log(makeNegative(-5));


// Codewras Problem 2
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// Example: Name = Ryan -> Hello, Ryan how are you doing today?


function greet(Name){
    //your code here
    return `Hello, ${Name} how are you doing today?`;
  }

  console.log(greet('Ryan'))
