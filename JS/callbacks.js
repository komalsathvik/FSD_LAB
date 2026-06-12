// Callback means: pass one function as an argument to another function.

function greetUser(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayWelcome() {
  console.log("Welcome to JavaScript practice!");
}

greetUser("Mksat", sayWelcome);

// Another simple callback example.
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log("Add:", calculate(5, 3, add));
console.log("Multiply:", calculate(5, 3, multiply));
