class Login {
  constructor() {
    // initialise the object value
    console.log("I am constructor");
  }
  getLogin() {
    // method
    console.log("Get Request to Server");
  }
  errLogin() {
    // method
    console.log();
  }
  logiBtn() {
    // method
    console.log("Login Btn");
  }
}

// Extends is Inheretence
let mylog = new Login(); // Object Creation
mylog.getLogin();

class studentLogin extends LoginPage {
  getstudent() {}
}
class teacherLogin extends LoginPage {
  getteacher() {}
}
class parentLogin extends LoginPage {
  getparent() {}
}
