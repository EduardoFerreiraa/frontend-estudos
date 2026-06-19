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
    class CheckingAccount extends BankAccount {
        overdrafLimit;
        constructor(holder, balance, overdrafLimit) {
            super(holder, balance);
            this.overdrafLimit = overdrafLimit;
        }
        getOverdrafLimit() {
            return this.overdrafLimit;
        }
    }
    class SavingsAccount extends BankAccount {
        interestRate;
        constructor(holder, balance, interestRate) {
            super(holder, balance);
            this.interestRate = interestRate;
        }
        getInterestRate() {
            return this.interestRate;
        }
    }
    // lista de contas bancárias (LSP)
    const accountList = [
        new CheckingAccount("Alice", 1500, 300),
        new SavingsAccount("João", 4000, 0.005),
        new CheckingAccount("Maria", 10000, 3000),
        new SavingsAccount("Paulo", 1000, 0.005),
    ];
    function processAccounts(accounts) {
        accounts.forEach((account) => {
            if (account instanceof CheckingAccount) {
                console.log("Processando a conta corrente: ", account.getOverdrafLimit());
            }
            else if (account instanceof SavingsAccount) {
                console.log("Processando a conta poupança: ", account.getInterestRate());
            }
            console.log("--------------------------");
        });
    }
    processAccounts(accountList);
};
