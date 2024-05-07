{
//getter & setter

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


    set deposit(amount){
        this._balance = this.balance + amount;
    }




//    public addDeposit(amount: number) {
//       this._balance = this._balance + amount;
//     }


//Getter
get balance(){
    return this._balance;
}



//     public getBalance() {
//       return this._balance;
//     }
  }

  class StudentAccount extends BankAccount{
    test(){
        this._balance
    }

  }


  const goribManusherAccount = new BankAccount(111, "gorib", 50);
//   // goribManusherAccount.balance= 0
//   goribManusherAccount.addDeposit(0); //function call korte hocche
goribManusherAccount.deposit = 50


//   const myBalance=goribManusherAccount.getBalance();//function call korte hocche

const myBalance = goribManusherAccount.balance //property er moto kre

  console.log(myBalance);











    //end
}