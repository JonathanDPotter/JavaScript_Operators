console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

// YOUR CODE HERE
let a = 20;
let b = 4;
let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;

console.log({ a, b, add, minus, multiply, dividing });

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

// YOUR CODE HERE
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";
console.log(num + str);
console.log(num + str2);
console.log(num + isPresent);
console.log(firstName + num);
console.log(isPresent + str);
console.log(firstName + lastName);

// - What is the value of: num + str? --> "1111"
// - What is the value of: num + str2? --> "11eleven"
// - What is the value of: num + isPresent? --> 12
//- What is the value of: firstName + num? --> "Frodo11"
// - What is the value of: isPresent + str?  --> "true11"
// - What is the value of: firstName + lastName? --> "FrodoBaggins"

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE

let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

console.log(val == str3);
console.log(val === str3);
console.log(!isAwake);
console.log("eleven" == str4 && val >= str3);
console.log(!isAwake || isAwake);
console.log(0 == false);
console.log(0 === false);
console.log(0 != false);
console.log(0 !== false);

// - What is the value of: val == str3? --> true
// - What is the value of: val === str3? --> false
// - What is the value of: !isAwake? true
// - What is the value of: ("eleven" == str4 && val >= str3)? --> false
// - What is the value of: (!isAwake || isAwake)? --> true
// - What is the value of: 0 == false? --> true
// - What is the value of: 0 === false? --> false
// - What is the value of: 0 != false? --> true
// - What is the value of 0 !== false? --> false
