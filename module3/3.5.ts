{
  //access modifiers
  class BankAccount {
    readonly id: number;
    name: string;
    //    readonly balance: number; //can't make readonly because
    //balance is changeable
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

   public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount{
    test(){
        this._balance
    }

  }


  const goribManusherAccount = new BankAccount(111, "gorib", 20);
  // goribManusherAccount.balance= 0
  goribManusherAccount.addDeposit(0);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);

  //end
}
