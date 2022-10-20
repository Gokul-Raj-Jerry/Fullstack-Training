class Account {
  min_Bal = 500
  open_Account() {
    console.log('Account Opened Successfully')
  }
  deposite_Amount() {
    console.log('Account Deposited Successfully')
  }
  get_Statement() {
    console.log('Show Statement')
  }
}

/* let a1 = new Account();
console.log(a1.min_Bal) */

let b1 = new Account();
b1.deposite_Amount(5);