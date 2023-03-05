class Company { // parent class  // DRY code
    constructor() {
    }
    empinfo() {
        console.log('Dummy Company');
    }
}

class Emp extends Company {  // child class
    constructor(name) {
        super();
        this.name = name; // this is reffering to current object as variable assign
        console.log('i am constructor');
    }
    skills() { // method
        console.log('I am method is a function' + ' ' + this.name);
    }
    rolls() { // method
        console.log('I am also method');
    }
}

/* const emp1 // variable
new Emp(); // constructor call */

const emp1 = new Emp('Gokul')  // object creation
emp1.skills();
emp1.empinfo();
