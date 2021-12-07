// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.length)

// a) Your answer: 9, spelled out, 
// b) Verify and explain: In order to determine the length the console it ordered to determin the length of the values in the string "Echo 2021". The space counts as a character.


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: "l", the second "l"
// b) Verify and explain: Strings are indexed to 0. the second "l" is index === 3.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: See above^. Arrays are indexed to zero. 


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY, SUNDAY", nothing
// b) Verify and explain: .toUpperCase() is a string method and cannot be used on arrays. Tools that could make this work: .join(" "), function  (array) => {}, for loop.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: "error", number, 0 
// b) Verify and explain: number: .length returns a number (3) and 3 is typeof number. 
