class bank{
    createAccount(accno,pName,pan,branch,phone,bal){
        this.accountNo=accno;
        this.personName=pName;
        this.pan=pan;
        this.branch=branch;
        this.phone=phone;
        this.balance=bal;
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log(`transaction failed insufficient balance on your ${this.accountNo}`);
        }
        else{
            this.balance-=amount
            console.log(`Your account ${this.accountNo}has been debited with amount ${amount} Your available balance: ${this.balance}`);
        }
    }
    deposit(amount){
        this.balance+=amount;
        console.log(`Your account ${this.accountNo}has been credit with amount ${amount} Your available balance: ${this.balance}`);
    }
    balanceEnquiry(){
        console.log(`Your available balance= ${this.balance}`);
    }
}

var  Bank= new bank()
Bank.createAccount(1010,"arjun",1234,"kakkanad",789045,2000)
Bank.withdraw(1000)
Bank.deposit(3000)
Bank.balanceEnquiry()