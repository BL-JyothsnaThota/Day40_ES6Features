// Normal Function
function add(a, b) {
    return a + b;
}

// Arrow Function (same)
const addArrow = (a, b) => a + b;

console.log("Add:", addArrow(5, 3));
// Single parameter
const square = x => x * x;

// No parameter
const greet = () => "Hello JS";

// Multiple lines
const multiply = (a, b) => {
    let result = a * b;
    return result;
};

console.log(square(4));
console.log(greet());
console.log(multiply(3, 5));