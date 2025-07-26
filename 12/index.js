// setTimeout
// setInterval
// Task(کار) Queue (Task Queue + Call Stack = Event Loop)
// Promise

let seconds = 0;
let error = null;

// let timerId = setInterval(() => {
//     console.log('Second: ', seconds)
//     if(seconds <= 5) {
//         seconds++;
//     } else {
//         seconds = 0;
//         error = 'Errored'
//         clearInterval(timerId)
//     }
// }, 1000)


// function main() {
//     let timeoutId = setTimeout(
//         /* handler */ () => {
//             console.log('Middle')
//             while(true) {}
//         },
//         1000
//     )

//     let nextTimeoutId = setTimeout(
//     /* handler */ () => {
//         console.log('Next Timeout')
//     },
//     100
// )
// }

// setInterval(() => {
//     console.log('hi')
// }, 1000)
// setInterval(() => {
//     console.log('hello')
// }, 2000)
// main()






/* 
    MohammadAli: Top Middle Bottom 
    MohammadAkbari: Top Bottom Middle
*/

/*
    while(true) {}
    Stack:
*/

// Queue: [handler]

// clearTimeout(timeoutId)


// let intervalId = setInterval(
//     () => {
//         console.log('Called Every 1 second')
//     },
//     1000
// )

// setTimeout(() => {
//     clearInterval(intervalId)
// }, 4000)


// Promise
/*
    ۱ - ممکنه ما ندونیم اصلا کی شروع می‌شند
    ۲ - ممکنه طول بشکن
    ۳ - ممکنه اصن کامل نشند و وسطش خطا بخورن
    عدم اطمینان وجود داره.
*/

/* 
    ۳ وضعیت - State
    1 - Pending (یعنی در حال انجام)
    2 - Resolved (با موفقیت انجام شد)
    3 - Rejected (با موفقیت انجام نشد)
    4 - Fullfilled (تموم شد (ممکنه موفق/ناموفق باشه))
*/

// const myPromise = new Promise(
//     (resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.random()
//             // if(random <= 0.5) {
//                 reject('Something Went Wrong')
//             // } else {
//             //     resolve({ message: 'Timeout Ran.' })
//             // }
//         }, 3500)
//     }
// )

const myPromise = new Promise(
    (resolve, reject) => {
        resolve()
    }
)


console.log('Top')

setTimeout(() => {
    console.log('TIMEOUT RAN')
}, 100)

// async
myPromise.then(
    () => {
        console.log('Promise Resolved')
    }
)

myPromise.catch(
    (reason) => {
        
    }
)

console.log('ewohfwf')

