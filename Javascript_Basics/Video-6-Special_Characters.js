// \n - new line

// \t - tab

// "the new apple iphone \n has been launched"

// the JS will not read it as black slash n it will read as new line character

var text = 'the new apple iphone \n has been launched';
console.log(text);
// the new apple iphone
//  has been launched

let text2 = 'the new apple iphone14 \t has been launched';
console.log(text2); // the new apple iphone14 	 has been launched

let text3 = 'the new apple iphone14 \\ has been launched';
console.log(text3); //the new apple iphone14 \ has been launched

let name = 'sanket';
let age = 24;

console.log(name, '\n', age);
// sanket 
//  24
