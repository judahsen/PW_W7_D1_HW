//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    //Your code goes here


}

//Call method here with parameters
console.log(findWords())



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
}

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
