// Promise Chain
// Scope Chain
// Array Methods Chain

// let numbers = [1, 2, 3, 4, 5];
// let mappedNumbers = numbers.map()
// let filteredNumbers = mappedNumbers.filter(...);
// let result = filteredNumbers.every();

// let result = numbers
//     .map()
//     .filter()
//     .every()

// Promise Chain
// const myPromise = new Promise(
//     (resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.random()
//             if(random <= 0.5) {
//                 reject('Something Went Wrong')
//             } else {
//                 resolve({ message: 'Timeout Ran.' })
//             }
//         }, 3500)
//     }
// )

// let newPromise = myPromise.then()

// myPromise.then().catch().then()
// myPromise.then().then().then()
// myPromise
//     .catch()
//     .then()
//     .catch()
//     .then()
//     .finally()

// myPromise.then().then().catch().finally()
// myPromise
//     .then(() => {})
//     .catch(() => {})return
//     .finally(() => {})

// myPromise
//     .then(() => {
//         let result = 2 + 3;
//         return 'resolved from first then'
//     })
//     .then(() => {
//         return 'resolved from second then'
//     })
//     .catch((reason) => {
//         (undefined).hi()
//         return 'resolved from catch'
//     })
//     .then(
//         (value) => {
//             // value = ['resolved from catch', 'resolved from second then']
//             // value === 'salam'
//         }
//     )
//     .catch((reason) => {
//         // reason: Can not call folan of undefined
//     })
    // .finally(() => {})


// Object.keys()
// Promise.resolve('First Promise Resolved')
//     .then((value) => {
//         console.log({ value })
//         (undefined).hi() // Syntax Error
//         return 'Second Promise Resolved'
//     })
//     .catch((reason) => {
//         console.log({ reason })

//         (null).asghar()
//         return 'Promise Rejection Handled.'
//     })
//     .catch((reason2) => {
//         console.log({ reason2 })
//         return 'Promise Second Rejection Handled'
//     })
//     .then((value2) => {
//         console.log({ value2 })
//         return value2 + ' ' + value2
//     })
//     .then((value3) => {
//         console.log({ value3 })
//     })






// myPromise.catch((error) => {
//     console.log({ error })
//     // return undefined
// }).then((value) => {
//     if(value) {
//         return
//     }
// })

/*
    let resultPromise = new Promise((resolve) => {
        resolve()
    })

*/
// Promise.reject()








// in Node JS Environment
// console.log(global)

// global.requestAnim

// global.setTimeout() 
// setTimeout()

// if() {
//     if() {
//         function() {
//             global.setTimeout()
//         }
//     }
// }

// console.log(global)
// console.log({
//     raf: globalThis.requestAnimationFrame
// })


// Polyfill
// if(!requestAnimationFrame) {
//     global.requestAnimationFrame = () => {}
// }


// Object.keys()



