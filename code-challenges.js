// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.
   
    // tools to use: if statement
    // if temp is greater than 212 log "temp is above boiling point"
    // else if tempature is equal to 212 log "tempature is at boiling point"
    // else log " tempature is below boiling point"


// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"


var temp = 42
var temp = 350
var temp = 212

    // if(temp > 212){
    //     console.log(temp, "is above boiling point")
    // } else if(temp === 212){
    //     console.log(temp, "is at boiling point");
    // } else {
    //     console.log(temp, "is below boiling point");
    // }






// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 42, 9, 13]

// to make a new array and use the concat method
// this keeps the code clean and short

// const newArray = myNumbers1.concat(myNumbers2).length;
// console.log(newArray);
// console.log(myNumbers1.concat(myNumbers2).length);



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

var currentCohort = "Echo 2021"

// We want to code to flip over. 
// Use the .split() method, .reverse() and lastly .join() 
// split and join each need quotes as thier arguments
// dot notation
// console.log(currentCohort.split("").reverse().join(""));

// // Decalring each step as its own individual variable
// console.log(currentCohort);
// var splitString = currentCohort.split("")
// console.log(splitString);
// var reverseArray = splitString.reverse()
// console.log(reverseArray);
// var joinArray = reverseArray.join("")
// console.log(joinArray);


// console.log(currentCohort.split("").reverse().join(""));

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"
                                                        // [ 'odd', 'even', 'odd', 'even', 'odd', 'even' ]

var myArray = [13, 34, 5, 10, 27, 42]
// output: "odd" "even" "odd" "even" "odd" "even"
// create results array
var results = []
// itterate over an entire array of numbers
    for(let i=0; i<myArray.length; i++){
        // check if current number is odd
        var currentNum = myArray[i]
        // if current is odd then current number equlas the string odd
        if(currentNum % 2 === 1){
            currentNum = "odd"
            // console.log("odd");
        } else {
            // else the current number equals the string even
            currentNum = "even"
            // console.log("even");
        }
        // push current element to the results array
        results.push(currentNum)
    }
// log the results array
    console.log(results);


// itterate over an entire array of numbers
for (let i = 0; i < myArray.length; i++) {
  // check if current number is odd
  var currentNum = myArray[i];
  // if current is odd then log the string odd
  if (currentNum % 2 === 1) {
    console.log("odd");
  } else {
    // log the string even
    console.log("even");
  }
}


// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

var number1 = 58
var number2 = 100


// var number1 = 27
// var number2 = 24

var number1 = 5
var number2 = 5

// create a response variable
var response = 0
// use a conditional statement to compare numbers 1 and numbers 2
// if number 1 is smaller subtract number one from number 2
   

    if(number1 < number2){
        // reassign result to the response variable
        response = number2 - number1
        // else we will subtract 2 from 1 
    } else{
        // reassign result to the response variable
        response = number1 - number2;
    }
// log response variable
// console.log(response);
