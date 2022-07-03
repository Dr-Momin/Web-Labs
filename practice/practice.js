
// Strings and Regex

let dollar = "﹩"
let love = "❤️"

// console.log(dollar.length);
// console.log(love.length);

// '', "", ``

// escape sequence

// \n, \u, \'

let myString = "hello, hitesh"

console.log(myString.substring(1, 4));
myString.slice(1, 4)
console.log(myString.slice(-6))

myString.indexOf("i")
myString.indexOf("e", 3)
myString.lastIndexOf("h")

myString.startsWith("+91")
myString.endsWith("@ineuron.ai")
myString.includes("test")

myString.toLowerCase()
myString.toUpperCase()
myString.normalize()

console.log("HDFC334433".padStart(12, "0"))

"*".repeat(15) // return you a new string

let score = 100

let greeting = `\
${dollar} is at
value of ${score}
\u2718
`
// console.log(greeting);

let myNewString = String.raw`\u2718`.length

console.log(myNewString);

