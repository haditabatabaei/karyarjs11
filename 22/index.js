//
// Object Oriented Programming (برنامه نویسی شئ گرا)

// 1 - Abstraction (انتزاعی کردن)
// 2 - Encapsulation (کپسوله کردن)
// 3 - Liskov Subsitution (Inheritence - ارث بری)
// 4 - Open(To Extension)-Closed(To Modifiction) Principle

// Person -> Student -> 
//        -> Civilian -> 

// Vehicle -> Aircraft
//              -> Commercial
//              -> Military
//         -> Ship
//         -> Car
//               -> SportCar
//               -> Sedan

// this

// نقشه(راهنما) برای ایجاد آبجکت است.
// property (data variable)
// method (function)
// class Vehicle {
//     constructor(options) {
//         const speed = options.speed;

//         this.speed = speed
//         this.increaseSpeed = function() {
//             this.speed++;
//         }
//     }
// }

/*
    public property
    private property
*/
class Vehicle {
    topSpeed;
    #speed = 0;

    constructor(options) {
       this.topSpeed = options.topSpeed;
    }

    increaseSpeed() {
        const newSpeed = this.#speed + 20;

        if(newSpeed > this.topSpeed) {
            this.#speed = this.topSpeed;
        } else {
            this.#speed = newSpeed;
        }
    }

    showSpeed() {
        console.log('Speed is ', this.#speed)
    }
}

class Car extends Vehicle {
    color;

    constructor(options) {
        super(options)
        this.color = options.color || 'White';
    }

    showSpeed() {
        console.log('The Car is', this.color)
    }
}

function makeVehicle(options) {
    let topSpeed = options.topSpeed;
    let speed = 0;

    function increaseSpeed() {
        const newSpeed = speed + 20;

        if(newSpeed > options.topSpeed) {
            speed = options.topSpeed;
        } else {
            speed = newSpeed;
        }
    }

    function showSpeed() {
        console.log('Speed is ', speed)
    }

    return {
        showSpeed,
        increaseSpeed,
        topSpeed,
    }
}

const v4 = Vehicle({ topSpeed: 100 })

// let foo = {
//     sayHi() {
//         console.log('Hi')
//     },
//     name: 'ipewjfef'
// }

let v1 = new Vehicle({ topSpeed: 35 }) //
let c1 = new Car({ topSpeed: 50, color: 'Black' })
let c2 = new Car({ topSpeed: 100, color: 'Red' })

// let v2 = new Vehicle({ topSpeed: 400 })

// console.log(v1.speed)
// v1.showSpeed()
// v1.increaseSpeed()
// v1.showSpeed()
// v1.increaseSpeed();
// v1.showSpeed()

// c1.showSpeed()
// v1.increaseSpeed() = 100
// console.log(v1.speed)
// v2.increaseSpeed()

// console.log(v1.speed)
// console.log(v2.speed)




// باید حفظ کنید
// this keyword:
/*
    در مورد فانکشن دکرلیشن ها:
    اگر فانکشن در اسکوپ گلوبال فراخوانی بشه، مقدار متغیر می‌شه گلوبال
    اگر فانکشن به عنوان متد روی یک آبجکت فراخوانی بشه، مقدار متغیر می‌شه اون آبجکت
    در فانکشن‌های عادی، مقدار متغیر به نوعی که تابع فراخوانی می شود وابسته است.

    - در مورد کلاس‌ها، دیس همیشه آبجکتی‌است که اون کلاس خواهد ساخت

    - در مورد arrow function ها
    مقدار دیس، بستگی به جایی دارد که تابع تعریف شده - مقدار دیس، می‌شود اولین دیس اسکوپ بالاسرش
*/


function testThis() {
    console.log(this)
}

testThis()


let person = {
    testThis: function () {
        console.log(this)
    }
}

testThis() // this === global
person.testThis() // this === person

let newFn = person.testThis;

newFn() // this === global

// let person2 = {
//     foo: {
//         myMethod() {
//             this.asghar = 'folan'
//             let someFn = () => { 
//                 console.log(this)
//             }

//             someFn()
//         }
//     }
// }

// person2.foo.someFn() // logs global











var firstName = 'Hadi'
let manager = {
    firstName: 'Mohammad',
    insideManager: {
        changeName: (function () {
            this.firstName = 'Kiana'
        }).bind(this)
    },
    changeToNeda() {
        this.firstName = 'Neda'
    }
}

let changeToNeda = manager.changeToNeda;
changeToNeda(); // this === global
// global.firstName === 'Neda'

manager.changeToNeda(); // this === manager
// manager.firstName === 'Neda'

manager.insideManager.changeName() // this === global
// global.firstName === 'Kiana'

// MohammadAli - Neda - Kiana - Hadi
console.log(firstName) // global.firstName // Mohammad       Hadi   Hadi   Kiana
console.log(manager.firstName) // Neda   Neda   Neda   Neda






// .bind , .call , .apply
// 
function testHadi() {

}


// bound function
let newTestHadi = testHadi.bind({ name: 'Hadi' })

newTestHadi() // this === { name: 'Hadi' }

testHadi.call({ name: 'Hadi'}, 1, 2, 3, 4, 5)

testHadi.apply({ name: 'Hadi'}, [1, 2, 3, 4, 5])

// arrow functions can not bind
let foo = () => {}

// foo.bind()


// build / bundler



// می‌تونید به چشم یک سینتکس جایگزین برای پرامیس بهش نگاه کنید
// async await


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000)
})


p1.then((value) => {
    console.log('Resolve')
    value.json().then(() => {
        
    })
}).catch(err => {

})
console.log('Before')

try {
    const value = await p1; // صبر کن
} catch (err) {

}
console.log('After')



async function someProcess() {
   try {
    const value = await p1; // صبر کن
    } catch (err) {

    }
}


async function http(url, options) {
    try {
        const response = await fetch(url, options)
        try {
            const responseBody = await response.json()
        } catch (error) {

        }
        return { status: response.status, data: responesBody }
    } catch (error) {
        // Network error
        // JSON Parse error
        return { data: 'Something went wrong.'}
    }
}

// Top Level await
