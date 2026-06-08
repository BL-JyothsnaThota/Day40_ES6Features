class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    display() {
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }
}

// Object creation
const emp1 = new Employee("John", 50000);
emp1.display();

class Manager extends Employee {
    constructor(name, salary, dept) {
        super(name, salary);
        this.dept = dept;
    }

    showDept() {
        console.log("Department:", this.dept);
    }
}

const m1 = new Manager("Alice", 80000, "IT");
m1.display();
m1.showDept();