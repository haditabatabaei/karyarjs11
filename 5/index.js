// Statement - بیانیه
// Expression - عبارت

// Expression Evaluation - محاسبه‌ی عبارت
2 + 3 // 5
// 20 + "salam" + 20
// Eval(20 + "salam") + Eval(20)
// Eval("20salam") + Eval(20)
// Eval("20salam" + 20)
// Eval("20salam20")
// "20salam20"


// Conditional Statement
// Conditional Expression
// Branch - برنچ

let age = 0 // number

// if(2 + 3 * ("salam" + 10) * 2) {

// } else if () {

// } else if () {

// }

// let state = age >= 18 ? "is adult" : "is child";


// TernaryExpression: Exp ? TrueExpresison : FalseExpression


// if(false) {

// }

// Loop Statement
// حرکت کردن - تکرار یه کار - به ازای هر ....

// Counter -10 10 0 100 1 99 1 +Infinity
// Body

// For loop
// While loop (while do, do while)
// For each (for of, for in, .forEach)
// Recursion (بازگشتی) - Recursive Function

// Iteration (تکرار)
// for(let i = 1; 20; i++) {
//     // eijfwiohfewiouf;
//     if(i === 5) {
//         break;
//     }
//     console.log(i)
// }
// Trace
// i = 1; // Iteration #1
// i = 1 * 2; // i 2 // Iteration #2
// i = 4 // Iteration #3
// i = 8 // Iteration #4
// i = 16

// while(Condition) { Do }
// let i = 0;
// let check = true;
// while (check) {
//     // Body

//     if(i === 100) {
//         check = false;
//     }
//     i++;
// }


// do {
    
// } while (0)


// Switch Case
let postState = 10;

switch (postState) {
    case "published":
        //
    case "removed":
        //
    default:
        // 
}



// Array
// Data Structure (DS) // Array
// Random Access Memory
// 10 -> 5 -> 1000
// HDD
// 0 -> 1 -> 2 -> ... -> 10 -> 9 -> 8 -> ... -> 2


// لیست ترتیب‌دار شروع شونده از جایگاه صفر
// اندیس index
// Zero-Based 0
// length طول آرایه - تعداد اعضای آرایه است
// Dynamic
let myArray = [10, "salam", 20, "hadi", 10];
// i = 0

// myArray.length // 3
// myArray[0]
// myArray[-1] // undefined
// myArray[2] // Last Item
// myArray[myArray.length -1] // Last Item
// myArray[1000] // undefined
// myArray[1] = 20



// for(i = myArray.length - 1; i >= 0; i--) {
//     // i = 0
//     // i = 1
//     // i = 2
//     console.log(myArray[i])
// }

// for(let item of myArray) {
//     console.log(item)
// }

// for(let index in myArray) {
//     // continue
//     // break
//     console.log(myArray[index])
// }

console.log(myArray.at(0))// 10
// myArray[0] // 10
myArray.indexOf(10) // 0
console.log(myArray.join('|'))// "10|salam|20|hadi"
console.log(myArray.lastIndexOf(10)) // 4
myArray.push("asghar", "taghi", "naghi", 2)
let lastItem = myArray.pop()
console.log(lastItem)
console.log(myArray);

while(true) {}


// Zombie ()
// یدونه پراسس/برنامه زامبی شده