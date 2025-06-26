// Type Casting
// Cast 

/*
    Number
    String
    Boolean // false | true
    Object
    Array
    ...
*/

let age = 30;

// Implicit Type Casting - ضمنی  - Coercion
// Explicit Type Casting - شفاف - واضح - دستور



// ToBoolean - Lookup (Search) Table 

// ""
// 0
// null
// undefined
// NaN
// false

let r1 = Boolean(0) // false
let r2 = Boolean(null) // false
let r3 = Boolean("null") // true
let r4 = Boolean([]) // true
let r5 = Boolean(" ")

// ToNumber

let n1 = Number(""); // 0
let n2 = Number("1234") // 1234
let n3 = Number(null); // 0 
let n4 = Number(undefined); // NaN, 
let n5 = Number('-19485'); // -19485
let n6 = Number('abgvreuyg') // NaN
let n7 = Number([]) // -> Number('') // 0
let n8 = Number(['2']) // 2, NaN, 0 -> Number('2') -> 2
let n9 = Number(['2', '3']) // NaN -> Number('2+3') -> NaN
let n10 = Number("2+3") // NaN

console.log({
    n1,
    n2,
    n3,
    n4,
    n5,
    n6,
    n7,
    n8,
    n9,
    n10
})

// toString
let s1 = String(0); // "0"
let s2 = String(null); // "null"
let s3 = String(undefined); // "undefined"
let s4 = String([]) // ""
let s5 = String([1]) // "1"
let s67 = String([2, null, 3]) // "2,,3" // 
let s7 = String(new Date()) // "2021-10-1"
let s8 = String({}) // 

console.log({
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    s7,
    s8
})

// از چپ به راست جفت جفت چک می‌شند.
// اگه جفتشون عدد بودن که جمع بزن
// اگه جفتشون استرینگ بودن که بچسبون بهم
// در هر جفت، اگه یکی از ورودی‌ها استرینگ بودن، به استرینگ تبدیل می‌شن

20 + 20 // 40
20 + "salam" // 20 + NaN // NaN
             // "20" + "salam" // "20salam"
"salam" + 20 // "salam20"
20 + "salam" + 20 // "20salam" + 20 // "20salam20"
"salam" + 20 + 20 // "salam20" + 20 // "salam20" + "20" // "salam2020"
20 + 20 + "salam" // 40 + "salam" // "40" + "salam" // "40salam"

20 + false // false // 20 + Number(false) // 20 + 0 // 20
20 + true // 21
true + true // 2
true + false // 1
undefined + false // NaN
Number(undefined) + Number(false)
let foo = NaN
(NaN) * 10 // NaN


10 * "salam" //
10 * Number("salam") //
10 * NaN // NaN // number

10 * "5" // 
10 * Number("5")
10 * 5 // 50

"-1" - "10"
Number(-1) - Number(10) // -1 - 10 / -11

Number("abcde") === Number("salam")

NaN === NaN // false
2 === 5 // true
"10" === "salam" // true
null === undefined // false

typeof 32 // "number"

2 == 2 // 2 === 2
"3" == "abce" // "3" === 'abce'
2 == "3" // false

2 == false 
2 == Number(false)
2 == 0 // type // 2 === 0

// "3" == []

// Number("3") == ([]) // string, number 
// 3 == 0 // 3 === 0

"3" == [3]
"3" == Primitive([3])
"3" == "3" // "3" === "3"


null == undefined // true
undefined == null // true


typeof ("object") // typeof "object" // 'string'

// Comparison
// Strict Equality Algorithm ===
// Loose Equality Alogrithm ==
// Sameness (SameValue) Object.is
// SameValueZero



10 < "20"

// 10 < 20
// "10" < "20"





ToPrimitve






"salam" + " " + "salam" // "salam salam" // "Contactnation" // "Concat"

// + (Summation - Concatenation)