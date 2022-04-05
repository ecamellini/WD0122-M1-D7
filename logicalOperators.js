console.log("------------LOGICAL OPERATORS------------\n")

// Suppose these values come from the user
// You don't know them in advance...
let height = 174
let eyeColor = "grey"
// let eyeColor = "Blue" --> this is different! The case mattert. Search how to use .toLowerCase()

// A boolean variable, result of a boolean operation/expression
// CONVENTION: we call boolean variables as it they are questions
let isTallerThan175 = height > 175
console.log("Is the user taller than 175?", isTallerThan175)

let isShorterOrEquals175 = !isTallerThan175 // ! means the oppsite, if true --> you get false
console.log("Is the user shorter or equals to 175?", isShorterOrEquals175)

let hasBlueEyes = eyeColor === "blue" // I'm asking myself if the input color is blue
console.log("Does the user have blue eyes?", hasBlueEyes)


console.log("\n-----------------COMBINING LOGICAL OPERATORS-------------\n")

// AND_________________
// We use Brackets whenever we have complex operations.
// Even though they are not needed: it's ALWAYS BETTER TO BE EXPLICIT
// Code becomes more readable.
// We are using AND: the result will be true only if all operands are true
let isHeightBetween170and180 = (height >= 170) && (height <= 180)
console.log("Is the user between 170cm and 180cm?", isHeightBetween170and180)

// OR__________________
// I want this to be true in case the user has either blue or brown eyes, false in any other case
// We have the color of the eyes of the user in the eyeColor variable
// We are using OR: the result will be true only if at least one of the two is true
let doesUserHaveBlueOrBrownEyes = hasBlueEyes || (eyeColor === "brown")
console.log("Does the user have blue or brown eyes?", doesUserHaveBlueOrBrownEyes)

console.log("\n-----------------IF STATEMENT-------------\n")
// Suppose that we are casting for a movie.
// We want to automate the first selection process.
// The user fills a form with their data: their height, and the color of their eyes.

// The user will be contacted for the audtion only if:
// - They are taller than or equals to 170
// - AND, they are shorter than or equals to 180
// - AND, they have either brown OR blue eyes

let shouldWeContactTheUser = isHeightBetween170and180 && doesUserHaveBlueOrBrownEyes

if (shouldWeContactTheUser === true) {
  // This code gets executed only if shouldWeContactTheUser is true
  console.log("The user has been contacted for the casting.")
}
