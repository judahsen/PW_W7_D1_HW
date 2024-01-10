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
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Example: "4",  "5" --> "9"

function sumStr(a,b){
    const num1 = a ? parseInt(a) : 0;
    const num2 = b ? parseInt(b) : 0;

    const result = num1 + num2;
    const rtnStr = result.toString();
    
    return rtnStr;

}
console.log(sumStr(4,5))


// Codewras Problem 2
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".


function greet(Name){
    //your code here
    return `Hello, ${Name} how are you doing today?`;
  }

  console.log(greet('Ryan'))
