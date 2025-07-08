// Object.assign syntax

let obj = {
    name: 'hadi'
}

let obj2 = {
    age: 20
}

// let returnValue = Object.assign(target, input2, input3, input4, ...)
let copyObj = Object.assign({}, obj)

// target is copyObj

// console.log(target === copyObj) 

// console.log(target)


// 
let person = {
    name: 0
} // {}

// console.log(person)

let hasName = person.hasOwnProperty("name")


// delete person.name

// console.log(person)

// person.name // undefined

// if("name" in person) { // if(falsy value)

// }

// console.log(hasName)




function getFullName(firstName, lastName) {
    let fixedLastName = lastName;
    if(typeof lastName !== "string") {
        fixedLastName = ''
    }

    let fixedFirstName = typeof firstName === "string" ? firstName : '';
   
    return fixedFirstName + " " + fixedLastName
}


// let hadiFullName = getFullName("hadi", "tabatabaei")
// console.log(hadiFullName)

// let result = getFullName("hadi")
// console.log(result) // "hadi [NO LAST]"

// let result3 = getFullName("hadi", undefined);
// console.log(result3) // "hadi [NO LAST]"

// let result4 = getFullName("hadi", null)
// console.log(result4) // "hadi "

// let result2 = getFullName(null,"tabatabaei")
// console.log(result2) // "tabatabaei"

// Functions are Objects
// property/key addition/deletion
getFullName.name // "getFullName"
getFullName.folan = "bisar";
getFullName.length // kiana: 11 - 2
// getFullName.folan
// assign to variable
let someFunction = function() {

}

// someFunction()

let anotherFunction = getFullName

getFullName()
anotherFunction()



// passing to functions
// Callback
function handleFolan(afterCallback) {
    console.log('salam')
    return afterCallback(2)
}

function myFunction(foo) {
    console.log('Called')
    return foo * 5
}

let result = handleFolan(myFunction)
console.log(result);
// salam
// Called
// 10

// having a function which returns another function


// handleFolan(undefined)
// handleFolan(...)
// myFunction()
// console.log('Called')
// handleFolan(undefined)
// console.log('salam');
// undefined();
