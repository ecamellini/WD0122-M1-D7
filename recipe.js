// Let's see som strings.
// Single quote, double quote, or backtick to define strings.
console.log('Hello! Welcome to the programming kitchen :)')
console.log("Let's start coding some cookies!") // Double quote allow us to use single quote inside

// Escape sequences: use the backslash \ to avoid a character to have it's usual effect.
// For example, the two double quotes inside this string do not open or close the string.
console.log("Obviously, it's not a \"real\" kitchen.")

// Another important escape sequence: \n to add a newline.
console.log("\nLet's start with the ingredients:")
let addVanilla = true
let flour = 200

// flour = "200"
// ^^^^^ JavaScript does not care if this was a number.
// It will throw it away and put the string "200" in flour.
// Even if you put "Jhon" instead of "200", JS will try to figure out what to do.
// YOU SHOULD NEVER DO THIS. NEVER ASSIGN DIFFERENT TYPES OF DATA TO THE SAME VARIABLE.
// WHY? Because you can cause unexpected bugs later in the code...
// This was a number, and now we make it a string. Who knows what happens later...
// JS will never complain. SO, YOU SHOULD BE CAREFUL ABOUT THIS.

// Imagine that we get butter and sugar through a form, the values are inserted by the user
// For some reason, that form gives us STRINGS
let butterInput = "80"
let sugarInput = "120.5"
// We need numbers. We parse the strings that we received.
let butter = parseInt(butterInput)
let sugar = parseFloat(sugarInput) // If you used parseInt, it would ignore the .5

// We can give more than one thing to console.log, using the comma.
// Everything will be printed on the same line with spaces in between.
console.log("Butter:", butter) // This will print: "Butter: 80"
console.log("Sugar:", sugar)
console.log("Flour:", flour)

console.log("\nLet's get a medium bowl to mix the ingredients.")
let mediumBowl
console.log("It's still empty, its content is:", mediumBowl)

console.log("\nWe mix butter and sugar in it.")
mediumBowl = butter + sugar
console.log("Now it contains:", mediumBowl)

console.log("\nLet's also add flour.")
mediumBowl += flour // EXACTLY LIKE WRITING mediumBowl = mediumBowl + flour
console.log("The content now is:", mediumBowl)

console.log("\nShould we add vanilla?", addVanilla)

// I have 0.5 of vanilla, I want to add it only in case addVanilla is true
if (addVanilla === true) {
  console.log("We are adding also some vanilla :)")
  mediumBowl += 0.5
}

// AFTER THE IF STATEMENT, THE EXECUTION GOES BACK TO NORMAL.
// The following instructions are executed in any case.
console.log("\nThe mix is ready. Here it is:", mediumBowl)

console.log("\nWe are done. We empty the bowl.")
mediumBowl = null
console.log("Content is:", mediumBowl)
// REMEMBER: We use null when we want to make something empty explicitly.
// It's not empty by accident - WE made id emtpy.
