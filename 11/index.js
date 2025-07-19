// Review scope


// global 
// sayHi
// myWorld
// if
// else

/*  
                   -> myWorld
    global -> sayHi -> If
                   -> else
*/

let person2 = {
    sayHi(welcome) {
        function myWorld() {
            console.log('My World')
        }
        if(welcome) {
            console.log(myWorld() + welcome)
        } else {
            console.log(myWorld())
        }
    }
}



// Arrow Function

// Function Declaration
function foo() {

}

// Function Expression
let bar = function () {}

let myArrow = (input1, input2) => {
    return input1 + input2
}

function myFn(input) {
    return input + 2;
}

let myArrow2 = (input) => input + 2

let myArrow4 = input => input + 2

let myArrow3 = (input) => {
    return input + 2;
}

myArrow2(5)



// let result = myArrow(2, 3);





function handleFolan(afterCallback) {
    console.log('salam')
    return afterCallback(2)
}

function myFunction(foo) {
    console.log('Called')
    return foo * 5
}

// let result0 = handleFolan(myFunction)

// filter(isGoodPerson) // 

// let result = handleFolan((input) => {
//     console.log('Called')
//     return input * 5
// })

// let result2 = handleFolan(function (input) {
//     console.log('Called')
//     return input * 5
// })

// console.log(result);
// salam
// Called
// 10


// function foo() {}

// const foo = () => {}




// Array Methods

let numbers = [1, 2, 3, 4, 5]

/*
    .forEach X
    .map X
    .filter X
    .every X
    .some X
    .find X
    .reduce X
    .sort X
*/


function logNumber(number, index) {
    console.log(number + 'index' + index)
}
// numbers.forEach(logNumber)

// numbers.forEach((item, i) => {
//     console.log(item + 'index' + i)
// })

// console.log('salma')

// console.log(result) // undefined


// numbers.forEach(
//     function(item, index)    {
//         console.log(item + 'index' + index)
//     }
// )
// for(let i = 0; i < numbers.length; i++) {
//     const item = numbers[i];
//     console.log(item + 'index' + i)
// }





// به ازای هر عضو، تابعی که بهم دادی رو فراخوانی می‌کنم
// بهت یک آرایه‌ی جدید بر می‌گردونم
// به ازای هر بار فراخوانی تابع ورودی برای عضو ایتریشن، خروجی تابع، به عنوان مقدار متناظر عضو در آرایه‌ی جدید لحاظ می‌شود
// let newNumbers = numbers.map(
//     (item) => {
//         console.log('salam')
//     }
// )

// console.log(newNumbers) // undefined
// [undefined, undefined, undefined, undefined]

// newNumbers همیشه آرایه‌ است



function isEven(number) {
    return number % 2 === 0
}
// همیشه آرایه هست
// من تابع ورودی رو به ازای هر عضو فراخوانی می‌کنم.
// اگر تابع، مقدار تروسی برگرداند، من عضو را در آرایه‌ی خروجی لحاظ می‌کنم.
// اگر تابع، مقدار فالسی برگرداند، من از روی عضو رد می‌شم و کاری باهاش نمی‌کنم
let newNumbers = numbers.filter(function (number) {
    return number % 2 === 1
})
console.log(newNumbers) // [1, 2, 3, 4]
// []


// result == true | false
let result = ([2, 4, 3, 8]).every((item) => {
    return item % 2 === 0
})
console.log(result)

// resultSome == true | false
let resultSome = ([2, 4, 3, 8]).some((item) => {
    return item >= 20
})
console.log(resultSome)


let foundResult = numbers.find((item, index, array) => {
    return item === 10
})

console.log(foundResult)

// numbers.join(',') // '1,2,3,4,5'
// کاهش
// آرایه‌ی ورودی‌ مارو به یک دیتایی که خودمون مشخص می‌کنیم، تبدیل/کاهش می‌ده
let finalResult = numbers.reduce(
    (accum, item, index) => {
        if(index === numbers.length - 1) {
            return accum + item
        }
        return accum + item + ','
    },
    ''
)

console.log(finalResult)

/*
    accum = 0
    accum = 1
    accum = 3
    accum = 6
    accum = 10
    accum = 15



*/



let items = [
    { age: 10000}, 
    { name: 'Hadi', age: 2},
    { name: 'Ali', age: 2}, 
    { age: 20},
]

// Positive Number (1, 2, 3) (item1 < item2)
// Zero (0) (item1 == item2)
// Negative (item1 > item2)

// نکته‌ی مهم: تابع سورت، آرایه‌ی اولیه را خراب می‌کند.
// In Place - Stable Sort
let sortedItems = items.sort(
    (item1, item2) => {
        return item1.age - item2.age // Negative
    }
)
console.log(sortedItems)
console.log(items)

console.log(sortedItems === items)




// SetTimeout
// SetInterval
// EventLoop
// Promise

// Browser (DOM)