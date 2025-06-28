// Objects
// Object-Oriented Programming

// Method -> function
// Property

// if(..) { // if - block 

// }

// for(...) { // block

// }

// let names = [] // Empty Array

let emptyObject = {} // Empty Object

let person = {
    age: 27,
    name: 'Hadi Tabatabaei', // Key: Value
    skills: ["JS", { title: "TS"}, "Python"],
    walk: function() {},
    walk2: () => {},
    walk3() {}
}

person["w" + "a" + "l" + "k"]()

let names = ["name", "age"]

person.skills[1]["title"]  // "TS"

names[1] // Index Signature

// Property Access (Read)
console.log(person.age)     // Dot Operator - Property Access
console.log(person["age"])  // Index Signature | Dynamic Property Access


let dynamicPropertyKey = "name";
console.log(person[dynamicPropertyKey])

// Property Write
person.age = 20
person.skills.push()

console.log(person.age)

person["age"] = 30

console.log(person.age)



const cars = ["bmw", "pride"]

cars.length
cars.push("benz")
cars.toString()


// Boxing and UnBoxing - Box شدن - UnBox شدن

// myName[0] // String

// for(let i = 0; i < myName.length; i++) {
//     console.log(myName[i])
// }

// String character access
// myName[indexNumber]
let myName = "Hadi Tabatabaei"

console.log("---------------")
console.log(myName.length)
console.log(myName.at(0))
console.log(myName.charAt(0))
let newName = myName.concat("salam", " " ,"khodafez") // myName + "salam" + "khodafez"
// console.log(newName)
console.log(myName)
console.log(myName.endsWith("ee"))
console.log(myName.includes("taba"))
console.log(myName.indexOf("taba"))
console.log(myName.indexOf("a"))
console.log(myName.lastIndexOf("a"))
console.log(myName.padEnd(20, "*"))
console.log(myName.padStart(20, "*"))
console.log(("     hadi   ").trim())
let upperCaseMyName = myName.toUpperCase();
console.log(myName);
console.log(upperCaseMyName)
console.log(myName.toLowerCase())
console.log(myName.toUpperCase())
// console.log(myName.startsWith)
console.log(myName.replace("Hadi", "Ali"))
console.log(myName.slice(2, 6))


const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseAlphabet = alphabet.toUpperCase();

console.log(alphabet, upperCaseAlphabet)

for(let i = 0; i < alphabet.length; i++) {
    console.log(alphabet.charCodeAt(i))
}

console.log('---')

for(let i = 0; i < alphabet.length; i++) {
    console.log(upperCaseAlphabet.charCodeAt(i))
}
    
console.log(String.fromCharCode(81, 82, 83))

alphabet.split("-") 

cars.join("-") // "bmw-benz-pride".split("-") ["bmw", "benz", "pride"]


let age = 20.454;

"132r32".localeCompare("abcede")

"a" > "A" // true
