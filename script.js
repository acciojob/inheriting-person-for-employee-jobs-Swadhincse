// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add a greet method to the Person prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Constructor function for Employee
function Employee(name, age, jobTitle) {
    // Call the Person constructor to set name and age
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Set the constructor property back to Employee
Employee.prototype.constructor = Employee;

// Add a jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Example usage
const person1 = new Person("Alice", 25);
person1.greet();

const employee1 = new Employee("Bob", 30, "Engineer");
employee1.greet();
employee1.jobGreet();
