// undefined - this particular wall space has never given any value but it might be given some value later
// plain Wall nothing is there
//let a; // currently it is not defined so that means it is undefined

// null - the holder is in place but the roll is completely missing so there wont be any paper
// the holder

// let b = 10;
// b = null
// be more or less gives the impression of empty value now that the value is empty

// 0 - the holder has the roll but no toilet paper that means the paper got exhausted
// plain Wall --> the holder --> the roller

// Non-zero value -
// plain Wall --> the holder --> the roller --> toilet paper

var marks = 100;
var name = 'sanket';
var age;
var company = null;
var salary = undefined;
var student = false;

console.log(marks);                 // 100
console.log(name);                  // sanket
console.log(age);                   // undefined
console.log(company);               // null
console.log(salary);                // undefined
console.log(student);               // false

var user = {
  name: 'Sanket',
  company: 'Google',
  age: 24,
};

console.log('Details of the user is ', user);
