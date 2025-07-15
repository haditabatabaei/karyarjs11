// Scope
// Higher order Function
// Functions that return a function declaration

function secondFunction() {
    console.log('SecondFunction Called')
}

function firstFunction() {
    let myNumber = 2 + 3;

    return secondFunction
}

// let myFn = firstFunction();
// myFn()
// console.log(myFn === secondFunction)


// getAdder is a Higher Order Function
// Higher Order [...]
// Higher Order Component

function getAdder(number) {
    return function adder(secondNumber) {
        return number + secondNumber
    }
}

let fiveAdder = getAdder(5);
let oneAdder = getAdder(1);

let result = getAdder(5)(2)

// console.log(result)
// console.log(oneAdder(-10))
// console.log(fiveAdder)


// Function Signature
function sumFromTo(start) {
    return function sum(target) {
        let result = 0;
        for(let i = start; i <= target; i++) {
            result += i
        }
        return result;
    }
}

let sumfromOne = sumFromTo(1);

// console.log({ 
//     result1: sumfromOne(100),
//     result2: sumfromOne(1000),
//     result3: sumfromOne(287543)
// })

/*
sumFromTo(1)(100) 
VS
sumFromTo(1, 100)
sumFromTo(1, 100)
sumFromTo(1, 287543)
*/


// Scope - دوربین
// Scope -> توی یک قسمت مشخصی از کد، به چه متغیر‌هایی دسترسی داریم

// let myNumber = 3;

// myNumber;

// if() {}
// for() {}
// while() {}
// try {}
// catch {}
// switch() {}
// else {}


function c() {
    return Math.ranomd() > 0.5
}

// Scope Chain
/*
    global -> foo -> if1 -> bar
                  -> if2 -> if3
*/
// var -> 
// هرجایی تعریفش کنید، انگار که در اولین اسکوپ فانکشن بالا سرش تعریفش کردید
// es6 2015 -> 2016 - 2017 (chrome version 50-55) 40
// let, const -> همون اسکوپی که توش تعریف شدند
// object -> با بلاک اشتباهش نگیرید.

// let, const (block scope), var (function scope)
// 
 
const salam = 'fjwrpjf';
// TDZ - Temporal Dead Zone

function foo() {
    console.log({ abbas });
    if(false) { // 1
        var abbas = 5; // assignment -> RunTime // 
        console.log({ abbasInIf1: abbas })
    }

    if(true) { // 2 
        console.log({ abbasInF2: abbas })
        if (true) { // 3
            // epiwfjwe
        }
    }
}
foo()

// var 

// 3 scope
// 1x: Global - اگر متغیری رو توی این اسکوپ تعریف کنیم، در همه‌جای برنامه در دسترسه
// 2x: Function - خود تابع و توابع و بلاک‌های داخلش
// 3x: Block - خود بلاک و توابع و بلاک‌های داخلش

// spread
// ...

let person = {
    name: 'hadi',
    address: {
        street: '25th'
    }
}
// Shallow Clone - Object.assign

let copyPerson = { name: 'Ali', ...person, foo: 'bar' }

console.log(copyPerson);
console.log(person)

let numbers = [1, 2, 3, 4];

let copyNumbers = [...numbers, 5, 10, 20];

console.log(copyNumbers);
console.log(numbers);


// arguments
function myFunction(...args) {
    for(let i = 0; i < args.length; i++) {
        let argument = args[i]
        console.log(argument)
    }
}

let inputs = [1, 'salam', 3];

// myFunction(1, 'salam', 3);
myFunction(...inputs) // myFunction(1, 'salam', 3)
// console.log('salam', 2, {}, [1,245], 134)



// Destruction Syntax
const { name, ...restPerson } = person
console.log(name);
console.log(restPerson)
// const name = person.name

const [ first, second ] = inputs;
// const first = inputs[0];
// const second = inputs[1]
const [one, ...rest] = inputs
// const one = inputs[0]
// const rest = ['salam', 3]

console.log(one)
console.log(rest)


// function foo(obj) {
//     const name = obj.name;
// }

// function foo({ name }) {
//     // name
// }



function bar() {
    console.log({ abbas });
    if(true) { // 1
        let person = {
            sayHi: function () {
                console.log('Hi')
            }
        }
    }

    if(true) { // 2 
        console.log({ abbasInF2: abbas })
        if (true) { // 3
        }
    }
}






