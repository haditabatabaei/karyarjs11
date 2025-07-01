// Object Iteration - حرکت روی آبجکت‌ها
// Memory Map Object (Call by Reference)
// Object Cloning (Shallow Clone - کپی کردن سطحی) - Deep Clone - کپی کردن عمیق
// Object.assign (old school)
// structuredClone (new)
// Object.keys, Object.values, Object.entries
// function

let person = {
    name: 'Hadi',
    skill: ['JS'],
}
let person2 = {
    name: 'Ali',
    skill: ['TS']
}
let people = [
    person,
    person2,
]

person.skills = ['react']
// let person2 = person;

person2.name = 'Ali'

console.log('Person:', person);
console.log('Person2:', person2)


let emptyObj = {}
let emptyObj2 = {}

emptyObj2.name = "Hadi"

emptyObj = emptyObj2;

// Garbage - آشغال
// Garbage Collector - آشغال جمع کن

console.log('=============')
for(let key in person) {
    console.log(key)
    // person.key // WRONG
    // person["key"] // WRONG
    console.log(person[key])
}

console.log('VALUES =======')

// for(let value of person) {
//     console.log(value)
// }


let age = 20
let copyAge = age;
copyAge = 30


// Cloning - Object Clone
let car = {
    name: 'pride',
    countries: ['iran', 'usa'],
    move() {}
}

let copyCar = {};

// Object cloning Dumbset way:
for(let key in car) {
    copyCar[key] = car[key]
}

// Shallow Clone - کپی‌ سطحی
console.log('car:', car)
console.log('copyCar:', copyCar)

// Shallow Clone
let copiedCar = Object.assign(copyCar, car)

// Deep Clone - Structured Clone

// Equality Operator = عملگر های مقایسه‌ای 
// == ===

let obj = {} // structure
let obj2 = {}

let arr1 = ['hadi']
let arr2 = ['hadi']

arr2 = arr1;

// arr1[0] === arr2[0] // 

obj === obj2 // false
arr1 === arr2 // true

// let deepCarCloned = structuredClone(car)
// console.log('deep clone:', deepCarCloned);
// console.log('car:', car)

// JSON.parse(JSON.stringify(car)) -- deep clone
let keys = Object.keys(car) // ['name', 'countries', 'move']
let values = Object.values(car); // ['pride', [], function() {}]

for(let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = car[key]
}


for(let i = 0; i < values.length; i++) {
    let value = values[i];
    // let value = car[key]
}


let entries = Object.entries(car) // جمع entry ها -
// چند تا entry
// ['name', 'pride'] // entry
// ['countries', ['iran', 'usa'] ] // entry

console.log(entries)

for(let i = 0; i < entries.length; i++) {
    let entry = entries[i]
    let key = entry[0];
    let value = entry[1]

    // ['name', 'pride']
}

// Tuple - تاپیل - تیوپل - یک لیستی است که طول آن ثابت است




// تابع
// f(x) = x + 2 // تعریف ریاضی
// f(2) // 4
// f, g, h

let name;
// function declaration
function plusTwo(x) {
    let result = x + 2
    name = 'hadi'
    return result
}
console.log('name:', name);
// function call - function invocation - فراخوانی کردن - صدا زدن - اجرا کردن
let final = plusTwo(2) // final == 4

console.log('name:', name)
console.log(final)


// let age5 = 50
// age5()

// Global objects
console.log(1, 2, 3, 4)

// سوال:‌آیا ۱ و ۲ و ۳ و ۴ خروجی تابع هست یا نه ؟

console.log(foo)

function login() {
    let userName = "hadi"
}

let loginResult = login();
console.log(loginResult)


function sum(op1, op2) {
    if(typeof op1 === 'number' && typeof op2 === 'number') {
        return op1 + op2
    }
}

let result1 = sum(2, 3)
let result2 = sum(7, -1);
let result3 = sum(5, "hadi")
let result4 = sum(sum(3, 4), 6 + 7);// sum(7, 6 + 7)
                                    // sum(7, 13)
                                    // 2
