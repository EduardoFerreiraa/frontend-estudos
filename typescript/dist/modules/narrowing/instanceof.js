export const bootstrap = () => {
    class BankAccount {
        holder;
        balance;
        constructor(holder, balance) {
            this.holder = holder;
            this.balance = balance;
        }
        getHolder() {
            return this.holder;
        }
    }
    class CheckingAccount {
        overdrafLimit;
        constructor(overdrafLimit) {
            this.overdrafLimit = overdrafLimit;
        }
        getOverdrafLimit() {
            return this.overdrafLimit;
        }
    }
    const a = new BankAccount("Jorge", 15000);
    const b = new CheckingAccount(25000);
    console.log(a);
    console.log(typeof a);
    console.log(a instanceof CheckingAccount);
    function showDetails(account) {
        if (account instanceof BankAccount) {
            console.log(account.getHolder);
        }
        else if (account instanceof CheckingAccount) {
            console.log(account.getOverdrafLimit);
        }
        else {
            console.error("Conta não identificada");
        }
    }
    showDetails(a);
    showDetails(b);
};
