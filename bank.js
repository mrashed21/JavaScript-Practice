function bankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: function (amount) {
      balance += amount;
      console.log(`Deposit: ${amount} , Current Balance: ${balance}`);
    },
    withdraw: function (amount) {
      if (balance > amount) {
        balance -= amount;
        console.log(`Withdraw: ${amount} , Current Balance: ${balance}`);
      } else {
        console.log(`Insufficient Balance`);
      }
    },
    checkBalance: function (amount) {
      console.log(`Current Balance: ${balance}`);
    },
  };
}
let myAccount = bankAccount(600);
myAccount.deposit(1500);
myAccount.withdraw(3000);
myAccount.checkBalance();

/* Deposit: 1500 , Current Balance: 2100
  Insufficient Balance
  Current Balance: 2100 */
