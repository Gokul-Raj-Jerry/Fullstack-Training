const Person = require('./es5par');

// inheriting parent class
class Student extends Person {

}

let student1 = new Student('Jack');
student1.greet();

