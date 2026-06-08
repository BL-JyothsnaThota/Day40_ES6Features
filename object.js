const person = {
    name: "Jyothsna",
    age: 22,
    city: "Chennai",

    // Method inside object
    greet: function () {
        return "Hello, my name is " + this.name;
    }
};

console.log(person.name);
console.log(person["age"]);
console.log(person.greet());

const student = {
    name: "Ram",
    marks: 90,

    // WRONG way (this won't work properly)
    show: () => {
        console.log(this.name); // undefined
    },

    // Correct way
    display() {
        console.log("Name:", this.name);
    }
};

student.display();