// What values are considered Falsy in JS ??

// +0 , -0 , NaN , null , undefined , '' , false

// Apart from this everything is truthy value

// Coercion (type Interconversion)

// Short Circuiting

// In ( AND (&&) )
// If the first input is false it doesn't evaluate the second input and immediately return the (first input)
console.log(false && 0); // false value false
console.log(-0 && 1); // false value -0
console.log(NaN && 100); // false value NaN
console.log(null && -90); // false value null
console.log(undefined && 800); // false value undefined

// If the first input is true then the second input has to be evaluated and then (second input) is return
console.log(10 && 6); // second input 6
console.log(true && 100); // second input 100
console.log(100 && -100); // second input -100

console.log(true && 0); // false value 0
console.log(true && -0); // false value -0
console.log(true && NaN); // false value NaN
console.log(true && null); // false value null
console.log(true && undefined); // false value undefined

console.log(10 > 6 && 6 < 7); // second input which is true

// In ( OR (||) )

// If the first input is true it doesn't evaluate the second input and immediately return the (first input)

console.log(10 || 6); // first input 10
console.log(true || 100); // first input true
console.log(100 || -100); // first input 100

// If the first input is false then the second input has to be evaluated and then (second input) is return

console.log(false || 0); // second value 0
console.log(-0 || 1); // second value 1
console.log(NaN || 100); // second value 100
console.log(null || -90); // second value -90
console.log(undefined || 800); // second value 800

// Exercise

console.log(true && false); // false
console.log(false || false); // false
console.log(true && true); // true
console.log(5 < 10 && 6 < 3); // false
console.log(!false); // true
console.log(6 && 10); // 10
console.log(10 || 0); // 10
