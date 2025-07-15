// // صف - Queue

// // FIFO - First In First Out (صف عادی) - هرکی زودتر میاد زودتر می‌ره جلو
// // FILO - First In Last Out
// // LIFO
// // LILO

// // First In First Out (نونوایی)‌ (Queue)
// // length 3
// // head A
// // tail C
// // enqueue() // enqueue(C)
// // dequeue()
// // peek()
// // isEmpty()
// // C -> D -> A


// // First In Last Out - FILO - LIFO (Stack - پشته)
// // length 5
// // push() // push(Z6)
// // pop // pop() // Z6
// // peek() // Z5
// // isEmpty()

// // Z5 4 <- head
// // Z4 3
// // Z3 2 
// // Z2 1 
// // Z1 0 <- tail
// // ===============



// function handleFolan(afterCallback) {
//     console.log('salam')
//     return afterCallback(2)
// }

// function myFunction(foo) {
//     console.log('Called')
//     return foo * 5
// }

// let result = handleFolan(myFunction)
// console.log(result);

// در شروع برنامه یک استک خالی ایجاد کنید
// به هر بار فراخوانی یک تابع که رسیدید، اطلاعات آن را به استک پوش کنید
// اگر به ریترن رسیدید یا به پایان تابع رسیدید، استک را پاپ کنید
// مادامی که استک خالی نشده، عملیات را ادامه دهید
// استک که خالی شد، پایان برنامه است

// // Call Stack (Javascrip Engine)

// function log() {
//     // Logs to console and return 
// }

// function innerHello(input) {
//     console.log('Im here')
//     return input
// }

// function hello() {
//     console.log('salam');
//     let result = 2 + 3;
//     innerHello(result)
// }

// function helloWorld() {
//     hello();
// }

// helloWorld();







// function sum(arg0, arg1) {
//     returnz arg0 + arg1
// }

// function plusTwo() {
//     let plusThreeResult = 8
//     let anotherThreeResult = 5
//     return 13
// }

// function plusThree(arg0 = 5) {
//     return arg0 + 3
// }

// plusTwo()







// [




// ]


// let count = 0;
// Semi-Infinite Loop
// function sum2(n) {
//     // Exit Condition - شرط خروج X
//     return (sum2(n - 1) + n)
// }

// Infinite Loop
// while(true) {
//     console.log(1 + 2)
// }

// try {
//  sum2(5)
// } catch(error) {
//     console.log({ count })
// }

let person = {
    name: 'hadi'
}

let myName = 'hadi';
let age = 2;
// console.log({ myName: myName }) -> { myName }
console.log({ myName, age })








function someFunction(list) {
    list.push('salam')
}

function someFunction2() {
    someFunction([])
}

function someFunction3() {
    someFunction2()
}

someFunction3();


// Scope
// Higher order Function



/*


*/


//










// length += 16001
// Stack
/*
FName - Line - Args

Push
Push
Push
Push
sum2 116 - -1 // + 0
sum2 116 - 0 // + 1
sum2 116 - 1 // + 2
sum2 116 - 2 // + 3
sum2 116 - 3 // + 4
sum2 116 - 4 // + 5
sum2 122 - 5
*/

// Stack Trace

// Maximum Call Stack Size Limit Exceeded


// console.log
// while