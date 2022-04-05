console.log("----------------SOME ARITHMETIC OPERATORS---------------")
console.log(5 + 8) // 13
console.log(4 / 8) // 0.5
console.log(3 * 8) // 24
console.log(3 ** 3) // 27 - 3^3
console.log(10 % 3) // 1

console.log("\nHow to figure out if a number is even or odd?")
console.log("Even number, remainder of the division by 2:", 10 % 2)
console.log("Odd number, remainder of the division by 2:", 11 % 2)

console.log("\n----------------THE PLUS OPERATOR---------------\n")

console.log("Hello" + " " + 'EPICODE students!')

let eiffel = "Eiffel"
let sixtiFive = 65
let eiffelSixtyFive = eiffel + sixtiFive
console.log("We can concatenate different types:", eiffelSixtyFive)
// When you sum different types, everything gets converted to a string and then concatenated.

// BE CAREFUL WITH THIS. As already noted, mixing different types can be risky.
console.log("\nBEWARE the difference here:")
console.log(45 + 16)
console.log(45 + "16")
