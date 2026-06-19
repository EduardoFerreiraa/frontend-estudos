export const bootstrap = (): void => {
  class BankAccount {
    protected holder: string;
    protected balance: number;

    constructor(holder: string, balance: number) {
      this.holder = holder;
      this.balance = balance;
    }

    public getHolder(): string {
      return this.holder;
    }
  }

  class CheckingAccount {
    private overdrafLimit: number;

    constructor(overdrafLimit: number) {
      this.overdrafLimit = overdrafLimit;
    }

    public getOverdrafLimit(): number {
      return this.overdrafLimit;
    }
  }

  const a = new BankAccount("Jorge", 15000);
  const b = new CheckingAccount(25000);

  console.log(a);
  console.log(typeof a);
  console.log(a instanceof CheckingAccount);

  function showDetails(account: BankAccount | CheckingAccount): void {
    if (account instanceof BankAccount) {
      console.log(account.getHolder);
    } else if (account instanceof CheckingAccount) {
      console.log(account.getOverdrafLimit);
    } else {
      console.error("Conta não identificada");
    }
  }

  showDetails(a);
  showDetails(b);
};
