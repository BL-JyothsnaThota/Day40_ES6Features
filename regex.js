// Simple pattern
const pattern = /hello/;

console.log(pattern.test("hello world")); // true

const emailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-z]+\.com$/;

const email1 = "abc.xyz@gmail.com";
const email2 = "wrong@email";

console.log(emailPattern.test(email1)); // true
console.log(emailPattern.test(email2)); // false

// At least 8 chars + 1 uppercase
const passwordPattern = /^(?=.*[A-Z]).{8,}$/;

console.log(passwordPattern.test("Hello123")); // true
console.log(passwordPattern.test("hello"));    // false